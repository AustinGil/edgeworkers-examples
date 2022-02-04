/**
 * Function to get the flag emoji of a country based on the two letter ISO country code
 *
 * @param {string} countryCode
 */
function getFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127_397 + char.codePointAt(undefined))
    );
}

/**
 * @param {string} countryCode 
 */
function getGreetingFromCountry(countryCode) {
  countryCode = countryCode.toUpperCase()
  const languageMap = new Map([
    ["FR", "Bonjour"],
    ["DE", "Hallo"],
    ["IT", "Ciao"],
    ["ES", "Hola"],
    ["PT", "Olá"],
    ["RU", "Здравствуйте"],
    ["TR", "Merhaba"],
    ["PL", "Cześć"],
    ["MX", "Hola"],
    ["AR", "Hola"],
    ["NL", "Hallo"],
    ["BE", "Hallo"],
    ["DK", "Hej"],
    ["NO", "Hei"],
    ["SE", "Hej"],
    ["FI", "Hei"],
    ["JP", "こんにちは"],
    ["KR", "안녕하세요"],
    ["CN", "你好"],
    ["TW", "你好"],
    ["HK", "你好"],
    ["SG", "你好"],
    ["MY", "Selamat Pagi"],
    ["ID", "Selamat Pagi"],
    ["TH", "สวัสดี"],
    ["VN", "Chào bạn"],
    ["PH", "Kumusta"],
    ["IN", "Namaste"],
    ["AU", "G'day"],
    ["NZ", "G'day"],
    ["CA", "Hello"],
    ["US", "Hello"],
    ["GB", "Hello"],
    ["IE", "Hello"],
    ["SG", "Hello"],
  ])
  return languageMap.get(countryCode) || "Hello"
}

/**
 * The onClientRequest event handler.
 * This event happens for every request as the request is received, before checking if a response is available in cache. Use this event for request modifications before going to cache or to origin. Here's an example of a function that modifies the response based on user location.
 * @see https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions
 * 
 * @param {EW.IngressClientRequest} request The request object @see https://techdocs.akamai.com/edgeworkers/docs/request-object
 */
export async function onClientRequest(request) {
  /**
   * Grab details about the user's location
   * @see https://techdocs.akamai.com/edgeworkers/docs/user-location-object
   */
  const geo = {
    city: request.userLocation.city ? request.userLocation.city : 'N/A',
    zipCode: request.userLocation.zipCode ? request.userLocation.zipCode : 'N/A',
    region: request.userLocation.region ? request.userLocation.region : 'N/A',
    country: request.userLocation.country ? request.userLocation.country : 'N/A',
    continent: request.userLocation.continent ? request.userLocation.continent : 'N/A',
  };
  const flag = getFlagEmoji(geo.country);
  const greeting = getGreetingFromCountry(geo.country);

  /**
   * The request.respondWith method constructs a response for the given request, rather than fetching a response from cache or the origin.
   * Responses created through the respondWith() method can return a body with a maximum of 2048 characters.
   * @see https://techdocs.akamai.com/edgeworkers/docs/request-object#respondwith
   */
  request.respondWith(
    200,
    {},
    `<html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Akamai EdgeWorkers Geolocation</title>
        <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌎</text></svg>" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/bedrocss">
        <style>
          body { max-width: 60rem; margin: auto; padding: 2rem; font-family: Roboto, system-ui; }
          a { color: #017ac6; }
        </style>
      </head>
      <body>

        <h1>Akamai EdgeWorkers Geolocation</h1>

        <p>${greeting} from the nearest EdgeWorker to ${geo.city}, ${flag}. (👈 see what we did there?)</p>

        <p>You can't do <b>that</b> with just a CDN, but you <b>can</b> with EdgeWorkers!</p>

        <p>Here's some more data about your location:</p>
        <pre>${JSON.stringify(geo, null, 2)}</pre>

        <p>You could use this information to customize a user's experience based on location. And since the location is based on the server and not the user's specific location, you don't have to worry about privacy issues or legislation like GDPR.</p>

        <p>Here's some ideas to get you started:</p>
        <ul>
          <li>Greet users in different languages</li>
          <li>Show monetary values in the local currency</li>
          <li>Block access from embargoed countries</li>
          <li>Gather regional analytics without client-side JavaScript</li>
        </ul>
        
        <p><a href="https://techdocs.akamai.com/edgeworkers/docs/user-location-object">Learn more about EdgeWorkers' location object 📄</a></p>
      </body>
    </html>`
  );
}

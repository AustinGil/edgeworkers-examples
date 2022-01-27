/**
 * Function to get the flag emoji of a country based on the two letter ISO country code
 *
 * @param {string} countryCode
 */
 function getFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127_397 + char.codePointAt())
    );
}

/**
 * The onClientRequest event handler.
 * This event happens for every request as the request is received, before checking if a response is available in cache. Use this event for request modifications before going to cache or to origin. Here's an example of a function that modifies the response based on user location.
 * @see https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions
 * 
 * @param {EW.IngressClientRequest} request The request object @see https://techdocs.akamai.com/edgeworkers/docs/request-object
 */
export function onClientRequest(request) {
  /**
   * The request.userLocation request object contains properties that specify the geographic location of a given request.
   * @see https://techdocs.akamai.com/edgeworkers/docs/user-location-object
   */
  const info = {
    country: request.userLocation.country ? request.userLocation.country : 'N/A',
    region: request.userLocation.region ? request.userLocation.region : 'N/A',
    city: request.userLocation.city ? request.userLocation.city : 'N/A',
  };

  request.respondWith(
    200,
    {},
    `<html>
    <body>
      <h1>Hello From Akamai EdgeWorkers</h1>
      <p><a href="https://www.akamai.com/products/serverless-computing-edgeworkers">Akamai EdgeWorkers</a> run your code in over 250K location around the world. This reduces latency and makes your application respond faster.</p>
      
      <p>For example, this is EdgeWorker is running as close to ${JSON.stringify({ geoInfo: info.city })} <br />
    </body>
    </html>`
  );
}
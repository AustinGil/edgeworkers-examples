/**
 * The onClientRequest event handler.
 * This event happens for every request as the request is received, before checking if a response is available in cache. Use this event for request modifications before going to cache or to origin. Here's an example of a function that modifies the response based on user location.
 * @see https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions
 * 
 * @param {EW.IngressClientRequest} request The request object @see https://techdocs.akamai.com/edgeworkers/docs/request-object
 */
export function onClientRequest(request) {
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
        <title>Hello Akamai EdgeWorkers 👋</title>
        <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/bedrocss">
        <style>
          body { max-width: 60rem; margin: auto; padding: 2rem; font-family: Roboto, system-ui; }
          a { color: #017ac6; }
        </style>
      </head>
      <body>
        <h1>Hello From Akamai EdgeWorkers 👋</h1>
    
        <p>EdgeWorkers are serverless compute environments running on Akamai's network 📡🌐</p>
        
        <p>Akamai has over 250,000 edge servers in more than 135 countries and over 1,400 networks around the world 🌎🤯</p>
        
        <p>That means you can run serverless functions super close to your users, reducing response times, and giving them a faster experience no matter where they are 🚴‍♀️🏎🚄🛫🚀
        <br>
        <br>
        (Besides maybe Antarctica. Sorry penguinos 🐧☃)
        </p>

        <p><a href="https://techdocs.akamai.com/edgeworkers/docs/welcome-to-edgeworkers">Learn more about EdgeWorkers 📄</a></p>
      </body>`
  );
}
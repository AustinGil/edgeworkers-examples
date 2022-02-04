/**
 * The cookies module is available to assist in cookie manipulation. This module exports two structs, Cookies and SetCookie, each corresponding to one "Cookie" or "Set-Cookie" header respectively.
 * @see https://techdocs.akamai.com/edgeworkers/docs/cookies
 */
import { Cookies } from 'cookies';

/**
 * The onClientRequest event handler.
 * This event happens for every request as the request is received, before checking if a response is available in cache. Use this event for request modifications before going to cache or to origin. Here's an example of a function that modifies the response based on user location.
 * @see https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions
 * 
 * @param {EW.IngressClientRequest} request The request object @see https://techdocs.akamai.com/edgeworkers/docs/request-object
 */
export function onClientRequest(request) {
  /**
   * The `request.getHeader()` method returns the of a given header by name. The header names are case insensitive. If the header doesn't exist, a value of `undefined` is returned.
   * @see https://techdocs.akamai.com/edgeworkers/docs/request-object#getheader 
   */
  const cookies = new Cookies(request.getHeader('Cookie'));
  const name = cookies.get('name');

  /**
   * Cookies are a storage option that can be accessed on both server and the client (besides HttpOnly cookies). They can be useful for session management or personalization.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
   */
  const content = name
    ? `<h1>Welcome back, ${name} 👋</h1>
      <p>(☝ we got that info from the browser cookies)</p>
      <p>Cookies are awesome because they can be accessed from the browser AND on the server.</p>
      <p>This allows you to create more personalized experiences for return users without relying on client-side code.</p>
      <p>With <a href="https://www.akamai.com/products/serverless-computing-edgeworkers">Akamai EdgeWorkers</a>, you can manipulate cookies from the nearest edge server to their location.</p>
      <p>That can help reduce latency ⏳, speed up your response times 🚀, and improve user experience😀</p>
      <br>
      <button id="clear-cookies">Clear cookies</button>`
    : `<h1>🍪 Edge Cookies 😋</h1>
      <p>(probably not the kind you're thinking)</p>
      <p>Looks like you're new around here.</p>
      <br>
      <form>
        <label>What's your name?
          <input name="name">
        </label>
        <button type="submit">Submit</button>
      </form>`

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
        <title>Akamai EdgeWorkers Cookies</title>
        <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍪</text></svg>" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/bedrocss">
        <style>
          body { max-width: 60rem; margin: auto; padding: 2rem; font-family: Roboto, system-ui; }
          a { color: #017ac6; }
        </style>
      </head>
      <body>
        ${content}
      <script>
        const form = document.querySelector('form')
        const clear = document.querySelector('#clear-cookies')
        if (form) {
          form.addEventListener('submit', (event) => {
            event.preventDefault()
            const name = event.target.name.value
            document.cookie = name ? 'name=' + name : ''
            window.location.reload()
          })
        }
        if (clear) {
          clear.addEventListener('click', () => {
            document.cookie = "name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            window.location.reload()
          })
        }
      </script>
      </body>
    </html>`
  );
}
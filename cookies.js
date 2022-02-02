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
  const cookies = new Cookies(request.getHeader('Cookie'));
  const name = cookies.get('name');

  const content = name
    ? `<p>Welcome back ${name}.</p>
       <p>That information was stored in browser cookies.</p>
       <p>Cookies are awesome because the can be access from the browser AND on the server. Including EdgeWorkers!</p>
       <p>This allows you to create more personalized experiences for return users.</p>
       <button id="clear-cookies">Clear cookies</button>`
    : `<form>
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
     </body>`
  );
}
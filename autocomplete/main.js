/**
 * The URLSearchParams() constructor creates and returns a new URLSearchParams object.
 *
 * @see https://techdocs.akamai.com/edgeworkers/docs/url-search-params
 * @see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
 */
import URLSearchParams from 'url-search-params';
/**
 * QuickScore.js - A JavaScript string-scoring and fuzzy-matching library based on the Quicksilver algorithm, designed for smart auto-complete.
 *
 * @see https://github.com/fwextensions/quick-score
 */
import { QuickScore } from './quick-score.js';
import list from './list.js';

/**
 * The onClientRequest event handler.
 * This event happens for every request as the request is received, before checking if a response is available in cache. Use this event for request modifications before going to cache or to origin. Here's an example of a function that modifies the response based on user location.
 *
 * @see https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions
 * @param {EW.IngressClientRequest} request The request object @see https://techdocs.akamai.com/edgeworkers/docs/request-object
 */
export async function onClientRequest(request) {
  const search = new URLSearchParams(request.query);
  let query = '';

  /**
   * See if the search query contains the `q` parameter. If so, use the value of the `q` parameter as the query to search for.
   */
  if (search.has('q')) {
    query = search.get('q');
  }

  const qs = new QuickScore(list, ['name', 'id', 'num']);

  /**
   * @type {Array<{
   * item: typeof list[number],
   * score: number,
   * scoreKey: string,
   * scoreValue: string,
   * scores: { name: number, num: number },
   * matches: { name: number[][], num: number[][] }
   * }>}
   */
  const results = qs.search(query);
  results.length = Math.min(results.length, 3);

  request.respondWith(
    200,
    {},
    `<html>
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width,initial-scale=1" />
         <title>Autosuggest</title>
         <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'><text y='.9em' font-size='9'>🔍</text></svg>" />
         <link rel="stylesheet" type="text/css" href="https://unpkg.com/bedrocss">
         <style>
           body { max-width: 60rem; margin: auto; padding: 2rem; font-family: Roboto, Helvetica, Arial, sans-serif; }
           a { color: #017ac6; }
         </style>
       </head>
       <body>
         <h1>Autosuggest</h1>
         <p>With EdgeWorkers, you can move search related logic to an edge server running super close to your user.</p>
         <ul>
           <li>Smaller client-side bundles: faster downloads, reduce data for users.</li>
           <li>Closer to users than origin servers: reduced round-trip latency, faster results.</li>
         </ul>        
         <p>You could improve it even more with JavaScript to update the results as the user types.</p>
         <br>
         <form>
           <label for="q">
             Search Gen 1 Pokemon:
             <input id="q" name="q" value="${query}" />
           </label>
           <button type="submit">Search</button>
         </form>
 
         ${query.length === 0
      ? ''
      : results.length === 0
        ? '<br><p>No results found.</p>'
        : `<br><h2>Results (max 3)</h2>
         <ul>
         ${results
          .map(({ item }) => {
            return `<li><img src="http://www.serebii.net/pokemongo/pokemon/${item.num}.png" alt="${item.name}" />#${item.num} - ${item.name}</li>`;
          })
          .join('')}
         </ul>`
    }
       </body>
     </html>`
  );
}

/**
 * EdgeWorkers supports HTTP requests made from within an event handler. These HTTP sub-requests provide a logical way to fetch resources asynchronously across the network.
 * @see https://techdocs.akamai.com/edgeworkers/docs/http-request
 */
import { httpRequest } from 'http-request';
/**
 * This module is available to use in your EdgeWorker code bundles to return an object from a Promise and use it as a response. It is only available when using the responseProvider event handler.
 * @see https://techdocs.akamai.com/edgeworkers/docs/create-response
 */
import { createResponse } from 'create-response';

/**
 * The responseProvider event handler.
 * This event happens if the response is not already found in cache. This example shows how to return a response body
 * @see https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions
 * 
 * @param {EW.IngressClientRequest} request The request object @see https://techdocs.akamai.com/edgeworkers/docs/request-object
 */
export async function responseProvider(request) {
  /** 
   * Use request.getVariable to get user-defined variables from the property variables configuration.
   * @see https://techdocs.akamai.com/edgeworkers/docs/request-object#getvariable 
   */
  const OPENWEATHER_API_KEY = request.getVariable('PMUSER_OPENWEATHER_API_KEY');

  /**
   * Grab location information about the server handling this request. This can be used to roughly determine the user's location.
   * @see https://techdocs.akamai.com/edgeworkers/docs/user-location-object
   */
  const { city } = request.userLocation;

  /** 
   * Construct an OpenWeatherMap API request URL with the city name and API key and pass it to the httpRequest function.
   * @see https://openweathermap.org/api
   * httpRequest() returns a Promise that resolves to an httpResponse Object. This function is similar to fetch from the Fetch API.
   * @see https://techdocs.akamai.com/edgeworkers/docs/http-request#httprequest
   */
  const url = `https://ew-api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${OPENWEATHER_API_KEY}`;
  const response = await httpRequest(url);
  const weather = await response.json();

  /**
   * Use createResponse to validate the passed values and return an opaque object. The opaque object can be used to resolve the Promise returned from responseProvider(). The function accepts either a list of parameters or an options object.
   * @see https://techdocs.akamai.com/edgeworkers/docs/create-response#createresponse
   */
  return Promise.resolve(createResponse(
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
          body { max-width: 60rem; margin: auto; padding: 2rem; font-family: Roboto, Helvetica, Arial, sans-serif; }
          a { color: #017ac6; }
        </style>
      </head>
      <body>
        <!-- 1. Just hello world text-->
        <h1>Weather for ${city}</h1>

        <p>Here we're using the OpenWeatherMap API to get the weather for ${city}:</p>

        ${weather.cod === '404'
      ? `<p>No weather data found for ${city}</p>`
      : `<table>
              <tr>
                <th align="left">Description</th>
                <td>${weather.weather[0].description} <img width="25" height="25" src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt=""></td>
              </tr>
              <tr>
                <th align="left">Temperature</th>
                <td>${weather.main.temp}°C</td>
              </tr>
              <tr>
                <th align="left">Feels like</th>
                <td>${weather.main.feels_like}°C</td>
              </tr>
              <tr>
                <th align="left">High</th>
                <td>${weather.main.temp_max}°C</td>
              </tr>
              <tr>
                <th align="left">Low</th>
                <td>${weather.main.temp_min}°C</td>
              </tr>
              <tr>
                <th align="left">Humidity</th>
                <td>${weather.main.humidity}%</td>
              </tr>
              <tr>
                <th align="left">Wind speed</th>
                <td>${weather.wind.speed} m/s</td>
              </tr>
            </table>`
    }
      </body>
    </html>`
  ));
}

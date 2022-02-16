# API Proxy

This examples uses Akamai EdgeWorkers as a proxy server for the [OpenWeather API](https://openweathermap.org/api).

**Steps:**
1. Hook into the [`responseProvider`](https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions) event.
2. Use [`request.getVariable()`](https://techdocs.akamai.com/edgeworkers/docs/request-object#getvariable) to grab OpenWeather API keys from property configuration.
3. Use [`request.userLocation`](https://techdocs.akamai.com/edgeworkers/docs/user-location-object) to grab the location of the edge server closest to the user.
4. Use the built-in [`httpRequest()`](https://techdocs.akamai.com/edgeworkers/docs/http-request#httprequest) module to make the API request.
5. Create a response with [`createResponse()`](https://techdocs.akamai.com/edgeworkers/docs/create-response#createresponse) to send back to the user.

**Prerequisites:**
- `responseProvider` and sub-requests will only work if you have a properly configured delivery configuration.
- You will need to create a [user-defined variable](https://techdocs.akamai.com/property-mgr/docs/user-defined-vars) called `PMUSER_OPENWEATHER_API_KEY` and assign it the value of your OpenWeather API key. 
- Hostnames like the OpenWeather API can only be hit directly when served through the Akamai network. If you don't have an associated delivery product sub-requests will fail with a 400 HTTP response code.

**Benefits:**
- Requests happen close to the user without exposing API keys.
- Increase speed by making requests on Akamai network instead of the user's.

## What are EdgeWorkers

[Akamai EdgeWorkers](https://www.akamai.com/products/serverless-computing-edgeworkers) are "serverless" functions that can handle requests and perform logic at the edge.

They enable developers to create and deploy functions across more than a quarter of a million edge servers around the world to handle user requests with less latency.

## EdgeWorkers Benefits

**Better Performance**
User requests are handled by the nearest EdgeWorker to their location. With 250,000 edge servers around the world, this can greatly reduce latency. Users spend less time waiting on requests, making your application run faster no matter where they are. Better performance has been shown to improve user experience, engagement, and ultimately, conversions.

**Less To Think About**
When you deploy your code to EdgeWorkers, Akamai takes care of all the infrastructure and scaling needs. We makes sure it runs as fast as possible for every user no matter where they are in the world. Even if you have a sudden, massive spike in traffic.
    
**More Savings**
EdgeWorkers automatically scale up or down to handle the existing traffic load. You only pay for what you use without having to provision resources for peak and scale. Why pay for a server to run 24 hours a day if you only need it for 8? Additionally, EdgeWorkers can offload some of your work your origin server needs to do. Which could lead to even more savings.

## Documentation
- [Akamai EdgeWorkers](https://developer.akamai.com/akamai-edgeworkers-overview)
- [Akamai EdgeWorkers Examples](https://github.com/akamai/edgeworkers-examples)
- [Akamai CLI for EdgeWorkers](https://developer.akamai.com/legacy/cli/packages/edgeworkers.html)
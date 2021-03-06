# Geolocation

In this example you'll learn about the [`userLocation`](https://techdocs.akamai.com/edgeworkers/docs/user-location-object) property of the EdgeWorkers `request` object. This object provides information about the city, continent, country, region, or zip code based on the IP address of the requesting device.

With this information you can provide a more personalized experience:
- Greet users in different languages
- Show monetary values in the local currency
- Block access from embargoed countries
- Gather regional analytics without client-side JavaScript

More details at [techdocs.akamai.com/edgeworkers/docs/user-location-object](https://techdocs.akamai.com/edgeworkers/docs/user-location-object)

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
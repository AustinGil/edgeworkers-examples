# Cookies

In this example you'll learn about the built in [`cookies`](https://techdocs.akamai.com/edgeworkers/docs/cookies) module available to the EdgeWorkers runtime. This module makes it easier to work with [`cookies`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

By using EdgeWorkers for `cookie` manipulation, we get these benefits:
- Offload some work the origin server would otherwise have to do.
- Faster cookie manipulation at the closes edge server.
- Personalization on the server side based on user session.

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
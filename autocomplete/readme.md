# Autosuggest

This example showcases how EdgeWorkers are a great candidate for an auto-suggest feature. EdgeWorkers allow us to remove any static lists of search results and libraries from our client side bundle, while also avoiding long round-trip requests to origin servers. It's a happy medium between client-side and server-side search. 

Benefits:
- No extra fuzzy-search library in client-side bundle.
- No huge list of search items in client-side bundle.
- Smaller client-side bundles, faster downloads, less data for users.
- Runs on nearest edge server to users, less latency, faster responses.

This example uses a local copy of [QuickScore.js](https://github.com/fwextensions/quick-score) to provide fast fuzzy-search results.

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
# EdgeWorkers Examples

This repo contains a collection of examples that run on Akamai EdgeWorkers.

## What are EdgeWorkers

[Akamai EdgeWorkers](https://www.akamai.com/products/serverless-computing-edgeworkers) are "serverless" functions that can handle requests and perform logic at the edge.

They enable developers to create and deploy functions across more than a quarter of a million edge servers around the world to handle user requests with less latency.

EdgeWorkers are written in JavaS
The EdgeWorkers service is built on V8 and supports various ECMAScript language features implemented by the V8 JavaScript engine. APIs commonly used by web developers, that are not part of the language specification itself, are not provided by EdgeWorkers.
https://techdocs.akamai.com/edgeworkers/docs/specifications

### EdgeWorkers Benefits

**Better Performance**

User requests are handled by the nearest EdgeWorker to their location. With 250,000 edge servers around the world, this can greatly reduce latency. Users spend less time waiting on requests, making your application run faster no matter where they are. Better performance has been shown to improve user experience, engagement, and ultimately, conversions.

**Less To Think About**

When you deploy your code to EdgeWorkers, Akamai takes care of all the infrastructure and scaling needs. We makes sure it runs as fast as possible for every user no matter where they are in the world. Even if you have a sudden, massive spike in traffic. And they are written in JavaScript, one of the most popular languages in the world.
    
**More Savings**

EdgeWorkers automatically scale up or down to handle the existing traffic load. You only pay for what you use without having to provision resources for peak and scale. Why pay for a server to run 24 hours a day if you only need it for 8? Additionally, EdgeWorkers can offload some of your work your origin server needs to do. Which could lead to even more savings.

## EdgeWorkers CLI

Although you can manage EdgeWorkers from the Akamai Control Center, you may want to install the Akamai CLI as well as the EdgeWorkers CLI plugin. Once they are configured, you will have access to many commands that can help you manage your EdgeWorkers without having to log into the Akamai Control Center. Below are a few of our favorite commands.

List EdgeWorkers IDs:
`akamai edgeworkers list-ids`

Upload bundle:
`akamai edgeworkers upload --bundle <BUNDLE> <ID>`

Activate version:
`akamai edgeworkers activate <ID> <NETWORK> <VERSION>`

Check status:
`akamai edgeworkers status <ID>`

Bundle all contents of a folder:
`cd <FOLDER> && tar -cvf ../<FOLDER>.tgz * && cd ..`

There is also a small bash script to simplify the bundling process:
`./bundle.sh <FOLDER>` 

## Debugging EdgeWorkers

If you find yourself hitting some issues with EdgeWorkers and need to debug what is going on, you may want to [enable enhanced debug headers](https://techdocs.akamai.com/edgeworkers/docs/enable-enhanced-debug-headers). With these headers enabled, your EdgeWorkers responses will contain a lot of useful debugging information in the response headers.

You should refer to the official documentation, but the short version looks like this:

Generate EdgeWorker secret:

`akamai edgeworkers secret`

In your Property Manager, add a new variable:

`PMUSER_EW_DEBUG_KEY <SECRET>`
(Set security settings to Sensitive)

Get auth token (expiring in 60 minutes):

`akamai edgeworkers auth --expiry 60 <EW_URL>`

Add some Headers to your request ([Postman](https://www.postman.com/) or [ModHeaders](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en) work well):

```
Pragma: akamai-x-get-request-id, akamai-x-get-cache-key, akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-get-extracted-values, akamai-x-get-true-cache-key, akamai-x-check-cacheable, akamai-x-get-nonces, akamai-x-get-ssl-client-session-i, akamai-x-serial-no, akamai-x-ew-debug
Akamai-EW-Trace: AUTH_TOKEN
```

## Documentation
- [Akamai EdgeWorkers](https://developer.akamai.com/akamai-edgeworkers-overview)
- [Akamai EdgeWorkers Examples](https://github.com/akamai/edgeworkers-examples)
- [Akamai CLI for EdgeWorkers](https://developer.akamai.com/legacy/cli/packages/edgeworkers.html)
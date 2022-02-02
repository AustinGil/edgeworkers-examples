## Useful commands

List EdgeWorkers IDs:
`akamai edgeworkers list-ids`

Upload bundle:
`akamai edgeworkers upload --bundle <bundle> <id>`

Activate version:
`akamai edgeworkers activate <id> <network> <version>`

Check status:
`akamai edgeworkers status <id>`

Bundle all contents of a folder:
`cd FOLDER && tar -cvf ../FOLDER.tgz * && cd ..`

## Debugging EdgeWorkers

[Enable enhanced debug headers](https://techdocs.akamai.com/edgeworkers/docs/enable-enhanced-debug-headers)

Generate EdgeWorker secret:
`akamai edgeworkers secret`

In your Property Manager, add a new variable:
`PMUSER_EW_DEBUG_KEY <SECRET>`
(Set security settings to Sensitive)

Get auth token (expiring in 60 minutes):
`akamai edgeworkers auth --expiry 60 <EW_URL>`

Request Headers:
```
Pragma: akamai-x-get-request-id, akamai-x-get-cache-key, akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-get-extracted-values, akamai-x-get-true-cache-key, akamai-x-check-cacheable, akamai-x-get-nonces, akamai-x-get-ssl-client-session-i, akamai-x-serial-no, akamai-x-ew-debug
Akamai-EW-Trace: AUTH_TOKEN
```

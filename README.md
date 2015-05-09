# Angular Log Decoration

This micro-app demonstrates how to hook into Angular's `$provide` service to decorate
the `$log.debug` function. The function decoration is located in the file 
`src/app/blocks/applyTimeToDebugLogs.ts`.

You can see the running demo [on rawgit](https://rawgit.com/jarrettmeyer/angular_log_decoration/master/src/index.html).

## Example

Default implementation:

```
$log.debug('Hello');  // => Writes 'Hello' to the console.
```

Decorated implementation:

```
$log.debug('Hello');  // => Writes '12:45:07 PM - Hello' to the console.
```

## Prerequisites

NodeJS is required for development.

+ NodeJS 0.12+
+ Global npm modules: `bower`, `grunt-cli`, `tsd@next`

## Usage

```
$ npm install
$ bower install
$ grunt build
```

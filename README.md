# Angular Log Decoration

This micro-app demonstrates how to hook into Angular's `$provide` service to decorate
the `$log.debug` function. The function decoration is located in the file 
`src/app/blocks/applyTimeToDebugLogs.ts`.

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

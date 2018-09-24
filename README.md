[//]: # ({{#wrapWith "content-section"}})

[//]: #     ({{#wrapWith "grid-row"}})
[//]: #         ({{#wrapWith "grid-col" colClasses="is-col-tablet-l-8"}})

# Veams Vent Plugin (`@veams/plugin-vent`)

The Veams Vent Plugin is a global publish and subscribe object. You can use this plugin to communicate between modules independently.

Veams exposes a global event object (`Veams.EVENTS`) which can be used and extended by this plugin.

The module extends the default `EVENTS` object of Veams when you pass the option called `furtherEvents`.

TypeScript is supported. 

---------------------

## Installation

### NPM

``` bash 
npm install @veams/plugin-vent --save
```

### Yarn 

``` bash 
yarn add @veams/plugin-vent
```

---------------------

## Usage

``` js
import Veams from '@veams/core';
import VentPlugin from '@veams/plugin-vent';
import EVENTS from './custom-events';

// Intialize core of Veams
Veams.onInitialize(() => {
    // Add plugins to the Veams system
    Veams.use(VentPlugin, {
        furtherEvents: EVENTS
    });
});
```

### Options

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| _furtherEvents_ | {`Object`} | [`false`] | Add your custom events to the global events object of Veams. |

### Api

When enabled the Api provides a way to subscribe and unsubscribe from global events and publish to the subscribers.

#### Veams.Vent.subscribe(`name:string`, `callback:function`)

_alias: `.on()`_

* @param {`String`} name - Event name which you subscribed to.
* @param {`Function`} callback - The callback function which get executed when event is triggered.

#### Veams.Vent.unsubscribe(`name:string`, `callback:function`)

_alias: `.off()`_

* @param {`String`} name - Event name which you have subscribed to.
* @param {`Function`} callback - The callback function which is registered.

#### Veams.Vent.publish(`name:string`, `obj?:object`, `scope?:any`)

_alias: `.trigger()`_

* @param {`String`} name - Event name which you have subscribed to.
* @param {`Object`} obj - Optional custom data object which you can pass.
* @param {`scope`} any - Optional scope/context on which you want to execute `.call()`.

---------------------

## Example

### Default events like `click`, `resize` and more

``` js
// Let's add a throttle to the scroll event and trigger that
window.onscroll = Veams.helpers.throttle((e) => {
    Veams.Vent.publish(Veams.EVENTS.scroll, e);
}, 200);

// Now we can easily catch that ...
Veams.Vent.subscribe(Veams.EVENTS.scroll, () => {
	console.log('Throttled scroll captured ... ');
});
```

### Custom events

``` js
const dataHandler = (data) => {
	// Make something with the data ...
	console.log('my custom data received by publish(): ', data);
})

Veams.Vent.subscribe('custom:event', dataHandler);

Veams.Vent.subscribe(Veams.EVENTS.resize, () => {
	// First we want to publish it, so that `dataHandler()` will be executed
	Veams.Vent.publish('custom:event', {
		testData: 'My test data'
	});
	
	// After that we unsubscribe to make sure that `dataHandler()` is only executed once
	Veams.Vent.unsubscribe('custom:event', dataHandler);
});
```

[//]: #         ({{/wrapWith}})
[//]: #     ({{/wrapWith}})

[//]: # ({{/wrapWith}})
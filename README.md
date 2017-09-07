# VeamsVent Plugin

The VeamsVent plugin is a global publish and subscribe object. You can use this plugin to communicate between modules independently.

Veams exposes a global event object (`Veams.EVENTS`) which can be used and extended by this plugin.

### How to

```js
import Veams from 'veams';
import VeamsVent from 'veams/lib/plugins/vent';
import EVENTS from './custom-events';

// Intialize core of Veams
Veams.initialize();

// Add plugins to the Veams system
Veams.use(VeamsVent, {
    furtherEvents: EVENTS
});
```

#### Options

- _furtherEvents_ {`Object`} [`false`] - Add your custom events to the global events object of Veams.

###
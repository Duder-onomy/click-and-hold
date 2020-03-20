# Click And Hold

[![Build Status](https://travis-ci.com/Duder-onomy/click-and-hold.svg?branch=master)](https://travis-ci.com/Duder-onomy/click-and-hold)

Will fire a handler throttled by an interval, continuously while user presses on element.

Supports touch.

Zero dependencies.

### How to use:
Important to note: If your handler relies on scope, ensure it is called with the correct scope by binding the scope directly, or using the closure.
```javascript
import clickAndHold from 'click-and-hold';

clickAndHold.register(element, handler.bind(theScopeYouWant), interval);

clickAndHold.unregister(element);
```

### How it works:
When the element is first interacted with (mousedown, touchstart), we start a loop that will continuously try and call a passed handler on a passed interval.
To avoid complexity, we store the interval and subsequent handlers on the element itself. Its only 50 something lines. Scope it.

### Install:

```bash
npm install --save-dev click-and-hold
```

### Upgrading
From 1.X.X -> 2.X.X, We are now using es6 module imports instead of common.js. Thinks like webpack/browserify/etc should be able to hang either way.

I am not trying to camp names on NPM, so if someone else wants this name just let me know and I will gladly take my repo down.

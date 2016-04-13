# Click And Hold

Will fire a handler throttled by an interval, continuously while user presses on element.

Supports touch.

### How to use:
Important to note: If your handler relies on scope, ensure it is called with the correct scope by binding the scope directly, or using the closure.
```javascript
var clickAndHold = require('click-and-hold');

clickAndHold.register(element, handler.bind(theScopeYouWant), interval);

clickAndHold.unregister(element);
```

### Install:

```bash
npm install --save-dev click-and-hold
```

I am not trying to camp names on NPM, so if someone else wants this name just let me know and I will gladly take my repo down.
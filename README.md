# vue-strap
Bootstrap components built with Vue.js.

**This is the bootstrap v4.0.0 alpha branch. You probably should not be using this.**

Component Progress: (basic manual testing only)
- [ ] Component: Accordion (updated to use 'card', but might need more fixes)
- [ ] Component: Affix (mostly works, but is "off" - needs testing/updates)
- [x] Component: Alert (no updates needed)
- [x] Component: Aside (no updates needed)
- [x] Component: Buttons (updated)
- [ ] Component: Carousel (doesn't display right)
- [x] Component: Datepicker (updated, should work fine).
- [x] Component: Dropdown (updated)
- [ ] Component: Modal (works, but has problems with slot usage)
- [x] Component: Popover (updated, but doesnt have arrows)
- [ ] Component: Progressbar (updated, but won't support IE9 syntax, also no stacked support in Bv4-alpha)
- [x] Component: Select (updated)
- [x] Component: Tabs (updated)
- [x] Component: Tooltip (works fine, but no arrow, probably due to tether plugin missing)
- [x] Component: Typeahead

Bootstrap v4 Migration Tasks:
- [x] All btn-default references should now be btn-secondary
- [x] All span class='caret' needs to be converted to appropriate dropdown-toggle (if buttons and other classes)
- ... see this page for more migration tasks:
http://v4-alpha.getbootstrap.com/migration/



This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:

* [Vue.js](http://vuejs.org/) (required ^v1.x.x, test with v1.0.8).
* [Bootstrap CSS](http://getbootstrap.com/) (required 3.x.x, test with 3.3.5). VueStrap doesn't depend on a very precise version of Bootstrap.

## Installation

### NPM

```bash
$ npm install vue-strap
```

### CommonJS
```js
var alert = require('vue-strap/src/alert');
// or
var alert = require('vue-strap').alert;

new Vue({
  components: {
    'alert': alert
  }
})
```

### ES6
```js
import alert from 'vue-strap/src/alert'
// or
import { alert } from 'vue-strap'

new Vue({
  components: {
    alert
  }
})
```

### AMD
```js
$ bower install vue-strap

define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });
```

### Browser globals
The `dist` folder contains `vue-strap.js` and `vue-strap.min.js` with all components exported in the <code>window.VueStrap</code> object. These bundles are also available in [CDNJS](https://cdnjs.com/libraries/vue-strap),
and on both the Bower and NPM packages.

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-strap.js"></script>
<script>
  var alert = VueStrap.alert
</script>
```

## Docs
See the [documentation](http://yuche.github.io/vue-strap/) with live editable examples.

## Local Setup
* Install with `npm install`
* Run the docs site in development mode with `npm run docs`. This will watch for file changes as you work.
* Build with `npm run build`.

## TODO
See [Roadmap](https://github.com/yuche/vue-strap/issues/41)

## License
vue-strap is licensed under [The MIT License](LICENSE).

# deprecated

SORRY, THIS PROJECT IS NO LONGER MAINTAINED.

There are two great alternatives:

* [bootstrap-vue](https://github.com/bootstrap-vue/bootstrap-vue): BootstrapVue provides one of the most comprehensive implementations of Bootstrap 4 components and grid system for Vue.js and with extensive and automated WAI-ARIA accessibility markup.
* [uiv](https://github.com/wxsms/uiv): Bootstrap 3 components implemented by Vue 2.

# vue-strap
Bootstrap components built with Vue.js.

This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:

* [Vue.js](http://vuejs.org/) (required ^v1.x.x, test with v1.0.8).
* [Bootstrap CSS](http://getbootstrap.com/) (required 3.x.x, test with 3.3.5). VueStrap doesn't depend on a very precise version of Bootstrap.

## Installation

### NPM

```bash
$ npm install vue-strap
```

### CommonJS
package.json
```json
{
  "browser": {
    "vue-strap": "vue-strap/dist/vue-strap.min.js",
  }
}
```
in your app
```js
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
    var vm = new Vue({
        components: {
            alert: VueStrap.alert
        },
        el: "#app",
        data: {
            showRight: false,
            showTop: false
        }
    })
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

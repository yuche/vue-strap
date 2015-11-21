# vue-strap v1 branch

Work on VueJS 1.0.0 support is now considered to be in **alpha**. All components
except for Carousel should be working. Report any issues in the issues section
of this github.

Ported to Vue 1.0.0, but are currently not working: (fails to render properly, but causes no Vue warnings)
- Carousel
- Slider (sub component of carousel)


# INSTALL/USAGE

Install this branch using: 

```bash
npm install "yuche/vue-strap#v1"
```

Since only a few components are available, you probably should be using
webpack or include only those. Here's an example of how I'm using the
Datepicker component in one of my .vue files:

```js
<template>
     <date-picker :value.sync="value" format="MM/dd/yyyy"></date-picker>
</template>

<script>
import DatePicker from 'vue-strap/src/Datepicker.vue';
export default {
    props: {
        value: { },
    },
    components: {
        DatePicker
    }
}
</script>
```

Notice the "import" line, which tells the webpack compiler to look for and
include the datepicker component (and only that one) from the vue-strap/src/
folder in your node_modules folder.


---

# vue-strap
Bootstrap components built with Vue.js.

This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:

* [Vue.js](http://vuejs.org/) (required ^0.12, test with 0.12.10).
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
- [ ] Vue.js 1.0 support. (Work underway in v1 branch)
- [ ] Bootstrap 4 support. (When Bootstrap 4.0 final is released.)
- [ ] Tests and Travis-CI.
- [ ] Refactoring Datepicker.
- [ ] So many things....

## License
vue-strap is licensed under [The MIT License](LICENSE).

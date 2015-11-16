# vue-strap FORK amanpatel

This is a form of the excelent vue-strap library from yuche. I've updated the
following components to work with VueJS 1.0.0 as a dependency without causing
any warnings or errors to show up. You don't have to use the migration build
of Vue if you are using the following componetns in this fork

- Aside
- Datepicker

I'm hoping this work will be integrated in the vue-strap official library
soon. Perhaps after all other components are updated as well.


# INSTALL/USAGE

Install using: 

```bash
npm install "amanpatel/vue-strap"
```

Since only a few components are available, you probably should be using
webpack or include only those. Here's an example of how I'm using the
Datepicker component in one of my .vue files:

```js
<template>
     <date-picker :value.sync="value" format="MM/dd/yyyy"></date-picker>
</template>

<script>
import {datepicker as DatePicker} from 'vue-strap/src';
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
- [ ] Vue.js 1.0 support. (When Vue.js 1.0 stable is released.)
- [ ] Bootstrap 4 support. (When Bootstrap 4.0 final is released.)
- [ ] Tests and Travis-CI.
- [ ] Refactoring Datepicker.
- [ ] So many things....

## License
vue-strap is licensed under [The MIT License](LICENSE).

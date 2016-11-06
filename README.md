# vue-strap-ar
This is a forked project from [VueStrap](https://github.com/yuche/vue-strap). We changed some items based on our needs. 

This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:

* [Vue.js](http://vuejs.org/) (required ^v1.x.x, test with v1.0.8).
* [Bootstrap CSS](http://getbootstrap.com/) (required 3.x.x, test with 3.3.5). VueStrap doesn't depend on a very precise version of Bootstrap.

## Installation

### NPM

```bash
$ npm install vue-strap-ar
```

### CommonJS
```js
var alert = require('vue-strap-ar/src/alert');
// or
var alert = require('vue-strap-ar').alert;

new Vue({
  components: {
    'alert': alert
  }
})
```

### ES6
```js
import alert from 'vue-strap-ar/src/alert'
// or
import { alert } from 'vue-strap-ar'

new Vue({
  components: {
    alert
  }
})
```

## Docs
See the [documentation](http://yuche.github.io/vue-strap/) with live editable examples.

## Local Setup
* Install with `npm install`
* Run the docs site in development mode with `npm run docs`. This will watch for file changes as you work.
* Build with `npm run build`.

## License
vue-strap-ar is licensed under [The MIT License](LICENSE).

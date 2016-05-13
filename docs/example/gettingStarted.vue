<template>
  <div class="bs-docs-section" id="getting-started">
    <h1 class="page-header"><a href="#getting-started" class="anchor">Getting started</a></h1>
    <div class="bs-callout bs-callout-success">
      <h4>About this project</h4>
      <p>
        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.
        As a result no dependency on jQuery or Bootstrap's JavaScript is required.
        The only required dependencies are:
      </p>
      <ul>
        <li><a href="http://vuejs.org/">Vue.js</a>
          (required ^1.0.8, test with 1.0.8).</li>
        <li><a href="http://getbootstrap.com/">Bootstrap CSS</a>
          (required 3.x.x, test with 3.3.5).
          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.
        </li>
      </ul>
    </div>
    <h2>CommonJS</h2>
    <pre><code class="language-javascript">
$ npm install vue-strap

var alert = require('vue-strap/lib/alert');
// or
var alert = require('vue-strap').alert;

new Vue({
  components: {
    'alert': alert
  }
})
    </code></pre>
    <h2>ES6</h2>
    <pre><code class="language-javascript">
$ npm install vue-strap

import alert from 'vue-strap/src/alert'
// or
import { alert } from 'vue-strap'

new Vue({
  components: {
    alert
  }
})
    </code></pre>
    <h2>Browser globals</h2>
    <p>
      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.js</code> with
      all components exported in the <code>window.VueStrap</code> object.
    </p>
    <pre><code class="language-markup">
&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;path/to/vue-strap.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  var alert = VueStrap.alert
&lt;/script&gt;
    </code></pre>
  </div>
</template>

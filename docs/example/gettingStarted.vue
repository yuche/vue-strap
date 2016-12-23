<template>
<div>
  <doc-section id="getting-started" name="Getting started">
    <div class="bs-callout bs-callout-success">
      <h4>About this project</h4>
      <p>
        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.
        As a result no dependency on jQuery or Bootstrap's JavaScript is required.
        The only required dependencies are:
      </p>
      <ul>
        <li><a href="http://vuejs.org/">Vue.js</a>
          (required ^2.1.x, test with 2.1.6).</li>
        <li><a href="http://getbootstrap.com/">Bootstrap CSS</a>
          (required 3.x.x, test with 3.3.6).
          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.
        </li>
      </ul>
    </div>
    <h4>CommonJS</h4>
    <doc-code language="javascript">
      $ npm install vue-strap

      var alert = require('vue-strap/src/alert');
      // or
      var alert = require('vue-strap').alert;

      new Vue({
        components: {
          alert: alert
        }
      })
    </doc-code>
    <h4>ES6</h4>
    <doc-code language="javascript">
      $ npm install vue-strap

      import alert from 'vue-strap/src/alert'
      // or
      import { alert } from 'vue-strap'

      new Vue({
        components: {
          alert
        }
      })
    </doc-code>

    <h4>AMD</h4>
    <doc-code language="javascript">
      $ bower install vue-strap

      define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });
    </doc-code>
    <h4>Browser globals</h4>
    <p>
      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.min.js</code> with
      all components exported in the <code>window.VueStrap</code> object. These bundles are also available on both the
      Bower and NPM packages.
    </p>
    <doc-code language="markup">
      &lt;v-select :options="options">&lt;/v-select>

      &lt;script src="path/to/vue.js">&lt;/script>
      &lt;script src="path/to/vue-strap.js">&lt;/script>
      &lt;script>
        new Vue({
          components: {
            vSelect: VueStrap.select
          },
          data: {
            options: []
          }
        })
      &lt;/script>
    </doc-code>
    <h2>Translations (optional):</h2>
    <p>If you want to enable language support, you have to add:</p>
    <doc-code language="markup">
      &lt;script src="path/to/vue-strap-lang.js">&lt;/script>
    </doc-code>
    <h4>CommonJS</h4>
    <doc-code language="javascript">
      require('vue-strap/dist/vue-strap-lang.js')
    </doc-code>
    <p>If not included what you need, you can add your own, without editing the source code of vue-strap.</p>
    <hr/>
    <h2>Mobile detection (optional):</h2>
    <p>If you need to enable/disable options if is a mobile device you can add:</p>
    <doc-code language="markup">
      &lt;script src="path/to/isMobileBrowser.js">&lt;/script>
    </doc-code>
    <h4>CommonJS</h4>
    <doc-code language="javascript">
      require('vue-strap/dist/isMobileBrowser.js')
    </doc-code>
    <p>Then in javascript you can check it just doing:</p>
    <doc-code language="javascript">
      if (navigator.isMobile) {
        //do something if is mobile
      }
      if ('isMobile' in navigator) {
        //do things only if the plugin was loaded

        if (!navigator.isMobile) {
          //do something if is not a mobile
        }
      }
    </doc-code>
    <p>Based on <a href="http://detectmobilebrowsers.com/">Detect Mobile Browsers</a>.</p>
  </doc-section>
  <doc-section id="handle-events" name="Event Handling">
    <p>The events return values as arguments, you have 2 ways to handle them:</p>
    <doc-code>
      &lt;!-- using expression -->
      &lt;component @event="arg0 = arguments[0]">&lt;/component>
      &lt;!-- using method -->
      &lt;component @event="callable">&lt;/component>
    </doc-code>
    <doc-code language="javascript">
      methods: {
        callable: function (arg0, arg1, ...) {
          // defined arguments
          this.arg0 = arg0
          // or global arguments array
          this.arg0 = arguments[0]
        }
      }
    </doc-code>
    <p>The number of arguments depend on the event.</p>
  </doc-section>
  <doc-section id="v-model" name="v-model">
    <p>According to the vue2 specifications, <code>twoWay</code> binding is not supported anymore, except for <code>v-model</code>.</p>
    <p>The <code>v-model</code> directive in a component always link to <code>value</code> attribute.</p>
    <p>Keep in mind that in vue2:</p>
    <doc-code>
      &lt;!-- using v-model like this: -->
      &lt;component v-model="element">&lt;/component>
      &lt;!-- is the same that: -->
      &lt;component :value="element" @input="element = argument[0]">&lt;/component>
    </doc-code>
  </doc-section>
</div>
</template>
<script>
import docCode from './utils/docCode.js'
import docSection from './utils/docSection.vue'
export default {
  components: {
    docCode,
    docSection
  }
}
</script>

require('./assets/docs.css')
require('./assets/style.css')

var Prism = require('prismjs')
require('./js/showLanguage')

var Vue = window.Vue = require('vue')
Vue.use(require('vue-resource'));
require('dist/vue-strap-lang.js')
require('dist/isMobileBrowser.js')

import bodyDocs from './bodyDocs.vue'

Vue.config.devtools = true
Vue.config.debug = true

new Vue({
  el: '#app',
  components: {
    bodyDocs
  },
  data: {
    sections : []
  },
  mounted () {
    document.querySelectorAll('.bs-docs-section').forEach(el => {
      var id = el.id
      var name = el.querySelector('.anchor', el).innerText
      if (id && name) this.sections.push({el, id, name})
    })
  },
  updated () {
    Prism.highlightAll();
  }
})

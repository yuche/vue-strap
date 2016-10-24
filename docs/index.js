require('./assets/docs.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')

var Vue = window.Vue = require('vue')
require('dist/vue-strap-lang.js')
require('dist/isMobileBrowser.js')

import $ from 'src/components/utils/NodeList.js'
import bodyDocs from './bodyDocs.vue'

Vue.config.devtools = true
Vue.config.debug = true

new Vue({
  el: '#app',
  components: {
    bodyDocs
  },
  created () {
    if (!this.$root.sections) {
      this.$root.sections = []
    }
  },
  mounted () {
    var list = this.$root.sections
    while(list.length) list.pop()
    $('.bs-docs-section').each(el => {
      list.push({
        id: el.id,
        name: $('.anchor', el).textContent,
        el: el
      })
    })
  }
})

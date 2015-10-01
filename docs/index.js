import './assets/style.css'
import 'prismjs'
import 'prismjs/plugins/file-highlight/prism-file-highlight.js'

import affix from '../src/Affix.vue'
import container from './example/container.vue'
import headerDocs from './example/headerDocs.vue'
import alertDocs from './example/alertDocs.vue'

const docs = new Vue({
  el: '#wrapper',
  components: {
    affix,
    alertDocs,
    headerDocs,
    container
  }
})
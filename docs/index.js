import 'prismjs'
import affix from '../src/Affix.vue'
import alertDocs from './example/alertDocs.vue'

const docs = new Vue({
  el: '#wrapper',
  components: {
    affix,
    alertDocs
  }
})
<template>
  <pre v-if="!language" v-el:container></pre>
  <template v-else>
    <pre v-if="language=='markup'"><code class="language-markup"><script v-el:container type="language-mark-up"></script></code></pre>
    <pre v-else><code class="language-{{language}}"><script v-el:container type="language-{{language}}"></script></code></pre>
  </template>
</template>

<script>
import $ from 'src/utils/NodeList.js'

export default {
  props: {
    language: {
      type: String,
      default: 'html'
    }
  },
  compiled () {
    let content = ''
    $(this._slotContents.default.childNodes).each((el) => {
      content += el.outerHTML || el.nodeValue
    })
    if (~['html','markup'].indexOf(this.language)) content = content.replace(/(\w+)=""/g, '$1')
    let matches = content.match(/(\n|\r)[ ]*\S/g)
    if (matches) {
      let values = matches.map((el) => { return el.length - 2 })
      let min = Math.min.apply(Math, values)
      content = content.replace(/(\n|\r)([^\n\S]*)/g, (str, nr, s) => {
        return nr + s.substr(min)
      })
    }
    this.$els.container.innerHTML = content.replace(/^\s+|\s+$/g,'')
  }
}
</script>

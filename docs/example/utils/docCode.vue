<template>
  <div>
    docCode disabled (example codes)
    <!-- <pre v-if="!language" ref="container"></pre>
    <template v-else>
      <pre v-if="language=='markup'"><code ref="container" class="language-markup"><slot></slot><script type="language-mark-up"></script></code></pre>
      <pre v-else><code ref="container" :class="'language-' + language"><slot></slot><script :type="'language-' + language"></script></code></pre>
    </template> -->
  </div>
</template>

<script>
import $ from 'src/components/utils/NodeList.js'

export default {
  props: {
    language: {
      type: String,
      default: 'html'
    }
  },
  mounted () {
    // let content = ''
    // $(this._slotContents.default.childNodes).each((el) => {
    //   content += el.outerHTML || el.nodeValue
    // })
    // if (~['html','markup'].indexOf(this.language)) content = content.replace(/(\w+)=""/g, '$1')
    // let matches = content.match(/(\n|\r)[ ]*\S/g)
    // if (matches) {
    //   let values = matches.map((el) => { return el.length - 2 })
    //   let min = Math.min.apply(Math, values)
    //   content = content.replace(/(\n|\r)([^\n\S]*)/g, (str, nr, s) => {
    //     return nr + s.substr(min)
    //   })
    // }
    // this.$refs.container.innerHTML = content.replace(/^\s+|\s+$/g,'')
  }
}
</script>

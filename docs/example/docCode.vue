<template>
  <pre v-if="language=='javascript'"><code class="language-javascript"><script v-el:container type="language-javascript"></script></code></pre>
  <template v-else>
    <pre v-if="language=='markup'"><code class="language-markup"><script v-el:container type="language-mark-up"></script></code></pre>
    <pre v-else v-el:container></pre>
  </template>
  <div v-el:content class="hidden"><slot></slot></div>
</template>

<script>
import $ from 'src/utils/NodeList.js'

export default {
  props: {
    language: {
      type: String,
      default: null
    }
  },
  ready () {
    let content = this.$els.content.innerHTML
    // let content = "  <a>\n    <b></b>\n  </a>"
    // content = content.split("\n")
    // content.shift()
    // content.forEach((str) => {
    //   console.log(str)
    // })
    // let matches = content.match(/(\n|\r)[ ]*/)
    // let min = Math.min.apply(Math, matches.map((el) => { return el.length - 1 }))
    // console.log([content,matches,min])
    // content = content.replace(/(\n|\r)([^\n\S]*)/g, (str, nr, s) => {
    //   return nr + s.substr(min)
    // })
    // console.log([content])
    this.$els.container.innerHTML = content
    $(this.$els.content).delete()
  }
}
</script>

<template>
  <affix :offset="50" v-scroll="scrollSpy">
    <ul class="nav bs-docs-sidenav" id="sidenav">
      <li v-for="s in sections" :class="{active:active==s.id}"><a :href="'#' + s.id">{{ s.name }}</a></li>
    </ul>
    <a href="#" class="back-to-top">Back to top</a>
    <a href="https://github.com/wffranco/vue-strap" class="back-to-top">GitHub</a>
  </affix>
</template>

<script>
import Affix from 'src/Affix.vue'
import Scroll from 'src/directives/Scroll.js'

export default {
  directives: {
    Scroll
  },
  components: {
    Affix
  },
  filters: {
    space(val) {
      return val.replace('-', ' ')
    }
  },
  data () {
    return {
      active: null
    }
  },
  computed: {
    sections () { return this.$root.sections }
  },
  methods: {
    scrollSpy () {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      for (let s of this.sections) {
        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
        if (s.el.offsetTop + 420 <= scrollPosition) {
          this.active = s.id
        }
      }
    }
  },
  mounted () {
    this.scrollSpy()
  }
}
</script>

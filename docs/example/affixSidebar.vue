<template>
  <affix offset="50">
    <nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm ">
      <ul class="nav bs-docs-sidenav" id="sidenav">
        <li v-for="s in sections" :class="{active:active==s.id}"><a href="#{{ s.id }}">{{ s.name }}</a></li>
      </ul>
      <a href="#top" class="back-to-top">Back to top</a>
      <a href="https://github.com/yuche/vue-strap" class="back-to-top">GitHub</a>
    </nav>
  </affix>
</template>

<script>
import getSections from './getSections.js'
import affix from 'src/Affix.vue'

export default {
  components: {
    affix
  },
  filters: {
    space(val) {
      return val.replace('-', ' ')
    }
  },
  data () {
    return {
      active: null,
      sections: []
    }
  },
  created () {
    window.onscroll = () => {
      this.scrollSpy()
    }
    getSections(this,this.scrollSpy)
  },
  methods: {
    scrollSpy () {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      for (let s of this.sections) {
        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
        if (s.top + 420 <= scrollPosition) {
          this.active = s.id
        }
      }
    }
  }
}
</script>

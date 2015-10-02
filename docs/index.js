import './assets/style.css'
import 'prismjs'
import './js/showLanguage'

import affix from '../src/Affix.vue'
import container from './example/container.vue'
import headerDocs from './example/headerDocs.vue'
import alertDocs from './example/alertDocs.vue'
import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
import asideDocs from './example/asideDocs.vue'

new Vue({
  el: '#wrapper',
  components: {
    affix,
    alertDocs,
    headerDocs,
    accordionDocs,
    affixDocs,
    asideDocs,
    container,
    list: {
      inherit: true,
      template: `<li v-repeat="anchor"><a href="#{{$value.toLowerCase()}}">{{$value}}</a></li>`
    }
  },
  data() {
    return {
      anchor: []
    }
  },
  ready() {
    // add h1.anchor.innerHTML to sidebar list
    const anchor = document.querySelectorAll('.anchor')
    this.anchor = [...anchor].map(el=> el.innerHTML)
    // Scrollspy
    const section = document.querySelectorAll('.bs-docs-section')
    const sections = {}
    const navbar = document.querySelector('#sidenav')
    let i = 0

    window.onload = ()=> {
      Array.prototype.forEach.call(section, (e)=> {
        sections[e.id] = e.offsetTop
      })
    }

    window.onscroll = ()=> {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

      for (i in sections) {
        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
        if (sections[i] + 420 <= scrollPosition) {
          if (navbar.querySelector('.active')) navbar.querySelector('.active').className = ''
          navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active'
        }
      }
    }
  }
})

require('./assets/docs.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')

import gettingStarted from './example/gettingStarted.vue'
import affix from 'src/Affix.vue'
import container from './example/container.vue'
import headerDocs from './example/headerDocs.vue'
import alertDocs from './example/alertDocs.vue'
import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
import asideDocs from './example/asideDocs.vue'
import carouselDocs from './example/carouselDocs.vue'
import buttonsDocs  from './example/buttonsDocs.vue'
import datepickerDocs from './example/datepickerDocs.vue'
import dropdownDocs from './example/dropdownDocs.vue'
import modalDocs from './example/modalDocs.vue'
import popoverDocs from './example/popoverDocs.vue'
import progressbarDocs from './example/progressbar-docs.vue'
import selectDocs from './example/selectDocs.vue'
import tabsDocs from './example/tabsDocs.vue'
import tooltipDocs from './example/tooltipDocs.vue'
import typeaheadDocs from './example/typeaheadDocs.vue'
import spinnerDocs from './example/spinnerDocs.vue'

Vue.config.debug = true

new Vue({
  el: '#wrapper',
  components: {
    gettingStarted,
    container,
    affix,
    alertDocs,
    headerDocs,
    accordionDocs,
    affixDocs,
    asideDocs,
    carouselDocs,
    buttonsDocs,
    datepickerDocs,
    dropdownDocs,
    modalDocs,
    popoverDocs,
    progressbarDocs,
    selectDocs,
    tabsDocs,
    tooltipDocs,
    typeaheadDocs,
    spinnerDocs,
    list: {
      inherit: true,
      template: ''
    }
  },
  data() {
    return {
      anchor: []
    }
  },
  filters: {
    space(val) {
      return val.replace('-', ' ')
    }
  },
  ready() {
    // add h1.anchor.innerHTML to sidebar list
    const anchor = document.querySelectorAll('.anchor')
    this.anchor = [...anchor].map(el=> el.innerHTML.replace(' ', '-'))
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

    function scrollSpy() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

      for (i in sections) {
        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
        if (sections[i] + 420 <= scrollPosition) {
  	      if (navbar) {
  	        if (navbar.querySelector('.active')) navbar.querySelector('.active').className = ''
  	        navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active'
  	      }
        }
      }
    }

    window.onscroll = ()=> {
      scrollSpy()
    }
  }
})

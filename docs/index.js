require('./assets/docs.css')
require('./assets/style.css')
require('./js/showLanguage')
require('prismjs')

import $ from 'src/utils/NodeList.js'
import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
import affixSidebar from './example/affixSidebar.vue'
import alertDocs from './example/alertDocs.vue'
import asideDocs from './example/asideDocs.vue'
import buttonGroupDocs  from './example/buttonGroupDocs.vue'
import carouselDocs from './example/carouselDocs.vue'
import checkboxDocs from './example/checkboxDocs.vue'
import container from './example/container.vue'
import datepickerDocs from './example/datepickerDocs.vue'
import dropdownDocs from './example/dropdownDocs.vue'
import gettingStarted from './example/gettingStarted.vue'
import headerDocs from './example/headerDocs.vue'
import inputDocs from './example/inputDocs.vue'
import modalDocs from './example/modalDocs.vue'
import popoverDocs from './example/popoverDocs.vue'
import progressbarDocs from './example/progressbar-docs.vue'
import radioDocs from './example/radioDocs.vue'
import selectDocs from './example/selectDocs.vue'
import spinnerDocs from './example/spinnerDocs.vue'
import tabsDocs from './example/tabsDocs.vue'
import tooltipDocs from './example/tooltipDocs.vue'
import typeaheadDocs from './example/typeaheadDocs.vue'

Vue.config.debug = true

new Vue({
  el: '#wrapper',
  components: {
    accordionDocs,
    affixDocs,
    affixSidebar,
    alertDocs,
    asideDocs,
    buttonGroupDocs,
    carouselDocs,
    checkboxDocs,
    container,
    datepickerDocs,
    dropdownDocs,
    gettingStarted,
    headerDocs,
    inputDocs,
    list: {inherit: true, template: ''},
    modalDocs,
    popoverDocs,
    progressbarDocs,
    radioDocs,
    selectDocs,
    spinnerDocs,
    tabsDocs,
    tooltipDocs,
    typeaheadDocs
  },
  methods: {
    fixOffset () {
      for(let item of this.$root.sections) {
        item.top = item.el.offsetTop
      }
    }
  },
  created () {
    if (!this.$root.sections) {
      this.$root.sections = []
    }
  },
  ready () {
    $(window).on('load resize', this.fixOffset)
    var list = this.$root.sections
    while(list.length) list.pop()
    $('.bs-docs-section', this.$els.sections).each((el) => {
      list.push({
        id: el.id,
        name: $('.anchor', el).textContent,
        el: el
      })
    })
    this.fixOffset()
  }
})

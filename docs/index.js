require('./assets/docs.css')
require('./assets/style.css')
require('./js/showLanguage')
require('prismjs')

import gettingStarted from './example/gettingStarted.vue'
import headerDocs from './example/headerDocs.vue'
import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
import affixSidebar from './example/affixSidebar.vue'
import alertDocs from './example/alertDocs.vue'
import asideDocs from './example/asideDocs.vue'
import buttonGroupDocs  from './example/buttonGroupDocs.vue'
import checkboxDocs from './example/checkboxDocs.vue'
import carouselDocs from './example/carouselDocs.vue'
import container from './example/container.vue'
import datepickerDocs from './example/datepickerDocs.vue'
import dropdownDocs from './example/dropdownDocs.vue'
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
    gettingStarted,
    headerDocs,
    accordionDocs,
    affixDocs,
    affixSidebar,
    alertDocs,
    asideDocs,
    buttonGroupDocs,
    checkboxDocs,
    carouselDocs,
    container,
    datepickerDocs,
    dropdownDocs,
    inputDocs,
    modalDocs,
    popoverDocs,
    progressbarDocs,
    radioDocs,
    selectDocs,
    spinnerDocs,
    tabsDocs,
    tooltipDocs,
    typeaheadDocs,
    list: {
      inherit: true,
      template: ''
    }
  }
})
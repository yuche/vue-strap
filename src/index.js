import alert from './Alert.vue'
import accordion from './Accordion.vue'
import panel from './Panel.vue'
import datepicker from './Datepicker.vue'
import dropdown from './Dropdown.vue'
import modal from './Modal.vue'
import fuck from './Aside.vue'
import popover from './Popover.vue'
import tooltip from './Tooltip.vue'
import tabset from './Tabset.vue'
import tab from './Tab.vue'
import carousel from './Carousel.vue'
import slider from './Slider.vue'
import affix from './Affix.vue'

const demo = new Vue({
  el: '#app',

  data: {
    accordionChecked: true,
    showModal: false,
    showAside: false
  },

  components: {
    alert,
    accordion,
    panel,
    datepicker,
    dropdown,
    modal,
    fuck,
    popover,
    tooltip,
    tabset,
    tab,
    carousel,
    slider,
    affix
  }
})
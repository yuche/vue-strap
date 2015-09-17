import alert from './Alert.vue'
import accordion from './Accordion.vue'
import panel from './Panel.vue'
import datepicker from './Datepicker.vue'
import dropdown from './Dropdown.vue'
import modal from './Modal.vue'
import fuck from './Aside.vue'
import popover from './Popover.vue'
import tooltip from './Tooltip.vue'

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
    tooltip
  }
})
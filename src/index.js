import alert from './Alert.vue'
import accordion from './Accordion.vue'
import panel from './Panel.vue'
import datepicker from './Datepicker.vue'
import dropdown from './Dropdown.vue'
import modal from './Modal.vue'


const demo = new Vue({
  el: '#app',

  data: {
    accordionChecked: true,
    showModal: false
  },

  components: {
    alert,
    accordion,
    panel,
    datepicker,
    dropdown,
    modal
  }
})
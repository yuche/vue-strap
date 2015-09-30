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
import progressbar from './Progressbar.vue'
import typeahead from './Typeahead.vue'
import vSelect from './Select.vue'
import vOption from './Option.vue'

const demo = new Vue({
  el: '#app',

  data: {
    accordionChecked: true,
    showModal: false,
    showAside: false,
    USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    asynchronous: '{{formatted_address}}',
    customTemplate: '<img width="18px" height="18px" v-attr="src:avatar_url"/> <span>{{login}}</span>'
  },
  methods: {
    googleCallback(items, targetVM) {
      const that = targetVM.$parent
      that.reset()
      that.query = items.formatted_address
    },
    githubCallback(items, targetVM) {
      const that = targetVM.$parent
      that.reset()
      that.query = items.login
    }
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
    affix,
    progressbar,
    typeahead,
    vSelect,
    vOption
  }
})
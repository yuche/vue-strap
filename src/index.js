// Utils
import $ from './utils/NodeList.js'
import {coerce} from './utils/utils.js'
// Directives
import ClickOutside from './directives/ClickOutside.js'
import Scroll from './directives/Scroll.js'
// Components
import accordion from './Accordion.vue'
import affix from './Affix.vue'
import alert from './Alert.vue'
import aside from './Aside.vue'
import buttonGroup from './ButtonGroup.vue'
import carousel from './Carousel.vue'
import checkbox from './Checkbox.vue'
import datepicker from './Datepicker.vue'
import dropdown from './Dropdown.vue'
import formGroup from './FormGroup.vue'
import formValidator from './FormValidator.vue'
import input from './Input.vue'
import modal from './Modal.vue'
import navbar from './Navbar.vue'
import option from './Option.vue'
import panel from './Panel.vue'
import popover from './Popover.vue'
import progressbar from './Progressbar.vue'
import radio from './Radio.vue'
import select from './Select.vue'
import slider from './Slider.vue'
import spinner from './Spinner.vue'
import tab from './Tab.vue'
import tabGroup from './TabGroup.vue'
import tabs from './Tabs.vue'
import toggleButton from './ToggleButton.vue'
import tooltip from './Tooltip.vue'
import typeahead from './Typeahead.vue'

const VueStrap = {
  directives: {
    ClickOutside,
    Scroll
  },
  utils: {
    $,
    coerce
  },
  //components
  accordion,
  affix,
  alert,
  aside,
  buttonGroup,
  carousel,
  checkbox,
  datepicker,
  dropdown,
  formGroup,
  formValidator,
  input,
  modal,
  navbar,
  option,
  panel,
  popover,
  progressbar,
  radio,
  select,
  slider,
  spinner,
  tab,
  tabGroup,
  tabs,
  toggleButton,
  tooltip,
  typeahead
}

module.exports = VueStrap

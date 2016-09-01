import {coerce} from './utils/utils.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    trigger: {
      type: String
    },
    effect: {
      type: String,
      default: 'fadein'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    header: {
      type: Boolean,
      coerce: coerce.boolean,
      default: true
    },
    placement: {
      type: String
    }
  },
  data () {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true
    }
  },
  methods: {
    toggle (val) {
      this.show = val instanceof Boolean ? val : !this.show
    }
  },
  ready () {
    const popover = this.$els.popover
    if (!popover) return console.error('Could not find popover v-el in your component that uses popoverMixin.')
    const trigger = this.$els.trigger.children[0]
    switch (this.placement) {
      case 'top' :
        this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
        this.position.top = trigger.offsetTop - popover.offsetHeight
        break
      case 'left':
        this.position.left = trigger.offsetLeft - popover.offsetWidth
        this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
        break
      case 'right':
        this.position.left = trigger.offsetLeft + trigger.offsetWidth
        this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
        break
      case 'bottom':
        this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
        this.position.top = trigger.offsetTop + trigger.offsetHeight
        break
      default:
        console.warn('Wrong placement prop')
    }
    popover.style.top = this.position.top + 'px'
    popover.style.left = this.position.left + 'px'
    popover.style.display = 'none'
    this.show = !this.show

    let events = this.trigger === 'contextmenu' ? 'contextmenu'
      : this.trigger === 'hover' ? ['mouseleave','mouseenter']
      : this.trigger === 'focus' ? ['blur', 'focus'] : ['click']
    $(trigger).on(events, () => this.toggle())
  },
  beforeDestroy () {
    $(this.$els.trigger.children[0]).off()
  }
}

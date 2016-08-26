import coerceBoolean from './utils/coerceBoolean.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    trigger: {
      type: String,
      default: 'click'
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
      coerce: coerceBoolean,
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
    if (!this.$els.popover) return console.error('Couldn\'t find popover v-el in your component that uses popoverMixin.')
    const triger = this.$els.trigger.children[0]
    if (this.trigger) {
      switch (this.trigger) {
        case 'none':
          break
        case 'hover':
          $(triger).on(['mouseleave', 'mouseenter'], () => this.toggle())
          break
        case 'focus':
          $(triger).on(['blur', 'focus'], () => this.toggle())
          break
        case 'contextmenu':
          $(triger).on(['contextmenu'], (event) => {
            event.preventDefault()
            this.toggle()
          })
          break
        case 'click':
        default:
          $(triger).on(['click'], () => this.toggle())
          break
      }
    }

    const popover = this.$els.popover
    switch (this.placement) {
      case 'top' :
        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
        this.position.top = triger.offsetTop - popover.offsetHeight
        break
      case 'left':
        this.position.left = triger.offsetLeft - popover.offsetWidth
        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
        break
      case 'right':
        this.position.left = triger.offsetLeft + triger.offsetWidth
        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
        break
      case 'bottom':
        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
        this.position.top = triger.offsetTop + triger.offsetHeight
        break
      default:
        console.warn('Wrong placement prop')
    }
    popover.style.top = this.position.top + 'px'
    popover.style.left = this.position.left + 'px'
    popover.style.display = 'none'
    this.show = !this.show
  },
  beforeDestroy () {
    $(triger).off()
  }
}

import EventListener from './utils/EventListener.js'
const PopoverMixin = {
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
      default: true
    },
    placement: {
      type: String
    }
  },
  data() {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  },
  ready() {
    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
    const popover = this.$els.popover
    const triger = this.$els.trigger.children[0]
    if (this.trigger === 'hover') {
      this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', ()=> this.show = true)
      this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', ()=> this.show = false)
    } else if (this.trigger === 'focus') {
      this._focusEvent = EventListener.listen(triger, 'focus', ()=> this.show = true)
      this._blurEvent = EventListener.listen(triger, 'blur', ()=> this.show = false)
    } else {
      this._clickEvent = EventListener.listen(triger, 'click', this.toggle)
    }

    switch (this.placement) {
      case 'top' :
        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
        this.position.top = triger.offsetTop  - popover.offsetHeight
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
        console.log('Wrong placement prop')
    }
    popover.style.top = this.position.top + 'px'
    popover.style.left = this.position.left + 'px'
    popover.style.display = 'none'
    this.show = !this.show
  },
  beforeDestroy() {
    if (this._blurEvent) {
      this._blurEvent.remove()
      this._focusEvent.remove()
    }
    if (this._mouseenterEvent) {
      this._mouseenterEvent.remove()
      this._mouseleaveEvent.remove()
    }
    if (this._clickEvent) this._clickEvent.remove()
  }
}

export default PopoverMixin

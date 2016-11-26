import $ from './NodeList.js'

export default {
  props: {
    content: {type: String},
    effect: {type: String, default: 'fade'},
    header: {type: Boolean, default: true},
    placement: {type: String, default: 'top'},
    title: {type: String},
    trigger: {type: String}
  },
  data () {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: false
    }
  },
  methods: {
    toggle (e) {
      if (e && this.trigger === 'contextmenu') e.preventDefault()
      if (!(this.show = !this.show)) { return }
      this.$nextTick(() => {
        const popover = this.$refs.popover
        const trigger = this.$refs.trigger.children[0]
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
      })
    }
  },
  mounted () {
    let trigger = this.$refs.trigger
    if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.')

    if (this.trigger === 'focus' && !~trigger.tabIndex) {
      trigger = $('a,input,select,textarea,button', trigger)
      if (!trigger.length) { trigger = null }
    }
    if (trigger) {
      let events = { contextmenu: 'contextmenu', hover: 'mouseleave mouseenter', focus: 'blur focus' }
      $(trigger).on(events[this.trigger] || 'click', this.toggle)
      this._trigger = trigger
    }
  },
  beforeDestroy () {
    if (this._trigger) $(this._trigger).off()
  }
}

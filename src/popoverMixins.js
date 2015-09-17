const PopoverMixin = {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'fade'
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
    const popoverTarget = this.$$.popover
    const triggerTarget = this.$$.trigger.children[0]
    if (this.trigger === 'hover') {
      triggerTarget.addEventListener('mouseenter', ()=> this.show = true)
      triggerTarget.addEventListener('mouseleave', ()=> this.show = false)
    } else if (this.trigger === 'focus') {
      triggerTarget.addEventListener('focus', ()=> this.show = true)
      triggerTarget.addEventListener('blur', ()=> this.show = false)
    } else {
      triggerTarget.addEventListener('click', this.toggle)
    }

    switch (this.placement) {
      case 'top' :
        this.position.left = triggerTarget.offsetLeft - popoverTarget.offsetWidth / 2 + triggerTarget.offsetWidth / 2
        this.position.top = triggerTarget.offsetTop  - popoverTarget.offsetHeight
        break
      case 'left':
        this.position.left = triggerTarget.offsetLeft - popoverTarget.offsetWidth
        this.position.top = triggerTarget.offsetTop + triggerTarget.offsetHeight / 2 - popoverTarget.offsetHeight / 2
        break
      case 'right':
        this.position.left = triggerTarget.offsetLeft + triggerTarget.offsetWidth
        this.position.top = triggerTarget.offsetTop + triggerTarget.offsetHeight / 2 - popoverTarget.offsetHeight / 2
        break
      case 'bottom':
        this.position.left = triggerTarget.offsetLeft - popoverTarget.offsetWidth / 2 + triggerTarget.offsetWidth / 2
        this.position.top = triggerTarget.offsetTop + triggerTarget.offsetHeight
        break
      default:
        console.log('Wrong placement prop')
    }
    popoverTarget.style.top = this.position.top + 'px'
    popoverTarget.style.left = this.position.left + 'px'
    popoverTarget.style.display = 'none'
    this.show = !this.show
  }
}

export default PopoverMixin
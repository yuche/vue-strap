<template>
  <div :class="['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]" v-show="active">
    <div class="spinner-wrapper">
      <div class="spinner-circle"></div>
      <div class="spinner-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
// import styling
import './spinner.scss'
// let coerce = {
//     fixed: 'boolean',
//     global: 'boolean'
// }

const MIN_WAIT = 500 // in ms

export default {
  props: {
    fixed: {type: Boolean, default: false},
    global: {type: Boolean, default: false},
    size: {type: String, default: 'md'},
    text: {type: String, default: ''}
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    spinnerSize () { return this.size ? 'spinner-' + this.size : 'spinner-sm' }
  },
  methods: {
    getMinWait (delay) {
      delay = delay || 0
      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay
    },
    show (options) {
      if (options && options.text) {
        this.text = options.text
      }
      if (options && options.size) {
        this.size = options.size
      }
      if (options && options.fixed) {
        this.fixed = options.fixed
      }

      // block scrolling when spinner is on
      this._body.style.overflowY = 'hidden'

      // activate spinner
      this._started = new Date()
      this.active = true
      this.$root.$emit('shown::spinner')
    },
    hide () {
      const delay = 0
      this._spinnerAnimation = setTimeout(() => {
        this.active = false
        this._body.style.overflowY = this._bodyOverflow
        this.$root.$emit('hidden::spinner')
      }, this.getMinWait(delay))
    }
  },
  events: {
    'show::spinner' (options) { this.show(options) },
    'hide::spinner' () { this.hide() },
    'start::ajax' (options) { this.show(options) },
    'end::ajax' () { this.hide() }
  },
  mounted () {
    if (this.global) {
      this._global = this.global
      this.$root.$on('spinner::show', () => this.show)
      this.$root.$on('spinner::hide', () => this.hide)
    }
  },
  beforeDestroy () {
    if (this._global) {
      this.$root.$off('spinner::show', () => this.show)
      this.$root.$off('spinner::hide', () => this.hide)
    }
    clearTimeout(this._spinnerAnimation)
    this._body.style.overflowY = this._bodyOverflow
  }
}
</script>

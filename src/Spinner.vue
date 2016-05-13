<template>
  <div class="spinner spinner-gritcode {{spinnerSize}} {{fixed ? 'spinner-fixed' : ''}}" v-show="active">
    <div class="spinner-wrapper">
      <div class="spinner-circle"></div>
      <div class="spinner-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
  // import styling
  import './spinner.scss'

  const MIN_WAIT = 500 // in ms

  export default {
    data() {
      return {
        active: false,
      }
    },
    props: {
      size: {
        type: String,
        default: 'md'
      },
      text: {
        type: String,
        default: ''
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      spinnerSize() {
        return (this.size) ? `spinner-${this.size}` : `spinner-sm`
      }
    },
    methods: {
      getMinWait(delay) {
        delay = delay || 0
        return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay
      },
      show(options) {
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
        this.$root.$broadcast('shown::spinner')
      },
      hide() {
        const delay = 0
        this._spinnerAnimation = setTimeout(() => {
          this.active = false
        this._body.style.overflowY = this._bodyOverflow
        this.$root.$broadcast('hidden::spinner')
      }, this.getMinWait(delay))
      }
    },
    events: {
      'show::spinner'(options) {
        this.show(options)
      },
      'hide::spinner'() {
        this.hide()
      },
      'start::ajax'(options) {
        this.show(options)
      },
      'end::ajax'() {
        this.hide()
      }
    },
    destroyed() {
      clearTimeout(this._spinnerAnimation)
      this._body.style.overflowY = this._bodyOverflow
    },
    ready() {
      this._body = document.querySelector('body')
      this._bodyOverflow = this._body.style.overflowY || ''
    }
  }
</script>

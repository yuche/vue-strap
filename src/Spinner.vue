<template>
  <div :class="['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]" v-show="active||locked">
    <div class="spinner-wrapper">
      <div class="spinner-circle"></div>
      <div class="spinner-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
import {coerce, delayer} from './utils/utils.js'
const MIN_WAIT = 500 // in ms

export default {
  props: {
    fixed: {type: Boolean, default: false},
    global: {type: Boolean, default: false},
    size: {type: String, default: 'md'},
    text: {type: String, default: ''},
    value: {default: false}
  },
  data () {
    return {
      active: this.value,
      locked: false
    }
  },
  computed: {
    spinnerSize () { return 'spinner-' + (this.size ? this.size : 'sm') }
  },
  watch: {
    active (val, old) {
      if (val !== old) this.$emit('input', val)
    },
    value (val, old) {
      if (val !== old) { this[val ? 'show' : 'hide']() }
    }
  },
  methods: {
    hide () {
      var delay = 0
      this.active = false
    },
    show (options) {
      if (options) {
        if (options.text) { this.text = options.text }
        if (options.size) { this.size = options.size }
        if (options.fixed) { this.fixed = options.fixed }
      }
      // block scrolling when spinner is on
      this._body.style.overflowY = 'hidden'
      // activate spinner
      this._started = new Date()
      this.active = true
      this.locked = true
      this._unlock()
    }
  },
  created () {
    this._body = document.body
    this._bodyOverflow = document.body.style.overflowY
    this._unlock = delayer(function () {
      this.locked = false
      this._body.style.overflowY = this._bodyOverflow
    }, MIN_WAIT)
    if (this.global) {
      if (!this.$root._globalSpinner) {
        this.$root._globalSpinner = true
        var self = this
        this._global = {
          hide () { self.hide() },
          show () { self.show() }
        }
        this.$root.$on('spinner::show', this._global.show)
        this.$root.$on('spinner::hide', this._global.hide)
      }
    }
  },
  beforeDestroy () {
    if (this._global) {
      this.$root.$off('spinner::show', this._global.show)
      this.$root.$off('spinner::hide', this._global.hide)
      delete this.$root._globalSpinner
    }
    clearTimeout(this._spinnerAnimation)
    this._body.style.overflowY = this._bodyOverflow
  }
}
</script>

<style>
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.spinner-gritcode {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9998;
  position: absolute;
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
}
.spinner-gritcode.spinner-fixed {
  position: fixed;
}
.spinner-gritcode .spinner-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.spinner-gritcode .spinner-circle {
  position: relative;
  border: 4px solid #ccc;
  border-right-color: #337ab7;
  border-radius: 50%;
  display: inline-block;
  animation: spin 0.6s linear;
  animation-iteration-count: infinite;
  width: 3em;
  height: 3em;
  z-index: 2;
}
.spinner-gritcode .spinner-text {
  position: relative;
  text-align: center;
  margin-top: 0.5em;
  z-index: 2;
  width: 100%;
  font-size: 95%;
  color: #337ab7;
}
.spinner-gritcode.spinner-sm .spinner-circle {
  width: 1.5em;
  height: 1.5em;
}
.spinner-gritcode.spinner-md .spinner-circle {
  width: 2em;
  height: 2em;
}
.spinner-gritcode.spinner-lg .spinner-circle {
  width: 2.5em;
  height: 2.5em;
}
.spinner-gritcode.spinner-xl .spinner-circle {
  width: 3.5em;
  height: 3.5em;
}
.lt-ie10 .spinner-gritcode .spinner-circle,
.ie9 .spinner-gritcode .spinner-circle,
.oldie .spinner-gritcode .spinner-circle,
.no-csstransitions .spinner-gritcode .spinner-circle,
.no-csstransforms3d .spinner-gritcode .spinner-circle {
  background: url("http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif") center center no-repeat;
  animation: none;
  margin-left: 0;
  margin-top: 5px;
  border: none;
  width: 32px;
  height: 32px;
}
</style>

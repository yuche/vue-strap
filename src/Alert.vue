<template>
  <transition name="fade">
    <div
      v-show="show_"
      v-bind:class="{
      'alert':		true,
      'alert-success':(type == 'success'),
      'alert-warning':(type == 'warning'),
      'alert-info':	(type == 'info'),
      'alert-danger':	(type == 'danger'),
      'top': 			(placement === 'top'),
      'top-right': 	(placement === 'top-right')
      }"
      v-bind:style="{width:width}"
      role="alert">
      <button v-show="dismissable" type="button" class="close"
        @click="show_ = false">
        <span>&times;</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {coerce} from './utils/utils.js'

export default {
  data() {
    return {
      show_: this.show
    }
  },
  props: {
    type: {
      type: String
    },
    dismissable: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    show: {
      type: Boolean,
      coerce: coerce.boolean,
      default: true,
      twoWay: true
    },
    duration: {
      type: Number,
      coerce: coerce.number,
      default: 0
    },
    width: {
      type: String
    },
    placement: {
      type: String
    }
  },
  watch: {
    show (val) {
      this.show_ = val
      if (this._timeout) clearTimeout(this._timeout)
      if (val && Boolean(this.duration)) {
        this._timeout = setTimeout(() => {
          this.show_ = false
        }, this.duration)
      }
    },
    show_ (val) {
      this.$emit('update:show', val);
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.alert.top {
  position: fixed;
  top: 30px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1050;
}
.alert.top-right {
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 1050;
}
</style>

<template>
  <div role="dialog" :class="['modal',effect]" @click="backdrop&&action(false,1)" @transitionend="transition = false">
    <div :class="['modal-dialog',{'modal-lg':large,'modal-sm':small}]" role="document" :style="{width: optionalWidth}" @click.stop="action(null)">
      <div class="modal-content">
        <slot name="modal-header">
          <div class="modal-header">
            <button type="button" class="close" @click="action(false,2)"><span>&times;</span></button>
            <h4 class="modal-title"><slot name="title">{{title}}</slot></h4>
          </div>
        </slot>
        <slot name="modal-body"><div class="modal-body"><slot></slot></div></slot>
        <slot name="modal-footer">
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="action(false,3)">{{ cancelText }}</button>
            <button type="button" class="btn btn-primary" @click="action(true,4)">{{ okText }}</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {getScrollBarWidth} from './utils/utils.js'

export default {
  props: {
    backdrop: {type: Boolean, default: true},
    callback: {type: Function, default: null},
    cancelText: {type: String, default: 'Close'},
    effect: {type: String, default: null},
    large: {type: Boolean, default: false},
    okText: {type: String, default: 'Save changes'},
    small: {type: Boolean, default: false},
    title: {type: String, default: ''},
    value: {type: Boolean, required: true},
    width: {default: null}
  },
  data () {
    return {
      transition: false,
      val: null
    }
  },
  computed: {
    optionalWidth () {
      if (this.width === null) {
        return null
      } else if (Number.isInteger(this.width)) {
        return this.width + 'px'
      }
      return this.width
    }
  },
  watch: {
    transition (val, old) {
      if (val === old) { return }
      const el = this.$el
      const body = document.body
      if (val) {//starting
        if (this.val) {
          el.querySelector('.modal-content').focus()
          el.style.display = 'block'
          setTimeout(() => el.classList.add('in'), 0)
          body.classList.add('modal-open')
          if (getScrollBarWidth() !== 0) {
            body.style.paddingRight = getScrollBarWidth() + 'px'
          }
        } else {
          el.classList.remove('in')
        }
      } else {//ending
        this.$emit(this.val ? 'opened' : 'closed')
        if (!this.val) {
          el.style.display = 'none'
          body.style.paddingRight = null
          body.classList.remove('modal-open')
        }
      }
    },
    val (val, old) {
      this.$emit('input', val)
      if (old === null ? val === true : val !== old) this.transition = true
    },
    value (val, old) {
      if (val !== old) this.val = val
    }
  },
  methods: {
    action (val,p) {
      if (val === null) { return }
      if (val && this.callback instanceof Function) this.callback()
      this.$emit(val ? 'ok' : 'cancel',p)
      this.val = val || false
    }
  },
  mounted () {
    this.val = this.value
  }
}
</script>
<style>
.modal {
  transition: all 0.3s ease;
}
.modal.in {
  background-color: rgba(0,0,0,0.5);
}
.modal.zoom .modal-dialog {
  -webkit-transform: scale(0.1);
  -moz-transform: scale(0.1);
  -ms-transform: scale(0.1);
  transform: scale(0.1);
  top: 300px;
  opacity: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
.modal.zoom.in .modal-dialog {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transform: translate3d(0, -300px, 0);
  transform: translate3d(0, -300px, 0);
  opacity: 1;
}
</style>

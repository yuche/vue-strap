<template>
  <div role="dialog" :class="['modal',effect]">
    <div :class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document" :style="{width: optionalWidth}">
      <div class="modal-content">
        <slot name="modal-header">
          <div class="modal-header">
            <button type="button" class="close" @click="close"><span>&times;</span></button>
            <h4 class="modal-title"><slot name="title">{{ title }}</slot></h4>
          </div>
        </slot>
        <slot name="modal-body"><div class="modal-body"></div></slot>
        <slot name="modal-footer">
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="cancel">{{ cancelText }}</button>
            <button type="button" class="btn btn-primary" @click="ok">{{ okText }}</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {getScrollBarWidth} from './utils/utils.js'
import $ from './utils/NodeList.js'
// let coerce = {
//   backdrop: 'boolean',
//   large: 'boolean',
//   small: 'boolean',
//   value: 'boolean'
// }

export default {
  props: {
    backdrop: {type: Boolean, default: true},
    callback: {type: Function, default: null}, // called on ok
    cancelText: {type: String, default: 'Close'},
    effect: {type: String, default: null},
    large: {type: Boolean, default: false},
    okText: {type: String, default: 'Save changes'},
    small: {type: Boolean, default: false},
    title: {type: String, default: ''},
    width: {default: null},
    show: {type: Boolean, required: false}
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
    show (val) {
      this.$emit('show', val)
      const el = this.$el
      const body = document.body
      const scrollBarWidth = getScrollBarWidth()
      if (val) {
        $(el).find('.modal-content').focus()
        el.style.display = 'block'
        setTimeout(() => $(el).addClass('in'), 0)
        $(body).addClass('modal-open')
        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px'
        }
        if (this.backdrop) {
          $(el).on('click', e => {
            if (e.target === el) 
              this.$emit( 'cancel' )
          })
        }
      } else {
        body.style.paddingRight = null
        $(body).removeClass('modal-open')
        $(el).removeClass('in').on('transitionend', () => {
          $(el).off('click transitionend')
          el.style.display = 'none'
        })
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    ok () {
      if (this.callback instanceof Function) 
        this.callback()

      this.$emit('ok')
    },
    close() { 
      this.$emit( 'cancel' )
    }
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
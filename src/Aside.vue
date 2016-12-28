<template>
  <transition :name="'slide' + placement">
    <div class="aside" v-if="show" :style="{width:width+'px'}" :class="placement">
      <div class="aside-dialog">
        <div class="aside-content">
          <div class="aside-header">
            <button type="button" class="close" @click='trigger_close'><span>&times;</span></button>
            <h4 class="aside-title"><slot name="header">{{ header }}</slot></h4>
          </div>
          <div class="aside-body"><slot></slot></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {getScrollBarWidth} from './utils/utils.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    header: {type: String},
    placement: {type: String, default: 'right'},
    show: {type: Boolean, required: true},
    width: {type: Number, default: 320}
  },
  watch: {
    show (val, old) {
      this.$emit('input', val)
      this.$emit(this.show ? 'open' : 'close')
      const body = document.body
      const scrollBarWidth = getScrollBarWidth()
      if (val) {
        if (!this._backdrop) {
          this._backdrop = document.createElement('div')
        }
        this._backdrop.className = 'aside-backdrop'
        body.appendChild(this._backdrop)
        body.classList.add('modal-open')
        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px'
        }
        // request property that requires layout to force a layout
        var x = this._backdrop.clientHeight
        this._backdrop.classList.add('in')
        $(this._backdrop).on('click', () => this.trigger_close())
      } else {
        $(this._backdrop).on('transitionend', () => {
          $(this._backdrop).off()
          try {
            body.classList.remove('modal-open')
            body.style.paddingRight = '0'
            body.removeChild(this._backdrop)
            this._backdrop = null
          } catch (e) {}
        })
        this._backdrop.className = 'aside-backdrop'
      }
    }
  },
  methods: {
    trigger () {
      return {
        close: () => this.trigger_close(),
        open: () => this.trigger_open()
      }
    },
    trigger_close () {
      this.$emit( 'close' )
    },
    trigger_open() {
      this.$emit( 'open' )
    }
  },
  mounted () {
    this.$emit('trigger', () => this.trigger)
  }
}
</script>

<style>
.aside-open {
  transition: transform 0.3s;
}
.aside-open.has-push-right {
  transform: translateX(-300px);
}
.aside {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1049;
  overflow: auto;
  background: #fff;
}
.aside.left {
  left: 0;
  right: auto;
}
.aside.right {
  left: auto;
  right: 0;
}
.slideleft-enter {
  transform:translateX(-100%);
}
.slideleft-enter-active {
  animation:slideleft-in .3s;
}
.slideleft-leave-active {
  animation:slideleft-out .3s;
}
@keyframes slideleft-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideleft-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
.slideright-enter-active {
  animation:slideright-in .3s;
}
.slideright-leave-active {
  animation:slideright-out .3s;
}
@keyframes slideright-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideright-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.aside:focus {
    outline: 0;
}
@media (max-width: 991px) {
  .aside {
    min-width: 240px;
  }
}
.aside .aside-dialog .aside-header {
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.43px;
  padding: 6px 15px;
  background: #337ab7;
  color: #fff;
}
.aside .aside-dialog .aside-header .close {
  margin-right: -8px;
  padding: 4px 8px;
  color: #fff;
  font-size: 25px;
  opacity: .8;
}
.aside .aside-dialog .aside-body {
  position: relative;
  padding: 15px;
}
.aside .aside-dialog .aside-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.aside .aside-dialog .aside-footer .btn+.btn {
  margin-left: 5px;
  margin-bottom: 0;
}
.aside .aside-dialog .aside-footer .btn-group .btn+.btn {
  margin-left: -1px;
}
.aside .aside-dialog .aside-footer .btn-block+.btn-block {
  margin-left: 0;
}
.aside-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  opacity: 0;
  transition: opacity .3s ease;
  background-color: #000;
}
.aside-backdrop.in {
  opacity: .5;
  filter: alpha(opacity=50);
}
</style>

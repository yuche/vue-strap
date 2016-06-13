<template>
  <div class="aside"
    v-bind:style="{width:width + 'px'}"
    v-bind:class="{
    left:placement === 'left',
    right:placement === 'right'
    }"
    v-show="show"
    :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
    <div class="aside-dialog">
      <div class="aside-content">
        <div class="aside-header">
          <button type="button" class="close" @click='close'><span>&times;</span></button>
          <h4 class="aside-title">   
          <slot name="header"> 
            {{ header }}
          </slot>
          </h4>
        </div>
        <div class="aside-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventListener from './utils/EventListener.js'
import getScrollBarWidth from './utils/getScrollBarWidth.js'
import coerceBoolean from './utils/coerceBoolean.js'

  export default {
    props: {
      show: {
        type: Boolean,
        coerce: coerceBoolean,
        require: true,
        twoWay: true
      },
      placement: {
        type: String,
        default: 'right'
      },
      header: {
        type: String
      },
      width: {
        type: Number,
        default: '320'
      }
    },
    watch: {
      show(val) {
        let backdrop = document.createElement('div')
        const body = document.body
        backdrop.className = 'aside-backdrop'
        const scrollBarWidth =  getScrollBarWidth()
        if (val) {
          body.appendChild(backdrop)
          body.classList.add('modal-open')
          if (scrollBarWidth !== 0) {
            body.style.paddingRight = scrollBarWidth + 'px'
          }
          // request property that requires layout to force a layout
          var x = backdrop.clientHeight
          backdrop.className += ' in'
          this._clickEvent = EventListener.listen(backdrop, 'click', this.close)
        } else {
          if (this._clickEvent) this._clickEvent.remove()
          backdrop = document.querySelector('.aside-backdrop')
          try {
              backdrop.className = 'aside-backdrop'
              body.classList.remove('modal-open')
              body.style.paddingRight = '0'
              body.removeChild(backdrop)
          } catch(e) {}
        }
      }
    },
    methods: {
      close() {
        this.show = false
      }
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
    animation:slideleft-in .3s;
  }
  .slideleft-leave {
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
  .slideright-enter {
    animation:slideright-in .3s;
  }
  .slideright-leave {
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
      outline: 0
  }

  @media (max-width: 991px) {
      .aside {
          min-width:240px
      }
  }

  .aside.left {
      right: auto;
      left: 0
  }

  .aside.right {
      right: 0;
      left: auto
  }

  .aside .aside-dialog .aside-header {
      border-bottom: 1px solid #e5e5e5;
      min-height: 16.43px;
      padding: 6px 15px;
      background: #337ab7;
      color: #fff
  }

  .aside .aside-dialog .aside-header .close {
      margin-right: -8px;
      padding: 4px 8px;
      color: #fff;
      font-size: 25px;
      opacity: .8
  }

  .aside .aside-dialog .aside-body {
      position: relative;
      padding: 15px
  }

  .aside .aside-dialog .aside-footer {
      padding: 15px;
      text-align: right;
      border-top: 1px solid #e5e5e5
  }

  .aside .aside-dialog .aside-footer .btn+.btn {
      margin-left: 5px;
      margin-bottom: 0
  }

  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
      margin-left: -1px
  }

  .aside .aside-dialog .aside-footer .btn-block+.btn-block {
      margin-left: 0
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
      background-color: #000
  }


  .aside-backdrop.in {
      opacity: .5;
      filter: alpha(opacity=50)
  }
</style>

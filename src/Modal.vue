<template>
  <div class="modal fade" role="dialog"
    v-class="
    fade:effect === 'fade',
    zoom:effect === 'zoom'"
    >
    <div class="modal-dialog" role="document"
      v-style="width: width + 'px'
      ">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" v-on='click:close'><span>&times;</span></button>
          <h4 class="modal-title" >{{title}}</h4>
        </div>
        <div class="modal-body">
          <content></content>
        </div>
        <div class="modal-footer" v-show="footer">
          <button type="button" class="btn btn-default" v-on='click:close'>Close</button>
          <button type="button" class="btn btn-primary" v-on='click:callback'>Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from './utils.js'

  export default {
    props: {
      title: {
        default: ''
      },
      footer: {
        default: true
      },
      show: {
        require: true,
        type: Boolean,
        twoWay: true
      },
      width: {
        type: Number,
        default: 600
      },
      callback: {
        type: Function,
        default: function(){}
      },
      effect: {
        type: String,
        default: 'fade'
      }
    },
    watch: {
      show(val) {
        const el = this.$el
        const body = document.querySelector('body')
        const scrollBarWidth = Utils.getScrollBarWidth && Utils.getScrollBarWidth()
        function addClassIn() {
          el.classList.add('in')
        }
        function setDisplayNone() {
          el.style.display = 'none'
          body.classList.remove('modal-open')
          body.style.paddingRight = '0'
        }
        if (val) {
          el.style.display = 'block'
          setTimeout(addClassIn, 0)
          if (scrollBarWidth !== 0) {
            body.classList.add('modal-open')
            body.style.paddingRight = scrollBarWidth + 'px'
          }
        } else {
          setTimeout(setDisplayNone, 150)
          el.classList.remove('in')
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
.modal {
  transition: all 0.15s ease;
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
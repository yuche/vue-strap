<template>
<div>
<div v-bind:class="{'vue-affix': affixed}"
  v-bind:style="styles">
  <slot></slot>
</div>
</div>
</template>

<script>
import EventListener from './utils/EventListener.js'
  export default {
    props: {
      offset: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        affixed: false,
        styles: {}
      }
    },
    methods: {
      scrolling() {
        const scrollTop = this.getScroll(window, true)
        const elementOffset = this.getOffset(this.$el)
        if (!this.affixed && scrollTop > elementOffset.top) {
          this.affixed = true
          this.styles = {
            top: this.offset + 'px',
            left: elementOffset.left + 'px',
            width: this.$el.offsetWidth + 'px'
          }
        }
        if (this.affixed && scrollTop < elementOffset.top) {
          this.affixed = false
          this.styles = {}
        }
      },
      // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
      getScroll(w, top) {
        let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']
        const method = 'scroll' + (top ? 'Top' : 'Left')
        if (typeof ret !== 'number') {
          const d = w.document
          // ie6,7,8 standard mode
          ret = d.documentElement[method]
          if (typeof ret !== 'number') {
            // quirks mode
            ret = d.body[method]
          }
        }
        return ret
      },
      getOffset(element) {
        const rect = element.getBoundingClientRect()
        const body = document.body
        const clientTop = element.clientTop || body.clientTop || 0
        const clientLeft = element.clientLeft || body.clientLeft || 0
        const scrollTop = this.getScroll(window, true)
        const scrollLeft = this.getScroll(window)
        return {
          top: rect.top + scrollTop - clientTop,
          left: rect.left + scrollLeft - clientLeft
        }
      }
    },
    ready() {
      this._scrollEvent = EventListener.listen(window, 'scroll', this.scrolling)
      this._resizeEvent = EventListener.listen(window, 'resize', this.scrolling)
    },
    beforeDestroy() {
      if (this._scrollEvent) {
        this._scrollEvent.remove()
      }
      if (this._resizeEvent) {
        this._resizeEvent.remove()
      }
    }
  }
</script>

<style>
  .vue-affix {
    position: fixed;
  }
</style>

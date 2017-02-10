<template>
<div class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators" v-show="indicators">
    <li v-for="(indicator,i) in indicator_list" @click="indicatorClick(i)" :class="{active:i === index}"><span></span></li>
  </ol>
  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <slot></slot>
  </div>
  <!-- Controls -->
  <div v-show="controls" class="carousel-controls hidden-xs">
    <a class="left carousel-control" role="button" @click="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    </a>
    <a class="right carousel-control" role="button" @click="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    </a>
  </div>
</div>
</template>

<script>
import $ from './utils/NodeList.js'
// let coerce = {
//   interval: 'number'
// }

export default {
  props: {
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      indicator_list: [],
      index: 0,
      isAnimating: false
    }
  },
  watch: {
    index (newVal, oldVal) {
      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)
    }
  },
  methods: {
    indicatorClick (index) {
      if (this.isAnimating || this.index === index) return false
      this.isAnimating = true
      this.index = index
    },
    slide (direction, next, prev) {
      if (!this.$el) { return }
      const $slider = $('.item', this.$el)
      if (!$slider.length) { return }
      const selected = $slider[next] || $slider[0]
      $(selected).addClass(direction === 'left' ? 'next' : 'prev')
      // request property that requires layout to force a layout
      var x = selected.clientHeight
      $([$slider[prev], selected]).addClass(direction).on('transitionend', () => {
        $slider.off('transitionend').className = 'item'
        $(selected).addClass('active')
        this.isAnimating = false
      })
    },
    next () {
      if (!this.$el || this.isAnimating) { return false }
      this.isAnimating = true
      this.index + 1 < $('.item', this.$el).length ? this.index += 1 : this.index = 0
    },
    prev () {
      if (!this.$el || this.isAnimating) { return false }
      this.isAnimating = true
      this.index === 0 ? this.index = $('.item', this.$el).length - 1 : this.index -= 1
    },
    toggleInterval (val) {
      if (val === undefined) { val = this._intervalID }
      if(this._intervalID) {
        clearInterval(this._intervalID)
        delete this._intervalID
      }
      if(val && this.interval > 0) {
        this._intervalID = setInterval(this.next, this.interval)
      }
    }
  },
  mounted () {
    this.toggleInterval(true)
    $(this.$el).on('mouseenter', () => this.toggleInterval(false)).on('mouseleave', () => this.toggleInterval(true))
  },
  beforeDestroy () {
    this.toggleInterval(false)
    $(this.$el).off('mouseenter mouseleave')
  }
}
</script>

<style scoped>
.carousel-control {
  cursor: pointer;
}
</style>

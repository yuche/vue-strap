<template>
<div class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators" v-show="indicators">
    <li v-for="i in indicator" @click="indicatorClick($index)" v-bind:class="{active:$index === index}"><span></span></li>
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
import {coerce} from './utils/utils.js'
import $ from './utils/NodeList.js'

  export default {
    props: {
      indicators: {
        type: Boolean,
        coerce: coerce.boolean,
        default: true
      },
      controls: {
        type: Boolean,
        coerce: coerce.boolean,
        default: true
      },
      interval: {
        type: Number,
        coerce: coerce.number,
        default: 5000
      }
    },
    data () {
      return {
        indicator: [],
        index: 0,
        isAnimating: false
      }
    },
    computed: {
      slider () {
        return this.$el.querySelectorAll('.item')
      }
    },
    watch: {
      index(newVal, oldVal) {
        this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)
      }
    },
    methods: {
      indicatorClick(index) {
        if (this.isAnimating || this.index === index) return false
        this.isAnimating = true
        this.index = index
      },
      slide (direction, next, prev) {
        const selected = this.slider[next]
        $(selected).addClass(direction === 'left' ? 'next' : 'prev')
        // request property that requires layout to force a layout
        var x = selected.clientHeight
        $([this.slider[prev], selected]).addClass(direction).on('transitionend', () => {
          $(this.slider).off('transitionend').className = 'item'
          $(selected).addClass('active')
          this.isAnimating = false
        })
      },
      next() {
        if (this.isAnimating) return false
        this.isAnimating = true
        this.index + 1 < this.slider.length ? this.index += 1 : this.index = 0
      },
      prev() {
        if (this.isAnimating) return false
        this.isAnimating = true
        this.index === 0 ? this.index = this.slider.length - 1 : this.index -= 1
      }
    },
    ready () {
      if (this.interval > 0) {
        let intervalID = null
        const intervalManager = () => {
          intervalID = setInterval(this.next, this.interval)
        }
        $(this.$el).on('mouseenter', () => clearInterval(intervalID)).on('mouseleave', () => intervalManager())
        intervalManager()
      }
    }
  }
</script>

<style scoped>
.carousel-control {
  cursor: pointer;
}
</style>

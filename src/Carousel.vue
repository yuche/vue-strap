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
import EventListener from './utils/EventListener.js'
import coerceBoolean from './utils/coerceBoolean.js'
import coerceNumber from './utils/coerceNumber.js'

  export default {
    props: {
      indicators: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      controls: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      interval: {
        type: Number,
        coerce: coerceNumber,
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
        newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)
      }
    },
    methods: {
      indicatorClick(index) {
        if (this.isAnimating || this.index === index) return false
        this.isAnimating = true
        this.index = index
      },
      slide (direction, selected, prev) {
        if (this._prevSelectedEvent) this._prevSelectedEvent.remove()
        if (this._selectedEvent) this._selectedEvent.remove()

        const prevSelectedEl = this.slider[prev]
        const selectedEl = this.slider[selected]
        const transitionendFn = () => {
          [...this.slider].forEach((el) => el.className = 'item')
          selectedEl.classList.add('active')
          this.isAnimating = false
        }

        direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev')
        // request property that requires layout to force a layout
        var x = selectedEl.clientHeight
        this._prevSelectedEvent = EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)
        this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)
        prevSelectedEl.classList.add(direction)
        selectedEl.classList.add(direction)
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
      let intervalID = null
      const el = this.$el
      function intervalManager (flag, func, time) {
        flag ? intervalID = setInterval(func, time) : clearInterval(intervalID)
      }
      if (this.interval > 0) {
        intervalManager(true, this.next, this.interval)
        el.addEventListener('mouseenter', () => intervalManager(false))
        el.addEventListener('mouseleave', () => intervalManager(true, this.next, this.interval))
      }
    }
  }
</script>

<style scoped>
.carousel-control {
  cursor: pointer;
}
</style>

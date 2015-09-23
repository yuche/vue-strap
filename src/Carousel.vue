<template>
<div class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators" v-show="indicators">
    <indicator v-repeat="indicator"></indicator>
  </ol>
  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <content>
    </content>
  </div>
  <!-- Controls -->
  <a v-show="controls" class="left carousel-control" v-on="click:prevClick">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a v-show="controls" class="right carousel-control" v-on="click:nextClick">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
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
      autoplay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 5000
      }
    },
    components: {
      'indicator': {
        inherit: true,
        template: `<li v-on="click:handleIndicatorClick($index)"
        v-class="active:$index === activeIndex"
        ></li>`,
        methods: {
          handleIndicatorClick(index) {
            if (this.isAnimating) return false
            this.isAnimating = true
            this.activeIndex = index
          }
        },
      }
    },
    data() {
      return {
        indicator: [],
        activeIndex: 0,
        isAnimating: false
      }
    },
    computed: {
      slider() {
        return this.$el.querySelectorAll('.item')
      }
    },
    watch: {
      activeIndex(newVal, oldVal) {
        newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)
      }
    },
    methods: {
      slide(direction, selected, prev) {
        const prevSelectedElement = this.slider[prev]
        const selectedElement = this.slider[selected]
        const transitionendFn = ()=> {
          [...this.slider].forEach((el)=> el.className = 'item')
          selectedElement.classList.add('active')
          this.isAnimating = false
        }

        direction === 'left' ? selectedElement.classList.add('next') : selectedElement.classList.add('prev')
        // request property that requires layout to force a layout
        var x = selectedElement.clientHeight
        selectedElement.addEventListener('transitionend', transitionendFn, false)
        prevSelectedElement.addEventListener('transitionend', transitionendFn, false)
        prevSelectedElement.classList.add(direction)
        selectedElement.classList.add(direction)
      },
      nextClick() {
        if (this.isAnimating) return false
        this.isAnimating = true
        this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0
      },
      prevClick() {
        if (this.isAnimating) return false
        this.isAnimating = true
        this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1
      }
    },
    ready() {
      let intervalID = null
      const el = this.$el
      function intervalManager(flag, func, time) {
        flag ? intervalID =  setInterval(func, time) : clearInterval(intervalID)
      }
      if (this.autoplay && this.interval) {
        intervalManager(true, this.nextClick, this.interval)
        el.addEventListener('mouseenter', ()=> intervalManager(false))
        el.addEventListener('mouseleave', ()=> intervalManager(true, this.nextClick, this.interval))
      }
    },

  }
</script>

<style scoped>
  .carousel-control {
    cursor: pointer;
  }

</style>

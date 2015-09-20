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
            this.activeIndex = index
          }
        },
      }
    },
    data() {
      return {
        indicator: [],
        activeIndex: 0
      }
    },
    computed: {
      slider() {
        return this.$el.querySelectorAll('.item')
      }
    },
    watch: {
      activeIndex(newVal, oldVal) {
        if (newVal > oldVal) {
          this.slide('left', newVal, oldVal)
        } else {
          this.slide('right', newVal, oldVal)
        }
      }
    },
    methods: {
      slide(direction, selected, prev) {
        const prevSelectedElement = this.slider[prev]
        const selectedElement = this.slider[selected]
        direction === 'left' ? selectedElement.classList.add('next') : selectedElement.classList.add('prev')
        // request property that requires layout to force a layout
        var x = selectedElement.clientHeight
        prevSelectedElement.classList.add(direction)
        selectedElement.classList.add(direction)
        setTimeout(()=> {
          [...this.slider].forEach((el)=> el.className = 'item')
          selectedElement.classList.add('active')
        }, 650)
      },
      nextClick() {
        this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0
      },
      prevClick() {
        this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1
      }
    },
    ready() {
      // console.log(this.slider.length)
    },

  }
</script>

<style scoped>
  .carousel-control {
    cursor: pointer;
  }
</style>

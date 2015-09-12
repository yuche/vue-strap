<template>
  <div class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators" v-show="indicators">
    <li 
      v-repeat="2"
      v-on="click:handleIndicatorClick($index)"
      v-class="active:$index == activeIndex">
    </li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <content>
      
    </content>
  </div>

  <!-- Controls -->
  <a v-show="controls" class="left carousel-control">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a v-show="controls" class="right carousel-control">
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
    data() {
      return {
        indicator: 2,
        activeIndex: 0
      }
    },
    methods: {
      handleIndicatorClick(index) {
        this.activeIndex = index
      }
    },
    ready() {
      console.log(this.$children.length)
    },

  }
</script>
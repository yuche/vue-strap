<template>
  <div>
    <!-- Nav tabs -->
     <ul class="nav nav-tabs" role="tablist">
       <tablist v-repeat="renderData"></tablist>
     </ul>

     <!-- Tab panes -->
     <div class="tab-content" v-el="tabContent">
       <content></content>
     </div>

  </div>
</template>

<script>
  export default {
    props: {
      effect: {
        type: String,
        default: 'fadein'
      }
    },
    data() {
      return {
        renderData: [],
        activeIndex: 0
      }
    },
    components: {
      'tablist': {
        inherit: true,
        template: `<li v-on="click:handleTablistClick($event,$index,this)"
        v-class="active:$index === activeIndex,
        disabled:disabled === true">
        <a href="#">
        {{{header}}}
        </a></li>`,
        methods: {
          handleTablistClick(e, index, el) {
            e.preventDefault()
            if (!el.disabled) this.activeIndex = index
          }
        },
      }
    }
  }
</script>

<style scoped>
  .nav-tabs {
    margin-bottom: 15px
  }
</style>
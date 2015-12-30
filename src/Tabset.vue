<template>
  <div>
    <!-- Nav tabs -->
     <ul class="nav nav-tabs" role="tablist">
            <li
                v-for="r in renderData"
                v-bind:class="{
                  'active': ($index === activeIndex),
                  'disabled': r.disabled
                }"
                @click.prevent="handleTabListClick($index, r)"
                :disabled="r.disabled"
            >
                <a href="#">{{r.header}}</a>
            </li>
     </ul>

     <!-- Tab panes -->
     <div class="tab-content" v-el:tabContent>
        <slot></slot>
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
    methods: {
        handleTabListClick(index, el) {
            if (!el.disabled) this.activeIndex = index
        }
    }
  }
</script>

<style scoped>
  .nav-tabs {
    margin-bottom: 15px
  }
</style>

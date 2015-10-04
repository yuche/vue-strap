<template>
  <div class="btn-group" v-class="open:show">
    <button v-el="btn" type="button" class="btn btn-default dropdown-toggle" v-on="click:toggleDropdown,blur:this.show = false">
          <span class="placeholder" v-show="showPlaceholder">
            {{placeholder}}
          </span>
          <span class="content">
            {{value.join(', ')}}
          </span>
          <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <content></content>
      <div class="notify" v-show="showNotify" v-transition="fadein">Limit reached ({{limit}} items max).</div>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        twoWay: true,
        type: Array,
        default() {
          return []
        }
      },
      placeholder: {
        type: String,
        default: 'Nothing Selected'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      limit: {
        type: Number,
        default: 1024
      }
    },
    data() {
      return {
        show: false,
        showNotify: false
      }
    },
    computed: {
      showPlaceholder() {
        return this.value.length <= 0
      }
    },
    watch: {
      value(val) {
        let timeout
        if (timeout) clearTimeout(timeout)
        if (val.length > this.limit) {
          this.showNotify = true
          this.value.pop()
          timeout = setTimeout(()=> this.showNotify = false, 1000)
        }
      }
    },
    methods: {
      toggleDropdown() {
        this.show = !this.show
      }
    }
  }
</script>
<style>
.btn-group .dropdown-menu .notify {
  position: absolute;
  bottom: 5px;
  width: 96%;
  margin: 0 2%;
  min-height: 26px;
  padding: 3px 5px;
  background: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
   pointer-events: none;
  opacity: .9;
}
</style>

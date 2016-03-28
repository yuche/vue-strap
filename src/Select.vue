<template>
  <div class="btn-group" v-bind:class="{open: show}">
    <button v-el:btn type="button" class="btn btn-default dropdown-toggle"
      @click="toggleDropdown"
      @blur="show = (search ? show : false)"
      v-bind="{disabled: disabled}"
    >
      <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
      <span class="btn-content">{{ selectedItems }}</span>
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="search" class="bs-searchbox">
          <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
        </li>
        <li v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
          <a @mousedown.prevent="select(option.value)" style="cursor:pointer">
            {{ option.label }}
            <span class="glyphicon glyphicon-ok check-mark" v-show="value.indexOf(option.value) !== -1"></span>
          </a>
        </li>
      </template>
      <slot v-else></slot>
      <div class="notify" v-show="showNotify" transition="fadein">Limit reached ({{limit}} items max).
      </div>
    </ul>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

  export default {
    props: {
      options: {
        type: Array,
        default() { return [] },
      },
      value: {
        twoWay: true
      },
      placeholder: {
        type: String,
        default: 'Nothing Selected'
      },
      multiple: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      search: { // Allow searching (only works when options are provided)
      	type: Boolean,
        coerce: coerceBoolean,
      	default: false
      },
      limit: {
        type: Number,
        default: 1024
      },
      closeOnSelect: { // only works when multiple==false
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      disabled: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    ready() {
      if (this.value.constructor !== Array) {
        if (this.value.length === 0) {
          this.value = []
        } else {
          this.value = [this.value]
        }
      } else {
        if (!this.multiple && this.value.length > 1) {
          this.value = this.value.slice(0, 1)
        } else if (this.multiple && this.value.length > this.limit) {
          this.value = this.value.slice(0, this.limit)
        }
      }
    },
    data() {
      return {
        searchText: null,
        show: false,
        showNotify: false
      }
    },
    computed: {
      selectedItems() {
        let foundItems = []
        if (this.value.length) {
          for (let item in this.value) {
            if (typeof this.value[item] === "string") {
              foundItems.push(this.value[item])
            }
          }
          return foundItems.join(', ')
        }
      },
      showPlaceholder() {
        return this.value.length === 0
      }
    },
    watch: {
      value(val) {
        if (val.length > this.limit) {
          this.showNotify = true
          this.value.pop()
          setTimeout(() => this.showNotify = false, 1000)
        }
      }
    },
    methods: {
      select(v) {
          if (this.value.indexOf(v) === -1) {
            if (this.multiple) {
              this.value.push(v)
            } else {
              this.value = [v]
            }
          } else {
            if (this.multiple) {
              this.value.$remove(v)
            }
          }
          if (this.closeOnSelect) {
            this.toggleDropdown()
          }
      },
      toggleDropdown() {
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>
  .bs-searchbox {
    padding: 4px 8px;
  }
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

<template>
<div style="position: relative"
  v-bind:class="{'open':(showDropdown && (filteredData.length >0))}"
  >
  <input type="text" class="form-control"
    :placeholder="placeholder"
    autocomplete="off"
    v-model="query"
    @input="update"
    @keydown.up="up"
    @keydown.down="down"
    @keydown.enter= "hit"
    @keydown.esc="reset"
    @blur="showDropdown = false"
  />
  <div class="dropdown-menu" v-el:dropdown>
    <a v-for="item in filteredData | limitBy limit" 
       class="dropdown-item"
       v-bind:class="{'active': isActive($index)}"
       @mousedown.prevent="hit"
       @mousemove="setActive($index)"
    >
      <partial :name="templateName"></partial>
    </a>
    <h6 class="dropdown-header" style="font-size:80%;"
      v-if="limit && filteredData.length > limit"
    >
      {{ filteredData.length }} items found (not shown)
    </h6>
  </div>
</div>

</template>

<script>
import callAjax from './utils/callAjax.js';
import Vue from 'vue';
var filter = Vue.filter('filterBy');

const typeahead = {
    partials: {
      'default': '<span v-html="item | highlight query"></span>',
    },
    props: {
      data: {
        type: Array
      },
      limit: {
        type: Number,
        default: 8
      },
      async: {
        type: String
      },
      template: {
        type:String
      },
      templateName: {
        type:String,
        default: 'default'
      },
      key: {
        type: String
      },
      matchCase: {
        type: Boolean,
        default: false
      },
      onHit: {
        type: Function,
        default(items) {
          this.reset()
          this.query = items
        }
      },
      placeholder: {
        type: String
      }
    },
    data() {
      return {
        query: '', // this string is bound to the text box (searchbox)
        showDropdown: false,
        noResults: true,
        current: 0
      }
    },
    computed: {
      filteredData() {
        return filter(this.data,this.query);
      },
    },
    created() {
      // register a partial:
      if (this.templateName && this.templateName!=='default')
      {
        Vue.partial(this.templateName, this.template)
      }
    },
    methods: {
      update() {
        if (!this.query) {
          this.reset()
          return false
        }
        if (this.data) {
          this.showDropdown = this.filteredData.length ? true : false
        }
        if (this.async) {
          callAjax(this.async + this.query, (data)=> {
            this.data = data[this.key].slice(0, this.limit)
            this.showDropdown = this.data.length ? true : false
          })
        }
      },
      reset() {
        this.query = ''
        this.loading = false
        this.showDropdown = false
      },
      setActive(index) {
        this.current = index
      },
      isActive(index) {
        return this.current === index
      },
      hit(e) {
        e.preventDefault()
        this.onHit(this.filteredData[this.current], this);
      },
      up() {
        if (this.current > 0) this.current--
      },
      down() {
        if (this.current < this.filteredData.length - 1) this.current++
      }
    },
    filters: {
      highlight(value, phrase) {
        return value.replace(new RegExp('('+phrase+')', 'gi'), '<strong>$1</strong>')
      }
    }
  }
export default typeahead
</script>

<style>
.dropdown-menu > li > a {
  cursor: pointer;
}
</style>

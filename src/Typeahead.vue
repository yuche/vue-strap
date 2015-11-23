<template>
<div style="position: relative"
  v-bind:class="{'open':showDropdown}"
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
  <ul class="dropdown-menu" v-el:dropdown>
    <li v-for="item in items" v-bind:class="{'active': isActive($index)}">
      <a @mousedown.prevent="hit" @mousemove="setActive($index)">
        <partial :name="templateName"></partial>
      </a>
    </li> 
  </ul>
</div>

</template>

<script>
import callAjax from './utils/callAjax.js'
const typeahead = {
    created() {
      this.items = this.primitiveData
    },
    partials: {
      'default': 'asdf<span v-html="item | highlight query"></span>',
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
        query: '',
        showDropdown: false,
        noResults: true,
        current: 0,
        items: [],
      }
    },
    computed: {
      primitiveData() {
        if (this.data) {
          return this.data.filter(value=> {
            value = this.matchCase ? value : value.toLowerCase()
            return value.indexOf(this.query) !== -1
          }).slice(0, this.limit)
        }
      }
    },
    ready() {
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
          this.items = this.primitiveData
          this.showDropdown = this.items.length ? true : false
        }
        if (this.async) {
          callAjax(this.async + this.query, (data)=> {
            this.items = data[this.key].slice(0, this.limit)
            this.showDropdown = this.items.length ? true : false
          })
        }
      },
      reset() {
        this.items = []
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
        console.log("e", e, "e.targetVm", e.targetVM);
        e.preventDefault()
        this.onHit(this.items[this.current], this);
      },
      up() {
        if (this.current > 0) this.current--
      },
      down() {
        if (this.current < this.items.length - 1) this.current++
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

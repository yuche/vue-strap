<template>
<div style="position: relative"
  v-class="open:showDropdown"
  >
  <input type="text" class="form-control"
  placeholder="{{placeholder}}"
  autocomplete="off"
  v-model="query"
  v-on="
  input: update,
  keydown: up|key 'up',
  keydown: down | key 'down',
  keydown: hit|key 'enter',
  keydown: reset|key 'esc',
  blur:showDropdown = false
  "
  />
  <ul class="dropdown-menu" v-el="dropdown">
  <list></list>
  </ul>
</div>

</template>

<script>
import callAjax from './utils/callAjax.js'
const typeahead = {
    created() {
      this.items = this.primitiveData
    },
    components: {
      list: {
        inherit: true,
        template: '',
        created() {
          this.$options.template = `<li v-repeat="items" v-class="active: isActive($index)"><a v-on="mousedown:hit,mousemove: setActive($index)">${this.template}</a></li>`
        }
      }
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
        default: '<span v-html="$value | highlight query"></span>'
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
        e.preventDefault()
        this.onHit(this.items[this.current], e.targetVM)
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

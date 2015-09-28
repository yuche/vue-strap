<template>
<div style="position: relative" 
  v-class="open:showDropdown">
  <input type="text" class="form-control" 
  autocomplete="off"
  v-model="query"
  v-on="input:update,
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
          console.log(this.template)
          this.$options.template = `<li v-repeat="items" v-class="active: isActive($index)"><a v-on="click:hit,mousemove: setActive($index)" v-html="${this.template}"></a></li>`
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
      src: {
        type: String
      },
      template: {
        default: '$value | highlight query'
      },
      key: {
        type: String
      },
      onHit: {
        type: Function,
        default(items) {
          console.log(items)
        }
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
            return value.toLowerCase().indexOf(this.query) !== -1
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
          if (this.items.length) {
            this.showDropdown = true
          } else {
            this.showDropdown = false
          }
        }
        if (this.src) {
          callAjax(this.src + this.query, (data)=> {
            // todo array or not
            this.items = data[this.key].slice(0, this.limit)
            if (this.items.length) {
              this.showDropdown = true
            } else {
              this.showDropdown = false
            }
          })
        }
      },
      reset() {
        this.items = []
        this.query = ''
        this.loading = false
        this.showDropdown = false
      },
      dropdown() {
        const dropdown = [...this.$$.dropdown.children]
        dropdown.length > 0 ? this.showDropdown = true : this.showDropdown = false
      },
      setActive: function (index) {
        this.current = index
      },
      isActive: function (index) {
        return this.current == index
      },
      hit: function () {
        console.log(this.items[this.current])
        this.onHit(this.items[this.current])
      },
      up: function () {
        if (this.current > 0) this.current--
      },
      down: function () {
        if (this.current < this.items.length-1) this.current++
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
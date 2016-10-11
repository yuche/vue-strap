<template>
  <div style="position: relative" :class="{'open':showDropdown}">
    <input type="text" class="form-control" autocomplete="off"
      :placeholder="placeholder"
      :value="value"
      @blur="showDropdown = false"
      @input="update"
      @keydown.down="down"
      @keydown.enter= "hit"
      @keydown.esc="reset"
      @keydown.up="up"
    />
    <ul class="dropdown-menu" ref="dropdown">
      <li v-for="(item, i) in items" :class="{'active': isActive(i)}">
        <a @mousedown.prevent="hit" @mousemove="setActive(i)">
          <partial :name="templateName"></partial>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {getJSON} from './utils/utils.js'
// let coerce = {
//     matchCase: 'boolean',
//     matchStart: 'boolean'
// }

let Vue = window.Vue

export default {
  partials: {
    default: '<span v-html="highlight(item,query)"></span>'
  },
  props: {
    async: {type: String},
    data: {type: Array},
    key: {type: String, default: null},
    limit: {type: Number, default: 8},
    matchCase: {type: Boolean, default: false},
    matchStart: {type: Boolean, default: false},
    onHit: {
      type: Function,
      default (items) {
        this.reset()
        this.value = items
      }
    },
    placeholder: {type: String},
    template: {type: String},
    templateName: {type: String, default: 'default'},
    value: {type: String, default: ''}
  },
  data () {
    return {
      showDropdown: false,
      noResults: true,
      current: 0,
      items: []
    }
  },
  computed: {
    primitiveData () {
      if (this.data) {
        return this.data.filter(value => {
          value = this.matchCase ? value : value.toLowerCase()
          var query = this.matchCase ? this.value : this.value.toLowerCase()
          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1
        }).slice(0, this.limit)
      }
    }
  },
  watch: {
    value (val) {
      this.$emit('input', val)
    }
  },
  created () {
    this.items = this.primitiveData
  },
  mounted () {
    // register a partial:
    if (this.templateName && this.templateName !== 'default') {
      Vue.partial(this.templateName, this.template)
    }
  },
  methods: {
    highlight (value, phrase) { return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>') },
    update (e) {
      this.$emit('input', this.value, e)
      if (!this.value) {
        this.reset()
        return false
      }
      if (this.data) {
        this.items = this.primitiveData
        this.showDropdown = this.items.length > 0
      }
      if (this.async) {
        getJSON(this.async + this.value).then(data => {
          this.items = (this.key ? data[this.key] : data).slice(0, this.limit)
          this.showDropdown = this.items.length > 0
        })
      }
    },
    reset () {
      this.items = []
      this.value = ''
      this.loading = false
      this.showDropdown = false
    },
    setActive (index) {
      this.current = index
    },
    isActive (index) {
      return this.current === index
    },
    hit (e) {
      e.preventDefault()
      this.onHit(this.items[this.current], this)
    },
    up () {
      if (this.current > 0) this.current--
    },
    down () {
      if (this.current < this.items.length - 1) this.current++
    }
  }
}
</script>

<style>
.dropdown-menu > li > a {
  cursor: pointer;
}
</style>
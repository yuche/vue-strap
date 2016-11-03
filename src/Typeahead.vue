<template>
  <div style="position: relative" :class="{'open':showDropdown}">
    <input type="text" class="form-control" autocomplete="off"
      v-model="val"
      :placeholder="placeholder"
      @blur="showDropdown = false"
      @keydown.down="down"
      @keydown.enter= "hit"
      @keydown.esc="reset"
      @keydown.up="up"
    />
    <ul class="dropdown-menu" ref="dropdown">
      <li v-for="(item, i) in items" :class="{'active': isActive(i)}">
        <a @mousedown.prevent="hit" @mousemove="setActive(i)">
          <component :is="tmpl" :item="item"></component>
          <!-- <partial :name="templateName"></partial> -->
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {delayer, getJSON} from './utils/utils.js'
var DELAY = 300

export default {
  props: {
    async: {type: String},
    data: {type: Array},
    delay: {type: Number, default: DELAY},
    asyncKey: {type: String, default: null},
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
    templateName: {type: String, default: null},
    value: {type: String, default: ''}
  },
  data () {
    return {
      showDropdown: false,
      noResults: true,
      current: 0,
      items: [],
      val: ''
    }
  },
  computed: {
    templateHtml () { return typeof this.template === 'string' ? '<span>' + this.template + '</span>' : null },
    tmpl () { return this._tmpl}
  },
  watch: {
    val (val, old) {
      this.$emit('input', val)
      if (val !== old) this.update()
    },
    value (val) {
      if (this.val !== val) { this.val = val }
    }
  },
  created () {
    this.val = this.value
    this._tmpl = {
      template: this.templateHtml || this.templateName || '<strong v-html="item"></strong>',
      props: {
        item: {default: null}
      }
    }
    this.update()
  },
  methods: {
    setItems (data) {
      if (this.async) {
        this.items = this.asyncKey ? data[this.asyncKey] : data
        this.items = this.items.slice(0, this.limit)
      } else {
        this.items = (data || []).filter(value => {
          if (typeof value === 'object') { return true }
          value = this.matchCase ? value : value.toLowerCase()
          var query = this.matchCase ? this.val : this.val.toLowerCase()
          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1
        }).slice(0, this.limit)
      }
      this.showDropdown = this.items.length > 0
    },
    update: delayer(function () {
      if (!this.val) {
        this.reset()
        return false
      }
      if (this.async) {
        getJSON(this.async + this.val).then(data => {
          this.setItems(data)
        })
      } else if (this.data) {
        this.setItems(this.data)
      }
    }, 'delay', DELAY),
    reset () {
      this.items = []
      this.val = ''
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
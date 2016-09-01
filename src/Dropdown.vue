<template>
  <li v-if="$parent._navbar||$parent.menu||$parent._tabset" v-el:dropdown class="dropdown" :class="classes">
      <a v-if="text" class="dropdown-toggle" role="button" :class="{disabled: disabled}" @keyup.esc="show = false">
        {{ text }}
        <span class="caret"></span>
      </a>
      <slot v-else name="button"></slot>
    <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
    <ul v-else class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
  <div v-else v-el:dropdown class="btn-group" :class="classes">
      <button v-if="text" type="button" class="btn btn-{{type||'default'}} dropdown-toggle" @keyup.esc="show = false" :disabled="disabled">
        {{ text }}
        <span class="caret"></span>
      </button>
      <slot v-else name="button"></slot>
    <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
    <ul v-else class="dropdown-menu">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import {coerce} from './utils/utils.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    show: {
      twoWay: true,
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    'class': null,
    disabled: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    classes () {
      return [{open: this.show, disabled: this.disabled}, this.class]
    },
    menu () {
      return !this.$parent || this.$parent.navbar
    },
    submenu () {
      return this.$parent && (this.$parent.menu || this.$parent.submenu)
    },
    slots () {
      return this._slotContents
    }
  },
  methods: {
    blur () {
      this.unblur()
      this._hide = setTimeout(() => {
        this._hide = null
        this.show = false
      }, 100)
    },
    unblur () {
      if (this._hide) {
        clearTimeout(this._hide)
        this._hide = null
      }
    }
  },
  ready () {
    const $el = $(this.$els.dropdown)
    $el.onBlur((e) => { this.show = false })
    $el.findChildren('a,button').on('click', (e) => {
      e.preventDefault()
      if (this.disabled) { return false }
      this.show = !this.show
      return false
    })
    $el.findChildren('ul').on('click', 'li>a', (e) => { this.show = false })
  },
  beforeDestroy () {
    const $el = $(this.$els.dropdown)
    $el.offBlur()
    $el.findChildren('a,button').off()
    $el.findChildren('ul').off()
  }
}
</script>

<style scoped>
.secret {
  position: absolute;
  clip: rect(0 0 0 0);
  overflow: hidden;
  margin: -1px;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
}
</style>
<template>
  <mutator :as="isLi?'li':'div'" ref="dropdown" :class="classes">
    <slot name="before"></slot>
    <slot name="button">
      <a v-if="isLi" class="dropdown-toggle" role="button" :class="{disabled: disabled}" @keyup.esc="value = false">
        {{ text }}
        <span class="caret"></span>
      </a>
      <button v-else type="button" :class="'btn btn-' + type + ' dropdown-toggle'" @keyup.esc="value = false" :disabled="disabled">
        {{ text }}
        <span class="caret"></span>
      </button>
    </slot>
    <slot name="dropdown-menu">
      <ul class="dropdown-menu"><slot></slot></ul>
    </slot>
  </mutator>
</template>
<script>
import $ from './utils/NodeList.js'
// let coerce = {
//     disabled: 'boolean',
//     value: 'boolean'
// }

export default {
  props: {
    'class': null,
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  watch: {
    value (val) { this.$emit('input', val) }
  },
  computed: {
    classes () {
      return [{open: this.value, disabled: this.disabled}, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn': 'btn-group']
    },
    inInput () { return this.$parent._input },
    isLi () { return this.$parent._navbar || this.$parent.menu || this.$parent._tabset },
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
        this.value = false
      }, 100)
    },
    unblur () {
      if (this._hide) {
        clearTimeout(this._hide)
        this._hide = null
      }
    }
  },
  mounted () {
    const $el = $(this.$refs.dropdown)
    $el.onBlur((e) => { this.value = false })
    $el.findChildren('a,button.dropdown-toggle').on('click', e => {
      e.preventDefault()
      if (this.disabled) { return false }
      this.value = !this.value
      return false
    })
    $el.findChildren('ul').on('click', 'li>a', e => { this.value = false })
  },
  beforeDestroy () {
    const $el = $(this.$refs.dropdown)
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
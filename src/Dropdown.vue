<template>
  <li v-if="$parent.navbar||$parent.menu||$parent._tabset" v-el:dropdown class="dropdown {{disabled&&'disabled'}}" :class="classes">
      <a v-if="text" v-el:btn class="dropdown-toggle" role="button" :class="{disabled: disabled}"
        @click="show?blur():toggle()"
        @blur="blur()"
        @keyup.esc="show = false"
      >
        {{ text }}
        <span class="caret"></span>
      </a>
      <button type="button" class="secret" v-el:btn
        @click="show?blur():toggle()"
        @blur="blur()"
        @keyup.esc="show = false"
        :disabled="disabled"
      ></button>
      <slot v-else name="button"></slot>
    <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
    <ul v-else class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
  <div v-else v-el:dropdown class="btn-group" :class="classes">
      <button v-if="text" v-el:btn type="button" class="btn btn-{{type||'default'}} dropdown-toggle"
        @click="show?blur():toggle()"
        @blur="blur"
        @keyup.esc="show = false"
        :disabled="disabled"
      >
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
import coerceBoolean from './utils/coerceBoolean.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    show: {
      twoWay: true,
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    'class': null,
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
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
      return [{open: this.show}, this.class]
    },
    button () {
      if (this.$els.btn) return this.$els.btn
      return this.$els.dropdown.querySelector('[data-toggle="dropdown"]')
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
    },
    focus () {
      this.button.focus()
    },
    toggle (e) {
      this.focus()
      this.unblur()
      if (e) e.preventDefault()
      if (this.disabled) { return }
      this.show = !this.show
    }
  },
  ready () {
    const $el = $(this.$els.dropdown)
    $el.findChildren('ul').on('click', 'li>a', this.blur)
    if (!this.text) {
      $el.find('[data-toggle="dropdown"]').on('click', (e) => {
        this[this.show ? 'blur' : 'toggle']()
        e.preventDefault()
        return false
      }).on('blur', this.blur)
    }
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
<template>
  <li v-if="$parent.navbar||$parent.menu" v-el:dropdown class="dropdown" :class="{open: show}"
    @click="show ? blur() : toggleDropdown()"
  >
      <a v-if="text" v-el:btn class="dropdown-toggle" role="button" :class="{disabled: disabled}">
        {{ text }}
        <span class="caret"></span>
      </a>
      <button type="button" class="secret" v-el:btn
        @blur="blur()"
        @keyup.esc="show = false"
        :disabled="disabled"
      ></button>
      <slot v-else name="button"></slot>
    <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
    <ul v-else class="dropdown-menu" @click="unblur">
      <slot></slot>
    </ul>
  </li>
  <div v-else v-el:dropdown class="btn-group" :class="{open: show}" @click="unblur">
      <button v-if="text" v-el:btn type="button" class="btn btn-{{type||'default'}} dropdown-toggle"
        @click="toggleDropdown()"
        @blur="blur()"
        @keyup.esc="show = false"
        :disabled="disabled"
      >
        {{ text }}
        <span class="caret"></span>
      </button>
      <slot v-else name="button"></slot>
    <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
    <ul v-else class="dropdown-menu" @click="unblur">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
let timeout = {}
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
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
  watch: {
    show (val) {
      if (val) this.focus()
    }
  },
  methods: {
    blur () {
      timeout.hide = setTimeout(() => {
        timeout.hide = false
        this.show = false
      }, 100)
    },
    unblur () {
      if (timeout.hide) {
        clearTimeout(timeout.hide)
        timeout.hide = false
      }
    },
    focus () {
      let el
      if (!this.text) {
        el = this.$els.dropdown.querySelector('[data-toggle="dropdown"]')
      } else {
        el = this.$els.btn
      }
      if (el) el.focus()
    },
    toggleDropdown (e) {
      if (e) e.preventDefault()
      this.show = !this.show
      this.unblur()
    }
  },
  ready () {
    const el = this.$els.dropdown
    el.querySelector('ul.dropdown-menu').addEventListener('click', (e) => {
      if (e.target.nodeName.toLowerCase() === 'a') this.toggleDropdown()
    })
    if (!this.text) {
      const toggle = el.querySelector('[data-toggle="dropdown"]')
      if (toggle) {
        toggle.addEventListener('click', this.toggleDropdown)
        toggle.addEventListener('blur', this.blur)
      }
    }
  }
}
</script>

<style scoped>
.secret {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
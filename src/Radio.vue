<template>
  <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:active,disabled:coerced.disabled,readonly:coerced.readonly}]" @click.prevent="toggle">
    <input type="radio" autocomplete="off" ref="input"
      v-show="!coerced.readonly"
      :checked="active"
      :value="value"
      :name="name"
      :readonly="coerced.readonly"
      :disabled="coerced.disabled"
    />
    <slot></slot>
  </label>
  <div v-else :class="['radio',typeColor,{active:active,disabled:coerced.disabled,readonly:coerced.readonly}]" @click.prevent="toggle">
    <label class="open">
      <input type="radio" autocomplete="off" ref="input"
        :checked="active"
        :value="value"
        :name="name"
        :readonly="coerced.readonly"
        :disabled="coerced.disabled"
      />
      <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
      <span v-if="active&&typeColor==='default'" class="icon"></span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
import {coerceMixin} from './utils/coerceMixin.js'
let coerce = {
  disabled: 'boolean',
  readonly: 'boolean'
}

export default {
  mixins: [coerceMixin],
  props: {
    button: {type: Boolean, default: false},
    checked: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    name: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    type: {type: String, default: null},
    value: {default: true}
  },
  computed: {
    active () { return this._inGroup ? this.$parent.value === this.value : this.value === this.checked },
    buttonStyle () { return this.button || (this._inGroup && this.$parent.buttons) },
    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }
  },
  watch: {
    checked (val, old) {
      this.$emit('checked', val)
      if (typeof this.value !== 'boolean') {
        this.$emit('input', this.checked ? this.value : null)
        if (this._inGroup && this.checked) {
          this.$parent.value = this.value
        }
      }
    }
  },
  created () {
    const parent = this.$parent
    if (!parent) return
    if (parent._btnGroup && !parent._checkboxGroup) {
      this._inGroup = true
      parent._radioGroup = true
    }
  },
  mounted () {
    if (!this.$parent._radioGroup) return
    if (this.$parent.value) {
      this.checked = (this.$parent.value === this.value)
    } else if (this.checked) {
      this.$parent.value = this.value
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    },
    toggle () {
      if (this.coerced.disabled) { return }
      this.focus()
      if (this.coerced.readonly) { return }
      this.checked = this.value
      if (this._inGroup) {
        this.$parent.value = this.value
      }
    }
  }
}
</script>

<style scope>
.radio { position: relative; }
.radio > label > input {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: -1;
  box-sizing: border-box;
}
.radio > label > .icon {
  position: absolute;
  top: .15rem;
  left: 0;
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  text-align: center;
  user-select: none;
  border-radius: .7rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.radio:not(.active) > label > .icon {
  background-color: #ddd;
  border: 1px solid #bbb;
}
.radio > label > input:focus ~ .icon {
  outline: 0;
  border: 1px solid #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
.radio.active > label > .icon {
  background-size: 1rem 1rem;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
}
.radio.active .btn-default { filter: brightness(75%); }

.radio.disabled > label > .icon,
.radio.readonly > label > .icon,
.btn.readonly {
  filter: alpha(opacity=65);
  box-shadow: none;
  opacity: .65;
}
label.btn > input[type=radio] {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}
</style>

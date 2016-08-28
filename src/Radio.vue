<template>
  <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
    <input type="radio" autocomplete="off"
      v-el:input
      v-show="!readonly"
      :checked="active"
      :value="value"
      :name="name"
      :readonly="readonly"
      :disabled="disabled"
    />
    <slot></slot>
  </label>
  <div v-else :class="['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
    <label class="open">
      <input type="radio" autocomplete="off"
        v-el:input
        :checked="active"
        :value="value"
        :name="name"
        :readonly="readonly"
        :disabled="disabled"
      />
      <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
      <span v-if="active&&typeColor==='default'" class="icon"></span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    value: {
      default: true
    },
    checked: {
      twoWay: true
    },
    button: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    active () {
      return this.group ? this.$parent.value === this.value : this.value === this.checked
    },
    buttonStyle () {
      return this.button || (this.group && this.$parent.buttons)
    },
    group () {
      return this.$parent && this.$parent._radioGroup
    },
    typeColor () {
      return (this.type || (this.$parent && this.$parent.type)) || 'default'
    }
  },
  created () {
    const parent = this.$parent
    if (!parent) return
    if (parent._btnGroup && !parent._checkboxGroup) {
      parent._radioGroup = true
    }
  },
  ready () {
    if (!this.$parent._radioGroup) return
    if (this.$parent.value) {
      this.checked = (this.$parent.value === this.value)
    } else if (this.checked) {
      this.$parent.value = this.value
    }
  },
  methods: {
    focus () {
      this.$els.input.focus()
    },
    toggle () {
      if (this.disabled) { return }
      this.focus()
      if (this.readonly) { return }
      this.checked = this.value
      if (this.group) {
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
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA4IDgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDggOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+PC9zdmc+);
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

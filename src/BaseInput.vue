<template>
  <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
    :cols="cols"
    :rows="rows"
    :name="name"
    :title="attr(title)"
    :readonly="readonly"
    :required="required"
    :disabled="disabled"
    :maxlength="maxlength"
    :placeholder="placeholder"
  ></textarea>
  <input v-else class="form-control" v-el:input v-model="value"
    :name="name"
    :max="attr(max)"
    :min="attr(min)"
    :step="step"
    :type="type"
    :title="attr(title)"
    :readonly="readonly"
    :required="required"
    :disabled="disabled"
    :maxlength="maxlength"
    :placeholder="placeholder"
    @keyup.enter="enter"
  />
</template>

<script>
import InputMixin from './InputMixin.js'

export default {
  mixins: [InputMixin],
  watch: {
    disabled (val) {
      if (val) { this._cache = this.value }
    },
    readonly (val) {
      if (val) { this._cache = this.value }
    },
    value () {
      if ((this.disabled || this.readonly) && this.value !== this._cache) {
        this.value = this._cache
      }
    }
  },
  method: {
    enter (e) {
      this.$emit('enter', e)
    }
  },
  created () {
    if ((this.disabled || this.readonly) && this.value !== this._cache) {
      this.value = this._cache
    }
  }
}
</script>
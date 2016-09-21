import {coerce} from './utils/utils.js'

export default {
  props: {
    disabled: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    max: {
      type: String,
      coerce: coerce.string,
      default: null
    },
    maxlength: {
      type: Number,
      coerce: coerce.number,
      default: null
    },
    min: {
      type: String,
      coerce: coerce.string,
      default: null
    },
    minlength: {
      type: Number,
      coerce: coerce.number,
      default: 0
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    required: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    rows: {
      type: Number,
      coerce: coerce.number,
      default: 3
    },
    step: {
      type: Number,
      coerce: coerce.number,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      twoWay: true,
      default: null
    }
  },
  methods: {
    attr (value) {
      return ~['', null, undefined].indexOf(value) || value instanceof Function ? undefined : value
    }
  }
}
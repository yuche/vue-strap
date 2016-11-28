/**
 * Collapse directive
 */
import {coerce} from '../utils/utils.js'
import $ from '../utils/NodeList.js'

export default {
  bind (el, binding) {
    if (binding.value !== null) {
        $(el).addClass('collapse')[coerce.boolean(binding.value) ? 'addClass' : 'removeClass']('in')
    }
  },
  update (el, binding) {
    if (coerce.boolean(binding.value) !== coerce.boolean(binding.oldValue)){
      el.addEventListener('tra')
      addEventListener(el, binding.value)
      removeListener(el, binding.oldValue)
    }
  },
  unbind (el, binding) {
    removeEventListener(el, binding.value)
  }
}

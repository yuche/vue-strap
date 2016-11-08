/**
 * Click outside directive
 */
const HANDLER = '_vue_clickoutside_handler'

function bind (el, binding) {
  unbind(el)

  var callback = binding.value
  if (typeof callback !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      Vue.util.warn('ClickOutside only work with a function value, received: v-' + binding.name + '="' + binding.expression + '"')
    }
  } else {
    el[HANDLER] = function (e) { if (!el.contains(e.target)) callback(e) }
    document.addEventListener('click', el[HANDLER], false)
  }
}

function unbind(el) {
  document.removeEventListener('click', el[HANDLER], false)
  delete el[HANDLER];
}

export default {
  bind,
  unbind,
  update (el, binding) {
    if (binding.value !== binding.oldValue) bind(el, binding)
  }
}

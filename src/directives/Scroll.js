/**
 * Click outside directive
 */
const HANDLER = '_vue_scroll_handler'

function bind (el, binding) {
  console.log('bind scroll')
  unbind(el)

  var callback = binding.value
  if (typeof callback !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      Vue.util.warn('ClickOutside only work with a function value, received: v-' + binding.name + '="' + binding.expression + '"')
    }
  } else {
    el[HANDLER] = function (e) { callback(e) }
    document.addEventListener('load', el[HANDLER], false)
    window.addEventListener('resize', el[HANDLER], false)
    window.addEventListener('scroll', el[HANDLER], false)
  }
}

function unbind(el) {
  document.removeEventListener('load', el[HANDLER], false)
  window.removeEventListener('resize', el[HANDLER], false)
  window.removeEventListener('scroll', el[HANDLER], false)
  delete el[HANDLER];
}

export default {
  bind,
  inserted (el) {
    console.log('inserted scroll')
    el[HANDLER]()
  },
  unbind,
  update (el, binding) {
    if (binding.value !== binding.oldValue) bind(el, binding)
  }
}

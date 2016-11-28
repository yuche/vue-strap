/**
 * Twoway binding for vue2 components.
 * Usage: v-twoway:name="var"
 * 
 * Emit in the component side an event called: 'input-' + name (excepting 'value')
 */
export default {
  bind (el, binding, vnode) {
    var event = '@input'
    if (binding.arg !== 'value') event += '-' + binding.arg
    el.setAttribute(':' + binding.arg, binding.expression)
    el.setAttribute(event, binding.expression + ' = argument[0]')
    console.log(el.outerHTML)
  }
}

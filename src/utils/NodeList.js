const ArrayProto = Array.prototype
const nodeError = new Error('Passed arguments must be of Node')
let blurEvent
let blurList = []
let Events = []

class NodeList {
  constructor (args) {
    var nodes = args;
    if (args[0] === window) {
      nodes = [window]
    } else if (typeof args[0] === 'string') {
      nodes = (args[1] || document).querySelectorAll(args[0])
      if (args[1]) { this.owner = args[1] }
    } else if (0 in args && !(args[0] instanceof Node) && args[0] && 'length' in args[0]) {
      nodes = args[0];
      if (args[1]) { this.owner = args[1] }
    }
    if (nodes) {
      for (let i in nodes) {
        this[i] = nodes[i]
      }
      this.length = nodes.length
    } else {
      this.length = 0
    }
  }

  concat (...args) {
    let nodes = ArrayProto.slice.call(this)
    function flatten(arr) {
      ArrayProto.forEach.call(arr, el => {
        if (el instanceof Node) {
          if (!~nodes.indexOf(el)) nodes.push(el)
        } else if (el) {
          flatten(el)
        }
      })
    }
    ArrayProto.forEach.call(args, arg => {
      if (arg instanceof Node) {
        if (!~nodes.indexOf(arg)) nodes.push(arg)
      } else if (arg instanceof window.NodeList || arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array) {
        flatten(arg)
      } else {
        throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)')
      }
    })
    return NodeListJS(nodes, this)
  }
  each (...args) {
    ArrayProto.forEach.apply(this, args)
    return this
  }
  parent () {
    return this.map(el => { return el.parentNode })
  }
  filter (...args) {
    return NodeListJS(ArrayProto.filter.apply(this, args), this)
  }
  find (element) {
    let nodes = []
    this.each(el => {
      let node = el.querySelectorAll(element)
      if (node && node.length) nodes.push(node)
    })
    return flatten(nodes, this.owner)
  }
  findChildren (element) {
    return this.find(element).filter(el => {
      return this.includes(el.parentElement)
    })
  }
  forEach (...args) {
    ArrayProto.forEach.apply(this, args)
    return this
  }
  includes (element, index) {
    return ~this.indexOf(element, index)
  }
  map (...args) {
    return flatten(ArrayProto.map.apply(this, args), this)
  }
  pop (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    let nodes = []
    let pop = ArrayProto.pop.bind(this)
    while (amount--) nodes.push(pop())
    return NodeListJS(nodes, this)
  }
  push (...args) {
    ArrayProto.forEach.call(args, arg => {
      if (!(arg instanceof Node)) throw nodeError
      if (!~this.indexOf(arg)) ArrayProto.push.call(this, arg)
    })
    return this
  }
  delete () {
    for (let i = this.length - 1, el = this[i]; i; el = this[--i]) {
      if (el.remove) {
        el.remove()
        this.splice(i, 1)
      } else if (el.parentNode) {
        el.parentNode.removeChild(el)
        this.splice(i, 1)
      }
    }
    if (this.length) console.warn('NodeList: Some nodes could not be deleted.')
    return this
  }
  shift (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    let nodes = []
    while (amount--) nodes.push(ArrayProto.shift.call(this))
    return NodeListJS(nodes, this)
  }
  slice (...args) {
    return NodeListJS(ArrayProto.slice.apply(this, args), this)
  }
  splice (...args) {
    for (let i = 2, l = args.length; i < l; i++) {
      if (!(args[i] instanceof Node)) throw nodeError
    }
    ArrayProto.splice.apply(this, args)
    return this
  }
  unshift (...args) {
    let unshift = ArrayProto.unshift.bind(this)
    ArrayProto.forEach.call(args, arg => {
      if (!(arg instanceof Node)) throw nodeError
      if (!~this.indexOf(arg)) unshift(arg)
    })
    return this
  }

  addClass (classes) {
    return this.toggleClass(classes, true)
  }
  removeClass (classes) {
    return this.toggleClass(classes, false)
  }
  toggleClass (classes, value) {
    const method = (value === undefined || value === null) ? 'toggle' : value ? 'add' : 'remove'
    if (typeof classes === 'string') {
      classes = classes.trim().replace(/\s+/, ' ').split(' ')
    }
    this.each(el => classes.forEach(c => el.classList[method](c)))
    return this
  }

  get (prop) {
    let arr = []
    this.each(el => {
      if (el !== null) { el = el[prop] }
      arr.push(el)
    })
    return flatten(arr, this)
  }
  set (prop, value) {
    if (prop.constructor === Object) {
      this.each(el => {
        if (el) {
          for (var key in prop) {
            if (key in el) {
              el[key] = prop[key]
            }
          }
        }
      })
    } else {
      this.each(el => {
        if (prop in el) { el[prop] = value }
      })
    }
    return this
  }
  call (...args) {
    const method = ArrayProto.shift.call(args)
    let arr = []
    let returnThis = true
    this.each(el => {
      if (el && el[method] instanceof Function) {
        el = el[method].apply(el, args)
        arr.push(el)
        if (returnThis && el !== undefined) {
          returnThis = false
        }
      } else {
        arr.push(undefined)
      }
    })
    return returnThis ? this : flatten(arr, this)
  }
  item (index) {
    return NodeListJS([this[index]], this)
  }
  get asArray () {
    return ArrayProto.slice.call(this)
  }

  // event handlers
  on (events, selector, callback) {
    if (typeof events === 'string') { events = events.trim().replace(/\s+/, ' ').split(' ') }
    if (!this || !this.length) return this
    if (callback === undefined) {
      callback = selector
      selector = null
    }
    if (!callback) return this
    const fn = callback
    callback = selector ? function (e) {
      let els = NodeListJS(selector, this)
      if (!els.length) { return }
      els.some(el => {
        let target = el.contains(e.target)
        if (target) fn.call(el, e, el)
        return target;
      })
    } : function (e) {
      fn.apply(this, [e, this])
    }
    this.each(el => {
      events.forEach(event => {
        if (!el) return;
        el.addEventListener(event, callback, false)
        Events.push({
          el: el,
          event: event,
          callback: callback
        })
      })
    })
    return this
  }
  off (events, callback) {
    if (events instanceof Function) {
      callback = events
      events = null
    }
    if (typeof events === 'string' && callback instanceof Function) {
      this.each(el => {
        events.split(' ').forEach(event => {
          for (let e in Events) {
            if(Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
              Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
              delete Events[e]
            }
          }
        })
      })
    } else if (typeof events === 'string') {
      this.each(el => {
        events.split(' ').forEach(event => {
          for (let e in Events) {
            if (Events[e] && Events[e].el === el && Events[e].event === event) {
              Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
              delete Events[e]
            }
          }
        })
      })
    } else if (callback instanceof Function) {
      this.each(el => {
        for (let e in Events) {
          if (Events[e] && Events[e].el === el && Events[e].callback === callback) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        }
      })
    } else {
      this.each(el => {
        for (let e in Events) {
          if (Events[e] && Events[e].el === el) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        }
      })
    }
    Events = Events.filter(el => (el !== undefined ))
    return this
  }
  onBlur (callback) {
    if (!this || !this.length) return this
    if (!callback) return this
    this.each(el => { blurList.push({el, callback}) })
    if (!blurEvent) {
      blurEvent = e => {
        blurList.forEach(item => {
          let target = item.el.contains(e.target) || item.el === e.target
          if (!target) item.callback.call(item.el, e, item.el)
        })
      }
      document.addEventListener('click', blurEvent, false)
      document.addEventListener('touchstart', blurEvent, false)
    }
    return this
  }
  offBlur (callback) {
    this.each(el => {
      blurList = blurList.filter(blur => {
        if (blur && blur.el === el && (!callback || blur.callback === callback)) {
          return false
        }
        return el
      })
    })
    return this
  }
}

let NL = NodeList.prototype

function flatten (arr, owner) {
  let list = []
  ArrayProto.forEach.call(arr, el => {
    if (el === null) {
      return
    } else if (el instanceof Node) {
      if (!~list.indexOf(el)) list.push(el)
    } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
      ArrayProto.forEach.call(el, el2 => { list.push(el2) })
    } else {
      arr.get = NL.get
      arr.set = NL.set
      arr.call = NL.call
      arr.owner = owner
      return arr
    }
  })
  return NodeListJS(list, owner)
}

Object.getOwnPropertyNames(ArrayProto).forEach(key => {
  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
    NL[key] = ArrayProto[key]
  }
})
if (window.Symbol && Symbol.iterator) {
  NL[Symbol.iterator] = NL.values = ArrayProto[Symbol.iterator]
}
const div = document.createElement('div')
function setterGetter (prop) {
  if (div[prop] instanceof Function) {
    NL[prop] = (...args) => {
      let arr = []
      let returnThis = true
      Object.keys(NL).forEach(el => {
        if (NL[el] && NL[el][prop] instanceof Function) {
          NL[el] = NL[el][prop].apply(NL[el], args)
          arr.push(NL[el])
          if (returnThis && NL[el] !== undefined) {
            returnThis = false
          }
        } else {
          arr.push(undefined)
        }
      })
      return returnThis ? this : flatten(arr, this)
    }
  } else {
    Object.defineProperty(NL, prop, {
      get () {
        let arr = []
        this.each(el => {
          if (el !== null) { el = el[prop] }
          arr.push(el)
        })
        return flatten(arr, this)
      },
      set (value) {
        this.each(el => {
          if (el && prop in el) { el[prop] = value }
        })
      }
    })
  }
}
for (let prop in div) setterGetter(prop)

function NodeListJS (...args) {
  return new NodeList(args)
}
window.NL = NodeListJS

export default NodeListJS

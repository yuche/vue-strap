const ArrayProto = Array.prototype
let Events = []
const nodeError = new Error('Passed arguments must be of Node')

class NodeList {
  constructor (args) {
    var i = 0, l, nodes = args;
    if (args[0] === window) {
      nodes = [window]
    } else if (typeof args[0] === 'string') {
      nodes = (args[1] || document).querySelectorAll(args[0])
    } else if (0 in args && !(args[0] instanceof Node) && 'length' in args[0]) {
      nodes = args[0];
      if (args[1]) {
        this.owner = args[1]
      }
    }
    if (nodes) {
      for(let i in nodes) {
        this[i] = nodes[i]
      }
      this.length = nodes.length
    } else {
      this.length = 0
    }
  }

  concat () {
    let nodes = ArrayProto.slice.call(this)
    function flatten(arr) {
      for (let el of arr) {
        if (el instanceof Node) {
          if (!~nodes.indexOf(el)) nodes.push(el)
        } else if (el) {
          flatten(el)
        }
      }
    }
    for (let arg of arguments) {
      if (arg instanceof Node) {
        if (!~nodes.indexOf(arg)) nodes.push(arg)
      } else if (arg instanceof window.NodeList || arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array) {
        flatten(arg)
      } else {
        throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)')
      }
    }
    return new NodeList([nodes, this])
  }
  each () {
    ArrayProto.forEach.apply(this, arguments)
    return this
  }
  filter () {
    return new NodeList([ArrayProto.filter.apply(this, arguments), this])
  }
  find (element) {
    let nodes = []
    for (let el of flatten(this)) {
      let node = el.querySelectorAll(element)
      if (node && node.length) nodes.push(node)
    }
    return flatten(nodes, this.owner)
  }
  findChildren (element) {
    return this.find(element).filter((el) => {
      return this.includes(el.parentElement)
    })
  }
  forEach () {
    ArrayProto.forEach.apply(this, arguments)
    return this
  }
  includes (element, index) {
    return ~this.indexOf(element, index)
  }
  map () {
    return flatten(ArrayProto.map.apply(this, arguments), this)
  }
  off (events, callback) {
    if (events instanceof Function) {
      callback = events
      events = null
    }
    if (typeof events === 'string' && callback instanceof Function) {
      for (let el of this) {
        for(let e in Events) {
          for (let event of events.split(' ')) {
            if(Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
              Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
              delete Events[e]
            }
          }
        }
      }
    } else if (typeof events === 'string') {
      for (let el of this) {
        for (let e in Events) {
          for (let event of events.split(' ')) {
            if (Events[e] && Events[e].el === el && Events[e].event === event) {
              Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
              delete Events[e]
            }
          }
        }
      }
    } else if (callback instanceof Function) {
      for (let el of this) {
        for (let e in Events) {
          if (Events[e] && Events[e].el === el && Events[e].callback === callback) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        }
      }
    } else {
      for (let el of this) {
        for (let e in Events) {
          if (Events[e] && Events[e].el === el) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        }
      }
    }
    Events = Events.filter((el) => { return el !== undefined })
    return this
  }
  on (events, selector, callback) {
    if (typeof events === 'string') { events = events.trim().replace(/\s+/,' ').split(' ') }
    if (!this || !this.length) return this
    if (callback === undefined) {
      callback = selector
      selector = null
    }
    if (!callback) return this
    const fn = callback
    callback = selector ? function (e) {
      let els = new NodeList([selector, this])
      if (!els.length) { return }
      els.some((el) => {
        let target = el.contains(e.target) || el === e.target
        if (target) fn.apply(el, [e, el])
        return target;
      })
    } : function (e) {
      fn.apply(this, [e, this])
    }
    for (let event of events) {
      for (let el of this) {
        el.addEventListener(event, callback, false)
        Events.push({
          el: el,
          event: event,
          callback: callback
        })
      }
    }
    return this
  }
  pop (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    let nodes = []
    let pop = ArrayProto.pop.bind(this)
    while (amount--) nodes.push(pop())
    return new NodeList([nodes, this])
  }
  push () {
    const push = ArrayProto.push.bind(this)
    for (let arg of arguments) {
      if (!(arg instanceof Node)) throw nodeError
      if (!~this.indexOf(arg)) push(arg)
    }
    return this
  }
  shift (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    let nodes = []
    let shift = ArrayProto.shift.bind(this)
    while (amount--) nodes.push(shift())
    return new NodeList([nodes, this])
  }
  slice () {
    return new NodeList([ArrayProto.slice.apply(this, arguments), this])
  }
  splice () {
    for(let i = 2, l = arguments.length; i < l; i++) {
      if (!(arguments[i] instanceof Node)) throw nodeError
    }
    return new NodeList([ArrayProto.splice.apply(this, arguments), this])
  }
  unshift () {
    let unshift = ArrayProto.unshift.bind(this)
    for (let arg of arguments) {
      if (!(arg instanceof Node)) throw nodeError
      if (!~this.indexOf(arg)) unshift(arg)
    }
    return this
  }

  addClass (classes) {
    classes.trim().replace(/\s+/,' ').split(' ').forEach((c) => {
      this.each((el) => el.classList.add(c))
    })
    return this
  }
  removeClass (classes) {
    classes.trim().replace(/\s+/,' ').split(' ').forEach((c) => {
      this.each((el) => el.classList.remove(c))
    })
    return this
  }

  get (prop) {
    let arr = []
    for (let el of this) {
      if (el !== null) { el = el[prop] }
      arr.push(el)
    }
    return flatten(arr, this)
  }
  set (prop, value) {
    if (prop.constructor === Object) {
      for (let el of this) {
        if (el) {
          for (key in prop) {
            if (key in el) el[key] = prop[key]
          }
        }
      }
    } else {
      for (let el of this) {
        if (prop in el) {
          el[prop] = value
        }
      }
    }
    return this
  }
  call () {
    const method = ArrayProto.shift.call(arguments)
    let arr = []
    let returnThis = true
    for (let el of this) {
      if (el && el[method] instanceof Function) {
        el = el[method].apply(el, arguments)
        arr.push(el)
        if (returnThis && el !== undefined) {
          returnThis = false
        }
      } else {
        arr.push(undefined)
      }
    }
    return returnThis ? this : flatten(arr, this)
  }
  item (index) {
    return new NodeList([[this[index]], this])
  }
  get asArray () {
    return ArrayProto.slice.call(this)
  }
}

let NL = NodeList.prototype

function flatten (arr, owner) {
  let list = []
  for (let el of arr) {
    if (el instanceof Node || el === null) {
      if (!~list.indexOf(el)) list.push(el)
    } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
      for(let el2 of el) list.push(el2)
    } else {
      arr.get = NL.get
      arr.set = NL.set
      arr.call = NL.call
      arr.owner = owner
      return arr
    }
  }
  return new NodeList([list, owner])
}

Object.getOwnPropertyNames(ArrayProto).forEach((key) => {
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
    NL[prop] = () => {
      let arr = []
      let returnThis = true
      for (let el of NL) {
        if (el && el[prop] instanceof Function) {
          el = el[prop].apply(el, arguments)
          arr.push(el)
          if (returnThis && el !== undefined) {
            returnThis = false
          }
        } else {
          arr.push(undefined)
        }
      }
      return returnThis ? this : flatten(arr, this)
    }
  } else {
    Object.defineProperty(NL, prop, {
      get: function () {
        let arr = []
        for (let el of this) {
          if (el !== null) {
            el = el[prop]
          }
          arr.push(el)
        }
        return flatten(arr, this)
      },
      set: function (value) {
        for (let el of this) {
          if (el && prop in el) {
            el[prop] = value
          }
        }
      }
    })
  }
}
for (let prop in div) setterGetter(prop)

function NodeListJS () {
  return new NodeList(arguments)
}
window.NL = NodeListJS

export default NodeListJS

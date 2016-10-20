const Node = window.Node
const HTMLCollection = window.HTMLCollection
const ArrayProto = Array.prototype
const nodeError = new Error('Passed arguments must be of Node')
let blurEvent
let blurList = []
let Events = []

class NodeList {
  constructor (args) {
    var nodes = args
    if (args[0] === window) {
      nodes = [window]
    } else if (typeof args[0] === 'string') {
      nodes = (args[1] || document).querySelectorAll(args[0])
      if (args[1]) { this.owner = args[1] }
    } else if (0 in args && !(args[0] instanceof Node) && args[0] && 'length' in args[0]) {
      nodes = args[0]
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

  concat () {
    let nodes = ArrayProto.slice.call(this)
    function flatten (arr) {
      for (let i in arr) {
        if (arr[i] instanceof Node) {
          if (!~nodes.indexOf(arr[i])) nodes.push(arr[i])
        } else if (arr[i]) {
          flatten(arr[i])
        }
      }
    }
    for (let i in arguments) {
      let arg = arguments[i]
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
  parent () {
    return this.map(el => { return el.parentNode })
  }
  filter () {
    return new NodeList([ArrayProto.filter.apply(this, arguments), this])
  }
  find (element) {
    let nodes = []
    let flat = flatten(this)
    for (let i in flat) {
      let node = flat[i].querySelectorAll(element)
      if (node && node.length) nodes.push(node)
    }
    return flatten(nodes, this.owner)
  }
  findChildren (element) {
    return this.find(element).filter(el => {
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
  map (...args) {
    return flatten(ArrayProto.map.apply(this, args), this)
  }
  pop (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    let nodes = []
    let pop = ArrayProto.pop.bind(this)
    while (amount--) nodes.push(pop())
    return new NodeList([nodes, this])
  }
  push (...args) {
    for (let i in args) {
      if (!(args[i] instanceof Node)) throw nodeError
      if (!~this.indexOf(args[i])) ArrayProto.push.call(this, args[i])
    }
    return this
  }
  delete () {
    return ArrayProto.filter.call(this, el => {
      if (el.remove) {
        el.remove()
      } else if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
      return document.body.contains(el)
    })
  }
  shift (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    let nodes = []
    let shift = ArrayProto.shift.bind(this)
    while (amount--) nodes.push(shift())
    return new NodeList([nodes, this])
  }
  slice (...args) {
    return new NodeList([ArrayProto.slice.apply(this, args), this])
  }
  splice (...args) {
    for (let i = 2, l = args.length; i < l; i++) {
      if (!(args[i] instanceof Node)) throw nodeError
    }
    return new NodeList([ArrayProto.splice.apply(this, args), this])
  }
  unshift (...args) {
    let unshift = ArrayProto.unshift.bind(this)
    for (let i in args) {
      if (!(args[i] instanceof Node)) throw nodeError
      if (!~this.indexOf(args[i])) unshift(args[i])
    }
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
    classes.forEach(c => this.each(el => el.classList[method](c)))
    return this
  }

  get (prop) {
    let arr = []
    for (let i in this) {
      if (this[i] !== null) {
        this[i] = this[i][prop]
      }
      arr.push(this[i])
    }
    return flatten(arr, this)
  }
  set (prop, value) {
    let i
    if (prop.constructor === Object) {
      for (i in this) {
        if (this[i]) {
          for (let key in prop) {
            if (key in this[i]) {
              this[i][key] = prop[key]
            }
          }
        }
      }
    } else {
      for (i in this) {
        if (prop in this[i]) {
          this[i][prop] = value
        }
      }
    }
    return this
  }
  call (...args) {
    const method = ArrayProto.shift.call(args)
    let arr = []
    let returnThis = true
    for (let i in this) {
      if (this[i] && this[i][method] instanceof Function) {
        this[i] = this[i][method].apply(this[i], args)
        arr.push(this[i])
        if (returnThis && this[i] !== undefined) {
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
      let els = new NodeList([selector, this])
      if (!els.length) { return }
      els.some(el => {
        let target = el.contains(e.target)
        if (target) fn.call(el, e, el)
        return target
      })
    } : function (e) {
      fn.apply(this, [e, this])
    }
    events.forEach(event => {
      for (let i in this) {
        if (this[i]) {
          this[i].addEventListener(event, callback, false)
          Events.push({
            el: this[i],
            event: event,
            callback: callback
          })
        }
      }
    })
    return this
  }
  off (events, callback) {
    if (events instanceof Function) {
      callback = events
      events = null
    }
    if (typeof events === 'string' && callback instanceof Function) {
      for (let i in this) {
        Events.forEach(e => {
          events.events.split(' ').forEach(event => {
            if(Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
              Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
              delete Events[e]
            }
          })
        })
      }
    } else if (typeof events === 'string') {
      for (let i in this) {
        Events.forEach(e => {
          events.events.split(' ').forEach(event => {
            if (Events[e] && Events[e].el === this[i] && Events[e].event === event) {
              Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
              delete Events[e]
            }
          })
        })
      }
    } else if (callback instanceof Function) {
      for (let i in this) {
        for (let e in Events) {
          if (Events[e] && Events[e].el === this[i] && Events[e].callback === callback) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        }
      }
    } else {
      for (let i in this) {
        for (let e in Events) {
          if (Events[e] && Events[e].el === this[i]) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        }
      }
    }
    Events = Events.filter(el => { return el !== undefined })
    return this
  }
  onBlur (callback) {
    if (!this || !this.length) return this
    if (!callback) return this
    this.each((el) => {
      blurList.push({
        el: el,
        callback: callback
      })
    })
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
      for (let e in blurList) {
        if (blurList[e] && blurList[e].el === el && (!callback || blurList[e].callback === callback)) {
          delete blurList[e]
        }
      }
    })
    blurList = blurList.filter(el => el !== undefined)
    return this
  }
}

let NL = NodeList.prototype

function flatten (arr, owner) {
  let list = []
  for (let i in arr) {
    let el = arr[i]
    if (el instanceof Node || el === null) {
      if (!~list.indexOf(el)) list.push(el)
    } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
      for (let id in el) list.push(el[id])
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
    NL[prop] = () => {
      let arr = []
      let returnThis = true
      for (let i in NL) {
        let el = NL[i]
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
        for (let i in this) {
          if (this[i] !== null) {
            this[i] = this[i][prop]
          }
          arr.push(this[i])
        }
        return flatten(arr, this)
      },
      set: function (value) {
        for (let i in this) {
          if (this[i] && prop in this[i]) {
            this[i][prop] = value
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

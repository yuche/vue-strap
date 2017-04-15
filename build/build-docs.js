/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _bodyDocs = __webpack_require__(118);
	
	var _bodyDocs2 = _interopRequireDefault(_bodyDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(344);
	__webpack_require__(346);
	__webpack_require__(348);
	__webpack_require__(349);
	
	Vue.config.devtools = true;
	Vue.config.debug = true;
	
	new Vue({
	  el: 'body',
	  components: {
	    bodyDocs: _bodyDocs2.default
	  },
	  created: function created() {
	    if (!this.$root.sections) {
	      this.$root.sections = [];
	    }
	  },
	  ready: function ready() {
	    var list = this.$root.sections;
	    while (list.length) {
	      list.pop();
	    }(0, _NodeList2.default)('.bs-docs-section', this.$els.sections).each(function (el) {
	      list.push({
	        id: el.id,
	        name: el.querySelector('.anchor').innerText,
	        el: el
	      });
	    });
	  }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(56);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(74);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(110);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(116);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(117);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent = void 0;
	var blurList = [];
	var Events = [];
	
	function isNode(val) {
	  return val instanceof window.Node;
	}
	function isNodeList(val) {
	  return val instanceof window.NodeList || val instanceof NodeList || val instanceof window.HTMLCollection || val instanceof Array;
	}
	
	function splitWords(val) {
	  val = val.trim();return val.length ? val.replace(/\s+/, ' ').split(' ') : [];
	}
	function joinWords(val) {
	  return val.length ? val.join(' ') : '';
	}
	
	var NodeList = function () {
	  function NodeList(args) {
	    (0, _classCallCheck3.default)(this, NodeList);
	
	    var nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !isNode(args[0]) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var i in nodes) {
	        this[i] = nodes[i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	  }
	
	  (0, _createClass3.default)(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        ArrayProto.forEach.call(arr, function (el) {
	          if (isNode(el)) {
	            if (!~nodes.indexOf(el)) nodes.push(el);
	          } else if (isNodeList(el)) {
	            flatten(el);
	          }
	        });
	      }
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (isNode(arg)) {
	          if (!~nodes.indexOf(arg)) nodes.push(arg);
	        } else if (isNodeList(arg)) {
	          flatten(arg);
	        } else {
	          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	        }
	      });
	      return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var notRemoved = flatten(this).filter(function (el) {
	        if (el.remove) {
	          el.remove();
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        }
	        return document.body.contains(el);
	      });
	      if (notRemoved.length) console.warn('NodeList: Some nodes could not be deleted.');
	      return notRemoved;
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return NodeListJS(ArrayProto.filter.apply(this, args), this);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      flatten(this).forEach(function (node) {
	        ArrayProto.push.apply(nodes, node.querySelectorAll(element));
	      });
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'findChildren',
	    value: function findChildren(element) {
	      var _this = this;
	
	      if (element) return this.find(element).filter(function (el) {
	        return _this.includes(el.parentElement);
	      });
	      return flatten(this.map(function (el) {
	        return el.children;
	      }));
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      var mapped = ArrayProto.map.apply(this, args);
	      return mapped.some(function (el) {
	        return isNode(el) || isNodeList(el);
	      }) ? flatten(mapped, this) : mapped;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return flatten(this.map(function (el) {
	        return el.parentNode;
	      }), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _this2 = this;
	
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this2.indexOf(arg)) ArrayProto.push.call(_this2, arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      while (amount--) {
	        nodes.push(ArrayProto.shift.call(this));
	      }return nodes.length == 1 ? nodes[0] : NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return NodeListJS(ArrayProto.slice.apply(this, args), this);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      for (var i = 2, l = args.length; i < l; i++) {
	        if (!isNode(args[i])) throw nodeError;
	      }
	      ArrayProto.splice.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var _this3 = this;
	
	      var unshift = ArrayProto.unshift.bind(this);
	
	      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	        args[_key9] = arguments[_key9];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this3.indexOf(arg)) unshift(arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes, value) {
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = splitWords(classes);
	      }
	      this.each(function (el) {
	        var list = splitWords(el.className);
	        classes.forEach(function (c) {
	          var hasClass = ~list.indexOf(c);
	          if (!hasClass && method !== 'remove') list.push(c);
	          if (hasClass && method !== 'add') {
	            list = list.filter(function (el) {
	              return el !== c;
	            });
	          }
	        });
	        list = joinWords(list);
	        if (!list) el.removeAttribute('class');else el.className = list;
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      this.each(function (el) {
	        if (el !== null) {
	          el = el[prop];
	        }
	        arr.push(el);
	      });
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        this.each(function (el) {
	          if (el) {
	            for (var key in prop) {
	              if (key in el) {
	                el[key] = prop[key];
	              }
	            }
	          }
	        });
	      } else {
	        this.each(function (el) {
	          if (prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	        args[_key10] = arguments[_key10];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      this.each(function (el) {
	        if (el && el[method] instanceof Function) {
	          el = el[method].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      });
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return NodeListJS([this[index]], this);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = splitWords(events);
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = NodeListJS(selector, this);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      this.each(function (el) {
	        events.forEach(function (event) {
	          if (el === window || isNode(el)) {
	            el.addEventListener(event, callback, false);
	            Events.push({
	              el: el,
	              event: event,
	              callback: callback
	            });
	          }
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      events = events instanceof Array ? events : typeof events === 'string' ? splitWords(events) : null;
	      this.each(function (el) {
	        Events = Events.filter(function (e) {
	          if (e && e.el === el && (!callback || callback === e.callback) && (!events || ~events.indexOf(e.event))) {
	            e.el.removeEventListener(e.event, e.callback);
	            return false;
	          }
	          return true;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({ el: el, callback: callback });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          blurList.forEach(function (item) {
	            var target = item.el.contains(e.target) || item.el === e.target;
	            if (!target) item.callback.call(item.el, e, item.el);
	          });
	        };
	        document.addEventListener('click', blurEvent, false);
	        document.addEventListener('touchstart', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        blurList = blurList.filter(function (blur) {
	          if (blur && blur.el === el && (!callback || blur.callback === callback)) {
	            return false;
	          }
	          return el;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);
	  return NodeList;
	}();
	
	var NL = NodeList.prototype;
	
	function flatten(arr, owner) {
	  var list = [];
	  ArrayProto.forEach.call(arr, function (el) {
	    if (isNode(el)) {
	      if (!~list.indexOf(el)) list.push(el);
	    } else if (isNodeList(el)) {
	      for (var id in el) {
	        list.push(el[id]);
	      }
	    } else if (el !== null) {
	      arr.get = NL.get;
	      arr.set = NL.set;
	      arr.call = NL.call;
	      arr.owner = owner;
	      return arr;
	    }
	  });
	  return NodeListJS(list, owner);
	}
	
	(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
	  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && _iterator2.default) {
	  NL[_iterator2.default] = NL.values = ArrayProto[_iterator2.default];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this4 = this;
	
	  if (NL[prop]) return;
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
	        args[_key11] = arguments[_key11];
	      }
	
	      var arr = [];
	      var returnThis = true;
	      for (var i in NL) {
	        var el = NL[i];
	        if (el && el[prop] instanceof Function) {
	          el = el[prop].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      }
	      return returnThis ? _this4 : flatten(arr, _this4);
	    };
	  } else {
	    (0, _defineProperty2.default)(NL, prop, {
	      get: function get() {
	        var arr = [];
	        this.each(function (el) {
	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        });
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        this.each(function (el) {
	          if (el && prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	    args[_key12] = arguments[_key12];
	  }
	
	  return new NodeList(args);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	var $Object = __webpack_require__(61).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(59);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(69), 'Object', {defineProperty: __webpack_require__(65).f});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(60)
	  , core      = __webpack_require__(61)
	  , ctx       = __webpack_require__(62)
	  , hide      = __webpack_require__(64)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 60 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 61 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(63);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(65)
	  , createDesc = __webpack_require__(73);
	module.exports = __webpack_require__(69) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(66)
	  , IE8_DOM_DEFINE = __webpack_require__(68)
	  , toPrimitive    = __webpack_require__(72)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(69) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(67);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(69) && !__webpack_require__(70)(function(){
	  return Object.defineProperty(__webpack_require__(71)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(70)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(67)
	  , document = __webpack_require__(60).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(67);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	__webpack_require__(105);
	module.exports = __webpack_require__(109).f('iterator');

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(77)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(80)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(78)
	  , defined   = __webpack_require__(79);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(81)
	  , $export        = __webpack_require__(59)
	  , redefine       = __webpack_require__(82)
	  , hide           = __webpack_require__(64)
	  , has            = __webpack_require__(83)
	  , Iterators      = __webpack_require__(84)
	  , $iterCreate    = __webpack_require__(85)
	  , setToStringTag = __webpack_require__(101)
	  , getPrototypeOf = __webpack_require__(103)
	  , ITERATOR       = __webpack_require__(102)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);

/***/ },
/* 83 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(86)
	  , descriptor     = __webpack_require__(73)
	  , setToStringTag = __webpack_require__(101)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(64)(IteratorPrototype, __webpack_require__(102)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(66)
	  , dPs         = __webpack_require__(87)
	  , enumBugKeys = __webpack_require__(99)
	  , IE_PROTO    = __webpack_require__(96)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(71)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(100).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(65)
	  , anObject = __webpack_require__(66)
	  , getKeys  = __webpack_require__(88);
	
	module.exports = __webpack_require__(69) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(89)
	  , enumBugKeys = __webpack_require__(99);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(83)
	  , toIObject    = __webpack_require__(90)
	  , arrayIndexOf = __webpack_require__(93)(false)
	  , IE_PROTO     = __webpack_require__(96)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(91)
	  , defined = __webpack_require__(79);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(92);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(90)
	  , toLength  = __webpack_require__(94)
	  , toIndex   = __webpack_require__(95);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(78)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(78)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(97)('keys')
	  , uid    = __webpack_require__(98);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(60)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60).document && document.documentElement;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(65).f
	  , has = __webpack_require__(83)
	  , TAG = __webpack_require__(102)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(97)('wks')
	  , uid        = __webpack_require__(98)
	  , Symbol     = __webpack_require__(60).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(83)
	  , toObject    = __webpack_require__(104)
	  , IE_PROTO    = __webpack_require__(96)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(79);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	var global        = __webpack_require__(60)
	  , hide          = __webpack_require__(64)
	  , Iterators     = __webpack_require__(84)
	  , TO_STRING_TAG = __webpack_require__(102)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(107)
	  , step             = __webpack_require__(108)
	  , Iterators        = __webpack_require__(84)
	  , toIObject        = __webpack_require__(90);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(80)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(102);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(112);
	var $Object = __webpack_require__(61).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(113)('getOwnPropertyNames', function(){
	  return __webpack_require__(114).f;
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(59)
	  , core    = __webpack_require__(61)
	  , fails   = __webpack_require__(70);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(90)
	  , gOPN      = __webpack_require__(115).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(89)
	  , hiddenKeys = __webpack_require__(99).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(56);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(119)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(343)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./bodyDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./bodyDocs.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./bodyDocs.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./bodyDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./bodyDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _affixSidebar = __webpack_require__(120);
	
	var _affixSidebar2 = _interopRequireDefault(_affixSidebar);
	
	var _gettingStarted = __webpack_require__(127);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _accordionDocs = __webpack_require__(133);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(177);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _alertDocs = __webpack_require__(188);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _asideDocs = __webpack_require__(198);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _buttonGroupDocs = __webpack_require__(206);
	
	var _buttonGroupDocs2 = _interopRequireDefault(_buttonGroupDocs);
	
	var _carouselDocs = __webpack_require__(217);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _checkboxDocs = __webpack_require__(228);
	
	var _checkboxDocs2 = _interopRequireDefault(_checkboxDocs);
	
	var _container = __webpack_require__(231);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _datepickerDocs = __webpack_require__(233);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _dropdownDocs = __webpack_require__(244);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _formGroupDocs = __webpack_require__(252);
	
	var _formGroupDocs2 = _interopRequireDefault(_formGroupDocs);
	
	var _inputDocs = __webpack_require__(273);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _modalDocs = __webpack_require__(276);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _navbarDocs = __webpack_require__(288);
	
	var _navbarDocs2 = _interopRequireDefault(_navbarDocs);
	
	var _popoverDocs = __webpack_require__(294);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _progressbarDocs = __webpack_require__(302);
	
	var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);
	
	var _radioDocs = __webpack_require__(308);
	
	var _radioDocs2 = _interopRequireDefault(_radioDocs);
	
	var _selectDocs = __webpack_require__(311);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _spinnerDocs = __webpack_require__(316);
	
	var _spinnerDocs2 = _interopRequireDefault(_spinnerDocs);
	
	var _tabsDocs = __webpack_require__(324);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _tooltipDocs = __webpack_require__(332);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _typeaheadDocs = __webpack_require__(335);
	
	var _typeaheadDocs2 = _interopRequireDefault(_typeaheadDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <link v-if="local" rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css">
	//   <link v-else href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==" crossorigin="anonymous">
	//   <div id="wrapper">
	//     <div class="bs-docs-header">
	//       <div class="container">
	//         <h1>VueStrap</h1>
	//         <p>Bootstrap components built with <a target="_blank" href="http://vuejs.org/">Vue.js</a>.</p>
	//         <p>No jQuery, bootstrap.js, or any 3rd party plugins required.</p>
	//         <br>
	//         <p><a class="btn btn-outline-inverse btn-lg" href="https://github.com/yuche/vue-strap">Code on GitHub</a></p>
	//       </div>
	//     </div>
	//     <container>
	//       <div v-el:sections class="col-md-9">
	//         <getting-started></getting-started>
	//         <accordion-docs></accordion-docs>
	//         <affix-docs></affix-docs>
	//         <alert-docs></alert-docs>
	//         <aside-docs></aside-docs>
	//         <button-group-docs></button-group-docs>
	//         <checkbox-docs></checkbox-docs>
	//         <carousel-docs></carousel-docs>
	//         <datepicker-docs></datepicker-docs>
	//         <dropdown-docs></dropdown-docs>
	//         <input-docs></input-docs>
	//         <modal-docs></modal-docs>
	//         <navbar-docs></navbar-docs>
	//         <popover-docs></popover-docs>
	//         <progressbar-docs></progressbar-docs>
	//         <radio-docs></radio-docs>
	//         <select-docs></select-docs>
	//         <tabs-docs></tabs-docs>
	//         <tooltip-docs></tooltip-docs>
	//         <typeahead-docs></typeahead-docs>
	//         <spinner-docs></spinner-docs>
	//         <form-group-docs></form-group-docs>
	//       </div>
	//       <div class="col-md-3">
	//         <affix-sidebar></affix-sidebar>
	//       </div>
	//     </container>
	//   </div>
	//   <footer class="bs-docs-footer">
	//     <div class="container">
	//       <p>Designed and built by <a href="https://github.com/yuche/">yuche</a>.</p>
	//       <p>
	//         Using <a href="http://twitter.github.com/bootstrap" target="_blank">Twitter Bootstrap</a>
	//         and the <a href="css/docs.css" target="_blank">Bootstrap's docs styles</a> designed and built by <a href="http://twitter.com/mdo" target="_blank">@mdo</a>
	//         and <a href="http://twitter.com/fat" target="_blank">@fat</a>.
	//       </p>
	//       <p>
	//         Code licensed under <a href="//github.com/mgcrea/angular-strap/blob/master/LICENSE.md" target="_blank">The MIT License</a>,
	//         documentation under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
	//       </p>
	//     </div>
	//   </footer>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    affixSidebar: _affixSidebar2.default,
	    gettingStarted: _gettingStarted2.default,
	    accordionDocs: _accordionDocs2.default,
	    affixDocs: _affixDocs2.default,
	    alertDocs: _alertDocs2.default,
	    asideDocs: _asideDocs2.default,
	    buttonGroupDocs: _buttonGroupDocs2.default,
	    carouselDocs: _carouselDocs2.default,
	    checkboxDocs: _checkboxDocs2.default,
	    container: _container2.default,
	    datepickerDocs: _datepickerDocs2.default,
	    dropdownDocs: _dropdownDocs2.default,
	    formGroupDocs: _formGroupDocs2.default,
	    inputDocs: _inputDocs2.default,
	    modalDocs: _modalDocs2.default,
	    navbarDocs: _navbarDocs2.default,
	    popoverDocs: _popoverDocs2.default,
	    progressbarDocs: _progressbarDocs2.default,
	    radioDocs: _radioDocs2.default,
	    selectDocs: _selectDocs2.default,
	    spinnerDocs: _spinnerDocs2.default,
	    tabsDocs: _tabsDocs2.default,
	    tooltipDocs: _tooltipDocs2.default,
	    typeaheadDocs: _typeaheadDocs2.default
	  },
	  computed: {
	    local: function local() {
	      return location.hostname === 'localhost';
	    }
	  }
	};
	// </script>

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(121)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(126)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./affixSidebar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./affixSidebar.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./affixSidebar.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./affixSidebar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./affixSidebar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _Affix = __webpack_require__(122);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <affix offset="50">
	//     <ul class="nav bs-docs-sidenav" id="sidenav">
	//       <li v-for="s in sections" :class="{active:active==s.id}"><a href="#{{ s.id }}">{{ s.name }}</a></li>
	//     </ul>
	//     <a href="#" class="back-to-top">Back to top</a>
	//     <a href="https://github.com/yuche/vue-strap" class="back-to-top">GitHub</a>
	//   </affix>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    affix: _Affix2.default
	  },
	  filters: {
	    space: function space(val) {
	      return val.replace('-', ' ');
	    }
	  },
	  data: function data() {
	    return {
	      active: null,
	      sections: []
	    };
	  },
	  created: function created() {
	    var _this = this;
	
	    (0, _NodeList2.default)(window).on('scroll load resize', function () {
	      return _this.scrollSpy();
	    });
	    if (!this.$root.sections) {
	      this.$root.sections = [];
	    }
	    this.sections = this.$root.sections;
	  },
	
	  methods: {
	    scrollSpy: function scrollSpy() {
	      var _this2 = this;
	
	      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	      this.sections.forEach(function (s) {
	        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
	        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
	        if (s.el.offsetTop + 420 <= scrollPosition) {
	          _this2.active = s.id;
	        }
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(123)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(125)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Affix.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Affix.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Affix.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Affix.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Affix.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="hidden-print hidden-xs hidden-sm">
	//     <nav class="bs-docs-sidebar" :class="{affix:affixed}" :style="{marginTop:top}">
	//       <slot></slot>
	//     </nav>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false
	    };
	  },
	
	  computed: {
	    top: function top() {
	      return this.offset > 0 ? this.offset + 'px' : null;
	    }
	  },
	  methods: {
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    checkScroll: function checkScroll() {
	      var _this = this;
	
	      // if is hidden don't calculate anything
	      if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
	        return;
	      }
	      // get window scroll and element position to detect if have to be normal or affixed
	      var scroll = {};
	      var element = {};
	      var rect = this.$el.getBoundingClientRect();
	      var body = document.body;
	      ['Top', 'Left'].forEach(function (type) {
	        var t = type.toLowerCase();
	        var ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset'];
	        var method = 'scroll' + type;
	        if (typeof ret !== 'number') {
	          // ie6,7,8 standard mode
	          ret = document.documentElement[method];
	          if (typeof ret !== 'number') {
	            // quirks mode
	            ret = document.body[method];
	          }
	        }
	        scroll[t] = ret;
	        element[t] = scroll[t] + rect[t] - (_this.$el['client' + type] || body['client' + type] || 0);
	      });
	      var fix = scroll.top > element.top - this.offset;
	      if (this.affixed !== fix) {
	        this.affixed = fix;
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    (0, _NodeList2.default)(window).on('scroll resize', function () {
	      return _this2.checkScroll();
	    });
	    setTimeout(function () {
	      return _this2.checkScroll();
	    }, 0);
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this3 = this;
	
	    (0, _NodeList2.default)(window).off('scroll resize', function () {
	      return _this3.checkScroll();
	    });
	  }
	};
	// </script>

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getJSON = getJSON;
	exports.getScrollBarWidth = getScrollBarWidth;
	exports.translations = translations;
	exports.delayer = delayer;
	exports.VueFixer = VueFixer;
	// coerce convert som types of data into another type
	var coerce = exports.coerce = {
	  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
	  boolean: function boolean(val) {
	    return typeof val === 'string' ? val === '' || val === 'true' ? true : val === 'false' || val === 'null' || val === 'undefined' ? false : val : val;
	  },
	  // Attempt to convert a string value to a Number. Otherwise, return 0.
	  number: function number(val) {
	    var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    return typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val);
	  },
	  // Attempt to convert to string any value, except for null or undefined.
	  string: function string(val) {
	    return val === undefined || val === null ? '' : val + '';
	  },
	  // Pattern accept RegExp, function, or string (converted to RegExp). Otherwise return null.
	  pattern: function pattern(val) {
	    return val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null;
	  }
	};
	
	function getJSON(url) {
	  var request = new window.XMLHttpRequest();
	  var data = {};
	  // p (-simulated- promise)
	  var p = {
	    then: function then(fn1, fn2) {
	      return p.done(fn1).fail(fn2);
	    },
	    catch: function _catch(fn) {
	      return p.fail(fn);
	    },
	    always: function always(fn) {
	      return p.done(fn).fail(fn);
	    }
	  };
	  ['done', 'fail'].forEach(function (name) {
	    data[name] = [];
	    p[name] = function (fn) {
	      if (fn instanceof Function) data[name].push(fn);
	      return p;
	    };
	  });
	  p.done(JSON.parse);
	  request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	      var e = { status: request.status };
	      if (request.status === 200) {
	        try {
	          var response = request.responseText;
	          for (var i in data.done) {
	            var value = data.done[i](response);
	            if (value !== undefined) {
	              response = value;
	            }
	          }
	        } catch (err) {
	          data.fail.forEach(function (fail) {
	            return fail(err);
	          });
	        }
	      } else {
	        data.fail.forEach(function (fail) {
	          return fail(e);
	        });
	      }
	    }
	  };
	  request.open('GET', url);
	  request.setRequestHeader('Accept', 'application/json');
	  request.send();
	  return p;
	}
	
	function getScrollBarWidth() {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	}
	
	// return all the translations or the default language (english)
	function translations() {
	  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
	
	  var text = {
	    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    limit: 'Limit reached ({{limit}} items max).',
	    loading: 'Loading...',
	    minLength: 'Min. Length',
	    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    notSelected: 'Nothing Selected',
	    required: 'Required',
	    search: 'Search'
	  };
	  return window.VueStrapLang ? window.VueStrapLang(lang) : text;
	}
	
	// delayer: set a function that execute after a delay
	// @params (function, delay_prop or value, default_value)
	function delayer(fn, varTimer) {
	  var ifNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	
	  function toInt(el) {
	    return (/^[0-9]+$/.test(el) ? Number(el) || 1 : null
	    );
	  }
	  var timerId;
	  return function () {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (timerId) clearTimeout(timerId);
	    timerId = setTimeout(function () {
	      fn.apply(_this, args);
	    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN);
	  };
	}
	
	// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a real parser, so this work only if your code is compatible with both)
	function VueFixer(vue) {
	  var vue2 = !window.Vue || !window.Vue.partial;
	  var mixin = {
	    computed: {
	      vue2: function vue2() {
	        return !this.$dispatch;
	      }
	    }
	  };
	  if (!vue2) {
	    if (vue.beforeCreate) {
	      mixin.create = vue.beforeCreate;
	      delete vue.beforeCreate;
	    }
	    if (vue.beforeMount) {
	      vue.beforeCompile = vue.beforeMount;
	      delete vue.beforeMount;
	    }
	    if (vue.mounted) {
	      vue.ready = vue.mounted;
	      delete vue.mounted;
	    }
	  } else {
	    if (vue.beforeCompile) {
	      vue.beforeMount = vue.beforeCompile;
	      delete vue.beforeCompile;
	    }
	    if (vue.compiled) {
	      mixin.compiled = vue.compiled;
	      delete vue.compiled;
	    }
	    if (vue.ready) {
	      vue.mounted = vue.ready;
	      delete vue.ready;
	    }
	  }
	  if (!vue.mixins) {
	    vue.mixins = [];
	  }
	  vue.mixins.unshift(mixin);
	  return vue;
	}

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<div class=\"hidden-print hidden-xs hidden-sm\">\n    <nav class=\"bs-docs-sidebar\" :class=\"{affix:affixed}\" :style=\"{marginTop:top}\">\n      <slot></slot>\n    </nav>\n  </div>";

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<affix offset=\"50\">\n    <ul class=\"nav bs-docs-sidenav\" id=\"sidenav\">\n      <li v-for=\"s in sections\" :class=\"{active:active==s.id}\"><a href=\"#{{ s.id }}\">{{ s.name }}</a></li>\n    </ul>\n    <a href=\"#\" class=\"back-to-top\">Back to top</a>\n    <a href=\"https://github.com/yuche/vue-strap\" class=\"back-to-top\">GitHub</a>\n  </affix>";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(128)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(132)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./gettingStarted.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./gettingStarted.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./gettingStarted.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docCode: _docCode2.default
	  }
	};
	// </script>
	// <template>
	//   <div class="bs-docs-section" id="getting-started">
	//     <h1 class="page-header"><a href="#getting-started" class="anchor">Getting started</a></h1>
	//     <div class="bs-callout bs-callout-success">
	//       <h4>About this project</h4>
	//       <p>
	//         This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.
	//         As a result no dependency on jQuery or Bootstrap's JavaScript is required.
	//         The only required dependencies are:
	//       </p>
	//       <ul>
	//         <li><a href="http://vuejs.org/">Vue.js</a>
	//           (required ^1.0.8, test with 1.0.8).</li>
	//         <li><a href="http://getbootstrap.com/">Bootstrap CSS</a>
	//           (required 3.x.x, test with 3.3.5).
	//           VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.
	//         </li>
	//       </ul>
	//     </div>
	//     <h2>CommonJS</h2>
	//     <doc-code language="javascript">
	//       $ npm install vue-strap
	
	//       var alert = require('vue-strap/src/alert');
	//       // or
	//       var alert = require('vue-strap').alert;
	
	//       new Vue({
	//         components: {
	//           alert: alert
	//         }
	//       })
	//     </doc-code>
	//     <h2>ES6</h2>
	//     <doc-code language="javascript">
	//       $ npm install vue-strap
	
	//       import alert from 'vue-strap/src/alert'
	//       // or
	//       import { alert } from 'vue-strap'
	
	//       new Vue({
	//         components: {
	//           alert
	//         }``
	//       })
	//     </doc-code>
	
	//     <h2>AMD</h2>
	//     <doc-code language="javascript">
	//       $ bower install vue-strap
	
	//       define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });
	//     </doc-code>
	//     <h2>Browser globals</h2>
	//     <p>
	//       The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.min.js</code> with
	//       all components exported in the <code>window.VueStrap</code> object. These bundles are also available on both the
	//       Bower and NPM packages.
	//     </p>
	//     <doc-code language="markup">
	//       <v-select :options="options"></v-select>
	
	//       <script src="path/to/vue.js"></script>
	//       <script src="path/to/vue-strap.js"></script>
	//       <script>
	//         new Vue({
	//           components: {
	//             vSelect: VueStrap.select
	//           },
	//           data: {
	//             options: []
	//           }
	//         })
	//       </script>
	//     </doc-code>
	//     <h2>Translations (optional):</h2>
	//     <p>If you want to enable language support, you have to add:</p>
	//     <doc-code language="markup">
	//       <script src="path/to/vue-strap-lang.js"></script>
	//     </doc-code>
	//     <h2>CommonJS</h2>
	//     <doc-code language="javascript">
	//       require('vue-strap/dist/vue-strap-lang.js')
	//     </doc-code>
	//     <p>If not included what you need, you can add your own, without editing the source code of vue-strap.</p>
	//     <hr/>
	//     <h2>Mobile detection (optional):</h2>
	//     <p>If you need to enable/disable options if is a mobile device you can add:</p>
	//     <doc-code language="markup">
	//       <script src="path/to/isMobileBrowser.js"></script>
	//     </doc-code>
	//     <p>Then in javascript you can check it just doing:</p>
	//     <doc-code language="javascript">
	//       if (navigator.isMobile) {
	//         //do something if is mobile
	//       }
	//       if ('isMobile' in navigator) {
	//         //do things only if the plugin was loaded
	
	//         if (!navigator.isMobile) {
	//           //do something if is not a mobile
	//         }
	//       }
	//     </doc-code>
	//     <p>Based on <a href="http://detectmobilebrowsers.com/">Detect Mobile Browsers</a>.</p>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(130)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(131)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docCode.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docCode.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./docCode.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docCode.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./docCode.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    language: {
	      type: String,
	      default: 'html'
	    }
	  },
	  compiled: function compiled() {
	    var content = '';
	    (0, _NodeList2.default)(this._slotContents.default.childNodes).each(function (el) {
	      content += el.outerHTML || el.nodeValue;
	    });
	    if (~['html', 'markup'].indexOf(this.language)) content = content.replace(/(\w+)=""/g, '$1');
	    var matches = content.match(/(\n|\r)[ ]*\S/g);
	    if (matches) {
	      var values = matches.map(function (el) {
	        return el.length - 2;
	      });
	      var min = Math.min.apply(Math, values);
	      content = content.replace(/(\n|\r)([^\n\S]*)/g, function (str, nr, s) {
	        return nr + s.substr(min);
	      });
	    }
	    this.$els.container.innerHTML = content.replace(/^\s+|\s+$/g, '');
	  }
	};
	// </script>
	// <template>
	//   <pre v-if="!language" v-el:container></pre>
	//   <template v-else>
	//     <pre v-if="language=='markup'"><code class="language-markup"><script v-el:container type="language-mark-up"></script></code></pre>
	//     <pre v-else><code class="language-{{language}}"><script v-el:container type="language-{{language}}"></script></code></pre>
	//   </template>
	// </template>
	
	// <script>

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<pre v-if=\"!language\" v-el:container></pre>\n  <template v-else>\n    <pre v-if=\"language=='markup'\"><code class=\"language-markup\"><script v-el:container type=\"language-mark-up\"></script></code></pre>\n    <pre v-else><code class=\"language-{{language}}\"><script v-el:container type=\"language-{{language}}\"></script></code></pre>\n  </template>";

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"getting-started\">\n    <h1 class=\"page-header\"><a href=\"#getting-started\" class=\"anchor\">Getting started</a></h1>\n    <div class=\"bs-callout bs-callout-success\">\n      <h4>About this project</h4>\n      <p>\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n        The only required dependencies are:\n      </p>\n      <ul>\n        <li><a href=\"http://vuejs.org/\">Vue.js</a>\n          (required ^1.0.8, test with 1.0.8).</li>\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a>\n          (required 3.x.x, test with 3.3.5).\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n        </li>\n      </ul>\n    </div>\n    <h2>CommonJS</h2>\n    <doc-code language=\"javascript\">\n      $ npm install vue-strap\n\n      var alert = require('vue-strap/src/alert');\n      // or\n      var alert = require('vue-strap').alert;\n\n      new Vue({\n        components: {\n          alert: alert\n        }\n      })\n    </doc-code>\n    <h2>ES6</h2>\n    <doc-code language=\"javascript\">\n      $ npm install vue-strap\n\n      import alert from 'vue-strap/src/alert'\n      // or\n      import { alert } from 'vue-strap'\n\n      new Vue({\n        components: {\n          alert\n        }``\n      })\n    </doc-code>\n\n    <h2>AMD</h2>\n    <doc-code language=\"javascript\">\n      $ bower install vue-strap\n\n      define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });\n    </doc-code>\n    <h2>Browser globals</h2>\n    <p>\n      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.min.js</code> with\n      all components exported in the <code>window.VueStrap</code> object. These bundles are also available on both the\n      Bower and NPM packages.\n    </p>\n    <doc-code language=\"markup\">\n      <v-select :options=\"options\"></v-select>\n\n      <script src=\"path/to/vue.js\"></script>\n      <script src=\"path/to/vue-strap.js\"></script>\n      <script>\n        new Vue({\n          components: {\n            vSelect: VueStrap.select\n          },\n          data: {\n            options: []\n          }\n        })\n      </script>\n    </doc-code>\n    <h2>Translations (optional):</h2>\n    <p>If you want to enable language support, you have to add:</p>\n    <doc-code language=\"markup\">\n      <script src=\"path/to/vue-strap-lang.js\"></script>\n    </doc-code>\n    <h2>CommonJS</h2>\n    <doc-code language=\"javascript\">\n      require('vue-strap/dist/vue-strap-lang.js')\n    </doc-code>\n    <p>If not included what you need, you can add your own, without editing the source code of vue-strap.</p>\n    <hr/>\n    <h2>Mobile detection (optional):</h2>\n    <p>If you need to enable/disable options if is a mobile device you can add:</p>\n    <doc-code language=\"markup\">\n      <script src=\"path/to/isMobileBrowser.js\"></script>\n    </doc-code>\n    <p>Then in javascript you can check it just doing:</p>\n    <doc-code language=\"javascript\">\n      if (navigator.isMobile) {\n        //do something if is mobile\n      }\n      if ('isMobile' in navigator) {\n        //do things only if the plugin was loaded\n\n        if (!navigator.isMobile) {\n          //do something if is not a mobile\n        }\n      }\n    </doc-code>\n    <p>Based on <a href=\"http://detectmobilebrowsers.com/\">Detect Mobile Browsers</a>.</p>\n  </div>";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(134)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(176)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Accordion = __webpack_require__(141);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Checkbox = __webpack_require__(144);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Panel = __webpack_require__(151);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Select = __webpack_require__(156);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    accordion: _Accordion2.default,
	    checkbox: _Checkbox2.default,
	    panel: _Panel2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      checked: true,
	      selected: 'info',
	      first: 'primary',
	      types: ['default', 'primary', 'info', 'success', 'warning', 'danger']
	    };
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="accordion" name="Accordion">
	//     <div class="bs-example">
	//       <checkbox :checked.sync="checked" type="primary">Open only one at a time.</checkbox>
	//       <p><v-select :options="types" clear-button :value.sync="selected" placeholder="Global type"></v-select></p>
	//       <p><v-select :options="types" clear-button :value.sync="first" placeholder="First element type"></v-select></p>
	//       <accordion :one-at-atime="checked" :type="selected">
	//         <panel is-open :type="first=='panel'?null:first">
	//           <strong slot="header"><u>Panel #1</u></strong>
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #2">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #3">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #4">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//       </accordion>
	//     </div>
	//     <doc-code language="markup">
	//       <accordion :one-at-atime="checked" type="info">
	//         <panel is-open type="primary">
	//           <strong slot="header"><u>Panel #1</u></strong>
	//           ...
	//         </panel>
	//         <panel header="Panel #2">
	//           ...
	//         </panel>
	//         <panel header="Panel #3">
	//           ...
	//         </panel>
	//         <panel header="Panel #4">
	//           ...
	//         </panel>
	//       </accordion>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Define the type of color for the tabs (global).</p>
	//       </div>
	//       <div>
	//         <p>one-at-time</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Control whether expanding an item will cause the other items to close.</p>
	//       </div>
	//     </doc-table>
	//     <doc-table name="Panel">
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>The clickable text on the group's header. You need one to be able to click on the header for toggling.</p>
	//       </div>
	//       <div>
	//         <p>is-open</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether accordion group is open or closed.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Define the type of color for the tab (single).</p>
	//       </div>
	//     </doc-table>
	//     <p>If you want to personalice your header with some html you can use the slot instead of header attribute (panel&nbsp;#1 in the example).</p>
	//   </doc-section>
	// </template>
	
	// <script>

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(137)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docSection.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docSection.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./docSection.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docSection.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./docSection.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 136 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" :id="id">
	//     <h1 class="page-header"><a href="#{{id}}" class="anchor">{{name}}</a></h1>
	//     <slot></slot>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    id: {
	      required: true,
	      type: String,
	      default: null
	    },
	    name: {
	      required: true,
	      type: String,
	      default: null
	    }
	  },
	  created: function created() {
	    this._section = true;
	  }
	};
	// </script>

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" :id=\"id\">\n    <h1 class=\"page-header\"><a href=\"#{{id}}\" class=\"anchor\">{{name}}</a></h1>\n    <slot></slot>\n  </div>";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(139)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(140)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docTable.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docTable.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./docTable.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./docTable.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./docTable.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    name: {
	      type: String,
	      default: null
	    },
	    type: {
	      type: String,
	      default: 'Options'
	    },
	    headers: {
	      type: Array,
	      default: null
	    }
	  },
	  data: function data() {
	    return {
	      defaultHeaders: {
	        events: ['Name', 'Arguments', 'Description'],
	        options: ['Name', 'Type', 'Default', 'Description']
	      },
	      options: []
	    };
	  },
	
	  computed: {
	    permited: function permited() {
	      return this.setHeaders.length;
	    },
	    setHeaders: function setHeaders() {
	      return this.headers || this.defaultHeaders[this.type.toLowerCase()] || [];
	    }
	  },
	  methods: {
	    el: function el(opc) {
	      for (var i = opc.length - 1; i < this.permited; i++) {
	        opc.push('');
	      }return opc;
	    }
	  },
	  created: function created() {
	    if (!this.name && this.$parent._section) {
	      this.name = this.$parent.name;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var container = this._slotContents.default;
	    if (container) {
	      (0, _NodeList2.default)(container.children).each(function (option) {
	        if (option && option.children) _this.options.push((0, _NodeList2.default)(option.children).map(function (el) {
	          return el.innerHTML;
	        }));
	      });
	    }
	  }
	};
	// </script>
	// <template>
	//   <div v-if="permited">
	//     <h2 v-if="options.length">{{name}} {{ type }}</h2>
	//     <div class="table-responsive">
	//       <table v-if="options.length" class="table table-bordered">
	//         <thead>
	//             <tr>
	//               <th v-for="name in setHeaders" v-text="name"></th>
	//             </tr>
	//         </thead>
	//         <tbody>
	//           <tr v-for="option in options">
	//             <td v-for="h in setHeaders" v-html="option[$index]"></td>
	//           </tr>
	//         </tbody>
	//       </table>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"permited\">\n    <h2 v-if=\"options.length\">{{name}} {{ type }}</h2>\n    <div class=\"table-responsive\">\n      <table v-if=\"options.length\" class=\"table table-bordered\">\n        <thead>\n            <tr>\n              <th v-for=\"name in setHeaders\" v-text=\"name\"></th>\n            </tr>\n        </thead>\n        <tbody>\n          <tr v-for=\"option in options\">\n            <td v-for=\"h in setHeaders\" v-html=\"option[$index]\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>";

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(142)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(143)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: null
	    },
	    oneAtAtime: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this._isAccordion = true;
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtAtime) {
	        _this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	    });
	  }
	};
	// </script>
	// <template>
	//   <div class="panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\n    <slot></slot>\n  </div>";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(145)
	module.exports = __webpack_require__(149)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(150)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-56cc8bb6&file=Checkbox.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-56cc8bb6&file=Checkbox.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-56cc8bb6&file=Checkbox.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-56cc8bb6&file=Checkbox.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, "label.checkbox[_v-56cc8bb6] {\n  position: relative;\n  padding-left: 18px;\n}\nlabel.checkbox > input[_v-56cc8bb6] {\n  box-sizing: border-box;\n  position: absolute;\n  z-index: -1;\n  padding: 0;\n  opacity: 0;\n  margin: 0;\n}\nlabel.checkbox > .icon[_v-56cc8bb6] {\n  position: absolute;\n  top: .2rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  line-height:1rem;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: .35rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\nlabel.checkbox:not(.active) > .icon[_v-56cc8bb6] {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\nlabel.checkbox > input:focus ~ .icon[_v-56cc8bb6] {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\nlabel.checkbox.active > .icon[_v-56cc8bb6] {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\n}\nlabel.checkbox.active .btn-default[_v-56cc8bb6] { -webkit-filter: brightness(75%); filter: brightness(75%); }\n\nlabel.checkbox.disabled[_v-56cc8bb6],\nlabel.checkbox.readonly[_v-56cc8bb6],\n.btn.readonly[_v-56cc8bb6] {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=checkbox][_v-56cc8bb6] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}", ""]);
	
	// exports


/***/ },
/* 147 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    value: {
	      default: true
	    },
	    checked: {
	      twoWay: true
	    },
	    button: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    active: function active() {
	      return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value;
	    },
	    isButton: function isButton() {
	      return this.button || this.group && this.$parent.buttons;
	    },
	    group: function group() {
	      return this.$parent && this.$parent._checkboxGroup;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    checked: function checked(val) {
	      if (typeof this.value !== 'boolean' && this.group) {
	        if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value);
	        if (!this.checked && ~this.$parent.value.indexOf(this.value)) this.$parent.value.$remove(this.value);
	      }
	    }
	  },
	  created: function created() {
	    if (typeof this.value === 'boolean') {
	      return;
	    }
	    var parent = this.$parent;
	    if (parent && parent._btnGroup && !parent._radioGroup) {
	      parent._checkboxGroup = true;
	      if (!(parent.value instanceof Array)) {
	        parent.value = [];
	      }
	    }
	  },
	  ready: function ready() {
	    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
	      return;
	    }
	    if (this.$parent.value.length) {
	      this.checked = ~this.$parent.value.indexOf(this.value);
	    } else if (this.checked) {
	      this.$parent.value.push(this.value);
	    }
	  },
	
	  methods: {
	    eval: function _eval() {
	      if (typeof this.value !== 'boolean' && this.group) {
	        this.checked = ~this.$parent.value.indexOf(this.value);
	      }
	    },
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    toggle: function toggle() {
	      if (!this.disabled) {
	        this.focus();
	        if (!this.readonly) {
	          this.checked = this.checked ? null : this.value;
	          if (this.group && typeof this.value !== 'boolean') {
	            var index = this.$parent.value.indexOf(this.value);
	            this.$parent.value[~index ? '$remove' : 'push'](this.value);
	          }
	        }
	      }
	      return false;
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	// label.checkbox {
	//   position: relative;
	//   padding-left: 18px;
	// }
	// label.checkbox > input {
	//   box-sizing: border-box;
	//   position: absolute;
	//   z-index: -1;
	//   padding: 0;
	//   opacity: 0;
	//   margin: 0;
	// }
	// label.checkbox > .icon {
	//   position: absolute;
	//   top: .2rem;
	//   left: 0;
	//   display: block;
	//   width: 1.4rem;
	//   height: 1.4rem;
	//   line-height:1rem;
	//   text-align: center;
	//   user-select: none;
	//   border-radius: .35rem;
	//   background-repeat: no-repeat;
	//   background-position: center center;
	//   background-size: 50% 50%;
	// }
	// label.checkbox:not(.active) > .icon {
	//   background-color: #ddd;
	//   border: 1px solid #bbb;
	// }
	// label.checkbox > input:focus ~ .icon {
	//   outline: 0;
	//   border: 1px solid #66afe9;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	// }
	// label.checkbox.active > .icon {
	//   background-size: 1rem 1rem;
	//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);
	// }
	// label.checkbox.active .btn-default { filter: brightness(75%); }
	
	// label.checkbox.disabled,
	// label.checkbox.readonly,
	// .btn.readonly {
	//   filter: alpha(opacity=65);
	//   box-shadow: none;
	//   opacity: .65;
	// }
	// label.btn > input[type=checkbox] {
	//   position: absolute;
	//   clip: rect(0,0,0,0);
	//   pointer-events: none;
	// }
	// </style>
	// <template>
	//   <label :class="[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	//     <input type="checkbox" autocomplete="off"
	//       v-el:input
	//       :checked="active"
	//       :value="value"
	//       :name="name"
	//       :readonly="readonly"
	//       :disabled="disabled"
	//     />
	//     <span v-if="!isButton" class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
	//     <span v-if="!isButton&active&&typeColor==='default'" class="icon"></span>
	//     <slot></slot>
	//   </label>
	// </template>
	
	// <script>

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\" _v-56cc8bb6=\"\">\n    <input type=\"checkbox\" autocomplete=\"off\" v-el:input=\"\" :checked=\"active\" :value=\"value\" :name=\"name\" :readonly=\"readonly\" :disabled=\"disabled\" _v-56cc8bb6=\"\">\n    <span v-if=\"!isButton\" class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\" _v-56cc8bb6=\"\"></span>\n    <span v-if=\"!isButton&amp;active&amp;&amp;typeColor==='default'\" class=\"icon\" _v-56cc8bb6=\"\"></span>\n    <slot _v-56cc8bb6=\"\"></slot>\n  </label>";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(152)
	module.exports = __webpack_require__(154)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(155)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Panel.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Panel.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1a5cacbe&file=Panel.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1a5cacbe&file=Panel.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".accordion-toggle {\n  cursor: pointer;\n}\n.collapse-transition {\n  -webkit-transition: max-height .5s ease;\n  transition: max-height .5s ease;\n}\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}", ""]);
	
	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    isOpen: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    inAccordion: function inAccordion() {
	      return this.$parent && this.$parent._isAccordion;
	    },
	    panelType: function panelType() {
	      return 'panel panel-' + (this.type || this.$parent && this.$parent.type || 'default');
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  transitions: {
	    collapse: {
	      afterEnter: function afterEnter(el) {
	        el.style.maxHeight = '';
	        el.style.overflow = '';
	      },
	      beforeLeave: function beforeLeave(el) {
	        el.style.maxHeight = el.offsetHeight + 'px';
	        el.style.overflow = 'hidden';
	        // Recalculate DOM before the class gets added.
	        return el.offsetHeight;
	      }
	    }
	  },
	  created: function created() {
	    if (this.isOpen === null) {
	      this.isOpen = !this.inAccordion;
	    }
	  }
	};
	// </script>
	
	// <style>
	// .accordion-toggle {
	//   cursor: pointer;
	// }
	// .collapse-transition {
	//   transition: max-height .5s ease;
	// }
	// .collapse-enter, .collapse-leave {
	//   max-height: 0!important;
	// }
	// </style>
	// <template>
	//   <div :class="panelType">
	//     <div :class="['panel-heading',{'accordion-toggle':inAccordion}]" @click.prevent="inAccordion&&toggle()">
	//       <slot name="header">
	//         <h4 class="panel-title">{{ header }}</h4>
	//       </slot>
	//     </div>
	//     <div class="panel-collapse"
	//       v-el:panel
	//       v-show="isOpen"
	//       transition="collapse"
	//     >
	//       <div class="panel-body">
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"panelType\">\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\n      <slot name=\"header\">\n        <h4 class=\"panel-title\">{{ header }}</h4>\n      </slot>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(157)
	module.exports = __webpack_require__(159)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(175)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Select.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-8c2549a2&file=Select.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Select.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-8c2549a2&file=Select.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-8c2549a2&file=Select.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-8c2549a2&file=Select.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, "div.form-control.dropdown-toggle[_v-8c2549a2]{\n  height: auto;\n  padding-right: 24px;\n  cursor: pointer;\n}\ndiv.form-control.dropdown-toggle[_v-8c2549a2]:after{\n  content: ' ';\n  position: absolute;\n  right: 13px;\n  top: 50%;\n  margin: -1px 0 0;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.bs-searchbox[_v-8c2549a2] {\n  position: relative;\n  margin: 4px 8px;\n}\n.bs-searchbox .close[_v-8c2549a2] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.bs-searchbox input[_v-8c2549a2]:focus,\n.secret:focus + button[_v-8c2549a2] {\n  outline: 0;\n  border-color: #66afe9 !important;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.secret[_v-8c2549a2] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\ndiv>.close[_v-8c2549a2] { margin-left: 5px; }\n.notify.out[_v-8c2549a2] { position: relative; }\n.notify.in[_v-8c2549a2],\n.notify>div[_v-8c2549a2] {\n  position: absolute;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n  pointer-events: none;\n}\n.notify>div[_v-8c2549a2] {\n  top: 5px;\n  z-index: 1;\n}\n.notify.in[_v-8c2549a2] {\n  opacity: .9;\n  bottom: 5px;\n}\n.btn-group-justified .dropdown-toggle>span[_v-8c2549a2]:not(.close) {\n  width: calc(100% - 18px);\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -4px;\n}\n.btn-group-justified .dropdown-menu[_v-8c2549a2] {\n  width: 100%;\n}\n.open>.dropdown-menu[_v-8c2549a2] {\n  overflow-y: auto;\n  max-height: 2.5rem;\n}\n.form-control.dropdown-toggle[_v-8c2549a2]{\n  border-radius: 5px;\n}\n.form-control.dropdown-toggle>.close[_v-8c2549a2]{\n  float: none;\n  font-size: 20px;\n  line-height: 20px;\n}", ""]);
	
	// exports


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(160);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div v-el:select :class="classes">
	//     <div class="form-control dropdown-toggle"
	//       :disabled="disabled || !hasParent"
	//       :readonly="readonly"
	//       @click="toggle()"
	//       @keyup.esc="show = false"
	//     >
	//       <span class="btn-content" v-html="loading ? text.loading : showPlaceholder || selected"></span>
	//       <span v-if="clearButton&&values.length" class="close" @click="clear()">&times;</span>
	//     </div>
	//     <select v-el:sel v-model="value" v-show="show" name="{{name}}" class="secret" :multiple="multiple" :required="required" :readonly="readonly" :disabled="disabled">
	//       <option v-if="required" value=""></option>
	//       <option v-for="option in options" :value="option[optionsValue]||option">{{ option[optionsLabel]||option }}</option>
	//     </select>
	//     <ul class="dropdown-menu">
	//       <template v-if="options.length">
	//         <li v-if="canSearch" class="bs-searchbox">
	//           <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
	//             v-el:search
	//             v-model="searchValue"
	//             @keyup.esc="show = false"
	//           />
	//           <span v-show="searchValue" class="close" @click="clearSearch">&times;</span>
	//         </li>
	//         <li v-if="required&&!clearButton"><a @mousedown.prevent="clear() && blur()">{{ placeholder || text.notSelected }}</a></li>
	//         <li v-for="option in options | filterBy searchValue" :id="option[optionsValue]||option">
	//           <a @mousedown.prevent="select(option[optionsValue],option)">
	//             <span v-html="option[optionsLabel]||option"></span>
	//             <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option[optionsValue])"></span>
	//           </a>
	//         </li>
	//       </template>
	//       <slot></slot>
	//       <div v-if="showNotify && !closeOnSelect" class="notify in" transition="fadein">{{limitText}}</div>
	//     </ul>
	//     <div v-if="showNotify && closeOnSelect" class="notify out" transition="fadein"><div>{{limitText}}</div></div>
	//   </div>
	// </template>
	
	// <script>
	var timeout = {};
	exports.default = {
	  props: {
	    value: {
	      twoWay: true
	    },
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    multiple: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    clearButton: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    closeOnSelect: { // only works when multiple
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    limit: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 1024
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    optionsLabel: {
	      type: String,
	      default: 'label'
	    },
	    optionsValue: {
	      type: String,
	      default: 'value'
	    },
	    parent: {
	      default: true
	    },
	    placeholder: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    required: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    minSearch: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    searchText: {
	      type: String,
	      default: null
	    },
	    url: {
	      type: String,
	      default: null
	    }
	  },
	  data: function data() {
	    return {
	      loading: null,
	      searchValue: null,
	      show: false,
	      showNotify: false,
	      valid: null
	    };
	  },
	
	  computed: {
	    selected: function selected() {
	      var _this = this;
	
	      if (this.options.length === 0) {
	        return '';
	      }
	      var foundItems = [];
	      this.values.forEach(function (item) {
	        if (~['number', 'string'].indexOf(typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item))) {
	          var option = null;
	          if (_this.options.some(function (o) {
	            if (o instanceof Object ? o[_this.optionsValue] === item : o === item) {
	              option = o;
	              return true;
	            }
	          })) {
	            foundItems.push(option[_this.optionsLabel] || option);
	          }
	        }
	      });
	      return foundItems.join(', ');
	    },
	    classes: function classes() {
	      return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
	    },
	    canSearch: function canSearch() {
	      return this.minSearch ? this.options.length >= this.minSearch : this.search;
	    },
	    limitText: function limitText() {
	      return this.text.limit.replace('{{limit}}', this.limit);
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.values.length === 0 || !this.hasParent ? this.placeholder || this.text.notSelected : null;
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    hasParent: function hasParent() {
	      return this.parent instanceof Array ? this.parent.length : this.parent;
	    },
	    values: function values() {
	      return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : [];
	    }
	  },
	  watch: {
	    options: function options(_options) {
	      var _this2 = this;
	
	      var changed = false;
	      if (_options instanceof Array && _options.length) {
	        _options.map(function (el) {
	          if (!(el instanceof Object)) {
	            var obj = {};
	            obj[_this2.optionsLabel] = el;
	            obj[_this2.optionsValue] = el;
	            changed = true;
	            return obj;
	          }
	          return el;
	        });
	      }
	      if (changed) {
	        this.options = _options;
	      }
	    },
	    show: function show(val) {
	      if (val) {
	        this.$els.sel.focus();
	        this.$els.search && this.$els.search.focus();
	      }
	    },
	    url: function url() {
	      this.update();
	    },
	    value: function value(val) {
	      var _this3 = this;
	
	      this.$emit('change', val);
	      this.$emit('selected', this.selected);
	      if (this.value instanceof Array && val.length > this.limit) {
	        this.showNotify = true;
	        if (timeout.limit) clearTimeout(timeout.limit);
	        timeout.limit = setTimeout(function () {
	          timeout.limit = false;
	          _this3.showNotify = false;
	        }, 1500);
	      }
	      this.checkValue();
	      this.valid = this.validate();
	    },
	    valid: function valid(val, old) {
	      if (val === old) {
	        return;
	      }
	      this._parent && this._parent.validate();
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    clear: function clear() {
	      if (this.disabled || this.readonly) {
	        return;
	      }
	      this.value = this.value instanceof Array ? [] : null;
	      this.toggle();
	    },
	    clearSearch: function clearSearch() {
	      this.searchValue = '';
	      this.$els.search.focus();
	    },
	    checkValue: function checkValue() {
	      if (this.multiple && !(this.value instanceof Array)) {
	        this.value = this.value === null || this.value === undefined ? [] : [this.value];
	      }
	      if (!this.multiple && this.value instanceof Array) {
	        this.value = this.value.length ? this.value.pop() : null;
	      }
	      if (this.limit < 1) {
	        this.limit = 1;
	      }
	      if (this.values.length > this.limit) {
	        this.value = this.value.slice(0, this.limit);
	      }
	    },
	    isSelected: function isSelected(v) {
	      return this.values.indexOf(v) > -1;
	    },
	    select: function select(v, alt) {
	      this.$els.search.blur();
	      if (this.value instanceof Array) {
	        if (~this.value.indexOf(v)) {
	          this.value.$remove(v);
	        } else {
	          this.value.push(v);
	        }
	        if (this.closeOnSelect) {
	          this.toggle();
	        }
	      } else {
	        var tmp = this.value;
	        this.value = !~['', null, undefined].indexOf(v) ? v : alt;
	        if (this.value === tmp) {
	          this.value = null;
	        }
	        this.toggle();
	      }
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	    update: function update() {
	      var _this4 = this;
	
	      if (!this.url) return;
	      this.loading = true;
	      (0, _utils.getJSON)(this.url).then(function (data) {
	        var options = [];
	        data.forEach(function (opc) {
	          if (opc[_this4.optionsValue] !== undefined && opc[_this4.optionsLabel] !== undefined) options.push(opc);
	        });
	        _this4.options = options;
	        if (!options.length) {
	          _this4.value = _this4.value instanceof Array ? [] : null;
	        }
	      }).always(function () {
	        _this4.loading = false;
	        _this4.checkValue();
	      });
	    },
	    validate: function validate() {
	      return !this.required ? true : this.value instanceof Array ? this.value.length > 0 : this.value !== null;
	    }
	  },
	  created: function created() {
	    this._select = true;
	    if (this.value === undefined || !this.parent) {
	      this.value = null;
	    }
	    if (!this.multiple && this.value instanceof Array) {
	      this.value = this.value.shift();
	    }
	    this.checkValue();
	    if (this.url) this.update();
	    var parent = this.$parent;
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  ready: function ready() {
	    var _this5 = this;
	
	    (0, _NodeList2.default)(this.$els.select).onBlur(function (e) {
	      _this5.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) this._parent.children.$remove(this);
	    (0, _NodeList2.default)(this.$els.select).offBlur();
	  }
	};
	// </script>
	
	// <style scoped>
	// div.form-control.dropdown-toggle{
	//   height: auto;
	//   padding-right: 24px;
	//   cursor: pointer;
	// }
	// div.form-control.dropdown-toggle:after{
	//   content: ' ';
	//   position: absolute;
	//   right: 13px;
	//   top: 50%;
	//   margin: -1px 0 0;
	//   border-top: 4px dashed;
	//   border-top: 4px solid \9;
	//   border-right: 4px solid transparent;
	//   border-left: 4px solid transparent;
	// }
	// .bs-searchbox {
	//   position: relative;
	//   margin: 4px 8px;
	// }
	// .bs-searchbox .close {
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   z-index: 2;
	//   display: block;
	//   width: 34px;
	//   height: 34px;
	//   line-height: 34px;
	//   text-align: center;
	// }
	// .bs-searchbox input:focus,
	// .secret:focus + button {
	//   outline: 0;
	//   border-color: #66afe9 !important;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	// }
	// .secret {
	//   border: 0;
	//   clip: rect(0 0 0 0);
	//   height: 1px;
	//   margin: -1px;
	//   overflow: hidden;
	//   padding: 0;
	//   position: absolute;
	//   width: 1px;
	// }
	// div>.close { margin-left: 5px; }
	// .notify.out { position: relative; }
	// .notify.in,
	// .notify>div {
	//   position: absolute;
	//   width: 96%;
	//   margin: 0 2%;
	//   min-height: 26px;
	//   padding: 3px 5px;
	//   background: #f5f5f5;
	//   border: 1px solid #e3e3e3;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
	//   pointer-events: none;
	// }
	// .notify>div {
	//   top: 5px;
	//   z-index: 1;
	// }
	// .notify.in {
	//   opacity: .9;
	//   bottom: 5px;
	// }
	// .btn-group-justified .dropdown-toggle>span:not(.close) {
	//   width: calc(100% - 18px);
	//   display: inline-block;
	//   overflow: hidden;
	//   white-space: nowrap;
	//   text-overflow: ellipsis;
	//   margin-bottom: -4px;
	// }
	// .btn-group-justified .dropdown-menu {
	//   width: 100%;
	// }
	// .open>.dropdown-menu {
	//   overflow-y: auto;
	//   max-height: 2.5rem;
	// }
	// .form-control.dropdown-toggle{
	//   border-radius: 5px;
	// }
	// .form-control.dropdown-toggle>.close{
	//   float: none;
	//   font-size: 20px;
	//   line-height: 20px;
	// }
	// </style>

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(74);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(161);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(163);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	module.exports = __webpack_require__(61).Symbol;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(60)
	  , has            = __webpack_require__(83)
	  , DESCRIPTORS    = __webpack_require__(69)
	  , $export        = __webpack_require__(59)
	  , redefine       = __webpack_require__(82)
	  , META           = __webpack_require__(164).KEY
	  , $fails         = __webpack_require__(70)
	  , shared         = __webpack_require__(97)
	  , setToStringTag = __webpack_require__(101)
	  , uid            = __webpack_require__(98)
	  , wks            = __webpack_require__(102)
	  , wksExt         = __webpack_require__(109)
	  , wksDefine      = __webpack_require__(165)
	  , keyOf          = __webpack_require__(166)
	  , enumKeys       = __webpack_require__(167)
	  , isArray        = __webpack_require__(170)
	  , anObject       = __webpack_require__(66)
	  , toIObject      = __webpack_require__(90)
	  , toPrimitive    = __webpack_require__(72)
	  , createDesc     = __webpack_require__(73)
	  , _create        = __webpack_require__(86)
	  , gOPNExt        = __webpack_require__(114)
	  , $GOPD          = __webpack_require__(171)
	  , $DP            = __webpack_require__(65)
	  , $keys          = __webpack_require__(88)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(115).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(169).f  = $propertyIsEnumerable;
	  __webpack_require__(168).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(81)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(64)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(98)('meta')
	  , isObject = __webpack_require__(67)
	  , has      = __webpack_require__(83)
	  , setDesc  = __webpack_require__(65).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(70)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(60)
	  , core           = __webpack_require__(61)
	  , LIBRARY        = __webpack_require__(81)
	  , wksExt         = __webpack_require__(109)
	  , defineProperty = __webpack_require__(65).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(88)
	  , toIObject = __webpack_require__(90);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(88)
	  , gOPS    = __webpack_require__(168)
	  , pIE     = __webpack_require__(169);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 169 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(92);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(169)
	  , createDesc     = __webpack_require__(73)
	  , toIObject      = __webpack_require__(90)
	  , toPrimitive    = __webpack_require__(72)
	  , has            = __webpack_require__(83)
	  , IE8_DOM_DEFINE = __webpack_require__(68)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(69) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 172 */
/***/ function(module, exports) {



/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(165)('asyncIterator');

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(165)('observable');

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "<div v-el:select=\"\" :class=\"classes\" _v-8c2549a2=\"\">\n    <div class=\"form-control dropdown-toggle\" :disabled=\"disabled || !hasParent\" :readonly=\"readonly\" @click=\"toggle()\" @keyup.esc=\"show = false\" _v-8c2549a2=\"\">\n      <span class=\"btn-content\" v-html=\"loading ? text.loading : showPlaceholder || selected\" _v-8c2549a2=\"\"></span>\n      <span v-if=\"clearButton&amp;&amp;values.length\" class=\"close\" @click=\"clear()\" _v-8c2549a2=\"\">×</span>\n    </div>\n    <select v-el:sel=\"\" v-model=\"value\" v-show=\"show\" name=\"{{name}}\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\" _v-8c2549a2=\"\">\n      <option v-if=\"required\" value=\"\" _v-8c2549a2=\"\"></option>\n      <option v-for=\"option in options\" :value=\"option[optionsValue]||option\" _v-8c2549a2=\"\">{{ option[optionsLabel]||option }}</option>\n    </select>\n    <ul class=\"dropdown-menu\" _v-8c2549a2=\"\">\n      <template v-if=\"options.length\" _v-8c2549a2=\"\">\n        <li v-if=\"canSearch\" class=\"bs-searchbox\" _v-8c2549a2=\"\">\n          <input type=\"text\" placeholder=\"{{searchText||text.search}}\" class=\"form-control\" autocomplete=\"off\" v-el:search=\"\" v-model=\"searchValue\" @keyup.esc=\"show = false\" _v-8c2549a2=\"\">\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\" _v-8c2549a2=\"\">×</span>\n        </li>\n        <li v-if=\"required&amp;&amp;!clearButton\" _v-8c2549a2=\"\"><a @mousedown.prevent=\"clear() &amp;&amp; blur()\" _v-8c2549a2=\"\">{{ placeholder || text.notSelected }}</a></li>\n        <li v-for=\"option in options | filterBy searchValue\" :id=\"option[optionsValue]||option\" _v-8c2549a2=\"\">\n          <a @mousedown.prevent=\"select(option[optionsValue],option)\" _v-8c2549a2=\"\">\n            <span v-html=\"option[optionsLabel]||option\" _v-8c2549a2=\"\"></span>\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option[optionsValue])\" _v-8c2549a2=\"\"></span>\n          </a>\n        </li>\n      </template>\n      <slot _v-8c2549a2=\"\"></slot>\n      <div v-if=\"showNotify &amp;&amp; !closeOnSelect\" class=\"notify in\" transition=\"fadein\" _v-8c2549a2=\"\">{{limitText}}</div>\n    </ul>\n    <div v-if=\"showNotify &amp;&amp; closeOnSelect\" class=\"notify out\" transition=\"fadein\" _v-8c2549a2=\"\"><div _v-8c2549a2=\"\">{{limitText}}</div></div>\n  </div>";

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"accordion\" name=\"Accordion\">\n    <div class=\"bs-example\">\n      <checkbox :checked.sync=\"checked\" type=\"primary\">Open only one at a time.</checkbox>\n      <p><v-select :options=\"types\" clear-button :value.sync=\"selected\" placeholder=\"Global type\"></v-select></p>\n      <p><v-select :options=\"types\" clear-button :value.sync=\"first\" placeholder=\"First element type\"></v-select></p>\n      <accordion :one-at-atime=\"checked\" :type=\"selected\">\n        <panel is-open :type=\"first=='panel'?null:first\">\n          <strong slot=\"header\"><u>Panel #1</u></strong>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #2\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #3\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #4\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n      </accordion>\n    </div>\n    <doc-code language=\"markup\">\n      <accordion :one-at-atime=\"checked\" type=\"info\">\n        <panel is-open type=\"primary\">\n          <strong slot=\"header\"><u>Panel #1</u></strong>\n          ...\n        </panel>\n        <panel header=\"Panel #2\">\n          ...\n        </panel>\n        <panel header=\"Panel #3\">\n          ...\n        </panel>\n        <panel header=\"Panel #4\">\n          ...\n        </panel>\n      </accordion>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>type</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>Define the type of color for the tabs (global).</p>\n      </div>\n      <div>\n        <p>one-at-time</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Control whether expanding an item will cause the other items to close.</p>\n      </div>\n    </doc-table>\n    <doc-table name=\"Panel\">\n      <div>\n        <p>header</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>The clickable text on the group's header. You need one to be able to click on the header for toggling.</p>\n      </div>\n      <div>\n        <p>is-open</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Whether accordion group is open or closed.</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>Define the type of color for the tab (single).</p>\n      </div>\n    </doc-table>\n    <p>If you want to personalice your header with some html you can use the slot instead of header attribute (panel&nbsp;#1 in the example).</p>\n  </doc-section>";

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(178)
	module.exports = __webpack_require__(180)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(187)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(179);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-47fe40fa&file=affixDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-47fe40fa&file=affixDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite\n}\n@-webkit-keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n@keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}", ""]);
	
	// exports


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Tooltip = __webpack_require__(181);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="affix" name="Affix">
	//     <div class="bs-example">
	//       <h3>
	//         The sub-navigation on the RIGHT is a live demo of the affix.
	//         <spam class="visible-xs-block visible-sm-block">(The live demo is hidden in small screens)</spam>
	//         <tooltip trigger="hover" effect="fadein" content="I'm a direction, not jerking off!" placement="left">
	//           <span class="glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm"></span>
	//         </tooltip>
	//       </h3>
	//     </div>
	//     <doc-code language="markup">
	//       <affix offset="50">
	//         <ul>
	//           <li>...</li>
	//           <li>...</li>
	//           <li>...</li>
	//         </ul>
	//         <a href="#">...</a>
	//       </affix>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>offset</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>Pixels to offset from top of screen when calculating position of scroll.</p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    tooltip: _Tooltip2.default
	  }
	};
	// </script>
	
	// <style>
	// .animated {
	//     -webkit-animation-duration: 3s;
	//     animation-duration: 3s;
	//     -webkit-animation-fill-mode: both;
	//     animation-fill-mode: both;
	//     animation-iteration-count: infinite
	// }
	// @keyframes shake {
	//     0%, 100% {transform: translateX(0);}
	//     10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
	//     20%, 40%, 60%, 80% {transform: translateX(5px);}
	// }
	// .shake {
	//     -webkit-animation-name: shake;
	//     animation-name: shake;
	// }
	// </style>

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(182)
	module.exports = __webpack_require__(184)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(186)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-a906aa40&file=Tooltip.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-a906aa40&file=Tooltip.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip.top,\n.tooltip.left,\n.tooltip.right,\n.tooltip.bottom {\n  opacity: .9\n}\n.fadein-enter {\n  -webkit-animation:fadein-in 0.3s ease-in;\n          animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  -webkit-animation:fadein-out 0.3s ease-out;\n          animation:fadein-out 0.3s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: .9;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: .9;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: .9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: .9;\n  }\n  100% {\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(185);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    effect: {
	      type: String,
	      default: 'scale'
	    }
	  }
	};
	// </script>
	
	// <style>
	// .tooltip.top,
	// .tooltip.left,
	// .tooltip.right,
	// .tooltip.bottom {
	//   opacity: .9
	// }
	// .fadein-enter {
	//   animation:fadein-in 0.3s ease-in;
	// }
	// .fadein-leave {
	//   animation:fadein-out 0.3s ease-out;
	// }
	// @keyframes fadein-in {
	//   0% {
	//     opacity: 0;
	//   }
	//   100% {
	//     opacity: .9;
	//   }
	// }
	// @keyframes fadein-out {
	//   0% {
	//     opacity: .9;
	//   }
	//   100% {
	//     opacity: 0;
	//   }
	// }
	// </style>
	// <template>
	//   <span v-el:trigger>
	//     <slot></slot>
	//     <div v-el:popover v-if="show" style="display:block;"
	//       :class="['tooltip',placement]"
	//       :transition="effect"
	//     >
	//       <div class="tooltip-arrow"></div>
	//       <div class="tooltip-inner">
	//         <slot name="content" v-html="content"></slot>
	//     </div>
	//     </div>
	//   </span>
	// </template>
	
	// <script>

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    trigger: {
	      type: String
	    },
	    effect: {
	      type: String,
	      default: 'fade'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: false
	    };
	  },
	
	  methods: {
	    toggle: function toggle(e) {
	      var _this = this;
	
	      if (e && this.trigger === 'contextmenu') e.preventDefault();
	      if (!(this.show = !this.show)) {
	        return;
	      }
	      setTimeout(function () {
	        var popover = _this.$els.popover;
	        var trigger = _this.$els.trigger.children[0];
	        switch (_this.placement) {
	          case 'top':
	            _this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this.position.top = trigger.offsetTop - popover.offsetHeight;
	            break;
	          case 'left':
	            _this.position.left = trigger.offsetLeft - popover.offsetWidth;
	            _this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'right':
	            _this.position.left = trigger.offsetLeft + trigger.offsetWidth;
	            _this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'bottom':
	            _this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this.position.top = trigger.offsetTop + trigger.offsetHeight;
	            break;
	          default:
	            console.warn('Wrong placement prop');
	        }
	        popover.style.top = _this.position.top + 'px';
	        popover.style.left = _this.position.left + 'px';
	      }, 0);
	    }
	  },
	  ready: function ready() {
	    var trigger = this.$els.trigger;
	    if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.');
	
	    if (this.trigger === 'focus' && !~trigger.tabIndex) {
	      trigger = (0, _NodeList2.default)('a,input,select,textarea,button', trigger);
	      if (!trigger.length) {
	        trigger = null;
	      }
	    }
	    if (trigger) {
	      var events = { contextmenu: 'contextmenu', hover: 'mouseleave mouseenter', focus: 'blur focus' };
	      (0, _NodeList2.default)(trigger).on(events[this.trigger] || 'click', this.toggle);
	      this._trigger = trigger;
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._trigger) (0, _NodeList2.default)(this._trigger).off();
	  }
	};

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\n    <slot></slot>\n    <div v-el:popover v-if=\"show\" style=\"display:block;\"\n      :class=\"['tooltip',placement]\"\n      :transition=\"effect\"\n    >\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">\n        <slot name=\"content\" v-html=\"content\"></slot>\n    </div>\n    </div>\n  </span>";

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"affix\" name=\"Affix\">\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <spam class=\"visible-xs-block visible-sm-block\">(The live demo is hidden in small screens)</spam>\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <doc-code language=\"markup\">\n      <affix offset=\"50\">\n        <ul>\n          <li>...</li>\n          <li>...</li>\n          <li>...</li>\n        </ul>\n        <a href=\"#\">...</a>\n      </affix>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>offset</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>Pixels to offset from top of screen when calculating position of scroll.</p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189)
	module.exports = __webpack_require__(191)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(197)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(190);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-26c6ac86&file=alertDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-26c6ac86&file=alertDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".alert-icon-float-left {\n  font-size:32px;\n  float:left;\n  margin-right:5px;\n}", ""]);
	
	// exports


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Alert = __webpack_require__(192);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="alert" name="Alert">
	//     <div class="bs-example" >
	//       <button class="btn btn-danger btn-lg"
	//         @click="showTop = !showTop">
	//         Click to toggle alert on top
	//       </button>
	//       <button class="btn btn-success btn-lg"
	//         @click="showRight = !showRight">
	//         Click to toggle alert on right
	//       </button>
	//       <hr>
	//       <alert type="success">
	//         <strong>Well Done!</strong>
	//         You successfully read this important alert message.
	//       </alert>
	//       <alert type="info">
	//         <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	//       </alert>
	//       <alert type="danger" dismissable>
	//         <strong>Oh snap!</strong> Change a few things up and try submitting again.
	//       </alert>
	//       <alert type="warning" dismissable>
	//         <strong>Warning!</strong> Better check yourself, you're not looking too good.
	//       </alert>
	//       <alert :show.sync="showRight" placement="top-right" duration="3000"
	//         type="success" width="400px" dismissable
	//       >
	//         <span class="icon-ok-circled alert-icon-float-left"></span>
	//         <strong>Well Done!</strong>
	//         <p>You successfully read this important alert message.</p>
	//       </alert>
	//       <alert :show.sync="showTop" placement="top" duration="3000"
	//         type="danger" width="400px" dismissable
	//       >
	//         <span class="icon-info-circled alert-icon-float-left"></span>
	//         <strong>Heads up!</strong>
	//         <p>This alert needs your attention.</p>
	//       </alert>
	//     </div>
	
	//     <doc-code language="markup">
	//       <alert type="success/info/danger/warning">
	//         ...
	//       </alert>
	
	//       <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
	//         <span class="icon-ok-circled alert-icon-float-left"></span>
	//         <strong>Well Done!</strong>
	//         <p>You successfully read this important alert message.</p>
	//       </alert>
	
	//       <alert :show.sync="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
	//         <span class="icon-info-circled alert-icon-float-left"></span>
	//         <strong>Heads up!</strong>
	//         <p>This alert needs your attention.</p>
	//       </alert>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>show</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether show the component</p>
	//       </div>
	//       <div>
	//         <p>dismissable</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether show close button</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of
	//         <code>success</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>danger</code></p>
	//         <p><code>success</code></p>
	//         <p>Components styles</p>
	//       </div>
	//       <div>
	//         <p>duration</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>
	//       </div>
	//       <div>
	//         <p>width</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>
	//         <p></p>
	//         <p>how to position the component.</p>
	//       </div>
	//     </doc-table>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    alert: _Alert2.default
	  },
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false
	    };
	  }
	};
	// </script>
	
	// <style>
	// .alert-icon-float-left {
	//   font-size:32px;
	//   float:left;
	//   margin-right:5px;
	// }
	// </style>

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(193)
	module.exports = __webpack_require__(195)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(196)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Alert.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Alert.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Alert.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Alert.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Alert.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(194);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-17f8860e&file=Alert.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-17f8860e&file=Alert.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-transition {\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 1050;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 1050;\n}", ""]);
	
	// exports


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    width: {
	      type: String
	    },
	    placement: {
	      type: String
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && Boolean(this.duration)) {
	        this._timeout = setTimeout(function () {
	          _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	// </script>
	
	// <style>
	// .fade-transition {
	//   transition: opacity .3s ease;
	// }
	// .fade-enter,
	// .fade-leave {
	//   height: 0;
	//   opacity: 0;
	// }
	// .alert.top {
	//   position: fixed;
	//   top: 30px;
	//   margin: 0 auto;
	//   left: 0;
	//   right: 0;
	//   z-index: 1050;
	// }
	// .alert.top-right {
	//   position: fixed;
	//   top: 30px;
	//   right: 50px;
	//   z-index: 1050;
	// }
	// </style>
	// <template>
	//   <div
	//     v-show="show"
	//     v-bind:class="{
	//       'alert':		true,
	//       'alert-success':(type == 'success'),
	//       'alert-warning':(type == 'warning'),
	//       'alert-info':	(type == 'info'),
	//       'alert-danger':	(type == 'danger'),
	//       'top': 			(placement === 'top'),
	//       'top-right': 	(placement === 'top-right')
	//     }"
	//     transition="fade"
	//     v-bind:style="{width:width}"
	//     role="alert">
	//     <button v-show="dismissable" type="button" class="close"
	//       @click="show = false">
	//       <span>&times;</span>
	//     </button>
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "<div\n    v-show=\"show\"\n    v-bind:class=\"{\n      'alert':\t\ttrue,\n      'alert-success':(type == 'success'),\n      'alert-warning':(type == 'warning'),\n      'alert-info':\t(type == 'info'),\n      'alert-danger':\t(type == 'danger'),\n      'top': \t\t\t(placement === 'top'),\n      'top-right': \t(placement === 'top-right')\n    }\"\n    transition=\"fade\"\n    v-bind:style=\"{width:width}\"\n    role=\"alert\">\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n      @click=\"show = false\">\n      <span>&times;</span>\n    </button>\n    <slot></slot>\n  </div>";

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"alert\" name=\"Alert\">\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n      <hr>\n      <alert type=\"success\">\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n      <alert type=\"info\">\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n      <alert :show.sync=\"showRight\" placement=\"top-right\" duration=\"3000\"\n        type=\"success\" width=\"400px\" dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n      <alert :show.sync=\"showTop\" placement=\"top\" duration=\"3000\"\n        type=\"danger\" width=\"400px\" dismissable\n      >\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </div>\n\n    <doc-code language=\"markup\">\n      <alert type=\"success/info/danger/warning\">\n        ...\n      </alert>\n\n      <alert :show.sync=\"showRight\" placement=\"top-right\" duration=\"3000\" type=\"success\" width=\"400px\" dismissable>\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n\n      <alert :show.sync=\"showTop\" placement=\"top\" duration=\"3000\" type=\"danger\" width=\"400px\" dismissable>\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>show</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether show the component</p>\n      </div>\n      <div>\n        <p>dismissable</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Whether show close button</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of\n        <code>success</code>\n        <code>info</code>\n        <code>warning</code>\n        <code>danger</code></p>\n        <p><code>success</code></p>\n        <p>Components styles</p>\n      </div>\n      <div>\n        <p>duration</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>\n      </div>\n      <div>\n        <p>width</p>\n        <p><code>String</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>\n        <p></p>\n        <p>how to position the component.</p>\n      </div>\n    </doc-table>\n  </div>\n</template>";

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(199)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(205)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Aside = __webpack_require__(200);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="aside" name="Aside">
	//     <div class="bs-example">
	//       <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>
	//       <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>
	
	//       <sidebar :show.sync="showLeft" placement="left" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//         <doc-code language="javascript">
	//           if (talk === cheap){
	//             code.style.display = 'block'
	//           }
	//         </doc-code>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showLeft=false">Close</button>
	//         </div>
	//       </sidebar>
	//       <sidebar :show.sync="showRight" placement="right" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//         <doc-code language="javascript">
	//           if (talk === cheap){
	//             code.style.display = 'block'
	//           }
	//         </doc-code>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showRight=false">Close</button>
	//         </div>
	//       </sidebar>
	//     </div>
	//     <doc-code language="markup">
	//       <aside :show.sync="showRight" placement="right" header="Title" width="350">
	//         ...
	//       </aside>
	//       <aside :show.sync="showLeft" placement="left" header="Title" width="350">
	//         ...
	//       </aside>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>show</p>
	//         <p><code>Boolean</code></p>
	//         <p></p>
	//         <p>Whether show the component.</p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>, one of <code>left</code>, <code>right</code></p>
	//         <p><code>right</code></p>
	//         <p>how to position the component.</p>
	//       </div>
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Header text of the aside component.</p>
	//       </div>
	//       <div>
	//         <p>width</p>
	//         <p><code>Number</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    sidebar: _Aside2.default
	  },
	  data: function data() {
	    return {
	      showLeft: false,
	      showRight: false
	    };
	  }
	};
	// </script>

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(201)
	module.exports = __webpack_require__(203)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(204)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Aside.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Aside.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Aside.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Aside.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Aside.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-f3e4aa56&file=Aside.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-f3e4aa56&file=Aside.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".aside-open {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.aside-open.has-push-right {\n  -webkit-transform: translateX(-300px);\n          transform: translateX(-300px);\n}\n.aside {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 1049;\n    overflow: auto;\n    background: #fff;\n}\n.aside.left {\n  left: 0;\n  right: auto;\n}\n.aside.right {\n  left: auto;\n  right: 0;\n}\n.slideleft-enter {\n  -webkit-animation:slideleft-in .3s;\n          animation:slideleft-in .3s;\n}\n.slideleft-leave {\n  -webkit-animation:slideleft-out .3s;\n          animation:slideleft-out .3s;\n}\n@-webkit-keyframes slideleft-in {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideleft-in {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideleft-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n@keyframes slideleft-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.slideright-enter {\n  -webkit-animation:slideright-in .3s;\n          animation:slideright-in .3s;\n}\n.slideright-leave {\n  -webkit-animation:slideright-out .3s;\n          animation:slideright-out .3s;\n}\n@-webkit-keyframes slideright-in {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideright-in {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideright-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n}\n@keyframes slideright-out {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.aside:focus {\n    outline: 0\n}\n@media (max-width: 991px) {\n  .aside {\n    min-width:240px\n  }\n}\n.aside.left {\n  right: auto;\n  left: 0\n}\n.aside.right {\n  right: 0;\n  left: auto\n}\n.aside .aside-dialog .aside-header {\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.43px;\n  padding: 6px 15px;\n  background: #337ab7;\n  color: #fff\n}\n.aside .aside-dialog .aside-header .close {\n  margin-right: -8px;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 25px;\n  opacity: .8\n}\n.aside .aside-dialog .aside-body {\n  position: relative;\n  padding: 15px\n}\n.aside .aside-dialog .aside-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5\n}\n.aside .aside-dialog .aside-footer .btn+.btn {\n  margin-left: 5px;\n  margin-bottom: 0\n}\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n  margin-left: -1px\n}\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\n  margin-left: 0\n}\n.aside-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: 0;\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n  background-color: #000\n}\n.aside-backdrop.in {\n  opacity: .5;\n  filter: alpha(opacity=50)\n}", ""]);
	
	// exports


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="aside"
	//     v-bind:style="{width:width + 'px'}"
	//     v-bind:class="{
	//     left:placement === 'left',
	//     right:placement === 'right'
	//     }"
	//     v-show="show"
	//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
	//     <div class="aside-dialog">
	//       <div class="aside-content">
	//         <div class="aside-header">
	//           <button type="button" class="close" @click='close'><span>&times;</span></button>
	//           <h4 class="aside-title">
	//           <slot name="header">
	//             {{ header }}
	//           </slot>
	//           </h4>
	//         </div>
	//         <div class="aside-body">
	//           <slot></slot>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      required: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      default: 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 320
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (val) {
	        if (!this._backdrop) {
	          this._backdrop = document.createElement('div');
	        }
	        this._backdrop.className = 'aside-backdrop';
	        body.appendChild(this._backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = this._backdrop.clientHeight;
	        this._backdrop.classList.add('in');
	        (0, _NodeList2.default)(this._backdrop).on('click', function () {
	          return _this.close();
	        });
	      } else {
	        (0, _NodeList2.default)(this._backdrop).on('transitionend', function () {
	          (0, _NodeList2.default)(_this._backdrop).off();
	          try {
	            body.classList.remove('modal-open');
	            body.style.paddingRight = '0';
	            body.removeChild(_this._backdrop);
	            _this._backdrop = null;
	          } catch (e) {}
	        });
	        this._backdrop.className = 'aside-backdrop';
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	
	// <style>
	// .aside-open {
	//   transition: transform 0.3s;
	// }
	// .aside-open.has-push-right {
	//   transform: translateX(-300px);
	// }
	// .aside {
	//     position: fixed;
	//     top: 0;
	//     bottom: 0;
	//     z-index: 1049;
	//     overflow: auto;
	//     background: #fff;
	// }
	// .aside.left {
	//   left: 0;
	//   right: auto;
	// }
	// .aside.right {
	//   left: auto;
	//   right: 0;
	// }
	// .slideleft-enter {
	//   animation:slideleft-in .3s;
	// }
	// .slideleft-leave {
	//   animation:slideleft-out .3s;
	// }
	// @keyframes slideleft-in {
	//   0% {
	//     transform: translateX(-100%);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	// }
	// @keyframes slideleft-out {
	//   0% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: translateX(-100%);
	//     opacity: 0;
	//   }
	// }
	// .slideright-enter {
	//   animation:slideright-in .3s;
	// }
	// .slideright-leave {
	//   animation:slideright-out .3s;
	// }
	// @keyframes slideright-in {
	//   0% {
	//     transform: translateX(100%);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	// }
	// @keyframes slideright-out {
	//   0% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: translateX(100%);
	//     opacity: 0;
	//   }
	// }
	// .aside:focus {
	//     outline: 0
	// }
	// @media (max-width: 991px) {
	//   .aside {
	//     min-width:240px
	//   }
	// }
	// .aside.left {
	//   right: auto;
	//   left: 0
	// }
	// .aside.right {
	//   right: 0;
	//   left: auto
	// }
	// .aside .aside-dialog .aside-header {
	//   border-bottom: 1px solid #e5e5e5;
	//   min-height: 16.43px;
	//   padding: 6px 15px;
	//   background: #337ab7;
	//   color: #fff
	// }
	// .aside .aside-dialog .aside-header .close {
	//   margin-right: -8px;
	//   padding: 4px 8px;
	//   color: #fff;
	//   font-size: 25px;
	//   opacity: .8
	// }
	// .aside .aside-dialog .aside-body {
	//   position: relative;
	//   padding: 15px
	// }
	// .aside .aside-dialog .aside-footer {
	//   padding: 15px;
	//   text-align: right;
	//   border-top: 1px solid #e5e5e5
	// }
	// .aside .aside-dialog .aside-footer .btn+.btn {
	//   margin-left: 5px;
	//   margin-bottom: 0
	// }
	// .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
	//   margin-left: -1px
	// }
	// .aside .aside-dialog .aside-footer .btn-block+.btn-block {
	//   margin-left: 0
	// }
	// .aside-backdrop {
	//   position: fixed;
	//   top: 0;
	//   right: 0;
	//   bottom: 0;
	//   left: 0;
	//   z-index: 1040;
	//   opacity: 0;
	//   transition: opacity .3s ease;
	//   background-color: #000
	// }
	// .aside-backdrop.in {
	//   opacity: .5;
	//   filter: alpha(opacity=50)
	// }
	// </style>

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aside\"\n    v-bind:style=\"{width:width + 'px'}\"\n    v-bind:class=\"{\n    left:placement === 'left',\n    right:placement === 'right'\n    }\"\n    v-show=\"show\"\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\n    <div class=\"aside-dialog\">\n      <div class=\"aside-content\">\n        <div class=\"aside-header\">\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\n          <h4 class=\"aside-title\">\n          <slot name=\"header\">\n            {{ header }}\n          </slot>\n          </h4>\n        </div>\n        <div class=\"aside-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"aside\" name=\"Aside\">\n    <div class=\"bs-example\">\n      <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\n      <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\n\n      <sidebar :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <doc-code language=\"javascript\">\n          if (talk === cheap){\n            code.style.display = 'block'\n          }\n        </doc-code>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft=false\">Close</button>\n        </div>\n      </sidebar>\n      <sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <doc-code language=\"javascript\">\n          if (talk === cheap){\n            code.style.display = 'block'\n          }\n        </doc-code>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\n        </div>\n      </sidebar>\n    </div>\n    <doc-code language=\"markup\">\n      <aside :show.sync=\"showRight\" placement=\"right\" header=\"Title\" width=\"350\">\n        ...\n      </aside>\n      <aside :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" width=\"350\">\n        ...\n      </aside>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>show</p>\n        <p><code>Boolean</code></p>\n        <p></p>\n        <p>Whether show the component.</p>\n      </div>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>, one of <code>left</code>, <code>right</code></p>\n        <p><code>right</code></p>\n        <p>how to position the component.</p>\n      </div>\n      <div>\n        <p>header</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Header text of the aside component.</p>\n      </div>\n      <div>\n        <p>width</p>\n        <p><code>Number</code></p>\n        <p></p>\n        <p></p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(207)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(216)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroupDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroupDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./buttonGroupDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroupDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./buttonGroupDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _buttonGroup = __webpack_require__(208);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(144);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Radio = __webpack_require__(211);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="button-group" name="Button Group">
	//     <div class="bs-example">
	//       <h4>Checkbox</h4>
	//       <button-group :value.sync="checkboxValue">
	//         <checkbox value="left">Left</checkbox>
	//         <checkbox value="middle">Middle</checkbox>
	//         <checkbox value="right">Right</checkbox>
	//       </button-group>
	//       <p>
	//         <pre>Checkbox value: {{checkboxValue | json}}</pre>
	//       </p>
	//       <hr>
	//       <h4>Radio</h4>
	//       <p>
	//         <button-group :value.sync="radioValue" type="primary">
	//           <radio value="left">Left</radio>
	//           <radio value="middle">Middle</radio>
	//           <radio value="right">Right</radio>
	//         </button-group>
	//       </p>
	//       <p>
	//         <button-group :value.sync="radioValue" type="success">
	//           <radio value="left">Left</radio>
	//           <radio value="middle">Middle</radio>
	//           <radio value="right">Right</radio>
	//         </button-group>
	//       </p>
	//       <p>
	//         <label>Not buttons:</label>
	//         <button-group :value.sync="radioValue" type="info" buttons="false">
	//           <radio value="left">Left</radio>
	//           <radio value="middle">Middle</radio>
	//           <radio value="right">Right</radio>
	//         </button-group>
	//       </p>
	//       <p>
	//         <pre>Radio value: {{radioValue}}</pre>
	//       </p>
	//     </div>
	//     <doc-code language="markup">
	//       <button-group :value.sync="checkboxValue">
	//         <checkbox value="left">Left</checkbox>
	//         <checkbox value="middle">Middle</checkbox>
	//         <checkbox value="right">Right</checkbox>
	//       </button-group>
	
	//       <button-group :value.sync="radioValue" type="primary">
	//         <radio value="left">Left</radio>
	//         <radio value="middle">Middle</radio>
	//         <radio value="right">Right</radio>
	//       </button-group>
	
	//       Not Buttons:
	//       <button-group :value.sync="radioValue" type="info" buttons="false">
	//         <radio value="left">Left</radio>
	//         <radio value="middle">Middle</radio>
	//         <radio value="right">Right</radio>
	//       </button-group>
	//     </doc-code>
	
	//     <doc-table>
	//       <div>
	//         <p>value</p>
	//         <p><code>Array</code> or <code>String</code></p>
	//         <p></p>
	//         <p>If defined, then the defined values will be checked otherwise the elements with a checked attribute
	//         will be checked.</p>
	//       </div>
	//       <div>
	//         <p>buttons</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>
	//           <p>Can enable/disable button style.</p>
	//           <p>Group normal checks if you want to set the same type color for all.</p>
	//         </p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    buttonGroup: _buttonGroup2.default,
	    checkbox: _Checkbox2.default,
	    radio: _Radio2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: 'middle'
	    };
	  }
	};
	// </script>

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(209)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(210)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    value: null,
	    buttons: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    justified: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    vertical: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  watch: {
	    value: {
	      deep: true,
	      handler: function handler(val) {
	        this.$children.forEach(function (el) {
	          if (el.group && el.eval) el.eval();
	        });
	      }
	    }
	  },
	  created: function created() {
	    this._btnGroup = true;
	  }
	};
	// </script>
	// <template>
	//   <div :class="{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}" :data-toggle="buttons&&'buttons'">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}\" :data-toggle=\"buttons&&'buttons'\">\n    <slot></slot>\n  </div>";

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(212)
	module.exports = __webpack_require__(214)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(215)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Radio.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Radio.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Radio.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Radio.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Radio.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(213);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1159e018&file=Radio.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1159e018&file=Radio.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".radio { position: relative; }\n.radio > label > input {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  z-index: -1;\n  box-sizing: border-box;\n}\n.radio > label > .icon {\n  position: absolute;\n  top: .15rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: .7rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.radio:not(.active) > label > .icon {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\n.radio > label > input:focus ~ .icon {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.radio.active > label > .icon {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\n}\n.radio.active .btn-default { -webkit-filter: brightness(75%); filter: brightness(75%); }\n\n.radio.disabled > label > .icon,\n.radio.readonly > label > .icon,\n.btn.readonly {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=radio] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}", ""]);
	
	// exports


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    value: {
	      default: true
	    },
	    checked: {
	      twoWay: true
	    },
	    button: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.group ? this.$parent.value === this.value : this.value === this.checked;
	    },
	    buttonStyle: function buttonStyle() {
	      return this.button || this.group && this.$parent.buttons;
	    },
	    group: function group() {
	      return this.$parent && this.$parent._radioGroup;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (!parent) return;
	    if (parent._btnGroup && !parent._checkboxGroup) {
	      parent._radioGroup = true;
	    }
	  },
	  ready: function ready() {
	    if (!this.$parent._radioGroup) return;
	    if (this.$parent.value) {
	      this.checked = this.$parent.value === this.value;
	    } else if (this.checked) {
	      this.$parent.value = this.value;
	    }
	  },
	
	  methods: {
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    toggle: function toggle() {
	      if (this.disabled) {
	        return;
	      }
	      this.focus();
	      if (this.readonly) {
	        return;
	      }
	      this.checked = this.value;
	      if (this.group) {
	        this.$parent.value = this.value;
	      }
	    }
	  }
	};
	// </script>
	
	// <style scope>
	// .radio { position: relative; }
	// .radio > label > input {
	//   position: absolute;
	//   margin: 0;
	//   padding: 0;
	//   opacity: 0;
	//   z-index: -1;
	//   box-sizing: border-box;
	// }
	// .radio > label > .icon {
	//   position: absolute;
	//   top: .15rem;
	//   left: 0;
	//   display: block;
	//   width: 1.4rem;
	//   height: 1.4rem;
	//   text-align: center;
	//   user-select: none;
	//   border-radius: .7rem;
	//   background-repeat: no-repeat;
	//   background-position: center center;
	//   background-size: 50% 50%;
	// }
	// .radio:not(.active) > label > .icon {
	//   background-color: #ddd;
	//   border: 1px solid #bbb;
	// }
	// .radio > label > input:focus ~ .icon {
	//   outline: 0;
	//   border: 1px solid #66afe9;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	// }
	// .radio.active > label > .icon {
	//   background-size: 1rem 1rem;
	//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
	// }
	// .radio.active .btn-default { filter: brightness(75%); }
	
	// .radio.disabled > label > .icon,
	// .radio.readonly > label > .icon,
	// .btn.readonly {
	//   filter: alpha(opacity=65);
	//   box-shadow: none;
	//   opacity: .65;
	// }
	// label.btn > input[type=radio] {
	//   position: absolute;
	//   clip: rect(0,0,0,0);
	//   pointer-events: none;
	// }
	// </style>
	// <template>
	//   <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	//     <input type="radio" autocomplete="off"
	//       v-el:input
	//       v-show="!readonly"
	//       :checked="active"
	//       :value="value"
	//       :name="name"
	//       :readonly="readonly"
	//       :disabled="disabled"
	//     />
	//     <slot></slot>
	//   </label>
	//   <div v-else :class="['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	//     <label class="open">
	//       <input type="radio" autocomplete="off"
	//         v-el:input
	//         :checked="active"
	//         :value="value"
	//         :name="name"
	//         :readonly="readonly"
	//         :disabled="disabled"
	//       />
	//       <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
	//       <span v-if="active&&typeColor==='default'" class="icon"></span>
	//       <slot></slot>
	//     </label>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\n    <input type=\"radio\" autocomplete=\"off\"\n      v-el:input\n      v-show=\"!readonly\"\n      :checked=\"active\"\n      :value=\"value\"\n      :name=\"name\"\n      :readonly=\"readonly\"\n      :disabled=\"disabled\"\n    />\n    <slot></slot>\n  </label>\n  <div v-else :class=\"['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\n    <label class=\"open\">\n      <input type=\"radio\" autocomplete=\"off\"\n        v-el:input\n        :checked=\"active\"\n        :value=\"value\"\n        :name=\"name\"\n        :readonly=\"readonly\"\n        :disabled=\"disabled\"\n      />\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\n      <slot></slot>\n    </label>\n  </div>";

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"button-group\" name=\"Button Group\">\n    <div class=\"bs-example\">\n      <h4>Checkbox</h4>\n      <button-group :value.sync=\"checkboxValue\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\">Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </button-group>\n      <p>\n        <pre>Checkbox value: {{checkboxValue | json}}</pre>\n      </p>\n      <hr>\n      <h4>Radio</h4>\n      <p>\n        <button-group :value.sync=\"radioValue\" type=\"primary\">\n          <radio value=\"left\">Left</radio>\n          <radio value=\"middle\">Middle</radio>\n          <radio value=\"right\">Right</radio>\n        </button-group>\n      </p>\n      <p>\n        <button-group :value.sync=\"radioValue\" type=\"success\">\n          <radio value=\"left\">Left</radio>\n          <radio value=\"middle\">Middle</radio>\n          <radio value=\"right\">Right</radio>\n        </button-group>\n      </p>\n      <p>\n        <label>Not buttons:</label>\n        <button-group :value.sync=\"radioValue\" type=\"info\" buttons=\"false\">\n          <radio value=\"left\">Left</radio>\n          <radio value=\"middle\">Middle</radio>\n          <radio value=\"right\">Right</radio>\n        </button-group>\n      </p>\n      <p>\n        <pre>Radio value: {{radioValue}}</pre>\n      </p>\n    </div>\n    <doc-code language=\"markup\">\n      <button-group :value.sync=\"checkboxValue\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\">Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </button-group>\n\n      <button-group :value.sync=\"radioValue\" type=\"primary\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\">Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </button-group>\n\n      Not Buttons:\n      <button-group :value.sync=\"radioValue\" type=\"info\" buttons=\"false\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\">Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </button-group>\n    </doc-code>\n\n    <doc-table>\n      <div>\n        <p>value</p>\n        <p><code>Array</code> or <code>String</code></p>\n        <p></p>\n        <p>If defined, then the defined values will be checked otherwise the elements with a checked attribute\n        will be checked.</p>\n      </div>\n      <div>\n        <p>buttons</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>\n          <p>Can enable/disable button style.</p>\n          <p>Group normal checks if you want to set the same type color for all.</p>\n        </p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of <code>default</code>\n        <code>primary</code>\n        <code>danger</code>\n        <code>info</code>\n        <code>warning</code>\n        <code>success</code></p>\n        <p><code>default</code></p>\n        <p></p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(218)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(227)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Carousel = __webpack_require__(219);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(224);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    carousel: _Carousel2.default,
	    slider: _Slider2.default
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="carousel" name="Carousel">
	//     <div class="bs-example">
	//       <carousel>
	//         <slider>
	//           <img src="https://placehold.it/1200x500?text=one">
	//           <div class="carousel-caption">
	//            <h3>Slide #1</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img src="https://placehold.it/1200x500?text=two">
	//           <div class="carousel-caption">
	//            <h3>Slide #2</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img src="https://placehold.it/1200x500?text=three">
	//           <div class="carousel-caption">
	//            <h3>Slide #3</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//       </carousel>
	//     </div>
	//     <doc-code language="markup">
	//       <carousel>
	//         <slider>
	//           <img src="https://placehold.it/1200x400?text=one">
	//           <div class="carousel-caption">
	//             ...
	//           </div>
	//         </slider>
	//         <slider>
	//           <img src="https://placehold.it/1200x400?text=two">
	//         </slider>
	//         <slider>
	//           <img src="https://placehold.it/1200x400?text=three">
	//         </slider>
	//       </carousel>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>indicators</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether to show the indicators.</p>
	//       </div>
	//       <div>
	//         <p>controls</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether to show the direction controls.</p>
	//       </div>
	//       <div>
	//         <p>interval</p>
	//         <p><code>Number</code></p>
	//         <p><code>5000</code></p>
	//         <p>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,
	//           carousel will not automatically cycle.
	//         </p>
	//       </div>
	//     </doc-table>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(220)
	module.exports = __webpack_require__(222)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(223)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-1fd7bad3&file=Carousel.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-1fd7bad3&file=Carousel.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(221);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1fd7bad3&file=Carousel.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1fd7bad3&file=Carousel.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".carousel-control[_v-1fd7bad3] {\n  cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="carousel slide" data-ride="carousel">
	//   <!-- Indicators -->
	//   <ol class="carousel-indicators" v-show="indicators">
	//     <li v-for="i in indicator" @click="indicatorClick($index)" v-bind:class="{active:$index === index}"><span></span></li>
	//   </ol>
	//   <!-- Wrapper for slides -->
	//   <div class="carousel-inner" role="listbox">
	//     <slot></slot>
	//   </div>
	//   <!-- Controls -->
	//   <div v-show="controls" class="carousel-controls hidden-xs">
	//     <a class="left carousel-control" role="button" @click="prev">
	//       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	//     </a>
	//     <a class="right carousel-control" role="button" @click="next">
	//       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	//     </a>
	//   </div>
	// </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 5000
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      index: 0,
	      isAnimating: false
	    };
	  },
	
	  watch: {
	    index: function index(newVal, oldVal) {
	      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
	    }
	  },
	  methods: {
	    indicatorClick: function indicatorClick(index) {
	      if (this.isAnimating || this.index === index) return false;
	      this.isAnimating = true;
	      this.index = index;
	    },
	    slide: function slide(direction, next, prev) {
	      var _this = this;
	
	      if (!this.$el) {
	        return;
	      }
	      var $slider = (0, _NodeList2.default)('.item', this.$el);
	      if (!$slider.length) {
	        return;
	      }
	      var selected = $slider[next] || $slider[0];
	      (0, _NodeList2.default)(selected).addClass(direction === 'left' ? 'next' : 'prev');
	      // request property that requires layout to force a layout
	      var x = selected.clientHeight;
	      (0, _NodeList2.default)([$slider[prev], selected]).addClass(direction).on('transitionend', function () {
	        $slider.off('transitionend').className = 'item';
	        (0, _NodeList2.default)(selected).addClass('active');
	        _this.isAnimating = false;
	      });
	    },
	    next: function next() {
	      if (!this.$el || this.isAnimating) {
	        return false;
	      }
	      this.isAnimating = true;
	      this.index + 1 < (0, _NodeList2.default)('.item', this.$el).length ? this.index += 1 : this.index = 0;
	    },
	    prev: function prev() {
	      if (!this.$el || this.isAnimating) {
	        return false;
	      }
	      this.isAnimating = true;
	      this.index === 0 ? this.index = (0, _NodeList2.default)('.item', this.$el).length - 1 : this.index -= 1;
	    },
	    toggleInterval: function toggleInterval(val) {
	      if (val === undefined) {
	        val = this._intervalID;
	      }
	      if (this._intervalID) {
	        clearInterval(this._intervalID);
	        delete this._intervalID;
	      }
	      if (val && this.interval > 0) {
	        this._intervalID = setInterval(this.next, this.interval);
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.toggleInterval(true);
	    (0, _NodeList2.default)(this.$el).on('mouseenter', function () {
	      return _this2.toggleInterval(false);
	    }).on('mouseleave', function () {
	      return _this2.toggleInterval(true);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.toggleInterval(false);
	    (0, _NodeList2.default)(this.$el).off('mouseenter mouseleave');
	  }
	};
	// </script>
	
	// <style scoped>
	// .carousel-control {
	//   cursor: pointer;
	// }
	// </style>

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-1fd7bad3=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-1fd7bad3=\"\">\n    <li v-for=\"i in indicator\" @click=\"indicatorClick($index)\" v-bind:class=\"{active:$index === index}\" _v-1fd7bad3=\"\"><span _v-1fd7bad3=\"\"></span></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-1fd7bad3=\"\">\n    <slot _v-1fd7bad3=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\" _v-1fd7bad3=\"\">\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\" _v-1fd7bad3=\"\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-1fd7bad3=\"\"></span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\" _v-1fd7bad3=\"\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-1fd7bad3=\"\"></span>\n    </a>\n  </div>\n</div>";

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(225)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(226)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Slider.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Slider.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="item">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.index === this.index;
	    }
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c] === this) {
	        this.index = parseInt(c, 10);
	        break;
	      }
	    }
	    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	// </script>

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<div class=\"item\">\n    <slot></slot>\n  </div>";

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"carousel\" name=\"Carousel\">\n    <div class=\"bs-example\">\n      <carousel>\n        <slider>\n          <img src=\"https://placehold.it/1200x500?text=one\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"https://placehold.it/1200x500?text=two\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"https://placehold.it/1200x500?text=three\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n      </carousel>\n    </div>\n    <doc-code language=\"markup\">\n      <carousel>\n        <slider>\n          <img src=\"https://placehold.it/1200x400?text=one\">\n          <div class=\"carousel-caption\">\n            ...\n          </div>\n        </slider>\n        <slider>\n          <img src=\"https://placehold.it/1200x400?text=two\">\n        </slider>\n        <slider>\n          <img src=\"https://placehold.it/1200x400?text=three\">\n        </slider>\n      </carousel>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>indicators</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether to show the indicators.</p>\n      </div>\n      <div>\n        <p>controls</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether to show the direction controls.</p>\n      </div>\n      <div>\n        <p>interval</p>\n        <p><code>Number</code></p>\n        <p><code>5000</code></p>\n        <p>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </p>\n      </div>\n    </doc-table>\n  </div>\n</template>";

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(229)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(230)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./checkboxDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./checkboxDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./checkboxDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./checkboxDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./checkboxDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(144);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="checkbox" name="Checkbox">
	//     <div class="bs-example">
	//       <h4>Checkbox</h4>
	//       <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="danger" disabled>Two (disabled)</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="warning" readonly>Two (readonly)</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="success">Two</checkbox>
	//       <hr>
	//       <h4>Checkbox Button (Single button)</h4>
	//       <checkbox button :checked.sync="checkboxValue.three" value="three" type="primary">Three</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="info" disabled>Four (disabled)</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="info" readonly>Four (readonly)</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="info">Four</checkbox>
	//       <p>
	//         <pre>Checkbox values: {{checkboxValue | json}}</pre>
	//       </p>
	//     </div>
	//     <doc-code language="markup">
	//       <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="primary">Two</checkbox>
	//       <checkbox :checked.sync="checkboxValue.three" value="three" type="info">Three</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="danger">Four</checkbox>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>checked</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Handle the selected value.</p>
	//       </div>
	//       <div>
	//         <p>value</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Value to return if the checkbox item is selected.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>button</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Button style.</p>
	//       </div>
	//     </doc-table>
	//     <p>See <a href="#button-group">Button Group</a> for more options.</p>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    checkbox: _Checkbox2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: {
	        one: null,
	        two: 'two',
	        three: null,
	        four: null
	      }
	    };
	  }
	};
	// </script>

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"checkbox\" name=\"Checkbox\">\n    <div class=\"bs-example\">\n      <h4>Checkbox</h4>\n      <checkbox :checked.sync=\"checkboxValue.one\" value=\"one\">One</checkbox>\n      <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"danger\" disabled>Two (disabled)</checkbox>\n      <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"warning\" readonly>Two (readonly)</checkbox>\n      <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"success\">Two</checkbox>\n      <hr>\n      <h4>Checkbox Button (Single button)</h4>\n      <checkbox button :checked.sync=\"checkboxValue.three\" value=\"three\" type=\"primary\">Three</checkbox>\n      <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"info\" disabled>Four (disabled)</checkbox>\n      <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"info\" readonly>Four (readonly)</checkbox>\n      <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"info\">Four</checkbox>\n      <p>\n        <pre>Checkbox values: {{checkboxValue | json}}</pre>\n      </p>\n    </div>\n    <doc-code language=\"markup\">\n      <checkbox :checked.sync=\"checkboxValue.one\" value=\"one\">One</checkbox>\n      <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"primary\">Two</checkbox>\n      <checkbox :checked.sync=\"checkboxValue.three\" value=\"three\" type=\"info\">Three</checkbox>\n      <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"danger\">Four</checkbox>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>checked</p>\n        <p><code>Number</code> or <code>String</code></p>\n        <p></p>\n        <p>Handle the selected value.</p>\n      </div>\n      <div>\n        <p>value</p>\n        <p><code>Number</code> or <code>String</code></p>\n        <p></p>\n        <p>Value to return if the checkbox item is selected.</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of <code>default</code>\n        <code>primary</code>\n        <code>danger</code>\n        <code>info</code>\n        <code>warning</code>\n        <code>success</code></p>\n        <p><code>default</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>button</p>\n        <p><code>Boolean</code></p>\n        <p>false</p>\n        <p>Button style.</p>\n      </div>\n    </doc-table>\n    <p>See <a href=\"#button-group\">Button Group</a> for more options.</p>\n  </doc-section>";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(232)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./container.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./container.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./container.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container bs-docs-container\">\n    <div class=\"row\">\n        <slot></slot>\n    </div>\n  </div>";

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(234)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(243)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(144);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Datepicker = __webpack_require__(235);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Select = __webpack_require__(156);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(240);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    checkbox: _Checkbox2.default,
	    datepicker: _Datepicker2.default,
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      disabled: [],
	      value: '2015-06-10',
	      formats: [{ value: 'dd/MM/yyyy', label: 'dd/MM/yyyy' }, { value: 'dd-MM-yyyy', label: 'dd-MM-yyyy' }, { value: 'yyyy,MM,dd', label: 'yyyy,MM,dd' }, { value: 'yyyy-MM-dd', label: 'yyyy-MM-dd' }, { value: 'yyyy.MM.dd', label: 'yyyy.MM.dd' }, { value: 'MMM/dd/yyyy', label: 'MMM/dd/yyyy' }, { value: 'MMMM/dd/yyyy', label: 'MMMM/dd/yyyy' }, { value: 'MM/dd/yyyy', label: 'MM/dd/yyyy' }, { value: 'MM-dd-yyyy', label: 'MM-dd-yyyy' }],
	      format: ['yyyy-MM-dd'],
	      clear: true,
	      placeholder: 'placeholder is displayed when value is null or empty'
	    };
	  },
	
	  watch: {
	    disabled: function disabled() {
	      this.$refs.dp.getDateRange();
	    },
	    format: function format(newV) {
	      this.value = this.$refs.dp.stringify();
	    }
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="datepicker" name="Datepicker">
	//     <div class="bs-example">
	//       <p>
	//         <pre>Selected date is: {{new Date($refs.dp.parse()).toString()}}</pre>
	//       </p>
	//       <datepicker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled" :format="format.toString()" :clear-button="clear" :placeholder="placeholder" width="370px"></datepicker>
	//       <h4>Disabled days of week</h4>
	
	//       <v-select multiple :value.sync="disabled" :options="[0,1,2,3,4,5,6]"></v-select>
	
	//       <h4>Format</h4>
	//       <v-select :value.sync="format" :options="formats"></v-select>
	
	//       <h4>Reset button</h4>
	//       <checkbox :checked.sync="clear" type="primary">toggle clear button</checkbox>
	
	//       <h4>Placeholder</h4>
	//       <input :value="placeholder" type="text" style="width: 370px"></input>
	//     </div>
	//     <doc-code language="markup">
	//       <datepicker
	//         :value.sync="value"
	//         :disabled-days-of-Week="disabled"
	//         :format="format"
	//         :clear-button="clear"
	//         :placeholder="placeholder">
	//       </datepicker>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>value</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Value of the input DOM</p>
	//       </div>
	//       <div>
	//         <p>width</p>
	//         <p><code>String</code></p>
	//         <p>200px</p>
	//         <p>Width of the input DOM</p>
	//       </div>
	//       <div>
	//         <p>format</p>
	//         <p><code>String</code></p>
	//         <p><code>MMMM/dd/yyyy</code></p>
	//         <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>
	//       </div>
	//       <div>
	//         <p>disabled-days-of-week</p>
	//         <p><code>Array</code></p>
	//         <p></p>
	//         <p>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
	//            Multiple values should be comma-separated.</p>
	//       </div>
	//       <div>
	//         <p>clear-button</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.
	//           Usefull in forms where date entry is optional.</p>
	//       </div>
	//       <div>
	//         <p>placeholder</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Placeholder to put on the input field when no date (null or empty) is set</p>
	//       </div>
	//     </doc-table>
	//   </div>
	//   <div></div>
	// </template>
	
	// <script>

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)
	module.exports = __webpack_require__(238)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(239)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(237);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-71e47e6f&file=Datepicker.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-71e47e6f&file=Datepicker.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker{\n  position: relative;\n  display: inline-block;\n}\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n.datepicker > button.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  outline: none;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.datepicker > button.close:focus {\n  opacity: .2;\n}\n.datepicker-popup{\n  position: absolute;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n  width: 218px;\n}\n.datepicker-body{\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n  color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: rgb(50, 118, 177)!important;\n  color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color : #eeeeee;\n}\n.datepicker-weekRange span{\n  font-weight: bold;\n}\n.datepicker-label{\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl{\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n}\n.datepicker-preBtn{\n  left: 2px;\n}\n.datepicker-nextBtn{\n  right: 2px;\n}", ""]);
	
	// exports


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="datepicker">
	//     <input class="form-control datepicker-input" :class="{'with-reset-button': clearButton}" type="text" :placeholder="placeholder"
	//         :style="{width:width}"
	//         @click="inputClick"
	//         v-model="value"/>
	//     <button v-if="clearButton && value" type="button" class="close" @click="value = ''">
	//       <span>&times;</span>
	//     </button>
	//     <div class="datepicker-popup" v-show="displayDayView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></span>
	//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-weekRange">
	//             <span v-for="w in text.daysOfWeek">{{w}}</span>
	//           </div>
	//           <div class="datepicker-dateRange">
	//             <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date,this)">{{d.text}}</span>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayMonthView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextYearClick(0)"></span>
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextYearClick(1)"></span>
	//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange">
	//             <template v-for="m in text.months">
	//               <span   :class="{'datepicker-dateRange-item-active':
	//                   (text.months[parse(value).getMonth()]  === m) &&
	//                   currDate.getFullYear() === parse(value).getFullYear()}"
	//                   @click="monthSelect($index)"
	//                 >{{m.substr(0,3)}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayYearView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextDecadeClick(0)"></span>
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextDecadeClick(1)"></span>
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange decadeRange">
	//             <template v-for="decade in decadeRange">
	//               <span :class="{'datepicker-dateRange-item-active':
	//                   parse(this.value).getFullYear() === decade.text}"
	//                   @click.stop="yearSelect(decade.text)"
	//                 >{{decade.text}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'MM/dd/yyyy'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    width: {
	      type: String,
	      default: '200px'
	    },
	    clearButton: {
	      type: Boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this._blur = function (e) {
	      if (_this.$el !== null && !_this.$el.contains(e.target)) _this.close();
	    };
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    (0, _NodeList2.default)(window).on('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(window).off('click', this._blur);
	  },
	  data: function data() {
	    return {
	      currDate: new Date(),
	      dateRange: [],
	      decadeRange: [],
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  computed: {
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    inputClick: function inputClick() {
	      this.currDate = this.parse(this.value) || this.parse(new Date());
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, el) {
	      if (el.$el.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMonth: function parseMonth(date) {
	      return this.text.months[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;
	
	      if (!date) date = this.parse();
	      if (!date) return '';
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse() {
	      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
	
	      var date = void 0;
	      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
	        date = new Date(str.substring(6, 10), str.substring(3, 5) - 1, str.substring(0, 2));
	      } else {
	        date = new Date(str);
	      }
	      return isNaN(date.getFullYear()) ? new Date() : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	      }
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this2 = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this2.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	        if (_i2 === time.day) {
	          if (_this2.value) {
	            var valueDate = _this2.parse(_this2.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this2.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  }
	};
	// </script>
	
	// <style>
	// .datepicker{
	//   position: relative;
	//   display: inline-block;
	// }
	// input.datepicker-input.with-reset-button {
	//   padding-right: 25px;
	// }
	// .datepicker > button.close {
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   outline: none;
	//   z-index: 2;
	//   display: block;
	//   width: 34px;
	//   height: 34px;
	//   line-height: 34px;
	//   text-align: center;
	// }
	// .datepicker > button.close:focus {
	//   opacity: .2;
	// }
	// .datepicker-popup{
	//   position: absolute;
	//   border: 1px solid #ccc;
	//   border-radius: 5px;
	//   background: #fff;
	//   margin-top: 2px;
	//   z-index: 1000;
	//   box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	// }
	// .datepicker-inner{
	//   width: 218px;
	// }
	// .datepicker-body{
	//   padding: 10px 10px;
	// }
	// .datepicker-ctrl p,
	// .datepicker-ctrl span,
	// .datepicker-body span{
	//   display: inline-block;
	//   width: 28px;
	//   line-height: 28px;
	//   height: 28px;
	//   border-radius: 4px;
	// }
	// .datepicker-ctrl p {
	//   width: 65%;
	// }
	// .datepicker-ctrl span {
	//   position: absolute;
	// }
	// .datepicker-body span {
	//   text-align: center;
	// }
	// .datepicker-monthRange span{
	//   width: 48px;
	//   height: 50px;
	//   line-height: 45px;
	// }
	// .datepicker-item-disable {
	//   background-color: white!important;
	//   cursor: not-allowed!important;
	// }
	// .decadeRange span:first-child,
	// .decadeRange span:last-child,
	// .datepicker-item-disable,
	// .datepicker-item-gray{
	//   color: #999;
	// }
	
	// .datepicker-dateRange-item-active:hover,
	// .datepicker-dateRange-item-active {
	//   background: rgb(50, 118, 177)!important;
	//   color: white!important;
	// }
	// .datepicker-monthRange {
	//   margin-top: 10px
	// }
	// .datepicker-monthRange span,
	// .datepicker-ctrl span,
	// .datepicker-ctrl p,
	// .datepicker-dateRange span {
	//   cursor: pointer;
	// }
	// .datepicker-monthRange span:hover,
	// .datepicker-ctrl p:hover,
	// .datepicker-ctrl i:hover,
	// .datepicker-dateRange span:hover,
	// .datepicker-dateRange-item-hover {
	//   background-color : #eeeeee;
	// }
	// .datepicker-weekRange span{
	//   font-weight: bold;
	// }
	// .datepicker-label{
	//   background-color: #f8f8f8;
	//   font-weight: 700;
	//   padding: 7px 0;
	//   text-align: center;
	// }
	// .datepicker-ctrl{
	//   position: relative;
	//   height: 30px;
	//   line-height: 30px;
	//   font-weight: bold;
	//   text-align: center;
	// }
	// .month-btn{
	//   font-weight: bold;
	//   -webkit-user-select:none;
	//   -moz-user-select:none;
	//   -ms-user-select:none;
	//   user-select:none;
	// }
	// .datepicker-preBtn{
	//   left: 2px;
	// }
	// .datepicker-nextBtn{
	//   right: 2px;
	// }
	// </style>

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "<div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\n        :style=\"{width:width}\"\n        @click=\"inputClick\"\n        v-model=\"value\"/>\n    <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"value = ''\">\n      <span>&times;</span>\n    </button>\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <template v-for=\"m in text.months\">\n              <span   :class=\"{'datepicker-dateRange-item-active':\n                  (text.months[parse(value).getMonth()]  === m) &&\n                  currDate.getFullYear() === parse(value).getFullYear()}\"\n                  @click=\"monthSelect($index)\"\n                >{{m.substr(0,3)}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <template v-for=\"decade in decadeRange\">\n              <span :class=\"{'datepicker-dateRange-item-active':\n                  parse(this.value).getFullYear() === decade.text}\"\n                  @click.stop=\"yearSelect(decade.text)\"\n                >{{decade.text}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(241)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(242)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Option.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Option.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Option.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Option.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Option.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 241 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><li v-el:v v-if="loading"><slot></slot></li></template>
	// <script>
	exports.default = {
	  props: { value: null },
	  data: function data() {
	    return { loading: true };
	  },
	  ready: function ready() {
	    if (this.$parent._select) {
	      if (!this.$parent.options) {
	        this.$parent.options = [];
	      }
	      var el = {};
	      el[this.$parent.optionsLabel] = this.$els.v.innerHTML;
	      el[this.$parent.optionsValue] = this.value;
	      this.$parent.options.push(el);
	      this.loading = false;
	    } else {
	      console.warn('options only work inside a select component');
	    }
	  }
	};
	// </script>

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<li v-el:v v-if=\"loading\"><slot></slot></li>";

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"datepicker\" name=\"Datepicker\">\n    <div class=\"bs-example\">\n      <p>\n        <pre>Selected date is: {{new Date($refs.dp.parse()).toString()}}</pre>\n      </p>\n      <datepicker v-ref:dp :value.sync=\"value\" :disabled-days-of-Week=\"disabled\" :format=\"format.toString()\" :clear-button=\"clear\" :placeholder=\"placeholder\" width=\"370px\"></datepicker>\n      <h4>Disabled days of week</h4>\n\n      <v-select multiple :value.sync=\"disabled\" :options=\"[0,1,2,3,4,5,6]\"></v-select>\n\n      <h4>Format</h4>\n      <v-select :value.sync=\"format\" :options=\"formats\"></v-select>\n\n      <h4>Reset button</h4>\n      <checkbox :checked.sync=\"clear\" type=\"primary\">toggle clear button</checkbox>\n\n      <h4>Placeholder</h4>\n      <input :value=\"placeholder\" type=\"text\" style=\"width: 370px\"></input>\n    </div>\n    <doc-code language=\"markup\">\n      <datepicker\n        :value.sync=\"value\"\n        :disabled-days-of-Week=\"disabled\"\n        :format=\"format\"\n        :clear-button=\"clear\"\n        :placeholder=\"placeholder\">\n      </datepicker>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>value</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Value of the input DOM</p>\n      </div>\n      <div>\n        <p>width</p>\n        <p><code>String</code></p>\n        <p>200px</p>\n        <p>Width of the input DOM</p>\n      </div>\n      <div>\n        <p>format</p>\n        <p><code>String</code></p>\n        <p><code>MMMM/dd/yyyy</code></p>\n        <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>\n      </div>\n      <div>\n        <p>disabled-days-of-week</p>\n        <p><code>Array</code></p>\n        <p></p>\n        <p>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\n           Multiple values should be comma-separated.</p>\n      </div>\n      <div>\n        <p>clear-button</p>\n        <p><code>Boolean</code></p>\n        <p>false</p>\n        <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.\n          Usefull in forms where date entry is optional.</p>\n      </div>\n      <div>\n        <p>placeholder</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Placeholder to put on the input field when no date (null or empty) is set</p>\n      </div>\n    </doc-table>\n  </div>\n  <div></div>\n</template>";

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(245)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(251)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Dropdown = __webpack_require__(246);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="dropdown" name="Dropdown">
	//     <div class="bs-example">
	//       <dropdown>
	//         <button slot="button" type="button" class="btn btn-default dropdown-toggle">
	//           Action
	//           <span class="caret"></span>
	//         </button>
	//         <ul slot="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#dropdown">Action</a></li>
	//           <li><a href="#dropdown">Another action</a></li>
	//           <li><a href="#dropdown">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#dropdown">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown text="Action" type="primary">
	//         <li><a href="#dropdown">Action</a></li>
	//         <li><a href="#dropdown">Another action</a></li>
	//         <li><a href="#dropdown">Something else here</a></li>
	//         <li role="separator" class="divider"></li>
	//         <li><a href="#dropdown">Separated link</a></li>
	//       </dropdown>
	//       <dropdown>
	//         <button slot="button" type="button" class="btn btn-success dropdown-toggle">
	//           Action <span class="caret"></span>
	//         </button>
	//         <ul slot="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#dropdown">Action</a></li>
	//           <li><a href="#dropdown">Another action</a></li>
	//           <li><a href="#dropdown">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#dropdown">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown text="Disabled" type="warning" disabled>
	//         <li><a href="#dropdown">Action</a></li>
	//       </dropdown>
	//       <dropdown type="info">
	//         <button slot="before" type="button" class="btn btn-info">Segmented</button>
	//         <li><a href="#dropdown">Action</a></li>
	//       </dropdown>
	//       <div class="btn-group btn-group-justified">
	//         <a href="#dropdown" class="btn btn-default" role="button">Left</a>
	//         <dropdown>
	//           <a slot="button" href="#dropdown" class="btn btn-default">
	//             Dropdown <span class="caret"></span>
	//           </a>
	//           <ul slot="dropdown-menu" class="dropdown-menu">
	//             <li><a href="#dropdown">Action</a></li>
	//             <li><a href="#dropdown">Another action</a></li>
	//             <li><a href="#dropdown">Something else here</a></li>
	//             <li role="separator" class="divider"></li>
	//             <li><a href="#dropdown">Separated link</a></li>
	//           </ul>
	//         </dropdown>
	//         <a href="#dropdown" class="btn btn-default" role="button">Right</a>
	//       </div>
	//     </div>
	//     <doc-code>
	//       <dropdown text="Action" type="primary">
	//         <li><a href="#dropdown">Action</a></li>
	//         <li role="separator" class="divider"></li>
	//         <li><a href="#dropdown">Separated link</a></li>
	//       </dropdown>
	//       // For segmented dropdown, ignore text and add a "before" slot
	//       <dropdown type="info">
	//         <button slot="before" type="button" class="btn btn-info">Segmented</button>
	//         <li><a href="#dropdown">...</a></li>
	//       </dropdown>
	//       // In a button group
	//       <div class="btn-group btn-group-justified">
	//         <a href="#dropdown" class="btn btn-default" role="button">Left</a>
	//         <dropdown>...</dropdown>
	//         <a href="#dropdown" class="btn btn-default" role="button">Right</a>
	//       </div>
	//       // With slots you can handle some elements as native bootstrap
	//       <dropdown>
	//         <button slot="button" type="button" class="btn btn-default dropdown-toggle">
	//           Action
	//           <span class="caret"></span>
	//         </button>
	//         <ul slot="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#dropdown">Action</a></li>
	//           <li><a href="#dropdown">Another action</a></li>
	//           <li><a href="#dropdown">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#dropdown">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>show</p>
	//         <p><code>Boolean</code></p>
	//         <p></p>
	//         <p>Whether show the component.</p>
	//       </div>
	//       <div>
	//         <p>class</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>classes to change the style.</p>
	//       </div>
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>text</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Dropdown button text.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//     </doc-table>
	//     <h2>Usage</h2>
	//     <p>Just like the examples. Can use it as the <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.</p>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    dropdown: _Dropdown2.default
	  }
	};
	// </script>

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)
	module.exports = __webpack_require__(249)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(250)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-2767dd04&file=Dropdown.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-2767dd04&file=Dropdown.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-2767dd04&file=Dropdown.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-2767dd04&file=Dropdown.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".secret[_v-2767dd04] {\n  position: absolute;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n  margin: -1px;\n  height: 1px;\n  width: 1px;\n  padding: 0;\n  border: 0;\n}", ""]);
	
	// exports


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <li v-if="isLi" v-el:dropdown :class="classes">
	//     <slot name="button">
	//       <a class="dropdown-toggle" role="button" :class="{disabled: disabled}" @keyup.esc="show = false">
	//         {{ text }}
	//         <span class="caret"></span>
	//       </a>
	//     </slot>
	//     <slot name="dropdown-menu">
	//       <ul v-else class="dropdown-menu">
	//         <slot></slot>
	//       </ul>
	//     </slot>
	//   </li>
	//   <div v-else v-el:dropdown :class="classes">
	//     <slot name="before"></slot>
	//     <slot name="button">
	//       <button type="button" class="btn btn-{{type}} dropdown-toggle" @keyup.esc="show = false" :disabled="disabled">
	//         {{ text }}
	//         <span class="caret"></span>
	//       </button>
	//     </slot>
	//     <slot name="dropdown-menu">
	//       <ul class="dropdown-menu">
	//         <slot></slot>
	//       </ul>
	//     </slot>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    show: {
	      twoWay: true,
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    'class': null,
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    text: {
	      type: String,
	      default: null
	    },
	    type: {
	      type: String,
	      default: 'default'
	    }
	  },
	  computed: {
	    classes: function classes() {
	      return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
	    },
	    menu: function menu() {
	      return !this.$parent || this.$parent.navbar;
	    },
	    submenu: function submenu() {
	      return this.$parent && (this.$parent.menu || this.$parent.submenu);
	    },
	    slots: function slots() {
	      return this._slotContents;
	    }
	  },
	  methods: {
	    blur: function blur() {
	      var _this = this;
	
	      this.unblur();
	      this._hide = setTimeout(function () {
	        _this._hide = null;
	        _this.show = false;
	      }, 100);
	    },
	    unblur: function unblur() {
	      if (this._hide) {
	        clearTimeout(this._hide);
	        this._hide = null;
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var $el = (0, _NodeList2.default)(this.$els.dropdown);
	    $el.onBlur(function (e) {
	      _this2.show = false;
	    });
	    $el.findChildren('a,button.dropdown-toggle').on('click', function (e) {
	      e.preventDefault();
	      if (_this2.disabled) {
	        return false;
	      }
	      _this2.show = !_this2.show;
	      return false;
	    });
	    $el.findChildren('ul').on('click', 'li>a', function (e) {
	      _this2.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var $el = (0, _NodeList2.default)(this.$els.dropdown);
	    $el.offBlur();
	    $el.findChildren('a,button').off();
	    $el.findChildren('ul').off();
	  }
	};
	// </script>
	
	// <style scoped>
	// .secret {
	//   position: absolute;
	//   clip: rect(0 0 0 0);
	//   overflow: hidden;
	//   margin: -1px;
	//   height: 1px;
	//   width: 1px;
	//   padding: 0;
	//   border: 0;
	// }
	// </style>

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<li v-if=\"isLi\" v-el:dropdown=\"\" :class=\"classes\" _v-2767dd04=\"\">\n    <slot name=\"button\" _v-2767dd04=\"\">\n      <a class=\"dropdown-toggle\" role=\"button\" :class=\"{disabled: disabled}\" @keyup.esc=\"show = false\" _v-2767dd04=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-2767dd04=\"\"></span>\n      </a>\n    </slot>\n    <slot name=\"dropdown-menu\" _v-2767dd04=\"\">\n      <ul v-else=\"\" class=\"dropdown-menu\" _v-2767dd04=\"\">\n        <slot _v-2767dd04=\"\"></slot>\n      </ul>\n    </slot>\n  </li>\n  <div v-else=\"\" v-el:dropdown=\"\" :class=\"classes\" _v-2767dd04=\"\">\n    <slot name=\"before\" _v-2767dd04=\"\"></slot>\n    <slot name=\"button\" _v-2767dd04=\"\">\n      <button type=\"button\" class=\"btn btn-{{type}} dropdown-toggle\" @keyup.esc=\"show = false\" :disabled=\"disabled\" _v-2767dd04=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-2767dd04=\"\"></span>\n      </button>\n    </slot>\n    <slot name=\"dropdown-menu\" _v-2767dd04=\"\">\n      <ul class=\"dropdown-menu\" _v-2767dd04=\"\">\n        <slot _v-2767dd04=\"\"></slot>\n      </ul>\n    </slot>\n  </div>";

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"dropdown\" name=\"Dropdown\">\n    <div class=\"bs-example\">\n      <dropdown>\n        <button slot=\"button\" type=\"button\" class=\"btn btn-default dropdown-toggle\">\n          Action\n          <span class=\"caret\"></span>\n        </button>\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#dropdown\">Action</a></li>\n          <li><a href=\"#dropdown\">Another action</a></li>\n          <li><a href=\"#dropdown\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#dropdown\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown text=\"Action\" type=\"primary\">\n        <li><a href=\"#dropdown\">Action</a></li>\n        <li><a href=\"#dropdown\">Another action</a></li>\n        <li><a href=\"#dropdown\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#dropdown\">Separated link</a></li>\n      </dropdown>\n      <dropdown>\n        <button slot=\"button\" type=\"button\" class=\"btn btn-success dropdown-toggle\">\n          Action <span class=\"caret\"></span>\n        </button>\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#dropdown\">Action</a></li>\n          <li><a href=\"#dropdown\">Another action</a></li>\n          <li><a href=\"#dropdown\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#dropdown\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown text=\"Disabled\" type=\"warning\" disabled>\n        <li><a href=\"#dropdown\">Action</a></li>\n      </dropdown>\n      <dropdown type=\"info\">\n        <button slot=\"before\" type=\"button\" class=\"btn btn-info\">Segmented</button>\n        <li><a href=\"#dropdown\">Action</a></li>\n      </dropdown>\n      <div class=\"btn-group btn-group-justified\">\n        <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Left</a>\n        <dropdown>\n          <a slot=\"button\" href=\"#dropdown\" class=\"btn btn-default\">\n            Dropdown <span class=\"caret\"></span>\n          </a>\n          <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n            <li><a href=\"#dropdown\">Action</a></li>\n            <li><a href=\"#dropdown\">Another action</a></li>\n            <li><a href=\"#dropdown\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#dropdown\">Separated link</a></li>\n          </ul>\n        </dropdown>\n        <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Right</a>\n      </div>\n    </div>\n    <doc-code>\n      <dropdown text=\"Action\" type=\"primary\">\n        <li><a href=\"#dropdown\">Action</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#dropdown\">Separated link</a></li>\n      </dropdown>\n      // For segmented dropdown, ignore text and add a \"before\" slot\n      <dropdown type=\"info\">\n        <button slot=\"before\" type=\"button\" class=\"btn btn-info\">Segmented</button>\n        <li><a href=\"#dropdown\">...</a></li>\n      </dropdown>\n      // In a button group\n      <div class=\"btn-group btn-group-justified\">\n        <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Left</a>\n        <dropdown>...</dropdown>\n        <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Right</a>\n      </div>\n      // With slots you can handle some elements as native bootstrap\n      <dropdown>\n        <button slot=\"button\" type=\"button\" class=\"btn btn-default dropdown-toggle\">\n          Action\n          <span class=\"caret\"></span>\n        </button>\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#dropdown\">Action</a></li>\n          <li><a href=\"#dropdown\">Another action</a></li>\n          <li><a href=\"#dropdown\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#dropdown\">Separated link</a></li>\n        </ul>\n      </dropdown>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>show</p>\n        <p><code>Boolean</code></p>\n        <p></p>\n        <p>Whether show the component.</p>\n      </div>\n      <div>\n        <p>class</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>classes to change the style.</p>\n      </div>\n      <div>\n        <p>disabled</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>text</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Dropdown button text.</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of <code>default</code>\n        <code>primary</code>\n        <code>danger</code>\n        <code>info</code>\n        <code>warning</code>\n        <code>success</code></p>\n        <p><code>default</code></p>\n        <p></p>\n      </div>\n    </doc-table>\n    <h2>Usage</h2>\n    <p>Just like the examples. Can use it as the <a target=\"_blank\" href=\"http://getbootstrap.com/javascript/#dropdowns\">original Bootstrap way</a>.</p>\n  </doc-section>";

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(253)
	module.exports = __webpack_require__(255)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(272)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./formGroupDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./formGroupDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./formGroupDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./formGroupDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./formGroupDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(254);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-743a94c5&file=formGroupDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./formGroupDocs.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-743a94c5&file=formGroupDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./formGroupDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}", ""]);
	
	// exports


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _FormGroup = __webpack_require__(256);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _Input = __webpack_require__(259);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Tab = __webpack_require__(264);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabset = __webpack_require__(267);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Select = __webpack_require__(156);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="form-group" name="Form Group">
	//     <p>This is not a style component, is just a global validation manager.</p>
	//     <p>If you need to evaluate if a group of elements are all valids, you can handle easier with this component.</p>
	//     <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>
	//     <div class="bs-example">
	//       <div class="row">
	//         <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
	//           <p><pre>Valid user data : {{valid.user}}</pre></p>
	//         </div>
	//         <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
	//           <p><pre>Valid direction : {{valid.direction}}</pre></p>
	//         </div>
	//         <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
	//           <p><pre>All valid : {{valid.all}}</pre></p>
	//         </div>
	//       </div>
	//       <div class="row">
	//         <form-group :valid.sync="valid.all">
	//           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	//             <tabs :active.sync="active">
	//               <tab header="User">
	//                 <form-group :valid.sync="valid.user">
	//                   <bs-input label="User Name" required></bs-input>
	//                   <bs-input label="Email" type="email" required></bs-input>
	//                 </form-group>
	//                 <button type="button" class="btn btn-primary" :disabled="!valid.user" @click="active = 1">Continue</button>
	//               </tab>
	//               <tab header="Direction" :disabled="!valid.user">
	//                 <form-group :valid.sync="valid.direction">
	//                   <div class="form-group">
	//                     <label class="control-label">Continent</label>
	//                     <v-select required justified :options="['America','Europe']" clear-button></v-select>
	//                   </div>
	//                   <bs-input label="City" type="text" required></bs-input>
	//                 </form-group>
	//                 <button type="button" class="btn btn-primary" :disabled="!valid.all">Done!!</button>
	//               </tab>
	//             </tabs>
	//           </div>
	//         </form-group>
	//       </div>
	//     </div>
	//     <doc-code language="markup">
	//         <form-group :valid.sync="valid.all">
	//           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	//             <tabs :active.sync="active">
	//               <tab header="User">
	//                 <form-group :valid.sync="valid.user">
	//                   <bs-input label="User Name" required></bs-input>
	//                   <bs-input label="Email" type="email" required></bs-input>
	//                 </form-group>
	//                 <button type="button" class="btn btn-primary" :disabled="!valid.user" @click="active = 1">Continue</button>
	//               </tab>
	//               <tab header="Direction" :disabled="!valid.user">
	//                 <form-group :valid.sync="valid.direction">
	//                   <div class="form-group">
	//                     <label class="control-label">Continent</label>
	//                     <v-select required justified :options="['America','Europe']" clear-button></v-select>
	//                   </div>
	//                   <bs-input label="City" type="text" required></bs-input>
	//                 </form-group>
	//                 <button type="button" class="btn btn-primary" :disabled="!valid.all">Done!!</button>
	//               </tab>
	//             </tabs>
	//           </div>
	//         </form-group>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>valid</p>
	//         <p><code>Boolean</code></p>
	//         <p></p>
	//         <p>Return if all the internal form elements (<code>select</code>, <code>input</code>) are valids.</p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    formGroup: _FormGroup2.default,
	    bsInput: _Input2.default,
	    tab: _Tab2.default,
	    tabs: _Tabset2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      active: 0,
	      valid: {}
	    };
	  },
	
	  methods: {
	    show: function show(value) {
	      return value instanceof Array ? value.join(', ') : value;
	    }
	  }
	};
	// </script>
	
	// <style>
	// .checkbox>label:not(:first-child) {
	//   margin-left: 15px;
	// }
	// </style>

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(258)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./FormGroup.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./FormGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <slot></slot>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    valid: {
	      twoWay: true,
	      default: null
	    },
	    enterSubmit: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    icon: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    }
	  },
	  data: function data() {
	    return {
	      children: [],
	      timeout: null
	    };
	  },
	
	  watch: {
	    valid: function valid(val, old) {
	      if (val === old) {
	        return;
	      }
	      this._parent && this._parent.validate();
	    }
	  },
	  methods: {
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    validate: function validate() {
	      var valid = true;
	      this.children.some(function (el) {
	        var v = el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
	        if (!v) valid = false;
	        return !valid;
	      });
	      this.valid = valid;
	      return valid === true;
	    }
	  },
	  created: function created() {
	    this._formGroup = true;
	    var parent = this.$parent;
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  ready: function ready() {
	    this.validate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) this._parent.children.$remove(this);
	  }
	};
	// </script>

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<slot></slot>";

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(260)
	module.exports = __webpack_require__(262)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(263)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Input.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Input.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-9e26b732&file=Input.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Input.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Input.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-9e26b732&file=Input.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Input.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(261);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-9e26b732&file=Input.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Input.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-9e26b732&file=Input.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".form-group[_v-9e26b732] {\n  position: relative;\n}\nlabel~.close[_v-9e26b732] {\n  top: 25px;\n}\n.input-group>.icon[_v-9e26b732] {\n  position: relative;\n  display: table-cell;\n  width:0;\n  z-index: 3;\n}\n.close[_v-9e26b732] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.has-feedback .close[_v-9e26b732] {\n  right: 20px;\n}", ""]);
	
	// exports


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="form-group" :class="{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}">
	//     <slot name="label"><label v-if="label" class="control-label" @click="focus">{{label}}</label></slot>
	//     <div v-if="slots.before||slots.after" class="input-group">
	//       <slot name="before"></slot>
	//       <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
	//         :cols="cols"
	//         :rows="rows"
	//         :name="name"
	//         :title="attr(title)"
	//         :readonly="readonly"
	//         :required="required"
	//         :disabled="disabled"
	//         :maxlength="maxlength"
	//         :placeholder="placeholder"
	//         @blur="onblur" @focus="onfocus"
	//       ></textarea>
	//       <input v-else class="form-control" v-el:input v-model="value"
	//         :name="name"
	//         :max="attr(max)"
	//         :min="attr(min)"
	//         :step="step"
	//         :type="type"
	//         :title="attr(title)"
	//         :readonly="readonly"
	//         :required="required"
	//         :disabled="disabled"
	//         :maxlength="maxlength"
	//         :placeholder="placeholder"
	//         @keyup.enter="enterSubmit&&submit()"
	//         @blur="onblur" @focus="onfocus"
	//       />
	//       <div v-if="showClear && value" :class="{icon:icon}">
	//         <span class="close" @click="value = ''">&times;</span>
	//       </div>
	//       <div v-if="icon" class="icon">
	//         <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
	//       </div>
	//       <slot name="after"></slot>
	//     </div>
	//     <template v-else>
	//       <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
	//         :cols="cols"
	//         :rows="rows"
	//         :name="name"
	//         :title="attr(title)"
	//         :readonly="readonly"
	//         :required="required"
	//         :disabled="disabled"
	//         :maxlength="maxlength"
	//         :placeholder="placeholder"
	//         @blur="onblur" @focus="onfocus"
	//       ></textarea>
	//       <input v-else class="form-control" v-el:input v-model="value"
	//         :name="name"
	//         :max="attr(max)"
	//         :min="attr(min)"
	//         :step="step"
	//         :type="type"
	//         :title="attr(title)"
	//         :readonly="readonly"
	//         :required="required"
	//         :disabled="disabled"
	//         :maxlength="maxlength"
	//         :placeholder="placeholder"
	//         @keyup.enter="enterSubmit&&submit()"
	//         @blur="onblur" @focus="onfocus"
	//       />
	//       <span v-if="showClear && value" class="close" @click="value = ''">&times;</span>
	//       <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
	//     </template>
	//     <div v-if="showHelp" class="help-block" @click="focus">{{help}}</div>
	//     <div v-if="showError" class="help-block with-errors" @click="focus">{{errorText}}</div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      twoWay: true,
	      default: null
	    },
	    match: {
	      type: String,
	      default: null
	    },
	    clearButton: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    enterSubmit: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    error: {
	      type: String,
	      default: null
	    },
	    help: {
	      type: String,
	      default: null
	    },
	    hideHelp: { // hide when have error
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    icon: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    label: {
	      type: String,
	      default: null
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    mask: null,
	    maskDelay: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 100
	    },
	    max: {
	      type: String,
	      coerce: _utils.coerce.string,
	      default: null
	    },
	    maxlength: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: null
	    },
	    min: {
	      type: String,
	      coerce: _utils.coerce.string,
	      default: null
	    },
	    minlength: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    pattern: {
	      coerce: _utils.coerce.pattern,
	      default: null
	    },
	    placeholder: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    required: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    rows: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 3
	    },
	    step: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: null
	    },
	    type: {
	      type: String,
	      default: 'text'
	    },
	    validationDelay: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 250
	    }
	  },
	  data: function data() {
	    return {
	      valid: null,
	      timeout: null
	    };
	  },
	
	  computed: {
	    canValidate: function canValidate() {
	      return !this.disabled && !this.readonly && (this.required || this.pattern || this.nativeValidate || this.match !== null);
	    },
	    errorText: function errorText() {
	      var value = this.value;
	      var error = [this.error];
	      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
	      if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
	      return error.join(' ');
	    },
	    input: function input() {
	      return this.$els.input;
	    },
	    nativeValidate: function nativeValidate() {
	      return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max);
	    },
	    showClear: function showClear() {
	      // Disable the clear-button on Edge if is enabled. Edge has a native clear button.
	      return (/\bEdge\//.test(window.navigator.userAgent) ? false : this.clearButton
	      );
	    },
	    showError: function showError() {
	      return this.error && this.valid === false;
	    },
	    showHelp: function showHelp() {
	      return this.help && (!this.showError || !this.hideHelp);
	    },
	    slots: function slots() {
	      return this._slotContents || {};
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    title: function title() {
	      return this.errorText || this.help || '';
	    }
	  },
	  watch: {
	    match: function match(val) {
	      this.eval();
	    },
	    valid: function valid(val, old) {
	      if (val !== old) {
	        this._parent && this._parent.validate();
	      }
	    },
	    value: function value(val, old) {
	      var _this = this;
	
	      if (val !== old) {
	        if (this.mask instanceof Function) {
	          val = this.mask(val || '');
	          if (this.value !== val) {
	            if (this._timeout.mask) clearTimeout(this._timeout.mask);
	            this._timeout.mask = setTimeout(function () {
	              _this.value = val;
	              _this.$els.input.value = val;
	            }, this.maskDelay);
	          }
	        }
	        this.eval();
	      }
	    }
	  },
	  methods: {
	    attr: function attr(value) {
	      return ~['', null, undefined].indexOf(value) || value instanceof Function ? undefined : value;
	    },
	    focus: function focus() {
	      this.input.focus();
	    },
	    eval: function _eval() {
	      var _this2 = this;
	
	      if (this._timeout.eval) clearTimeout(this._timeout.eval);
	      if (!this.canValidate) {
	        this.valid = true;
	      } else {
	        this._timeout.eval = setTimeout(function () {
	          _this2.valid = _this2.validate();
	          _this2._timeout.eval = null;
	        }, this.validationDelay);
	      }
	    },
	    onblur: function onblur(e) {
	      if (this.canValidate) {
	        this.valid = this.validate();
	      }
	      this.$emit('blur', e);
	    },
	    onfocus: function onfocus(e) {
	      this.$emit('focus', e);
	    },
	    submit: function submit() {
	      if (this.$parent._formGroup) {
	        return this.$parent.validate();
	      }
	      if (this.input.form) {
	        var invalids = (0, _NodeList2.default)('.form-group.validate:not(.has-success)', this.input.form);
	        if (invalids.length) {
	          invalids.find('input,textarea,select')[0].focus();
	        } else {
	          this.input.form.submit();
	        }
	      }
	    },
	    validate: function validate() {
	      if (!this.canValidate) {
	        return true;
	      }
	      var value = (this.value || '').trim();
	      if (!value) {
	        return !this.required;
	      }
	      if (this.match !== null) {
	        return this.match === value;
	      }
	      if (value.length < this.minlength) {
	        return false;
	      }
	      if (this.nativeValidate && !this.input.checkValidity()) {
	        return false;
	      }
	      if (this.pattern) {
	        return this.pattern instanceof Function ? this.pattern(this.value) : this.pattern.test(this.value);
	      }
	      return true;
	    }
	  },
	  created: function created() {
	    this._input = true;
	    this._timeout = {};
	    var parent = this.$parent;
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      this._parent = parent;
	    }
	  },
	  ready: function ready() {
	    var _this3 = this;
	
	    this._parent && this._parent.children.push(this);
	    (0, _NodeList2.default)(this.input).on('focus', function (e) {
	      return _this3.$emit('focus', e);
	    }).on('blur', function (e) {
	      if (_this3.canValidate) {
	        _this3.valid = _this3.validate();
	      }
	      _this3.$emit('blur', e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this._parent && this._parent.children.$remove(this);
	    (0, _NodeList2.default)(this.input).off();
	  }
	};
	// </script>
	
	// <style scoped>
	// .form-group {
	//   position: relative;
	// }
	// label~.close {
	//   top: 25px;
	// }
	// .input-group>.icon {
	//   position: relative;
	//   display: table-cell;
	//   width:0;
	//   z-index: 3;
	// }
	// .close {
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   z-index: 2;
	//   display: block;
	//   width: 34px;
	//   height: 34px;
	//   line-height: 34px;
	//   text-align: center;
	// }
	// .has-feedback .close {
	//   right: 20px;
	// }
	// </style>

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" :class=\"{validate:canValidate,'has-feedback':icon,'has-error':canValidate&amp;&amp;valid===false,'has-success':canValidate&amp;&amp;valid}\" _v-9e26b732=\"\">\n    <slot name=\"label\" _v-9e26b732=\"\"><label v-if=\"label\" class=\"control-label\" @click=\"focus\" _v-9e26b732=\"\">{{label}}</label></slot>\n    <div v-if=\"slots.before||slots.after\" class=\"input-group\" _v-9e26b732=\"\">\n      <slot name=\"before\" _v-9e26b732=\"\"></slot>\n      <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @blur=\"onblur\" @focus=\"onfocus\" _v-9e26b732=\"\"></textarea>\n      <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :max=\"attr(max)\" :min=\"attr(min)\" :step=\"step\" :type=\"type\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" @blur=\"onblur\" @focus=\"onfocus\" _v-9e26b732=\"\">\n      <div v-if=\"showClear &amp;&amp; value\" :class=\"{icon:icon}\" _v-9e26b732=\"\">\n        <span class=\"close\" @click=\"value = ''\" _v-9e26b732=\"\">×</span>\n      </div>\n      <div v-if=\"icon\" class=\"icon\" _v-9e26b732=\"\">\n        <span v-if=\"icon&amp;&amp;valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\" _v-9e26b732=\"\"></span>\n      </div>\n      <slot name=\"after\" _v-9e26b732=\"\"></slot>\n    </div>\n    <template v-else=\"\" _v-9e26b732=\"\">\n      <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @blur=\"onblur\" @focus=\"onfocus\" _v-9e26b732=\"\"></textarea>\n      <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :max=\"attr(max)\" :min=\"attr(min)\" :step=\"step\" :type=\"type\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" @blur=\"onblur\" @focus=\"onfocus\" _v-9e26b732=\"\">\n      <span v-if=\"showClear &amp;&amp; value\" class=\"close\" @click=\"value = ''\" _v-9e26b732=\"\">×</span>\n      <span v-if=\"icon&amp;&amp;valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\" _v-9e26b732=\"\"></span>\n    </template>\n    <div v-if=\"showHelp\" class=\"help-block\" @click=\"focus\" _v-9e26b732=\"\">{{help}}</div>\n    <div v-if=\"showError\" class=\"help-block with-errors\" @click=\"focus\" _v-9e26b732=\"\">{{errorText}}</div>\n  </div>";

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(265)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(266)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this._tabset.show === this;
	    },
	    index: function index() {
	      return this._tabset.tabs.indexOf(this);
	    },
	    show: function show() {
	      return this._tabset && this._tabset.show === this;
	    },
	    transition: function transition() {
	      return this._tabset ? this._tabset.effect : null;
	    }
	  },
	  created: function created() {
	    this._ingroup = this.$parent && this.$parent._tabgroup;
	    var tabset = this;
	    while (tabset && tabset._tabset !== true && tabset.$parent) {
	      tabset = tabset.$parent;
	    }
	    if (!tabset._tabset) {
	      this._tabset = {};
	      console.warn('Warning: "tab" depend on "tabset" to work properly.');
	    } else {
	      tabset.tabs.push(this);
	      if (!this._ingroup) {
	        tabset.headers.push(this);
	      } else {
	        if (!~tabset.headers.indexOf(this.$parent)) {
	          tabset.headers.push(this.$parent);
	        }
	      }
	      this._tabset = tabset;
	    }
	    if (this._ingroup) {
	      this.$parent.tabs.push(this);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._tabset.active === this.index) {
	      this._tabset.active = 0;
	    }
	    if (this._ingroup) {
	      this.$parent.tabs.$remove(this);
	    }
	    this._tabset.tabs.$remove(this);
	  }
	};
	// </script>
	// <template>
	//   <div role="tabpanel" class="tab-pane active" v-show="show"
	//     :class="{hide:!show}"
	//     :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = "<div role=\"tabpanel\" class=\"tab-pane active\" v-show=\"show\"\n    :class=\"{hide:!show}\"\n    :transition=\"transition\"\n  >\n    <slot></slot>\n  </div>";

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(268)
	module.exports = __webpack_require__(270)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(271)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-365a3e60&file=Tabset.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-365a3e60&file=Tabset.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-365a3e60&file=Tabset.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-365a3e60&file=Tabset.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-tabs[_v-365a3e60] {\n  margin-bottom: 15px;\n}", ""]);
	
	// exports


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var _Dropdown = __webpack_require__(246);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div>
	//     <!-- Nav tabs -->
	//     <ul class="nav nav-{{navStyle}}" role="tablist">
	//       <template v-for="t in headers">
	//         <li v-if="!t._tabgroup" :class="{active:t.active, disabled:t.disabled}" @click.prevent="select(t)">
	//           <a href="#"><slot name="header" v-html="t.header"></slot></a>
	//         </li>
	//         <dropdown v-else :text="t.header" :class="{active:t.active}" :disabled="t.disabled">
	//           <li v-for="tab in t.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
	//         </dropdown>
	//       </template>
	//     </ul>
	//     <div class="tab-content" v-el:tab-content>
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  },
	  props: {
	    navStyle: {
	      type: String,
	      default: 'tabs'
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    active: {
	      twoWay: true,
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      show: null,
	      headers: [],
	      tabs: []
	    };
	  },
	  created: function created() {
	    this._tabset = true;
	  },
	
	  watch: {
	    active: function active(val) {
	      this.show = this.tabs[val];
	    }
	  },
	  ready: function ready() {
	    this.show = this.tabs[this.active];
	  },
	
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.active = tab.index;
	      }
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	// .nav-tabs {
	//   margin-bottom: 15px;
	// }
	// </style>

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = "<div _v-365a3e60=\"\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-{{navStyle}}\" role=\"tablist\" _v-365a3e60=\"\">\n      <template v-for=\"t in headers\" _v-365a3e60=\"\">\n        <li v-if=\"!t._tabgroup\" :class=\"{active:t.active, disabled:t.disabled}\" @click.prevent=\"select(t)\" _v-365a3e60=\"\">\n          <a href=\"#\" _v-365a3e60=\"\"><slot name=\"header\" v-html=\"t.header\" _v-365a3e60=\"\"></slot></a>\n        </li>\n        <dropdown v-else=\"\" :text=\"t.header\" :class=\"{active:t.active}\" :disabled=\"t.disabled\" _v-365a3e60=\"\">\n          <li v-for=\"tab in t.tabs\" :class=\"{disabled:tab.disabled}\" _v-365a3e60=\"\"><a href=\"#\" @click.prevent=\"select(tab)\" _v-365a3e60=\"\">{{tab.header}}</a></li>\n        </dropdown>\n      </template>\n    </ul>\n    <div class=\"tab-content\" v-el:tab-content=\"\" _v-365a3e60=\"\">\n      <slot _v-365a3e60=\"\"></slot>\n    </div>\n  </div>";

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"form-group\" name=\"Form Group\">\n    <p>This is not a style component, is just a global validation manager.</p>\n    <p>If you need to evaluate if a group of elements are all valids, you can handle easier with this component.</p>\n    <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>\n    <div class=\"bs-example\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>Valid user data : {{valid.user}}</pre></p>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>Valid direction : {{valid.direction}}</pre></p>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>All valid : {{valid.all}}</pre></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <form-group :valid.sync=\"valid.all\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <tabs :active.sync=\"active\">\n              <tab header=\"User\">\n                <form-group :valid.sync=\"valid.user\">\n                  <bs-input label=\"User Name\" required></bs-input>\n                  <bs-input label=\"Email\" type=\"email\" required></bs-input>\n                </form-group>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n              </tab>\n              <tab header=\"Direction\" :disabled=\"!valid.user\">\n                <form-group :valid.sync=\"valid.direction\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Continent</label>\n                    <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                  </div>\n                  <bs-input label=\"City\" type=\"text\" required></bs-input>\n                </form-group>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n              </tab>\n            </tabs>\n          </div>\n        </form-group>\n      </div>\n    </div>\n    <doc-code language=\"markup\">\n        <form-group :valid.sync=\"valid.all\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <tabs :active.sync=\"active\">\n              <tab header=\"User\">\n                <form-group :valid.sync=\"valid.user\">\n                  <bs-input label=\"User Name\" required></bs-input>\n                  <bs-input label=\"Email\" type=\"email\" required></bs-input>\n                </form-group>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n              </tab>\n              <tab header=\"Direction\" :disabled=\"!valid.user\">\n                <form-group :valid.sync=\"valid.direction\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Continent</label>\n                    <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                  </div>\n                  <bs-input label=\"City\" type=\"text\" required></bs-input>\n                </form-group>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n              </tab>\n            </tabs>\n          </div>\n        </form-group>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>valid</p>\n        <p><code>Boolean</code></p>\n        <p></p>\n        <p>Return if all the internal form elements (<code>select</code>, <code>input</code>) are valids.</p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(274)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(275)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./inputDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./inputDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./inputDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./inputDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./inputDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Input = __webpack_require__(259);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _buttonGroup = __webpack_require__(208);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(144);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Dropdown = __webpack_require__(246);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    bsInput: _Input2.default,
	    buttonGroup: _buttonGroup2.default,
	    checkbox: _Checkbox2.default,
	    dropdown: _Dropdown2.default
	  },
	  data: function data() {
	    return {
	      check: {
	        clearButton: true,
	        error: true,
	        hideHelp: true,
	        icon: true,
	        label: true,
	        mask: true,
	        minlength: true,
	        placeholder: true,
	        required: true
	      },
	      event: null,
	      input: null,
	      match: null
	    };
	  },
	
	  methods: {
	    mask: function mask(value) {
	      return value.toLowerCase().replace(/^[^a-z]+/, '').replace(/[^a-z0-9]/g, '');
	    }
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="input" name="Input">
	//     <div class="bs-example text-left">
	//       <form action="." method="get" accept-charset="utf-8">
	//         <div class="row">
	//           <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//             <bs-input name="username"
	//               :disabled="check.disabled"
	//               :error="check.error && 'Insert user name'"
	//               help="Only allows lowercase letters and numbers."
	//               :enter-submit="check.enterSubmit"
	//               :icon="check.icon"
	//               :label="check.label && 'User Name'"
	//               :mask="check.mask?mask:null"
	//               :minlength="check.minlength?5:0"
	//               pattern="^[a-z][a-z0-9]+$"
	//               :placeholder="check.placeholder && 'Username can\'t start with a number.'"
	//               :readonly="check.readonly"
	//               :required="check.required"
	//               :hide-help="check.hideHelp"
	//               :clear-button="check.clearButton"
	//               :value.sync="input"
	//             ></bs-input>
	//           </div>
	//           <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//             <bs-input name="match" required type="password" :match="input" :icon="check.icon" :enter-submit="check.enterSubmit" help="Match the User Name">
	//               <label slot="label">Match value</label>
	//             </bs-input>
	//           </div>
	//         </div>
	//         <div class="row">
	//           <button-group type="primary" buttons="false">
	//             <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//               <p><checkbox :checked.sync="check.label">Label</checkbox></p>
	//               <p><checkbox :checked.sync="check.placeholder">placeholder</checkbox></p>
	//               <p><checkbox :checked.sync="check.hideHelp">hide help</checkbox></p>
	//               <p><checkbox :checked.sync="check.disabled">disabled</checkbox></p>
	//               <p><checkbox :checked.sync="check.error">error</checkbox></p>
	//               <p><checkbox :checked.sync="check.icon">icon</checkbox></p>
	//             </div>
	//             <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//               <p><checkbox :checked.sync="check.mask">mask</checkbox></p>
	//               <p><checkbox :checked.sync="check.minlength">minlength=5</checkbox></p>
	//               <p><checkbox :checked.sync="check.readonly">readonly</checkbox></p>
	//               <p><checkbox :checked.sync="check.required">required</checkbox></p>
	//               <p><checkbox :checked.sync="check.clearButton">clear button (unnecessary in Edge browser)</checkbox></p>
	//               <p><checkbox :checked.sync="check.enterSubmit">enter submit</checkbox></p>
	//             </div>
	//           </button-group>
	//         </div>
	//         <hr/>
	//         <bs-input label="Input with slots" type="text" required icon clear-button>
	//           <span slot="before" class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
	//           <span slot="after" class="input-group-addon"><span class="glyphicon glyphicon-question-sign"></span></span>
	//         </bs-input>
	//         <bs-input name="textarea" label="Textarea" type="textarea" :icon="check.icon" :enter-submit="check.enterSubmit"
	//           @focus="event = 'focused'"
	//           @blur="event = 'blured'"
	//         ></bs-input>
	//         <pre> Test event on textarea: {{event}}</pre>
	//       </form>
	//       <doc-code>
	//         <bs-input :value.sync="input"
	//           label="Username"
	//           help="Only allows lowercase letters and numbers."
	//           error="Insert username"
	//           placeholder="Username can't start with a number."
	//           pattern="^[a-z][a-z0-9]+$"
	//           :mask="mask"
	//           minlength="5"
	//           readonly
	//           required
	//           icon
	//         ></bs-input>
	//         <bs-input required label="Match value" type="password" :match="input"></bs-input>
	//         <bs-input label="Textarea" type="textarea" @focus="event = 'focused'" @blur="event = 'blured'"></bs-input>
	//       </doc-code>
	//       <doc-code language="javascript">
	//         mask: function (value) {
	//           // change to lowercase, remove up to the first letter, and then remove all other unsuported characters
	//           return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/[^a-z0-9]/g,'');
	//         }
	//       </doc-code>
	//       <h2>Input groups:</h2>
	//       <p>More details in <a href="http://getbootstrap.com/components/#input-groups">bootstrap input groups</a>.</p>
	//       <bs-input label="With dropdown and button" type="text">
	//         <dropdown slot="before" text="dropdown">
	//           <li><a href="#">option</a></li>
	//         </dropdown>
	//         <span slot="after" class="input-group-btn">
	//           <button type="button" class="btn btn-primary">Go!</button>
	//         </span>
	//       </bs-input>
	//       <doc-code>
	//         <bs-input label="With dropdown and button" type="text">
	//           <dropdown slot="before" text="dropdown">
	//             <li><a href="#">option</a></li>
	//           </dropdown>
	//           <span slot="after" class="input-group-btn">
	//             <button type="button" class="btn btn-primary">Go!</button>
	//           </span>
	//         </bs-input>
	//       </doc-code>
	//       <bs-input label="With text and icon" type="number" placeholder="Insert how much cost your house">
	//         <span slot="before" class="input-group-addon"><span class="glyphicon glyphicon-home"></span></span>
	//         <span slot="after" class="input-group-addon">$</span>
	//       </bs-input>
	//       <doc-code>
	//         <bs-input label="With text and icon" type="number" placeholder="Insert how much cost your house">
	//           <span slot="before" class="input-group-addon"><span class="glyphicon glyphicon-home"></span></span>
	//           <span slot="after" class="input-group-addon">$</span>
	//         </bs-input>
	//       </doc-code>
	//     </div>
	//     <doc-table>
	//       <div>
	//         <p>value</p>
	//         <p><code>String</code></p>
	//         <p><code>''</code></p>
	//         <p>Input value. Use <code>:value.sync="value"</code></p>
	//       </div>
	//       <div>
	//         <p>match</p>
	//         <p><code>String</code></p>
	//         <p><code>''</code></p>
	//         <p>Matching value. Both have to be the same value.</p>
	//       </div>
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>enterSubmit</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Submit when you press <code>Enter</code>. Not supported on type <code>textarea</code>.</p>
	//       </div>
	//       <div>
	//         <p>error</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Error message.</p>
	//       </div>
	//       <div>
	//         <p>help</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Help text behind the input</p>
	//       </div>
	//       <div>
	//         <p>hide-help</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Only work with help and error.<br/>Hide the help if have to show any error message.</p>
	//       </div>
	//       <div>
	//         <p>icon</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>label</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Enable input label (name).</p>
	//       </div>
	//       <div>
	//         <p>lang</p>
	//         <p><code>String</code></p>
	//         <p>Browser language</p>
	//         <p><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>
	//       </div>
	//       <div>
	//         <p>mask</p>
	//         <p><code>Function</code></p>
	//         <p><code>null</code></p>
	//         <p>Mask function that receive and edit the value.</p>
	//       </div>
	//       <div>
	//         <p>mask-delay</p>
	//         <p><code>Number</code></p>
	//         <p><code>100</code></p>
	//         <p>Delay time before apply the mask.</p>
	//       </div>
	//       <div>
	//         <p>maxlength</p>
	//         <p><code>Number</code></p>
	//         <p><code>null</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>minlength</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>name</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>pattern</p>
	//         <p><code>String</code>, <code>RegExp</code> or <code>Function</code></p>
	//         <p><code>null</code></p>
	//         <p>Validation pattern. A full <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">regular expression</a> or a function that evaluate the content and return <code>true</code> or <code>false</code>.</p>
	//       </div>
	//       <div>
	//         <p>placeholder</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>required</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p><code>text</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>validation-delay</p>
	//         <p><code>Number</code></p>
	//         <p><code>250</code></p>
	//         <p>Delay time before apply the validation.</p>
	//       </div>
	//     </doc-table>
	//     <doc-table name="Supported Native Validator" :headers="['Name','Description']">
	//       <div>
	//         <p>type</p>
	//         <p>Use native validation with <code>url</code> and <code>email</code>.</p>
	//       </div>
	//       <div>
	//         <p>min&nbsp;/&nbsp;max&nbsp;/&nbsp;step</p>
	//         <p>That attributes handle the values supported.
	//           Work with the following input types: <code>number</code>, <code>range</code>, <code>date</code>, <code>datetime-local</code>, <code>month</code>, <code>time</code> and <code>week</code>.</p>
	//       </div>
	//     </doc-table>
	//     That validations only work in browsers that support <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation" target="_blank">HTML5 form validations (all modern browsers support it).</a>
	//   </doc-section>
	// </template>
	
	// <script>

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"input\" name=\"Input\">\n    <div class=\"bs-example text-left\">\n      <form action=\".\" method=\"get\" accept-charset=\"utf-8\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n            <bs-input name=\"username\"\n              :disabled=\"check.disabled\"\n              :error=\"check.error && 'Insert user name'\"\n              help=\"Only allows lowercase letters and numbers.\"\n              :enter-submit=\"check.enterSubmit\"\n              :icon=\"check.icon\"\n              :label=\"check.label && 'User Name'\"\n              :mask=\"check.mask?mask:null\"\n              :minlength=\"check.minlength?5:0\"\n              pattern=\"^[a-z][a-z0-9]+$\"\n              :placeholder=\"check.placeholder && 'Username can\\'t start with a number.'\"\n              :readonly=\"check.readonly\"\n              :required=\"check.required\"\n              :hide-help=\"check.hideHelp\"\n              :clear-button=\"check.clearButton\"\n              :value.sync=\"input\"\n            ></bs-input>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n            <bs-input name=\"match\" required type=\"password\" :match=\"input\" :icon=\"check.icon\" :enter-submit=\"check.enterSubmit\" help=\"Match the User Name\">\n              <label slot=\"label\">Match value</label>\n            </bs-input>\n          </div>\n        </div>\n        <div class=\"row\">\n          <button-group type=\"primary\" buttons=\"false\">\n            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n              <p><checkbox :checked.sync=\"check.label\">Label</checkbox></p>\n              <p><checkbox :checked.sync=\"check.placeholder\">placeholder</checkbox></p>\n              <p><checkbox :checked.sync=\"check.hideHelp\">hide help</checkbox></p>\n              <p><checkbox :checked.sync=\"check.disabled\">disabled</checkbox></p>\n              <p><checkbox :checked.sync=\"check.error\">error</checkbox></p>\n              <p><checkbox :checked.sync=\"check.icon\">icon</checkbox></p>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n              <p><checkbox :checked.sync=\"check.mask\">mask</checkbox></p>\n              <p><checkbox :checked.sync=\"check.minlength\">minlength=5</checkbox></p>\n              <p><checkbox :checked.sync=\"check.readonly\">readonly</checkbox></p>\n              <p><checkbox :checked.sync=\"check.required\">required</checkbox></p>\n              <p><checkbox :checked.sync=\"check.clearButton\">clear button (unnecessary in Edge browser)</checkbox></p>\n              <p><checkbox :checked.sync=\"check.enterSubmit\">enter submit</checkbox></p>\n            </div>\n          </button-group>\n        </div>\n        <hr/>\n        <bs-input label=\"Input with slots\" type=\"text\" required icon clear-button>\n          <span slot=\"before\" class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n          <span slot=\"after\" class=\"input-group-addon\"><span class=\"glyphicon glyphicon-question-sign\"></span></span>\n        </bs-input>\n        <bs-input name=\"textarea\" label=\"Textarea\" type=\"textarea\" :icon=\"check.icon\" :enter-submit=\"check.enterSubmit\"\n          @focus=\"event = 'focused'\"\n          @blur=\"event = 'blured'\"\n        ></bs-input>\n        <pre> Test event on textarea: {{event}}</pre>\n      </form>\n      <doc-code>\n        <bs-input :value.sync=\"input\"\n          label=\"Username\"\n          help=\"Only allows lowercase letters and numbers.\"\n          error=\"Insert username\"\n          placeholder=\"Username can't start with a number.\"\n          pattern=\"^[a-z][a-z0-9]+$\"\n          :mask=\"mask\"\n          minlength=\"5\"\n          readonly\n          required\n          icon\n        ></bs-input>\n        <bs-input required label=\"Match value\" type=\"password\" :match=\"input\"></bs-input>\n        <bs-input label=\"Textarea\" type=\"textarea\" @focus=\"event = 'focused'\" @blur=\"event = 'blured'\"></bs-input>\n      </doc-code>\n      <doc-code language=\"javascript\">\n        mask: function (value) {\n          // change to lowercase, remove up to the first letter, and then remove all other unsuported characters\n          return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/[^a-z0-9]/g,'');\n        }\n      </doc-code>\n      <h2>Input groups:</h2>\n      <p>More details in <a href=\"http://getbootstrap.com/components/#input-groups\">bootstrap input groups</a>.</p>\n      <bs-input label=\"With dropdown and button\" type=\"text\">\n        <dropdown slot=\"before\" text=\"dropdown\">\n          <li><a href=\"#\">option</a></li>\n        </dropdown>\n        <span slot=\"after\" class=\"input-group-btn\">\n          <button type=\"button\" class=\"btn btn-primary\">Go!</button>\n        </span>\n      </bs-input>\n      <doc-code>\n        <bs-input label=\"With dropdown and button\" type=\"text\">\n          <dropdown slot=\"before\" text=\"dropdown\">\n            <li><a href=\"#\">option</a></li>\n          </dropdown>\n          <span slot=\"after\" class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-primary\">Go!</button>\n          </span>\n        </bs-input>\n      </doc-code>\n      <bs-input label=\"With text and icon\" type=\"number\" placeholder=\"Insert how much cost your house\">\n        <span slot=\"before\" class=\"input-group-addon\"><span class=\"glyphicon glyphicon-home\"></span></span>\n        <span slot=\"after\" class=\"input-group-addon\">$</span>\n      </bs-input>\n      <doc-code>\n        <bs-input label=\"With text and icon\" type=\"number\" placeholder=\"Insert how much cost your house\">\n          <span slot=\"before\" class=\"input-group-addon\"><span class=\"glyphicon glyphicon-home\"></span></span>\n          <span slot=\"after\" class=\"input-group-addon\">$</span>\n        </bs-input>\n      </doc-code>\n    </div>\n    <doc-table>\n      <div>\n        <p>value</p>\n        <p><code>String</code></p>\n        <p><code>''</code></p>\n        <p>Input value. Use <code>:value.sync=\"value\"</code></p>\n      </div>\n      <div>\n        <p>match</p>\n        <p><code>String</code></p>\n        <p><code>''</code></p>\n        <p>Matching value. Both have to be the same value.</p>\n      </div>\n      <div>\n        <p>disabled</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>enterSubmit</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Submit when you press <code>Enter</code>. Not supported on type <code>textarea</code>.</p>\n      </div>\n      <div>\n        <p>error</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>Error message.</p>\n      </div>\n      <div>\n        <p>help</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>Help text behind the input</p>\n      </div>\n      <div>\n        <p>hide-help</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Only work with help and error.<br/>Hide the help if have to show any error message.</p>\n      </div>\n      <div>\n        <p>icon</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>label</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>Enable input label (name).</p>\n      </div>\n      <div>\n        <p>lang</p>\n        <p><code>String</code></p>\n        <p>Browser language</p>\n        <p><abbr title=\"ISO 639-1 code\"><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>\n      </div>\n      <div>\n        <p>mask</p>\n        <p><code>Function</code></p>\n        <p><code>null</code></p>\n        <p>Mask function that receive and edit the value.</p>\n      </div>\n      <div>\n        <p>mask-delay</p>\n        <p><code>Number</code></p>\n        <p><code>100</code></p>\n        <p>Delay time before apply the mask.</p>\n      </div>\n      <div>\n        <p>maxlength</p>\n        <p><code>Number</code></p>\n        <p><code>null</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>minlength</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>name</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>pattern</p>\n        <p><code>String</code>, <code>RegExp</code> or <code>Function</code></p>\n        <p><code>null</code></p>\n        <p>Validation pattern. A full <a href=\"https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions\" target=\"_blank\">regular expression</a> or a function that evaluate the content and return <code>true</code> or <code>false</code>.</p>\n      </div>\n      <div>\n        <p>placeholder</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>required</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code></p>\n        <p><code>text</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>validation-delay</p>\n        <p><code>Number</code></p>\n        <p><code>250</code></p>\n        <p>Delay time before apply the validation.</p>\n      </div>\n    </doc-table>\n    <doc-table name=\"Supported Native Validator\" :headers=\"['Name','Description']\">\n      <div>\n        <p>type</p>\n        <p>Use native validation with <code>url</code> and <code>email</code>.</p>\n      </div>\n      <div>\n        <p>min&nbsp;/&nbsp;max&nbsp;/&nbsp;step</p>\n        <p>That attributes handle the values supported.\n          Work with the following input types: <code>number</code>, <code>range</code>, <code>date</code>, <code>datetime-local</code>, <code>month</code>, <code>time</code> and <code>week</code>.</p>\n      </div>\n    </doc-table>\n    That validations only work in browsers that support <a href=\"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation\" target=\"_blank\">HTML5 form validations (all modern browsers support it).</a>\n  </doc-section>";

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(277)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(287)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="modal" name="Modal">
	//     <div class="bs-example">
	//       <button class="btn btn-default" @click="showModal = true">Show modal</button>
	//       <modal title="Modal title" :show.sync="showModal">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
	//       <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
	//       <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
	//       <modal :show.sync="showCustomModal" effect="fade" width="50%">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//         <div slot="modal-footer" class="modal-footer">
	//           <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
	//       <modal title="Large Modal" :show.sync="largeModal" large>
	//         <div slot="modal-body" class="modal-body">
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//         </div>
	//       </modal>
	//       <button class="btn btn-danger" @click="smallModal = true">Small modal</button>
	//       <modal title="Small Modal" :show.sync="smallModal" small>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat.
	//         </div>
	//       </modal>
	//     </div>
	//     <doc-code language="markup">
	//       <modal :show.sync="...">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal title</h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	
	//       <modal title="Fade Modal" :show.sync="..." effect="fade" width="800">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	
	//       <modal title="Zoom Modal" :show.sync="..." effect="zoom" width="400">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	
	//       <modal :show.sync="showCustomModal" effect="fade" width="400">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">
	//             <i>Custom</i> <code>Modal</code> <b>Title</b>
	//           </h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">...</div>
	//         <div slot="modal-footer" class="modal-footer">
	//           <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <modal title="Large Modal" large :show.sync="...">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	//       <modal title="Small Modal" small :show.sync="...">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	//   </doc-code>
	//   <doc-table>
	//     <div>
	//       <p>title</p>
	//       <p><code>String</code></p>
	//       <p></p>
	//       <p>Title of the modal component.</p>
	//     </div>
	//     <div>
	//       <p>ok-text</p>
	//       <p><code>String</code></p>
	//       <p>Save changes</p>
	//       <p>Text for OK button</p>
	//     </div>
	//     <div>
	//       <p>cancel-text</p>
	//       <p><code>String</code></p>
	//       <p>Close</p>
	//       <p>Text for cancel button</p>
	//     </div>
	//     <div>
	//       <p>width</p>
	//       <p><code>Number, String or null</code></p>
	//       <p><code>null</code></p>
	//       <p>Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</p>
	//     </div>
	//     <div>
	//       <p>callback</p>
	//       <p><code>Function</code></p>
	//       <p></p>
	//       <p>A callback Function when you click the modal primary button.</p>
	//     </div>
	//     <div>
	//       <p>large</p>
	//       <p><code>Boolean</code></p>
	//       <p><code>false</code></p>
	//       <p>Creates a large modal ( see boostrap's documentation for .modal-lg )</p>
	//     </div>
	//     <div>
	//       <p>small</p>
	//       <p><code>Boolean</code></p>
	//       <p><code>false</code></p>
	//       <p>Creates a small modal ( see boostrap's documentation for .modal-sm )</p>
	//     </div>
	//     <div>
	//       <p>backdrop</p>
	//       <p><code>Boolean</code></p>
	//       <p><code>true</code></p>
	//       <p>Enables/disables closing the modal by clicking on the backdrop.</p>
	//     </div>
	//   </doc-table>
	//   <h2>Usage</h2>
	//   <p>
	//     If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you
	//     need to put custom HTML or a custom footer, you can override the header or footer block by using
	//     <code>&lt;div slot="modal-title" class="modal-title"&gt;...&lt;/div&gt;</code> and
	//     <code>&lt;div slot="modal-footer" class="modal-footer"&gt;...&lt;/div&gt;</code>.
	//   </p>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    modal: _Modal2.default
	  },
	  data: function data() {
	    return {
	      showModal: false,
	      fadeModal: false,
	      zoomModal: false,
	      showCustomModal: false,
	      largeModal: false,
	      smallModal: false
	    };
	  }
	};
	// </script>

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(279)
	module.exports = __webpack_require__(281)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(286)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(280);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-66f9c46c&file=Modal.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-66f9c46c&file=Modal.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n  -webkit-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}", ""]);
	
	// exports


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(282);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(124);
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div role="dialog"
	//     v-bind:class="{
	//     'modal':true,
	//     'fade':effect === 'fade',
	//     'zoom':effect === 'zoom'
	//     }"
	//     >
	//     <div v-bind:class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
	//       v-bind:style="{width: optionalWidth}">
	//       <div class="modal-content">
	//         <slot name="modal-header">
	//           <div class="modal-header">
	//             <button type="button" class="close" @click="close"><span>&times;</span></button>
	//             <h4 class="modal-title">
	//               <slot name="title">
	//                 {{title}}
	//               </slot>
	//             </h4>
	//           </div>
	//         </slot>
	//         <slot name="modal-body">
	//           <div class="modal-body"></div>
	//         </slot>
	//         <slot name="modal-footer">
	//           <div class="modal-footer">
	//             <button type="button" class="btn btn-default" @click="close">{{ cancelText }}</button>
	//             <button type="button" class="btn btn-primary" @click="callback">{{ okText }}</button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    okText: {
	      type: String,
	      default: 'Save changes'
	    },
	    cancelText: {
	      type: String,
	      default: 'Close'
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      required: true,
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      twoWay: true
	    },
	    width: {
	      default: null
	    },
	    callback: {
	      type: Function,
	      default: function _default() {}
	    },
	    effect: {
	      type: String,
	      default: null
	    },
	    backdrop: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    large: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    small: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + 'px';
	      }
	      return this.width;
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (val) {
	        (0, _NodeList2.default)(el).find('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return (0, _NodeList2.default)(el).addClass('in');
	        }, 0);
	        (0, _NodeList2.default)(body).addClass('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        if (this.backdrop) {
	          (0, _NodeList2.default)(el).on('click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        body.style.paddingRight = null;
	        (0, _NodeList2.default)(body).removeClass('modal-open');
	        (0, _NodeList2.default)(el).removeClass('in').on('transitionend', function () {
	          (0, _NodeList2.default)(el).off('click transitionend');
	          el.style.display = 'none';
	        });
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	// <style>
	// .modal {
	//   transition: all 0.3s ease;
	// }
	// .modal.in {
	//   background-color: rgba(0,0,0,0.5);
	// }
	// .modal.zoom .modal-dialog {
	//   -webkit-transform: scale(0.1);
	//   -moz-transform: scale(0.1);
	//   -ms-transform: scale(0.1);
	//   transform: scale(0.1);
	//   top: 300px;
	//   opacity: 0;
	//   -webkit-transition: all 0.3s;
	//   -moz-transition: all 0.3s;
	//   transition: all 0.3s;
	// }
	// .modal.zoom.in .modal-dialog {
	//   -webkit-transform: scale(1);
	//   -moz-transform: scale(1);
	//   -ms-transform: scale(1);
	//   transform: scale(1);
	//   -webkit-transform: translate3d(0, -300px, 0);
	//   transform: translate3d(0, -300px, 0);
	//   opacity: 1;
	// }
	// </style>

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(284);
	module.exports = __webpack_require__(61).Number.isInteger;

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(59);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(285)});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(67)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "<div role=\"dialog\"\n    v-bind:class=\"{\n    'modal':true,\n    'fade':effect === 'fade',\n    'zoom':effect === 'zoom'\n    }\"\n    >\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n      v-bind:style=\"{width: optionalWidth}\">\n      <div class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"modal-title\">\n              <slot name=\"title\">\n                {{title}}\n              </slot>\n            </h4>\n          </div>\n        </slot>\n        <slot name=\"modal-body\">\n          <div class=\"modal-body\"></div>\n        </slot>\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">{{ okText }}</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"modal\" name=\"Modal\">\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default\" @click=\"showModal = true\">Show modal</button>\n      <modal title=\"Modal title\" :show.sync=\"showModal\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"50%\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </div>\n      </modal>\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">Small modal</button>\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.\n        </div>\n      </modal>\n    </div>\n    <doc-code language=\"markup\">\n      <modal :show.sync=\"...\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal title</h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n\n      <modal title=\"Fade Modal\" :show.sync=\"...\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n\n      <modal title=\"Zoom Modal\" :show.sync=\"...\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"400\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">\n            <i>Custom</i> <code>Modal</code> <b>Title</b>\n          </h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <modal title=\"Large Modal\" large :show.sync=\"...\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n      <modal title=\"Small Modal\" small :show.sync=\"...\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n  </doc-code>\n  <doc-table>\n    <div>\n      <p>title</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p>Title of the modal component.</p>\n    </div>\n    <div>\n      <p>ok-text</p>\n      <p><code>String</code></p>\n      <p>Save changes</p>\n      <p>Text for OK button</p>\n    </div>\n    <div>\n      <p>cancel-text</p>\n      <p><code>String</code></p>\n      <p>Close</p>\n      <p>Text for cancel button</p>\n    </div>\n    <div>\n      <p>width</p>\n      <p><code>Number, String or null</code></p>\n      <p><code>null</code></p>\n      <p>Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</p>\n    </div>\n    <div>\n      <p>callback</p>\n      <p><code>Function</code></p>\n      <p></p>\n      <p>A callback Function when you click the modal primary button.</p>\n    </div>\n    <div>\n      <p>large</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Creates a large modal ( see boostrap's documentation for .modal-lg )</p>\n    </div>\n    <div>\n      <p>small</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Creates a small modal ( see boostrap's documentation for .modal-sm )</p>\n    </div>\n    <div>\n      <p>backdrop</p>\n      <p><code>Boolean</code></p>\n      <p><code>true</code></p>\n      <p>Enables/disables closing the modal by clicking on the backdrop.</p>\n    </div>\n  </doc-table>\n  <h2>Usage</h2>\n  <p>\n    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\n    <code>&lt;div slot=\"modal-title\" class=\"modal-title\"&gt;...&lt;/div&gt;</code> and\n    <code>&lt;div slot=\"modal-footer\" class=\"modal-footer\"&gt;...&lt;/div&gt;</code>.\n  </p>\n  </div>\n</template>";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(289)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(293)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./navbarDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./navbarDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./navbarDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./navbarDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./navbarDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Dropdown = __webpack_require__(246);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Navbar = __webpack_require__(290);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Tooltip = __webpack_require__(181);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Select = __webpack_require__(156);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    dropdown: _Dropdown2.default,
	    navbar: _Navbar2.default,
	    tooltip: _Tooltip2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      placement: 'top',
	      type: 'default',
	      sections: []
	    };
	  },
	  created: function created() {
	    if (!this.$root.sections) {
	      this.$root.sections = [];
	    }
	    this.sections = this.$root.sections;
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="navbar" name="Navbar">
	//     <div class="bs-example">
	//       <navbar :placement="placement" :type="type">
	//         <a href="/" title="Home" slot="brand" class="navbar-brand">VueStrap</a>
	//         <dropdown text="Component List" type="primary">
	//           <li v-for="s in sections"><a :href="'#'+s.id" v-text="s.name"></a></li>
	//         </dropdown>
	//         <li>
	//           <a href="https://github.com/yuche/vue-strap" target="_blank">
	//             Fork this project on Github
	//             <svg height="16px" fill="#777" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
	//           </a>
	//         </li>
	//       </navbar>
	//       <div class="form-group">
	//         <label>Placement</label>
	//         <v-select :value.sync="placement" clear-button :options="['top','bottom','static']"></v-select>
	//       </div>
	//       <div class="form-group">
	//         <label>Type</label>
	//         <v-select :value.sync="type" :options="['default','inverse']"></v-select>
	//       </div>
	//     </div>
	//     <doc-code language="markup">
	//       <navbar placement="top" type="default">
	//         <!-- Brand as slot -->
	//         <a slot="brand" href="/" title="Home" class="navbar-brand">VueStrap</a>
	//         <!-- You can use dropdown component -->
	//         <dropdown text="Dropdown">
	//           <li><a href="link">Option</a></li>
	//         </dropdown>
	//         <!-- Or normal bootstrap style -->
	//         <li class="dropdown">
	//           <a href="#" class="dropdown-toggle">Dropdown</a>
	//           <ul class="dropdown-menu">
	//             <li><a href="link">Option</a></li>
	//           </ul>
	//         </li>
	//         <!-- For right positioning use slot -->
	//         <li slot="right">
	//           <a href="https://github.com/yuche/vue-strap" target="_blank">Fork...</a>
	//         </li>
	//       </navbar>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>, one of <code>top</code>, <code>bottom</code>, <code>static</code>, or empty for normal.</p>
	//         <p><code>''</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>inverse</code>, <code>default</code>.</p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(291)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(292)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(55);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    placement: {
	      type: String,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      id: 'bs-example-navbar-collapse-1',
	      collapsed: true,
	      styles: {}
	    };
	  },
	
	  computed: {
	    slots: function slots() {
	      return this._slotContents;
	    }
	  },
	  methods: {
	    toggleCollapse: function toggleCollapse(e) {
	      e && e.preventDefault();
	      this.collapsed = !this.collapsed;
	    }
	  },
	  created: function created() {
	    this._navbar = true;
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', this.$el).parent();
	    $dropdown.on('click', '.dropdown-toggle', function (e) {
	      e.preventDefault();
	      $dropdown.each(function (content) {
	        if (content.contains(e.target)) content.classList.toggle('open');
	      });
	    }).on('click', '.dropdown-menu>li>a', function (e) {
	      $dropdown.each(function (content) {
	        if (content.contains(e.target)) content.classList.remove('open');
	      });
	    }).onBlur(function (e) {
	      $dropdown.each(function (content) {
	        if (!content.contains(e.target)) content.classList.remove('open');
	      });
	    });
	    (0, _NodeList2.default)(this.$el).on('click touchstart', 'li:not(.dropdown)>a', function (e) {
	      setTimeout(function () {
	        _this.collapsed = true;
	      }, 200);
	    }).onBlur(function (e) {
	      if (!_this.$el.contains(e.target)) {
	        _this.collapsed = true;
	      }
	    });
	    var height = this.$el.offsetHeight;
	    if (this.placement === 'top') {
	      document.body.style.paddingTop = height + 'px';
	    }
	    if (this.placement === 'bottom') {
	      document.body.style.paddingBottom = height + 'px';
	    }
	    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).on('click', function (e) {
	      return _this.toggleCollapse(e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('.dropdown', this.$el).off('click').offBlur();
	    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
	  }
	};
	// </script>
	// <template>
	//   <nav v-el:navbar :class="['navbar',{
	//     'navbar-inverse':(type == 'inverse'),
	//     'navbar-default':(type == 'default'),
	//     'navbar-fixed-top':(placement === 'top'),
	//     'navbar-fixed-bottom':(placement === 'bottom'),
	//     'navbar-static-top':(placement === 'static')
	//   }]">
	//     <div class="container-fluid">
	//       <div class="navbar-header">
	//         <button v-if="!slots.collapse" type="button" class="navbar-toggle collapsed"  aria-expanded="false" @click="toggleCollapse">
	//           <span class="sr-only">Toggle navigation</span>
	//           <span class="icon-bar"></span>
	//           <span class="icon-bar"></span>
	//           <span class="icon-bar"></span>
	//         </button>
	//         <slot name="collapse"></slot>
	//         <slot name="brand"></slot>
	//       </div>
	//       <div :class="['navbar-collapse',{collapse:collapsed}]">
	//         <ul class="nav navbar-nav">
	//           <slot></slot>
	//         </ul>
	//         <ul v-if="slots.right" class="nav navbar-nav navbar-right">
	//           <slot name="right"></slot>
	//         </ul>
	//       </div>
	//     </div>
	//   </nav>
	// </template>
	
	// <script>

/***/ },
/* 292 */
/***/ function(module, exports) {

	module.exports = "<nav v-el:navbar :class=\"['navbar',{\n    'navbar-inverse':(type == 'inverse'),\n    'navbar-default':(type == 'default'),\n    'navbar-fixed-top':(placement === 'top'),\n    'navbar-fixed-bottom':(placement === 'bottom'),\n    'navbar-static-top':(placement === 'static')\n  }]\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button v-if=\"!slots.collapse\" type=\"button\" class=\"navbar-toggle collapsed\"  aria-expanded=\"false\" @click=\"toggleCollapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <slot name=\"collapse\"></slot>\n        <slot name=\"brand\"></slot>\n      </div>\n      <div :class=\"['navbar-collapse',{collapse:collapsed}]\">\n        <ul class=\"nav navbar-nav\">\n          <slot></slot>\n        </ul>\n        <ul v-if=\"slots.right\" class=\"nav navbar-nav navbar-right\">\n          <slot name=\"right\"></slot>\n        </ul>\n      </div>\n    </div>\n  </nav>";

/***/ },
/* 293 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"navbar\" name=\"Navbar\">\n    <div class=\"bs-example\">\n      <navbar :placement=\"placement\" :type=\"type\">\n        <a href=\"/\" title=\"Home\" slot=\"brand\" class=\"navbar-brand\">VueStrap</a>\n        <dropdown text=\"Component List\" type=\"primary\">\n          <li v-for=\"s in sections\"><a :href=\"'#'+s.id\" v-text=\"s.name\"></a></li>\n        </dropdown>\n        <li>\n          <a href=\"https://github.com/yuche/vue-strap\" target=\"_blank\">\n            Fork this project on Github\n            <svg height=\"16px\" fill=\"#777\" class=\"octicon octicon-mark-github\" viewBox=\"0 0 16 16\" version=\"1.1\" aria-hidden=\"true\"><path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg>\n          </a>\n        </li>\n      </navbar>\n      <div class=\"form-group\">\n        <label>Placement</label>\n        <v-select :value.sync=\"placement\" clear-button :options=\"['top','bottom','static']\"></v-select>\n      </div>\n      <div class=\"form-group\">\n        <label>Type</label>\n        <v-select :value.sync=\"type\" :options=\"['default','inverse']\"></v-select>\n      </div>\n    </div>\n    <doc-code language=\"markup\">\n      <navbar placement=\"top\" type=\"default\">\n        <!-- Brand as slot -->\n        <a slot=\"brand\" href=\"/\" title=\"Home\" class=\"navbar-brand\">VueStrap</a>\n        <!-- You can use dropdown component -->\n        <dropdown text=\"Dropdown\">\n          <li><a href=\"link\">Option</a></li>\n        </dropdown>\n        <!-- Or normal bootstrap style -->\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\">Dropdown</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"link\">Option</a></li>\n          </ul>\n        </li>\n        <!-- For right positioning use slot -->\n        <li slot=\"right\">\n          <a href=\"https://github.com/yuche/vue-strap\" target=\"_blank\">Fork...</a>\n        </li>\n      </navbar>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>, one of <code>top</code>, <code>bottom</code>, <code>static</code>, or empty for normal.</p>\n        <p><code>''</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of <code>inverse</code>, <code>default</code>.</p>\n        <p><code>default</code></p>\n        <p></p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(295)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(301)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Popover = __webpack_require__(296);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Input = __webpack_require__(259);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    bsInput: _Input2.default,
	    popover: _Popover2.default
	  },
	  data: function data() {
	    return {
	      placements: ['top', 'left', 'right', 'bottom'],
	      text: 'Lorem ipsum dolor sit amet',
	      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod'
	    };
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="popover" name="Popover">
	//     <div class="bs-example">
	//       <popover v-for="place in placements" effect="fade" :content="text" :placement="place">
	//         <button class="btn btn-default">Popover on {{place}}</button>
	//       </popover>
	//       <hr>
	//       <h4>Title</h4>
	//       <popover v-for="place in placements" effect="fade" header title="Title" :content="text" :placement="place">
	//         <button class="btn btn-default">Popover on {{place}}</button>
	//       </popover>
	//       <hr>
	//       <h4>Trigger</h4>
	//       <p>
	//         <popover effect="scale" title="Title" :content="content" placement="top" trigger="hover">
	//           <button class="btn btn-default">Mouseenter</button>
	//         </popover>
	//         <popover effect="scale" title="Title" :content="text" placement="top" trigger="contextmenu">
	//           <button class="btn btn-default">Contextmenu (right click)</button>
	//         </popover>
	//       </p>
	//       <popover effect="scale" title="Title" :content="text" placement="bottom" trigger="focus">
	//         <bs-input type="text" placeholder="Focus"></bs-input>
	//       </popover>
	//     </div>
	//     <doc-code language="markup">
	//       <popover effect="fade" placement="bottom" title="Title" content="content">
	//         <button class="btn btn-default">Popover on bottom</button>
	//       </popover>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>trigger</p>
	//         <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>
	//         <p><code>click</code></p>
	//         <p>How the popover is triggered.</p>
	//       </div>
	//       <div>
	//         <p>effect</p>
	//         <p><code>String</code>, one of <code>scale</code> <code>fade</code></p>
	//         <p><code>fade</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>title</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>content</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>header</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether to show the header.</p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>, one of <code>top</code>
	//         <code>left</code>
	//         <code>right</code>
	//         <code>bottom</code></p>
	//         <p></p>
	//         <p>How to position the popover.</p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(297)
	module.exports = __webpack_require__(299)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(300)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Popover.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Popover.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Popover.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Popover.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Popover.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(298);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-f231cefc&file=Popover.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-f231cefc&file=Popover.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".popover.top,\n.popover.left,\n.popover.right,\n.popover.bottom {\n  display: block;\n}\n.scale-enter {\n  -webkit-animation:scale-in 0.15s ease-in;\n          animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  -webkit-animation:scale-out 0.15s ease-out;\n          animation:scale-out 0.15s ease-out;\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(185);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    }
	  }
	};
	// </script>
	
	// <style>
	// .popover.top,
	// .popover.left,
	// .popover.right,
	// .popover.bottom {
	//   display: block;
	// }
	// .scale-enter {
	//   animation:scale-in 0.15s ease-in;
	// }
	// .scale-leave {
	//   animation:scale-out 0.15s ease-out;
	// }
	// @keyframes scale-in {
	//   0% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	// }
	// @keyframes scale-out {
	//   0% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	// }
	// </style>
	// <template>
	//   <span v-el:trigger>
	//     <slot></slot>
	//     <div v-el:popover v-if="show"
	//       :class="['popover',placement]"
	//       :transition="effect"
	//     >
	//       <div class="arrow"></div>
	//       <h3 class="popover-title" v-if="title">
	//         <slot name="title">{{title}}</slot>
	//       </h3>
	//       <div class="popover-content">
	//         <slot name="content" v-html="content"></slot>
	//       </div>
	//     </div>
	//   </span>
	// </template>
	
	// <script>

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\n    <slot></slot>\n    <div v-el:popover v-if=\"show\"\n      :class=\"['popover',placement]\"\n      :transition=\"effect\"\n    >\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-if=\"title\">\n        <slot name=\"title\">{{title}}</slot>\n      </h3>\n      <div class=\"popover-content\">\n        <slot name=\"content\" v-html=\"content\"></slot>\n      </div>\n    </div>\n  </span>";

/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"popover\" name=\"Popover\">\n    <div class=\"bs-example\">\n      <popover v-for=\"place in placements\" effect=\"fade\" :content=\"text\" :placement=\"place\">\n        <button class=\"btn btn-default\">Popover on {{place}}</button>\n      </popover>\n      <hr>\n      <h4>Title</h4>\n      <popover v-for=\"place in placements\" effect=\"fade\" header title=\"Title\" :content=\"text\" :placement=\"place\">\n        <button class=\"btn btn-default\">Popover on {{place}}</button>\n      </popover>\n      <hr>\n      <h4>Trigger</h4>\n      <p>\n        <popover effect=\"scale\" title=\"Title\" :content=\"content\" placement=\"top\" trigger=\"hover\">\n          <button class=\"btn btn-default\">Mouseenter</button>\n        </popover>\n        <popover effect=\"scale\" title=\"Title\" :content=\"text\" placement=\"top\" trigger=\"contextmenu\">\n          <button class=\"btn btn-default\">Contextmenu (right click)</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\" title=\"Title\" :content=\"text\" placement=\"bottom\" trigger=\"focus\">\n        <bs-input type=\"text\" placeholder=\"Focus\"></bs-input>\n      </popover>\n    </div>\n    <doc-code language=\"markup\">\n      <popover effect=\"fade\" placement=\"bottom\" title=\"Title\" content=\"content\">\n        <button class=\"btn btn-default\">Popover on bottom</button>\n      </popover>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>trigger</p>\n        <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>\n        <p><code>click</code></p>\n        <p>How the popover is triggered.</p>\n      </div>\n      <div>\n        <p>effect</p>\n        <p><code>String</code>, one of <code>scale</code> <code>fade</code></p>\n        <p><code>fade</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>title</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p></p>\n      </div>\n      <div>\n        <p>content</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p></p>\n      </div>\n      <div>\n        <p>header</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether to show the header.</p>\n      </div>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></p>\n        <p></p>\n        <p>How to position the popover.</p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(303)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(307)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Progressbar = __webpack_require__(304);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="progressbar" name="Progressbar">
	//     <div class="bs-example">
	//       <h4>Static</h4>
	//       <div class="row">
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar now="20" type="success"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar now="40" type="info"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar now="60" type="primary"></progressbar>
	//           </div>
	//         </div>
	//       </div>
	//       <hr/>
	//       <h4>Dynamic <button type="button" class="btn btn-default" @click="dynamicClick">Randomize</button></h4>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[0]" type="info"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[1]" type="warning"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[2]" type="danger"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[3]" type="success" striped></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[4]" type="success" striped animated></progressbar>
	//       </div>
	//       <hr/>
	//       <h4>Stacked <button type="button" class="btn btn-default" @click="stackedClick">Randomize</button></h4>
	//       <div class="progress">
	//         <progressbar :now="stackedData[0]" label type="warning" striped></progressbar>
	//         <progressbar :now="stackedData[1]" label type="success" ></progressbar>
	//         <progressbar :now="stackedData[2]" label type="danger"></progressbar>
	//         <progressbar :now="stackedData[3]" label type="primary" striped animated></progressbar>
	//       </div>
	
	//     </div>
	//     <doc-code language="markup">
	//       Stacked:
	//       <div class="progress">
	//         <progressbar now="" label type="warning" striped></progressbar>
	//         <progressbar now="" label type="success" ></progressbar>
	//         <progressbar now="" label type="danger"></progressbar>
	//         <progressbar now="" label type="primary" striped animated></progressbar>
	//       </div>
	//       Single:
	//       <div class="progress">
	//         <progressbar now="" label type="warning" striped></progressbar>
	//       </div>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>now</p>
	//         <p><code>Number</code></p>
	//         <p></p>
	//         <p>The current value of progress completed. Required.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Style type. Possible values are 'success', 'warning' etc.</p>
	//       </div>
	//       <div>
	//         <p>label</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Whether to show the label.</p>
	//       </div>
	//       <div>
	//         <p>striped</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether the progressbar has striped effect or not.</p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    progressbar: _Progressbar2.default
	  },
	  data: function data() {
	    return {
	      dynamicData: [10, 30, 50, 70, 90],
	      stackedData: [10, 20, 30, 40]
	    };
	  },
	
	  methods: {
	    dynamicClick: function dynamicClick() {
	      this.dynamicData = this.dynamicData.map(function () {
	        return Math.floor(Math.random() * 100);
	      });
	    },
	    stackedClick: function stackedClick() {
	      var i = 100;
	      this.stackedData = this.stackedData.map(function () {
	        var random = Math.floor(Math.random() * i);
	        i = i - random;
	        return random;
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(305)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(306)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    now: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      required: true
	    },
	    label: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  }
	};
	// </script>
	// <template>
	//   <div role="progressbar" 
	//     :class="['progress-bar',{
	//       'progress-bar-success':type == 'success',
	//       'progress-bar-warning':type == 'warning',
	//       'progress-bar-info':type == 'info',
	//       'progress-bar-danger':type == 'danger',
	//       'progress-bar-striped':striped,
	//       'active':animated
	//     }]"
	//     :style="{width: now + '%'}"
	//   >
	//     {{label ? now + '%' : ''}}
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = "<div role=\"progressbar\" \n    :class=\"['progress-bar',{\n      'progress-bar-success':type == 'success',\n      'progress-bar-warning':type == 'warning',\n      'progress-bar-info':type == 'info',\n      'progress-bar-danger':type == 'danger',\n      'progress-bar-striped':striped,\n      'active':animated\n    }]\"\n    :style=\"{width: now + '%'}\"\n  >\n    {{label ? now + '%' : ''}}\n  </div>";

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"progressbar\" name=\"Progressbar\">\n    <div class=\"bs-example\">\n      <h4>Static</h4>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"20\" type=\"success\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"40\" type=\"info\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"60\" type=\"primary\"></progressbar>\n          </div>\n        </div>\n      </div>\n      <hr/>\n      <h4>Dynamic <button type=\"button\" class=\"btn btn-default\" @click=\"dynamicClick\">Randomize</button></h4>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[0]\" type=\"info\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[1]\" type=\"warning\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[2]\" type=\"danger\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[3]\" type=\"success\" striped></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[4]\" type=\"success\" striped animated></progressbar>\n      </div>\n      <hr/>\n      <h4>Stacked <button type=\"button\" class=\"btn btn-default\" @click=\"stackedClick\">Randomize</button></h4>\n      <div class=\"progress\">\n        <progressbar :now=\"stackedData[0]\" label type=\"warning\" striped></progressbar>\n        <progressbar :now=\"stackedData[1]\" label type=\"success\" ></progressbar>\n        <progressbar :now=\"stackedData[2]\" label type=\"danger\"></progressbar>\n        <progressbar :now=\"stackedData[3]\" label type=\"primary\" striped animated></progressbar>\n      </div>\n\n    </div>\n    <doc-code language=\"markup\">\n      Stacked:\n      <div class=\"progress\">\n        <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n        <progressbar now=\"\" label type=\"success\" ></progressbar>\n        <progressbar now=\"\" label type=\"danger\"></progressbar>\n        <progressbar now=\"\" label type=\"primary\" striped animated></progressbar>\n      </div>\n      Single:\n      <div class=\"progress\">\n        <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n      </div>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>now</p>\n        <p><code>Number</code></p>\n        <p></p>\n        <p>The current value of progress completed. Required.</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Style type. Possible values are 'success', 'warning' etc.</p>\n      </div>\n      <div>\n        <p>label</p>\n        <p><code>Boolean</code></p>\n        <p>false</p>\n        <p>Whether to show the label.</p>\n      </div>\n      <div>\n        <p>striped</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Whether the progressbar has striped effect or not.</p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(309)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(310)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./radioDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./radioDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./radioDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./radioDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./radioDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Radio = __webpack_require__(211);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="radio" name="Radio">
	//     <div class="bs-example">
	//       <h4>Radio</h4>
	//       <radio :checked.sync="radioValue" value="one">One</radio>
	//       <radio :checked.sync="radioValue" value="two" type="danger" disabled>Two (disabled)</radio>
	//       <radio :checked.sync="radioValue" value="two" type="warning" readonly>Two (readonly)</radio>
	//       <radio :checked.sync="radioValue" value="two" type="success">Two</radio>
	//       <hr>
	//       <h4>Radio Button (Single buttons)</h4>
	//       <radio button :checked.sync="radioValue" value="three" type="primary">Three</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info" disabled>Four (disabled)</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info" readonly>Four (readonly)</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info">Four</radio>
	//       <p><pre>Radio value: {{radioValue | json}}</pre></p>
	//     </div>
	//     <doc-code language="markup">
	//       <radio :checked.sync="radioValue" value="one">One</radio>
	//       <radio :checked.sync="radioValue" value="two" type="primary">Two</radio>
	//       <radio button :checked.sync="radioValue" value="three" type="danger">Three</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info">Four</radio>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>checked</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Handle the selected value.</p>
	//       </div>
	//       <div>
	//         <p>value</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Value to return if the radio item is selected.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>button</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Button style.</p>
	//       </div>
	//     </doc-table>
	//     <p>See <a href="#button-group">Button Group</a> for more options.</p>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    radio: _Radio2.default
	  },
	  data: function data() {
	    return {
	      radioValue: null
	    };
	  }
	};
	// </script>

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"radio\" name=\"Radio\">\n    <div class=\"bs-example\">\n      <h4>Radio</h4>\n      <radio :checked.sync=\"radioValue\" value=\"one\">One</radio>\n      <radio :checked.sync=\"radioValue\" value=\"two\" type=\"danger\" disabled>Two (disabled)</radio>\n      <radio :checked.sync=\"radioValue\" value=\"two\" type=\"warning\" readonly>Two (readonly)</radio>\n      <radio :checked.sync=\"radioValue\" value=\"two\" type=\"success\">Two</radio>\n      <hr>\n      <h4>Radio Button (Single buttons)</h4>\n      <radio button :checked.sync=\"radioValue\" value=\"three\" type=\"primary\">Three</radio>\n      <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\" disabled>Four (disabled)</radio>\n      <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\" readonly>Four (readonly)</radio>\n      <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\">Four</radio>\n      <p><pre>Radio value: {{radioValue | json}}</pre></p>\n    </div>\n    <doc-code language=\"markup\">\n      <radio :checked.sync=\"radioValue\" value=\"one\">One</radio>\n      <radio :checked.sync=\"radioValue\" value=\"two\" type=\"primary\">Two</radio>\n      <radio button :checked.sync=\"radioValue\" value=\"three\" type=\"danger\">Three</radio>\n      <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\">Four</radio>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>checked</p>\n        <p><code>Number</code> or <code>String</code></p>\n        <p></p>\n        <p>Handle the selected value.</p>\n      </div>\n      <div>\n        <p>value</p>\n        <p><code>Number</code> or <code>String</code></p>\n        <p></p>\n        <p>Value to return if the radio item is selected.</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of <code>default</code>\n        <code>primary</code>\n        <code>danger</code>\n        <code>info</code>\n        <code>warning</code>\n        <code>success</code></p>\n        <p><code>default</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>button</p>\n        <p><code>Boolean</code></p>\n        <p>false</p>\n        <p>Button style.</p>\n      </div>\n    </doc-table>\n    <p>See <a href=\"#button-group\">Button Group</a> for more options.</p>\n  </doc-section>";

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(312)
	module.exports = __webpack_require__(314)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(315)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(313);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-389af798&file=selectDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./selectDocs.vue", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js!../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-389af798&file=selectDocs.vue!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./selectDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}", ""]);
	
	// exports


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _buttonGroup = __webpack_require__(208);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(144);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Select = __webpack_require__(156);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(240);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    buttonGroup: _buttonGroup2.default,
	    checkbox: _Checkbox2.default,
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      select: {
	        options: [{ val: 0, label: 'Cat' }, { val: 1, label: 'Cow' }, { val: 2, label: 'Dog' }, { val: 3, label: 'Elephant' }, { val: 4, label: 'Fish' }, { val: 5, label: 'Lion' }, { val: 6, label: 'Tiger' }, { val: 7, label: 'Turtle' }],
	        justified: true,
	        search: true
	      },
	      ajax: {
	        value: null
	      },
	      single: []
	    };
	  }
	};
	// </script>
	
	// <style>
	// .checkbox>label:not(:first-child) {
	//   margin-left: 15px;
	// }
	// </style>
	// <template>
	//   <doc-section id="select" name="Select">
	//     <p>Based in a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.</p>
	//     <div class="bs-example">
	//       <div class="row">
	//         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//           <p><pre>Normal select data: {{select.normal}}</pre></p>
	//           <form action="./#select" method="get">
	//             <v-select :options="select.options" options-value="val" :value.sync="select.normal" name="animal" :search="select.search"
	//               :required="select.required" :clear-button="select.clearButton" :disabled="select.disabled"
	//             ></v-select>
	//             <button type="submit" class="btn btn-default">Submit</button>
	//           </form>
	//         </div>
	//         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//           <p><pre>Multiple select data : {{select.multiple.join(',')}}</pre></p>
	//           <form action="./#select" method="get">
	//             <v-select :options="select.options" options-value="val" :value.sync="select.multiple" name="animals[]" :search="select.search"
	//               multiple :required="select.required" :clear-button="select.clearButton"
	//               :close-on-select="select.closeOnSelect" :limit="select.limit?3:1024" :disabled="select.disabled"
	//             ></v-select>
	//             <button type="submit" class="btn btn-default">Submit</button>
	//           </form>
	//         </div>
	//       </div>
	//       <br/>
	//       <button-group type="primary" buttons="false">
	//         <div class="row">
	//           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//             <p><checkbox :checked.sync="select.disabled">Disabled</checkbox></p>
	//             <p><checkbox :checked.sync="select.search">Search</checkbox></p>
	//             <p><checkbox :checked.sync="select.clearButton">Clear Button</checkbox></p>
	//           </div>
	//           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//             <p><checkbox :checked.sync="select.required">Required (empty value if noting selected)</checkbox></p>
	//             <p>
	//               Multiple:
	//               <checkbox v-if="select.multiple" :checked.sync="select.limit">Limit (e.g. 3)</checkbox>
	//               <checkbox v-if="select.multiple" :checked.sync="select.closeOnSelect">Close on Select</checkbox>
	//             </p>
	//           </div>
	//         </div>
	//       </button-group>
	//       <doc-code>
	//         <form action="./#select" method="get">
	//           <v-select :value.sync="select.value" :options="select.options" options-value="val"
	//             multiple name="animals[]" limit="3"
	//             search justified required disabled
	//             clear-button close-on-select
	//           ></v-select>
	//           <button type="submit" class="btn btn-default">Submit form</button>
	//         </form>
	//       </doc-code>
	//       <doc-code language="javascript">
	//         options: [
	//           {val: 0, label: 'Cat'},
	//           {val: 1, label: 'Cow'},
	//           {val: 2, label: 'Dog'},
	//           {val: 3, label: 'Elephant'},
	//           {val: 4, label: 'Fish'},
	//           {val: 5, label: 'Lion'},
	//           {val: 6, label: 'Tiger'},
	//           {val: 7, label: 'Turtle'}
	//         ]
	//       </doc-code>
	//       <h4>Select with option component:</h4>
	//       <p><pre>Selected data : {{single}}</pre></p>
	//       <v-select :value.sync="single">
	//         <v-option value="apple">Apple</v-option>
	//         <v-option value="banana">Banana</v-option>
	//         <v-option value="cherry">Cherry</v-option>
	//         <v-option value="orange">Orange</v-option>
	//         <v-option value="grape">Grape</v-option>
	//       </v-select>
	//       <doc-code>
	//         <v-select>
	//           <v-option value="apple">Apple</v-option>
	//           <v-option value="banana">Banana</v-option>
	//           <v-option value="cherry">Cherry</v-option>
	//           <v-option value="orange">Orange</v-option>
	//           <v-option value="grape">Grape</v-option>
	//         </v-select>
	//       </doc-code>
	//       <hr/>
	//       <h4>Use button-group (component or <a href="http://getbootstrap.com/components/#btn-groups-justified">bootstrap element</a>) if you want to justify.</h4>
	//       <button-group justified>
	//         <v-select multiple clear-button>
	//           <v-option value="apple">Apple</v-option>
	//           <v-option value="banana">Banana</v-option>
	//           <v-option value="cherry">Cherry</v-option>
	//           <v-option value="cranberry">Cranberry</v-option>
	//           <v-option value="grape">Grape</v-option>
	//           <v-option value="orange">Orange</v-option>
	//           <v-option value="passionfruit">Passionfruit</v-option>
	//           <v-option value="pineapple">Pineapple</v-option>
	//           <v-option value="strawberry">Strawberry</v-option>
	//           <v-option value="a">Apple</v-option>
	//           <v-option value="b">Banana</v-option>
	//           <v-option value="c">Cherry</v-option>
	//           <v-option value="c">Cranberry</v-option>
	//           <v-option value="g">Grape</v-option>
	//           <v-option value="o">Orange</v-option>
	//           <v-option value="p">Passionfruit</v-option>
	//           <v-option value="p">Pineapple</v-option>
	//           <v-option value="s">Strawberry</v-option>
	//         </v-select>
	//       </button-group>
	//       <doc-code>
	//         <button-group justified><select>...</select></button-group>
	//         // or
	//         <div class="btn-group btn-group-justified"><select>...</select></div>
	//       </doc-code>
	//       <hr/>
	//       <h4>Ajax data and parent dependency:</h4>
	//       <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>
	//       <v-select url="docs/data.json" options-label="text" :value.sync="ajax.value" clear-button v-ref:ajax></v-select>
	//       <v-select url="docs/data.json" options-label="text" multiple :parent="ajax.value"></v-select>
	//       <doc-code>
	//         <v-select url="docs/data.json" options-label="text" :value.sync="ajax.value" clear-button></v-select>
	//         <v-select url="docs/data.json" options-label="text" multiple :parent="ajax.value"></v-select>
	//       </doc-code>
	//       <p>Ajax response:</p>
	//       <pre v-html="$refs.ajax.options|json"></pre>
	//     </div>
	//     <doc-table name="Other">
	//       <div>
	//         <p>min-search</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>
	//       </div>
	//       <div>
	//         <p>lang</p>
	//         <p><code>String</code></p>
	//         <p>Browser language</p>
	//         <p><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>
	//       </div>
	//       <div>
	//         <p>options-label</p>
	//         <p><code>String</code></p>
	//         <p><code>label</code></p>
	//         <p>Define the value in the data used as label.</p>
	//       </div>
	//       <div>
	//         <p>options-value</p>
	//         <p><code>String</code></p>
	//         <p><code>value</code></p>
	//         <p>Define the value in the data used as value.</p>
	//       </div>
	//       <div>
	//         <p>placeholder</p>
	//         <p><code>String</code></p>
	//         <p>Nothing Selected</p>
	//       </div>
	//       <div>
	//         <p>search-text</p>
	//         <p><code>String</code></p>
	//       </div>
	//     </doc-table>
	//     <doc-table type="Events">
	//       <div>
	//         <p>change</p>
	//         <p>(<code>value</code>)</p>
	//         <p>Return the selected value(s).</p>
	//       </div>
	//       <div>
	//         <p>selected</p>
	//         <p>(<code>labels:String</code>)</p>
	//         <p>Return a string with the label(s) of the selected item(s).</p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"select\" name=\"Select\">\n    <p>Based in a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.</p>\n    <div class=\"bs-example\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n          <p><pre>Normal select data: {{select.normal}}</pre></p>\n          <form action=\"./#select\" method=\"get\">\n            <v-select :options=\"select.options\" options-value=\"val\" :value.sync=\"select.normal\" name=\"animal\" :search=\"select.search\"\n              :required=\"select.required\" :clear-button=\"select.clearButton\" :disabled=\"select.disabled\"\n            ></v-select>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </form>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n          <p><pre>Multiple select data : {{select.multiple.join(',')}}</pre></p>\n          <form action=\"./#select\" method=\"get\">\n            <v-select :options=\"select.options\" options-value=\"val\" :value.sync=\"select.multiple\" name=\"animals[]\" :search=\"select.search\"\n              multiple :required=\"select.required\" :clear-button=\"select.clearButton\"\n              :close-on-select=\"select.closeOnSelect\" :limit=\"select.limit?3:1024\" :disabled=\"select.disabled\"\n            ></v-select>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </form>\n        </div>\n      </div>\n      <br/>\n      <button-group type=\"primary\" buttons=\"false\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <p><checkbox :checked.sync=\"select.disabled\">Disabled</checkbox></p>\n            <p><checkbox :checked.sync=\"select.search\">Search</checkbox></p>\n            <p><checkbox :checked.sync=\"select.clearButton\">Clear Button</checkbox></p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <p><checkbox :checked.sync=\"select.required\">Required (empty value if noting selected)</checkbox></p>\n            <p>\n              Multiple:\n              <checkbox v-if=\"select.multiple\" :checked.sync=\"select.limit\">Limit (e.g. 3)</checkbox>\n              <checkbox v-if=\"select.multiple\" :checked.sync=\"select.closeOnSelect\">Close on Select</checkbox>\n            </p>\n          </div>\n        </div>\n      </button-group>\n      <doc-code>\n        <form action=\"./#select\" method=\"get\">\n          <v-select :value.sync=\"select.value\" :options=\"select.options\" options-value=\"val\"\n            multiple name=\"animals[]\" limit=\"3\"\n            search justified required disabled\n            clear-button close-on-select\n          ></v-select>\n          <button type=\"submit\" class=\"btn btn-default\">Submit form</button>\n        </form>\n      </doc-code>\n      <doc-code language=\"javascript\">\n        options: [\n          {val: 0, label: 'Cat'},\n          {val: 1, label: 'Cow'},\n          {val: 2, label: 'Dog'},\n          {val: 3, label: 'Elephant'},\n          {val: 4, label: 'Fish'},\n          {val: 5, label: 'Lion'},\n          {val: 6, label: 'Tiger'},\n          {val: 7, label: 'Turtle'}\n        ]\n      </doc-code>\n      <h4>Select with option component:</h4>\n      <p><pre>Selected data : {{single}}</pre></p>\n      <v-select :value.sync=\"single\">\n        <v-option value=\"apple\">Apple</v-option>\n        <v-option value=\"banana\">Banana</v-option>\n        <v-option value=\"cherry\">Cherry</v-option>\n        <v-option value=\"orange\">Orange</v-option>\n        <v-option value=\"grape\">Grape</v-option>\n      </v-select>\n      <doc-code>\n        <v-select>\n          <v-option value=\"apple\">Apple</v-option>\n          <v-option value=\"banana\">Banana</v-option>\n          <v-option value=\"cherry\">Cherry</v-option>\n          <v-option value=\"orange\">Orange</v-option>\n          <v-option value=\"grape\">Grape</v-option>\n        </v-select>\n      </doc-code>\n      <hr/>\n      <h4>Use button-group (component or <a href=\"http://getbootstrap.com/components/#btn-groups-justified\">bootstrap element</a>) if you want to justify.</h4>\n      <button-group justified>\n        <v-select multiple clear-button>\n          <v-option value=\"apple\">Apple</v-option>\n          <v-option value=\"banana\">Banana</v-option>\n          <v-option value=\"cherry\">Cherry</v-option>\n          <v-option value=\"cranberry\">Cranberry</v-option>\n          <v-option value=\"grape\">Grape</v-option>\n          <v-option value=\"orange\">Orange</v-option>\n          <v-option value=\"passionfruit\">Passionfruit</v-option>\n          <v-option value=\"pineapple\">Pineapple</v-option>\n          <v-option value=\"strawberry\">Strawberry</v-option>\n          <v-option value=\"a\">Apple</v-option>\n          <v-option value=\"b\">Banana</v-option>\n          <v-option value=\"c\">Cherry</v-option>\n          <v-option value=\"c\">Cranberry</v-option>\n          <v-option value=\"g\">Grape</v-option>\n          <v-option value=\"o\">Orange</v-option>\n          <v-option value=\"p\">Passionfruit</v-option>\n          <v-option value=\"p\">Pineapple</v-option>\n          <v-option value=\"s\">Strawberry</v-option>\n        </v-select>\n      </button-group>\n      <doc-code>\n        <button-group justified><select>...</select></button-group>\n        // or\n        <div class=\"btn-group btn-group-justified\"><select>...</select></div>\n      </doc-code>\n      <hr/>\n      <h4>Ajax data and parent dependency:</h4>\n      <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>\n      <v-select url=\"docs/data.json\" options-label=\"text\" :value.sync=\"ajax.value\" clear-button v-ref:ajax></v-select>\n      <v-select url=\"docs/data.json\" options-label=\"text\" multiple :parent=\"ajax.value\"></v-select>\n      <doc-code>\n        <v-select url=\"docs/data.json\" options-label=\"text\" :value.sync=\"ajax.value\" clear-button></v-select>\n        <v-select url=\"docs/data.json\" options-label=\"text\" multiple :parent=\"ajax.value\"></v-select>\n      </doc-code>\n      <p>Ajax response:</p>\n      <pre v-html=\"$refs.ajax.options|json\"></pre>\n    </div>\n    <doc-table name=\"Other\">\n      <div>\n        <p>min-search</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>\n      </div>\n      <div>\n        <p>lang</p>\n        <p><code>String</code></p>\n        <p>Browser language</p>\n        <p><abbr title=\"ISO 639-1 code\"><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>\n      </div>\n      <div>\n        <p>options-label</p>\n        <p><code>String</code></p>\n        <p><code>label</code></p>\n        <p>Define the value in the data used as label.</p>\n      </div>\n      <div>\n        <p>options-value</p>\n        <p><code>String</code></p>\n        <p><code>value</code></p>\n        <p>Define the value in the data used as value.</p>\n      </div>\n      <div>\n        <p>placeholder</p>\n        <p><code>String</code></p>\n        <p>Nothing Selected</p>\n      </div>\n      <div>\n        <p>search-text</p>\n        <p><code>String</code></p>\n      </div>\n    </doc-table>\n    <doc-table type=\"Events\">\n      <div>\n        <p>change</p>\n        <p>(<code>value</code>)</p>\n        <p>Return the selected value(s).</p>\n      </div>\n      <div>\n        <p>selected</p>\n        <p>(<code>labels:String</code>)</p>\n        <p>Return a string with the label(s) of the selected item(s).</p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(317)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(323)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./spinnerDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./spinnerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(144);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Select = __webpack_require__(156);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Spinner = __webpack_require__(318);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="spinner" name="Spinner">
	//     <div class="bs-example">
	//       <p><checkbox :checked.sync="fixed" type="info">fixed</checkbox></p>
	//       <p><v-select :options="['sm','md','lg','xl']" :value.sync="size">size</v-select></p>
	//       <p><button class="btn btn-info" @click="$broadcast('show::spinner')">show spinner</button></p>
	//       <div><spinner id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner></div>
	//     </div>
	//     <doc-code language="markup">
	//       <spinner v-ref:spinner size="md" fixed text="I will close in 2 secs"></spinner>
	//     </doc-code>
	//     <doc-code language="javascript">
	//       // using ref
	//       this.$refs.spinner.show()
	//       this.$refs.spinner.hide()
	//       // using broadcast
	//       this.$broadcast('show::spinner')
	//       this.$broadcast('hide::spinner')
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>size</p>
	//         <p><code>String</code>, one of <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></p>
	//         <p><code>md</code></p>
	//         <p>The size of the spinner.</p>
	//       </div>
	//       <div>
	//         <p>fixed</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Set to true if you want the spinner to occupy the entire window space.</p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    checkbox: _Checkbox2.default,
	    spinner: _Spinner2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      fixed: false,
	      size: 'lg'
	    };
	  },
	
	  events: {
	    'shown::spinner': function shownSpinner(id) {
	      var _this = this;
	
	      setTimeout(function () {
	        _this.$root.$broadcast('hide::spinner', id);
	      }, 2000);
	    }
	  }
	};
	// </script>

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(319)
	module.exports = __webpack_require__(321)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(322)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(320);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1cec91f6&file=Spinner.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Spinner.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1cec91f6&file=Spinner.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Spinner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9);\n}\n.spinner-gritcode.spinner-fixed {\n  position: fixed;\n}\n.spinner-gritcode .spinner-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.spinner-gritcode .spinner-circle {\n  position: relative;\n  border: 4px solid #ccc;\n  border-right-color: #337ab7;\n  border-radius: 50%;\n  display: inline-block;\n  -webkit-animation: spin 0.6s linear;\n          animation: spin 0.6s linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  width: 3em;\n  height: 3em;\n  z-index: 2;\n}\n.spinner-gritcode .spinner-text {\n  position: relative;\n  text-align: center;\n  margin-top: 0.5em;\n  z-index: 2;\n  width: 100%;\n  font-size: 95%;\n  color: #337ab7;\n}\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em;\n}\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em;\n}\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em;\n}\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em;\n}\n.lt-ie10 .spinner-gritcode .spinner-circle,\n.ie9 .spinner-gritcode .spinner-circle,\n.oldie .spinner-gritcode .spinner-circle,\n.no-csstransitions .spinner-gritcode .spinner-circle,\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  -webkit-animation: none;\n          animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px;\n}", ""]);
	
	// exports


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var MIN_WAIT = 500; // in ms
	
	// <template>
	//   <div :class="['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]" v-show="active">
	//     <div class="spinner-wrapper">
	//       <div class="spinner-circle"></div>
	//       <div class="spinner-text">{{text}}</div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    size: {
	      type: String,
	      default: 'md'
	    },
	    text: {
	      type: String,
	      default: ''
	    },
	    fixed: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      active: false
	    };
	  },
	
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return this.size ? 'spinner-' + this.size : 'spinner-sm';
	    }
	  },
	  ready: function ready() {
	    this._body = document.querySelector('body');
	    this._bodyOverflow = this._body.style.overflowY || '';
	  },
	
	  methods: {
	    getMinWait: function getMinWait(delay) {
	      delay = delay || 0;
	      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
	    },
	    show: function show(options) {
	      if (options && options.text) {
	        this.text = options.text;
	      }
	      if (options && options.size) {
	        this.size = options.size;
	      }
	      if (options && options.fixed) {
	        this.fixed = options.fixed;
	      }
	
	      // block scrolling when spinner is on
	      this._body.style.overflowY = 'hidden';
	
	      // activate spinner
	      this._started = new Date();
	      this.active = true;
	      this.$root.$broadcast('shown::spinner');
	    },
	    hide: function hide() {
	      var _this = this;
	
	      var delay = 0;
	      this._spinnerAnimation = setTimeout(function () {
	        _this.active = false;
	        _this._body.style.overflowY = _this._bodyOverflow;
	        _this.$root.$broadcast('hidden::spinner');
	      }, this.getMinWait(delay));
	    }
	  },
	  events: {
	    'show::spinner': function showSpinner(options) {
	      this.show(options);
	    },
	    'hide::spinner': function hideSpinner() {
	      this.hide();
	    },
	    'start::ajax': function startAjax(options) {
	      this.show(options);
	    },
	    'end::ajax': function endAjax() {
	      this.hide();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  }
	};
	// </script>
	
	// <style>
	// @keyframes spin {
	//   100% {
	//     transform: rotate(360deg);
	//   }
	// }
	// .spinner-gritcode {
	//   top: 0;
	//   left: 0;
	//   bottom: 0;
	//   right: 0;
	//   z-index: 9998;
	//   position: absolute;
	//   width: 100%;
	//   text-align: center;
	//   background: rgba(255, 255, 255, 0.9);
	// }
	// .spinner-gritcode.spinner-fixed {
	//   position: fixed;
	// }
	// .spinner-gritcode .spinner-wrapper {
	//   position: absolute;
	//   top: 50%;
	//   left: 50%;
	//   transform: translate(-50%, -50%);
	//   -ms-transform: translate(-50%, -50%);
	// }
	// .spinner-gritcode .spinner-circle {
	//   position: relative;
	//   border: 4px solid #ccc;
	//   border-right-color: #337ab7;
	//   border-radius: 50%;
	//   display: inline-block;
	//   animation: spin 0.6s linear;
	//   animation-iteration-count: infinite;
	//   width: 3em;
	//   height: 3em;
	//   z-index: 2;
	// }
	// .spinner-gritcode .spinner-text {
	//   position: relative;
	//   text-align: center;
	//   margin-top: 0.5em;
	//   z-index: 2;
	//   width: 100%;
	//   font-size: 95%;
	//   color: #337ab7;
	// }
	// .spinner-gritcode.spinner-sm .spinner-circle {
	//   width: 1.5em;
	//   height: 1.5em;
	// }
	// .spinner-gritcode.spinner-md .spinner-circle {
	//   width: 2em;
	//   height: 2em;
	// }
	// .spinner-gritcode.spinner-lg .spinner-circle {
	//   width: 2.5em;
	//   height: 2.5em;
	// }
	// .spinner-gritcode.spinner-xl .spinner-circle {
	//   width: 3.5em;
	//   height: 3.5em;
	// }
	// .lt-ie10 .spinner-gritcode .spinner-circle,
	// .ie9 .spinner-gritcode .spinner-circle,
	// .oldie .spinner-gritcode .spinner-circle,
	// .no-csstransitions .spinner-gritcode .spinner-circle,
	// .no-csstransforms3d .spinner-gritcode .spinner-circle {
	//   background: url("http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif") center center no-repeat;
	//   animation: none;
	//   margin-left: 0;
	//   margin-top: 5px;
	//   border: none;
	//   width: 32px;
	//   height: 32px;
	// }
	// </style>

/***/ },
/* 322 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active\">\n    <div class=\"spinner-wrapper\">\n      <div class=\"spinner-circle\"></div>\n      <div class=\"spinner-text\">{{text}}</div>\n    </div>\n  </div>";

/***/ },
/* 323 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"spinner\" name=\"Spinner\">\n    <div class=\"bs-example\">\n      <p><checkbox :checked.sync=\"fixed\" type=\"info\">fixed</checkbox></p>\n      <p><v-select :options=\"['sm','md','lg','xl']\" :value.sync=\"size\">size</v-select></p>\n      <p><button class=\"btn btn-info\" @click=\"$broadcast('show::spinner')\">show spinner</button></p>\n      <div><spinner id=\"spinner-box\" :size=\"size\" :fixed=\"fixed\" text=\"I will close in 2 secs\"></spinner></div>\n    </div>\n    <doc-code language=\"markup\">\n      <spinner v-ref:spinner size=\"md\" fixed text=\"I will close in 2 secs\"></spinner>\n    </doc-code>\n    <doc-code language=\"javascript\">\n      // using ref\n      this.$refs.spinner.show()\n      this.$refs.spinner.hide()\n      // using broadcast\n      this.$broadcast('show::spinner')\n      this.$broadcast('hide::spinner')\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>size</p>\n        <p><code>String</code>, one of <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></p>\n        <p><code>md</code></p>\n        <p>The size of the spinner.</p>\n      </div>\n      <div>\n        <p>fixed</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Set to true if you want the spinner to occupy the entire window space.</p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(325)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(331)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Tabset = __webpack_require__(267);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _TabGroup = __webpack_require__(326);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tab = __webpack_require__(264);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="tabs" name="Tabs">
	//     <div class="bs-example">
	//       <tabs>
	//         <tab header="one">
	//           <p>
	//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//             consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
	//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
	//             non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//           </p>
	//         </tab>
	//         <tab header="two" disabled>
	//           ...
	//         </tab>
	//         <tab-group header="group1">
	//           <tab header="three">
	//            <p>
	//               Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
	//            </p>
	//           </tab>
	//           <tab header="four" disabled>
	//             ...
	//           </tab>
	//         </tab-group>
	//         <tab-group header="group2" disabled>
	//           <tab header="five">
	//             ...
	//           </tab>
	//         </tab-group>
	//       </tabs>
	//     </div>
	//     <doc-code language="markup">
	//       <tabs>
	//         <tab header="one">
	//           ...
	//         </tab>
	//         <tab header="two" disabled>
	//           ...
	//         </tab>
	//         <tab-group header="group1">
	//           <tab header="three">
	//             ...
	//           </tab>
	//           <tab header="four" disabled>
	//             ...
	//           </tab>
	//         </tab-group>
	//         <tab-group header="group2">
	//           <tab header="five">
	//             ...
	//           </tab>
	//         </tab-group>
	//       </tabs>
	//     </doc-code>
	//     <doc-code language="javascript">
	//       components: {
	//         tabs: VueStrap.tabset,
	//         tabGroup: VueStrap.tabGroup,
	//         tab: VueStrap.tab
	//       }
	//     </doc-code>
	//     <doc-table name="Tabset (container)">
	//       <div>
	//         <p>active</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>Active tab index (0 based)</p>
	//       </div>
	//     </doc-table>
	//     <doc-table name="TabGroup (dropdown)">
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether tabgroup is clickable.</p>
	//       </div>
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Group Title</p>
	//       </div>
	//     </doc-table>
	//     <doc-table name="Tab (element)">
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Tab Title</p>
	//       </div>
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Whether tab is clickable and can be activated.</p>
	//       </div>
	//     </doc-table>
	//   </doc-section>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    tabGroup: _TabGroup2.default,
	    tabs: _Tabset2.default,
	    tab: _Tab2.default
	  }
	};
	// </script>

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(327)
	module.exports = __webpack_require__(329)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(330)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-43a4c05d&file=TabGroup.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/template-rewriter.js?id=_v-43a4c05d&file=TabGroup.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(328);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-43a4c05d&file=TabGroup.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-43a4c05d&file=TabGroup.vue&scoped=true!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-tabs[_v-43a4c05d] {\n  margin-bottom: 15px;\n}", ""]);
	
	// exports


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	exports.default = {
	  props: {
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    header: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      tabs: [],
	      show: false
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return ~this.tabs.indexOf(this._tabset.show);
	    }
	  },
	  created: function created() {
	    this._tabgroup = true;
	    var tabset = this.$parent && this.$parent._tabset === true ? this.$parent : {};
	    if (this.$parent && this.$parent._tabgroup) {
	      console.error('Can\'t nest tabgroups.');
	    }
	    while (tabset && !tabset._tabset && tabset.$parent) {
	      tabset = tabset.$parent;
	    }
	    if (!tabset._tabset) {
	      this._tabset = {};
	      this.show = true;
	      console.warn('Warning: tabgroup depend on tabset to work properly.');
	    } else {
	      this._tabset = tabset;
	    }
	  },
	
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  }
	};
	// </script>
	
	// <style scoped>
	// .nav-tabs {
	//   margin-bottom: 15px;
	// }
	// </style>
	// <template><slot></slot></template>
	
	// <script>

/***/ },
/* 330 */
/***/ function(module, exports) {

	module.exports = "<slot _v-43a4c05d=\"\"></slot>";

/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"tabs\" name=\"Tabs\">\n    <div class=\"bs-example\">\n      <tabs>\n        <tab header=\"one\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n        </tab>\n        <tab header=\"two\" disabled>\n          ...\n        </tab>\n        <tab-group header=\"group1\">\n          <tab header=\"three\">\n           <p>\n              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\n           </p>\n          </tab>\n          <tab header=\"four\" disabled>\n            ...\n          </tab>\n        </tab-group>\n        <tab-group header=\"group2\" disabled>\n          <tab header=\"five\">\n            ...\n          </tab>\n        </tab-group>\n      </tabs>\n    </div>\n    <doc-code language=\"markup\">\n      <tabs>\n        <tab header=\"one\">\n          ...\n        </tab>\n        <tab header=\"two\" disabled>\n          ...\n        </tab>\n        <tab-group header=\"group1\">\n          <tab header=\"three\">\n            ...\n          </tab>\n          <tab header=\"four\" disabled>\n            ...\n          </tab>\n        </tab-group>\n        <tab-group header=\"group2\">\n          <tab header=\"five\">\n            ...\n          </tab>\n        </tab-group>\n      </tabs>\n    </doc-code>\n    <doc-code language=\"javascript\">\n      components: {\n        tabs: VueStrap.tabset,\n        tabGroup: VueStrap.tabGroup,\n        tab: VueStrap.tab\n      }\n    </doc-code>\n    <doc-table name=\"Tabset (container)\">\n      <div>\n        <p>active</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>Active tab index (0 based)</p>\n      </div>\n    </doc-table>\n    <doc-table name=\"TabGroup (dropdown)\">\n      <div>\n        <p>disabled</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Whether tabgroup is clickable.</p>\n      </div>\n      <div>\n        <p>header</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>Group Title</p>\n      </div>\n    </doc-table>\n    <doc-table name=\"Tab (element)\">\n      <div>\n        <p>header</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Tab Title</p>\n      </div>\n      <div>\n        <p>disabled</p>\n        <p><code>Boolean</code></p>\n        <p>false</p>\n        <p>Whether tab is clickable and can be activated.</p>\n      </div>\n    </doc-table>\n  </doc-section>";

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(333)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(334)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Input = __webpack_require__(259);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Tooltip = __webpack_require__(181);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    bsInput: _Input2.default,
	    tooltip: _Tooltip2.default
	  },
	  data: function data() {
	    return {
	      text: 'Lorem ipsum dolor sit amet',
	      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod'
	    };
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="tooltip" name="Tooltip">
	//     <div class="bs-example">
	//       <tooltip v-for="place in ['top','left','right','bottom']" header content="Lorem ipsum dolor sit amet" :placement="place">
	//         <button class="btn btn-default">Popover on {{place}}</button>
	//       </tooltip>
	//       <hr>
	//       <h4>Trigger</h4>
	//       <p>
	//         <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="click">
	//           <button class="btn btn-default">Click</button>
	//         </tooltip>
	//         <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="contextmenu">
	//           <button class="btn btn-default">Contextmenu (right click)</button>
	//         </tooltip>
	//       </p>
	//       <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
	//         <bs-input type="text" placeholder="Focus"></bs-input>
	//       </tooltip>
	//     </div>
	//     <doc-code language="markup">
	//       <tooltip effect="scale" placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default">tooltip on bottom</button>
	//       </tooltip>
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>trigger</p>
	//         <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>
	//         <p><code>click</code></p>
	//         <p>How the tooltip is triggered.</p>
	//       </div>
	//       <div>
	//         <p>effect</p>
	//         <p><code>String</code>, one of <code>scale</code> <code>fadein</code></p>
	//         <p><code>scale</code></p>
	//         <p></p>
	//       <div>
	//         <p>content</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>, one of <code>top</code>
	//         <code>left</code>
	//         <code>right</code>
	//         <code>bottom</code></p>
	//         <p></p>
	//         <p>How to position the tooltip.</p>
	//       </div>
	//     </doc-table>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 334 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"tooltip\" name=\"Tooltip\">\n    <div class=\"bs-example\">\n      <tooltip v-for=\"place in ['top','left','right','bottom']\" header content=\"Lorem ipsum dolor sit amet\" :placement=\"place\">\n        <button class=\"btn btn-default\">Popover on {{place}}</button>\n      </tooltip>\n      <hr>\n      <h4>Trigger</h4>\n      <p>\n        <tooltip effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"click\">\n          <button class=\"btn btn-default\">Click</button>\n        </tooltip>\n        <tooltip effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"contextmenu\">\n          <button class=\"btn btn-default\">Contextmenu (right click)</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <bs-input type=\"text\" placeholder=\"Focus\"></bs-input>\n      </tooltip>\n    </div>\n    <doc-code language=\"markup\">\n      <tooltip effect=\"scale\" placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default\">tooltip on bottom</button>\n      </tooltip>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>trigger</p>\n        <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>\n        <p><code>click</code></p>\n        <p>How the tooltip is triggered.</p>\n      </div>\n      <div>\n        <p>effect</p>\n        <p><code>String</code>, one of <code>scale</code> <code>fadein</code></p>\n        <p><code>scale</code></p>\n        <p></p>\n      <div>\n        <p>content</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p></p>\n      </div>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></p>\n        <p></p>\n        <p>How to position the tooltip.</p>\n      </div>\n    </doc-table>\n  </div>\n</template>";

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(336)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(342)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue","-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./typeaheadDocs.vue"], function () {
	var newOptions = require("-!babel!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./typeaheadDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(135);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(138);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(129);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Typeahead = __webpack_require__(337);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Tooltip = __webpack_require__(181);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    typeahead: _Typeahead2.default,
	    tooltip: _Tooltip2.default
	  },
	  partials: {},
	  data: function data() {
	    return {
	      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	      'asyncTemplate': '{{ item.formatted_address }}',
	      'githubTemplate': '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
	    };
	  },
	
	  methods: {
	    googleCallback: function googleCallback(items, targetVM) {
	      targetVM.reset();
	      targetVM.value = items.formatted_address;
	    },
	    githubCallback: function githubCallback(items) {
	      window.open(items.html_url, '_blank');
	    }
	  }
	};
	// </script>
	// <template>
	//   <doc-section id="typeahead" name="Typeahead">
	//     <div class="bs-example">
	//       <h4>
	//         Static arrays
	//       </h4>
	//       <typeahead
	//         :data="USstate"
	//         placeholder="USA states"
	//       ></typeahead>
	//       <hr>
	//       <h4>
	//       Asynchronous results
	//       <tooltip trigger="click" content="The suggestions via a Google Map API, are you behind a FireWall?" placement="top">
	//         <small style="cursor:pointer">(not working?)</small>
	//       </tooltip>
	//       </h4>
	//       <typeahead
	//         placeholder="CCCAddress, async via maps.googleapis.com"
	//         key="results"
	//         async="https://maps.googleapis.com/maps/api/geocode/json?address="
	//         template-name="async"
	//         :template="asyncTemplate"
	//         :on-hit="googleCallback"
	//       ></typeahead>
	//       <hr>
	//       <h4>
	//       Custom templates for results
	//       </h4>
	//       <typeahead
	//         placeholder="Github users, async via api.github.com"
	//         key="items"
	//         async="https://api.github.com/search/users?q="
	//         template-name="github"
	//         :template="githubTemplate"
	//         :on-hit="githubCallback"
	//       ></typeahead>
	//     </div>
	//     <doc-code language="markup">
	//       <h4>Static arrays</h4>
	//       <typeahead
	//         :data="USstate"
	//         placeholder="USA states">
	//       </typeahead>
	
	//       <h4>Asynchronous results</h4>
	//         <typeahead
	//           placeholder="Address, async via maps.googleapis.com"
	//           key="results"
	//           async="https://maps.googleapis.com/maps/api/geocode/json?address="
	//           template-name="async"
	//           :template="asyncTemplate"
	//           :on-hit="googleCallback">
	//       </typeahead>
	
	//       <h4>Custom templates for results</h4>
	//         <typeahead
	//           placeholder="Github users, async via api.github.com"
	//           key="items"
	//           async="https://api.github.com/search/users?q="
	//           template-name="typeahead-github-template"
	//           :template="githubTemplate"
	//           :on-hit="githubCallback">
	//       </typeahead>
	//     </doc-code>
	//     <doc-code language="javascript">
	//       new Vue {
	//         components: {
	//           typeahead
	//         },
	//         data() {
	//           return {
	//             USstate: ['Alabama', 'Alaska', 'Arizona',...],
	//             asyncTemplate: '{{ item.formatted_address }}',
	//             githubTemplate: '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
	//           }
	//         },
	//         methods: {
	//           googleCallback(items, targetVM) {
	//             const that = targetVM;
	//             that.reset()
	//             that.value = items.formatted_address
	//           },
	//           githubCallback(items) {
	//             window.open(items.html_url, '_blank')
	//           }
	//         }
	//       }
	//     </doc-code>
	//     <doc-table>
	//       <div>
	//         <p>value</p>
	//         <p><code>String</code></p>
	//         <p><code>''</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>data</p>
	//         <p><code>Array</code></p>
	//         <p></p>
	//         <p>The local data source for suggestions. Expected to be a primitive array.</p>
	//       </div>
	//       <div>
	//         <p>async</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</p>
	//       </div>
	//       <div>
	//         <p>delay</p>
	//         <p><code>Number</code></p>
	//         <p><code>200</code></p>
	//         <p>Delay before calling async data while typing.</p>
	//       </div>
	//       <div>
	//         <p>limit</p>
	//         <p><code>Number</code></p>
	//         <p><code>8</code></p>
	//         <p>The max number of suggestions to be displayed.</p>
	//       </div>
	//       <div>
	//         <p>key</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</p>
	//       </div>
	//       <div>
	//         <p>match-case</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Case sensitive for suggestions.</p>
	//       </div>
	//       <div>
	//         <p>match-start</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Match only against start of suggestions. E.g. if true, "a" matches "ab" but not "ba".</p>
	//       </div>
	//       <div>
	//         <p>on-hit</p>
	//         <p><code>Function</code></p>
	//         <p></p>
	//         <p>A callback function when you click or hit return on an item.</p>
	//       </div>
	//       <div>
	//         <p>template</p>
	//         <p><code>String</code></p>
	//         <p><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></p>
	//         <p>Used to render suggestion.</p>
	//       </div>
	//     </doc-table>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(338)
	module.exports = __webpack_require__(340)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(341)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue","-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue"], function () {
	var newOptions = require("-!babel!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(339);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-cc3fd338&file=Typeahead.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!../node_modules/.0.21.0@css-loader/index.js!../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-cc3fd338&file=Typeahead.vue!../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-menu > li > a {\n  cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(124);
	
	var Vue = window.Vue; // <template>
	//   <div style="position: relative"
	//        v-bind:class="{'open':showDropdown}"
	//   >
	//     <input type="text" class="form-control"
	//       :placeholder="placeholder"
	//       autocomplete="off"
	//       v-model="value"
	//       @input="update"
	//       @keydown.up="up"
	//       @keydown.down="down"
	//       @keydown.enter= "hit"
	//       @keydown.esc="reset"
	//       @blur="showDropdown = false"
	//     />
	//     <ul class="dropdown-menu" v-el:dropdown>
	//       <li v-for="item in items" v-bind:class="{'active': isActive($index)}">
	//         <a @mousedown.prevent="hit" @mousemove="setActive($index)">
	//           <partial :name="templateName"></partial>
	//         </a>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	
	// <script>
	
	var _DELAY_ = 200;
	
	exports.default = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  partials: {
	    default: '<span v-html="item | highlight value"></span>'
	  },
	  props: {
	    value: {
	      twoWay: true,
	      type: String,
	      default: ''
	    },
	    data: {
	      type: Array
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    async: {
	      type: String
	    },
	    template: {
	      type: String
	    },
	    templateName: {
	      type: String,
	      default: 'default'
	    },
	    key: {
	      type: String,
	      default: null
	    },
	    matchCase: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    matchStart: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    onHit: {
	      type: Function,
	      default: function _default(items) {
	        this.reset();
	        this.value = items;
	      }
	    },
	    placeholder: {
	      type: String
	    },
	    delay: {
	      type: Number,
	      default: _DELAY_,
	      coerce: _utils.coerce.number
	    }
	  },
	  data: function data() {
	    return {
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: []
	    };
	  },
	
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this = this;
	
	      if (this.data) {
	        return this.data.filter(function (value) {
	          value = _this.matchCase ? value : value.toLowerCase();
	          var query = _this.matchCase ? _this.value : _this.value.toLowerCase();
	          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  ready: function ready() {
	    // register a partial:
	    if (this.templateName && this.templateName !== 'default') {
	      Vue.partial(this.templateName, this.template);
	    }
	  },
	
	  methods: {
	    update: function update() {
	      if (!this.value) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length > 0;
	      }
	      if (this.async) this.query();
	    },
	
	    query: (0, _utils.delayer)(function () {
	      var _this2 = this;
	
	      (0, _utils.getJSON)(this.async + this.value).then(function (data) {
	        _this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
	        _this2.showDropdown = _this2.items.length;
	      });
	    }, 'delay', _DELAY_),
	    reset: function reset() {
	      this.items = [];
	      this.value = '';
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.onHit(this.items[this.current], this);
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    }
	  },
	  filters: {
	    highlight: function highlight(value, phrase) {
	      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
	    }
	  }
	};
	// </script>
	
	// <style>
	// .dropdown-menu > li > a {
	//   cursor: pointer;
	// }
	// </style>

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\"\n       v-bind:class=\"{'open':showDropdown}\"\n  >\n    <input type=\"text\" class=\"form-control\"\n      :placeholder=\"placeholder\"\n      autocomplete=\"off\"\n      v-model=\"value\"\n      @input=\"update\"\n      @keydown.up=\"up\"\n      @keydown.down=\"down\"\n      @keydown.enter= \"hit\"\n      @keydown.esc=\"reset\"\n      @blur=\"showDropdown = false\"\n    />\n    <ul class=\"dropdown-menu\" v-el:dropdown>\n      <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n          <partial :name=\"templateName\"></partial>\n        </a>\n      </li>\n    </ul>\n  </div>";

/***/ },
/* 342 */
/***/ function(module, exports) {

	module.exports = "<doc-section id=\"typeahead\" name=\"Typeahead\">\n    <div class=\"bs-example\">\n      <h4>\n        Static arrays\n      </h4>\n      <typeahead\n        :data=\"USstate\"\n        placeholder=\"USA states\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Asynchronous results\n      <tooltip trigger=\"click\" content=\"The suggestions via a Google Map API, are you behind a FireWall?\" placement=\"top\">\n        <small style=\"cursor:pointer\">(not working?)</small>\n      </tooltip>\n      </h4>\n      <typeahead\n        placeholder=\"CCCAddress, async via maps.googleapis.com\"\n        key=\"results\"\n        async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n        template-name=\"async\"\n        :template=\"asyncTemplate\"\n        :on-hit=\"googleCallback\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Custom templates for results\n      </h4>\n      <typeahead\n        placeholder=\"Github users, async via api.github.com\"\n        key=\"items\"\n        async=\"https://api.github.com/search/users?q=\"\n        template-name=\"github\"\n        :template=\"githubTemplate\"\n        :on-hit=\"githubCallback\"\n      ></typeahead>\n    </div>\n    <doc-code language=\"markup\">\n      <h4>Static arrays</h4>\n      <typeahead\n        :data=\"USstate\"\n        placeholder=\"USA states\">\n      </typeahead>\n\n      <h4>Asynchronous results</h4>\n        <typeahead\n          placeholder=\"Address, async via maps.googleapis.com\"\n          key=\"results\"\n          async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n          template-name=\"async\"\n          :template=\"asyncTemplate\"\n          :on-hit=\"googleCallback\">\n      </typeahead>\n\n      <h4>Custom templates for results</h4>\n        <typeahead\n          placeholder=\"Github users, async via api.github.com\"\n          key=\"items\"\n          async=\"https://api.github.com/search/users?q=\"\n          template-name=\"typeahead-github-template\"\n          :template=\"githubTemplate\"\n          :on-hit=\"githubCallback\">\n      </typeahead>\n    </doc-code>\n    <doc-code language=\"javascript\">\n      new Vue {\n        components: {\n          typeahead\n        },\n        data() {\n          return {\n            USstate: ['Alabama', 'Alaska', 'Arizona',...],\n            asyncTemplate: '{{ item.formatted_address }}',\n            githubTemplate: '<img width=\"18px\" height=\"18px\" :src=\"item.avatar_url\"/> <span>{{item.login}}</span>'\n          }\n        },\n        methods: {\n          googleCallback(items, targetVM) {\n            const that = targetVM;\n            that.reset()\n            that.value = items.formatted_address\n          },\n          githubCallback(items) {\n            window.open(items.html_url, '_blank')\n          }\n        }\n      }\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>value</p>\n        <p><code>String</code></p>\n        <p><code>''</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>data</p>\n        <p><code>Array</code></p>\n        <p></p>\n        <p>The local data source for suggestions. Expected to be a primitive array.</p>\n      </div>\n      <div>\n        <p>async</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</p>\n      </div>\n      <div>\n        <p>delay</p>\n        <p><code>Number</code></p>\n        <p><code>200</code></p>\n        <p>Delay before calling async data while typing.</p>\n      </div>\n      <div>\n        <p>limit</p>\n        <p><code>Number</code></p>\n        <p><code>8</code></p>\n        <p>The max number of suggestions to be displayed.</p>\n      </div>\n      <div>\n        <p>key</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</p>\n      </div>\n      <div>\n        <p>match-case</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Case sensitive for suggestions.</p>\n      </div>\n      <div>\n        <p>match-start</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Match only against start of suggestions. E.g. if true, \"a\" matches \"ab\" but not \"ba\".</p>\n      </div>\n      <div>\n        <p>on-hit</p>\n        <p><code>Function</code></p>\n        <p></p>\n        <p>A callback function when you click or hit return on an item.</p>\n      </div>\n      <div>\n        <p>template</p>\n        <p><code>String</code></p>\n        <p><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></p>\n        <p>Used to render suggestion.</p>\n      </div>\n    </doc-table>\n  </div>\n</template>";

/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = "<link v-if=\"local\" rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/bootstrap/dist/css/bootstrap.css\">\n  <link v-else href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==\" crossorigin=\"anonymous\">\n  <div id=\"wrapper\">\n    <div class=\"bs-docs-header\">\n      <div class=\"container\">\n        <h1>VueStrap</h1>\n        <p>Bootstrap components built with <a target=\"_blank\" href=\"http://vuejs.org/\">Vue.js</a>.</p>\n        <p>No jQuery, bootstrap.js, or any 3rd party plugins required.</p>\n        <br>\n        <p><a class=\"btn btn-outline-inverse btn-lg\" href=\"https://github.com/yuche/vue-strap\">Code on GitHub</a></p>\n      </div>\n    </div>\n    <container>\n      <div v-el:sections class=\"col-md-9\">\n        <getting-started></getting-started>\n        <accordion-docs></accordion-docs>\n        <affix-docs></affix-docs>\n        <alert-docs></alert-docs>\n        <aside-docs></aside-docs>\n        <button-group-docs></button-group-docs>\n        <checkbox-docs></checkbox-docs>\n        <carousel-docs></carousel-docs>\n        <datepicker-docs></datepicker-docs>\n        <dropdown-docs></dropdown-docs>\n        <input-docs></input-docs>\n        <modal-docs></modal-docs>\n        <navbar-docs></navbar-docs>\n        <popover-docs></popover-docs>\n        <progressbar-docs></progressbar-docs>\n        <radio-docs></radio-docs>\n        <select-docs></select-docs>\n        <tabs-docs></tabs-docs>\n        <tooltip-docs></tooltip-docs>\n        <typeahead-docs></typeahead-docs>\n        <spinner-docs></spinner-docs>\n        <form-group-docs></form-group-docs>\n      </div>\n      <div class=\"col-md-3\">\n        <affix-sidebar></affix-sidebar>\n      </div>\n    </container>\n  </div>\n  <footer class=\"bs-docs-footer\">\n    <div class=\"container\">\n      <p>Designed and built by <a href=\"https://github.com/yuche/\">yuche</a>.</p>\n      <p>\n        Using <a href=\"http://twitter.github.com/bootstrap\" target=\"_blank\">Twitter Bootstrap</a>\n        and the <a href=\"css/docs.css\" target=\"_blank\">Bootstrap's docs styles</a> designed and built by <a href=\"http://twitter.com/mdo\" target=\"_blank\">@mdo</a>\n        and <a href=\"http://twitter.com/fat\" target=\"_blank\">@fat</a>.\n      </p>\n      <p>\n        Code licensed under <a href=\"//github.com/mgcrea/angular-strap/blob/master/LICENSE.md\" target=\"_blank\">The MIT License</a>,\n        documentation under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC BY 3.0</a>.\n      </p>\n    </div>\n  </footer>";

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(345);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?root=./docs/!./docs.css", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?root=./docs/!./docs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */\n\n\n/*\n * Bootstrap Documentation\n * Special styles for presenting Bootstrap's documentation and code examples.\n *\n * Table of contents:\n *\n * Scaffolding\n * Main navigation\n * Footer\n * Social buttons\n * Homepage\n * Page headers\n * Old docs callout\n * Ads\n * Side navigation\n * Docs sections\n * Callouts\n * Grid styles\n * Examples\n * Code snippets (highlight)\n * Responsive tests\n * Glyphicons\n * Customizer\n * MenuItem\n * Miscellaneous\n */\n\n\n/*\n * Scaffolding\n *\n * Update the basics of our documents to prep for docs content.\n */\n\nbody {\n  position: relative; /* For scrollspy */\n}\n\n/* Keep code small in tables on account of limited space */\n.table code {\n  font-size: 13px;\n  font-weight: normal;\n}\n\n/* Outline button for use within the docs */\n.btn-outline {\n  color: #563d7c;\n  background-color: transparent;\n  border-color: #563d7c;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n/* Inverted outline button (white on dark) */\n.btn-outline-inverse {\n  color: #fff;\n  background-color: transparent;\n  border-color: #cdbfe3;\n}\n.btn-outline-inverse:hover,\n.btn-outline-inverse:focus,\n.btn-outline-inverse:active {\n  color: #563d7c;\n  text-shadow: none;\n  background-color: #fff;\n  border-color: #fff;\n}\n\n/* Bootstrap \"B\" icon */\n.bs-docs-booticon {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  cursor: default;\n  background-color: #563d7c;\n  border-radius: 15%;\n}\n.bs-docs-booticon-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 28px;\n}\n.bs-docs-booticon-lg {\n  width: 144px;\n  height: 144px;\n  font-size: 108px;\n  line-height: 140px;\n}\n.bs-docs-booticon-inverse {\n  color: #563d7c;\n  background-color: #fff;\n}\n.bs-docs-booticon-outline {\n  background-color: transparent;\n  border: 1px solid #cdbfe3;\n}\n\n\n/*\n * Main navigation\n *\n * Turn the `.navbar` at the top of the docs purple.\n */\n\n.bs-docs-nav {\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0;\n}\n.bs-home-nav .bs-nav-b {\n  display: none;\n}\n.bs-docs-nav .navbar-brand,\n.bs-docs-nav .navbar-nav > li > a {\n  font-weight: 500;\n  color: #563d7c;\n}\n.bs-docs-nav .navbar-nav > li > a:hover,\n.bs-docs-nav .navbar-nav > .active > a,\n.bs-docs-nav .navbar-nav > .active > a:hover {\n  color: #463265;\n  background-color: #f9f9f9;\n}\n.bs-docs-nav .navbar-toggle .icon-bar {\n  background-color: #563d7c;\n}\n.bs-docs-nav .navbar-header .navbar-toggle {\n  border-color: #fff;\n}\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\n  background-color: #f9f9f9;\n  border-color: #f9f9f9;\n}\n\n\n/*\n * Footer\n *\n * Separated section of content at the bottom of all pages, save the homepage.\n */\n\n.bs-docs-footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 100px;\n  color: #777;\n  text-align: center;\n  border-top: 1px solid #e5e5e5;\n}\n.bs-docs-footer-links {\n  padding-left: 0;\n  margin-top: 20px;\n  color: #999;\n}\n.bs-docs-footer-links li {\n  display: inline;\n  padding: 0 2px;\n}\n.bs-docs-footer-links li:first-child {\n  padding-left: 0;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-footer p {\n    margin-bottom: 0;\n  }\n}\n\n\n/*\n * Social buttons\n *\n * Twitter and GitHub social action buttons (for homepage and footer).\n */\n\n.bs-docs-social {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.bs-docs-social-buttons {\n  display: inline-block;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bs-docs-social-buttons li {\n  display: inline-block;\n  padding: 5px 8px;\n  line-height: 1;\n}\n.bs-docs-social-buttons .twitter-follow-button {\n  width: 225px !important;\n}\n.bs-docs-social-buttons .twitter-share-button {\n  width: 98px !important;\n}\n/* Style the GitHub buttons via CSS instead of inline attributes */\n.github-btn {\n  overflow: hidden;\n  border: 0;\n}\n\n\n/*\n * Homepage\n *\n * Tweaks to the custom homepage and the masthead (main jumbotron).\n */\n\n/* Share masthead with page headers */\n.bs-docs-masthead,\n.bs-docs-header {\n  position: relative;\n  padding: 30px 15px;\n  color: #cdbfe3;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\n  background-color: #6f5499;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\n  background-repeat: repeat-x;\n}\n\n/* Masthead (headings and download button) */\n.bs-docs-masthead .bs-docs-booticon {\n  margin: 0 auto 30px;\n}\n.bs-docs-masthead h1 {\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n}\n.bs-docs-masthead .lead {\n  margin: 0 auto 30px;\n  font-size: 20px;\n  color: #fff;\n}\n.bs-docs-masthead .version {\n  margin-top: -15px;\n  margin-bottom: 30px;\n  color: #9783b9;\n}\n.bs-docs-masthead .btn {\n  width: 100%;\n  padding: 15px 30px;\n  font-size: 20px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-masthead .btn {\n    width: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .bs-docs-masthead h1 {\n    font-size: 60px;\n  }\n  .bs-docs-masthead .lead {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-masthead .lead {\n    width: 80%;\n    font-size: 30px;\n  }\n}\n\n\n/*\n * Page headers\n *\n * Jumbotron-esque headers at the top of every page that's not the homepage.\n */\n\n/* Page headers */\n.bs-docs-header {\n  margin-bottom: 40px;\n  font-size: 20px;\n}\n.bs-docs-header h1 {\n  margin-top: 0;\n  color: #fff;\n}\n.bs-docs-header p {\n  margin-bottom: 0;\n  font-weight: 300;\n  line-height: 1.4;\n}\n.bs-docs-header .container {\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-header {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    font-size: 24px;\n    text-align: left;\n  }\n  .bs-docs-header h1 {\n    font-size: 60px;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-header h1,\n  .bs-docs-header p {\n    margin-right: 380px;\n  }\n}\n\n\n/*\n * Carbon ads\n *\n * Single display ad that shows on all pages (except homepage) in page headers.\n * The hella `!important` is required for any pre-set property.\n */\n\n.carbonad {\n  width: auto !important;\n  height: auto !important;\n  padding: 20px !important;\n  margin: 30px -30px -31px !important;\n  overflow: hidden; /* clearfix */\n  font-size: 13px !important;\n  line-height: 16px !important;\n  text-align: left;\n  background: transparent !important;\n  border: solid #866ab3 !important;\n  border-width: 1px 0 !important;\n}\n.carbonad-img {\n  margin: 0 !important;\n}\n.carbonad-text,\n.carbonad-tag {\n  display: block !important;\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: 145px !important;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n.carbonad-text {\n  padding-top: 0 !important;\n}\n.carbonad-tag {\n  color: inherit !important;\n  text-align: left !important;\n}\n.carbonad-text a,\n.carbonad-tag a {\n  color: #fff !important;\n}\n.carbonad #azcarbon > img {\n  display: none; /* hide what I assume are tracking images */\n}\n\n@media (min-width: 480px) {\n  .carbonad {\n    width: 330px !important;\n    margin: 20px auto !important;\n    border-width: 1px !important;\n    border-radius: 4px;\n  }\n  .bs-docs-masthead .carbonad {\n    margin: 50px auto 0 !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .carbonad {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .carbonad {\n    position: absolute;\n    top: 0;\n    right: 15px; /* 15px instead of 0 since box-sizing */\n    width: 330px !important;\n    padding: 15px !important;\n    margin: 0 !important;\n  }\n  .bs-docs-masthead .carbonad {\n    position: static;\n  }\n}\n\n\n/*\n * Homepage featurettes\n *\n * Reasons to use Bootstrap, entries from the Expo, and more.\n */\n\n.bs-docs-featurette {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #555;\n  text-align: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n}\n.bs-docs-featurette + .bs-docs-footer {\n  margin-top: 0;\n  border-top: 0;\n}\n\n.bs-docs-featurette-title {\n  margin-bottom: 5px;\n  font-size: 30px;\n  font-weight: normal;\n  color: #333;\n}\n.half-rule {\n  width: 100px;\n  margin: 40px auto;\n}\n.bs-docs-featurette h3 {\n  margin-bottom: 5px;\n  font-weight: normal;\n  color: #333;\n}\n.bs-docs-featurette-img {\n  display: block;\n  margin-bottom: 20px;\n  color: #333;\n}\n.bs-docs-featurette-img:hover {\n  color: #428bca;\n  text-decoration: none;\n}\n.bs-docs-featurette-img img {\n  display: block;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-featurette .img-responsive {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .bs-docs-featurette {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n  .bs-docs-featurette-title {\n    font-size: 40px;\n  }\n  .bs-docs-featurette .lead {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .bs-docs-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .bs-docs-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n\n  .bs-docs-featurette .img-responsive {\n    margin-top: 0;\n  }\n}\n\n/* Featured sites */\n.bs-docs-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px;\n}\n.bs-docs-featured-sites .col-sm-3 {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n.bs-docs-featured-sites .img-responsive {\n  margin-bottom: 15px;\n}\n@media (min-width: 480px) {\n  .bs-docs-featured-sites .img-responsive {\n    margin-bottom: 0;\n  }\n}\n\n/* Example thumbnails */\n@media (max-width: 480px) {\n  .bs-examples {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n  .bs-examples > [class^=\"col-\"] {\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n}\n\n\n/*\n * Side navigation\n *\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\n * sections of docs content.\n */\n\n/* By default it's not affixed in mobile views, so undo that */\n.bs-docs-sidebar.affix {\n  position: static;\n}\n@media (min-width: 768px) {\n  .bs-docs-sidebar {\n    padding-left: 20px;\n  }\n}\n\n/* First level of nav */\n.bs-docs-sidenav {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n/* All levels of nav */\n.bs-docs-sidebar .nav > li > a {\n  display: block;\n  padding: 4px 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #999;\n}\n.bs-docs-sidebar .nav > li > a:hover,\n.bs-docs-sidebar .nav > li > a:focus {\n  padding-left: 19px;\n  color: #1D976C;\n  text-decoration: none;\n  background-color: transparent;\n  border-left: 1px solid #1D976C;\n}\n.bs-docs-sidebar .nav > .active > a,\n.bs-docs-sidebar .nav > .active:hover > a,\n.bs-docs-sidebar .nav > .active:focus > a {\n  padding-left: 18px;\n  font-weight: bold;\n  color: #1D976C;\n  background-color: transparent;\n  border-left: 2px solid #1D976C;\n}\n\n/* Nav: second level (shown on .active) */\n.bs-docs-sidebar .nav .nav {\n  display: none; /* Hide by default, but at >768px, show it */\n  padding-bottom: 10px;\n}\n.bs-docs-sidebar .nav .nav > li > a {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 30px;\n  font-size: 12px;\n  font-weight: normal;\n}\n.bs-docs-sidebar .nav .nav > li > a:hover,\n.bs-docs-sidebar .nav .nav > li > a:focus {\n  padding-left: 29px;\n}\n.bs-docs-sidebar .nav .nav > .active > a,\n.bs-docs-sidebar .nav .nav > .active:hover > a,\n.bs-docs-sidebar .nav .nav > .active:focus > a {\n  padding-left: 28px;\n  font-weight: 500;\n}\n\n/* Back to top (hidden on mobile) */\n.back-to-top,\n.bs-docs-theme-toggle {\n  display: none;\n  padding: 4px 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #999;\n}\n.back-to-top:hover,\n.bs-docs-theme-toggle:hover {\n  color: #563d7c;\n  text-decoration: none;\n}\n.bs-docs-theme-toggle {\n  margin-top: 0;\n}\n\n@media (min-width: 768px) {\n  .back-to-top,\n  .bs-docs-theme-toggle {\n    display: block;\n  }\n}\n\n/* Show and affix the side nav when space allows it */\n@media (min-width: 992px) {\n  .bs-docs-sidebar .nav > .active > ul {\n    display: block;\n  }\n  /* Widen the fixed sidebar */\n  .bs-docs-sidebar.affix,\n  .bs-docs-sidebar.affix-bottom {\n    width: 213px;\n  }\n  .bs-docs-sidebar.affix {\n    position: fixed; /* Undo the static from mobile first approach */\n    top: 20px;\n  }\n  .bs-docs-sidebar.affix-bottom {\n    position: absolute; /* Undo the static from mobile first approach */\n  }\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  /* Widen the fixed sidebar again */\n  .bs-docs-sidebar.affix-bottom,\n  .bs-docs-sidebar.affix {\n    width: 263px;\n  }\n}\n\n\n/*\n * Docs sections\n *\n * Content blocks for each component or feature.\n */\n\n/* Space things out */\n.bs-docs-section {\n  margin-bottom: 60px;\n}\n.bs-docs-section:last-child {\n  margin-bottom: 0;\n}\n\nh1[id] {\n  padding-top: 20px;\n  margin-top: 0;\n}\n\n\n/*\n * Callouts\n *\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\n * Requires a base and modifier class.\n */\n\n/* Common styles for all types */\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n}\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n  margin-bottom: 0;\n}\n.bs-callout code {\n  border-radius: 3px;\n}\n\n/* Tighten up space between multiple callouts */\n.bs-callout + .bs-callout {\n  margin-top: -5px;\n}\n\n/* Variations */\n.bs-callout-danger {\n  border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n  color: #d9534f;\n}\n.bs-callout-warning {\n  border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n  color: #f0ad4e;\n}\n.bs-callout-info {\n  border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n  color: #5bc0de;\n}\n\n\n/*\n * Color swatches\n *\n * Color swatches and associated values for our grayscale and brand colors.\n */\n\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden; /* clearfix */\n}\n.color-swatch {\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin: 0 5px;\n  border-radius: 3px;\n}\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n/* Framework colors */\n.color-swatches .gray-darker {\n  background-color: #222;\n}\n.color-swatches .gray-dark {\n  background-color: #333;\n}\n.color-swatches .gray {\n  background-color: #555;\n}\n.color-swatches .gray-light {\n  background-color: #999;\n}\n.color-swatches .gray-lighter {\n  background-color: #eee;\n}\n.color-swatches .brand-primary {\n  background-color: #428bca;\n}\n.color-swatches .brand-success {\n  background-color: #5cb85c;\n}\n.color-swatches .brand-warning {\n  background-color: #f0ad4e;\n}\n.color-swatches .brand-danger {\n  background-color: #d9534f;\n}\n.color-swatches .brand-info {\n  background-color: #5bc0de;\n}\n\n/* Docs colors */\n.color-swatches .bs-purple {\n  background-color: #563d7c;\n}\n.color-swatches .bs-purple-light {\n  background-color: #c7bfd3;\n}\n.color-swatches .bs-purple-lighter {\n  background-color: #e5e1ea;\n}\n.color-swatches .bs-gray {\n  background-color: #f9f9f9;\n}\n\n\n/*\n * Team members\n *\n * Avatars, names, and usernames for core team.\n */\n\n.bs-team .team-member {\n  line-height: 32px;\n  color: #555;\n}\n.bs-team .team-member:hover {\n  color: #333;\n  text-decoration: none;\n}\n.bs-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 20px;\n  margin-top: 6px;\n}\n.bs-team img {\n  float: left;\n  width: 32px;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n\n\n/*\n * Grid examples\n *\n * Highlight the grid columns within the docs so folks can see their padding,\n * alignment, sizing, etc.\n */\n\n.show-grid {\n  margin-bottom: 15px;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #eee;\n  background-color: rgba(86,61,124,.15);\n  border: 1px solid #ddd;\n  border: 1px solid rgba(86,61,124,.2);\n}\n\n\n/*\n * Examples\n *\n * Isolated sections of example content for each component or feature. Usually\n * followed by a code snippet.\n */\n\n.bs-example {\n  position: relative;\n  padding: 45px 15px 15px;\n  margin: 0 -15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n}\n/* Echo out a label for the example */\n.bs-example:after {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #959595;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  content: \"Example\";\n}\n\n/* Tweak display of the code snippets when following an example */\n.bs-example + .highlight {\n  margin: -15px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n\n/* Make the examples and snippets not full-width */\n@media (min-width: 768px) {\n  .bs-example {\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #fff;\n    border-color: #ddd;\n    border-width: 1px;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .bs-example + .highlight {\n    margin-top: -16px;\n    margin-right: 0;\n    margin-left: 0;\n    border-width: 1px;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n}\n\n/* Undo width of container */\n.bs-example .container {\n  width: auto;\n}\n\n/* Tweak content of examples for optimum awesome */\n.bs-example > p:last-child,\n.bs-example > ul:last-child,\n.bs-example > ol:last-child,\n.bs-example > blockquote:last-child,\n.bs-example > .form-control:last-child,\n.bs-example > .table:last-child,\n.bs-example > .navbar:last-child,\n.bs-example > .jumbotron:last-child,\n.bs-example > .alert:last-child,\n.bs-example > .panel:last-child,\n.bs-example > .list-group:last-child,\n.bs-example > .well:last-child,\n.bs-example > .progress:last-child,\n.bs-example > .table-responsive:last-child > .table {\n  margin-bottom: 0;\n}\n.bs-example > p > .close {\n  float: none;\n}\n\n/* Typography */\n.bs-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle;\n}\n.bs-example-type .table td {\n  padding: 15px 0;\n  border-color: #eee;\n}\n.bs-example-type .table tr:first-child td {\n  border-top: 0;\n}\n.bs-example-type h1,\n.bs-example-type h2,\n.bs-example-type h3,\n.bs-example-type h4,\n.bs-example-type h5,\n.bs-example-type h6 {\n  margin: 0;\n}\n\n/* Contextual background colors */\n.bs-example-bg-classes p {\n  padding: 15px;\n}\n\n/* Images */\n.bs-example > .img-circle,\n.bs-example > .img-rounded,\n.bs-example > .img-thumbnail {\n  margin: 5px;\n}\n\n/* Tables */\n.bs-example > .table-responsive > .table {\n  background-color: #fff;\n}\n\n/* Buttons */\n.bs-example > .btn,\n.bs-example > .btn-group {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.bs-example > .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n/* Forms */\n.bs-example-control-sizing select,\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\n  margin-top: 10px;\n}\n.bs-example-form .input-group {\n  margin-bottom: 10px;\n}\n.bs-example > textarea.form-control {\n  resize: vertical;\n}\n\n/* List groups */\n.bs-example > .list-group {\n  max-width: 400px;\n}\n\n/* Navbars */\n.bs-example .navbar:last-child {\n  margin-bottom: 0;\n}\n.bs-navbar-top-example,\n.bs-navbar-bottom-example {\n  z-index: 1;\n  padding: 0;\n  overflow: hidden; /* cut the drop shadows off */\n}\n.bs-navbar-top-example .navbar-header,\n.bs-navbar-bottom-example .navbar-header {\n  margin-left: 0;\n}\n.bs-navbar-top-example .navbar-fixed-top,\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0;\n}\n.bs-navbar-top-example {\n  padding-bottom: 45px;\n}\n.bs-navbar-top-example:after {\n  top: auto;\n  bottom: 15px;\n}\n.bs-navbar-top-example .navbar-fixed-top {\n  top: -1px;\n}\n.bs-navbar-bottom-example {\n  padding-top: 45px;\n}\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  bottom: -1px;\n}\n.bs-navbar-bottom-example .navbar {\n  margin-bottom: 0;\n}\n@media (min-width: 768px) {\n  .bs-navbar-top-example .navbar-fixed-top,\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\n    position: absolute;\n  }\n}\n\n/* Pagination */\n.bs-example .pagination {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/* Pager */\n.bs-example > .pager {\n  margin-top: 0;\n}\n\n/* Example modals */\n.bs-example-modal {\n  background-color: #f5f5f5;\n}\n.bs-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block;\n}\n.bs-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n.custom-modal {\n  width: 90%;\n}\n\n/* Example dropdowns */\n.bs-example > .dropdown > .dropdown-toggle {\n  float: left;\n}\n.bs-example > .dropdown > .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n/* Example tabbable tabs */\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px;\n}\n\n/* Tooltips */\n.bs-example-tooltips {\n  text-align: center;\n}\n.bs-example-tooltips > .btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/* Popovers */\n.bs-example-popover {\n  padding-bottom: 24px;\n  background-color: #f9f9f9;\n}\n.bs-example-popover .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 20px;\n}\n\n/* Scrollspy demo on fixed height div */\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: 10px;\n  overflow: auto;\n}\n\n/* MenuItem */\n.bs-example .dropdown-menu.open {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n\n/*\n * Code snippets\n *\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\n */\n\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  word-break: normal;\n  word-wrap: nowrap;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.highlight pre code {\n  font-size: inherit;\n  color: #333; /* Effectively the base text color */\n}\n.highlight pre code:first-child {\n  display: inline-block;\n  padding-right: 45px;\n}\n\n\n/*\n * Responsive tests\n *\n * Generate a set of tests to show the responsive utilities in action.\n */\n\n/* Responsive (scrollable) doc tables */\n.table-responsive .highlight pre {\n  white-space: normal;\n}\n\n/* Utility classes table  */\n.bs-table th small,\n.responsive-utilities th small {\n  display: block;\n  font-weight: normal;\n  color: #999;\n}\n.responsive-utilities tbody th {\n  font-weight: normal;\n}\n.responsive-utilities td {\n  text-align: center;\n}\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8 !important;\n}\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9 !important;\n}\n\n/* Responsive tests */\n.responsive-utilities-test {\n  margin-top: 5px;\n}\n.responsive-utilities-test .col-xs-6 {\n  margin-bottom: 10px;\n}\n.responsive-utilities-test span {\n  display: block;\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.1;\n  text-align: center;\n  border-radius: 4px;\n}\n.visible-on .col-xs-6 .hidden-xs,\n.visible-on .col-xs-6 .hidden-sm,\n.visible-on .col-xs-6 .hidden-md,\n.visible-on .col-xs-6 .hidden-lg,\n.hidden-on .col-xs-6 .hidden-xs,\n.hidden-on .col-xs-6 .hidden-sm,\n.hidden-on .col-xs-6 .hidden-md,\n.hidden-on .col-xs-6 .hidden-lg {\n  color: #999;\n  border: 1px solid #ddd;\n}\n.visible-on .col-xs-6 .visible-xs-block,\n.visible-on .col-xs-6 .visible-sm-block,\n.visible-on .col-xs-6 .visible-md-block,\n.visible-on .col-xs-6 .visible-lg-block,\n.hidden-on .col-xs-6 .visible-xs-block,\n.hidden-on .col-xs-6 .visible-sm-block,\n.hidden-on .col-xs-6 .visible-md-block,\n.hidden-on .col-xs-6 .visible-lg-block {\n  color: #468847;\n  background-color: #dff0d8;\n  border: 1px solid #d6e9c6;\n}\n\n\n/*\n * Glyphicons\n *\n * Special styles for displaying the icons and their classes in the docs.\n */\n\n.bs-glyphicons {\n  margin: 0 -10px 20px;\n  overflow: hidden;\n}\n.bs-glyphicons-list {\n  padding-left: 0;\n  list-style: none;\n}\n.bs-glyphicons li {\n  float: left;\n  width: 25%;\n  height: 115px;\n  padding: 10px;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff;\n}\n.bs-glyphicons .glyphicon {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.bs-glyphicons .glyphicon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word; /* Help out IE10+ with class names */\n}\n.bs-glyphicons li:hover {\n  color: #fff;\n  background-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .bs-glyphicons {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .bs-glyphicons li {\n    width: 12.5%;\n    font-size: 12px;\n  }\n}\n\n\n/*\n * Customizer\n *\n * Since this is so form control heavy, we have quite a few styles to customize\n * the display of inputs, headings, and more. Also included are all the download\n * buttons and actions.\n */\n\n.bs-customizer .toggle {\n  float: right;\n  margin-top: 25px;\n}\n\n/* Headings and form contrls */\n.bs-customizer label {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #555;\n}\n.bs-customizer h2 {\n  padding-top: 30px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-customizer h3 {\n  margin-bottom: 0;\n}\n.bs-customizer h4 {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.bs-customizer .bs-callout h4 {\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\n  margin-bottom: 5px;\n}\n.bs-customizer input[type=\"text\"] {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  background-color: #fafafa;\n}\n.bs-customizer .help-block {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n/* For the variables, use regular weight */\n#less-section label {\n  font-weight: normal;\n}\n\n.bs-customizer-input {\n  float: left;\n  width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/* Downloads */\n.bs-customize-download .btn-outline {\n  padding: 20px;\n}\n\n/* Error handling */\n.bs-customizer-alert {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  padding: 15px 0;\n  color: #fff;\n  background-color: #d9534f;\n  border-bottom: 1px solid #b94441;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n}\n.bs-customizer-alert .close {\n  margin-top: -4px;\n  font-size: 24px;\n}\n.bs-customizer-alert p {\n  margin-bottom: 0;\n}\n.bs-customizer-alert .glyphicon {\n  margin-right: 5px;\n}\n.bs-customizer-alert pre {\n  margin: 10px 0 0;\n  color: #fff;\n  background-color: #a83c3a;\n  border-color: #973634;\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n}\n\n\n/*\n * Brand guidelines\n *\n * Extra styles for displaying wordmarks, logos, etc.\n */\n\n/* Logo series wrapper */\n.bs-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 15px;\n  overflow: hidden;\n  color: #563d7c;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\n\n/* Individual items */\n.bs-brand-item {\n  padding: 60px 0;\n  text-align: center;\n}\n.bs-brand-item + .bs-brand-item {\n  border-top: 1px solid #fff;\n}\n.bs-brand-logos .inverse {\n  color: #fff;\n  background-color: #563d7c;\n}\n.bs-brand-item .svg {\n  width: 144px;\n  height: 144px;\n}\n\n/* Heading content within */\n.bs-brand-item h1,\n.bs-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bs-brand-item .bs-docs-booticon {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Make the icons stand out on what is/isn't okay */\n.bs-brand-item .glyphicon {\n  width: 30px;\n  height: 30px;\n  margin: 10px auto -10px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%;\n}\n.bs-brand-item .glyphicon-ok {\n  background-color: #5cb85c;\n}\n.bs-brand-item .glyphicon-remove {\n  background-color: #d9534f;\n}\n\n@media (min-width: 768px) {\n  .bs-brand-item {\n    display: table-cell;\n    width: 1%;\n  }\n  .bs-brand-item + .bs-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff;\n  }\n  .bs-brand-item h1 {\n    font-size: 60px;\n  }\n}\n\n\n/*\n * Miscellaneous\n *\n * Odds and ends for optimum docs display.\n */\n\n/* Examples gallery: space out content better */\n.bs-examples .thumbnail {\n  margin-bottom: 10px;\n}\n.bs-examples h4 {\n  margin-bottom: 5px;\n}\n.bs-examples p {\n  margin-bottom: 20px;\n}\n\n/* Pseudo :focus state for showing how it looks in the docs */\n#focusedInput {\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\n  border-color: rgba(82,168,236,.8);\n  outline: 0;\n  outline: thin dotted \\9; /* IE6-9 */\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\n}\n\n\n/*\n * ZeroClipboard styles\n */\n\n.zero-clipboard {\n  position: relative;\n  display: none;\n}\n.btn-clipboard {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  display: block;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #e1e1e8;\n  border-radius: 0 4px 0 4px;\n}\n.btn-clipboard-hover {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .zero-clipboard {\n    display: block;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(347);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.21.0@css-loader/index.js?root=./docs/!./style.css", function() {
				var newContent = require("!!../../node_modules/.0.21.0@css-loader/index.js?root=./docs/!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * React-Bootstrap Documentation\n * Special styles for presenting react-bootstrap's documentation and code examples.\n * Based on the Bootstrap Documentation styles and overridden as necessary.\n */\n\nbody {\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\n}\n\n.bs-docs-section h1 {\n  font-size: 42px\n}\n\n.bs-docs-nav .navbar-nav > li > a {\n  color: #333;\n}\n.bs-docs-footer {\n  padding-top: 20px;\n  text-align: left;\n}\n.bs-docs-nav .navbar-collapse {\n  overflow: hidden;\n}\n.bs-docs-nav {\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\n}\n\n.bs-docs-header p {\n  font-weight: lighter;\n}\n\n\n.bs-docs-header a {\n  color: white;\n  font-weight: normal;\n}\n.btn-outline-inverse {\n  border-color: white;\n  transition: color .15s ease;\n}\n.bs-docs-header a:hover,\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\n.bs-docs-nav .navbar-brand {\n  color: #1D976C;\n}\n\n.bs-docs-masthead, .bs-docs-header {\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\n\n  filter: none;\n  color: #e9e9e9;\n}\n\n.bs-docs-masthead {\n  margin-bottom: 20px;\n}\n\n.bs-docs-header h1 {\n  color: #ffffff;\n}\n\n.bs-docs-header p {\n  color: #ffffff;\n}\n\na.back-to-top {\n  font-size: 13px;\n  margin-top: 0;\n}\n\n.bs-docs-sidebar .nav>li>a {\n  color: #767676;\n  font-size: 14px;\n}\n\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\n  color: #42b983;\n  border-left: 1px solid #42b983;\n}\n\n.back-to-top:hover {\n  color: #42b983;\n}\n\n\n.CodeMirror, .CodeMirror-scroll {\n  height: auto;\n}\n\n.bs-example .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n.bs-example .static-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n  bottom: auto;\n  z-index: 1;\n  display: block;\n}\n\n.bs-docs-booticon {\n  background-size: contain;\n  border: 0;\n  width: 200px;\n  height: 200px;\n}\n\n.bs-example-popover-contained {\n  height: 200px;\n}\n\n.bs-example-popover-contained > div {\n  position: relative;\n}\n\n.bs-example-popover-scroll {\n  overflow: scroll;\n  height: 200px;\n}\n\n.bs-example-popover-scroll > div {\n  position: relative;\n  padding: 100px 0;\n}\n\n.playground {\n  margin-bottom: 36px;\n}\n\n.bs-example {\n  margin-bottom: 0;\n}\n\n.bs-example + .highlight {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom-right-radius: 0;\n}\n\n.code-toggle {\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: -1px;\n  background: #fafafa;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid #e1e1e8;\n  border-top: none;\n  padding: 4px 8px;\n}\n\n@media (min-width: 768px) {\n  .code-toggle {\n    background: #fff;\n  }\n}\n\n.code-toggle.open {\n  background: #f8f5ec;\n}\n\n/* Minimal CSS Needed for contained modals */\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n.prop-table {\n  background-color: white;\n}\n\n.bs-example.tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px;\n\n}\n\n.bs-example .super-colors {\n  background: -moz-linear-gradient( top ,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(255, 255, 0, 1) 15%,\n      rgba(0, 255, 0, 1) 30%,\n      rgba(0, 255, 255, 1) 50%,\n      rgba(0, 0, 255, 1) 65%,\n      rgba(255, 0, 255, 1) 80%,\n      rgba(255, 0, 0, 1) 100%);\n  background: -webkit-gradient(linear,  left top,  left bottom,\n      color-stop(0%, rgba(255, 0, 0, 1)),\n      color-stop(15%, rgba(255, 255, 0, 1)),\n      color-stop(30%, rgba(0, 255, 0, 1)),\n      color-stop(50%, rgba(0, 255, 255, 1)),\n      color-stop(65%, rgba(0, 0, 255, 1)),\n      color-stop(80%, rgba(255, 0, 255, 1)),\n      color-stop(100%, rgba(255, 0, 0, 1)));\n}\n\n/*.bs-example .custom-menu > ul > li {\n    padding: 0 20px;\n}*/\n\n.anchor,\n.anchor:hover,\n.anchor:active,\n.anchor:focus {\n  color: black;\n  text-decoration: none;\n  position: relative;\n}\n.anchor-icon {\n  font-size: 90%;\n  padding-top: 0.1em;\n  position: absolute;\n  left: -0.8em;\n  opacity: 0;\n}\n\nh1:hover .anchor-icon,\nh1 a:focus .anchor-icon,\nh2:hover .anchor-icon,\nh2 a:focus .anchor-icon,\nh3:hover .anchor-icon,\nh3 a:focus .anchor-icon,\nh4:hover .anchor-icon,\nh4 a:focus .anchor-icon {\n  opacity: 0.5;\n}\n\n.prop-desc pre {\n  border-radius: 0;\n  border-width: 0;\n  border-left-width: 3px;\n}\n\n.prop-desc-heading {\n  margin-bottom: 10px;\n}\n\n.bs-callout {\n    padding: 20px;\n    margin: 20px 0;\n    border: 1px solid #eee;\n    border-left-width: 5px;\n    border-radius: 3px;\n}\n.bs-callout h4 {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n    margin-bottom: 0;\n}\n.bs-callout code {\n    border-radius: 3px;\n}\n.bs-callout+.bs-callout {\n    margin-top: -5px;\n}\n.bs-callout-default {\n    border-left-color: #777;\n}\n.bs-callout-default h4 {\n    color: #777;\n}\n.bs-callout-primary {\n    border-left-color: #428bca;\n}\n.bs-callout-primary h4 {\n    color: #428bca;\n}\n.bs-callout-success {\n    border-left-color: #42b983;\n}\n.bs-callout-success h4 {\n    color: #42b983;\n}\n.bs-callout-danger {\n    border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n    color: #d9534f;\n}\n.bs-callout-warning {\n    border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n    color: #f0ad4e;\n}\n.bs-callout-info {\n    border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n    color: #5bc0de;\n}\n", ""]);
	
	// exports


/***/ },
/* 348 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	var _self = (typeof window !== 'undefined')
		? window   // if in browser
		: (
			(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
		);
	
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */
	
	var Prism = (function(){
	
	// Private helper vars
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;
	
	var _ = _self.Prism = {
		util: {
			encode: function (tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},
	
			type: function (o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},
	
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},
	
			// Deep clone a language definition (e.g. to extend it)
			clone: function (o) {
				var type = _.util.type(o);
	
				switch (type) {
					case 'Object':
						var clone = {};
	
						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}
	
						return clone;
	
					case 'Array':
						// Check for existence for IE8
						return o.map && o.map(function(v) { return _.util.clone(v); });
				}
	
				return o;
			}
		},
	
		languages: {
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);
	
				for (var key in redef) {
					lang[key] = redef[key];
				}
	
				return lang;
			},
	
			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];
	
				if (arguments.length == 2) {
					insert = arguments[1];
	
					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}
	
					return grammar;
				}
	
				var ret = {};
	
				for (var token in grammar) {
	
					if (grammar.hasOwnProperty(token)) {
	
						if (token == before) {
	
							for (var newToken in insert) {
	
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}
	
						ret[token] = grammar[token];
					}
				}
	
				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});
	
				return root[inside] = ret;
			},
	
			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type, visited) {
				visited = visited || {};
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, null, visited);
						}
						else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, i, visited);
						}
					}
				}
			}
		},
		plugins: {},
	
		highlightAll: function(async, callback) {
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};
	
			_.hooks.run("before-highlightall", env);
	
			var elements = env.elements || document.querySelectorAll(env.selector);
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, env.callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1].toLowerCase();
				grammar = _.languages[language];
			}
	
			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
			// Set language on the parent, for styling
			parent = element.parentNode;
	
			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
	
			var code = element.textContent;
	
			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};
	
			_.hooks.run('before-sanity-check', env);
	
			if (!env.code || !env.grammar) {
				if (env.code) {
					env.element.textContent = env.code;
				}
				_.hooks.run('complete', env);
				return;
			}
	
			_.hooks.run('before-highlight', env);
	
			if (async && _self.Worker) {
				var worker = new Worker(_.filename);
	
				worker.onmessage = function(evt) {
					env.highlightedCode = evt.data;
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				};
	
				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
				_.hooks.run('before-insert', env);
	
				env.element.innerHTML = env.highlightedCode;
	
				callback && callback.call(element);
	
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			}
		},
	
		highlight: function (text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},
	
		tokenize: function(text, grammar, language) {
			var Token = _.Token;
	
			var strarr = [text];
	
			var rest = grammar.rest;
	
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}
	
				delete grammar.rest;
			}
	
			tokenloop: for (var token in grammar) {
				if(!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}
	
				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
	
				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						greedy = !!pattern.greedy,
						lookbehindLength = 0,
						alias = pattern.alias;
	
					if (greedy && !pattern.pattern.global) {
						// Without the global flag, lastIndex won't work
						var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
						pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
					}
	
					pattern = pattern.pattern || pattern;
	
					// Don’t cache length as it changes during the loop
					for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {
	
						var str = strarr[i];
	
						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}
	
						if (str instanceof Token) {
							continue;
						}
	
						pattern.lastIndex = 0;
	
						var match = pattern.exec(str),
						    delNum = 1;
	
						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							pattern.lastIndex = pos;
							match = pattern.exec(text);
							if (!match) {
								break;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0),
							    to = match.index + match[0].length,
							    k = i,
							    p = pos;
	
							for (var len = strarr.length; k < len && p < to; ++k) {
								p += strarr[k].length;
								// Move the index i to the element in strarr that is closest to from
								if (from >= p) {
									++i;
									pos = p;
								}
							}
	
							/*
							 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
							 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
							 */
							if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
								continue;
							}
	
							// Number of tokens to delete and replace with the new match
							delNum = k - i;
							str = text.slice(pos, p);
							match.index -= pos;
						}
	
						if (!match) {
							continue;
						}
	
						if(lookbehind) {
							lookbehindLength = match[1].length;
						}
	
						var from = match.index + lookbehindLength,
						    match = match[0].slice(lookbehindLength),
						    to = from + match.length,
						    before = str.slice(0, from),
						    after = str.slice(to);
	
						var args = [i, delNum];
	
						if (before) {
							args.push(before);
						}
	
						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);
	
						args.push(wrapped);
	
						if (after) {
							args.push(after);
						}
	
						Array.prototype.splice.apply(strarr, args);
					}
				}
			}
	
			return strarr;
		},
	
		hooks: {
			all: {},
	
			add: function (name, callback) {
				var hooks = _.hooks.all;
	
				hooks[name] = hooks[name] || [];
	
				hooks[name].push(callback);
			},
	
			run: function (name, env) {
				var callbacks = _.hooks.all[name];
	
				if (!callbacks || !callbacks.length) {
					return;
				}
	
				for (var i=0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};
	
	var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
		this.type = type;
		this.content = content;
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || "").length|0;
		this.greedy = !!greedy;
	};
	
	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}
	
		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}
	
		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};
	
		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}
	
		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}
	
		_.hooks.run('wrap', env);
	
		var attributes = Object.keys(env.attributes).map(function(name) {
			return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}).join(' ');
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
	
	};
	
	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
	 	// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code,
			    immediateClose = message.immediateClose;
	
			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	
		return _self.Prism;
	}
	
	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			if(document.readyState !== "loading") {
				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(_.highlightAll);
				} else {
					window.setTimeout(_.highlightAll, 16);
				}
			}
			else {
				document.addEventListener('DOMContentLoaded', _.highlightAll);
			}
		}
	}
	
	return _self.Prism;
	
	})();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}
	
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/i,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}
	
			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};
	
	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function(env) {
	
		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});
	
	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': {
			pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};
	
	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});
		
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}
	
	/* **********************************************
	     Begin prism-clike.js
	********************************************** */
	
	Prism.languages.clike = {
		'comment': [
			{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}
		],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};
	
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}
	
	Prism.languages.js = Prism.languages.javascript;
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function() {
	
			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};
	
			if(Array.prototype.forEach) { // Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');
	
					var language, parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}
	
					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}
	
					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}
	
					var code = document.createElement('code');
					code.className = 'language-' + language;
	
					pre.textContent = '';
	
					code.textContent = 'Loading…';
	
					pre.appendChild(code);
	
					var xhr = new XMLHttpRequest();
	
					xhr.open('GET', src, true);
	
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {
	
							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;
	
								Prism.highlightElement(code);
							}
							else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							}
							else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};
	
					xhr.send(null);
				});
			}
	
		};
	
		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 349 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	
		if (typeof self === 'undefined' || !self.Prism || !self.document) {
			return;
		}
	
		// The languages map is built automatically with gulp
		var Languages = /*languages_placeholder[*/{ "html": "HTML", "css": "CSS", "clike": "C-like", "javascript": "JavaScript", "abap": "ABAP", "actionscript": "ActionScript", "apacheconf": "Apache Configuration", "apl": "APL", "applescript": "AppleScript", "aspnet": "ASP.NET (C#)", "autoit": "AutoIt", "autohotkey": "AutoHotkey", "basic": "BASIC", "csharp": "C#", "cpp": "C++", "coffeescript": "CoffeeScript", "css-extras": "CSS Extras", "fsharp": "F#", "glsl": "GLSL", "http": "HTTP", "inform7": "Inform 7", "latex": "LaTeX", "lolcode": "LOLCODE", "matlab": "MATLAB", "mel": "MEL", "nasm": "NASM", "nginx": "nginx", "nsis": "NSIS", "objectivec": "Objective-C", "ocaml": "OCaml", "php": "PHP", "php-extras": "PHP Extras", "powershell": "PowerShell", "jsx": "React JSX", "rest": "reST (reStructuredText)", "sas": "SAS", "sass": "Sass (Sass)", "scss": "Sass (Scss)", "sql": "SQL", "typescript": "TypeScript", "vhdl": "VHDL", "vim": "vim", "wiki": "Wiki markup", "yaml": "YAML" } /*]*/;
		Prism.hooks.add('before-highlight', function (env) {
			var pre = env.element.parentNode;
			if (!pre || !/pre/i.test(pre.nodeName)) {
				return;
			}
			var language = Languages[env.language] || env.language.substring(0, 1).toUpperCase() + env.language.substring(1);
			pre.setAttribute('data-language', language);
		});
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueStrap"] = factory();
	else
		root["VueStrap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _utils = __webpack_require__(65);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	var _Scroll = __webpack_require__(68);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _Accordion = __webpack_require__(69);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Affix = __webpack_require__(73);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Alert = __webpack_require__(76);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Aside = __webpack_require__(81);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	var _ButtonGroup = __webpack_require__(85);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _Carousel = __webpack_require__(88);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Checkbox = __webpack_require__(92);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Datepicker = __webpack_require__(96);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Dropdown = __webpack_require__(100);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _FormGroup = __webpack_require__(103);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormValidator = __webpack_require__(106);
	
	var _FormValidator2 = _interopRequireDefault(_FormValidator);
	
	var _Input = __webpack_require__(109);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Modal = __webpack_require__(113);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Navbar = __webpack_require__(121);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Option = __webpack_require__(124);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Panel = __webpack_require__(127);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Popover = __webpack_require__(131);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Progressbar = __webpack_require__(136);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	var _Radio = __webpack_require__(139);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _Select = __webpack_require__(143);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Slider = __webpack_require__(147);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Spinner = __webpack_require__(150);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	var _Tab = __webpack_require__(154);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabGroup = __webpack_require__(157);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tabs = __webpack_require__(161);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _ToggleButton = __webpack_require__(165);
	
	var _ToggleButton2 = _interopRequireDefault(_ToggleButton);
	
	var _Tooltip = __webpack_require__(168);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Typeahead = __webpack_require__(172);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Components
	
	// Directives
	// Utils
	var VueStrap = {
	  directives: {
	    ClickOutside: _ClickOutside2.default,
	    Scroll: _Scroll2.default
	  },
	  utils: {
	    $: _NodeList2.default,
	    coerce: _utils.coerce
	  },
	  //components
	  accordion: _Accordion2.default,
	  affix: _Affix2.default,
	  alert: _Alert2.default,
	  aside: _Aside2.default,
	  buttonGroup: _ButtonGroup2.default,
	  carousel: _Carousel2.default,
	  checkbox: _Checkbox2.default,
	  datepicker: _Datepicker2.default,
	  dropdown: _Dropdown2.default,
	  formGroup: _FormGroup2.default,
	  formValidator: _FormValidator2.default,
	  input: _Input2.default,
	  modal: _Modal2.default,
	  navbar: _Navbar2.default,
	  option: _Option2.default,
	  panel: _Panel2.default,
	  popover: _Popover2.default,
	  progressbar: _Progressbar2.default,
	  radio: _Radio2.default,
	  select: _Select2.default,
	  slider: _Slider2.default,
	  spinner: _Spinner2.default,
	  tab: _Tab2.default,
	  tabGroup: _TabGroup2.default,
	  tabs: _Tabs2.default,
	  toggleButton: _ToggleButton2.default,
	  tooltip: _Tooltip2.default,
	  typeahead: _Typeahead2.default
	};
	
	module.exports = VueStrap;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(20);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(56);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(62);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(63);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(64);
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent;
	var blurList = [];
	var Events = [];
	var NodeListJS = function NodeListJS() {
	  if (typeof window !== 'undefined') {
	    var isNode = function isNode(val) {
	      return val instanceof window.Node;
	    };
	
	    var isNodeList = function isNodeList(val) {
	      return val instanceof window.NodeList || val instanceof NodeList || val instanceof window.HTMLCollection || val instanceof Array;
	    };
	
	    var flatten = function flatten(arr, owner) {
	      var list = [];
	      ArrayProto.forEach.call(arr, function (el) {
	        if (isNode(el)) {
	          if (!~list.indexOf(el)) list.push(el);
	        } else if (isNodeList(el)) {
	          for (var id in el) {
	            if (!~list.indexOf(el[id])) list.push(el[id]);
	          }
	        } else if (el !== null) {
	          arr.get = NL.get;
	          arr.set = NL.set;
	          arr.call = NL.call;
	          arr.owner = owner;
	          return arr;
	        }
	      });
	      return _NodeListJS(list, owner);
	    };
	
	    var setterGetter = function setterGetter(prop) {
	      var _this3 = this;
	
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
	          return returnThis ? _this3 : flatten(arr, _this3);
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
	    };
	
	    var _NodeListJS = function _NodeListJS() {
	      for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	        args[_key12] = arguments[_key12];
	      }
	
	      return new NodeList(args);
	    };
	
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
	        window.prueba = this;
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
	          return _NodeListJS(nodes, this);
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
	
	          return _NodeListJS(ArrayProto.filter.apply(this, args), this);
	        }
	      }, {
	        key: 'find',
	        value: function find(element) {
	          var nodes = [];
	          if (typeof element === 'string') flatten(this).forEach(function (node) {
	            nodes.push(node.querySelectorAll(element));
	          });
	          if (isNode(element)) flatten(this).forEach(function (node) {
	            if (node !== element && node.contains(element)) nodes.push(element);
	          });
	          if (isNodeList(element)) {
	            var els = flatten(element);
	            flatten(this).forEach(function (node) {
	              els.forEach(function (el) {
	                if (node !== el && node.contains(el)) nodes.push(el);
	              });
	            });
	          }
	          return flatten(nodes, this.owner);
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
	          }return _NodeListJS(nodes, this);
	        }
	      }, {
	        key: 'push',
	        value: function push() {
	          var _this = this;
	
	          for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	            args[_key6] = arguments[_key6];
	          }
	
	          ArrayProto.forEach.call(args, function (arg) {
	            if (!isNode(arg)) throw nodeError;
	            if (!~_this.indexOf(arg)) ArrayProto.push.call(_this, arg);
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
	          }return nodes.length == 1 ? nodes[0] : _NodeListJS(nodes, this);
	        }
	      }, {
	        key: 'slice',
	        value: function slice() {
	          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	            args[_key7] = arguments[_key7];
	          }
	
	          return _NodeListJS(ArrayProto.slice.apply(this, args), this);
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
	          var _this2 = this;
	
	          var unshift = ArrayProto.unshift.bind(this);
	
	          for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	            args[_key9] = arguments[_key9];
	          }
	
	          ArrayProto.forEach.call(args, function (arg) {
	            if (!isNode(arg)) throw nodeError;
	            if (!~_this2.indexOf(arg)) unshift(arg);
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
	        value: function toggleClass(classes) {
	          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	          var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	          if (typeof classes === 'string') {
	            classes = classes.trim().replace(/\s+/, ' ').split(' ');
	          }
	          return this.each(function (el) {
	            return classes.forEach(function (c) {
	              return el.classList[method](c);
	            });
	          });
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
	          return _NodeListJS([this[index]], this);
	        }
	      }, {
	        key: 'on',
	
	
	        // event handlers
	        value: function on(events, selector, callback) {
	          if (typeof events === 'string') {
	            events = events.trim().replace(/\s+/, ' ').split(' ');
	          }
	          if (!this || !this.length) return this;
	          if (callback === undefined) {
	            callback = selector;
	            selector = null;
	          }
	          if (!callback) return this;
	          var fn = callback;
	          callback = selector ? function (e) {
	            var els = _NodeListJS(selector, this);
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
	          events = events instanceof Array ? events : typeof events === 'string' ? events.trim().replace(/\s+/, ' ').split(' ') : null;
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
	
	    var exceptions = ['join', 'copyWithin', 'fill', 'find', 'forEach'];
	    (0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
	      if (!~exceptions.indexOf(key) && NL[key] === undefined) {
	        NL[key] = ArrayProto[key];
	      }
	    });
	    if (typeof window !== 'undefined' && window.Symbol && _iterator2.default) {
	      NL[_iterator2.default] = NL.values = ArrayProto[_iterator2.default];
	    }
	    var div = document.createElement('div');
	
	    for (var prop in div) {
	      setterGetter(prop);
	    }
	    window.NL = _NodeListJS;
	    return _NodeListJS;
	  }
	};
	
	exports.default = NodeListJS();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , ctx       = __webpack_require__(8)
	  , hide      = __webpack_require__(10)
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
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
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
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(18)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function(){
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(51);
	module.exports = __webpack_require__(55).f('iterator');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(23)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(26)(String, 'String', function(iterated){
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24)
	  , defined   = __webpack_require__(25);
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
/* 24 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(27)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(30)
	  , $iterCreate    = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
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
/* 27 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(32)
	  , descriptor     = __webpack_require__(19)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(34);
	
	module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(39)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(25);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(40)
	  , toIndex   = __webpack_require__(41);
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(24)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(48)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(6).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(25);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var global        = __webpack_require__(6)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(30)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53)
	  , step             = __webpack_require__(54)
	  , Iterators        = __webpack_require__(30)
	  , toIObject        = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(26)(Array, 'Array', function(iterated, kind){
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
/* 53 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	var $Object = __webpack_require__(7).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(59)('getOwnPropertyNames', function(){
	  return __webpack_require__(60).f;
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(16);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(61).f
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(35)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(2);
	
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
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Array.find
	 */
	if (!Array.prototype.find) {
	  Array.prototype.find = function (predicate) {
	    'use strict';
	
	    if (this == null) {
	      throw new TypeError('Array.prototype.find called on null or undefined');
	    }
	    if (typeof predicate !== 'function') {
	      throw new TypeError('predicate must be a function');
	    }
	    var list = Object(this);
	    var length = list.length >>> 0;
	    var thisArg = arguments[1];
	    var value;
	
	    for (var i = 0; i < length; i++) {
	      value = list[i];
	      if (predicate.call(thisArg, value, i, list)) {
	        return value;
	      }
	    }
	    return undefined;
	  };
	}
	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */
	/*global self, document, DOMException */
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	if (typeof window !== 'undefined') {
	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
	
	    (function (view) {
	
	      "use strict";
	
	      if (!('Element' in view)) return;
	
	      var classListProp = "classList",
	          protoProp = "prototype",
	          elemCtrProto = view.Element[protoProp],
	          objCtr = Object,
	          strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      },
	          arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var i = 0,
	            len = this.length;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      ,
	          DOMEx = function DOMEx(type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      },
	          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
	        if (token === "") {
	          throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
	        }
	        return arrIndexOf.call(classList, token);
	      },
	          ClassList = function ClassList(elem) {
	        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
	            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
	            i = 0,
	            len = classes.length;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      },
	          classListProto = ClassList[protoProp] = [],
	          classListGetter = function classListGetter() {
	        return new ClassList(this);
	      };
	      // Most DOMException implementations don't allow calling DOMException's toString()
	      // on non-DOMExceptions. Error's toString() is sufficient here.
	      DOMEx[protoProp] = Error[protoProp];
	      classListProto.item = function (i) {
	        return this[i] || null;
	      };
	      classListProto.contains = function (token) {
	        token += "";
	        return checkTokenAndGetIndex(this, token) !== -1;
	      };
	      classListProto.add = function () {
	        var tokens = arguments,
	            i = 0,
	            l = tokens.length,
	            token,
	            updated = false;
	        do {
	          token = tokens[i] + "";
	          if (checkTokenAndGetIndex(this, token) === -1) {
	            this.push(token);
	            updated = true;
	          }
	        } while (++i < l);
	
	        if (updated) {
	          this._updateClassName();
	        }
	      };
	      classListProto.remove = function () {
	        var tokens = arguments,
	            i = 0,
	            l = tokens.length,
	            token,
	            updated = false,
	            index;
	        do {
	          token = tokens[i] + "";
	          index = checkTokenAndGetIndex(this, token);
	          while (index !== -1) {
	            this.splice(index, 1);
	            updated = true;
	            index = checkTokenAndGetIndex(this, token);
	          }
	        } while (++i < l);
	
	        if (updated) {
	          this._updateClassName();
	        }
	      };
	      classListProto.toggle = function (token, force) {
	        token += "";
	
	        var result = this.contains(token),
	            method = result ? force !== true && "remove" : force !== false && "add";
	
	        if (method) {
	          this[method](token);
	        }
	
	        if (force === true || force === false) {
	          return force;
	        } else {
	          return !result;
	        }
	      };
	      classListProto.toString = function () {
	        return this.join(" ");
	      };
	
	      if (objCtr.defineProperty) {
	        var classListPropDesc = {
	          get: classListGetter,
	          enumerable: true,
	          configurable: true
	        };
	        try {
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        } catch (ex) {
	          // IE 8 doesn't support enumerable:true
	          if (ex.number === -0x7FF5EC54) {
	            classListPropDesc.enumerable = false;
	            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	          }
	        }
	      } else if (objCtr[protoProp].__defineGetter__) {
	        elemCtrProto.__defineGetter__(classListProp, classListGetter);
	      }
	    })(self);
	  } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.
	
	    (function () {
	      "use strict";
	
	      var testElement = document.createElement("_");
	
	      testElement.classList.add("c1", "c2");
	
	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function createMethod(method) {
	          var original = DOMTokenList.prototype[method];
	
	          DOMTokenList.prototype[method] = function (token) {
	            var i,
	                len = arguments.length;
	
	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }
	
	      testElement.classList.toggle("c3", false);
	
	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;
	
	        DOMTokenList.prototype.toggle = function (token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };
	      }
	
	      testElement = null;
	    })();
	  }
	}

/***/ },
/* 65 */
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
	// (Waiting for testing)
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
	    //translate vue2 attributes to vue1
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
	    //translate vue1 attributes to vue2
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var binded = [];
	
	function handler(e) {
	  binded.forEach(function (el) {
	    if (!el.node.contains(e.target)) el.callback(e);
	  });
	}
	
	function addListener(node, callback) {
	  if (!binded.length) document.addEventListener('click', handler, false);
	  binded.push({ node: node, callback: callback });
	}
	
	function removeListener(node, callback) {
	  binded = binded.filter(function (el) {
	    return el.node !== node ? true : !callback ? false : el.callback !== callback;
	  });
	  if (!binded.length) document.removeEventListener('click', handler, false);
	}
	
	exports.default = {
	  bind: function bind(el, binding) {
	    removeListener(el, binding.value);
	    if (typeof binding.value !== 'function') {
	      if (process.env.NODE_ENV !== 'production') {
	        Vue.util.warn('ClickOutside only work with a function, received: v-' + binding.name + '="' + binding.expression + '"');
	      }
	    } else {
	      addListener(el, binding.value);
	    }
	  },
	  update: function update(el, binding) {
	    if (binding.value !== binding.oldValue) {
	      removeListener(el, binding.oldValue);
	      addListener(el, binding.value);
	    }
	  },
	  unbind: function unbind(el, binding) {
	    removeListener(el, binding.value);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ },
/* 67 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var HANDLER = '_vue_scroll_handler';
	var events = ['resize', 'scroll'];
	
	function bind(el, binding) {
	  unbind(el);
	
	  var callback = binding.value;
	  if (typeof callback !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      Vue.util.warn('ClickOutside only work with a function value, received: v-' + binding.name + '="' + binding.expression + '"');
	    }
	  } else {
	    el[HANDLER] = function (e) {
	      callback(e);
	    };
	    events.forEach(function (e) {
	      window.addEventListener(e, el[HANDLER], false);
	    });
	    document.addEventListener('load', el[HANDLER], false);
	    setTimeout(function () {
	      el[HANDLER]();
	    }, 0);
	  }
	}
	
	function unbind(el) {
	  events.forEach(function (e) {
	    window.removeEventListener(e, el[HANDLER], false);
	  });
	  document.removeEventListener('load', el[HANDLER], false);
	  delete el[HANDLER];
	}
	
	exports.default = {
	  bind: bind,
	  unbind: unbind,
	  update: function update(el, binding) {
	    if (binding.value !== binding.oldValue) bind(el, binding);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(71),
	  /* template */
	  __webpack_require__(72),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Accordion.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Accordion.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f2baf8ae", Component.options)
	  } else {
	    hotAPI.reload("data-v-f2baf8ae", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 70 */
/***/ function(module, exports) {

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle
	
	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: null
	    },
	    oneAtAtime: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    openChild: function openChild(child) {
	      if (this.oneAtAtime) {
	        this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.open = false;
	          }
	        });
	      }
	    }
	  },
	  created: function created() {
	    this._isAccordion = true;
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "panel-group"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f2baf8ae", module.exports)
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(74),
	  /* template */
	  __webpack_require__(75),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Affix.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Affix.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-614e58b1", Component.options)
	  } else {
	    hotAPI.reload("data-v-614e58b1", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Scroll = __webpack_require__(68);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  directives: {
	    Scroll: _Scroll2.default
	  },
	  props: {
	    offset: {
	      type: Number,
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
	      // if is hidden don't calculate anything
	      if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
	        return;
	      }
	      // get window scroll and element position to detect if have to be normal or affixed
	      var scroll = {};
	      var element = {};
	      var rect = this.$el.getBoundingClientRect();
	      var body = document.body;
	      var _arr = ['Top', 'Left'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var type = _arr[_i];
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
	        element[t] = scroll[t] + rect[t] - (this.$el['client' + type] || body['client' + type] || 0);
	      }
	      var fix = scroll.top > element.top - this.offset;
	      if (this.affixed !== fix) {
	        this.affixed = fix;
	      }
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hidden-print hidden-xs hidden-sm"
	  }, [_c('nav', {
	    directives: [{
	      name: "scroll",
	      rawName: "v-scroll",
	      value: (_vm.checkScroll),
	      expression: "checkScroll"
	    }],
	    staticClass: "bs-docs-sidebar",
	    class: {
	      affix: _vm.affixed
	    },
	    style: ({
	      marginTop: _vm.top
	    })
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-614e58b1", module.exports)
	  }
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(77)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(79),
	  /* template */
	  __webpack_require__(80),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Alert.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-aa5b2b86", Component.options)
	  } else {
	    hotAPI.reload("data-v-aa5b2b86", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var DURATION = 0; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    dismissable: { type: Boolean, default: false },
	    duration: { default: DURATION },
	    placement: { type: String },
	    type: { type: String },
	    value: { type: Boolean, default: true },
	    width: { type: String }
	  },
	  data: function data() {
	    return {
	      val: this.value
	    };
	  },
	
	  computed: {
	    durationNum: function durationNum() {
	      return _utils.coerce.number(this.duration, DURATION);
	    }
	  },
	  watch: {
	    val: function val(_val) {
	      if (_val && this.durationNum > 0) {
	        this._delayClose();
	      }
	      this.$emit('input', _val);
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  created: function created() {
	    this._delayClose = (0, _utils.delayer)(function () {
	      this.val = false;
	    }, 'durationNum');
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    class: ['alert', 'alert-' + _vm.type, _vm.placement],
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "role": "alert"
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dismissable),
	      expression: "dismissable"
	    }],
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.val = false
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-aa5b2b86", module.exports)
	  }
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(82)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(83),
	  /* template */
	  __webpack_require__(84),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Aside.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3cdc5819", Component.options)
	  } else {
	    hotAPI.reload("data-v-3cdc5819", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 82 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    header: { type: String },
	    placement: { type: String, default: 'right' },
	    show: { type: Boolean, required: true },
	    width: { type: Number, default: 320 }
	  },
	  watch: {
	    show: function show(val, old) {
	      var _this = this;
	
	      this.$emit('input', val);
	      this.$emit(this.show ? 'open' : 'close');
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
	          return _this.trigger_close();
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
	    trigger: function trigger() {
	      var _this2 = this;
	
	      return {
	        close: function close() {
	          return _this2.trigger_close();
	        },
	        open: function open() {
	          return _this2.trigger_open();
	        }
	      };
	    },
	    trigger_close: function trigger_close() {
	      this.$emit('close');
	    },
	    trigger_open: function trigger_open() {
	      this.$emit('open');
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;
	
	    this.$emit('trigger', function () {
	      return _this3.trigger;
	    });
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": 'slide' + _vm.placement
	    }
	  }, [(_vm.show) ? _c('div', {
	    staticClass: "aside",
	    class: _vm.placement,
	    style: ({
	      width: _vm.width + 'px'
	    })
	  }, [_c('div', {
	    staticClass: "aside-dialog"
	  }, [_c('div', {
	    staticClass: "aside-content"
	  }, [_c('div', {
	    staticClass: "aside-header"
	  }, [_c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.trigger_close
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _c('h4', {
	    staticClass: "aside-title"
	  }, [_vm._t("header", [_vm._v(_vm._s(_vm.header))])], 2)]), _vm._v(" "), _c('div', {
	    staticClass: "aside-body"
	  }, [_vm._t("default")], 2)])])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3cdc5819", module.exports)
	  }
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(86),
	  /* template */
	  __webpack_require__(87),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/ButtonGroup.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] ButtonGroup.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bdf337e4", Component.options)
	  } else {
	    hotAPI.reload("data-v-bdf337e4", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    buttons: { default: true },
	    justified: { type: Boolean, default: false },
	    type: { type: String, default: 'default' },
	    value: { default: null },
	    vertical: { type: Boolean, default: false }
	  },
	  data: function data() {
	    this._btnGroup = true;
	    return {
	      val: this.value
	    };
	  },
	
	  watch: {
	    val: function val(_val) {
	      this.$emit('input', _val);
	    }
	  }
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: {
	      'btn-group': _vm.buttons, 'btn-group-justified': _vm.justified, 'btn-group-vertical': _vm.vertical
	    },
	    attrs: {
	      "data-toggle": _vm.buttons && 'buttons'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bdf337e4", module.exports)
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(89)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(90),
	  /* template */
	  __webpack_require__(91),
	  /* scopeId */
	  "data-v-c5e651e2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Carousel.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Carousel.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c5e651e2", Component.options)
	  } else {
	    hotAPI.reload("data-v-c5e651e2", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// let coerce = {
	//   interval: 'number'
	// }
	
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 5000
	    }
	  },
	  data: function data() {
	    return {
	      indicator_list: [],
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
	  mounted: function mounted() {
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
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "carousel slide",
	    attrs: {
	      "data-ride": "carousel"
	    }
	  }, [_c('ol', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.indicators),
	      expression: "indicators"
	    }],
	    staticClass: "carousel-indicators"
	  }, _vm._l((_vm.indicator_list), function(indicator, i) {
	    return _c('li', {
	      class: {
	        active: i === _vm.index
	      },
	      on: {
	        "click": function($event) {
	          _vm.indicatorClick(i)
	        }
	      }
	    }, [_c('span')])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "carousel-inner",
	    attrs: {
	      "role": "listbox"
	    }
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.controls),
	      expression: "controls"
	    }],
	    staticClass: "carousel-controls hidden-xs"
	  }, [_c('a', {
	    staticClass: "left carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, [_c('span', {
	    staticClass: "glyphicon glyphicon-chevron-left",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "right carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, [_c('span', {
	    staticClass: "glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c5e651e2", module.exports)
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(93)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(94),
	  /* template */
	  __webpack_require__(95),
	  /* scopeId */
	  "data-v-57fcb01c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Checkbox.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Checkbox.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-57fcb01c", Component.options)
	  } else {
	    hotAPI.reload("data-v-57fcb01c", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 93 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    button: { type: Boolean, default: false },
	    disabled: { type: Boolean, default: false },
	    falseValue: { default: false },
	    name: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    trueValue: { default: true },
	    type: { type: String, default: null },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      checked: this.value === this.trueValue
	    };
	  },
	
	  computed: {
	    isButton: function isButton() {
	      return this.button || this._inGroup && this.$parent.buttons;
	    },
	    isFalse: function isFalse() {
	      return this.value === this.falseValue;
	    },
	    isTrue: function isTrue() {
	      return this.value === this.trueValue;
	    },
	    parentValue: function parentValue() {
	      return this._ingroup && this.$parent.val;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    checked: function checked(val, old) {
	      var value = val ? this.trueValue : this.falseValue;
	      this.$emit('checked', val);
	      this.$emit('input', value);
	      this.eval();
	    },
	    parentValue: function parentValue(val) {
	      var checked = val === this.trueValue;
	      if (this.checked !== checked) {
	        this.checked = checked;
	      }
	    },
	    value: function value(val, old) {
	      var checked = val === this.trueValue;
	      if (this.checked !== checked) {
	        this.checked = checked;
	      }
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (parent && parent._btnGroup && !parent._radioGroup) {
	      this._inGroup = true;
	      parent._checkboxGroup = true;
	      if (!(parent.val instanceof Array)) {
	        parent.val = [];
	      }
	      this.eval();
	    }
	  },
	  mounted: function mounted() {
	    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
	      return;
	    }
	    if (this.$parent.val.length) {
	      // this.checked = ~this.$parent.val.indexOf(this.value)
	      this.$emit('checked', ~this.$parent.val.indexOf(this.value));
	    } else if (this.checked) {
	      this.$parent.val.push(this.value);
	    }
	  },
	
	  methods: {
	    eval: function _eval() {
	      if (this._inGroup) {
	        var value = this.checked ? this.isTrue : this.isFalse;
	        var index = this.$parent.val.indexOf(value);
	        if (this.checked && !~index) this.$parent.val.push(value);
	        if (!this.checked && ~index) this.$parent.val.splice(index, 1);
	      }
	    },
	    toggle: function toggle() {
	      if (this.disabled || this.readonly) {
	        return;
	      }
	      this.checked = !this.checked;
	    }
	  }
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.isButton ? 'a' : 'label', {
	    tag: "a",
	    class: [_vm.isButton ? 'btn btn-' + _vm.typeColor : 'open checkbox ' + _vm.typeColor, {
	      active: _vm.checked,
	      disabled: _vm.disabled,
	      readonly: _vm.readonly
	    }],
	    on: {
	      "click": _vm.toggle
	    }
	  }, [(_vm.name) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.checked ? _vm.trueValue : _vm.falseValue
	    }
	  }) : _vm._e(), _vm._v(" "), (!_vm.isButton) ? _c('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [_vm.checked ? 'btn-' + _vm.typeColor : '', {
	      bg: _vm.typeColor === 'default'
	    }]
	  }) : _vm._e(), _vm._v(" "), (!_vm.isButton && _vm.checked && _vm.typeColor === 'default') ? _c('span', {
	    staticClass: "icon"
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-57fcb01c", module.exports)
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(97)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(98),
	  /* template */
	  __webpack_require__(99),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Datepicker.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Datepicker.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76437bab", Component.options)
	  } else {
	    hotAPI.reload("data-v-76437bab", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 97 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	// import $ from './utils/NodeList.js'
	
	exports.default = {
	  props: {
	    value: { type: String },
	    format: { default: 'MM/dd/yyyy' },
	    disabledDaysOfWeek: { type: Array, default: function _default() {
	        return [];
	      }
	    },
	    width: { type: String },
	    clearButton: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    placeholder: { type: String },
	    iconsFont: { type: String, default: 'glyphicon' }
	  },
	  data: function data() {
	    return {
	      currDate: new Date(),
	      dateRange: [],
	      decadeRange: [],
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false,
	      val: this.value
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    format: function format() {
	      this.val = this.stringify(this.currDate);
	    },
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  computed: {
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    preBtnClasses: function preBtnClasses() {
	      return 'datepicker-preBtn ' + this.iconsFont + ' ' + this.iconsFont + '-chevron-left';
	    },
	    nextBtnClasses: function nextBtnClasses() {
	      return 'datepicker-nextBtn ' + this.iconsFont + ' ' + this.iconsFont + '-chevron-right';
	    },
	    disabledDaysArray: function disabledDaysArray() {
	      return this.disabledDaysOfWeek.map(function (d) {
	        return parseInt(d, 10);
	      });
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    inputClick: function inputClick() {
	      this.currDate = this.parse(this.val) || this.parse(new Date());
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
	    daySelect: function daySelect(day) {
	      if (day.sclass === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = day.date;
	        this.val = this.stringify(this.currDate);
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
	      return format.replace(/yyyy/g, year).replace(/yy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/M(?!a)/g, month).replace(/dd/g, ('0' + day).slice(-2)).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      if (str === undefined || str === null) {
	        str = this.val;
	      }
	      var date = str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy') ? new Date(str.substring(6, 10), str.substring(3, 5) - 1, str.substring(0, 2)) : new Date(str);
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
	          var date = new Date(preMonth.year, preMonth.month, dayText);
	          var sclass = 'datepicker-item-gray';
	          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
	            sclass = 'datepicker-item-disable';
	          }
	          this.dateRange.push({ text: dayText, date: date, sclass: sclass });
	        }
	      }
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        var _date = new Date(time.year, time.month, _i2);
	        var _sclass = '';
	        if (this.disabledDaysArray.indexOf(_date.getDay()) > -1) {
	          _sclass = 'datepicker-item-disable';
	        }
	        if (_i2 == time.day && _date.getFullYear() == time.year && _date.getMonth() == time.month) {
	          _sclass = 'datepicker-dateRange-item-active';
	        }
	        this.dateRange.push({ text: _i2, date: _date, sclass: _sclass });
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          var _date2 = new Date(nextMonth.year, nextMonth.month, _i3);
	          var _sclass2 = 'datepicker-item-gray';
	          if (this.disabledDaysArray.indexOf(_date2.getDay()) > -1) {
	            _sclass2 = 'datepicker-item-disable';
	          }
	          this.dateRange.push({ text: _i3, date: _date2, sclass: _sclass2 });
	        }
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$emit('child-created', this);
	    this.currDate = this.parse(this.val) || this.parse(new Date());
	    this._blur = function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    };
	    window.addEventListener('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('click', this._blur);
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "datepicker"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    staticClass: "form-control datepicker-input",
	    class: {
	      'with-reset-button': _vm.clearButton
	    },
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "click": _vm.inputClick,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.val) ? _c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.val = ''
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayDayView),
	      expression: "displayDayView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchMonthView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyDayHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-weekRange"
	  }, _vm._l((_vm.text.daysOfWeek), function(w) {
	    return _c('span', [_vm._v(_vm._s(w))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-dateRange"
	  }, _vm._l((_vm.dateRange), function(d) {
	    return _c('span', {
	      class: d.sclass,
	      on: {
	        "click": function($event) {
	          _vm.daySelect(d)
	        }
	      }
	    }, [_vm._v(_vm._s(d.text))])
	  }))])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayMonthView),
	      expression: "displayMonthView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchDecadeView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyYearHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-monthRange"
	  }, [_vm._l((_vm.text.months), function(m, index) {
	    return [_c('span', {
	      class: {
	        'datepicker-dateRange-item-active':
	        (_vm.text.months[_vm.parse(_vm.val).getMonth()] === m) &&
	        _vm.currDate.getFullYear() === _vm.parse(_vm.val).getFullYear()
	      },
	      domProps: {
	        "textContent": _vm._s(m.substr(0, 3))
	      },
	      on: {
	        "click": function($event) {
	          _vm.monthSelect(index)
	        }
	      }
	    })]
	  })], 2)])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayYearView),
	      expression: "displayYearView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.stringifyDecadeHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-monthRange decadeRange"
	  }, [_vm._l((_vm.decadeRange), function(decade) {
	    return [_c('span', {
	      class: {
	        'datepicker-dateRange-item-active': _vm.parse(_vm.val).getFullYear() === decade.text
	      },
	      domProps: {
	        "textContent": _vm._s(decade.text)
	      },
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.yearSelect(decade.text)
	        }
	      }
	    })]
	  })], 2)])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-76437bab", module.exports)
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(101),
	  /* template */
	  __webpack_require__(102),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Dropdown.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b6c60d80", Component.options)
	  } else {
	    hotAPI.reload("data-v-b6c60d80", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  directives: {
	    ClickOutside: _ClickOutside2.default
	  },
	  props: {
	    disabled: { type: Boolean, default: false },
	    size: { type: String, default: null },
	    text: { type: String, default: null },
	    type: { type: String, default: 'default' },
	    value: { type: Boolean, default: false }
	  },
	  data: function data() {
	    var show = this.value;
	    return { show: show };
	  },
	
	  watch: {
	    show: function show(val) {
	      this.$emit('input', val);
	    },
	    value: function value(val) {
	      this.show = val;
	    }
	  },
	  computed: {
	    buttonSize: function buttonSize() {
	      return ~['lg', 'sm', 'xs'].indexOf(this.size) ? 'btn-' + this.size : '';
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._isTabs || this.$parent._navbar || this.$parent.menu;
	    },
	    menu: function menu() {
	      return !this.$parent || this.$parent.navbar;
	    },
	    slots: function slots() {
	      return this._slotContents;
	    },
	    submenu: function submenu() {
	      return this.$parent && (this.$parent.menu || this.$parent.submenu);
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      if (!this.disabled) {
	        this.show = !this.show;
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    (0, _NodeList2.default)('ul', this.$el).on('click', 'li>a', function (e) {
	      _this.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('ul', this.$el).off();
	  }
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.isLi ? 'li' : 'div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (_vm.blur),
	      expression: "blur"
	    }],
	    tag: "div",
	    class: [{
	      open: _vm.show,
	      disabled: _vm.disabled,
	      dropdown: _vm.isLi,
	      'input-group-btn': _vm.inInput,
	      'btn-group': !_vm.isLi && !_vm.inInput
	    }]
	  }, [_vm._t("before"), _vm._v(" "), (_vm.isLi) ? _c('a', {
	    class: ['dropdown-toggle', _vm.buttonSize, {
	      disabled: _vm.disabled
	    }],
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.show = false
	      },
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [_vm._t("button", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
	    staticClass: "caret"
	  })], 2) : _c('button', {
	    class: ['btn btn-' + _vm.type, _vm.buttonSize, 'dropdown-toggle'],
	    attrs: {
	      "type": "button",
	      "disabled": _vm.disabled
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.show = false
	      },
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [_vm._t("button", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
	    staticClass: "caret"
	  })], 2), _vm._v(" "), _vm._t("dropdown-menu", [_c('ul', {
	    staticClass: "dropdown-menu"
	  }, [_vm._t("default")], 2)])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b6c60d80", module.exports)
	  }
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(104),
	  /* template */
	  __webpack_require__(105),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/FormGroup.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] FormGroup.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6ae970fc", Component.options)
	  } else {
	    hotAPI.reload("data-v-6ae970fc", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// let coerce = {
	//     enterSubmit: 'boolean',
	//     icon: 'boolean'
	// }
	
	exports.default = {
	  props: {
	    enterSubmit: {
	      type: Boolean,
	      default: false
	    },
	    icon: {
	      type: Boolean,
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
	      valid: null,
	      timeout: null
	    };
	  },
	
	  watch: {
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (val !== old && this._parent) this._parent.validate();
	    }
	  },
	  methods: {
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
	  mounted: function mounted() {
	    this.validate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	}; //
	//

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6ae970fc", module.exports)
	  }
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(107),
	  /* template */
	  __webpack_require__(108),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/FormValidator.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] FormValidator.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d284ac62", Component.options)
	  } else {
	    hotAPI.reload("data-v-d284ac62", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    enterSubmit: { type: Boolean, default: false },
	    icon: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    value: null
	  },
	  data: function data() {
	    return {
	      children: [],
	      valid: null,
	      timeout: null
	    };
	  },
	
	  watch: {
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit('input', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (val !== old && this._parent) this._parent.validate();
	    }
	  },
	  methods: {
	    validate: function validate() {
	      var invalid = !this.children.every(function (el) {
	        return el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
	      });
	      this.valid = !invalid;
	      return !invalid;
	    }
	  },
	  created: function created() {
	    this._formValidator = true;
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    this.validate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	}; //
	//

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d284ac62", module.exports)
	  }
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(110)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(111),
	  /* template */
	  __webpack_require__(112),
	  /* scopeId */
	  "data-v-67bb51ab",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Input.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Input.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-67bb51ab", Component.options)
	  } else {
	    hotAPI.reload("data-v-67bb51ab", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 110 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var DELAY = 300;
	
	exports.default = {
	  props: {
	    clearButton: { type: Boolean, default: false },
	    cols: { type: Number, default: null },
	    datalist: { type: Array, default: null },
	    disabled: { type: Boolean, default: false },
	    enterSubmit: { type: Boolean, default: false },
	    error: { type: String, default: null },
	    help: { type: String, default: null },
	    hideHelp: { type: Boolean, default: true },
	    icon: { type: Boolean, default: false },
	    label: { type: String, default: null },
	    lang: { type: String, default: navigator.language },
	    mask: null,
	    maskDelay: { type: Number, default: 100 },
	    match: { type: String, default: null },
	    max: { type: String, default: null },
	    maxlength: { type: Number, default: null },
	    min: { type: String, default: null },
	    minlength: { type: Number, default: 0 },
	    name: { type: String, default: null },
	    pattern: { default: null },
	    placeholder: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    required: { type: Boolean, default: false },
	    rows: { type: Number, default: 3 },
	    step: { type: Number, default: null },
	    type: { type: String, default: 'text' },
	    url: { type: String, default: null },
	    urlMap: { type: Function, default: null },
	    validationDelay: { type: Number, default: 250 },
	    value: { default: null }
	  },
	  data: function data() {
	    var val = this.value;
	    return {
	      options: this.datalist,
	      val: val,
	      valid: null,
	      timeout: null
	    };
	  },
	
	  computed: {
	    canValidate: function canValidate() {
	      return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null);
	    },
	    errorText: function errorText() {
	      var value = this.value;
	      var error = [this.error];
	      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
	      if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
	      return error.join(' ');
	    },
	    id_datalist: function id_datalist() {
	      if (this.type !== 'textarea' && this.datalist instanceof Array) {
	        if (!this._id_datalist) {
	          if (!this.$root.id_datalist) {
	            this.$root.id_datalist = 0;
	          }
	          this._id_datalist = 'input-datalist' + this.$root.id_datalist++;
	        }
	        return this._id_datalist;
	      }
	      return null;
	    },
	    input: function input() {
	      return this.$refs.input;
	    },
	    nativeValidate: function nativeValidate() {
	      return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max);
	    },
	    regex: function regex() {
	      return _utils.coerce.pattern(this.pattern);
	    },
	    showError: function showError() {
	      return this.error && this.valid === false;
	    },
	    showHelp: function showHelp() {
	      return this.help && (!this.showError || !this.hideHelp);
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    title: function title() {
	      return this.errorText || this.help || '';
	    }
	  },
	  watch: {
	    datalist: function datalist(val, old) {
	      if (val !== old && val instanceof Array) {
	        this.options = val;
	      }
	    },
	    match: function match(val) {
	      this.eval();
	    },
	    options: function options(val, old) {
	      if (val !== old) this.$emit('options', val);
	    },
	    url: function url(val) {
	      this._url();
	    },
	    val: function val(_val, old) {
	      var _this = this;
	
	      this.$emit('input', _val);
	      if (_val !== old) {
	        if (this.mask instanceof Function) {
	          _val = this.mask(_val || '');
	          if (this.val !== _val) {
	            if (this._timeout.mask) clearTimeout(this._timeout.mask);
	            this._timeout.mask = setTimeout(function () {
	              _this.val = _val;
	            }, isNaN(this.maskDelay) ? 0 : this.maskDelay);
	          }
	        }
	        this.eval();
	      }
	    },
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (this._parent) this._parent.validate();
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  methods: {
	    attr: function attr(value) {
	      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value;
	    },
	    emit: function emit(e) {
	      this.$emit(e.type, e.type == 'input' ? e.target.value : e);
	      if (e.type === 'blur' && this.canValidate) {
	        this.valid = this.validate();
	      }
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
	    focus: function focus() {
	      this.input.focus();
	    },
	    submit: function submit() {
	      if (this.$parent._formValidator) {
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
	      var value = (this.val || '').trim();
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
	      if (this.regex) {
	        if (!(this.regex instanceof Function ? this.regex(this.value) : this.regex.test(this.value))) {
	          return false;
	        }
	      }
	      return true;
	    },
	    reset: function reset() {
	      this.value = '';
	      this.valid = null;
	      if (this._timeout.mask) clearTimeout(this._timeout.mask);
	      if (this._timeout.eval) clearTimeout(this._timeout.eval);
	    }
	  },
	  created: function created() {
	    this._input = true;
	    this._timeout = {};
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	    this._url = (0, _utils.delayer)(function () {
	      var _this3 = this;
	
	      if (!this.url || !this.$http || this._loading) {
	        return;
	      }
	      this._loading = true;
	      this.$http.get(this.url).then(function (response) {
	        var data = response.data instanceof Array ? response.data : [];
	        try {
	          data = JSON.parse(data);
	        } catch (e) {}
	        if (_this3.urlMap) {
	          data = data.map(_this3.urlMap);
	        }
	        _this3.options = data;
	        _this3.loading = false;
	      }, function (response) {
	        _this3.loading = false;
	      });
	    }, DELAY);
	    if (this.url) this._url();
	  },
	  mounted: function mounted() {
	    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {
	    //   if (this.canValidate) { this.valid = this.validate() }
	    //   this.$emit('blur', e)
	    // })
	  },
	  beforeDestroy: function beforeDestroy() {
	    // $(this.input).off()
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "form-group",
	    class: {
	      validate: _vm.canValidate, 'has-feedback': _vm.icon, 'has-error': _vm.canValidate && _vm.valid === false, 'has-success': _vm.canValidate && _vm.valid
	    }
	  }, [_vm._t("label", [(_vm.label) ? _c('label', {
	    staticClass: "control-label",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e()]), _vm._v(" "), (_vm.$slots.before || _vm.$slots.after) ? _c('div', {
	    staticClass: "input-group"
	  }, [_vm._t("before"), _vm._v(" "), _c(_vm.type == 'textarea' ? _vm.type : 'input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    tag: "textarea",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": _vm.type == 'textarea' ? null : _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.value) ? _c('div', {
	    class: {
	      icon: _vm.icon
	    }
	  }, [_c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.value = ''
	      }
	    }
	  }, [_vm._v("×")])]) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('div', {
	    staticClass: "icon"
	  }, [(_vm.icon && _vm.valid !== null) ? _c('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._t("after")], 2) : [_c(_vm.type == 'textarea' ? _vm.type : 'input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    tag: "textarea",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": _vm.type == 'textarea' ? null : _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.val) ? _c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.val = ''
	      }
	    }
	  }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.valid !== null) ? _c('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()], _vm._v(" "), (_vm.id_datalist) ? _c('datalist', {
	    attrs: {
	      "id": _vm.id_datalist
	    }
	  }, _vm._l((_vm.options), function(opc) {
	    return _c('option', {
	      domProps: {
	        "value": opc
	      }
	    })
	  })) : _vm._e(), _vm._v(" "), (_vm.showHelp) ? _c('div', {
	    staticClass: "help-block",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.help))]) : _vm._e(), _vm._v(" "), (_vm.showError) ? _c('div', {
	    staticClass: "help-block with-errors",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.errorText))]) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-67bb51ab", module.exports)
	  }
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(114)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(115),
	  /* template */
	  __webpack_require__(120),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Modal.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f95c69e4", Component.options)
	  } else {
	    hotAPI.reload("data-v-f95c69e4", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(116);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    backdrop: { type: Boolean, default: true },
	    callback: { type: Function, default: null },
	    cancelText: { type: String, default: 'Close' },
	    effect: { type: String, default: null },
	    large: { type: Boolean, default: false },
	    okText: { type: String, default: 'Save changes' },
	    small: { type: Boolean, default: false },
	    title: { type: String, default: '' },
	    value: { type: Boolean, required: true },
	    width: { default: null }
	  },
	  data: function data() {
	    return {
	      transition: false,
	      val: null
	    };
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
	    transition: function transition(val, old) {
	      if (val === old) {
	        return;
	      }
	      var el = this.$el;
	      var body = document.body;
	      if (val) {
	        //starting
	        if (this.val) {
	          el.querySelector('.modal-content').focus();
	          el.style.display = 'block';
	          setTimeout(function () {
	            return el.classList.add('in');
	          }, 0);
	          body.classList.add('modal-open');
	          if ((0, _utils.getScrollBarWidth)() !== 0) {
	            body.style.paddingRight = (0, _utils.getScrollBarWidth)() + 'px';
	          }
	        } else {
	          el.classList.remove('in');
	        }
	      } else {
	        //ending
	        this.$emit(this.val ? 'opened' : 'closed');
	        if (!this.val) {
	          el.style.display = 'none';
	          body.style.paddingRight = null;
	          body.classList.remove('modal-open');
	        }
	      }
	    },
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	      if (old === null ? _val === true : _val !== old) this.transition = true;
	    },
	    value: function value(val, old) {
	      if (val !== old) this.val = val;
	    }
	  },
	  methods: {
	    action: function action(val, p) {
	      if (val === null) {
	        return;
	      }
	      if (val && this.callback instanceof Function) this.callback();
	      this.$emit(val ? 'ok' : 'cancel', p);
	      this.val = val || false;
	    }
	  },
	  mounted: function mounted() {
	    this.val = this.value;
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(118);
	module.exports = __webpack_require__(7).Number.isInteger;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(119)});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['modal', _vm.effect],
	    attrs: {
	      "role": "dialog"
	    },
	    on: {
	      "click": function($event) {
	        _vm.backdrop && _vm.action(false, 1)
	      },
	      "transitionend": function($event) {
	        _vm.transition = false
	      }
	    }
	  }, [_c('div', {
	    class: ['modal-dialog', {
	      'modal-lg': _vm.large,
	      'modal-sm': _vm.small
	    }],
	    style: ({
	      width: _vm.optionalWidth
	    }),
	    attrs: {
	      "role": "document"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.action(null)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "modal-content"
	  }, [_vm._t("modal-header", [_c('div', {
	    staticClass: "modal-header"
	  }, [_c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(false, 2)
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _c('h4', {
	    staticClass: "modal-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2)])]), _vm._v(" "), _vm._t("modal-body", [_c('div', {
	    staticClass: "modal-body"
	  }, [_vm._t("default")], 2)]), _vm._v(" "), _vm._t("modal-footer", [_c('div', {
	    staticClass: "modal-footer"
	  }, [_c('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(false, 3)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(true, 4)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.okText))])])])], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f95c69e4", module.exports)
	  }
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(122),
	  /* template */
	  __webpack_require__(123),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Navbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3306937f", Component.options)
	  } else {
	    hotAPI.reload("data-v-3306937f", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: { type: String, default: 'default' },
	    placement: { type: String, default: '' }
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
	  mounted: function mounted() {
	    var _this = this;
	
	    try {
	      var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', this.$el).parent();
	      if ($dropdown) {
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
	      }
	    } catch (ex) {
	      console.log('error finding dropdown');
	    }
	
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
	    if (this.$slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).on('click', function (e) {
	      return _this.toggleCollapse(e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('.dropdown', this.$el).off('click').offBlur();
	    if (this.$slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('nav', {
	    class: ['navbar', 'navbar-' + _vm.type, _vm.placement === 'static' ? 'navbar-static-top' : 'navbar-fixed-' + _vm.placement]
	  }, [_c('div', {
	    staticClass: "container-fluid"
	  }, [_c('div', {
	    staticClass: "navbar-header"
	  }, [(!_vm.$slots.collapse) ? _c('button', {
	    staticClass: "navbar-toggle collapsed",
	    attrs: {
	      "type": "button",
	      "aria-expanded": "false"
	    },
	    on: {
	      "click": _vm.toggleCollapse
	    }
	  }, [_c('span', {
	    staticClass: "sr-only"
	  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  })]) : _vm._e(), _vm._v(" "), _vm._t("collapse"), _vm._v(" "), _vm._t("brand")], 2), _vm._v(" "), _c('div', {
	    class: ['navbar-collapse', {
	      collapse: _vm.collapsed
	    }]
	  }, [_c('ul', {
	    staticClass: "nav navbar-nav"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.$slots.left) ? _c('ul', {
	    staticClass: "nav navbar-nav navbar-left"
	  }, [_vm._t("left")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.right) ? _c('ul', {
	    staticClass: "nav navbar-nav navbar-right"
	  }, [_vm._t("right")], 2) : _vm._e()])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3306937f", module.exports)
	  }
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(125),
	  /* template */
	  __webpack_require__(126),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Option.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Option.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dcf17538", Component.options)
	  } else {
	    hotAPI.reload("data-v-dcf17538", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	
	exports.default = {
	  props: { value: null },
	  data: function data() {
	    return { loading: true };
	  },
	  mounted: function mounted() {
	    if (this.$parent._select) {
	      if (!this.$parent.options) {
	        this.$parent.options = [];
	      }
	      var el = {};
	      el[this.$parent.optionsLabel] = this.$el.innerHTML;
	      el[this.$parent.optionsValue] = this.value;
	      this.$parent.options.push(el);
	      this.loading = false;
	    } else {
	      console.warn('options only work inside a select component');
	    }
	  }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.loading) ? _c('li', [_vm._t("default")], 2) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dcf17538", module.exports)
	  }
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(128)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(129),
	  /* template */
	  __webpack_require__(130),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Panel.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Panel.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-acbf5236", Component.options)
	  } else {
	    hotAPI.reload("data-v-acbf5236", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 128 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    header: { type: String },
	    isOpen: { type: Boolean, default: null },
	    type: { type: String, default: null }
	  },
	  data: function data() {
	    return {
	      open: this.isOpen
	    };
	  },
	
	  watch: {
	    isOpen: function isOpen(val) {
	      this.open = val;
	    }
	  },
	  computed: {
	    inAccordion: function inAccordion() {
	      return this.$parent && this.$parent._isAccordion;
	    },
	    panelType: function panelType() {
	      return 'panel-' + (this.type || this.$parent && this.$parent.type || 'default');
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.open = !this.open;
	      if (this.inAccordion) {
	        this.$parent.openChild(this);
	      }
	    },
	    enter: function enter(el) {
	      el.style.height = 'auto';
	      var endWidth = getComputedStyle(el).height;
	      el.style.height = '0px';
	      el.offsetHeight; // force repaint
	      el.style.height = endWidth;
	    },
	    afterEnter: function afterEnter(el) {
	      el.style.height = 'auto';
	    },
	    beforeLeave: function beforeLeave(el) {
	      el.style.height = getComputedStyle(el).height;
	      el.offsetHeight; // force repaint
	      el.style.height = '0px';
	    }
	  },
	  created: function created() {
	    if (this.isOpen === null) {
	      this.open = !this.inAccordion;
	    }
	  }
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', _vm.panelType]
	  }, [_c('div', {
	    class: ['panel-heading', {
	      'accordion-toggle': _vm.inAccordion
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.inAccordion && _vm.toggle()
	      }
	    }
	  }, [_vm._t("header", [_c('h4', {
	    staticClass: "panel-title"
	  }, [_vm._v(_vm._s(_vm.header))])])], 2), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "collapse"
	    },
	    on: {
	      "enter": _vm.enter,
	      "after-enter": _vm.afterEnter,
	      "before-leave": _vm.beforeLeave
	    }
	  }, [(_vm.open) ? _c('div', {
	    staticClass: "panel-collapse"
	  }, [_c('div', {
	    staticClass: "panel-body"
	  }, [_vm._t("default")], 2)]) : _vm._e()])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-acbf5236", module.exports)
	  }
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(132)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(133),
	  /* template */
	  __webpack_require__(135),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Popover.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Popover.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7680f674", Component.options)
	  } else {
	    hotAPI.reload("data-v-7680f674", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 132 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(134);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: { type: String, default: 'click' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    content: { type: String },
	    effect: { type: String, default: 'fade' },
	    header: { type: Boolean, default: true },
	    placement: { type: String, default: 'top' },
	    title: { type: String },
	    trigger: { type: String }
	  },
	  data: function data() {
	    return {
	      top: 0,
	      left: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    events: function events() {
	      return { contextmenu: ['contextmenu'], hover: ['mouseleave', 'mouseenter'], focus: ['blur', 'focus'] }[this.trigger] || ['click'];
	    }
	  },
	  methods: {
	    beforeEnter: function beforeEnter() {
	      var _this = this;
	
	      this.position();
	      setTimeout(function () {
	        return _this.position();
	      }, 30);
	    },
	    position: function position() {
	      var _this2 = this;
	
	      this.$nextTick(function () {
	        var popover = _this2.$refs.popover;
	        var trigger = _this2.$refs.trigger.children[0];
	        switch (_this2.placement) {
	          case 'top':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this2.top = trigger.offsetTop - popover.offsetHeight;
	            break;
	          case 'left':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'right':
	            _this2.left = trigger.offsetLeft + trigger.offsetWidth;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'bottom':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight;
	            break;
	          default:
	            console.warn('Wrong placement prop');
	        }
	        popover.style.top = _this2.top + 'px';
	        popover.style.left = _this2.left + 'px';
	      });
	    },
	    toggle: function toggle(e) {
	      if (e && this.trigger === 'contextmenu') e.preventDefault();
	      this.show = !this.show;
	      if (this.show) this.beforeEnter();
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;
	
	    var trigger = this.$refs.trigger.children[0];
	    if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.');
	
	    if (this.trigger === 'focus' && !~trigger.tabIndex) {
	      trigger = (0, _NodeList2.default)('a,input,select,textarea,button', trigger);
	      if (!trigger.length) {
	        return;
	      }
	    }
	    this.events.forEach(function (event) {
	      (0, _NodeList2.default)(trigger).on(event, _this3.toggle);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._trigger) (0, _NodeList2.default)(this._trigger).off();
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    }
	  }, [(_vm.show) ? _c('div', {
	    ref: "popover",
	    class: ['popover', _vm.placement]
	  }, [_c('div', {
	    staticClass: "arrow"
	  }), _vm._v(" "), (_vm.title) ? _c('h3', {
	    staticClass: "popover-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "popover-content"
	  }, [_vm._t("content", [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)]) : _vm._e()])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7680f674", module.exports)
	  }
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(137),
	  /* template */
	  __webpack_require__(138),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Progressbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Progressbar.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-12dfefe7", Component.options)
	  } else {
	    hotAPI.reload("data-v-12dfefe7", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	exports.default = {
	  props: {
	    animated: { type: Boolean, default: false },
	    label: { default: false },
	    now: { required: true },
	    striped: { type: Boolean, default: false },
	    type: { type: String }
	  },
	  computed: {
	    labelBool: function labelBool() {
	      return _utils.coerce.boolean(this.label);
	    },
	    nowNum: function nowNum() {
	      return _utils.coerce.number(this.now);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['progress-bar', 'progress-bar-' + _vm.type, {
	      active: _vm.animated,
	      'progress-bar-striped': _vm.striped
	    }],
	    style: ({
	      width: _vm.nowNum + '%'
	    }),
	    domProps: {
	      "textContent": _vm._s(_vm.labelBool ? _vm.nowNum + '%' : null)
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-12dfefe7", module.exports)
	  }
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(140)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(141),
	  /* template */
	  __webpack_require__(142),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Radio.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6faee548", Component.options)
	  } else {
	    hotAPI.reload("data-v-6faee548", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 140 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    button: { type: Boolean, default: false },
	    checkedValue: { default: true },
	    disabled: { type: Boolean, default: false },
	    name: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    type: { type: String, default: null },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      check: this.value
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return this.check === this.checkedValue;
	    },
	    parentValue: function parentValue() {
	      return this._inGroup ? this.$parent.val === this.value : null;
	    },
	    buttonStyle: function buttonStyle() {
	      return this.button || this._inGroup && this.$parent.buttons;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    check: function check(val) {
	      if (this.checkedValue === val) {
	        this.$emit('input', val);
	        this.$emit('checked', true);
	        if (this._inGroup) {
	          this.$parent.val = val;
	        }
	      }
	    },
	    parentValue: function parentValue(val) {
	      if (this.check !== val && this.checkedValue === val) {
	        this.check = val;
	      }
	    },
	    value: function value(val) {
	      this.check = this.checkedValue === val ? val : null;
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (parent && parent._btnGroup && !parent._checkboxGroup) {
	      this._inGroup = true;
	      parent._radioGroup = true;
	    }
	    if (this.$parent._radioGroup) {
	      if (this.$parent.val) {
	        this.check = this.$parent.val === this.checkedValue;
	      } else if (this.check) {
	        this.$parent.val = this.checkedValue;
	      }
	    }
	  },
	
	  methods: {
	    focus: function focus() {
	      this.$refs.input.focus();
	    },
	    toggle: function toggle() {
	      if (this.disabled) {
	        return;
	      }
	      this.focus();
	      if (this.readonly) {
	        return;
	      }
	      this.check = this.checkedValue;
	      if (this._inGroup) {
	        this.$parent.val = this.checkedValue;
	      }
	    }
	  }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.buttonStyle ? 'label' : 'div', {
	    tag: "div",
	    class: [(_vm.buttonStyle ? 'btn btn-' + _vm.typeColor : 'radio ' + _vm.typeColor), {
	      active: _vm.active,
	      disabled: _vm.disabled,
	      readonly: _vm.readonly
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [(_vm.buttonStyle) ? [_c('input', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.readonly),
	      expression: "!readonly"
	    }, {
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check),
	      expression: "check"
	    }],
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": _vm.name,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.checkedValue,
	      "checked": _vm._q(_vm.check, _vm.checkedValue)
	    },
	    on: {
	      "__c": function($event) {
	        _vm.check = _vm.checkedValue
	      }
	    }
	  }), _vm._v(" "), _vm._t("default")] : _c('label', {
	    staticClass: "open"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check),
	      expression: "check"
	    }],
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": _vm.name,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.checkedValue,
	      "checked": _vm._q(_vm.check, _vm.checkedValue)
	    },
	    on: {
	      "__c": function($event) {
	        _vm.check = _vm.checkedValue
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [_vm.active ? 'btn-' + _vm.typeColor : '', {
	      bg: _vm.typeColor === 'default'
	    }]
	  }), _vm._v(" "), (_vm.active && _vm.typeColor === 'default') ? _c('span', {
	    staticClass: "icon"
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6faee548", module.exports)
	  }
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(144)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(145),
	  /* template */
	  __webpack_require__(146),
	  /* scopeId */
	  "data-v-4617532a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Select.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Select.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4617532a", Component.options)
	  } else {
	    hotAPI.reload("data-v-4617532a", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 144 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var timeout = {};
	exports.default = {
	  directives: {
	    ClickOutside: _ClickOutside2.default
	  },
	  props: {
	    clearButton: { type: Boolean, default: false },
	    closeOnSelect: { type: Boolean, default: false },
	    disabled: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    limit: { type: Number, default: 1024 },
	    minSearch: { type: Number, default: 0 },
	    multiple: { type: Boolean, default: false },
	    name: { type: String, default: null },
	    options: { type: Array, default: function _default() {
	        return [];
	      }
	    },
	    optionsLabel: { type: String, default: 'label' },
	    optionsValue: { type: String, default: 'value' },
	    parent: { default: true },
	    placeholder: { type: String, default: null },
	    readonly: { type: Boolean, default: null },
	    required: { type: Boolean, default: null },
	    search: { type: Boolean, default: false },
	    searchText: { type: String, default: null },
	    url: { type: String, default: null },
	    value: null
	  },
	  data: function data() {
	    return {
	      list: [],
	      loading: null,
	      searchValue: null,
	      show: false,
	      notify: false,
	      val: null,
	      valid: null
	    };
	  },
	
	  computed: {
	    canSearch: function canSearch() {
	      return this.minSearch ? this.list.length >= this.minSearch : this.search;
	    },
	    classes: function classes() {
	      return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
	    },
	    filteredOptions: function filteredOptions() {
	      var _this = this;
	
	      var search = (this.searchValue || '').toLowerCase();
	      return !search ? this.list : this.list.filter(function (el) {
	        return ~el[_this.optionsLabel].toLowerCase().search(search);
	      });
	    },
	    hasParent: function hasParent() {
	      return this.parent instanceof Array ? this.parent.length : this.parent;
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
	    },
	    limitText: function limitText() {
	      return this.text.limit.replace('{{limit}}', this.limit);
	    },
	    selected: function selected() {
	      var _this2 = this;
	
	      if (this.list.length === 0) {
	        return '';
	      }
	      var sel = this.values.map(function (val) {
	        return (_this2.list.find(function (o) {
	          return o[_this2.optionsValue] === val;
	        }) || {})[_this2.optionsLabel];
	      }).filter(function (val) {
	        return val !== undefined;
	      });
	      this.$emit('selected', sel);
	      return sel.join(', ');
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.values.length === 0 || !this.hasParent ? this.placeholder || this.text.notSelected : null;
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    values: function values() {
	      return this.val instanceof Array ? this.val : ~[null, undefined].indexOf(this.val) ? [] : [this.val];
	    },
	    valOptions: function valOptions() {
	      var _this3 = this;
	
	      return this.list.map(function (el) {
	        return el[_this3.optionsValue];
	      });
	    }
	  },
	  watch: {
	    options: function options(_options) {
	      if (_options instanceof Array) this.setOptions(_options);
	    },
	    show: function show(val) {
	      if (val) {
	        this.$refs.search ? this.$refs.search.focus() : this.$refs.btn.focus();
	        // onBlur(this.$refs.select, e => { this.show = false })
	      } else {
	          // offBlur(this.$refs.select)
	        }
	    },
	    url: function url() {
	      this.urlChanged();
	    },
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (val !== old && this._parent) this._parent.validate();
	    },
	    value: function value(val, old) {
	      if (val !== old) {
	        this.val = val;
	      }
	    },
	    val: function val(_val, old) {
	      var _this4 = this;
	
	      if (_val === undefined) {
	        this.val = _val = null;
	      }
	      if (_val !== old) {
	        this.$emit('change', _val);
	        this.$emit('input', _val);
	      }
	      if (_val instanceof Array && _val.length > this.limit) {
	        this.val = _val.slice(0, this.limit);
	        this.notify = true;
	        if (timeout.limit) clearTimeout(timeout.limit);
	        timeout.limit = setTimeout(function () {
	          timeout.limit = false;
	          _this4.notify = false;
	        }, 1500);
	      }
	      this.valid = this.validate();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    checkData: function checkData() {
	      if (this.multiple) {
	        if (this.limit < 1) {
	          this.limit = 1;
	        }
	        if (!(this.val instanceof Array)) {
	          this.val = this.val === null || this.val === undefined ? [] : [this.val];
	        }
	        var values = this.valOptions;
	        this.val = this.val.filter(function (el) {
	          return ~values.indexOf(el);
	        });
	        if (this.values.length > this.limit) {
	          this.val = this.val.slice(0, this.limit);
	        }
	      } else {
	        if (!~this.valOptions.indexOf(this.val)) {
	          this.val = null;
	        }
	      }
	    },
	    clear: function clear() {
	      if (this.disabled || this.readonly) {
	        return;
	      }
	      this.val = this.val instanceof Array ? [] : null;
	      this.toggle();
	    },
	    clearSearch: function clearSearch() {
	      this.searchValue = '';
	      this.$refs.search.focus();
	    },
	    isSelected: function isSelected(v) {
	      return this.values.indexOf(v) > -1;
	    },
	    select: function select(v) {
	      if (this.val instanceof Array) {
	        var newVal = this.val.slice(0);
	        if (~newVal.indexOf(v)) {
	          newVal.splice(newVal.indexOf(v), 1);
	        } else {
	          newVal.push(v);
	        }
	        this.val = newVal;
	        if (this.closeOnSelect) {
	          this.toggle();
	        }
	      } else {
	        this.val = v;
	        this.toggle();
	      }
	    },
	    setOptions: function setOptions(options) {
	      var _this5 = this;
	
	      this.list = options.map(function (el) {
	        if (el instanceof Object) {
	          return el;
	        }
	        var obj = {};
	        obj[_this5.optionsLabel] = el;
	        obj[_this5.optionsValue] = el;
	        return obj;
	      });
	      this.$emit('options', this.list);
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	      if (!this.show) this.$refs.btn.focus();
	    },
	    urlChanged: function urlChanged() {
	      var _this6 = this;
	
	      if (!this.url || !this.$http) {
	        return;
	      }
	      this.loading = true;
	      this.$http.get(this.url).then(function (response) {
	        var data = response.data instanceof Array ? response.data : [];
	        try {
	          data = JSON.parse(data);
	        } catch (e) {}
	        _this6.setOptions(data);
	        _this6.loading = false;
	        _this6.checkData();
	      }, function (response) {
	        _this6.loading = false;
	      });
	    },
	    validate: function validate() {
	      return !this.required ? true : this.val instanceof Array ? this.val.length > 0 : this.val !== null;
	    }
	  },
	  created: function created() {
	    this.setOptions(this.options);
	    this.val = this.value;
	    this._select = true;
	    if (this.val === undefined || !this.parent) {
	      this.val = null;
	    }
	    if (!this.multiple && this.val instanceof Array) {
	      this.val = this.val[0];
	    }
	    this.checkData();
	    if (this.url) this.urlChanged();
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    if (this._parent) this._parent.children.push(this);
	    this.setOptions(this.options);
	    this.val = this.value;
	    this.checkData();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (_vm.close),
	      expression: "close"
	    }],
	    ref: "select",
	    class: _vm.classes
	  }, [_c('div', {
	    ref: "btn",
	    staticClass: "form-control dropdown-toggle",
	    attrs: {
	      "tabindex": "1",
	      "disabled": _vm.disabled || !_vm.hasParent,
	      "readonly": _vm.readonly
	    },
	    on: {
	      "blur": function($event) {
	        _vm.canSearch ? null : _vm.close()
	      },
	      "click": function($event) {
	        _vm.toggle()
	      },
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.close($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.toggle($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.toggle($event)
	      }]
	    }
	  }, [_c('span', {
	    staticClass: "btn-content",
	    domProps: {
	      "innerHTML": _vm._s(_vm.loading ? _vm.text.loading : _vm.showPlaceholder || _vm.selected)
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.values.length) ? _c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.clear()
	      }
	    }
	  }, [_vm._v("×")]) : _vm._e()]), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "sel",
	    staticClass: "secret",
	    attrs: {
	      "name": _vm.name,
	      "multiple": _vm.multiple,
	      "required": _vm.required,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    on: {
	      "change": function($event) {
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.val = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
	      }
	    }
	  }, [(_vm.required) ? _c('option', {
	    attrs: {
	      "value": ""
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._l((_vm.list), function(option) {
	    return _c('option', {
	      domProps: {
	        "value": option[_vm.optionsValue]
	      }
	    }, [_vm._v(_vm._s(option[_vm.optionsLabel]))])
	  })], 2), _vm._v(" "), _c('ul', {
	    staticClass: "dropdown-menu"
	  }, [(_vm.list.length) ? [(_vm.canSearch) ? _c('li', {
	    staticClass: "bs-searchbox"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchValue),
	      expression: "searchValue"
	    }],
	    ref: "search",
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.searchText || _vm.text.search,
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": (_vm.searchValue)
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.close($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchValue = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.searchValue),
	      expression: "searchValue"
	    }],
	    staticClass: "close",
	    on: {
	      "click": _vm.clearSearch
	    }
	  }, [_vm._v("×")])]) : _vm._e(), _vm._v(" "), (_vm.required && !_vm.clearButton) ? _c('li', [_c('a', {
	    on: {
	      "mousedown": function($event) {
	        $event.preventDefault();
	        _vm.clear() && _vm.close()
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.placeholder || _vm.text.notSelected))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.filteredOptions), function(option) {
	    return _c('li', {
	      attrs: {
	        "id": option[_vm.optionsValue]
	      }
	    }, [_c('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.select(option[_vm.optionsValue])
	        }
	      }
	    }, [_c('span', {
	      domProps: {
	        "innerHTML": _vm._s(option[_vm.optionsLabel])
	      }
	    }), _vm._v(" "), _c('span', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (_vm.isSelected(option[_vm.optionsValue])),
	        expression: "isSelected(option[optionsValue])"
	      }],
	      staticClass: "glyphicon glyphicon-ok check-mark"
	    })])])
	  })] : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.notify && !_vm.closeOnSelect) ? _c('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_c('div', {
	    staticClass: "notify in"
	  }, [_vm._v(_vm._s(_vm.limitText))])]) : _vm._e()], 2), _vm._v(" "), (_vm.notify && _vm.closeOnSelect) ? _c('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_c('div', {
	    staticClass: "notify out"
	  }, [_c('div', [_vm._v(_vm._s(_vm.limitText))])])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4617532a", module.exports)
	  }
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(148),
	  /* template */
	  __webpack_require__(149),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Slider.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fcd1c060", Component.options)
	  } else {
	    hotAPI.reload("data-v-fcd1c060", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
	exports.default = {
	  computed: {
	    index: function index() {
	      return this.$parent.$children.indexOf(this);
	    },
	    show: function show() {
	      return this.$parent.index === this.index;
	    }
	  },
	  mounted: function mounted() {
	    if (this.$parent.indicator_list) {
	      this.$parent.indicator_list.push(this.index);
	    }
	
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "item"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fcd1c060", module.exports)
	  }
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(151)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(152),
	  /* template */
	  __webpack_require__(153),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Spinner.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Spinner.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5ac4fe3a", Component.options)
	  } else {
	    hotAPI.reload("data-v-5ac4fe3a", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var MIN_WAIT = 500; // in ms
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    fixed: { type: Boolean, default: false },
	    global: { type: Boolean, default: false },
	    size: { type: String, default: 'md' },
	    text: { type: String, default: '' },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      active: this.value,
	      locked: false
	    };
	  },
	
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return 'spinner-' + (this.size ? this.size : 'sm');
	    }
	  },
	  watch: {
	    active: function active(val, old) {
	      if (val !== old) this.$emit('input', val);
	    },
	    value: function value(val, old) {
	      if (val !== old) {
	        this[val ? 'show' : 'hide']();
	      }
	    }
	  },
	  methods: {
	    hide: function hide() {
	      var delay = 0;
	      this.active = false;
	    },
	    show: function show(options) {
	      if (options) {
	        if (options.text) {
	          this.text = options.text;
	        }
	        if (options.size) {
	          this.size = options.size;
	        }
	        if (options.fixed) {
	          this.fixed = options.fixed;
	        }
	      }
	      // block scrolling when spinner is on
	      this._body.style.overflowY = 'hidden';
	      // activate spinner
	      this._started = new Date();
	      this.active = true;
	      this.locked = true;
	      this._unlock();
	    }
	  },
	  created: function created() {
	    this._body = document.body;
	    this._bodyOverflow = document.body.style.overflowY;
	    this._unlock = (0, _utils.delayer)(function () {
	      this.locked = false;
	      this._body.style.overflowY = this._bodyOverflow;
	    }, MIN_WAIT);
	    if (this.global) {
	      if (!this.$root._globalSpinner) {
	        this.$root._globalSpinner = true;
	        var self = this;
	        this._global = {
	          hide: function hide() {
	            self.hide();
	          },
	          show: function show() {
	            self.show();
	          }
	        };
	        this.$root.$on('spinner::show', this._global.show);
	        this.$root.$on('spinner::hide', this._global.hide);
	      }
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._global) {
	      this.$root.$off('spinner::show', this._global.show);
	      this.$root.$off('spinner::hide', this._global.hide);
	      delete this.$root._globalSpinner;
	    }
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  }
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.active || _vm.locked),
	      expression: "active||locked"
	    }],
	    class: ['spinner spinner-gritcode', _vm.spinnerSize, {
	      'spinner-fixed': _vm.fixed
	    }]
	  }, [_c('div', {
	    staticClass: "spinner-wrapper"
	  }, [_c('div', {
	    staticClass: "spinner-circle"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "spinner-text"
	  }, [_vm._v(_vm._s(_vm.text))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5ac4fe3a", module.exports)
	  }
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(155),
	  /* template */
	  __webpack_require__(156),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Tab.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Tab.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4f275a36", Component.options)
	  } else {
	    hotAPI.reload("data-v-4f275a36", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    disabled: { type: Boolean, default: false },
	    header: { type: String }
	  },
	  data: function data() {
	    return {
	      fadein: false
	    };
	  },
	
	  computed: {
	    active: function active() {
	      var _this = this;
	
	      var active = !this._tabs || this._tabs.show === this;
	      this.fadein = false;
	      if (active) {
	        setTimeout(function () {
	          _this.fadein = true;
	        }, 0);
	      }
	      return active;
	    },
	    index: function index() {
	      return this._tabs.tabs.indexOf(this);
	    },
	    transition: function transition() {
	      return this._tabs ? this._tabs.effect : null;
	    }
	  },
	  created: function created() {
	    this._isTab = true;
	    var tabs = this;
	    while (!this._tabs && tabs.$parent) {
	      if (tabs._isTabGroup) {
	        tabs.tabs.push(this);
	        this._tabGroup = tabs;
	      }
	      if (tabs._isTabs) {
	        tabs.tabs.push(this);
	        this._tabs = tabs;
	        if (!this._tabGroup) tabs.headers.push(this);
	      }
	      tabs = tabs.$parent;
	    }
	    if (!this._tabs) throw Error('tab depend on tabs.');
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this2 = this;
	
	    if (this._tabGroup) {
	      this._tabGroup.tabs = this._tabGroup.tabs.filter(function (el) {
	        return el !== _this2;
	      });
	    }
	    if (this._tabs) {
	      this._tabs.tabs = this._tabs.tabs.filter(function (el) {
	        return el !== _this2;
	      });
	    }
	    if (this._tabs) {
	      if (this._tabs.active === this.index) {
	        this._tabs.index = 0;
	      }
	      if (this._ingroup) {
	        var id = this.$parent.tabs.indexOf(this);
	        if (~id) this.$parent.tabs.splice(id, 1);
	      }
	    }
	    if (this._tabs) {
	      var _id = this._tabs.tabs.indexOf(this);
	      if (~_id) this._tabs.tabs.splice(_id, 1);
	    }
	  }
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "panel",
	    class: ['tab-pane', {
	      'active fade': _vm.active,
	      'in': _vm.fadein
	    }],
	    attrs: {
	      "role": "tabpanel"
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4f275a36", module.exports)
	  }
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(158)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(159),
	  /* template */
	  __webpack_require__(160),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/TabGroup.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] TabGroup.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7e4c46ce", Component.options)
	  } else {
	    hotAPI.reload("data-v-7e4c46ce", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 158 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
	exports.default = {
	  props: {
	    disabled: { type: Boolean, default: false },
	    header: { type: String }
	  },
	  data: function data() {
	    return {
	      show: false,
	      tabs: []
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return ~this.tabs.indexOf(this._tabs.show);
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },
	  created: function created() {
	    this._isTabGroup = true;
	    if (this.$parent) {
	      if (this.$parent._isTabGroup) throw Error('Can\'t nest tab-groups.');
	      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.');
	    }
	    this._tabs = this.$parent;
	    this._tabs.headers.push(this);
	  }
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7e4c46ce", module.exports)
	  }
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(162)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(163),
	  /* template */
	  __webpack_require__(164),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Tabs.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cd20e4a6", Component.options)
	  } else {
	    hotAPI.reload("data-v-cd20e4a6", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 162 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _Dropdown = __webpack_require__(100);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  },
	  props: {
	    // effect: {type: String, default: 'fadein'},
	    justified: false,
	    navStyle: { type: String, default: null },
	    value: { type: Number, default: 0 }
	  },
	  data: function data() {
	    var index = this.value || 0;
	    return {
	      index: index,
	      headers: [],
	      tabs: []
	    };
	  },
	
	  watch: {
	    index: function index(val) {
	      this.$emit('active', val);
	      this.$emit('input', val);
	    },
	    value: function value(val) {
	      this.index = val;
	    }
	  },
	  computed: {
	    navStyleClass: function navStyleClass() {
	      return ['nav', ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs', {
	        'nav-justified': _utils.coerce.boolean(this.justified),
	        'nav-pills': this.navStyle === 'stacked'
	      }];
	    },
	    show: function show() {
	      return this.tabs[this.index] || this.tabs[0];
	    }
	  },
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.index = this.tabs.indexOf(tab);
	      }
	    }
	  },
	  created: function created() {
	    this._isTabs = true;
	  }
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "tabs": ""
	    }
	  }, [_c('ul', {
	    class: _vm.navStyleClass,
	    attrs: {
	      "role": "tablist"
	    }
	  }, [_vm._l((_vm.headers), function(header) {
	    return [(header._isTab) ? _c('li', {
	      class: {
	        active: header.active, disabled: header.disabled
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.select(header)
	        }
	      }
	    }, [_vm._t("header", [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      domProps: {
	        "innerHTML": _vm._s(header.header)
	      }
	    })])], 2) : _vm._e(), _vm._v(" "), (header._isTabGroup) ? _c('dropdown', {
	      class: {
	        active: header.active
	      },
	      attrs: {
	        "text": header.header,
	        "disabled": header.disabled
	      }
	    }, _vm._l((header.tabs), function(tab) {
	      return _c('li', {
	        class: {
	          disabled: tab.disabled
	        }
	      }, [_c('a', {
	        attrs: {
	          "href": "#"
	        },
	        on: {
	          "click": function($event) {
	            $event.preventDefault();
	            _vm.select(tab)
	          }
	        }
	      }, [_vm._v(_vm._s(tab.header))])])
	    })) : _vm._e()]
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "tab-content"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cd20e4a6", module.exports)
	  }
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(166),
	  /* template */
	  __webpack_require__(167),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/ToggleButton.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] ToggleButton.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-24677ed5", Component.options)
	  } else {
	    hotAPI.reload("data-v-24677ed5", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	exports.default = {
	  props: {
	    disabled: { default: null },
	    falseType: { default: null },
	    name: null,
	    readonly: { default: null },
	    trueType: { default: 'primary' },
	    value: false
	  },
	  data: function data() {
	    return {
	      active: _utils.coerce.boolean(this.value),
	      types: {
	        danger: 'btn-danger',
	        info: 'btn-info',
	        primary: 'btn-primary',
	        success: 'btn-success',
	        warning: 'btn-warning'
	      }
	    };
	  },
	
	  watch: {
	    active: function active(val, old) {
	      if (val !== old) {
	        this.$emit('changed', val);
	        this.$emit(val ? 'enabled' : 'disabled');
	        this.$emit('input', val);
	      }
	    },
	    value: function value(val, old) {
	      if (val !== old) {
	        this.active = _utils.coerce.boolean(this.value);
	      }
	    }
	  },
	  computed: {
	    boolDisabled: function boolDisabled() {
	      return _utils.coerce.boolean(this.disabled);
	    },
	    boolReadonly: function boolReadonly() {
	      return _utils.coerce.boolean(this.readonly);
	    },
	    type: function type() {
	      return this.types[this.value ? this.trueType : this.falseType] || 'btn-default';
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (this.boolDisabled || this.boolReadonly) {
	        return;
	      }
	      this.active = !this.active;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    class: ['btn', _vm.type, {
	      readonly: _vm.boolReadonly
	    }],
	    attrs: {
	      "href": "javascript:void(0)",
	      "disabled": _vm.boolDisabled
	    },
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_c('span', {
	    class: ['glyphicon', 'glyphicon-' + (_vm.value ? 'ok' : 'remove')]
	  }), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.name) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.active ? 1 : 0
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-24677ed5", module.exports)
	  }
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(169)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(170),
	  /* template */
	  __webpack_require__(171),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Tooltip.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Tooltip.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2d55d1b8", Component.options)
	  } else {
	    hotAPI.reload("data-v-2d55d1b8", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 169 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(134);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    effect: { type: String, default: 'scale' },
	    trigger: { type: String, default: 'hover' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    }
	  }, [(_vm.show) ? _c('div', {
	    ref: "popover",
	    class: ['tooltip', _vm.placement]
	  }, [_c('div', {
	    staticClass: "tooltip-arrow"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "tooltip-inner"
	  }, [_vm._t("content", [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)]) : _vm._e()])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2d55d1b8", module.exports)
	  }
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(173)
	
	var Component = __webpack_require__(70)(
	  /* script */
	  __webpack_require__(174),
	  /* template */
	  __webpack_require__(190),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/mybook/webpack/vue-strap/src/Typeahead.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Typeahead.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7962fcb0", Component.options)
	  } else {
	    hotAPI.reload("data-v-7962fcb0", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 173 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(175);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _utils = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DELAY = 300; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    async: { type: String },
	    data: { type: Array },
	    delay: { type: Number, default: DELAY },
	    asyncKey: { type: String, default: null },
	    limit: { type: Number, default: 8 },
	    matchCase: { type: Boolean, default: false },
	    matchStart: { type: Boolean, default: false },
	    onHit: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    placeholder: { type: String },
	    template: { type: String },
	    type: { type: String, default: 'text' },
	    value: { type: String, default: '' }
	  },
	  data: function data() {
	    return {
	      asign: '',
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: [],
	      val: this.value
	    };
	  },
	
	  computed: {
	    templateComp: function templateComp() {
	      return {
	        template: typeof this.template === 'string' ? '<span>' + this.template + '</span>' : '<strong v-html="item"></strong>',
	        props: { item: { default: null } }
	      };
	    }
	  },
	  watch: {
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	      if (_val !== old && _val !== this.asign) this.__update();
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  methods: {
	    setItems: function setItems(data) {
	      var _this = this;
	
	      if (this.async) {
	        this.items = this.asyncKey ? data[this.asyncKey] : data;
	        this.items = this.items.slice(0, this.limit);
	      } else {
	        this.items = (data || []).filter(function (value) {
	          if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	            return true;
	          }
	          value = _this.matchCase ? value : value.toLowerCase();
	          var query = _this.matchCase ? _this.val : _this.val.toLowerCase();
	          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	      this.showDropdown = this.items.length > 0;
	    },
	    setValue: function setValue(value) {
	      this.asign = value;
	      this.val = value;
	      this.items = [];
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    reset: function reset() {
	      this.setValue(null);
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.setValue(this.onHit(this.items[this.current], this));
	    },
	    up: function up() {
	      if (this.current > 0) {
	        this.current--;
	      } else {
	        this.current = this.items.length - 1;
	      }
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) {
	        this.current++;
	      } else {
	        this.current = 0;
	      }
	    }
	  },
	  created: function created() {
	    this.__update = (0, _utils.delayer)(function () {
	      var _this2 = this;
	
	      if (!this.val) {
	        this.reset();
	        return;
	      }
	      this.asign = '';
	      if (this.async) {
	        (0, _utils.getJSON)(this.async + this.val).then(function (data) {
	          _this2.setItems(data);
	        });
	      } else if (this.data) {
	        this.setItems(this.data);
	      }
	    }, 'delay', DELAY);
	    this.__update();
	  }
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(20);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(176);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(177), __esModule: true };

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(178);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(189);
	module.exports = __webpack_require__(7).Symbol;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(6)
	  , has            = __webpack_require__(29)
	  , DESCRIPTORS    = __webpack_require__(15)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(28)
	  , META           = __webpack_require__(179).KEY
	  , $fails         = __webpack_require__(16)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , wksExt         = __webpack_require__(55)
	  , wksDefine      = __webpack_require__(180)
	  , keyOf          = __webpack_require__(181)
	  , enumKeys       = __webpack_require__(182)
	  , isArray        = __webpack_require__(185)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(18)
	  , createDesc     = __webpack_require__(19)
	  , _create        = __webpack_require__(32)
	  , gOPNExt        = __webpack_require__(60)
	  , $GOPD          = __webpack_require__(186)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(34)
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
	  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(184).f  = $propertyIsEnumerable;
	  __webpack_require__(183).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(27)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(29)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(16)(function(){
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
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(6)
	  , core           = __webpack_require__(7)
	  , LIBRARY        = __webpack_require__(27)
	  , wksExt         = __webpack_require__(55)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34)
	  , gOPS    = __webpack_require__(183)
	  , pIE     = __webpack_require__(184);
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
/* 183 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 184 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(184)
	  , createDesc     = __webpack_require__(19)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(18)
	  , has            = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 187 */
/***/ function(module, exports) {



/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(180)('asyncIterator');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(180)('observable');

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: {
	      open: _vm.showDropdown
	    },
	    staticStyle: {
	      "position": "relative"
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "autocomplete": "off",
	      "placeholder": _vm.placeholder,
	      "type": _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": function($event) {
	        _vm.showDropdown = false
	      },
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        $event.preventDefault();
	        _vm.down($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.hit($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.reset($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        $event.preventDefault();
	        _vm.up($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('ul', {
	    ref: "dropdown",
	    staticClass: "dropdown-menu"
	  }, _vm._l((_vm.items), function(item, i) {
	    return _c('li', {
	      class: {
	        active: _vm.isActive(i)
	      }
	    }, [_c('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.hit($event)
	        },
	        "mousemove": function($event) {
	          _vm.setActive(i)
	        }
	      }
	    }, [_c(_vm.templateComp, {
	      tag: "component",
	      attrs: {
	        "item": item
	      }
	    })], 1)])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7962fcb0", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-strap.js.map
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(44);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _gettingStarted = __webpack_require__(98);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _Affix = __webpack_require__(100);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(108);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _headerDocs = __webpack_require__(110);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _alertDocs = __webpack_require__(116);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _accordionDocs = __webpack_require__(127);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(138);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _asideDocs = __webpack_require__(149);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _carouselDocs = __webpack_require__(158);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _buttonsDocs = __webpack_require__(169);
	
	var _buttonsDocs2 = _interopRequireDefault(_buttonsDocs);
	
	var _datepickerDocs = __webpack_require__(184);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _dropdownDocs = __webpack_require__(230);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _modalDocs = __webpack_require__(236);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _popoverDocs = __webpack_require__(248);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _progressbarDocs = __webpack_require__(256);
	
	var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);
	
	var _selectDocs = __webpack_require__(262);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _tabsDocs = __webpack_require__(267);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _tooltipDocs = __webpack_require__(280);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _typeaheadDocs = __webpack_require__(283);
	
	var _typeaheadDocs2 = _interopRequireDefault(_typeaheadDocs);
	
	var _spinnerDocs = __webpack_require__(292);
	
	var _spinnerDocs2 = _interopRequireDefault(_spinnerDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(300);
	__webpack_require__(302);
	__webpack_require__(304);
	__webpack_require__(305);
	
	Vue.config.debug = true;
	
	new Vue({
	  el: '#wrapper',
	  components: {
	    gettingStarted: _gettingStarted2.default,
	    container: _container2.default,
	    affix: _Affix2.default,
	    alertDocs: _alertDocs2.default,
	    headerDocs: _headerDocs2.default,
	    accordionDocs: _accordionDocs2.default,
	    affixDocs: _affixDocs2.default,
	    asideDocs: _asideDocs2.default,
	    carouselDocs: _carouselDocs2.default,
	    buttonsDocs: _buttonsDocs2.default,
	    datepickerDocs: _datepickerDocs2.default,
	    dropdownDocs: _dropdownDocs2.default,
	    modalDocs: _modalDocs2.default,
	    popoverDocs: _popoverDocs2.default,
	    progressbarDocs: _progressbarDocs2.default,
	    selectDocs: _selectDocs2.default,
	    tabsDocs: _tabsDocs2.default,
	    tooltipDocs: _tooltipDocs2.default,
	    typeaheadDocs: _typeaheadDocs2.default,
	    spinnerDocs: _spinnerDocs2.default,
	    list: {
	      inherit: true,
	      template: ''
	    }
	  },
	  data: function data() {
	    return {
	      anchor: []
	    };
	  },
	
	  filters: {
	    space: function space(val) {
	      return val.replace('-', ' ');
	    }
	  },
	  ready: function ready() {
	    // add h1.anchor.innerHTML to sidebar list
	    var anchor = document.querySelectorAll('.anchor');
	    this.anchor = [].concat((0, _toConsumableArray3.default)(anchor)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    // Scrollspy
	    var section = document.querySelectorAll('.bs-docs-section');
	    var sections = {};
	    var navbar = document.querySelector('#sidenav');
	    var i = 0;
	
	    window.onload = function () {
	      Array.prototype.forEach.call(section, function (e) {
	        sections[e.id] = e.offsetTop;
	      });
	    };
	
	    function scrollSpy() {
	      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	
	      for (i in sections) {
	        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
	        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
	        if (sections[i] + 420 <= scrollPosition) {
	          if (navbar) {
	            if (navbar.querySelector('.active')) navbar.querySelector('.active').className = '';
	            navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active';
	          }
	        }
	      }
	    }
	
	    window.onscroll = function () {
	      scrollSpy();
	    };
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(45);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);
	__webpack_require__(91);
	module.exports = __webpack_require__(55).Array.from;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(48)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(51)(String, 'String', function(iterated){
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(49)
	  , defined   = __webpack_require__(50);
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
/* 49 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(52)
	  , $export        = __webpack_require__(53)
	  , redefine       = __webpack_require__(68)
	  , hide           = __webpack_require__(58)
	  , has            = __webpack_require__(69)
	  , Iterators      = __webpack_require__(70)
	  , $iterCreate    = __webpack_require__(71)
	  , setToStringTag = __webpack_require__(87)
	  , getPrototypeOf = __webpack_require__(89)
	  , ITERATOR       = __webpack_require__(88)('iterator')
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
/* 52 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(54)
	  , core      = __webpack_require__(55)
	  , ctx       = __webpack_require__(56)
	  , hide      = __webpack_require__(58)
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
/* 54 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 55 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(57);
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
/* 57 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(59)
	  , createDesc = __webpack_require__(67);
	module.exports = __webpack_require__(63) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(60)
	  , IE8_DOM_DEFINE = __webpack_require__(62)
	  , toPrimitive    = __webpack_require__(66)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(63) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(61);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(63) && !__webpack_require__(64)(function(){
	  return Object.defineProperty(__webpack_require__(65)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(64)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(61)
	  , document = __webpack_require__(54).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(61);
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
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(58);

/***/ },
/* 69 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(72)
	  , descriptor     = __webpack_require__(67)
	  , setToStringTag = __webpack_require__(87)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(58)(IteratorPrototype, __webpack_require__(88)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(60)
	  , dPs         = __webpack_require__(73)
	  , enumBugKeys = __webpack_require__(85)
	  , IE_PROTO    = __webpack_require__(82)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(65)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(86).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(59)
	  , anObject = __webpack_require__(60)
	  , getKeys  = __webpack_require__(74);
	
	module.exports = __webpack_require__(63) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(75)
	  , enumBugKeys = __webpack_require__(85);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(69)
	  , toIObject    = __webpack_require__(76)
	  , arrayIndexOf = __webpack_require__(79)(false)
	  , IE_PROTO     = __webpack_require__(82)('IE_PROTO');
	
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(77)
	  , defined = __webpack_require__(50);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(78);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(76)
	  , toLength  = __webpack_require__(80)
	  , toIndex   = __webpack_require__(81);
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(49)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(49)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(83)('keys')
	  , uid    = __webpack_require__(84);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(54)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54).document && document.documentElement;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(59).f
	  , has = __webpack_require__(69)
	  , TAG = __webpack_require__(88)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(83)('wks')
	  , uid        = __webpack_require__(84)
	  , Symbol     = __webpack_require__(54).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(69)
	  , toObject    = __webpack_require__(90)
	  , IE_PROTO    = __webpack_require__(82)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(50);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(56)
	  , $export        = __webpack_require__(53)
	  , toObject       = __webpack_require__(90)
	  , call           = __webpack_require__(92)
	  , isArrayIter    = __webpack_require__(93)
	  , toLength       = __webpack_require__(80)
	  , createProperty = __webpack_require__(94)
	  , getIterFn      = __webpack_require__(95);
	
	$export($export.S + $export.F * !__webpack_require__(97)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(60);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(70)
	  , ITERATOR   = __webpack_require__(88)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(59)
	  , createDesc      = __webpack_require__(67);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(96)
	  , ITERATOR  = __webpack_require__(88)('iterator')
	  , Iterators = __webpack_require__(70);
	module.exports = __webpack_require__(55).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(78)
	  , TAG = __webpack_require__(88)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(88)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(99)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"getting-started\">\r\n    <h1 class=\"page-header\"><a href=\"#getting-started\" class=\"anchor\">Getting started</a></h1>\r\n    <div class=\"bs-callout bs-callout-success\">\r\n      <h4>About this project</h4>\r\n      <p>\r\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\r\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\r\n        The only required dependencies are:\r\n      </p>\r\n      <ul>\r\n        <li><a href=\"http://vuejs.org/\">Vue.js</a>\r\n          (required ^1.0.8, test with 1.0.8).</li>\r\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a>\r\n          (required 3.x.x, test with 3.3.5).\r\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <h2>CommonJS</h2>\r\n    <pre><code class=\"language-javascript\">\r\n$ npm install vue-strap\r\n\r\nvar alert = require('vue-strap/lib/alert');\r\n// or\r\nvar alert = require('vue-strap').alert;\r\n\r\nnew Vue({\r\n  components: {\r\n    'alert': alert\r\n  }\r\n})\r\n    </code></pre>\r\n    <h2>ES6</h2>\r\n    <pre><code class=\"language-javascript\">\r\n$ npm install vue-strap\r\n\r\nimport alert from 'vue-strap/src/alert'\r\n// or\r\nimport { alert } from 'vue-strap'\r\n\r\nnew Vue({\r\n  components: {\r\n    alert\r\n  }\r\n})\r\n    </code></pre>\r\n    <h2>Browser globals</h2>\r\n    <p>\r\n      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.js</code> with\r\n      all components exported in the <code>window.VueStrap</code> object.\r\n    </p>\r\n    <pre><code class=\"language-markup\">\r\n&lt;v-select :options=\"options\"&gt;&lt;/v-select&gt;\r\n\r\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\r\n&lt;script src=&quot;path/to/vue-strap.js&quot;&gt;&lt;/script&gt;\r\n&lt;script&gt;\r\n  new Vue({\r\n    components: {\r\n      vSelect: VueStrap.select\r\n    },\r\n    data: {\r\n      options: []\r\n    }\r\n  })\r\n&lt;/script&gt;\r\n    </code></pre>\r\n  </div>";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(101)
	module.exports = __webpack_require__(105)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(107)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-216317fd&file=Affix.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-216317fd&file=Affix.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".vue-affix {\r\n    position: fixed;\r\n  }", ""]);
	
	// exports


/***/ },
/* 103 */
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
/* 104 */
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
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {}
	    };
	  },
	
	  methods: {
	    scrolling: function scrolling() {
	      var scrollTop = this.getScroll(window, true);
	      var elementOffset = this.getOffset(this.$el);
	      if (!this.affixed && scrollTop > elementOffset.top) {
	        this.affixed = true;
	        this.styles = {
	          top: this.offset + 'px',
	          left: elementOffset.left + 'px',
	          width: this.$el.offsetWidth + 'px'
	        };
	      }
	      if (this.affixed && scrollTop < elementOffset.top) {
	        this.affixed = false;
	        this.styles = {};
	      }
	    },
	
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	        // ie6,7,8 standard mode
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          // quirks mode
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	  },
	  ready: function ready() {
	    this._scrollEvent = _EventListener2.default.listen(window, 'scroll', this.scrolling);
	    this._resizeEvent = _EventListener2.default.listen(window, 'resize', this.scrolling);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._scrollEvent) {
	      this._scrollEvent.remove();
	    }
	    if (this._resizeEvent) {
	      this._resizeEvent.remove();
	    }
	  }
	};
	// </script>

	// <style>

	//   .vue-affix {

	//     position: fixed;

	//   }

	// </style>
	// <template>

	// <div>

	// <div v-bind:class="{'vue-affix': affixed}"

	//   v-bind:style="styles">

	//   <slot></slot>

	// </div>

	// </div>

	// </template>

	// <script>

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports.default = EventListener;

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n<div v-bind:class=\"{'vue-affix': affixed}\"\r\n  v-bind:style=\"styles\">\r\n  <slot></slot>\r\n</div>\r\n</div>";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(109)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container bs-docs-container\">\r\n    <div class=\"row\">\r\n        <slot></slot>\r\n    </div>\r\n  </div>";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(111)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(115)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./headerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./headerDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./headerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Navbar = __webpack_require__(112);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    navbar: _Navbar2.default
	  }
	};
	// </script>
	// <template>

	//   <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner">

	//     <navbar>

	//       <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">

	//         <span class="sr-only">Toggle navigation</span>

	//         <span class="icon-bar"></span>

	//         <span class="icon-bar"></span>

	//         <span class="icon-bar"></span>

	//       </button>

	//       <a href="../" class="navbar-brand">VueStrap</a>

	//       <nav id="bs-navbar" class="collapse navbar-collapse" slot="dropdown-menu">

	//         <ul class="nav navbar-nav">

	//           <li>

	//             <a href="#accordion" style="color:#19986B">Components</a>

	//           </li>

	//         </ul>

	//         <ul class="nav navbar-nav navbar-right">

	//           <li><a href="https://github.com/yuche/vue-strap">

	//             <span class="icon-github-circled"></span>

	//             GitHub

	//           </a></li>

	//         </ul>

	//       </nav>

	//     </navbar>

	//   </header>

	// </template>

	// <script>

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(114)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  methods: {
	    toggleCollapse: function toggleCollapse(e) {
	      e.preventDefault();
	
	      // collapse data-target
	      var tmp = this.$el.querySelector('[data-target]');
	      var id = tmp.getAttribute('data-target');
	      var o = document.getElementById(id.substring(1));
	      o.classList.toggle('collapse');
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var toggle = this.$el.querySelector('[data-toggle="collapse"]');
	    if (toggle) {
	      toggle.style.borderRadius = '4px';
	      toggle.addEventListener('click', this.toggleCollapse);
	    }
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) {
	        _this.$el.classList.remove('open');
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) {
	      this._closeEvent.remove();
	    }
	  }
	};
	// </script>
	// <template>

	//   <div class="container-fluid">

	//     <div class="navbar-header">

	//       <slot></slot>

	//     </div>

	//     <slot name="dropdown-menu"></slot>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <slot></slot>\r\n    </div>\r\n    <slot name=\"dropdown-menu\"></slot>\r\n  </div>";

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<header class=\"navbar navbar-static-top bs-docs-nav\" id=\"top\" role=\"banner\">\r\n    <navbar>\r\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a href=\"../\" class=\"navbar-brand\">VueStrap</a>\r\n      <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\" slot=\"dropdown-menu\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a href=\"#accordion\" style=\"color:#19986B\">Components</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"https://github.com/yuche/vue-strap\">\r\n            <span class=\"icon-github-circled\"></span>\r\n            GitHub\r\n          </a></li>\r\n        </ul>\r\n      </nav>\r\n    </navbar>\r\n  </header>";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117)
	module.exports = __webpack_require__(119)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(126)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-255a786f&file=alertDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-255a786f&file=alertDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".alert-icon-float-left {\r\n    font-size:32px;float:left;margin-right:5px;\r\n  }", ""]);
	
	// exports


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Alert = __webpack_require__(120);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false
	    };
	  },
	
	  components: {
	    alert: _Alert2.default
	  }
	};
	// </script>

	// <style>

	//   .alert-icon-float-left {

	//     font-size:32px;float:left;margin-right:5px;

	//   }

	// </style>
	// <template>

	//   <div class="bs-docs-section" id="alert">

	//     <h1 class="page-header">

	//       <a href="#alert" class="anchor">Alert</a>

	//     </h1>

	//     <div class="bs-example" >

	//       <button class="btn btn-success btn-lg"

	//         @click="showRight = !showRight">

	//         Click to toggle alert on right

	//       </button>

	//       <button class="btn btn-danger btn-lg"

	//         @click="showTop = !showTop">

	//         Click to toggle alert on top

	//       </button>

	//       <hr>

	//       <alert type="success" >

	//         <strong>Well Done!</strong>

	//         You successfully read this important alert message.

	//       </alert>

	//       <alert type="info" >

	//         <strong>Heads up!</strong> This alert needs your attention, but it's not super important.

	//       </alert>

	//       <alert type="danger" dismissable>

	//         <strong>Oh snap!</strong> Change a few things up and try submitting again.

	//       </alert>

	//       <alert type="warning" dismissable>

	//         <strong>Warning!</strong> Better check yourself, you're not looking too good.

	//       </alert>

	//       <alert

	//         :show.sync="showRight"

	//         :duration="3000"

	//         type="success"

	//         width="400px"

	//         placement="top-right"

	//         dismissable

	//       >

	//         <span class="icon-ok-circled alert-icon-float-left"></span>

	//         <strong>Well Done!</strong>

	//         <p>You successfully read this important alert message.</p>

	//       </alert>

	//       <alert

	//         :show.sync="showTop"

	//         :duration="3000"

	//         type="danger"

	//         width="400px"

	//         placement="top"

	//         dismissable>

	//         <span class="icon-info-circled alert-icon-float-left"></span>

	//         <strong>Heads up!</strong>

	//         <p>This alert needs your attention.</p>

	//       </alert>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <button class="btn btn-default btn-lg"

	//   @click="showRight = !showRight">

	//   Click to toggle alert on right

	// </button>

	// <button class="btn btn-default btn-lg"

	//   @click="showTop = !showTop">

	//   Click to toggle alert on top

	// </button>

	// <hr>

	// <alert type="success" >

	//   <strong>Well Done!</strong>

	//   You successfully read this important alert message.

	// </alert>

	// <alert type="info" >

	//   <strong>Heads up!</strong> This alert needs your attention, but it's not super important.

	// </alert>

	// <alert type="danger" dismissable>

	//   <strong>Oh snap!</strong> Change a few things up and try submitting again.

	// </alert>

	// <alert type="warning" dismissable>

	//   <strong>Warning!</strong> Better check yourself, you're not looking too good.

	// </alert>

	// <alert

	//   :show.sync="showRight"

	//   :duration="3000"

	//   type="success"

	//   width="400px"

	//   placement="top-right"

	//   dismissable

	// >

	//   <span class="icon-ok-circled alert-icon-float-left"></span>

	//   <strong>Well Done!</strong>

	//   <p>You successfully read this important alert message.</p>

	// </alert>

	// <alert

	//   :show.sync="showTop"

	//   :duration="3000"

	//   type="danger"

	//   width="400px"

	//   placement="top"

	//   dismissable>

	//   <span class="icon-info-circled alert-icon-float-left"></span>

	//   <strong>Heads up!</strong>

	//   <p>This alert needs your attention.</p>

	// </alert>

	// </script></code></pre>

	//     <h2>Options</h2>

	//     <table class="table table-bordered">

	//       <thead>

	//         <tr>

	//           <th>Name</th>

	//           <th>Type</th>

	//           <th>Default</th>

	//           <th>Description</th>

	//         </tr>

	//       </thead>

	//       <tbody>

	//         <tr>

	//           <td>show</td>

	//           <td><code>Boolean</code></td>

	//           <td><code>true</code></td>

	//           <td>Whether show the component</td>

	//         </tr>

	//         <tr>

	//           <td>dismissable</td>

	//           <td><code>Boolean</code></td>

	//           <td><code>false</code></td>

	//           <td>Whether show close button</td>

	//         </tr>

	//         <tr>

	//           <td>type</td>

	//           <td><code>String</code>, one of

	//           <code>success</code>

	//           <code>info</code>

	//           <code>warning</code>

	//           <code>danger</code></td>

	//           <td><code>success</code></td>

	//           <td>Components styles</td>

	//         </tr>

	//         <tr>

	//           <td>duration</td>

	//           <td><code>Number</code></td>

	//           <td><code>0</code></td>

	//           <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>

	//         </tr>

	//         <tr>

	//           <td>width</td>

	//           <td><code>String</code></td>

	//           <td></td>

	//         </tr>

	//         <tr>

	//           <td>placement</td>

	//           <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>

	//           <td></td>

	//           <td>how to position the component.</td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(121)
	module.exports = __webpack_require__(123)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(125)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6ae72989&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6ae72989&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-transition {\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 2;\r\n}", ""]);
	
	// exports


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
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
	          return _this.show = false;
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

	//   z-index: 2;

	// }

	// .alert.top-right {

	//   position: fixed;

	//   top: 30px;

	//   right: 50px;

	//   z-index: 2;

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
/* 124 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Attempt to convert a string value to a Boolean. Otherwise, return the value
	// without modification so Vue can throw a warning.
	
	exports.default = function (val) {
	  return typeof val !== "string" ? val : val === "true" ? true : val === "false" ? false : val === "null" ? false : val === "undefined" ? false : val;
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<div\r\n    v-show=\"show\"\r\n    v-bind:class=\"{\r\n      'alert':\t\ttrue,\r\n      'alert-success':(type == 'success'),\r\n      'alert-warning':(type == 'warning'),\r\n      'alert-info':\t(type == 'info'),\r\n      'alert-danger':\t(type == 'danger'),\r\n      'top': \t\t\t(placement === 'top'),\r\n      'top-right': \t(placement === 'top-right')\r\n    }\"\r\n    transition=\"fade\"\r\n    v-bind:style=\"{width:width}\"\r\n    role=\"alert\">\r\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\r\n      @click=\"show = false\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <slot></slot>\r\n  </div>";

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"alert\">\r\n    <h1 class=\"page-header\">\r\n      <a href=\"#alert\" class=\"anchor\">Alert</a>\r\n    </h1>\r\n    <div class=\"bs-example\" >\r\n      <button class=\"btn btn-success btn-lg\"\r\n        @click=\"showRight = !showRight\">\r\n        Click to toggle alert on right\r\n      </button>\r\n\r\n      <button class=\"btn btn-danger btn-lg\"\r\n        @click=\"showTop = !showTop\">\r\n        Click to toggle alert on top\r\n      </button>\r\n      <hr>\r\n      <alert type=\"success\" >\r\n        <strong>Well Done!</strong>\r\n        You successfully read this important alert message.\r\n      </alert>\r\n\r\n      <alert type=\"info\" >\r\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n      </alert>\r\n\r\n      <alert type=\"danger\" dismissable>\r\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n      </alert>\r\n\r\n      <alert type=\"warning\" dismissable>\r\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n      </alert>\r\n\r\n      <alert\r\n        :show.sync=\"showRight\"\r\n        :duration=\"3000\"\r\n        type=\"success\"\r\n        width=\"400px\"\r\n        placement=\"top-right\"\r\n        dismissable\r\n      >\r\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\r\n        <strong>Well Done!</strong>\r\n        <p>You successfully read this important alert message.</p>\r\n      </alert>\r\n\r\n      <alert\r\n        :show.sync=\"showTop\"\r\n        :duration=\"3000\"\r\n        type=\"danger\"\r\n        width=\"400px\"\r\n        placement=\"top\"\r\n        dismissable>\r\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\r\n        <strong>Heads up!</strong>\r\n        <p>This alert needs your attention.</p>\r\n      </alert>\r\n    </div>\r\n\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<button class=\"btn btn-default btn-lg\"\r\n  @click=\"showRight = !showRight\">\r\n  Click to toggle alert on right\r\n</button>\r\n \r\n<button class=\"btn btn-default btn-lg\"\r\n  @click=\"showTop = !showTop\">\r\n  Click to toggle alert on top\r\n</button>\r\n<hr>\r\n<alert type=\"success\" >\r\n  <strong>Well Done!</strong>\r\n  You successfully read this important alert message.\r\n</alert>\r\n \r\n<alert type=\"info\" >\r\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n</alert>\r\n \r\n<alert type=\"danger\" dismissable>\r\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n</alert>\r\n \r\n<alert type=\"warning\" dismissable>\r\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n</alert>\r\n \r\n<alert\r\n  :show.sync=\"showRight\"\r\n  :duration=\"3000\"\r\n  type=\"success\"\r\n  width=\"400px\"\r\n  placement=\"top-right\"\r\n  dismissable\r\n>\r\n  <span class=\"icon-ok-circled alert-icon-float-left\"></span>\r\n  <strong>Well Done!</strong>\r\n  <p>You successfully read this important alert message.</p>\r\n</alert>\r\n \r\n<alert\r\n  :show.sync=\"showTop\"\r\n  :duration=\"3000\"\r\n  type=\"danger\"\r\n  width=\"400px\"\r\n  placement=\"top\"\r\n  dismissable>\r\n  <span class=\"icon-info-circled alert-icon-float-left\"></span>\r\n  <strong>Heads up!</strong>\r\n  <p>This alert needs your attention.</p>\r\n</alert>\r\n \r\n</script></code></pre>\r\n \r\n    <h2>Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>show</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>true</code></td>\r\n          <td>Whether show the component</td>\r\n        </tr>\r\n        <tr>\r\n          <td>dismissable</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td>Whether show close button</td>\r\n        </tr>\r\n        <tr>\r\n          <td>type</td>\r\n          <td><code>String</code>, one of\r\n          <code>success</code>\r\n          <code>info</code>\r\n          <code>warning</code>\r\n          <code>danger</code></td>\r\n          <td><code>success</code></td>\r\n          <td>Components styles</td>\r\n        </tr>\r\n        <tr>\r\n          <td>duration</td>\r\n          <td><code>Number</code></td>\r\n          <td><code>0</code></td>\r\n          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>width</td>\r\n          <td><code>String</code></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <td>placement</td>\r\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\r\n          <td></td>\r\n          <td>how to position the component.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(128)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(137)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue")
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
	
	var _Accordion = __webpack_require__(129);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(132);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="bs-docs-section" id="accordion">
	
	//     <h1 class="page-header"><a href="#accordion" class="anchor">Accordion</a></h1>
	
	//     <div class="bs-example">
	
	//       <p>
	
	//         <input type="checkbox" v-model="checked">
	
	//         Open only one at a time.
	
	//       </p>
	
	//       <accordion :one-at-atime="checked">
	
	//         <panel header="Panel #1" :is-open="true">
	
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
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	
	// <input type="checkbox" v-model="checked">
	
	// <label for="checked">Open only one at a time.</label>
	
	// <accordion :one-at-atime="checked">
	
	//   <panel header="Panel #1" :is-open="true">
	
	//     ...
	
	//   </panel>
	
	//   <panel header="Panel #2">
	
	//     ...
	
	//   </panel>
	
	//   <panel header="Panel #3">
	
	//     ...
	
	//   </panel>
	
	//   <panel header="Panel #4">
	
	//     ...
	
	//   </panel>
	
	// </accordion>
	
	// </script></code></pre>
	
	//     <h2>Accordion Options</h2>
	
	//     <table class="table table-bordered">
	
	//       <thead>
	
	//         <tr>
	
	//           <th>Name</th>
	
	//           <th>Type</th>
	
	//           <th>Default</th>
	
	//           <th>Description</th>
	
	//         </tr>
	
	//       </thead>
	
	//       <tbody>
	
	//         <tr>
	
	//           <td>one-at-time</td>
	
	//           <td><code>Boolean</code></td>
	
	//           <td><code>false</code></td>
	
	//           <td>Control whether expanding an item will cause the other items to close.</td>
	
	//         </tr>
	
	//       </tbody>
	
	//     </table>
	
	//     <h2>Panel Options</h2>
	
	//     <table class="table table-bordered">
	
	//       <thead>
	
	//         <tr>
	
	//           <th>Name</th>
	
	//           <th>Type</th>
	
	//           <th>Default</th>
	
	//           <th>Description</th>
	
	//         </tr>
	
	//       </thead>
	
	//       <tbody>
	
	//         <tr>
	
	//           <td>is-open</td>
	
	//           <td><code>Boolean</code></td>
	
	//           <td><code>false</code></td>
	
	//           <td>Whether accordion group is open or closed.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>header</td>
	
	//           <td><code>String</code></td>
	
	//           <td></td>
	
	//           <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>
	
	//         </tr>
	
	//       </tbody>
	
	//     </table>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checked: true
	    };
	  },
	
	  components: {
	    accordion: _Accordion2.default,
	    panel: _Panel2.default
	  }
	};
	// </script>

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
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue")
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
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtATime) {
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
/* 131 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n    <slot></slot>\r\n  </div>";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(133)
	module.exports = __webpack_require__(135)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(136)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b51631&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b51631&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-transition {\r\n  -webkit-transition: max-height .5s ease;\r\n  transition: max-height .5s ease;\r\n  overflow: hidden;\r\n}\r\n.collapse-enter, .collapse-leave {\r\n  max-height: 0!important;\r\n}", ""]);
	
	// exports


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    header: {
	      type: String
	    }
	  },
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  transitions: {
	    collapse: {
	      afterEnter: function afterEnter(el) {
	        el.style.maxHeight = "";
	      },
	      beforeLeave: function beforeLeave(el) {
	        el.style.maxHeight = el.offsetHeight + "px";
	        // Recalculate DOM before the class gets added.
	        return el.offsetHeight;
	      }
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

	//   overflow: hidden;

	// }

	// .collapse-enter, .collapse-leave {

	//   max-height: 0!important;

	// }

	// </style>
	// <template>

	//   <div class="panel panel-default">

	//     <div class="panel-heading">

	//       <h4 class="panel-title">

	//         <a class="accordion-toggle"

	//           @click="toggleIsOpen()">

	//           <slot name="header">

	//             {{ header }}

	//           </slot>

	//         </a>

	//       </h4>

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
/* 136 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">\r\n        <a class=\"accordion-toggle\"\r\n          @click=\"toggleIsOpen()\">\r\n          <slot name=\"header\"> \r\n            {{ header }}\r\n          </slot>\r\n        </a>\r\n      </h4>\r\n    </div>\r\n    <div class=\"panel-collapse\"\r\n      v-el:panel\r\n      v-show=\"isOpen\"\r\n      transition=\"collapse\"\r\n    >\r\n      <div class=\"panel-body\">\r\n        <slot></slot>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"accordion\">\r\n    <h1 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion</a></h1>\r\n    <div class=\"bs-example\">\r\n      <p>\r\n        <input type=\"checkbox\" v-model=\"checked\">\r\n        Open only one at a time.\r\n      </p>\r\n      <accordion :one-at-atime=\"checked\">\r\n        <panel header=\"Panel #1\" :is-open=\"true\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </panel>\r\n        <panel header=\"Panel #2\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </panel>\r\n        <panel header=\"Panel #3\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </panel>\r\n        <panel header=\"Panel #4\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </panel>\r\n      </accordion>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<input type=\"checkbox\" v-model=\"checked\">\r\n<label for=\"checked\">Open only one at a time.</label>\r\n\r\n<accordion :one-at-atime=\"checked\">\r\n  <panel header=\"Panel #1\" :is-open=\"true\">\r\n    ...\r\n  </panel>\r\n  <panel header=\"Panel #2\">\r\n    ...\r\n  </panel>\r\n  <panel header=\"Panel #3\">\r\n    ...\r\n  </panel>\r\n  <panel header=\"Panel #4\">\r\n    ...\r\n  </panel>\r\n</accordion>\r\n</script></code></pre>\r\n    <h2>Accordion Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>one-at-time</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td>Control whether expanding an item will cause the other items to close.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <h2>Panel Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>is-open</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td>Whether accordion group is open or closed.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>header</td>\r\n          <td><code>String</code></td>\r\n          <td></td>\r\n          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(139)
	module.exports = __webpack_require__(141)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(148)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-46920ce3&file=affixDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-46920ce3&file=affixDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".animated {\r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite\r\n}\r\n@-webkit-keyframes shake {\r\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\r\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\r\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\r\n}\r\n@keyframes shake {\r\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\r\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\r\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\r\n}\r\n.shake {\r\n    -webkit-animation-name: shake;\r\n    animation-name: shake;\r\n}", ""]);
	
	// exports


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(142);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
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
	// <template>

	//   <div class="bs-docs-section" id="affix">

	//     <h1 class="page-header"><a href="#affix" class="anchor">Affix</a></h1>

	//     <div class="bs-example">

	//       <h3>

	//         The sub-navigation on the RIGHT is a live demo of the affix.

	//         <tooltip trigger="hover" effect="fadein" content="I'm a direction, not jerking off!" placement="left">

	//           <span class="glyphicon glyphicon-hand-right pull-right animated shake"></span>

	//         </tooltip>

	//       </h3>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <affix offset="">

	//   <nav class="sidebar">

	//     <ul>

	//       <li>...</li>

	//       <li>...</li>

	//       <li>...</li>

	//     </ul>

	//   </nav>

	// </affix>

	// </script></code></pre>

	//     <h2>Options</h2>

	//     <table class="table table-bordered">

	//       <thead>

	//         <tr>

	//           <th>Name</th>

	//           <th>Type</th>

	//           <th>Default</th>

	//           <th>Description</th>

	//         </tr>

	//       </thead>

	//       <tbody>

	//         <tr>

	//           <td>offset</td>

	//           <td><code>Number</code></td>

	//           <td><code>0</code></td>

	//           <td>Pixels to offset from top of screen when calculating position of scroll.</td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(143)
	module.exports = __webpack_require__(145)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(147)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(144);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-11919920&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-11919920&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip {\r\n    opacity: .9\r\n  }\r\n.fadein-enter {\r\n  -webkit-animation:fadein-in 0.3s ease-in;\r\n          animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave {\r\n  -webkit-animation:fadein-out 0.3s ease-out;\r\n          animation:fadein-out 0.3s ease-out;\r\n}\r\n@-webkit-keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes fadein-out {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}", ""]);
	
	// exports


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(146);
	
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

	//   .tooltip {

	//     opacity: .9

	//   }

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

	//     opacity: 1;

	//   }

	// }

	// @keyframes fadein-out {

	//   0% {

	//     opacity: 1;

	//   }

	//   100% {

	//     opacity: 0;

	//   }

	// }

	// </style>
	// <template>

	//   <span v-el:trigger>

	//     <slot>

	//     </slot>

	//   </span>

	//   <div class="tooltip"

	//     v-bind:class="{

	//     'top':    placement === 'top',

	//     'left':   placement === 'left',

	//     'right':  placement === 'right',

	//     'bottom': placement === 'bottom'

	//     }"

	//     v-el:popover

	//     v-show="show"

	//     :transition="effect"

	//     role="tooltip">

	//     <div class="tooltip-arrow"></div>

	//     <div class="tooltip-inner">

	//        <slot name="content">

	//         {{{content}}}

	//       </slot>

	//    </div>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopoverMixin = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    placement: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: true
	    };
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
	    var popover = this.$els.popover;
	    var triger = this.$els.trigger.children[0];
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        return _this.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        return _this.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _EventListener2.default.listen(triger, 'focus', function () {
	        return _this.show = true;
	      });
	      this._blurEvent = _EventListener2.default.listen(triger, 'blur', function () {
	        return _this.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
	    }
	
	    switch (this.placement) {
	      case 'top':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	        this.position.top = triger.offsetTop - popover.offsetHeight;
	        break;
	      case 'left':
	        this.position.left = triger.offsetLeft - popover.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'right':
	        this.position.left = triger.offsetLeft + triger.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'bottom':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	        this.position.top = triger.offsetTop + triger.offsetHeight;
	        break;
	      default:
	        console.log('Wrong placement prop');
	    }
	    popover.style.top = this.position.top + 'px';
	    popover.style.left = this.position.left + 'px';
	    popover.style.display = 'none';
	    this.show = !this.show;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) this._clickEvent.remove();
	  }
	};
	
	exports.default = PopoverMixin;

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n    <slot>\r\n    </slot>\r\n  </span>\r\n  <div class=\"tooltip\"\r\n    v-bind:class=\"{\r\n    'top':    placement === 'top',\r\n    'left':   placement === 'left',\r\n    'right':  placement === 'right',\r\n    'bottom': placement === 'bottom'\r\n    }\"\r\n    v-el:popover\r\n    v-show=\"show\"\r\n    :transition=\"effect\"\r\n    role=\"tooltip\">\r\n    <div class=\"tooltip-arrow\"></div>\r\n    <div class=\"tooltip-inner\">\r\n       <slot name=\"content\">\r\n        {{{content}}}\r\n      </slot> \r\n   </div>\r\n  </div>";

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"affix\">\r\n    <h1 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix</a></h1>\r\n    <div class=\"bs-example\">\r\n      <h3>\r\n        The sub-navigation on the RIGHT is a live demo of the affix.\r\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\r\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\r\n        </tooltip>\r\n      </h3>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<affix offset=\"\">\r\n  <nav class=\"sidebar\">\r\n    <ul>\r\n      <li>...</li>\r\n      <li>...</li>\r\n      <li>...</li>\r\n    </ul>\r\n  </nav>\r\n</affix>\r\n</script></code></pre>\r\n    <h2>Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>offset</td>\r\n          <td><code>Number</code></td>\r\n          <td><code>0</code></td>\r\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(150)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(157)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Aside = __webpack_require__(151);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
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
	// <template>

	//   <div class="bs-docs-section" id="aside">

	//     <h1 class="page-header"><a href="#aside" class="anchor">Aside</a></h1>

	//     <div class="bs-example">

	//       <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>

	//       <sidebar :show.sync="showRight" placement="right" header="Title" :width="350">

	//         <h4>Text in aside</h4>

	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

	//         tempor incididunt ut labore et dolore magna aliqua.</p>

	//         <p> Ut enim ad minim veniam,

	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

	//         consequat.</p>

	//           <pre><code class="language-javascript">

	// if (talk === cheap){

	//   code.style.display = 'block'

	// }

	//         </code></pre>

	//         <div class="aside-footer">

	//           <button type="button" class="btn btn-default" @click="showRight=false">Close</button>

	//         </div>

	//       </sidebar>

	//       <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>

	//       <sidebar  :show.sync="showLeft" placement="left" header="Title" :width="350">

	//         <h4>Text in aside</h4>

	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

	//         tempor incididunt ut labore et dolore magna aliqua.</p>

	//         <p> Ut enim ad minim veniam,

	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

	//         consequat.</p>

	//         <pre><code class="language-javascript">

	// if (talk === cheap){

	//   code.style.display = 'block'

	// }

	//         </code></pre>

	//         <div class="aside-footer">

	//           <button type="button" class="btn btn-default" @click="showLeft=false">Close</button>

	//         </div>

	//       </sidebar>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <button

	// class="btn btn-success btn-lg"

	// @click="showRight = true">Show Aside on right</button>

	// <aside :show.sync="showRight" placement="right" header="Title" :width="350">

	// ...

	// </aside>

	// <button

	// class="btn btn-danger btn-lg"

	// @click="showLeft = true">Show Aside on left</button>

	// <aside :show.sync="showLeft" placement="left" header="Title" :width="350">

	// ...

	// </aside></script></code></pre>

	//     <h2>Options</h2>

	//     <table class="table table-bordered">

	//       <thead>

	//         <tr>

	//           <th>Name</th>

	//           <th>Type</th>

	//           <th>Default</th>

	//           <th>Description</th>

	//         </tr>

	//       </thead>

	//       <tbody>

	//         <tr>

	//           <td>show</td>

	//           <td><code>Boolean</code></td>

	//           <td></td>

	//           <td>Whether show the component.</td>

	//         </tr>

	//         <tr>

	//           <td>placement</td>

	//           <td><code>String</code>, one of <code>left</code>, <code>right</code></td>

	//           <td><code>right</code></td>

	//           <td>how to position the component.</td>

	//         </tr>

	//         <tr>

	//           <td>header</td>

	//           <td><code>String</code></td>

	//           <td></td>

	//           <td>Header text of the aside component.</td>

	//         </tr>

	//         <tr>

	//           <td>width</td>

	//           <td><code>Number</code></td>

	//           <td></td>

	//           <td></td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(152)
	module.exports = __webpack_require__(154)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(156)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue")
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
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-061dd136&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-061dd136&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
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

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".aside-open {\r\n  -webkit-transition: -webkit-transform 0.3s;\r\n  transition: -webkit-transform 0.3s;\r\n  transition: transform 0.3s;\r\n  transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  -webkit-transform: translateX(-300px);\r\n          transform: translateX(-300px);\r\n}\r\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  -webkit-animation:slideleft-in .3s;\r\n          animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave {\r\n  -webkit-animation:slideleft-out .3s;\r\n          animation:slideleft-out .3s;\r\n}\r\n@-webkit-keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter {\r\n  -webkit-animation:slideright-in .3s;\r\n          animation:slideright-in .3s;\r\n}\r\n.slideright-leave {\r\n  -webkit-animation:slideright-out .3s;\r\n          animation:slideright-out .3s;\r\n}\r\n@-webkit-keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width:240px\r\n  }\r\n}\r\n.aside.left {\r\n  right: auto;\r\n  left: 0\r\n}\r\n.aside.right {\r\n  right: 0;\r\n  left: auto\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\r\n}", ""]);
	
	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _getScrollBarWidth = __webpack_require__(155);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      require: true,
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
	      default: '320'
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      var body = document.body;
	      backdrop.className = 'aside-backdrop';
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        body.appendChild(backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = backdrop.clientHeight;
	        backdrop.className += ' in';
	        this._clickEvent = _EventListener2.default.listen(backdrop, 'click', this.close);
	      } else {
	        if (this._clickEvent) this._clickEvent.remove();
	        backdrop = document.querySelector('.aside-backdrop');
	        try {
	          backdrop.className = 'aside-backdrop';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	          body.removeChild(backdrop);
	        } catch (e) {}
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

/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
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
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aside\"\r\n    v-bind:style=\"{width:width + 'px'}\"\r\n    v-bind:class=\"{\r\n    left:placement === 'left',\r\n    right:placement === 'right'\r\n    }\"\r\n    v-show=\"show\"\r\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\r\n    <div class=\"aside-dialog\">\r\n      <div class=\"aside-content\">\r\n        <div class=\"aside-header\">\r\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\r\n          <h4 class=\"aside-title\">   \r\n          <slot name=\"header\"> \r\n            {{ header }}\r\n          </slot>\r\n          </h4>\r\n        </div>\r\n        <div class=\"aside-body\">\r\n          <slot></slot>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"aside\">\r\n    <h1 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside</a></h1>\r\n    <div class=\"bs-example\">\r\n      <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\r\n\r\n      <sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\r\n        <h4>Text in aside</h4>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n        tempor incididunt ut labore et dolore magna aliqua.</p>\r\n        <p> Ut enim ad minim veniam,\r\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat.</p>\r\n          <pre><code class=\"language-javascript\">\r\nif (talk === cheap){\r\n  code.style.display = 'block'\r\n}\r\n        </code></pre>\r\n        <div class=\"aside-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\r\n        </div>\r\n      </sidebar>\r\n\r\n      <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\r\n\r\n      <sidebar  :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\r\n        <h4>Text in aside</h4>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n        tempor incididunt ut labore et dolore magna aliqua.</p>\r\n        <p> Ut enim ad minim veniam,\r\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat.</p>\r\n        <pre><code class=\"language-javascript\">\r\nif (talk === cheap){\r\n  code.style.display = 'block'\r\n}\r\n        </code></pre>\r\n        <div class=\"aside-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft=false\">Close</button>\r\n        </div>\r\n      </sidebar>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<button\r\nclass=\"btn btn-success btn-lg\"\r\n@click=\"showRight = true\">Show Aside on right</button>\r\n\r\n<aside :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\r\n...\r\n</aside>\r\n\r\n<button\r\nclass=\"btn btn-danger btn-lg\"\r\n@click=\"showLeft = true\">Show Aside on left</button>\r\n\r\n<aside :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\r\n...\r\n</aside></script></code></pre>\r\n\r\n    <h2>Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>show</td>\r\n          <td><code>Boolean</code></td>\r\n          <td></td>\r\n          <td>Whether show the component.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>placement</td>\r\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\r\n          <td><code>right</code></td>\r\n          <td>how to position the component.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>header</td>\r\n          <td><code>String</code></td>\r\n          <td></td>\r\n          <td>Header text of the aside component.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>width</td>\r\n          <td><code>Number</code></td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(159)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(168)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(160);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(165);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="bs-docs-section" id="carousel">
	
	//     <h1 class="page-header"><a href="#caoursel" class="anchor">Carousel</a></h1>
	
	//     <div class="bs-example">
	
	//       <carousel>
	
	//         <slider>
	
	//           <img src="http://placehold.it/1200x500?text=one">
	
	//           <div class="carousel-caption">
	
	//            <h3>Slide #1</h3>
	
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	
	//          </div>
	
	//         </slider>
	
	//         <slider>
	
	//           <img src="http://placehold.it/1200x500?text=two">
	
	//           <div class="carousel-caption">
	
	//            <h3>Slide #2</h3>
	
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	
	//          </div>
	
	//         </slider>
	
	//         <slider>
	
	//           <img src="http://placehold.it/1200x500?text=three">
	
	//           <div class="carousel-caption">
	
	//            <h3>Slide #3</h3>
	
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	
	//          </div>
	
	//         </slider>
	
	//       </carousel>
	
	//     </div>
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	
	// <carousel>
	
	//   <slider>
	
	//     <img src="http://placehold.it/1200x400?text=one">
	
	//       <div class="carousel-caption">
	
	//        ...
	
	//      </div>
	
	//   </slider>
	
	//   <slider>
	
	//     <img src="http://placehold.it/1200x400?text=two">
	
	//   </slider>
	
	//   <slider>
	
	//     <img src="http://placehold.it/1200x400?text=three">
	
	//   </slider>
	
	// </carousel>
	
	// </script></code></pre>
	
	//   <h2>Options</h2>
	
	//   <table class="table table-bordered">
	
	//     <thead>
	
	//       <tr>
	
	//         <th>Name</th>
	
	//         <th>Type</th>
	
	//         <th>Default</th>
	
	//         <th>Description</th>
	
	//       </tr>
	
	//     </thead>
	
	//     <tbody>
	
	//       <tr>
	
	//         <td>indicators</td>
	
	//         <td><code>Boolean</code></td>
	
	//         <td><code>true</code></td>
	
	//         <td>Whether to show the indicators.</td>
	
	//       </tr>
	
	//       <tr>
	
	//         <td>controls</td>
	
	//         <td><code>Boolean</code></td>
	
	//         <td><code>true</code></td>
	
	//         <td>Whether to show the direction controls.</td>
	
	//       </tr>
	
	//       <tr>
	
	//         <td>interval</td>
	
	//         <td><code>Number</code></td>
	
	//         <td><code>5000</code></td>
	
	//         <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,
	
	//           carousel will not automatically cycle.
	
	//         </td>
	
	//       </tr>
	
	//     </tbody>
	
	//   </table>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    carousel: _Carousel2.default,
	    slider: _Slider2.default
	  }
	};
	// </script>

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(161)
	module.exports = __webpack_require__(163)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(164)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-4b6e4443&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-4b6e4443&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4b6e4443&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4b6e4443&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".carousel-control[_v-4b6e4443] {\r\n  cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(44);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	// <div class="carousel slide" data-ride="carousel">
	
	//   <!-- Indicators -->
	
	//   <ol class="carousel-indicators" v-show="indicators">
	
	//     <indicator :indicator.sync="indicator" :active-index.sync="activeIndex" :is-animating.sync="isAnimating"></indicator>
	
	//   </ol>
	
	//   <!-- Wrapper for slides -->
	
	//   <div class="carousel-inner" role="listbox">
	
	//     <slot></slot>
	
	//   </div>
	
	//   <!-- Controls -->
	
	//   <div v-show="controls" class="carousel-controls hidden-xs">
	
	//     <a class="left carousel-control" role="button" @click="prevClick">
	
	//       <span class="fa fa-arrow-left" aria-hidden="true"></span>
	
	//     </a>
	
	//     <a class="right carousel-control" role="button" @click="nextClick">
	
	//       <span class="fa fa-arrow-right" aria-hidden="true"></span>
	
	//     </a>
	
	//   </div>
	
	// </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 5000
	    }
	  },
	  components: {
	    'indicator': {
	      //inherit: true,
	      props: ['indicator', 'activeIndex', 'isAnimating'],
	      template: '<li v-for="i in indicator" @click="handleIndicatorClick($index)" v-bind:class="{\'active\':$index === activeIndex}"><span></span></li>',
	      methods: {
	        handleIndicatorClick: function handleIndicatorClick(index) {
	          if (this.isAnimating || this.activeIndex === index) return false;
	          this.isAnimating = true;
	          this.activeIndex = index;
	        }
	      }
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      activeIndex: 0,
	      isAnimating: false
	    };
	  },
	
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.item');
	    }
	  },
	  watch: {
	    activeIndex: function activeIndex(newVal, oldVal) {
	      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal);
	    }
	  },
	  methods: {
	    slide: function slide(direction, selected, prev) {
	      var _this = this;
	
	      if (this._prevSelectedEvent) this._prevSelectedEvent.remove();
	      if (this._selectedEvent) this._selectedEvent.remove();
	
	      var prevSelectedEl = this.slider[prev];
	      var selectedEl = this.slider[selected];
	      var transitionendFn = function transitionendFn() {
	        [].concat((0, _toConsumableArray3.default)(_this.slider)).forEach(function (el) {
	          return el.className = 'item';
	        });
	        selectedEl.classList.add('active');
	        _this.isAnimating = false;
	      };
	
	      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev');
	      // request property that requires layout to force a layout
	      var x = selectedEl.clientHeight;
	      this._prevSelectedEvent = _EventListener2.default.listen(prevSelectedEl, 'transitionend', transitionendFn);
	      this._selectedEvent = _EventListener2.default.listen(selectedEl, 'transitionend', transitionendFn);
	      prevSelectedEl.classList.add(direction);
	      selectedEl.classList.add(direction);
	    },
	    nextClick: function nextClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0;
	    },
	    prevClick: function prevClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var intervalID = null;
	    var el = this.$el;
	    function intervalManager(flag, func, time) {
	      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID);
	    }
	    if (!!this.interval) {
	      intervalManager(true, this.nextClick, this.interval);
	      el.addEventListener('mouseenter', function () {
	        return intervalManager(false);
	      });
	      el.addEventListener('mouseleave', function () {
	        return intervalManager(true, _this2.nextClick, _this2.interval);
	      });
	    }
	  }
	};
	// </script>

	// <style scoped>

	// .carousel-control {

	//   cursor: pointer;

	// }

	// </style>

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-4b6e4443=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-4b6e4443=\"\">\n    <indicator :indicator.sync=\"indicator\" :active-index.sync=\"activeIndex\" :is-animating.sync=\"isAnimating\" _v-4b6e4443=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-4b6e4443=\"\">\n    <slot _v-4b6e4443=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\" _v-4b6e4443=\"\">\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prevClick\" _v-4b6e4443=\"\">\n      <span class=\"fa fa-arrow-left\" aria-hidden=\"true\" _v-4b6e4443=\"\"></span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" @click=\"nextClick\" _v-4b6e4443=\"\">\n      <span class=\"fa fa-arrow-right\" aria-hidden=\"true\" _v-4b6e4443=\"\"></span>\n    </a>\n  </div>\n</div>";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(166)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(167)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 166 */
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
	      return this.$parent.activeIndex === this.index;
	    }
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
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
/* 167 */
/***/ function(module, exports) {

	module.exports = "<div class=\"item\">\r\n    <slot></slot>\r\n  </div>";

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"carousel\">\r\n    <h1 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel</a></h1>\r\n    <div class=\"bs-example\">\r\n      <carousel>\r\n        <slider>\r\n          <img src=\"http://placehold.it/1200x500?text=one\">\r\n          <div class=\"carousel-caption\">\r\n           <h3>Slide #1</h3>\r\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\r\n         </div>\r\n        </slider>\r\n        <slider>\r\n          <img src=\"http://placehold.it/1200x500?text=two\">\r\n          <div class=\"carousel-caption\">\r\n           <h3>Slide #2</h3>\r\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\r\n         </div>\r\n        </slider>\r\n        <slider>\r\n          <img src=\"http://placehold.it/1200x500?text=three\">\r\n          <div class=\"carousel-caption\">\r\n           <h3>Slide #3</h3>\r\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\r\n         </div>\r\n        </slider>\r\n      </carousel>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<carousel>\r\n  <slider>\r\n    <img src=\"http://placehold.it/1200x400?text=one\">\r\n      <div class=\"carousel-caption\">\r\n       ...\r\n     </div>\r\n  </slider>\r\n  <slider>\r\n    <img src=\"http://placehold.it/1200x400?text=two\">\r\n  </slider>\r\n  <slider>\r\n    <img src=\"http://placehold.it/1200x400?text=three\">\r\n  </slider>\r\n</carousel>\r\n</script></code></pre>\r\n\r\n  <h2>Options</h2>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Type</th>\r\n        <th>Default</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>indicators</td>\r\n        <td><code>Boolean</code></td>\r\n        <td><code>true</code></td>\r\n        <td>Whether to show the indicators.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>controls</td>\r\n        <td><code>Boolean</code></td>\r\n        <td><code>true</code></td>\r\n        <td>Whether to show the direction controls.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>interval</td>\r\n        <td><code>Number</code></td>\r\n        <td><code>5000</code></td>\r\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\r\n          carousel will not automatically cycle.\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(170)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(183)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonsDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonsDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _radioGroup = __webpack_require__(171);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _radioBtn = __webpack_require__(174);
	
	var _radioBtn2 = _interopRequireDefault(_radioBtn);
	
	var _checkboxGroup = __webpack_require__(177);
	
	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);
	
	var _checkboxBtn = __webpack_require__(180);
	
	var _checkboxBtn2 = _interopRequireDefault(_checkboxBtn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="bs-docs-section" id="buttons">
	
	//     <h1 class="page-header"><a href="#buttons" class="anchor">Buttons</a></h1>
	
	//     <div class="bs-example">
	
	//       <h4>Checkbox</h4>
	
	//       <checkbox-group :value.sync="checkboxValue">
	
	//         <checkbox value="left">Left</checkbox>
	
	//         <checkbox value="middle" checked>Middle</checkbox>
	
	//         <checkbox value="right">Right</checkbox>
	
	//       </checkbox-group>
	
	//       <p>
	
	//         <pre>
	
	// Checkbox value: {{checkboxValue | json}}
	
	//         </pre>
	
	//       </p>
	
	//       <hr>
	
	//       <h4>Radio</h4>
	
	//       <radio-group :value.sync="radioValue" type="primary">
	
	//         <radio value="left">Left</radio>
	
	//         <radio value="middle" checked>Middle</radio>
	
	//         <radio value="right">Right</radio>
	
	//       </radio-group>
	
	//       <radio-group :value.sync="radioValue" type="success">
	
	//         <radio value="left">Left</radio>
	
	//         <radio value="middle" checked>Middle</radio>
	
	//         <radio value="right">Right</radio>
	
	//       </radio-group>
	
	//       <p>
	
	//         <pre>
	
	// Radio value: {{radioValue}}
	
	//         </pre>
	
	//       </p>
	
	//     </div>
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	
	// <checkbox-group :value.sync="checkboxValue">
	
	//   <checkbox value="left">Left</checkbox>
	
	//   <checkbox value="middle" checked>Middle</checkbox>
	
	//   <checkbox value="right">Right</checkbox>
	
	// </checkbox-group>
	
	// <radio-group :value.sync="radioValue" type="primary">
	
	//   <radio value="left">Left</radio>
	
	//   <radio value="middle" checked>Middle</radio>
	
	//   <radio value="right">Right</radio>
	
	// </radio-group>
	
	// <radio-group :value.sync="radioValue" type="success">
	
	//   <radio value="left">Left</radio>
	
	//   <radio value="middle" checked>Middle</radio>
	
	//   <radio value="right">Right</radio>
	
	// </radio-group>
	
	// </script></code></pre>
	
	//     <h2>Group options</h2>
	
	//     <table class="table table-bordered">
	
	//       <thead>
	
	//         <tr>
	
	//           <th>Name</th>
	
	//           <th>Type</th>
	
	//           <th>Default</th>
	
	//           <th>Description</th>
	
	//         </tr>
	
	//       </thead>
	
	//       <tbody>
	
	//         <tr>
	
	//           <td>value</td>
	
	//           <td><code>Array</code> or <code>String</code></td>
	
	//           <td></td>
	
	//           <td>If defined, then the defined values will be checked otherwise the elements with a checked attribute
	
	//           will be checked.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>type</td>
	
	//           <td><code>String</code>, one of <code>default</code>
	
	//           <code>primary</code>
	
	//           <code>danger</code>
	
	//           <code>info</code>
	
	//           <code>warning</code>
	
	//           <code>success</code></td>
	
	//           <td><code>default</code></td>
	
	//           <td></td>
	
	//         </tr>
	
	//       </tbody>
	
	//     </table>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    radio: _radioBtn2.default,
	    radioGroup: _radioGroup2.default,
	    checkboxGroup: _checkboxGroup2.default,
	    checkbox: _checkboxBtn2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: ''
	    };
	  }
	};
	// </script>

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(172)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(173)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 172 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	//   <div class="btn-group" data-toggle="buttons">
	
	//     <slot></slot>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    type: {
	      type: String,
	      default: 'default'
	    }
	  }
	};
	// </script>

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n    <slot></slot>\r\n  </div>";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(175)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(176)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioBtn.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioBtn.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  computed: {
	    type: function type() {
	      return this.$parent.type;
	    },
	    active: function active() {
	      return this.$parent.value === this.value;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.value = this.value;
	    }
	  },
	  created: function created() {
	    if (this.$parent.value === this.value) {
	      this.checked = true;
	    } else if (!this.$parent.value.length && this.checked) {
	      this.$parent.value = this.value;
	    }
	  }
	};
	// </script>
	// <template>

	//   <label class="btn"

	//   v-bind:class="{

	//     'active':active,

	//     'btn-success':type == 'success',

	//     'btn-warning':type == 'warning',

	//     'btn-info':type == 'info',

	//     'btn-danger':type == 'danger',

	//     'btn-default':type == 'default',

	//     'btn-primary':type == 'primary'

	//   }">

	//     <input type="radio" autocomplete="off"

	//       :checked="checked"

	//       @click="handleClick"

	//     />

	//     <slot></slot>

	//   </label>

	// </template>

	// <script>

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\r\n  v-bind:class=\"{\r\n    'active':active,\r\n    'btn-success':type == 'success',\r\n    'btn-warning':type == 'warning',\r\n    'btn-info':type == 'info',\r\n    'btn-danger':type == 'danger',\r\n    'btn-default':type == 'default',\r\n    'btn-primary':type == 'primary'\r\n  }\">\r\n\r\n    <input type=\"radio\" autocomplete=\"off\"\r\n      :checked=\"checked\"\r\n      @click=\"handleClick\"\r\n    />\r\n\r\n    <slot></slot>\r\n  </label>";

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(178)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(179)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 178 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	//   <div class="btn-group" data-toggle="buttons">
	
	//     <slot></slot>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    type: {
	      type: String,
	      default: 'default'
	    }
	  }
	};
	// </script>

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n    <slot></slot>\r\n  </div>";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(181)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(182)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxBtn.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxBtn.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  computed: {
	    type: function type() {
	      return this.$parent.type;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      this.checked = !this.checked;
	    }
	  },
	  created: function created() {
	    if (this.$parent.value.length) {
	      this.checked = this.$parent.value.indexOf(this.value) > -1;
	    } else if (this.checked) {
	      this.$parent.value.push(this.value);
	    }
	  }
	};
	// </script>
	// <template>

	//   <label class="btn"

	//   v-bind:class="{

	//     'active':checked,

	//     'btn-success':type == 'success',

	//     'btn-warning':type == 'warning',

	//     'btn-info':type == 'info',

	//     'btn-danger':type == 'danger',

	//     'btn-default':type == 'default',

	//     'btn-primary':type == 'primary'

	//   }">

	//     <input type="checkbox" autocomplete="off"

	//     :checked="checked"

	//     @click="handleClick"

	//     />

	//     <slot></slot>

	//   </label>

	// </template>

	// <script>

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\r\n  v-bind:class=\"{\r\n    'active':checked,\r\n    'btn-success':type == 'success',\r\n    'btn-warning':type == 'warning',\r\n    'btn-info':type == 'info',\r\n    'btn-danger':type == 'danger',\r\n    'btn-default':type == 'default',\r\n    'btn-primary':type == 'primary'\r\n  }\">\r\n\r\n    <input type=\"checkbox\" autocomplete=\"off\"\r\n    :checked=\"checked\"\r\n    @click=\"handleClick\"\r\n    />\r\n\r\n    <slot></slot>\r\n  </label>";

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"buttons\">\r\n    <h1 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Buttons</a></h1>\r\n    <div class=\"bs-example\">\r\n      <h4>Checkbox</h4>\r\n      <checkbox-group :value.sync=\"checkboxValue\">\r\n        <checkbox value=\"left\">Left</checkbox>\r\n        <checkbox value=\"middle\" checked>Middle</checkbox>\r\n        <checkbox value=\"right\">Right</checkbox>\r\n      </checkbox-group>\r\n      <p>\r\n        <pre>\r\nCheckbox value: {{checkboxValue | json}}\r\n        </pre>\r\n      </p>\r\n      <hr>\r\n      <h4>Radio</h4>\r\n      <radio-group :value.sync=\"radioValue\" type=\"primary\">\r\n        <radio value=\"left\">Left</radio>\r\n        <radio value=\"middle\" checked>Middle</radio>\r\n        <radio value=\"right\">Right</radio>\r\n      </radio-group>\r\n\r\n      <radio-group :value.sync=\"radioValue\" type=\"success\">\r\n        <radio value=\"left\">Left</radio>\r\n        <radio value=\"middle\" checked>Middle</radio>\r\n        <radio value=\"right\">Right</radio>\r\n      </radio-group>\r\n      <p>\r\n        <pre>\r\nRadio value: {{radioValue}}\r\n        </pre>\r\n      </p>\r\n    </div>\r\n\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<checkbox-group :value.sync=\"checkboxValue\">\r\n  <checkbox value=\"left\">Left</checkbox>\r\n  <checkbox value=\"middle\" checked>Middle</checkbox>\r\n  <checkbox value=\"right\">Right</checkbox>\r\n</checkbox-group>\r\n\r\n<radio-group :value.sync=\"radioValue\" type=\"primary\">\r\n  <radio value=\"left\">Left</radio>\r\n  <radio value=\"middle\" checked>Middle</radio>\r\n  <radio value=\"right\">Right</radio>\r\n</radio-group>\r\n\r\n<radio-group :value.sync=\"radioValue\" type=\"success\">\r\n  <radio value=\"left\">Left</radio>\r\n  <radio value=\"middle\" checked>Middle</radio>\r\n  <radio value=\"right\">Right</radio>\r\n</radio-group>\r\n</script></code></pre>\r\n\r\n    <h2>Group options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>value</td>\r\n          <td><code>Array</code> or <code>String</code></td>\r\n          <td></td>\r\n          <td>If defined, then the defined values will be checked otherwise the elements with a checked attribute\r\n          will be checked.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>type</td>\r\n          <td><code>String</code>, one of <code>default</code>\r\n          <code>primary</code>\r\n          <code>danger</code>\r\n          <code>info</code>\r\n          <code>warning</code>\r\n          <code>success</code></td>\r\n          <td><code>default</code></td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(185)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(229)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Datepicker = __webpack_require__(186);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Select = __webpack_require__(192);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(224);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    datepicker: _Datepicker2.default,
	    'v-select': _Select2.default,
	    'v-option': _Option2.default
	  },
	  data: function data() {
	    return {
	      disabled: [],
	      value: '06/10/2015',
	      format: ['dd/MM/yyyy'],
	      reset: true
	    };
	  },
	
	  watch: {
	    disabled: function disabled() {
	      this.$refs.dp.getDateRange();
	    },
	    format: function format(newV) {
	      this.value = this.$refs.dp.stringify(new Date(this.value));
	    }
	  }
	};
	// </script>
	// <template>

	//   <div class="bs-docs-section" id="datepicker">

	//     <h1 class="page-header"><a href="#datepicker" class="anchor">Datepicker</a></h1>

	//     <div class="bs-example">

	//       <p>

	//         <pre>

	// Selected date is: {{new Date(value).toString().slice(0, -23)}}

	//         </pre>

	//       </p>

	//       <datepicker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"

	//       :format="format.toString()" :show-reset-button="reset"></datepicker>

	//       <h4>Disabled days of week</h4>

	//       <v-select multiple :value.sync="disabled">

	//   <v-option value="0">0</v-option>

	//   <v-option value="1">1</v-option>

	//   <v-option value="2">2</v-option>

	//   <v-option value="3">3</v-option>

	//   <v-option value="4">4</v-option>

	//   <v-option value="5">5</v-option>

	//   <v-option value="6">6</v-option>

	//       </v-select>

	//       <h4>Format</h4>

	//       <v-select :value.sync="format">

	//         <v-option value="dd/MM/yyyy">dd/MM/yyyy</v-option>

	//         <v-option value="dd-MM-yyyy">dd-MM-yyyy</v-option>

	//         <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>

	//         <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>

	//         <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>

	//         <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>

	//         <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>

	//         <v-option value="MM/dd/yyyy">MM/dd/yyyy</v-option>

	//         <v-option value="MM-dd-yyyy">MM-dd-yyyy</v-option>

	//       </v-select>

	//       <h4>Reset button</h4>

	//       <label><input type="checkbox" v-model="reset" @click="x"> toggle reset button</label>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <datepicker

	//   :value.sync="value"

	//   :disabled-days-of-Week="disabled"

	//   :format="format"

	//   :show-reset-button="reset">

	// </datepicker>

	// <select multiple :value.sync="disabled" size=5>

	//   <v-option value="0">0</v-option>

	//   <v-option value="1">1</v-option>

	//   <v-option value="2">2</v-option>

	//   <v-option value="3">3</v-option>

	//   <v-option value="4">4</v-option>

	//   <v-option value="5">5</v-option>

	//   <v-option value="6">6</v-option>

	// </select>

	// <select  :value.sync="format">

	//   <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>

	//   <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>

	//   <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>

	//   <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>

	//   <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>

	//   <v-option value="dd/MM/yyyy">dd/MM/yyyy</v-option>

	//   <v-option value="dd-MM-yyyy">dd-MM-yyyy</v-option>

	// </select>

	//     </script></code></pre>

	//     <h2>Option</h2>

	//     <table class="table table-bordered">

	//       <thead>

	//         <tr>

	//           <th>Name</th>

	//           <th>Type</th>

	//           <th>Default</th>

	//           <th>Description</th>

	//         </tr>

	//       </thead>

	//       <tbody>

	//         <tr>

	//           <td>value</td>

	//           <td><code>String</code></td>

	//           <td></td>

	//           <td>Value of the input DOM</td>

	//         </tr>

	//         <tr>

	//           <td>Width</td>

	//           <td><code>String</code></td>

	//           <td>200px</td>

	//           <td>Width of the input DOM</td>

	//         </tr>

	//         <tr>

	//           <td>format</td>

	//           <td><code>String</code></td>

	//           <td><code>MMMM/dd/yyyy</code></td>

	//           <td>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</td>

	//         </tr>

	//         <tr>

	//           <td>disabledDaysOfWeek</td>

	//           <td><code>Array</code></td>

	//           <td></td>

	//           <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).

	//              Multiple values should be comma-separated.</td>

	//         </tr>

	//         <tr>

	//           <td>showResetButton</td>

	//           <td><code>Boolean</code></td>

	//           <td>false</td>

	//           <td>If <strong>true</strong> shows an &times; shaped button to clear the selected date.

	//             Usefull in forms where date entry is optional.</td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(187)
	module.exports = __webpack_require__(189)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(191)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-11fe6bdf&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-11fe6bdf&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker{\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: calc(50% - 13px);\r\n  right: 10px;\r\n  outline: none;\r\n  z-index: 2;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner{\r\n  width: 218px;\r\n}\r\n.datepicker-body{\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span{\r\n  font-weight: bold;\r\n}\r\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn{\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn{\r\n  right: 2px;\r\n}", ""]);
	
	// exports


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _translations = __webpack_require__(190);
	
	var _translations2 = _interopRequireDefault(_translations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="datepicker">
	
	//     <input class="form-control datepicker-input" :class="{'with-reset-button': showResetButton}" type="text"
	
	//         :style="{width:width}"
	
	//         @click="inputClick"
	
	//         v-model="value"/>
	
	//     <button v-if="showResetButton" type="button" class="close" @click="value = ''">
	
	//       <span>&times;</span>
	
	//     </button>
	
	//     <div class="datepicker-popup" v-show="displayDayView">
	
	//       <div class="datepicker-inner">
	
	//         <div class="datepicker-body">
	
	//           <div class="datepicker-ctrl">
	
	//             <span class="month-btn datepicker-preBtn" @click="preNextMonthClick(0)">&lt;</span>
	
	//             <span class="month-btn datepicker-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
	
	//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	
	//           </div>
	
	//           <div class="datepicker-weekRange">
	
	//             <span v-for="w in text.daysOfWeek">{{w}}</span>
	
	//           </div>
	
	//           <div class="datepicker-dateRange">
	
	//             <span v-for="d in dateRange" v-bind:class="d.sclass" @click="daySelect(d.date,this)">{{d.text}}</span>
	
	//           </div>
	
	//         </div>
	
	//       </div>
	
	//     </div>
	
	//     <div class="datepicker-popup" v-show="displayMonthView">
	
	//       <div class="datepicker-inner">
	
	//         <div class="datepicker-body">
	
	//           <div class="datepicker-ctrl">
	
	//             <span class="month-btn datepicker-preBtn" @click="preNextYearClick(0)">&lt;</span>
	
	//             <span class="month-btn datepicker-nextBtn" @click="preNextYearClick(1)">&gt;</span>
	
	//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	
	//           </div>
	
	//           <div class="datepicker-monthRange">
	
	//             <template v-for="m in text.months">
	
	//               <span   v-bind:class="{'datepicker-dateRange-item-active':
	
	//                   (this.text.months[this.parse(this.value).getMonth()]  === m) &&
	
	//                   this.currDate.getFullYear() === this.parse(this.value).getFullYear()}"
	
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
	
	//             <span class="month-btn datepicker-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
	
	//             <span class="month-btn datepicker-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
	
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	
	//           </div>
	
	//           <div class="datepicker-monthRange decadeRange">
	
	//             <template v-for="decade in decadeRange">
	
	//               <span v-bind:class="{'datepicker-dateRange-item-active':
	
	//                   this.parse(this.value).getFullYear() === decade.text}"
	
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
	      default: 'dd/MM/yyyy'
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
	    showResetButton: {
	      type: Boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
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
	      return (0, _translations2.default)(this.lang);
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    inputClick: function inputClick() {
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
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      if (str.length == 10 && (this.format == 'dd-MM-yyyy' || this.format == 'dd/MM/yyyy')) {
	        str = str.substring(3, 5) + '-' + str.substring(0, 2) + '-' + str.substring(6, 10);
	      }
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
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

	//   top: calc(50% - 13px);

	//   right: 10px;

	//   outline: none;

	//   z-index: 2;

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
/* 190 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// return all the translations
	var text = {
	  limit: {
	    en: 'Limit reached ({{limit}} items max).',
	    es: 'Limite alcanzado (máximo {{limit}} items).'
	  },
	  search: {
	    en: 'Search',
	    es: 'Buscar'
	  },
	  notSelected: {
	    en: 'Nothing Selected',
	    es: 'Nada seleccionado'
	  },
	  daysOfWeek: {
	    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
	  },
	  months: {
	    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	  }
	};
	
	exports.default = function () {
	  var lang = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];
	
	  var tr = {};
	  for (var i in text) {
	    tr[i] = text[i][lang] || text[i]['en'];
	  }
	  return tr;
	};

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "<div class=\"datepicker\">\r\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\r\n        :style=\"{width:width}\"\r\n        @click=\"inputClick\"\r\n        v-model=\"value\"/>\r\n    <button v-if=\"showResetButton\" type=\"button\" class=\"close\" @click=\"value = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\r\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\r\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"m in text.months\">\r\n              <span   v-bind:class=\"{'datepicker-dateRange-item-active':\r\n                  (this.text.months[this.parse(this.value).getMonth()]  === m) &&\r\n                  this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\r\n                  @click=\"monthSelect($index)\"\r\n                >{{m.substr(0,3)}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\r\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span v-bind:class=\"{'datepicker-dateRange-item-active':\r\n                  this.parse(this.value).getFullYear() === decade.text}\"\r\n                  @click.stop=\"yearSelect(decade.text)\"\r\n                >{{decade.text}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(193)
	module.exports = __webpack_require__(195)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(223)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-1f77809f&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-1f77809f&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue")
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
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1f77809f&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1f77809f&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
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

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".btn-select[_v-1f77809f] {\r\n  display: inline-block;\r\n}\r\n.bs-searchbox[_v-1f77809f] {\r\n  padding: 4px 8px;\r\n}\r\n.btn-group .dropdown-menu .notify[_v-1f77809f] {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n  opacity: .9;\r\n}\r\n.btn-group.btn-group-justified .dropdown-menu[_v-1f77809f] {\r\n  width:100%;\r\n}\r\nspan.caret[_v-1f77809f] {\r\n  float: right;\r\n  margin-top: 9px;\r\n  margin-left: 5px;\r\n}\r\nspan.close[_v-1f77809f] {\r\n  margin-left: 5px;\r\n}\r\nspan[values]>select[_v-1f77809f] {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}", ""]);
	
	// exports


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(196);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getIterator2 = __webpack_require__(220);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _translations = __webpack_require__(190);
	
	var _translations2 = _interopRequireDefault(_translations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	// <div class="btn-select" :class="{'btn-group btn-group-justified': justified}">
	
	//   <div class="btn-group" :class="{open: show}">
	
	//     <button v-el:btn type="button" class="btn btn-default dropdown-toggle"
	
	//       :disabled="disabled"
	
	//       @click="toggleDropdown()"
	
	//       @blur="search ? null : blur()"
	
	//       @keyup.esc="show = false"
	
	//     >
	
	//       <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder||text.notSelected}}</span>
	
	//       <span class="btn-content">{{ selectedItems }}</span>
	
	//       <span class="caret"></span>
	
	//       <span v-if="showResetButton&&value.length" class="close" @click="clear()">&times;</span>
	
	//     </button>
	
	//     <ul class="dropdown-menu">
	
	//       <template v-if="options.length">
	
	//         <li v-if="search" class="bs-searchbox">
	
	//           <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
	
	//             v-el:search
	
	//             v-model="searchValue"
	
	//             @blur="blur()"
	
	//             @keyup.esc="show = false"
	
	//           />
	
	//         </li>
	
	//         <li v-for="option in options | filterBy searchValue" :id="option.value" style="position:relative">
	
	//           <a @mousedown.prevent="select(option.value)" style="cursor:pointer">
	
	//             {{ option.label }}
	
	//             <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option.value)"></span>
	
	//           </a>
	
	//         </li>
	
	//       </template>
	
	//       <slot v-else></slot>
	
	//       <div class="notify" v-show="showNotify" transition="fadein">{{limitText}}</div>
	
	//     </ul>
	
	//   </div>
	
	// </div>
	
	// <span values v-if="name && (required || value.length)">
	
	//   <select name="{{name}}" :multiple="multiple" :required="required" @focus="focus()">
	
	//     <option v-if="!value.length" value=""></option>
	
	//     <option v-else v-for="val in value" value="{{val}}" selected>{{val}}</option>
	
	//   </select>
	
	// </span>
	
	// </template>
	
	// <script>
	
	var timeout;
	
	exports.default = {
	  props: {
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    value: {
	      twoWay: true
	    },
	    multiple: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    required: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: null
	    },
	    placeholder: {
	      type: String,
	      default: null
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    searchText: {
	      type: String,
	      default: null
	    },
	    showResetButton: {
	      type: Boolean,
	      default: false
	    },
	    closeOnSelect: { // only works when multiple==false
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    justified: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  ready: function ready() {
	    if (this.value instanceof Array) {
	      if (!this.multiple && this.value.length > 1) {
	        this.value = this.value.slice(0, 1);
	      } else if (this.multiple && this.value.length > this.limit) {
	        this.value = this.value.slice(0, this.limit);
	      }
	    } else {
	      if (this.value === null || this.value === undefined || this.value.length === 0) {
	        this.value = [];
	      } else {
	        this.value = [this.value];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      searchValue: null,
	      show: false,
	      showNotify: false
	    };
	  },
	
	  computed: {
	    selectedItems: function selectedItems() {
	      var foundItems = [];
	      if (this.value.length) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = (0, _getIterator3.default)(this.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var item = _step.value;
	
	            if (this.options.length === 0) {
	              foundItems = this.value;
	            } else {
	              if (~['number', 'string'].indexOf(typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item))) {
	                var option = void 0;
	                this.options.some(function (o) {
	                  if (o.value == item) {
	                    option = o;
	                    return true;
	                  }
	                });
	                option && foundItems.push(option.label);
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        return foundItems.join(', ');
	      }
	    },
	    limitText: function limitText() {
	      return this.text.limit.replace('{{limit}}', this.limit);
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.value.length === 0;
	    },
	    text: function text() {
	      return (0, _translations2.default)(this.lang);
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      if (val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        setTimeout(function () {
	          return _this.showNotify = false;
	        }, 1000);
	      }
	    },
	    show: function show(val) {
	      if (this.show) this.focus();
	    }
	  },
	  methods: {
	    select: function select(v) {
	      if (~this.value.indexOf(v)) {
	        if (this.multiple) {
	          this.value.$remove(v);
	        }
	      } else {
	        if (this.multiple) {
	          this.value.push(v);
	        } else {
	          this.value = [v];
	        }
	      }
	      if (!this.multiple || this.closeOnSelect) {
	        this.toggleDropdown();
	      }
	    },
	    clear: function clear() {
	      this.value = [];
	      this.toggleDropdown();
	    },
	    isSelected: function isSelected(v) {
	      if (this.value instanceof Array) {
	        return ~this.value.indexOf(v);
	      } else {
	        return this.value == v;
	      }
	    },
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	      if (timeout) {
	        clearTimeout(timeout);
	        timeout = false;
	      }
	    },
	    blur: function blur() {
	      var _this2 = this;
	
	      if (this.search) {
	        timeout = setTimeout(function () {
	          return timeout = _this2.show = false;
	        }, 100);
	      } else {
	        this.show = false;
	      }
	    },
	    focus: function focus() {
	      if (this.show) {
	        (this.$els.search || this.$els.btn).focus();
	      } else {
	        this.$els.btn.focus();
	      }
	    }
	  }
	};
	// </script>

	// <style scoped>

	// .btn-select {

	//   display: inline-block;

	// }

	// .bs-searchbox {

	//   padding: 4px 8px;

	// }

	// .btn-group .dropdown-menu .notify {

	//   position: absolute;

	//   bottom: 5px;

	//   width: 96%;

	//   margin: 0 2%;

	//   min-height: 26px;

	//   padding: 3px 5px;

	//   background: #f5f5f5;

	//   border: 1px solid #e3e3e3;

	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.05);

	//   pointer-events: none;

	//   opacity: .9;

	// }

	// .btn-group.btn-group-justified .dropdown-menu {

	//   width:100%;

	// }

	// span.caret {

	//   float: right;

	//   margin-top: 9px;

	//   margin-left: 5px;

	// }

	// span.close {

	//   margin-left: 5px;

	// }

	// span[values]>select {

	//   border: 0;

	//   clip: rect(0 0 0 0);

	//   height: 1px;

	//   margin: -1px;

	//   overflow: hidden;

	//   padding: 0;

	//   position: absolute;

	//   width: 1px;

	// }

	// </style>

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(197);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(204);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(198), __esModule: true };

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);
	__webpack_require__(199);
	module.exports = __webpack_require__(203).f('iterator');

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(200);
	var global        = __webpack_require__(54)
	  , hide          = __webpack_require__(58)
	  , Iterators     = __webpack_require__(70)
	  , TO_STRING_TAG = __webpack_require__(88)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(201)
	  , step             = __webpack_require__(202)
	  , Iterators        = __webpack_require__(70)
	  , toIObject        = __webpack_require__(76);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(51)(Array, 'Array', function(iterated, kind){
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
/* 201 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(88);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(205), __esModule: true };

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(206);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	module.exports = __webpack_require__(55).Symbol;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(54)
	  , has            = __webpack_require__(69)
	  , DESCRIPTORS    = __webpack_require__(63)
	  , $export        = __webpack_require__(53)
	  , redefine       = __webpack_require__(68)
	  , META           = __webpack_require__(207).KEY
	  , $fails         = __webpack_require__(64)
	  , shared         = __webpack_require__(83)
	  , setToStringTag = __webpack_require__(87)
	  , uid            = __webpack_require__(84)
	  , wks            = __webpack_require__(88)
	  , wksExt         = __webpack_require__(203)
	  , wksDefine      = __webpack_require__(208)
	  , keyOf          = __webpack_require__(209)
	  , enumKeys       = __webpack_require__(210)
	  , isArray        = __webpack_require__(213)
	  , anObject       = __webpack_require__(60)
	  , toIObject      = __webpack_require__(76)
	  , toPrimitive    = __webpack_require__(66)
	  , createDesc     = __webpack_require__(67)
	  , _create        = __webpack_require__(72)
	  , gOPNExt        = __webpack_require__(214)
	  , $GOPD          = __webpack_require__(216)
	  , $DP            = __webpack_require__(59)
	  , $keys          = __webpack_require__(74)
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
	  __webpack_require__(215).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(212).f  = $propertyIsEnumerable;
	  __webpack_require__(211).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(52)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(58)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(84)('meta')
	  , isObject = __webpack_require__(61)
	  , has      = __webpack_require__(69)
	  , setDesc  = __webpack_require__(59).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(64)(function(){
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(54)
	  , core           = __webpack_require__(55)
	  , LIBRARY        = __webpack_require__(52)
	  , wksExt         = __webpack_require__(203)
	  , defineProperty = __webpack_require__(59).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(74)
	  , toIObject = __webpack_require__(76);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(74)
	  , gOPS    = __webpack_require__(211)
	  , pIE     = __webpack_require__(212);
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
/* 211 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 212 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(78);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(76)
	  , gOPN      = __webpack_require__(215).f
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
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(75)
	  , hiddenKeys = __webpack_require__(85).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(212)
	  , createDesc     = __webpack_require__(67)
	  , toIObject      = __webpack_require__(76)
	  , toPrimitive    = __webpack_require__(66)
	  , has            = __webpack_require__(69)
	  , IE8_DOM_DEFINE = __webpack_require__(62)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(63) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 217 */
/***/ function(module, exports) {



/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(208)('asyncIterator');

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(208)('observable');

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(221), __esModule: true };

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(199);
	__webpack_require__(47);
	module.exports = __webpack_require__(222);

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(60)
	  , get      = __webpack_require__(95);
	module.exports = __webpack_require__(55).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-select\" :class=\"{'btn-group btn-group-justified': justified}\" _v-1f77809f=\"\">\n  <div class=\"btn-group\" :class=\"{open: show}\" _v-1f77809f=\"\">\n    <button v-el:btn=\"\" type=\"button\" class=\"btn btn-default dropdown-toggle\" :disabled=\"disabled\" @click=\"toggleDropdown()\" @blur=\"search ? null : blur()\" @keyup.esc=\"show = false\" _v-1f77809f=\"\">\n      <span class=\"btn-placeholder\" v-show=\"showPlaceholder\" _v-1f77809f=\"\">{{placeholder||text.notSelected}}</span>\n      <span class=\"btn-content\" _v-1f77809f=\"\">{{ selectedItems }}</span>\n      <span class=\"caret\" _v-1f77809f=\"\"></span>\n      <span v-if=\"showResetButton&amp;&amp;value.length\" class=\"close\" @click=\"clear()\" _v-1f77809f=\"\">×</span>\n    </button>\n    <ul class=\"dropdown-menu\" _v-1f77809f=\"\">\n      <template v-if=\"options.length\" _v-1f77809f=\"\">\n        <li v-if=\"search\" class=\"bs-searchbox\" _v-1f77809f=\"\">\n          <input type=\"text\" placeholder=\"{{searchText||text.search}}\" class=\"form-control\" autocomplete=\"off\" v-el:search=\"\" v-model=\"searchValue\" @blur=\"blur()\" @keyup.esc=\"show = false\" _v-1f77809f=\"\">\n        </li>\n        <li v-for=\"option in options | filterBy searchValue\" :id=\"option.value\" style=\"position:relative\" _v-1f77809f=\"\">\n          <a @mousedown.prevent=\"select(option.value)\" style=\"cursor:pointer\" _v-1f77809f=\"\">\n            {{ option.label }}\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option.value)\" _v-1f77809f=\"\"></span>\n          </a>\n        </li>\n      </template>\n      <slot v-else=\"\" _v-1f77809f=\"\"></slot>\n      <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\" _v-1f77809f=\"\">{{limitText}}</div>\n    </ul>\n  </div>\n</div>\n<span values=\"\" v-if=\"name &amp;&amp; (required || value.length)\" _v-1f77809f=\"\">\n  <select name=\"{{name}}\" :multiple=\"multiple\" :required=\"required\" @focus=\"focus()\" _v-1f77809f=\"\">\n    <option v-if=\"!value.length\" value=\"\" _v-1f77809f=\"\"></option>\n    <option v-else=\"\" v-for=\"val in value\" value=\"{{val}}\" selected=\"\" _v-1f77809f=\"\">{{val}}</option>\n  </select>\n</span>";

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)
	module.exports = __webpack_require__(227)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(228)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-57eb20d0&file=Option.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-57eb20d0&file=Option.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-57eb20d0&file=Option.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-57eb20d0&file=Option.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, "a span.check-mark[_v-57eb20d0] {\r\n  position: absolute;\r\n  display: inline-block;\r\n  right: 15px;\r\n  margin-top: 5px;\r\n}", ""]);
	
	// exports


/***/ },
/* 227 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	//   <li style="position:relative">
	
	//     <a @mousedown.prevent="handleClick" style="cursor:pointer">
	
	//       <span v-el:v><slot></slot></span>
	
	//       <span class="glyphicon glyphicon-ok check-mark" v-show="chosen"></span>
	
	//     </a>
	
	//   </li>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      chosen: false
	    };
	  },
	
	  computed: {
	    chosen: function chosen() {
	      return this.$parent.value.indexOf(this.value) !== -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      if (parent.multiple) {
	        var index = parent.value.indexOf(this.value);
	        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      } else {
	        parent.value = [this.value];
	        parent.show = false;
	      }
	    }
	  }
	};
	// </script>

	// <style scoped>

	// a span.check-mark {

	//   position: absolute;

	//   display: inline-block;

	//   right: 15px;

	//   margin-top: 5px;

	// }

	// </style>

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<li style=\"position:relative\" _v-57eb20d0=\"\">\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\" _v-57eb20d0=\"\">\n      <span v-el:v=\"\" _v-57eb20d0=\"\"><slot _v-57eb20d0=\"\"></slot></span>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\" _v-57eb20d0=\"\"></span>\n    </a>\n  </li>";

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"datepicker\">\r\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">Datepicker</a></h1>\r\n    <div class=\"bs-example\">\r\n      <p>\r\n        <pre>\r\nSelected date is: {{new Date(value).toString().slice(0, -23)}}\r\n        </pre>\r\n      </p>\r\n      <datepicker v-ref:dp :value.sync=\"value\" :disabled-days-of-Week=\"disabled\"\r\n      :format=\"format.toString()\" :show-reset-button=\"reset\"></datepicker>\r\n      <h4>Disabled days of week</h4>\r\n\r\n      <v-select multiple :value.sync=\"disabled\">\r\n  <v-option value=\"0\">0</v-option>\r\n  <v-option value=\"1\">1</v-option>\r\n  <v-option value=\"2\">2</v-option>\r\n  <v-option value=\"3\">3</v-option>\r\n  <v-option value=\"4\">4</v-option>\r\n  <v-option value=\"5\">5</v-option>\r\n  <v-option value=\"6\">6</v-option>\r\n      </v-select>\r\n\r\n      <h4>Format</h4>\r\n      <v-select :value.sync=\"format\">\r\n        <v-option value=\"dd/MM/yyyy\">dd/MM/yyyy</v-option>\r\n        <v-option value=\"dd-MM-yyyy\">dd-MM-yyyy</v-option>\r\n        <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\r\n        <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\r\n        <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\r\n        <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\r\n        <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\r\n        <v-option value=\"MM/dd/yyyy\">MM/dd/yyyy</v-option>\r\n        <v-option value=\"MM-dd-yyyy\">MM-dd-yyyy</v-option>\r\n      </v-select>\r\n\r\n      <h4>Reset button</h4>\r\n      <label><input type=\"checkbox\" v-model=\"reset\" @click=\"x\"> toggle reset button</label>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<datepicker\r\n  :value.sync=\"value\"\r\n  :disabled-days-of-Week=\"disabled\"\r\n  :format=\"format\"\r\n  :show-reset-button=\"reset\">\r\n</datepicker>\r\n\r\n<select multiple :value.sync=\"disabled\" size=5>\r\n  <v-option value=\"0\">0</v-option>\r\n  <v-option value=\"1\">1</v-option>\r\n  <v-option value=\"2\">2</v-option>\r\n  <v-option value=\"3\">3</v-option>\r\n  <v-option value=\"4\">4</v-option>\r\n  <v-option value=\"5\">5</v-option>\r\n  <v-option value=\"6\">6</v-option>\r\n</select>\r\n<select  :value.sync=\"format\">\r\n  <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\r\n  <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\r\n  <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\r\n  <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\r\n  <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\r\n  <v-option value=\"dd/MM/yyyy\">dd/MM/yyyy</v-option>\r\n  <v-option value=\"dd-MM-yyyy\">dd-MM-yyyy</v-option>\r\n</select>\r\n    </script></code></pre>\r\n    <h2>Option</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>value</td>\r\n          <td><code>String</code></td>\r\n          <td></td>\r\n          <td>Value of the input DOM</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Width</td>\r\n          <td><code>String</code></td>\r\n          <td>200px</td>\r\n          <td>Width of the input DOM</td>\r\n        </tr>\r\n        <tr>\r\n          <td>format</td>\r\n          <td><code>String</code></td>\r\n          <td><code>MMMM/dd/yyyy</code></td>\r\n          <td>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>disabledDaysOfWeek</td>\r\n          <td><code>Array</code></td>\r\n          <td></td>\r\n          <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\r\n             Multiple values should be comma-separated.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>showResetButton</td>\r\n          <td><code>Boolean</code></td>\r\n          <td>false</td>\r\n          <td>If <strong>true</strong> shows an &times; shaped button to clear the selected date.\r\n            Usefull in forms where date entry is optional.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(231)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(235)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(232);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  }
	};
	// </script>
	// <template>

	//   <div class="bs-docs-section" id="dropdown">

	//     <h1 class="page-header"><a href="#dropdown" class="anchor">Dropdown</a></h1>

	//     <div class="bs-example">

	//       <dropdown>

	//         <button type="button" class="btn btn-default" data-toggle="dropdown">

	//           Action

	//           <span class="caret"></span>

	//         </button>

	//         <ul slot="dropdown-menu" class="dropdown-menu">

	//           <li><a href="#">Action</a></li>

	//           <li><a href="#">Another action</a></li>

	//           <li><a href="#">Something else here</a></li>

	//           <li role="separator" class="divider"></li>

	//           <li><a href="#">Separated link</a></li>

	//         </ul>

	//       </dropdown>

	//       <dropdown>

	//         <button type="button" class="btn btn-success" data-toggle="dropdown">

	//           Action <span class="caret"></span>

	//         </button>

	//         <ul slot="dropdown-menu" class="dropdown-menu">

	//           <li><a href="#">Action</a></li>

	//           <li><a href="#">Another action</a></li>

	//           <li><a href="#">Something else here</a></li>

	//           <li role="separator" class="divider"></li>

	//           <li><a href="#">Separated link</a></li>

	//         </ul>

	//       </dropdown>

	//       <dropdown>

	//         <button type="button" class="btn btn-primary" data-toggle="dropdown">

	//           Action <span class="caret"></span>

	//         </button>

	//         <ul slot="dropdown-menu" class="dropdown-menu">

	//           <li><a href="#">Action</a></li>

	//           <li><a href="#">Another action</a></li>

	//           <li><a href="#">Something else here</a></li>

	//           <li role="separator" class="divider"></li>

	//           <li><a href="#">Separated link</a></li>

	//         </ul>

	//       </dropdown>

	//       <div class="btn-group btn-group-justified" role="group">

	//         <a href="#" class="btn btn-default" role="button">Left</a>

	//         <a href="#" class="btn btn-default" role="button">Middle</a>

	//         <dropdown>

	//           <a href="#" class="btn btn-default" data-toggle="dropdown">

	//             Dropdown <span class="caret"></span>

	//           </a>

	//           <ul slot="dropdown-menu" class="dropdown-menu">

	//             <li><a href="#">Action</a></li>

	//             <li><a href="#">Another action</a></li>

	//             <li><a href="#">Something else here</a></li>

	//             <li role="separator" class="divider"></li>

	//             <li><a href="#">Separated link</a></li>

	//           </ul>

	//         </dropdown>

	//       </div>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <dropdown>

	//   <button type="button" class="btn btn-default" data-toggle="dropdown">

	//     Action

	//     <span class="caret"></span>

	//   </button>

	//   <ul slot="dropdown-menu" class="dropdown-menu">

	//     <li><a href="#">Action</a></li>

	//     <li><a href="#">Another action</a></li>

	//     <li><a href="#">Something else here</a></li>

	//     <li role="separator" class="divider"></li>

	//     <li><a href="#">Separated link</a></li>

	//   </ul>

	// </dropdown>

	// </script></code></pre>

	//     <h2>Usage</h2>

	//     <p>

	//       Just use as <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.

	//       Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.

	//     </p>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(233)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(234)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  methods: {
	    toggleDropdown: function toggleDropdown(e) {
	      e.preventDefault();
	      this.$el.classList.toggle('open');
	    }
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var toggle = el.querySelector('[data-toggle="dropdown"]');
	    if (toggle) {
	      toggle.style.borderRadius = '4px';
	      toggle.addEventListener('click', this.toggleDropdown);
	    }
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target) || e.target.nodeName.toLowerCase() == 'a') el.classList.remove('open');
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>
	// <template>

	//   <div class="btn-group">

	//     <slot></slot>

	//     <slot name="dropdown-menu"></slot>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\">\r\n    <slot></slot>\r\n    <slot name=\"dropdown-menu\"></slot>\r\n  </div>";

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"dropdown\">\r\n    <h1 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown</a></h1>\r\n    <div class=\"bs-example\">\r\n      <dropdown>\r\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\r\n          Action\r\n          <span class=\"caret\"></span>\r\n        </button>\r\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\r\n          <li><a href=\"#\">Action</a></li>\r\n          <li><a href=\"#\">Another action</a></li>\r\n          <li><a href=\"#\">Something else here</a></li>\r\n          <li role=\"separator\" class=\"divider\"></li>\r\n          <li><a href=\"#\">Separated link</a></li>\r\n        </ul>\r\n      </dropdown>\r\n      <dropdown>\r\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"dropdown\">\r\n          Action <span class=\"caret\"></span>\r\n        </button>\r\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\r\n          <li><a href=\"#\">Action</a></li>\r\n          <li><a href=\"#\">Another action</a></li>\r\n          <li><a href=\"#\">Something else here</a></li>\r\n          <li role=\"separator\" class=\"divider\"></li>\r\n          <li><a href=\"#\">Separated link</a></li>\r\n        </ul>\r\n      </dropdown>\r\n      <dropdown>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\r\n          Action <span class=\"caret\"></span>\r\n        </button>\r\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\r\n          <li><a href=\"#\">Action</a></li>\r\n          <li><a href=\"#\">Another action</a></li>\r\n          <li><a href=\"#\">Something else here</a></li>\r\n          <li role=\"separator\" class=\"divider\"></li>\r\n          <li><a href=\"#\">Separated link</a></li>\r\n        </ul>\r\n      </dropdown>\r\n      <div class=\"btn-group btn-group-justified\" role=\"group\">\r\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Left</a>\r\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Middle</a>\r\n        <dropdown>\r\n          <a href=\"#\" class=\"btn btn-default\" data-toggle=\"dropdown\">\r\n            Dropdown <span class=\"caret\"></span>\r\n          </a>\r\n          <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Action</a></li>\r\n            <li><a href=\"#\">Another action</a></li>\r\n            <li><a href=\"#\">Something else here</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Separated link</a></li>\r\n          </ul>\r\n        </dropdown>\r\n      </div>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<dropdown>\r\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\r\n    Action\r\n    <span class=\"caret\"></span>\r\n  </button>\r\n  <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\r\n    <li><a href=\"#\">Action</a></li>\r\n    <li><a href=\"#\">Another action</a></li>\r\n    <li><a href=\"#\">Something else here</a></li>\r\n    <li role=\"separator\" class=\"divider\"></li>\r\n    <li><a href=\"#\">Separated link</a></li>\r\n  </ul>\r\n</dropdown>\r\n</script></code></pre>\r\n    <h2>Usage</h2>\r\n    <p>\r\n      Just use as <a target=\"_blank\" href=\"http://getbootstrap.com/javascript/#dropdowns\">original Bootstrap way</a>.\r\n      Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.\r\n    </p>\r\n  </div>";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(237)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(247)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(238);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      showModal: false,
	      fadeModal: false,
	      zoomModal: false,
	      showCustomModal: false,
	      largeModal: false,
	      smallModal: false
	    };
	  },
	
	  components: {
	    modal: _Modal2.default
	  }
	};
	// </script>
	// <template>

	//   <div class="bs-docs-section" id="modal">

	//     <h1 class="page-header"><a href="#modal" class="anchor">Modal</a></h1>

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

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <button class="btn btn-default"

	//   @click="showModal = true"

	//   >Show modal

	// </button>

	// <modal :show.sync="showModal">

	//   <div slot="modal-header" class="modal-header">

	//     <h4 class="modal-title">Modal title</h4>

	//   </div>

	//   <div slot="modal-body" class="modal-body">...</div>

	// </modal>

	// <button class="btn btn-primary"

	//   @click="fadeModal = true">

	//   Fade modal

	// </button>

	// <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">

	//   <div slot="modal-body" class="modal-body">...</div>

	// </modal>

	// <button class="btn btn-success"

	//   @click="zoomModal = true">

	//   Zoom modal

	// </button>

	// <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">

	//   <div slot="modal-body" class="modal-body">...</div>

	// </modal>

	// <button class="btn btn-default"

	//   @click="showCustomModal = true">

	//   Show custom modal

	// </button>

	// <modal :show.sync="showCustomModal" effect="fade" width="400">

	//   <div slot="modal-header" class="modal-header">

	//     <h4 class="modal-title">

	//       <i>Custom</i> <code>Modal</code> <b>Title</b>

	//     </h4>

	//   </div>

	//   <div slot="modal-body" class="modal-body">...</div>

	//   <div slot="modal-footer" class="modal-footer">

	//     <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>

	//     <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>

	//   </div>

	// </modal>

	// <button class="btn btn-default"

	//   @click="largeModal = true"

	//   >Large Modal

	// </button>

	// <modal :show.sync="largeModal">

	//   <div slot="modal-body" class="modal-body">...</div>

	// </modal>

	// <button class="btn btn-default"

	//   @click="smallModal = true"

	//   >Small Modal

	// </button>

	// <modal :show.sync="smallModal">

	//   <div slot="modal-body" class="modal-body">...</div>

	// </modal>

	//   </script></code></pre>

	//   <h2>Options</h2>

	//   <table class="table table-bordered">

	//     <thead>

	//       <tr>

	//         <th>Name</th>

	//         <th>Type</th>

	//         <th>Default</th>

	//         <th>Description</th>

	//       </tr>

	//     </thead>

	//     <tbody>

	//       <tr>

	//         <td>title</td>

	//         <td><code>String</code></td>

	//         <td></td>

	//         <td>Title of the modal component.</td>

	//       </tr>

	//       <tr>

	//         <td>ok-text</td>

	//         <td><code>String</code></td>

	//         <td>Save changes</td>

	//         <td>Text for OK button</td>

	//       </tr>

	//       <tr>

	//         <td>cancel-text</td>

	//         <td><code>String</code></td>

	//         <td>Close</td>

	//         <td>Text for cancel button</td>

	//       </tr>

	//       <tr>

	//         <td>width</td>

	//         <td><code>Number, String or null</code></td>

	//         <td><code>null</code></td>

	//         <td>Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</td>

	//       </tr>

	//       <tr>

	//         <td>callback</td>

	//         <td><code>Function</code></td>

	//         <td></td>

	//         <td>A callback Function when you click the modal primary button.</td>

	//       </tr>

	//       <tr>

	//         <td>large</td>

	//         <td><code>Boolean</code></td>

	//         <td><code>false</code></td>

	//         <td>Creates a large modal ( see boostrap's documentation for .modal-lg )</td>

	//       </tr>

	//       <tr>

	//         <td>small</td>

	//         <td><code>Boolean</code></td>

	//         <td><code>false</code></td>

	//         <td>Creates a small modal ( see boostrap's documentation for .modal-sm )</td>

	//       </tr>

	//       <tr>

	//         <td>backdrop</td>

	//         <td><code>Boolean</code></td>

	//         <td><code>true</code></td>

	//         <td>Enables/disables closing the modal by clicking on the backdrop.</td>

	//       </tr>

	//     </tbody>

	//   </table>

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

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(239)
	module.exports = __webpack_require__(241)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(246)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(240);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-43668a5a&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-43668a5a&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}", ""]);
	
	// exports


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(242);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(155);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(106);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      require: true,
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
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
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    large: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    small: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.$watch('show', function (val) {
	      var el = _this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        el.querySelector('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return el.classList.add('in');
	        }, 0);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        if (_this.backdrop) {
	          _this._blurModalContentEvent = _EventListener2.default.listen(_this.$el, 'click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        if (_this._blurModalContentEvent) _this._blurModalContentEvent.remove();
	        el.classList.remove('in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }, { immediate: true });
	  },
	
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + "px";
	      }
	      return this.width;
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

	//             <h4 class="modal-title" >

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

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(244);
	module.exports = __webpack_require__(55).Number.isInteger;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(245)});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(61)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<div role=\"dialog\"\r\n    v-bind:class=\"{\r\n    'modal':true,\r\n    'fade':effect === 'fade',\r\n    'zoom':effect === 'zoom'\r\n    }\"\r\n    >\r\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\r\n      v-bind:style=\"{width: optionalWidth}\">\r\n      <div class=\"modal-content\">\r\n        <slot name=\"modal-header\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\r\n            <h4 class=\"modal-title\" > \r\n              <slot name=\"title\">\r\n                {{title}}\r\n              </slot>\r\n            </h4>\r\n          </div>\r\n        </slot>\r\n        <slot name=\"modal-body\">\r\n          <div class=\"modal-body\"></div>\r\n        </slot>\r\n        <slot name=\"modal-footer\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">{{ okText }}</button>\r\n          </div>\r\n        </slot>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"modal\">\r\n    <h1 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal</a></h1>\r\n    <div class=\"bs-example\">\r\n      <button class=\"btn btn-default\" @click=\"showModal = true\">Show modal</button>\r\n      <modal title=\"Modal title\" :show.sync=\"showModal\">\r\n        <div slot=\"modal-header\" class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Modal <b>Title</b></h4>\r\n        </div>\r\n        <div slot=\"modal-body\" class=\"modal-body\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </div>\r\n      </modal>\r\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\r\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\r\n        <div slot=\"modal-body\" class=\"modal-body\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </div>\r\n      </modal>\r\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\r\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\r\n        <div slot=\"modal-body\" class=\"modal-body\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </div>\r\n      </modal>\r\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\r\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"50%\">\r\n        <div slot=\"modal-header\" class=\"modal-header\">\r\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\r\n        </div>\r\n        <div slot=\"modal-body\" class=\"modal-body\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </div>\r\n        <div slot=\"modal-footer\" class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\r\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\r\n        </div>\r\n      </modal>\r\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\r\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\r\n        <div slot=\"modal-body\" class=\"modal-body\">\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n        </div>\r\n      </modal>\r\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">Small modal</button>\r\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\r\n        <div slot=\"modal-body\" class=\"modal-body\">\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat.\r\n        </div>\r\n      </modal>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<button class=\"btn btn-default\"\r\n  @click=\"showModal = true\"\r\n  >Show modal\r\n</button>\r\n<modal :show.sync=\"showModal\">\r\n  <div slot=\"modal-header\" class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Modal title</h4>\r\n  </div>\r\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\r\n</modal>\r\n\r\n<button class=\"btn btn-primary\"\r\n  @click=\"fadeModal = true\">\r\n  Fade modal\r\n</button>\r\n<modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\r\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\r\n</modal>\r\n\r\n<button class=\"btn btn-success\"\r\n  @click=\"zoomModal = true\">\r\n  Zoom modal\r\n</button>\r\n<modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\r\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\r\n</modal>\r\n\r\n<button class=\"btn btn-default\"\r\n  @click=\"showCustomModal = true\">\r\n  Show custom modal\r\n</button>\r\n<modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"400\">\r\n  <div slot=\"modal-header\" class=\"modal-header\">\r\n    <h4 class=\"modal-title\">\r\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\r\n    </h4>\r\n  </div>\r\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\r\n  <div slot=\"modal-footer\" class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\r\n    <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\r\n  </div>\r\n</modal>\r\n<button class=\"btn btn-default\"\r\n  @click=\"largeModal = true\"\r\n  >Large Modal\r\n</button>\r\n<modal :show.sync=\"largeModal\">\r\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\r\n</modal>\r\n<button class=\"btn btn-default\"\r\n  @click=\"smallModal = true\"\r\n  >Small Modal\r\n</button>\r\n<modal :show.sync=\"smallModal\">\r\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\r\n</modal>\r\n  </script></code></pre>\r\n  <h2>Options</h2>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Type</th>\r\n        <th>Default</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>title</td>\r\n        <td><code>String</code></td>\r\n        <td></td>\r\n        <td>Title of the modal component.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>ok-text</td>\r\n        <td><code>String</code></td>\r\n        <td>Save changes</td>\r\n        <td>Text for OK button</td>\r\n      </tr>\r\n      <tr>\r\n        <td>cancel-text</td>\r\n        <td><code>String</code></td>\r\n        <td>Close</td>\r\n        <td>Text for cancel button</td>\r\n      </tr>\r\n      <tr>\r\n        <td>width</td>\r\n        <td><code>Number, String or null</code></td>\r\n        <td><code>null</code></td>\r\n        <td>Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>callback</td>\r\n        <td><code>Function</code></td>\r\n        <td></td>\r\n        <td>A callback Function when you click the modal primary button.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>large</td>\r\n        <td><code>Boolean</code></td>\r\n        <td><code>false</code></td>\r\n        <td>Creates a large modal ( see boostrap's documentation for .modal-lg )</td>\r\n      </tr>\r\n      <tr>\r\n        <td>small</td>\r\n        <td><code>Boolean</code></td>\r\n        <td><code>false</code></td>\r\n        <td>Creates a small modal ( see boostrap's documentation for .modal-sm )</td>\r\n      </tr>\r\n      <tr>\r\n        <td>backdrop</td>\r\n        <td><code>Boolean</code></td>\r\n        <td><code>true</code></td>\r\n        <td>Enables/disables closing the modal by clicking on the backdrop.</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <h2>Usage</h2>\r\n  <p>\r\n    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you\r\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\r\n    <code>&lt;div slot=\"modal-title\" class=\"modal-title\"&gt;...&lt;/div&gt;</code> and\r\n    <code>&lt;div slot=\"modal-footer\" class=\"modal-footer\"&gt;...&lt;/div&gt;</code>.\r\n  </p>\r\n  </div>";

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(249)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(255)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(250);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	
	  components: {
	    popover: _Popover2.default
	  }
	};
	// </script>
	// <template>

	//   <div class="bs-docs-section" id="popover">

	//     <h1 class="page-header"><a href="#popover" class="anchor">Popover</a></h1>

	//     <div class="bs-example">

	//       <popover effect="fade" content="Lorem ipsum dolor sit amet" placement="top">

	//         <button class="btn btn-default ">Popover on top</button>

	//       </popover>

	//       <popover effect="fade" content="Lorem ipsum dolor sit amet" placement="left">

	//         <button class="btn btn-default ">Popover on left</button>

	//       </popover>

	//       <popover effect="fade" content="Lorem ipsum dolor sit amet" placement="right">

	//         <button class="btn btn-default ">Popover on right</button>

	//       </popover>

	//       <popover effect="fade" placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">

	//         <button class="btn btn-default ">Popover on bottom</button>

	//       </popover>

	//       <hr>

	//       <h4>Title</h4>

	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="top">

	//         <button class="btn btn-default ">Popover on top</button>

	//       </popover>

	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="left">

	//         <button class="btn btn-default ">Popover on left</button>

	//       </popover>

	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="right">

	//         <button class="btn btn-default ">Popover on right</button>

	//       </popover>

	//       <popover effect="fade" placement="bottom" :header="true" title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">

	//         <button class="btn btn-default ">Popover on bottom</button>

	//       </popover>

	//       <hr>

	//       <h4>Triger</h4>

	//       <p>

	//         <popover effect="scale" title="Title" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">

	//             <button class="btn btn-default ">Mouseenter</button>

	//         </popover>

	//       </p>

	//       <popover effect="scale"

	//       title="Title" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">

	//         <input type="text" class="form-control" placeholder="Focus">

	//       </popover>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <popover effect="fade" placement="bottom" title="Title"

	//   content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">

	//   <button class="btn btn-default">Popover on bottom</button>

	// </popover>

	// </script></code></pre>

	//   <h2>Options</h2>

	//   <table class="table table-bordered">

	//     <thead>

	//       <tr>

	//         <th>Name</th>

	//         <th>Type</th>

	//         <th>Default</th>

	//         <th>Description</th>

	//       </tr>

	//     </thead>

	//     <tbody>

	//       <tr>

	//         <td>trigger</td>

	//         <td><code>String</code>, one of <code>click</code>

	//         <code>focus</code>

	//         <code>hover</code></td>

	//         <td><code>click</code></td>

	//         <td>How the popover is triggered.</td>

	//       </tr>

	//       <tr>

	//         <td>effect</td>

	//         <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>

	//         <td><code>fade</code></td>

	//         <td></td>

	//       </tr>

	//       <tr>

	//         <td>title</td>

	//         <td><code>String</code></td>

	//         <td></td>

	//         <td></td>

	//       </tr>

	//       <tr>

	//         <td>content</td>

	//         <td><code>String</code></td>

	//         <td></td>

	//         <td></td>

	//       </tr>

	//       <tr>

	//         <td>header</td>

	//         <td><code>Boolean</code></td>

	//         <td><code>true</code></td>

	//         <td>Whether to show the header.</td>

	//       </tr>

	//       <tr>

	//         <td>placement</td>

	//         <td><code>String</code>, one of <code>top</code>

	//         <code>left</code>

	//         <code>right</code>

	//         <code>bottom</code></td>

	//         <td></td>

	//         <td>How to position the popover.</td>

	//       </tr>

	//     </tbody>

	//   </table>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)
	module.exports = __webpack_require__(253)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(254)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(252);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5abcbddc&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5abcbddc&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".scale-transition,\r\n.fade-transition {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  -webkit-animation:scale-in 0.15s ease-in;\r\n          animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave {\r\n  -webkit-animation:scale-out 0.15s ease-out;\r\n          animation:scale-out 0.15s ease-out;\r\n}\r\n@-webkit-keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}", ""]);
	
	// exports


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(146);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default]
	};
	// </script>

	// <style>

	// .scale-transition,

	// .fade-transition {

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

	//     <slot>

	//     </slot>

	//   </span>

	//   <div class="popover"

	//     v-bind:class="{

	//     'top':placement === 'top',

	//     'left':placement === 'left',

	//     'right':placement === 'right',

	//     'bottom':placement === 'bottom'

	//     }"

	//     v-el:popover

	//     v-show="show"

	//     :transition="effect">

	//       <div class="arrow"></div>

	//       <h3 class="popover-title" v-show="title">

	//           <slot name="title">

	//             {{title}}

	//           </slot>

	//       </h3>

	//       <div class="popover-content">

	//         <slot name="content">

	//             {{{content}}}

	//         </slot>

	//       </div>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n    <slot>\r\n    </slot>\r\n  </span>\r\n  <div class=\"popover\"\r\n    v-bind:class=\"{\r\n    'top':placement === 'top',\r\n    'left':placement === 'left',\r\n    'right':placement === 'right',\r\n    'bottom':placement === 'bottom'\r\n    }\"\r\n    v-el:popover\r\n    v-show=\"show\"\r\n    :transition=\"effect\">\r\n      <div class=\"arrow\"></div>\r\n      <h3 class=\"popover-title\" v-show=\"title\">\r\n          <slot name=\"title\">\r\n            {{title}}\r\n          </slot>\r\n      </h3>\r\n      <div class=\"popover-content\">\r\n        <slot name=\"content\">\r\n            {{{content}}}\r\n        </slot>\r\n      </div>\r\n  </div>";

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"popover\">\r\n    <h1 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover</a></h1>\r\n    <div class=\"bs-example\">\r\n      <popover effect=\"fade\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\r\n        <button class=\"btn btn-default \">Popover on top</button>\r\n      </popover>\r\n      <popover effect=\"fade\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\r\n        <button class=\"btn btn-default \">Popover on left</button>\r\n      </popover>\r\n      <popover effect=\"fade\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\r\n        <button class=\"btn btn-default \">Popover on right</button>\r\n      </popover>\r\n      <popover effect=\"fade\" placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\r\n        <button class=\"btn btn-default \">Popover on bottom</button>\r\n      </popover>\r\n      <hr>\r\n      <h4>Title</h4>\r\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\r\n        <button class=\"btn btn-default \">Popover on top</button>\r\n      </popover>\r\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\r\n        <button class=\"btn btn-default \">Popover on left</button>\r\n      </popover>\r\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\r\n        <button class=\"btn btn-default \">Popover on right</button>\r\n      </popover>\r\n      <popover effect=\"fade\" placement=\"bottom\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\r\n        <button class=\"btn btn-default \">Popover on bottom</button>\r\n      </popover>\r\n      <hr>\r\n      <h4>Triger</h4>\r\n      <p>\r\n        <popover effect=\"scale\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\r\n            <button class=\"btn btn-default \">Mouseenter</button>\r\n        </popover>\r\n      </p>\r\n      <popover effect=\"scale\"\r\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\r\n      </popover>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<popover effect=\"fade\" placement=\"bottom\" title=\"Title\"\r\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\r\n  <button class=\"btn btn-default\">Popover on bottom</button>\r\n</popover>\r\n</script></code></pre>\r\n  <h2>Options</h2>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Type</th>\r\n        <th>Default</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>trigger</td>\r\n        <td><code>String</code>, one of <code>click</code>\r\n        <code>focus</code>\r\n        <code>hover</code></td>\r\n        <td><code>click</code></td>\r\n        <td>How the popover is triggered.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>effect</td>\r\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\r\n        <td><code>fade</code></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td>title</td>\r\n        <td><code>String</code></td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td>content</td>\r\n        <td><code>String</code></td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td>header</td>\r\n        <td><code>Boolean</code></td>\r\n        <td><code>true</code></td>\r\n        <td>Whether to show the header.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>placement</td>\r\n        <td><code>String</code>, one of <code>top</code>\r\n        <code>left</code>\r\n        <code>right</code>\r\n        <code>bottom</code></td>\r\n        <td></td>\r\n        <td>How to position the popover.</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>";

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(261)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue")
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
	
	var _Progressbar = __webpack_require__(258);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      dynamicData: [5, 15, 25, 35, 45],
	      stackedData: [10, 20, 30, 40]
	    };
	  },
	
	  components: {
	    progressbar: _Progressbar2.default
	  },
	  methods: {
	    dynamicClick: function dynamicClick() {
	      this.dynamicData = this.dynamicData.map(function () {
	        return Math.floor(Math.random() * 50);
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
	// <template>

	//   <div class="bs-docs-section" id="progressbar">

	//     <h1 class="page-header"><a href="#progressbar" class="anchor">Progressbar</a></h1>

	//     <div class="bs-example">

	//       <h4>Static</h4>

	//       <div class="row">

	//         <div class="col-md-4">

	//           <div class="progress">

	//             <progressbar :now="20" type="success"></progressbar>

	//           </div>

	//         </div>

	//         <div class="col-md-4">

	//           <div class="progress">

	//             <progressbar :now="40" type="info"></progressbar>

	//           </div>

	//         </div>

	//         <div class="col-md-4">

	//           <div class="progress">

	//             <progressbar :now="60" type="primary"></progressbar>

	//           </div>

	//         </div>

	//       </div>

	//       <hr>

	//       <h4>

	//         Dynamic

	//         <button type="button" class="btn btn-default" @click="dynamicClick">Randomize</button>

	//       </h4>

	//       <div class="progress">

	//         <progressbar :now="dynamicData[0] * 2" type="info"></progressbar>

	//       </div>

	//       <div class="progress">

	//         <progressbar :now="dynamicData[1] * 2" type="warning"></progressbar>

	//       </div>

	//       <div class="progress">

	//         <progressbar :now="dynamicData[2] * 2" type="danger"></progressbar>

	//       </div>

	//       <div class="progress">

	//         <progressbar :now="dynamicData[3] * 2" type="success" striped></progressbar>

	//       </div>

	//       <div class="progress">

	//         <progressbar :now="dynamicData[4] * 2" type="success" striped animated></progressbar>

	//       </div>

	//       <hr>

	//       <h4>

	//         Stacked

	//         <button type="button" class="btn btn-default" @click="stackedClick">Randomize</button>

	//       </h4>

	//       <div class="progress">

	//         <progressbar :now="stackedData[0]" label type="warning" striped></progressbar>

	//         <progressbar :now="stackedData[1]" label type="success" ></progressbar>

	//         <progressbar :now="stackedData[2]" label type="danger"></progressbar>

	//         <progressbar :now="stackedData[3]" label type="primary" striped animated></progressbar>

	//       </div>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <!-- Stacked -->

	// <div class="progress">

	//   <progressbar :now="" label type="warning" striped></progressbar>

	//   <progressbar :now="" label type="success" ></progressbar>

	//   <progressbar :now="" label type="danger"></progressbar>

	//   <progressbar :now="" label type="primary" striped animated></progressbar>

	// </div>

	// <!-- Single -->

	// <div class="progress">

	//   <progressbar :now="" label type="warning" striped></progressbar>

	// </div>

	// </script></code></pre>

	//     <h2>Options</h2>

	//     <table class="table table-bordered">

	//       <thead>

	//         <tr>

	//           <th>Name</th>

	//           <th>Type</th>

	//           <th>Default</th>

	//           <th>Description</th>

	//         </tr>

	//       </thead>

	//       <tbody>

	//         <tr>

	//           <td>now</td>

	//           <td><code>Number</code></td>

	//           <td></td>

	//           <td>The current value of progress completed.</td>

	//         </tr>

	//         <tr>

	//           <td>type</td>

	//           <td><code>String</code></td>

	//           <td></td>

	//           <td>Style type. Possible values are 'success', 'warning' etc.</td>

	//         </tr>

	//         <tr>

	//           <td>label</td>

	//           <td><code>Boolean</code></td>

	//           <td>false</td>

	//           <td>Whether to show the label.</td>

	//         </tr>

	//         <tr>

	//           <td>striped</td>

	//           <td><code>Boolean</code></td>

	//           <td><code>false</code></td>

	//           <td>Whether the progressbar has striped effect or not.</td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(259)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(260)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    now: {
	      type: Number,
	      require: true
	    },
	    label: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  }
	};
	// </script>
	// <template>

	//   <div role="progressbar"

	//     v-bind:class="{

	//     'progress-bar' : true,

	//     'progress-bar-success':type == 'success',

	//     'progress-bar-warning':type == 'warning',

	//     'progress-bar-info':type == 'info',

	//     'progress-bar-danger':type == 'danger',

	//     'progress-bar-striped':striped,

	//     'active':animated

	//     }"

	//     v-bind:style="{width: now + '%'}">

	//     {{label ? now + '%':'' }}

	//   </div>

	// </template>

	// <script>

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = "<div role=\"progressbar\"\r\n    v-bind:class=\"{\r\n    'progress-bar' : true,\r\n    'progress-bar-success':type == 'success',\r\n    'progress-bar-warning':type == 'warning',\r\n    'progress-bar-info':type == 'info',\r\n    'progress-bar-danger':type == 'danger',\r\n    'progress-bar-striped':striped,\r\n    'active':animated\r\n    }\"\r\n    v-bind:style=\"{width: now + '%'}\">\r\n    {{label ? now + '%':'' }}\r\n  </div>";

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"progressbar\">\r\n    <h1 class=\"page-header\"><a href=\"#progressbar\" class=\"anchor\">Progressbar</a></h1>\r\n    <div class=\"bs-example\">\r\n      <h4>Static</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"progress\">\r\n            <progressbar :now=\"20\" type=\"success\"></progressbar>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"progress\">\r\n            <progressbar :now=\"40\" type=\"info\"></progressbar>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"progress\">\r\n            <progressbar :now=\"60\" type=\"primary\"></progressbar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <h4>\r\n        Dynamic\r\n        <button type=\"button\" class=\"btn btn-default\" @click=\"dynamicClick\">Randomize</button>\r\n      </h4>\r\n      <div class=\"progress\">\r\n        <progressbar :now=\"dynamicData[0] * 2\" type=\"info\"></progressbar>\r\n      </div>\r\n      <div class=\"progress\">\r\n        <progressbar :now=\"dynamicData[1] * 2\" type=\"warning\"></progressbar>\r\n      </div>\r\n      <div class=\"progress\">\r\n        <progressbar :now=\"dynamicData[2] * 2\" type=\"danger\"></progressbar>\r\n      </div>\r\n      <div class=\"progress\">\r\n        <progressbar :now=\"dynamicData[3] * 2\" type=\"success\" striped></progressbar>\r\n      </div>\r\n      <div class=\"progress\">\r\n        <progressbar :now=\"dynamicData[4] * 2\" type=\"success\" striped animated></progressbar>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <h4>\r\n        Stacked\r\n        <button type=\"button\" class=\"btn btn-default\" @click=\"stackedClick\">Randomize</button>\r\n      </h4>\r\n\r\n      <div class=\"progress\">\r\n        <progressbar :now=\"stackedData[0]\" label type=\"warning\" striped></progressbar>\r\n\r\n        <progressbar :now=\"stackedData[1]\" label type=\"success\" ></progressbar>\r\n\r\n        <progressbar :now=\"stackedData[2]\" label type=\"danger\"></progressbar>\r\n\r\n        <progressbar :now=\"stackedData[3]\" label type=\"primary\" striped animated></progressbar>\r\n      </div>\r\n\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<!-- Stacked -->\r\n<div class=\"progress\">\r\n  <progressbar :now=\"\" label type=\"warning\" striped></progressbar>\r\n\r\n  <progressbar :now=\"\" label type=\"success\" ></progressbar>\r\n\r\n  <progressbar :now=\"\" label type=\"danger\"></progressbar>\r\n\r\n  <progressbar :now=\"\" label type=\"primary\" striped animated></progressbar>\r\n</div>\r\n<!-- Single -->\r\n<div class=\"progress\">\r\n  <progressbar :now=\"\" label type=\"warning\" striped></progressbar>\r\n</div>\r\n</script></code></pre>\r\n\r\n    <h2>Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>now</td>\r\n          <td><code>Number</code></td>\r\n          <td></td>\r\n          <td>The current value of progress completed.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>type</td>\r\n          <td><code>String</code></td>\r\n          <td></td>\r\n          <td>Style type. Possible values are 'success', 'warning' etc.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>label</td>\r\n          <td><code>Boolean</code></td>\r\n          <td>false</td>\r\n          <td>Whether to show the label.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>striped</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td>Whether the progressbar has striped effect or not.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(263)
	module.exports = __webpack_require__(265)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(266)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(264);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0c80a8cf&file=selectDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./selectDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0c80a8cf&file=selectDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./selectDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\r\n}", ""]);
	
	// exports


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(192);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(224);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="bs-docs-section" id="select">
	
	//     <h1 class="page-header"><a href="#select" class="anchor">Select</a></h1>
	
	//     <p>
	
	//       This a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.
	
	//     </p>
	
	//     <div class="bs-example">
	
	//       <h4>Simple select</h4>
	
	//       <p><pre>Select data : {{single}}</pre></p>
	
	//       <v-select :value.sync="single">
	
	//         <v-option value="Apple">Apple</v-option>
	
	//         <v-option value="Banana">Banana</v-option>
	
	//         <v-option value="Cherry">Cherry</v-option>
	
	//         <v-option value="Orange">Orange</v-option>
	
	//         <v-option value="Grape">Grape</v-option>
	
	//       </v-select>
	
	//       <hr />
	
	//       <h4>Test options:</h4>
	
	//       <p><pre>Selected data : {{test.value.join(', ')}}</pre></p>
	
	//       <form action="./#select" method="get">
	
	//         <v-select :options="test.options" :value.sync="test.value" :name="test.inputs?(test.multiple?'animals[]':'animal'):''"
	
	//           :multiple="test.multiple" :search="test.search" :justified="test.justified" :required="test.inputs&&test.required"
	
	//           :show-reset-button="test.showResetButton" :close-on-select="test.closeOnSelect" :limit="test.limit?3:1024" :disabled="test.disabled"></v-select>
	
	//         <button v-if="test.inputs" type="submit" class="btn btn-default">Submit form</button>
	
	//       </form>
	
	//       <div class="checkbox"><label><input type="checkbox" v-model="test.disabled"/> Disabled</label></div>
	
	//       <div class="checkbox"><label><input type="checkbox" v-model="test.search"/> Search</label></div>
	
	//       <div class="checkbox">
	
	//         <label><input type="checkbox" v-model="test.multiple"/> Multiple</label>
	
	//         <label v-if="test.multiple"><input type="checkbox" v-model="test.limit"/> Limit (e.g. 3 - default: 1024)</label>
	
	//         <label v-if="test.multiple"><input type="checkbox" v-model="test.closeOnSelect"/> Close on Select</label>
	
	//       </div>
	
	//       <div class="checkbox"><label><input type="checkbox" v-model="test.justified"/> Justified</label></div>
	
	//       <div class="checkbox"><label><input type="checkbox" v-model="test.showResetButton"/> Show Reset Button</label></div>
	
	//       <div class="checkbox">
	
	//         <label><input type="checkbox" v-model="test.inputs"/> Form input</label>
	
	//         <label v-if="test.inputs"><input type="checkbox" v-model="test.required"/> Required (add empty value if noting selected)</label>
	
	//       </div>
	
	//     </div>
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	
	// Simple:
	
	// <v-select>
	
	//   <v-option value="Apple">Apple</v-option>
	
	//   <v-option value="Banana">Banana</v-option>
	
	//   <v-option value="Cherry">Cherry</v-option>
	
	//   <v-option value="Orange">Orange</v-option>
	
	//   <v-option value="Grape">Grape</v-option>
	
	// </v-select>
	
	// Test options:
	
	// <form action="./#select" method="get">
	
	//   <v-select :options="options" :value.sync="value" :name="inputs?(multiple?'animals[]':'animal'):''"
	
	//     :multiple="multiple" :search="search" :justified="justified" :required="inputs&&required"
	
	//     :show-reset-button="showResetButton" :close-on-select="closeOnSelect" :limit="limit?3:1024"></v-select>
	
	//   <button v-if="inputs" type="submit" class="btn btn-default">Submit form</button>
	
	// </form>
	
	// <div class="checkbox"><label><input type="checkbox" v-model="disabled"> Disabled</label></div>
	
	// <div class="checkbox"><label><input type="checkbox" v-model="search"> Search</label></div>
	
	// <div class="checkbox">
	
	//   <label><input type="checkbox" v-model="multiple"> Multiple</label>
	
	//   <label v-if="multiple"><input type="checkbox" v-model="limit"> Limit (e.g. 3 - default: 1024)</label>
	
	//   <label v-if="multiple"><input type="checkbox" v-model="closeOnSelect"> Close on Select</label>
	
	// </div>
	
	// <div class="checkbox"><label><input type="checkbox" v-model="justified"> Justified</label></div>
	
	// <div class="checkbox"><label><input type="checkbox" v-model="showResetButton"> Show Reset Button</label></div>
	
	// <div class="checkbox">
	
	//   <label><input type="checkbox" v-model="inputs"> Form input</label>
	
	//   <label v-if="inputs"><input type="checkbox" v-model="required"> Required (add empty value if noting selected)</label>
	
	// </div>
	
	// options: [
	
	//   {value:1, label:'Cat'},
	
	//   {value:2, label:'Cow'},
	
	//   {value:3, label:'Dog'},
	
	//   {value:4, label:'Elephant'},
	
	//   {value:5, label:'Fish'},
	
	//   {value:6, label:'Lion'},
	
	//   {value:7, label:'Tiger'},
	
	//   {value:8, label:'Turtle'}
	
	// ]
	
	//     </script></code></pre>
	
	//     <h2>Select Options</h2>
	
	//     <table class="table table-bordered">
	
	//       <thead>
	
	//         <tr>
	
	//           <th>Name</th>
	
	//           <th>Type</th>
	
	//           <th>Default</th>
	
	//           <th>Description</th>
	
	//         </tr>
	
	//       </thead>
	
	//       <tbody>
	
	//         <tr>
	
	//           <td>value</td>
	
	//           <td><code>Array</code></td>
	
	//           <td><code>[]</code></td>
	
	//           <td></td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>placeholder</td>
	
	//           <td><code>String</code></td>
	
	//           <td>Nothing Selected</td>
	
	//           <td></td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>multiple</td>
	
	//           <td><code>Boolean</code></td>
	
	//           <td><code>false</code></td>
	
	//           <td></td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>limit</td>
	
	//           <td><code>Number</code></td>
	
	//           <td><code>1024</code></td>
	
	//           <td>Limit the number of elements you are allowed to select.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>disabled</td>
	
	//           <td><code>Boolean</code></td>
	
	//           <td><code>false</code></td>
	
	//           <td></td>
	
	//         </tr>
	
	//       </tbody>
	
	//     </table>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      test: {
	        options: [{ value: 1, label: 'Cat' }, { value: 2, label: 'Cow' }, { value: 3, label: 'Dog' }, { value: 4, label: 'Elephant' }, { value: 5, label: 'Fish' }, { value: 6, label: 'Lion' }, { value: 7, label: 'Tiger' }, { value: 8, label: 'Turtle' }]
	      },
	      fruitOptions: [{ value: 'Apple', label: 'Apple' }, { value: 'Banana', label: 'Banana' }, { value: 'Cherry', label: 'Cherry' }, { value: 'Orange', label: 'Orange' }, { value: 'Grape', label: 'Grape' }],
	      arr: [],
	      arr2: [],
	      single: [],
	      multiple: [],
	      multipleLimit: [],
	      custom: [],
	      disabled: []
	    };
	  }
	};
	// </script>

	// <style>

	// .checkbox>label:not(:first-child) {

	//   margin-left: 15px;

	// }

	// </style>

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"select\">\r\n    <h1 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select</a></h1>\r\n    <p>\r\n      This a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.\r\n    </p>\r\n    <div class=\"bs-example\">\r\n      <h4>Simple select</h4>\r\n      <p><pre>Select data : {{single}}</pre></p>\r\n      <v-select :value.sync=\"single\">\r\n        <v-option value=\"Apple\">Apple</v-option>\r\n        <v-option value=\"Banana\">Banana</v-option>\r\n        <v-option value=\"Cherry\">Cherry</v-option>\r\n        <v-option value=\"Orange\">Orange</v-option>\r\n        <v-option value=\"Grape\">Grape</v-option>\r\n      </v-select>\r\n\r\n      <hr />\r\n      <h4>Test options:</h4>\r\n      <p><pre>Selected data : {{test.value.join(', ')}}</pre></p>\r\n      <form action=\"./#select\" method=\"get\">\r\n        <v-select :options=\"test.options\" :value.sync=\"test.value\" :name=\"test.inputs?(test.multiple?'animals[]':'animal'):''\"\r\n          :multiple=\"test.multiple\" :search=\"test.search\" :justified=\"test.justified\" :required=\"test.inputs&&test.required\"\r\n          :show-reset-button=\"test.showResetButton\" :close-on-select=\"test.closeOnSelect\" :limit=\"test.limit?3:1024\" :disabled=\"test.disabled\"></v-select>\r\n        <button v-if=\"test.inputs\" type=\"submit\" class=\"btn btn-default\">Submit form</button>\r\n      </form>\r\n      <div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"test.disabled\"/> Disabled</label></div>\r\n      <div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"test.search\"/> Search</label></div>\r\n      <div class=\"checkbox\">\r\n        <label><input type=\"checkbox\" v-model=\"test.multiple\"/> Multiple</label>\r\n        <label v-if=\"test.multiple\"><input type=\"checkbox\" v-model=\"test.limit\"/> Limit (e.g. 3 - default: 1024)</label>\r\n        <label v-if=\"test.multiple\"><input type=\"checkbox\" v-model=\"test.closeOnSelect\"/> Close on Select</label>\r\n      </div>\r\n      <div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"test.justified\"/> Justified</label></div>\r\n      <div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"test.showResetButton\"/> Show Reset Button</label></div>\r\n      <div class=\"checkbox\">\r\n        <label><input type=\"checkbox\" v-model=\"test.inputs\"/> Form input</label>\r\n        <label v-if=\"test.inputs\"><input type=\"checkbox\" v-model=\"test.required\"/> Required (add empty value if noting selected)</label>\r\n      </div>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\nSimple:\r\n<v-select>\r\n  <v-option value=\"Apple\">Apple</v-option>\r\n  <v-option value=\"Banana\">Banana</v-option>\r\n  <v-option value=\"Cherry\">Cherry</v-option>\r\n  <v-option value=\"Orange\">Orange</v-option>\r\n  <v-option value=\"Grape\">Grape</v-option>\r\n</v-select>\r\n\r\nTest options:\r\n<form action=\"./#select\" method=\"get\">\r\n  <v-select :options=\"options\" :value.sync=\"value\" :name=\"inputs?(multiple?'animals[]':'animal'):''\"\r\n    :multiple=\"multiple\" :search=\"search\" :justified=\"justified\" :required=\"inputs&&required\"\r\n    :show-reset-button=\"showResetButton\" :close-on-select=\"closeOnSelect\" :limit=\"limit?3:1024\"></v-select>\r\n  <button v-if=\"inputs\" type=\"submit\" class=\"btn btn-default\">Submit form</button>\r\n</form>\r\n<div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"disabled\"> Disabled</label></div>\r\n<div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"search\"> Search</label></div>\r\n<div class=\"checkbox\">\r\n  <label><input type=\"checkbox\" v-model=\"multiple\"> Multiple</label>\r\n  <label v-if=\"multiple\"><input type=\"checkbox\" v-model=\"limit\"> Limit (e.g. 3 - default: 1024)</label>\r\n  <label v-if=\"multiple\"><input type=\"checkbox\" v-model=\"closeOnSelect\"> Close on Select</label>\r\n</div>\r\n<div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"justified\"> Justified</label></div>\r\n<div class=\"checkbox\"><label><input type=\"checkbox\" v-model=\"showResetButton\"> Show Reset Button</label></div>\r\n<div class=\"checkbox\">\r\n  <label><input type=\"checkbox\" v-model=\"inputs\"> Form input</label>\r\n  <label v-if=\"inputs\"><input type=\"checkbox\" v-model=\"required\"> Required (add empty value if noting selected)</label>\r\n</div>\r\noptions: [\r\n  {value:1, label:'Cat'},\r\n  {value:2, label:'Cow'},\r\n  {value:3, label:'Dog'},\r\n  {value:4, label:'Elephant'},\r\n  {value:5, label:'Fish'},\r\n  {value:6, label:'Lion'},\r\n  {value:7, label:'Tiger'},\r\n  {value:8, label:'Turtle'}\r\n]\r\n    </script></code></pre>\r\n\r\n    <h2>Select Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>value</td>\r\n          <td><code>Array</code></td>\r\n          <td><code>[]</code></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <td>placeholder</td>\r\n          <td><code>String</code></td>\r\n          <td>Nothing Selected</td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <td>multiple</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td></td>\r\n        </tr>\r\n        <tr>\r\n          <td>limit</td>\r\n          <td><code>Number</code></td>\r\n          <td><code>1024</code></td>\r\n          <td>Limit the number of elements you are allowed to select.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>disabled</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>";

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(268)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(279)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(269);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(274);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="bs-docs-section" id="tabs">
	
	//     <h1 class="page-header"><a href="#tabs" class="anchor">Tabs</a></h1>
	
	//     <div class="bs-example">
	
	//       <tabs>
	
	//         <tab header="one">
	
	//           <p>
	
	//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	
	//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	
	//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	
	//             consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
	
	//              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	
	//              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	
	//           </p>
	
	//         </tab>
	
	//         <tab header="two">
	
	//            <p>
	
	//               Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
	
	//            </p>
	
	//         </tab>
	
	//         <tab header="three" disabled>
	
	//           ...
	
	//         </tab>
	
	//       </tabs>
	
	//     </div>
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	
	// <tabs :active="0">
	
	//   <tab header="one">
	
	//     ...
	
	//   </tab>
	
	//   <tab header="two">
	
	//     ...
	
	//   </tab>
	
	//   <tab header="three" disabled>
	
	//     ...
	
	//   </tab>
	
	// </tabs>
	
	// </script></code></pre>
	
	//   <h2>Tabs Options</h2>
	
	//   <table class="table table-bordered">
	
	//     <thead>
	
	//       <tr>
	
	//         <th>Name</th>
	
	//         <th>Type</th>
	
	//         <th>Default</th>
	
	//         <th>Description</th>
	
	//       </tr>
	
	//     </thead>
	
	//     <tbody>
	
	//       <tr>
	
	//         <td>active</td>
	
	//         <td><code>Number</code></td>
	
	//         <td></td>
	
	//         <td>Active tab index (0 based)</td>
	
	//       </tr>
	
	//     </tbody>
	
	//   </table>
	
	//   <h2>Tab Options (NOT TABS)</h2>
	
	//   <table class="table table-bordered">
	
	//     <thead>
	
	//       <tr>
	
	//         <th>Name</th>
	
	//         <th>Type</th>
	
	//         <th>Default</th>
	
	//         <th>Description</th>
	
	//       </tr>
	
	//     </thead>
	
	//     <tbody>
	
	//       <tr>
	
	//         <td>header</td>
	
	//         <td><code>String</code></td>
	
	//         <td></td>
	
	//         <td>Heading text of the tab.</td>
	
	//       </tr>
	
	//       <tr>
	
	//         <td>disabled</td>
	
	//         <td><code>Boolean</code></td>
	
	//         <td>false</td>
	
	//         <td>Whether tab is clickable and can be activated. </td>
	
	//       </tr>
	
	//     </tbody>
	
	//   </table>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    tabs: _Tabset2.default,
	    tab: _Tab2.default
	  }
	};
	// </script>

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(270)
	module.exports = __webpack_require__(272)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(273)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-c8373860&file=Tabset.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-c8373860&file=Tabset.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(271);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c8373860&file=Tabset.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c8373860&file=Tabset.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-tabs[_v-c8373860] {\r\n  margin-bottom: 15px;\r\n}", ""]);
	
	// exports


/***/ },
/* 272 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	//   <div>
	
	//     <!-- Nav tabs -->
	
	//     <ul class="nav nav-{{navStyle}}" role="tablist">
	
	//       <li
	
	//         v-for="r in renderData"
	
	//         v-bind:class="{
	
	//           'active': ($index === active),
	
	//           'disabled': r.disabled
	
	//         }"
	
	//         @click.prevent="handleTabListClick($index, r)"
	
	//         :disabled="r.disabled"
	
	//       >
	
	//         <a href="#">
	
	//           <slot name="header">
	
	//             {{{r.header}}}
	
	//           </slot>
	
	//         </a>
	
	//       </li>
	
	//     </ul>
	
	//     <!-- Tab panes -->
	
	//     <div class="tab-content" v-el:tab-content>
	
	//       <slot></slot>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
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
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      renderData: []
	    };
	  },
	
	  methods: {
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) this.active = index;
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
/* 273 */
/***/ function(module, exports) {

	module.exports = "<div _v-c8373860=\"\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-{{navStyle}}\" role=\"tablist\" _v-c8373860=\"\">\n      <li v-for=\"r in renderData\" v-bind:class=\"{\n          'active': ($index === active),\n          'disabled': r.disabled\n        }\" @click.prevent=\"handleTabListClick($index, r)\" :disabled=\"r.disabled\" _v-c8373860=\"\">\n        <a href=\"#\" _v-c8373860=\"\">\n          <slot name=\"header\" _v-c8373860=\"\">\n            {{{r.header}}}\n          </slot>\n        </a>\n      </li>\n    </ul>\n    <!-- Tab panes -->\n    <div class=\"tab-content\" v-el:tab-content=\"\" _v-c8373860=\"\">\n      <slot _v-c8373860=\"\"></slot>\n    </div>\n  </div>";

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)
	module.exports = __webpack_require__(277)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(278)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-388906fc&file=Tab.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-388906fc&file=Tab.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(276);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-388906fc&file=Tab.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-388906fc&file=Tab.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".tab-content > .tab-pane[_v-388906fc] {\r\n  display: block;\r\n}", ""]);
	
	// exports


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.active == this.index;
	    },
	    transition: function transition() {
	      return this.$parent.effect;
	    }
	  },
	  created: function created() {
	    this.$parent.renderData.push({
	      header: this.header,
	      disabled: this.disabled
	    });
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$parent.renderData.splice(this.index, 1);
	  }
	};
	// </script>

	// <style scoped>

	// .tab-content > .tab-pane {

	//   display: block;

	// }

	// </style>
	// <template>

	//   <div role="tabpanel" class="tab-pane"

	//       v-bind:class="{hide:!show}"

	//       v-show="show"

	//       :transition="transition"

	//   >

	//     <slot></slot>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "<div role=\"tabpanel\" class=\"tab-pane\" v-bind:class=\"{hide:!show}\" v-show=\"show\" :transition=\"transition\" _v-388906fc=\"\">\n    <slot _v-388906fc=\"\"></slot>\n  </div>";

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tabs\">\r\n    <h1 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs</a></h1>\r\n    <div class=\"bs-example\">\r\n      <tabs>\r\n        <tab header=\"one\">\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n          </p>\r\n        </tab>\r\n        <tab header=\"two\">\r\n           <p>\r\n              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\r\n           </p>\r\n        </tab>\r\n        <tab header=\"three\" disabled>\r\n          ...\r\n        </tab>\r\n      </tabs>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<tabs :active=\"0\">\r\n  <tab header=\"one\">\r\n    ...\r\n  </tab>\r\n  <tab header=\"two\">\r\n    ...\r\n  </tab>\r\n  <tab header=\"three\" disabled>\r\n    ...\r\n  </tab>\r\n</tabs>\r\n</script></code></pre>\r\n  <h2>Tabs Options</h2>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Type</th>\r\n        <th>Default</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>active</td>\r\n        <td><code>Number</code></td>\r\n        <td></td>\r\n        <td>Active tab index (0 based)</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <h2>Tab Options (NOT TABS)</h2>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Type</th>\r\n        <th>Default</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>header</td>\r\n        <td><code>String</code></td>\r\n        <td></td>\r\n        <td>Heading text of the tab.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled</td>\r\n        <td><code>Boolean</code></td>\r\n        <td>false</td>\r\n        <td>Whether tab is clickable and can be activated. </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>";

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(281)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(282)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(142);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	
	  components: {
	    tooltip: _Tooltip2.default
	  }
	};
	// </script>
	// <template>

	//   <div class="bs-docs-section" id="tooltip">

	//     <h1 class="page-header"><a href="#tooltip" class="anchor">Tooltip</a></h1>

	//     <div class="bs-example">

	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="top">

	//         <button class="btn btn-default ">tooltip on top</button>

	//       </tooltip>

	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="left">

	//         <button class="btn btn-default ">tooltip on left</button>

	//       </tooltip>

	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="right">

	//         <button class="btn btn-default ">tooltip on right</button>

	//       </tooltip>

	//       <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">

	//         <button class="btn btn-default ">tooltip on bottom</button>

	//       </tooltip>

	//       <hr>

	//       <h4>Triger</h4>

	//       <p>

	//         <tooltip trigger="click"

	//         effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">

	//             <button class="btn btn-default ">Click</button>

	//         </tooltip>

	//       </p>

	//       <tooltip effect="scale"

	//     content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">

	//         <input type="text" class="form-control" placeholder="Focus">

	//       </tooltip>

	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">

	// <tooltip

	//   effect="scale"

	//   placement="bottom"

	//   content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">

	//   <button class="btn btn-default ">tooltip on bottom</button>

	// </tooltip>

	// </script></code></pre>

	//   <h2>Options</h2>

	//   <table class="table table-bordered">

	//     <thead>

	//       <tr>

	//         <th>Name</th>

	//         <th>Type</th>

	//         <th>Default</th>

	//         <th>Description</th>

	//       </tr>

	//     </thead>

	//     <tbody>

	//       <tr>

	//         <td>trigger</td>

	//         <td><code>String</code>, one of <code>hover</code>

	//         <code>focus</code>

	//         <code>hover</code></td>

	//         <td><code>click</code></td>

	//         <td>How the tooltip is triggered.</td>

	//       </tr>

	//       <tr>

	//         <td>effect</td>

	//         <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>

	//         <td><code>scale</code></td>

	//         <td></td>

	//       <tr>

	//         <td>content</td>

	//         <td><code>String</code></td>

	//         <td></td>

	//         <td></td>

	//       </tr>

	//       <tr>

	//         <td>placement</td>

	//         <td><code>String</code>, one of <code>top</code>

	//         <code>left</code>

	//         <code>right</code>

	//         <code>bottom</code></td>

	//         <td></td>

	//         <td>How to position the tooltip.</td>

	//       </tr>

	//     </tbody>

	//   </table>

	//   </div>

	// </template>

	// <script>

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tooltip\">\r\n    <h1 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip</a></h1>\r\n    <div class=\"bs-example\">\r\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\r\n        <button class=\"btn btn-default \">tooltip on top</button>\r\n      </tooltip>\r\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\r\n        <button class=\"btn btn-default \">tooltip on left</button>\r\n      </tooltip>\r\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\r\n        <button class=\"btn btn-default \">tooltip on right</button>\r\n      </tooltip>\r\n      <tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\r\n        <button class=\"btn btn-default \">tooltip on bottom</button>\r\n      </tooltip>\r\n      <hr>\r\n      <h4>Triger</h4>\r\n      <p>\r\n        <tooltip trigger=\"click\"\r\n        effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\r\n            <button class=\"btn btn-default \">Click</button>\r\n        </tooltip>\r\n      </p>\r\n      <tooltip effect=\"scale\"\r\n    content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\r\n      </tooltip>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<tooltip\r\n  effect=\"scale\"\r\n  placement=\"bottom\"\r\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\r\n  <button class=\"btn btn-default \">tooltip on bottom</button>\r\n</tooltip>\r\n</script></code></pre>\r\n  <h2>Options</h2>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Type</th>\r\n        <th>Default</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>trigger</td>\r\n        <td><code>String</code>, one of <code>hover</code>\r\n        <code>focus</code>\r\n        <code>hover</code></td>\r\n        <td><code>click</code></td>\r\n        <td>How the tooltip is triggered.</td>\r\n      </tr>\r\n      <tr>\r\n        <td>effect</td>\r\n        <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>\r\n        <td><code>scale</code></td>\r\n        <td></td>\r\n      <tr>\r\n        <td>content</td>\r\n        <td><code>String</code></td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td>placement</td>\r\n        <td><code>String</code>, one of <code>top</code>\r\n        <code>left</code>\r\n        <code>right</code>\r\n        <code>bottom</code></td>\r\n        <td></td>\r\n        <td>How to position the tooltip.</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>";

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(284)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(291)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./typeaheadDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./typeaheadDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Typeahead = __webpack_require__(285);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Tooltip = __webpack_require__(142);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="bs-docs-section" id="typeahead">
	
	//     <h1 class="page-header"><a href="#typeahead" class="anchor">Typeahead</a></h1>
	
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
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	
	// <h4>Static arrays</h4>
	
	// <typeahead
	
	//   :data="USstate"
	
	//   placeholder="USA states">
	
	// </typeahead>
	
	// <h4>Asynchronous results</h4>
	
	//   <typeahead
	
	//     placeholder="Address, async via maps.googleapis.com"
	
	//     key="results"
	
	//     src="https://maps.googleapis.com/maps/api/geocode/json?address="
	
	//     template-name="async"
	
	//     :template="asyncTemplate"
	
	//     :on-hit="googleCallback">
	
	// </typeahead>
	
	// <h4>Custom templates for results</h4>
	
	//   <typeahead
	
	//     placeholder="Github users, async via api.github.com"
	
	//     key="items"
	
	//     src="https://api.github.com/search/users?q="
	
	//     template-name="typeahead-github-template"
	
	//     :template="githubTemplate"
	
	//     :on-hit="githubCallback">
	
	// </typeahead>
	
	//   </script></code></pre>
	
	//     <pre><code class="language-javascript"><script type="language-javascript">
	
	// new Vue {
	
	//   components: {
	
	//     typeahead
	
	//   },
	
	//   data() {
	
	//     return {
	
	//       USstate: ['Alabama', 'Alaska', 'Arizona',...],
	
	//       asynchronous: '{{formatted_address}}',
	
	//       customTemplate: '<img width="18px" height="18px" v-attr="src:avatar_url"/>' +
	
	//       '<span>{{login}}</span>'
	
	//     }
	
	//   },
	
	//   methods: {
	
	//     googleCallback(items, targetVM) {
	
	//       const that = targetVM;
	
	//       that.reset()
	
	//       that.query = items.formatted_address
	
	//     },
	
	//     githubCallback(items) {
	
	//       window.open(items.html_url, '_blank')
	
	//     }
	
	//   }
	
	// }
	
	//     </script></code></pre>
	
	//     <h2>Options</h2>
	
	//     <table class="table table-bordered">
	
	//       <thead>
	
	//         <tr>
	
	//           <th>Name</th>
	
	//           <th>Type</th>
	
	//           <th>Default</th>
	
	//           <th>Description</th>
	
	//         </tr>
	
	//       </thead>
	
	//       <tbody>
	
	//         <tr>
	
	//           <td>data</td>
	
	//           <td><code>Array</code></td>
	
	//           <td></td>
	
	//           <td>The local data source for suggestions. Expected to be a primitive array.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>async</td>
	
	//           <td><code>String</code></td>
	
	//           <td></td>
	
	//           <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>limit</td>
	
	//           <td><code>Number</code></td>
	
	//           <td><code>8</code></td>
	
	//           <td>The max number of suggestions to be displayed.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>key</td>
	
	//           <td><code>String</code></td>
	
	//           <td><code>null</code></td>
	
	//           <td>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>match-case</td>
	
	//           <td><code>Boolean</code></td>
	
	//           <td><code>false</code></td>
	
	//           <td>Case sensitive for suggestions.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>match-start</td>
	
	//           <td><code>Boolean</code></td>
	
	//           <td><code>false</code></td>
	
	//           <td>Match only against start of suggestions. E.g. if true, "a" matches "ab" but not "ba".</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>on-hit</td>
	
	//           <td><code>Function</code></td>
	
	//           <td></td>
	
	//           <td>A callback function when you click or hit return on an item.</td>
	
	//         </tr>
	
	//         <tr>
	
	//           <td>template</td>
	
	//           <td><code>String</code></td>
	
	//           <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>
	
	//           <td>Used to render suggestion.</td>
	
	//         </tr>
	
	//       </tbody>
	
	//     </table>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  components: {
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
	      var that = targetVM;
	      that.reset();
	      that.query = items.formatted_address;
	    },
	    githubCallback: function githubCallback(items) {
	      window.open(items.html_url, '_blank');
	    }
	  }
	};
	// </script>

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(286)
	module.exports = __webpack_require__(288)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(290)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(287);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3dca8a18&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3dca8a18&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(289);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	var _coerceBoolean = __webpack_require__(124);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div style="position: relative"
	
	//     v-bind:class="{'open':showDropdown}"
	
	//     >
	
	//     <input type="text" class="form-control"
	
	//       :placeholder="placeholder"
	
	//       autocomplete="off"
	
	//       v-model="query"
	
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
	
	
	var typeahead = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  partials: {
	    'default': '<span v-html="item | highlight query"></span>'
	  },
	  props: {
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
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    matchStart: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    onHit: {
	      type: Function,
	      default: function _default(items) {
	        this.reset();
	        this.query = items;
	      }
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      query: '',
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
	          var query = _this.matchCase ? _this.query : _this.query.toLowerCase();
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
	      var _this2 = this;
	
	      if (!this.query) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length ? true : false;
	      }
	      if (this.async) {
	        (0, _callAjax2.default)(this.async + this.query, function (data) {
	          _this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
	          _this2.showDropdown = _this2.items.length ? true : false;
	        });
	      }
	    },
	    reset: function reset() {
	      this.items = [];
	      this.query = '';
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
	exports.default = typeahead;
	// </script>

	// <style>

	// .dropdown-menu > li > a {

	//   cursor: pointer;

	// }

	// </style>

/***/ },
/* 289 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (url, callback) {
	    var httpRequest = new XMLHttpRequest();
	    httpRequest.onreadystatechange = function () {
	        if (httpRequest.readyState === 4) {
	            if (httpRequest.status === 200) {
	                var data = JSON.parse(httpRequest.responseText);
	                if (callback) callback(data);
	            }
	        }
	    };
	    httpRequest.open('GET', url);
	    httpRequest.setRequestHeader("Accept", "application/json");
	    httpRequest.send();
	};

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\"\r\n    v-bind:class=\"{'open':showDropdown}\"\r\n    >\r\n    <input type=\"text\" class=\"form-control\"\r\n      :placeholder=\"placeholder\"\r\n      autocomplete=\"off\"\r\n      v-model=\"query\"\r\n      @input=\"update\"\r\n      @keydown.up=\"up\"\r\n      @keydown.down=\"down\"\r\n      @keydown.enter= \"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @blur=\"showDropdown = false\"\r\n    />\r\n    <ul class=\"dropdown-menu\" v-el:dropdown>\r\n      <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\r\n          <partial :name=\"templateName\"></partial>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>";

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"typeahead\">\r\n    <h1 class=\"page-header\"><a href=\"#typeahead\" class=\"anchor\">Typeahead</a></h1>\r\n    <div class=\"bs-example\">\r\n      <h4>\r\n        Static arrays\r\n      </h4>\r\n      <typeahead \r\n        :data=\"USstate\" \r\n        placeholder=\"USA states\"\r\n      ></typeahead>\r\n      <hr>\r\n      <h4>\r\n      Asynchronous results\r\n      <tooltip trigger=\"click\" content=\"The suggestions via a Google Map API, are you behind a FireWall?\" placement=\"top\">\r\n        <small style=\"cursor:pointer\">(not working?)</small>\r\n      </tooltip>\r\n      </h4>\r\n      <typeahead \r\n        placeholder=\"CCCAddress, async via maps.googleapis.com\"\r\n        key=\"results\"\r\n        async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\r\n        template-name=\"async\"\r\n        :template=\"asyncTemplate\"\r\n        :on-hit=\"googleCallback\"\r\n      ></typeahead>\r\n      <hr>\r\n      <h4>\r\n      Custom templates for results\r\n      </h4>\r\n      <typeahead \r\n        placeholder=\"Github users, async via api.github.com\"\r\n        key=\"items\"\r\n        async=\"https://api.github.com/search/users?q=\" \r\n        template-name=\"github\"\r\n        :template=\"githubTemplate\"\r\n        :on-hit=\"githubCallback\"\r\n      ></typeahead>\r\n    </div>\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n<h4>Static arrays</h4>\r\n<typeahead\r\n  :data=\"USstate\"\r\n  placeholder=\"USA states\">\r\n</typeahead>\r\n\r\n<h4>Asynchronous results</h4>\r\n  <typeahead\r\n    placeholder=\"Address, async via maps.googleapis.com\"\r\n    key=\"results\"\r\n    src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\r\n    template-name=\"async\"\r\n    :template=\"asyncTemplate\"\r\n    :on-hit=\"googleCallback\">\r\n</typeahead>\r\n\r\n<h4>Custom templates for results</h4>\r\n  <typeahead\r\n    placeholder=\"Github users, async via api.github.com\"\r\n    key=\"items\"\r\n    src=\"https://api.github.com/search/users?q=\"\r\n    template-name=\"typeahead-github-template\"\r\n    :template=\"githubTemplate\"\r\n    :on-hit=\"githubCallback\">\r\n</typeahead>\r\n  </script></code></pre>\r\n    <pre><code class=\"language-javascript\"><script type=\"language-javascript\">\r\nnew Vue {\r\n  components: {\r\n    typeahead\r\n  },\r\n  data() {\r\n    return {\r\n      USstate: ['Alabama', 'Alaska', 'Arizona',...],\r\n      asynchronous: '{{formatted_address}}',\r\n      customTemplate: '<img width=\"18px\" height=\"18px\" v-attr=\"src:avatar_url\"/>' +\r\n      '<span>{{login}}</span>'\r\n    }\r\n  },\r\n  methods: {\r\n    googleCallback(items, targetVM) {\r\n      const that = targetVM;\r\n      that.reset()\r\n      that.query = items.formatted_address\r\n    },\r\n    githubCallback(items) {\r\n      window.open(items.html_url, '_blank')\r\n    }\r\n  }\r\n}\r\n    </script></code></pre>\r\n\r\n    <h2>Options</h2>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>data</td>\r\n          <td><code>Array</code></td>\r\n          <td></td>\r\n          <td>The local data source for suggestions. Expected to be a primitive array.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>async</td>\r\n          <td><code>String</code></td>\r\n          <td></td>\r\n          <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>limit</td>\r\n          <td><code>Number</code></td>\r\n          <td><code>8</code></td>\r\n          <td>The max number of suggestions to be displayed.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>key</td>\r\n          <td><code>String</code></td>\r\n          <td><code>null</code></td>\r\n          <td>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</td>\r\n        </tr>\r\n        <tr>\r\n          <td>match-case</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td>Case sensitive for suggestions.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>match-start</td>\r\n          <td><code>Boolean</code></td>\r\n          <td><code>false</code></td>\r\n          <td>Match only against start of suggestions. E.g. if true, \"a\" matches \"ab\" but not \"ba\".</td>\r\n        </tr>\r\n        <tr>\r\n          <td>on-hit</td>\r\n          <td><code>Function</code></td>\r\n          <td></td>\r\n          <td>A callback function when you click or hit return on an item.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>template</td>\r\n          <td><code>String</code></td>\r\n          <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>\r\n          <td>Used to render suggestion.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>";

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(293)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(299)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spinnerDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinnerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spinnerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Spinner = __webpack_require__(294);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sizes = [{
	  text: 'sm',
	  value: 'sm'
	}, {
	  text: 'md',
	  value: 'md'
	}, {
	  text: 'lg',
	  value: 'lg'
	}]; // <template>
	
	//   <div class="bs-docs-section" id="spnner">
	
	//     <h1 class="page-header"><a href="#spnner" class="anchor">Spnner</a></h1>
	
	//     <div class="bs-example">
	
	//       <!-- Html controls start-->
	
	//       <div >
	
	//         <label>fixed <input type="checkbox" v-model="fixed"></label>
	
	//         <label>size
	
	//           <select v-model="size">
	
	//             <option v-for="option in sizes" v-bind:value="option.value">
	
	//               {{ option.text }}
	
	//             </option>
	
	//           </select>
	
	//         </label>
	
	//       </div>
	
	//       <!-- Html controls end-->
	
	//       <!-- Html markup start-->
	
	//       <div >
	
	//         <button v-on:click="$broadcast('show::spinner')">show spinner</button>
	
	//         <spinner id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner>
	
	//       </div>
	
	//       <!-- Html markup end-->
	
	//     </div>
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	
	// 		<spinner id="spinner-box" :size="(sm,md,lg...)" :fixed="(true,false)"
	
	// 			text="I will close in 2 secs" v-ref:spinner></spinner>
	
	// 	</script></code></pre>
	
	// 	<p>To close the spinner, use the following code:</p>
	
	// 	<pre><code class="language-markup"><script type="language-mark-up">this.$refs.spinner.hide()</script></code></pre>
	
	//   <h2>Spinner Options</h2>
	
	//   <table class="table table-bordered">
	
	//     <thead>
	
	//       <tr>
	
	//         <th>Name</th>
	
	//         <th>Type</th>
	
	//         <th>Default</th>
	
	//         <th>Description</th>
	
	//       </tr>
	
	//     </thead>
	
	//     <tbody>
	
	//       <tr>
	
	//         <td>size</td>
	
	//         <td><code>Text</code></td>
	
	//         <td>md</td>
	
	//         <td>The size of the spinner (either [sm, md, lg]).</td>
	
	//       </tr>
	
	//       <tr>
	
	//         <td>fixed</td>
	
	//         <td><code>Boolean</code></td>
	
	//         <td>false</td>
	
	//         <td>Set to true if you want the spinner to occupy the entire window space.</td>
	
	//       </tr>
	
	//     </tbody>
	
	//   </table>
	
	//   </div>
	
	// </template>
	
	// <script>
	
	
	exports.default = {
	  data: function data() {
	    return {
	      fixed: false,
	      size: 'lg',
	      sizes: sizes.concat({ text: 'xl', value: 'xl' })
	    };
	  },
	
	  components: {
	    spinner: _Spinner2.default
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
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(295)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(298)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue")
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
	
	__webpack_require__(296);
	
	var MIN_WAIT = 500; // in ms
	
	// <template>
	
	//   <div class="spinner spinner-gritcode {{spinnerSize}} {{fixed ? 'spinner-fixed' : ''}}" v-show="active">
	
	//     <div class="spinner-wrapper">
	
	//       <div class="spinner-circle"></div>
	
	//       <div class="spinner-text">{{text}}</div>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	// <script>
	// import styling
	exports.default = {
	  data: function data() {
	    return {
	      active: false
	    };
	  },
	
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
	      default: false
	    }
	  },
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return this.size ? 'spinner-' + this.size : 'spinner-sm';
	    }
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
	  destroyed: function destroyed() {
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  },
	  ready: function ready() {
	    this._body = document.querySelector('body');
	    this._bodyOverflow = this._body.style.overflowY || '';
	  }
	};
	// </script>

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(297);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n *\r\n * Spinner\r\n * With fallback to IE9\r\n *\r\n */\n@keyframes spin {\n  100% {\n    transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #337ab7;\n    border-radius: 50%;\n    display: inline-block;\n    animation: spin 0.6s linear;\n    animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #337ab7; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.lt-ie10 .spinner-gritcode .spinner-circle, .ie9 .spinner-gritcode .spinner-circle, .oldie .spinner-gritcode .spinner-circle, .no-csstransitions .spinner-gritcode .spinner-circle, .no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);
	
	// exports


/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner spinner-gritcode {{spinnerSize}} {{fixed ? 'spinner-fixed' : ''}}\" v-show=\"active\">\r\n    <div class=\"spinner-wrapper\">\r\n      <div class=\"spinner-circle\"></div>\r\n      <div class=\"spinner-text\">{{text}}</div>\r\n    </div>\r\n  </div>";

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"spnner\">\r\n    <h1 class=\"page-header\"><a href=\"#spnner\" class=\"anchor\">Spnner</a></h1>\r\n    <div class=\"bs-example\">\r\n\r\n      <!-- Html controls start-->\r\n      <div >\r\n        <label>fixed <input type=\"checkbox\" v-model=\"fixed\"></label>\r\n        <label>size\r\n          <select v-model=\"size\">\r\n            <option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n              {{ option.text }}\r\n            </option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n      <!-- Html controls end-->\r\n\r\n      <!-- Html markup start-->\r\n      <div >\r\n        <button v-on:click=\"$broadcast('show::spinner')\">show spinner</button>\r\n        <spinner id=\"spinner-box\" :size=\"size\" :fixed=\"fixed\" text=\"I will close in 2 secs\"></spinner>\r\n      </div>\r\n      <!-- Html markup end-->\r\n\r\n    </div>\r\n\r\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\r\n\t\t<spinner id=\"spinner-box\" :size=\"(sm,md,lg...)\" :fixed=\"(true,false)\" \r\n\t\t\ttext=\"I will close in 2 secs\" v-ref:spinner></spinner>\r\n\t</script></code></pre>\r\n\r\n\t<p>To close the spinner, use the following code:</p>\r\n\t<pre><code class=\"language-markup\"><script type=\"language-mark-up\">this.$refs.spinner.hide()</script></code></pre>\r\n  <h2>Spinner Options</h2>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Type</th>\r\n        <th>Default</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>size</td>\r\n        <td><code>Text</code></td>\r\n        <td>md</td>\r\n        <td>The size of the spinner (either [sm, md, lg]).</td>\r\n      </tr>\r\n      <tr>\r\n        <td>fixed</td>\r\n        <td><code>Boolean</code></td>\r\n        <td>false</td>\r\n        <td>Set to true if you want the spinner to occupy the entire window space.</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Bootstrap Docs (http://getbootstrap.com)\r\n * Copyright 2011-2014 Twitter, Inc.\r\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\r\n * details, see http://creativecommons.org/licenses/by/3.0/.\r\n */\r\n\r\n\r\n/*\r\n * Bootstrap Documentation\r\n * Special styles for presenting Bootstrap's documentation and code examples.\r\n *\r\n * Table of contents:\r\n *\r\n * Scaffolding\r\n * Main navigation\r\n * Footer\r\n * Social buttons\r\n * Homepage\r\n * Page headers\r\n * Old docs callout\r\n * Ads\r\n * Side navigation\r\n * Docs sections\r\n * Callouts\r\n * Grid styles\r\n * Examples\r\n * Code snippets (highlight)\r\n * Responsive tests\r\n * Glyphicons\r\n * Customizer\r\n * MenuItem\r\n * Miscellaneous\r\n */\r\n\r\n\r\n/*\r\n * Scaffolding\r\n *\r\n * Update the basics of our documents to prep for docs content.\r\n */\r\n\r\nbody {\r\n  position: relative; /* For scrollspy */\r\n}\r\n\r\n/* Keep code small in tables on account of limited space */\r\n.table code {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n}\r\n\r\n/* Outline button for use within the docs */\r\n.btn-outline {\r\n  color: #563d7c;\r\n  background-color: transparent;\r\n  border-color: #563d7c;\r\n}\r\n.btn-outline:hover,\r\n.btn-outline:focus,\r\n.btn-outline:active {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n  border-color: #563d7c;\r\n}\r\n\r\n/* Inverted outline button (white on dark) */\r\n.btn-outline-inverse {\r\n  color: #fff;\r\n  background-color: transparent;\r\n  border-color: #cdbfe3;\r\n}\r\n.btn-outline-inverse:hover,\r\n.btn-outline-inverse:focus,\r\n.btn-outline-inverse:active {\r\n  color: #563d7c;\r\n  text-shadow: none;\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n}\r\n\r\n/* Bootstrap \"B\" icon */\r\n.bs-docs-booticon {\r\n  display: block;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  text-align: center;\r\n  cursor: default;\r\n  background-color: #563d7c;\r\n  border-radius: 15%;\r\n}\r\n.bs-docs-booticon-sm {\r\n  width: 30px;\r\n  height: 30px;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n}\r\n.bs-docs-booticon-lg {\r\n  width: 144px;\r\n  height: 144px;\r\n  font-size: 108px;\r\n  line-height: 140px;\r\n}\r\n.bs-docs-booticon-inverse {\r\n  color: #563d7c;\r\n  background-color: #fff;\r\n}\r\n.bs-docs-booticon-outline {\r\n  background-color: transparent;\r\n  border: 1px solid #cdbfe3;\r\n}\r\n\r\n\r\n/*\r\n * Main navigation\r\n *\r\n * Turn the `.navbar` at the top of the docs purple.\r\n */\r\n\r\n.bs-docs-nav {\r\n  margin-bottom: 0;\r\n  background-color: #fff;\r\n  border-bottom: 0;\r\n}\r\n.bs-home-nav .bs-nav-b {\r\n  display: none;\r\n}\r\n.bs-docs-nav .navbar-brand,\r\n.bs-docs-nav .navbar-nav > li > a {\r\n  font-weight: 500;\r\n  color: #563d7c;\r\n}\r\n.bs-docs-nav .navbar-nav > li > a:hover,\r\n.bs-docs-nav .navbar-nav > .active > a,\r\n.bs-docs-nav .navbar-nav > .active > a:hover {\r\n  color: #463265;\r\n  background-color: #f9f9f9;\r\n}\r\n.bs-docs-nav .navbar-toggle .icon-bar {\r\n  background-color: #563d7c;\r\n}\r\n.bs-docs-nav .navbar-header .navbar-toggle {\r\n  border-color: #fff;\r\n}\r\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\r\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\r\n  background-color: #f9f9f9;\r\n  border-color: #f9f9f9;\r\n}\r\n\r\n\r\n/*\r\n * Footer\r\n *\r\n * Separated section of content at the bottom of all pages, save the homepage.\r\n */\r\n\r\n.bs-docs-footer {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  margin-top: 100px;\r\n  color: #777;\r\n  text-align: center;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.bs-docs-footer-links {\r\n  padding-left: 0;\r\n  margin-top: 20px;\r\n  color: #999;\r\n}\r\n.bs-docs-footer-links li {\r\n  display: inline;\r\n  padding: 0 2px;\r\n}\r\n.bs-docs-footer-links li:first-child {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-footer p {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Social buttons\r\n *\r\n * Twitter and GitHub social action buttons (for homepage and footer).\r\n */\r\n\r\n.bs-docs-social {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n.bs-docs-social-buttons {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n.bs-docs-social-buttons li {\r\n  display: inline-block;\r\n  padding: 5px 8px;\r\n  line-height: 1;\r\n}\r\n.bs-docs-social-buttons .twitter-follow-button {\r\n  width: 225px !important;\r\n}\r\n.bs-docs-social-buttons .twitter-share-button {\r\n  width: 98px !important;\r\n}\r\n/* Style the GitHub buttons via CSS instead of inline attributes */\r\n.github-btn {\r\n  overflow: hidden;\r\n  border: 0;\r\n}\r\n\r\n\r\n/*\r\n * Homepage\r\n *\r\n * Tweaks to the custom homepage and the masthead (main jumbotron).\r\n */\r\n\r\n/* Share masthead with page headers */\r\n.bs-docs-masthead,\r\n.bs-docs-header {\r\n  position: relative;\r\n  padding: 30px 15px;\r\n  color: #cdbfe3;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\r\n  background-color: #6f5499;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\r\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\r\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\r\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n\r\n/* Masthead (headings and download button) */\r\n.bs-docs-masthead .bs-docs-booticon {\r\n  margin: 0 auto 30px;\r\n}\r\n.bs-docs-masthead h1 {\r\n  font-weight: 300;\r\n  line-height: 1;\r\n  color: #fff;\r\n}\r\n.bs-docs-masthead .lead {\r\n  margin: 0 auto 30px;\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n.bs-docs-masthead .version {\r\n  margin-top: -15px;\r\n  margin-bottom: 30px;\r\n  color: #9783b9;\r\n}\r\n.bs-docs-masthead .btn {\r\n  width: 100%;\r\n  padding: 15px 30px;\r\n  font-size: 20px;\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .bs-docs-masthead .btn {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-masthead h1 {\r\n    font-size: 60px;\r\n  }\r\n  .bs-docs-masthead .lead {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .bs-docs-masthead .lead {\r\n    width: 80%;\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Page headers\r\n *\r\n * Jumbotron-esque headers at the top of every page that's not the homepage.\r\n */\r\n\r\n/* Page headers */\r\n.bs-docs-header {\r\n  margin-bottom: 40px;\r\n  font-size: 20px;\r\n}\r\n.bs-docs-header h1 {\r\n  margin-top: 0;\r\n  color: #fff;\r\n}\r\n.bs-docs-header p {\r\n  margin-bottom: 0;\r\n  font-weight: 300;\r\n  line-height: 1.4;\r\n}\r\n.bs-docs-header .container {\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-header {\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    font-size: 24px;\r\n    text-align: left;\r\n  }\r\n  .bs-docs-header h1 {\r\n    font-size: 60px;\r\n    line-height: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .bs-docs-header h1,\r\n  .bs-docs-header p {\r\n    margin-right: 380px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Carbon ads\r\n *\r\n * Single display ad that shows on all pages (except homepage) in page headers.\r\n * The hella `!important` is required for any pre-set property.\r\n */\r\n\r\n.carbonad {\r\n  width: auto !important;\r\n  height: auto !important;\r\n  padding: 20px !important;\r\n  margin: 30px -30px -31px !important;\r\n  overflow: hidden; /* clearfix */\r\n  font-size: 13px !important;\r\n  line-height: 16px !important;\r\n  text-align: left;\r\n  background: transparent !important;\r\n  border: solid #866ab3 !important;\r\n  border-width: 1px 0 !important;\r\n}\r\n.carbonad-img {\r\n  margin: 0 !important;\r\n}\r\n.carbonad-text,\r\n.carbonad-tag {\r\n  display: block !important;\r\n  float: none !important;\r\n  width: auto !important;\r\n  height: auto !important;\r\n  margin-left: 145px !important;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\r\n}\r\n.carbonad-text {\r\n  padding-top: 0 !important;\r\n}\r\n.carbonad-tag {\r\n  color: inherit !important;\r\n  text-align: left !important;\r\n}\r\n.carbonad-text a,\r\n.carbonad-tag a {\r\n  color: #fff !important;\r\n}\r\n.carbonad #azcarbon > img {\r\n  display: none; /* hide what I assume are tracking images */\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .carbonad {\r\n    width: 330px !important;\r\n    margin: 20px auto !important;\r\n    border-width: 1px !important;\r\n    border-radius: 4px;\r\n  }\r\n  .bs-docs-masthead .carbonad {\r\n    margin: 50px auto 0 !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .carbonad {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .carbonad {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 15px; /* 15px instead of 0 since box-sizing */\r\n    width: 330px !important;\r\n    padding: 15px !important;\r\n    margin: 0 !important;\r\n  }\r\n  .bs-docs-masthead .carbonad {\r\n    position: static;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Homepage featurettes\r\n *\r\n * Reasons to use Bootstrap, entries from the Expo, and more.\r\n */\r\n\r\n.bs-docs-featurette {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  color: #555;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.bs-docs-featurette + .bs-docs-footer {\r\n  margin-top: 0;\r\n  border-top: 0;\r\n}\r\n\r\n.bs-docs-featurette-title {\r\n  margin-bottom: 5px;\r\n  font-size: 30px;\r\n  font-weight: normal;\r\n  color: #333;\r\n}\r\n.half-rule {\r\n  width: 100px;\r\n  margin: 40px auto;\r\n}\r\n.bs-docs-featurette h3 {\r\n  margin-bottom: 5px;\r\n  font-weight: normal;\r\n  color: #333;\r\n}\r\n.bs-docs-featurette-img {\r\n  display: block;\r\n  margin-bottom: 20px;\r\n  color: #333;\r\n}\r\n.bs-docs-featurette-img:hover {\r\n  color: #428bca;\r\n  text-decoration: none;\r\n}\r\n.bs-docs-featurette-img img {\r\n  display: block;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .bs-docs-featurette .img-responsive {\r\n    margin-top: 30px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-docs-featurette {\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n  }\r\n  .bs-docs-featurette-title {\r\n    font-size: 40px;\r\n  }\r\n  .bs-docs-featurette .lead {\r\n    max-width: 80%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  .bs-docs-featured-sites .col-sm-3:first-child img {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n  }\r\n  .bs-docs-featured-sites .col-sm-3:last-child img {\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n\r\n  .bs-docs-featurette .img-responsive {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n/* Featured sites */\r\n.bs-docs-featured-sites {\r\n  margin-right: -1px;\r\n  margin-left: -1px;\r\n}\r\n.bs-docs-featured-sites .col-sm-3 {\r\n  padding-right: 1px;\r\n  padding-left: 1px;\r\n}\r\n.bs-docs-featured-sites .img-responsive {\r\n  margin-bottom: 15px;\r\n}\r\n@media (min-width: 480px) {\r\n  .bs-docs-featured-sites .img-responsive {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n/* Example thumbnails */\r\n@media (max-width: 480px) {\r\n  .bs-examples {\r\n    margin-right: -10px;\r\n    margin-left: -10px;\r\n  }\r\n  .bs-examples > [class^=\"col-\"] {\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Side navigation\r\n *\r\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\r\n * sections of docs content.\r\n */\r\n\r\n/* By default it's not affixed in mobile views, so undo that */\r\n.bs-docs-sidebar.affix {\r\n  position: static;\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-docs-sidebar {\r\n    padding-left: 20px;\r\n  }\r\n}\r\n\r\n/* First level of nav */\r\n.bs-docs-sidenav {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* All levels of nav */\r\n.bs-docs-sidebar .nav > li > a {\r\n  display: block;\r\n  padding: 4px 20px;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #999;\r\n}\r\n.bs-docs-sidebar .nav > li > a:hover,\r\n.bs-docs-sidebar .nav > li > a:focus {\r\n  padding-left: 19px;\r\n  color: #1D976C;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  border-left: 1px solid #1D976C;\r\n}\r\n.bs-docs-sidebar .nav > .active > a,\r\n.bs-docs-sidebar .nav > .active:hover > a,\r\n.bs-docs-sidebar .nav > .active:focus > a {\r\n  padding-left: 18px;\r\n  font-weight: bold;\r\n  color: #1D976C;\r\n  background-color: transparent;\r\n  border-left: 2px solid #1D976C;\r\n}\r\n\r\n/* Nav: second level (shown on .active) */\r\n.bs-docs-sidebar .nav .nav {\r\n  display: none; /* Hide by default, but at >768px, show it */\r\n  padding-bottom: 10px;\r\n}\r\n.bs-docs-sidebar .nav .nav > li > a {\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n  padding-left: 30px;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n.bs-docs-sidebar .nav .nav > li > a:hover,\r\n.bs-docs-sidebar .nav .nav > li > a:focus {\r\n  padding-left: 29px;\r\n}\r\n.bs-docs-sidebar .nav .nav > .active > a,\r\n.bs-docs-sidebar .nav .nav > .active:hover > a,\r\n.bs-docs-sidebar .nav .nav > .active:focus > a {\r\n  padding-left: 28px;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Back to top (hidden on mobile) */\r\n.back-to-top,\r\n.bs-docs-theme-toggle {\r\n  display: none;\r\n  padding: 4px 10px;\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #999;\r\n}\r\n.back-to-top:hover,\r\n.bs-docs-theme-toggle:hover {\r\n  color: #563d7c;\r\n  text-decoration: none;\r\n}\r\n.bs-docs-theme-toggle {\r\n  margin-top: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .back-to-top,\r\n  .bs-docs-theme-toggle {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/* Show and affix the side nav when space allows it */\r\n@media (min-width: 992px) {\r\n  .bs-docs-sidebar .nav > .active > ul {\r\n    display: block;\r\n  }\r\n  /* Widen the fixed sidebar */\r\n  .bs-docs-sidebar.affix,\r\n  .bs-docs-sidebar.affix-bottom {\r\n    width: 213px;\r\n  }\r\n  .bs-docs-sidebar.affix {\r\n    position: fixed; /* Undo the static from mobile first approach */\r\n    top: 20px;\r\n  }\r\n  .bs-docs-sidebar.affix-bottom {\r\n    position: absolute; /* Undo the static from mobile first approach */\r\n  }\r\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\r\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  /* Widen the fixed sidebar again */\r\n  .bs-docs-sidebar.affix-bottom,\r\n  .bs-docs-sidebar.affix {\r\n    width: 263px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Docs sections\r\n *\r\n * Content blocks for each component or feature.\r\n */\r\n\r\n/* Space things out */\r\n.bs-docs-section {\r\n  margin-bottom: 60px;\r\n}\r\n.bs-docs-section:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\nh1[id] {\r\n  padding-top: 20px;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n/*\r\n * Callouts\r\n *\r\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\r\n * Requires a base and modifier class.\r\n */\r\n\r\n/* Common styles for all types */\r\n.bs-callout {\r\n  padding: 20px;\r\n  margin: 20px 0;\r\n  border: 1px solid #eee;\r\n  border-left-width: 5px;\r\n  border-radius: 3px;\r\n}\r\n.bs-callout h4 {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-callout p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.bs-callout code {\r\n  border-radius: 3px;\r\n}\r\n\r\n/* Tighten up space between multiple callouts */\r\n.bs-callout + .bs-callout {\r\n  margin-top: -5px;\r\n}\r\n\r\n/* Variations */\r\n.bs-callout-danger {\r\n  border-left-color: #d9534f;\r\n}\r\n.bs-callout-danger h4 {\r\n  color: #d9534f;\r\n}\r\n.bs-callout-warning {\r\n  border-left-color: #f0ad4e;\r\n}\r\n.bs-callout-warning h4 {\r\n  color: #f0ad4e;\r\n}\r\n.bs-callout-info {\r\n  border-left-color: #5bc0de;\r\n}\r\n.bs-callout-info h4 {\r\n  color: #5bc0de;\r\n}\r\n\r\n\r\n/*\r\n * Color swatches\r\n *\r\n * Color swatches and associated values for our grayscale and brand colors.\r\n */\r\n\r\n.color-swatches {\r\n  margin: 0 -5px;\r\n  overflow: hidden; /* clearfix */\r\n}\r\n.color-swatch {\r\n  float: left;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 0 5px;\r\n  border-radius: 3px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .color-swatch {\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n/* Framework colors */\r\n.color-swatches .gray-darker {\r\n  background-color: #222;\r\n}\r\n.color-swatches .gray-dark {\r\n  background-color: #333;\r\n}\r\n.color-swatches .gray {\r\n  background-color: #555;\r\n}\r\n.color-swatches .gray-light {\r\n  background-color: #999;\r\n}\r\n.color-swatches .gray-lighter {\r\n  background-color: #eee;\r\n}\r\n.color-swatches .brand-primary {\r\n  background-color: #428bca;\r\n}\r\n.color-swatches .brand-success {\r\n  background-color: #5cb85c;\r\n}\r\n.color-swatches .brand-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.color-swatches .brand-danger {\r\n  background-color: #d9534f;\r\n}\r\n.color-swatches .brand-info {\r\n  background-color: #5bc0de;\r\n}\r\n\r\n/* Docs colors */\r\n.color-swatches .bs-purple {\r\n  background-color: #563d7c;\r\n}\r\n.color-swatches .bs-purple-light {\r\n  background-color: #c7bfd3;\r\n}\r\n.color-swatches .bs-purple-lighter {\r\n  background-color: #e5e1ea;\r\n}\r\n.color-swatches .bs-gray {\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n\r\n/*\r\n * Team members\r\n *\r\n * Avatars, names, and usernames for core team.\r\n */\r\n\r\n.bs-team .team-member {\r\n  line-height: 32px;\r\n  color: #555;\r\n}\r\n.bs-team .team-member:hover {\r\n  color: #333;\r\n  text-decoration: none;\r\n}\r\n.bs-team .github-btn {\r\n  float: right;\r\n  width: 180px;\r\n  height: 20px;\r\n  margin-top: 6px;\r\n}\r\n.bs-team img {\r\n  float: left;\r\n  width: 32px;\r\n  margin-right: 10px;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n/*\r\n * Grid examples\r\n *\r\n * Highlight the grid columns within the docs so folks can see their padding,\r\n * alignment, sizing, etc.\r\n */\r\n\r\n.show-grid {\r\n  margin-bottom: 15px;\r\n}\r\n.show-grid [class^=\"col-\"] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  background-color: #eee;\r\n  background-color: rgba(86,61,124,.15);\r\n  border: 1px solid #ddd;\r\n  border: 1px solid rgba(86,61,124,.2);\r\n}\r\n\r\n\r\n/*\r\n * Examples\r\n *\r\n * Isolated sections of example content for each component or feature. Usually\r\n * followed by a code snippet.\r\n */\r\n\r\n.bs-example {\r\n  position: relative;\r\n  padding: 45px 15px 15px;\r\n  margin: 0 -15px 15px;\r\n  border-color: #e5e5e5 #eee #eee;\r\n  border-style: solid;\r\n  border-width: 1px 0;\r\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\r\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\r\n}\r\n/* Echo out a label for the example */\r\n.bs-example:after {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: #959595;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  content: \"Example\";\r\n}\r\n\r\n/* Tweak display of the code snippets when following an example */\r\n.bs-example + .highlight {\r\n  margin: -15px -15px 15px;\r\n  border-width: 0 0 1px;\r\n  border-radius: 0;\r\n}\r\n\r\n/* Make the examples and snippets not full-width */\r\n@media (min-width: 768px) {\r\n  .bs-example {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n    border-width: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n  }\r\n  .bs-example + .highlight {\r\n    margin-top: -16px;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border-width: 1px;\r\n    border-bottom-right-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n  }\r\n}\r\n\r\n/* Undo width of container */\r\n.bs-example .container {\r\n  width: auto;\r\n}\r\n\r\n/* Tweak content of examples for optimum awesome */\r\n.bs-example > p:last-child,\r\n.bs-example > ul:last-child,\r\n.bs-example > ol:last-child,\r\n.bs-example > blockquote:last-child,\r\n.bs-example > .form-control:last-child,\r\n.bs-example > .table:last-child,\r\n.bs-example > .navbar:last-child,\r\n.bs-example > .jumbotron:last-child,\r\n.bs-example > .alert:last-child,\r\n.bs-example > .panel:last-child,\r\n.bs-example > .list-group:last-child,\r\n.bs-example > .well:last-child,\r\n.bs-example > .progress:last-child,\r\n.bs-example > .table-responsive:last-child > .table {\r\n  margin-bottom: 0;\r\n}\r\n.bs-example > p > .close {\r\n  float: none;\r\n}\r\n\r\n/* Typography */\r\n.bs-example-type .table .type-info {\r\n  color: #999;\r\n  vertical-align: middle;\r\n}\r\n.bs-example-type .table td {\r\n  padding: 15px 0;\r\n  border-color: #eee;\r\n}\r\n.bs-example-type .table tr:first-child td {\r\n  border-top: 0;\r\n}\r\n.bs-example-type h1,\r\n.bs-example-type h2,\r\n.bs-example-type h3,\r\n.bs-example-type h4,\r\n.bs-example-type h5,\r\n.bs-example-type h6 {\r\n  margin: 0;\r\n}\r\n\r\n/* Contextual background colors */\r\n.bs-example-bg-classes p {\r\n  padding: 15px;\r\n}\r\n\r\n/* Images */\r\n.bs-example > .img-circle,\r\n.bs-example > .img-rounded,\r\n.bs-example > .img-thumbnail {\r\n  margin: 5px;\r\n}\r\n\r\n/* Tables */\r\n.bs-example > .table-responsive > .table {\r\n  background-color: #fff;\r\n}\r\n\r\n/* Buttons */\r\n.bs-example > .btn,\r\n.bs-example > .btn-group {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-example > .btn-toolbar + .btn-toolbar {\r\n  margin-top: 10px;\r\n}\r\n\r\n/* Forms */\r\n.bs-example-control-sizing select,\r\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\r\n  margin-top: 10px;\r\n}\r\n.bs-example-form .input-group {\r\n  margin-bottom: 10px;\r\n}\r\n.bs-example > textarea.form-control {\r\n  resize: vertical;\r\n}\r\n\r\n/* List groups */\r\n.bs-example > .list-group {\r\n  max-width: 400px;\r\n}\r\n\r\n/* Navbars */\r\n.bs-example .navbar:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.bs-navbar-top-example,\r\n.bs-navbar-bottom-example {\r\n  z-index: 1;\r\n  padding: 0;\r\n  overflow: hidden; /* cut the drop shadows off */\r\n}\r\n.bs-navbar-top-example .navbar-header,\r\n.bs-navbar-bottom-example .navbar-header {\r\n  margin-left: 0;\r\n}\r\n.bs-navbar-top-example .navbar-fixed-top,\r\n.bs-navbar-bottom-example .navbar-fixed-bottom {\r\n  position: relative;\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n.bs-navbar-top-example {\r\n  padding-bottom: 45px;\r\n}\r\n.bs-navbar-top-example:after {\r\n  top: auto;\r\n  bottom: 15px;\r\n}\r\n.bs-navbar-top-example .navbar-fixed-top {\r\n  top: -1px;\r\n}\r\n.bs-navbar-bottom-example {\r\n  padding-top: 45px;\r\n}\r\n.bs-navbar-bottom-example .navbar-fixed-bottom {\r\n  bottom: -1px;\r\n}\r\n.bs-navbar-bottom-example .navbar {\r\n  margin-bottom: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-navbar-top-example .navbar-fixed-top,\r\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\r\n    position: absolute;\r\n  }\r\n}\r\n\r\n/* Pagination */\r\n.bs-example .pagination {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Pager */\r\n.bs-example > .pager {\r\n  margin-top: 0;\r\n}\r\n\r\n/* Example modals */\r\n.bs-example-modal {\r\n  background-color: #f5f5f5;\r\n}\r\n.bs-example-modal .modal {\r\n  position: relative;\r\n  top: auto;\r\n  right: auto;\r\n  bottom: auto;\r\n  left: auto;\r\n  z-index: 1;\r\n  display: block;\r\n}\r\n.bs-example-modal .modal-dialog {\r\n  left: auto;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.custom-modal {\r\n  width: 90%;\r\n}\r\n\r\n/* Example dropdowns */\r\n.bs-example > .dropdown > .dropdown-toggle {\r\n  float: left;\r\n}\r\n.bs-example > .dropdown > .dropdown-menu {\r\n  position: static;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  clear: left;\r\n}\r\n\r\n/* Example tabbable tabs */\r\n.bs-example-tabs .nav-tabs {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/* Tooltips */\r\n.bs-example-tooltips {\r\n  text-align: center;\r\n}\r\n.bs-example-tooltips > .btn {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n/* Popovers */\r\n.bs-example-popover {\r\n  padding-bottom: 24px;\r\n  background-color: #f9f9f9;\r\n}\r\n.bs-example-popover .popover {\r\n  position: relative;\r\n  display: block;\r\n  float: left;\r\n  width: 260px;\r\n  margin: 20px;\r\n}\r\n\r\n/* Scrollspy demo on fixed height div */\r\n.scrollspy-example {\r\n  position: relative;\r\n  height: 200px;\r\n  margin-top: 10px;\r\n  overflow: auto;\r\n}\r\n\r\n/* MenuItem */\r\n.bs-example .dropdown-menu.open {\r\n  position: static;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  clear: left;\r\n}\r\n\r\n\r\n/*\r\n * Code snippets\r\n *\r\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\r\n */\r\n\r\n.highlight {\r\n  padding: 9px 14px;\r\n  margin-bottom: 14px;\r\n  background-color: #f7f7f9;\r\n  border: 1px solid #e1e1e8;\r\n  border-radius: 4px;\r\n}\r\n.highlight pre {\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  word-break: normal;\r\n  word-wrap: nowrap;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.highlight pre code {\r\n  font-size: inherit;\r\n  color: #333; /* Effectively the base text color */\r\n}\r\n.highlight pre code:first-child {\r\n  display: inline-block;\r\n  padding-right: 45px;\r\n}\r\n\r\n\r\n/*\r\n * Responsive tests\r\n *\r\n * Generate a set of tests to show the responsive utilities in action.\r\n */\r\n\r\n/* Responsive (scrollable) doc tables */\r\n.table-responsive .highlight pre {\r\n  white-space: normal;\r\n}\r\n\r\n/* Utility classes table  */\r\n.bs-table th small,\r\n.responsive-utilities th small {\r\n  display: block;\r\n  font-weight: normal;\r\n  color: #999;\r\n}\r\n.responsive-utilities tbody th {\r\n  font-weight: normal;\r\n}\r\n.responsive-utilities td {\r\n  text-align: center;\r\n}\r\n.responsive-utilities td.is-visible {\r\n  color: #468847;\r\n  background-color: #dff0d8 !important;\r\n}\r\n.responsive-utilities td.is-hidden {\r\n  color: #ccc;\r\n  background-color: #f9f9f9 !important;\r\n}\r\n\r\n/* Responsive tests */\r\n.responsive-utilities-test {\r\n  margin-top: 5px;\r\n}\r\n.responsive-utilities-test .col-xs-6 {\r\n  margin-bottom: 10px;\r\n}\r\n.responsive-utilities-test span {\r\n  display: block;\r\n  padding: 15px 10px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  line-height: 1.1;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n.visible-on .col-xs-6 .hidden-xs,\r\n.visible-on .col-xs-6 .hidden-sm,\r\n.visible-on .col-xs-6 .hidden-md,\r\n.visible-on .col-xs-6 .hidden-lg,\r\n.hidden-on .col-xs-6 .hidden-xs,\r\n.hidden-on .col-xs-6 .hidden-sm,\r\n.hidden-on .col-xs-6 .hidden-md,\r\n.hidden-on .col-xs-6 .hidden-lg {\r\n  color: #999;\r\n  border: 1px solid #ddd;\r\n}\r\n.visible-on .col-xs-6 .visible-xs-block,\r\n.visible-on .col-xs-6 .visible-sm-block,\r\n.visible-on .col-xs-6 .visible-md-block,\r\n.visible-on .col-xs-6 .visible-lg-block,\r\n.hidden-on .col-xs-6 .visible-xs-block,\r\n.hidden-on .col-xs-6 .visible-sm-block,\r\n.hidden-on .col-xs-6 .visible-md-block,\r\n.hidden-on .col-xs-6 .visible-lg-block {\r\n  color: #468847;\r\n  background-color: #dff0d8;\r\n  border: 1px solid #d6e9c6;\r\n}\r\n\r\n\r\n/*\r\n * Glyphicons\r\n *\r\n * Special styles for displaying the icons and their classes in the docs.\r\n */\r\n\r\n.bs-glyphicons {\r\n  margin: 0 -10px 20px;\r\n  overflow: hidden;\r\n}\r\n.bs-glyphicons-list {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.bs-glyphicons li {\r\n  float: left;\r\n  width: 25%;\r\n  height: 115px;\r\n  padding: 10px;\r\n  font-size: 10px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  background-color: #f9f9f9;\r\n  border: 1px solid #fff;\r\n}\r\n.bs-glyphicons .glyphicon {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n}\r\n.bs-glyphicons .glyphicon-class {\r\n  display: block;\r\n  text-align: center;\r\n  word-wrap: break-word; /* Help out IE10+ with class names */\r\n}\r\n.bs-glyphicons li:hover {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-glyphicons {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  .bs-glyphicons li {\r\n    width: 12.5%;\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Customizer\r\n *\r\n * Since this is so form control heavy, we have quite a few styles to customize\r\n * the display of inputs, headings, and more. Also included are all the download\r\n * buttons and actions.\r\n */\r\n\r\n.bs-customizer .toggle {\r\n  float: right;\r\n  margin-top: 25px;\r\n}\r\n\r\n/* Headings and form contrls */\r\n.bs-customizer label {\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n  color: #555;\r\n}\r\n.bs-customizer h2 {\r\n  padding-top: 30px;\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-customizer h3 {\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer h4 {\r\n  margin-top: 15px;\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer .bs-callout h4 {\r\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\r\n  margin-bottom: 5px;\r\n}\r\n.bs-customizer input[type=\"text\"] {\r\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n  background-color: #fafafa;\r\n}\r\n.bs-customizer .help-block {\r\n  margin-bottom: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* For the variables, use regular weight */\r\n#less-section label {\r\n  font-weight: normal;\r\n}\r\n\r\n.bs-customizer-input {\r\n  float: left;\r\n  width: 33.333333%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n/* Downloads */\r\n.bs-customize-download .btn-outline {\r\n  padding: 20px;\r\n}\r\n\r\n/* Error handling */\r\n.bs-customizer-alert {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n  padding: 15px 0;\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-bottom: 1px solid #b94441;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\r\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\r\n}\r\n.bs-customizer-alert .close {\r\n  margin-top: -4px;\r\n  font-size: 24px;\r\n}\r\n.bs-customizer-alert p {\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer-alert .glyphicon {\r\n  margin-right: 5px;\r\n}\r\n.bs-customizer-alert pre {\r\n  margin: 10px 0 0;\r\n  color: #fff;\r\n  background-color: #a83c3a;\r\n  border-color: #973634;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\r\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\r\n}\r\n\r\n\r\n/*\r\n * Brand guidelines\r\n *\r\n * Extra styles for displaying wordmarks, logos, etc.\r\n */\r\n\r\n/* Logo series wrapper */\r\n.bs-brand-logos {\r\n  display: table;\r\n  width: 100%;\r\n  margin-bottom: 15px;\r\n  overflow: hidden;\r\n  color: #563d7c;\r\n  background-color: #f9f9f9;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* Individual items */\r\n.bs-brand-item {\r\n  padding: 60px 0;\r\n  text-align: center;\r\n}\r\n.bs-brand-item + .bs-brand-item {\r\n  border-top: 1px solid #fff;\r\n}\r\n.bs-brand-logos .inverse {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n}\r\n.bs-brand-item .svg {\r\n  width: 144px;\r\n  height: 144px;\r\n}\r\n\r\n/* Heading content within */\r\n.bs-brand-item h1,\r\n.bs-brand-item h3 {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.bs-brand-item .bs-docs-booticon {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n/* Make the icons stand out on what is/isn't okay */\r\n.bs-brand-item .glyphicon {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 10px auto -10px;\r\n  line-height: 30px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n}\r\n.bs-brand-item .glyphicon-ok {\r\n  background-color: #5cb85c;\r\n}\r\n.bs-brand-item .glyphicon-remove {\r\n  background-color: #d9534f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-brand-item {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .bs-brand-item + .bs-brand-item {\r\n    border-top: 0;\r\n    border-left: 1px solid #fff;\r\n  }\r\n  .bs-brand-item h1 {\r\n    font-size: 60px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Miscellaneous\r\n *\r\n * Odds and ends for optimum docs display.\r\n */\r\n\r\n/* Examples gallery: space out content better */\r\n.bs-examples .thumbnail {\r\n  margin-bottom: 10px;\r\n}\r\n.bs-examples h4 {\r\n  margin-bottom: 5px;\r\n}\r\n.bs-examples p {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Pseudo :focus state for showing how it looks in the docs */\r\n#focusedInput {\r\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\r\n  border-color: rgba(82,168,236,.8);\r\n  outline: 0;\r\n  outline: thin dotted \\9; /* IE6-9 */\r\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\r\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\r\n}\r\n\r\n\r\n/*\r\n * ZeroClipboard styles\r\n */\r\n\r\n.zero-clipboard {\r\n  position: relative;\r\n  display: none;\r\n}\r\n.btn-clipboard {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n  display: block;\r\n  padding: 5px 8px;\r\n  font-size: 12px;\r\n  color: #777;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border: 1px solid #e1e1e8;\r\n  border-radius: 0 4px 0 4px;\r\n}\r\n.btn-clipboard-hover {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n  border-color: #563d7c;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .zero-clipboard {\r\n    display: block;\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(303);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(104)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(103)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n * React-Bootstrap Documentation\r\n * Special styles for presenting react-bootstrap's documentation and code examples.\r\n * Based on the Bootstrap Documentation styles and overridden as necessary.\r\n */\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\r\n}\r\n\r\n.bs-docs-section h1 {\r\n  font-size: 42px\r\n}\r\n\r\n.bs-docs-nav .navbar-nav > li > a {\r\n  color: #333;\r\n}\r\n.bs-docs-footer {\r\n  padding-top: 20px;\r\n  text-align: left;\r\n}\r\n.bs-docs-nav .navbar-collapse {\r\n  overflow: hidden;\r\n}\r\n.bs-docs-nav {\r\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\r\n}\r\n\r\n.bs-docs-header p {\r\n  font-weight: lighter;\r\n}\r\n\r\n\r\n.bs-docs-header a {\r\n  color: white;\r\n  font-weight: normal;\r\n}\r\n.btn-outline-inverse {\r\n  border-color: white;\r\n  transition: color .15s ease;\r\n}\r\n.bs-docs-header a:hover,\r\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\r\n.bs-docs-nav .navbar-brand {\r\n  color: #1D976C;\r\n}\r\n\r\n.bs-docs-masthead, .bs-docs-header {\r\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\r\n\r\n  filter: none;\r\n  color: #e9e9e9;\r\n}\r\n\r\n.bs-docs-masthead {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.bs-docs-header h1 {\r\n  color: #ffffff;\r\n}\r\n\r\n.bs-docs-header p {\r\n  color: #ffffff;\r\n}\r\n\r\na.back-to-top {\r\n  font-size: 13px;\r\n  margin-top: 0;\r\n}\r\n\r\n.bs-docs-sidebar .nav>li>a {\r\n  color: #767676;\r\n  font-size: 14px;\r\n}\r\n\r\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\r\n  color: #42b983;\r\n  border-left: 1px solid #42b983;\r\n}\r\n\r\n.back-to-top:hover {\r\n  color: #42b983;\r\n}\r\n\r\n\r\n.CodeMirror, .CodeMirror-scroll {\r\n  height: auto;\r\n}\r\n\r\n.bs-example .btn-toolbar + .btn-toolbar {\r\n  margin-top: 10px;\r\n}\r\n\r\n.bs-example .static-modal .modal {\r\n  position: relative;\r\n  top: auto;\r\n  right: auto;\r\n  left: auto;\r\n  bottom: auto;\r\n  z-index: 1;\r\n  display: block;\r\n}\r\n\r\n.bs-docs-booticon {\r\n  background-size: contain;\r\n  border: 0;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-contained {\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-contained > div {\r\n  position: relative;\r\n}\r\n\r\n.bs-example-popover-scroll {\r\n  overflow: scroll;\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-scroll > div {\r\n  position: relative;\r\n  padding: 100px 0;\r\n}\r\n\r\n.playground {\r\n  margin-bottom: 36px;\r\n}\r\n\r\n.bs-example {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.bs-example + .highlight {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  border-top: none;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.code-toggle {\r\n  float: right;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -1px;\r\n  background: #fafafa;\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  border: 1px solid #e1e1e8;\r\n  border-top: none;\r\n  padding: 4px 8px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .code-toggle {\r\n    background: #fff;\r\n  }\r\n}\r\n\r\n.code-toggle.open {\r\n  background: #f8f5ec;\r\n}\r\n\r\n/* Minimal CSS Needed for contained modals */\r\n.modal-container {\r\n  position: relative;\r\n}\r\n.modal-container .modal, .modal-container .modal-backdrop {\r\n  position: absolute;\r\n}\r\n\r\n.prop-table {\r\n  background-color: white;\r\n}\r\n\r\n.bs-example.tooltip-static .tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 5px 10px;\r\n\r\n}\r\n\r\n.bs-example .super-colors {\r\n  background: -moz-linear-gradient( top ,\r\n      rgba(255, 0, 0, 1) 0%,\r\n      rgba(255, 255, 0, 1) 15%,\r\n      rgba(0, 255, 0, 1) 30%,\r\n      rgba(0, 255, 255, 1) 50%,\r\n      rgba(0, 0, 255, 1) 65%,\r\n      rgba(255, 0, 255, 1) 80%,\r\n      rgba(255, 0, 0, 1) 100%);\r\n  background: -webkit-gradient(linear,  left top,  left bottom,\r\n      color-stop(0%, rgba(255, 0, 0, 1)),\r\n      color-stop(15%, rgba(255, 255, 0, 1)),\r\n      color-stop(30%, rgba(0, 255, 0, 1)),\r\n      color-stop(50%, rgba(0, 255, 255, 1)),\r\n      color-stop(65%, rgba(0, 0, 255, 1)),\r\n      color-stop(80%, rgba(255, 0, 255, 1)),\r\n      color-stop(100%, rgba(255, 0, 0, 1)));\r\n}\r\n\r\n/*.bs-example .custom-menu > ul > li {\r\n    padding: 0 20px;\r\n}*/\r\n\r\n.anchor,\r\n.anchor:hover,\r\n.anchor:active,\r\n.anchor:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  position: relative;\r\n}\r\n.anchor-icon {\r\n  font-size: 90%;\r\n  padding-top: 0.1em;\r\n  position: absolute;\r\n  left: -0.8em;\r\n  opacity: 0;\r\n}\r\n\r\nh1:hover .anchor-icon,\r\nh1 a:focus .anchor-icon,\r\nh2:hover .anchor-icon,\r\nh2 a:focus .anchor-icon,\r\nh3:hover .anchor-icon,\r\nh3 a:focus .anchor-icon,\r\nh4:hover .anchor-icon,\r\nh4 a:focus .anchor-icon {\r\n  opacity: 0.5;\r\n}\r\n\r\n.prop-desc pre {\r\n  border-radius: 0;\r\n  border-width: 0;\r\n  border-left-width: 3px;\r\n}\r\n\r\n.prop-desc-heading {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.bs-callout {\r\n    padding: 20px;\r\n    margin: 20px 0;\r\n    border: 1px solid #eee;\r\n    border-left-width: 5px;\r\n    border-radius: 3px;\r\n}\r\n.bs-callout h4 {\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n}\r\n.bs-callout p:last-child {\r\n    margin-bottom: 0;\r\n}\r\n.bs-callout code {\r\n    border-radius: 3px;\r\n}\r\n.bs-callout+.bs-callout {\r\n    margin-top: -5px;\r\n}\r\n.bs-callout-default {\r\n    border-left-color: #777;\r\n}\r\n.bs-callout-default h4 {\r\n    color: #777;\r\n}\r\n.bs-callout-primary {\r\n    border-left-color: #428bca;\r\n}\r\n.bs-callout-primary h4 {\r\n    color: #428bca;\r\n}\r\n.bs-callout-success {\r\n    border-left-color: #42b983;\r\n}\r\n.bs-callout-success h4 {\r\n    color: #42b983;\r\n}\r\n.bs-callout-danger {\r\n    border-left-color: #d9534f;\r\n}\r\n.bs-callout-danger h4 {\r\n    color: #d9534f;\r\n}\r\n.bs-callout-warning {\r\n    border-left-color: #f0ad4e;\r\n}\r\n.bs-callout-warning h4 {\r\n    color: #f0ad4e;\r\n}\r\n.bs-callout-info {\r\n    border-left-color: #5bc0de;\r\n}\r\n.bs-callout-info h4 {\r\n    color: #5bc0de;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 304 */
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
	
					pattern = pattern.pattern || pattern;
	
					for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop
	
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
							// Reconstruct the original text using the next two tokens
							var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
							    combStr = str + nextToken;
	
							if (i < strarr.length - 2) {
								combStr += strarr[i + 2].matchedStr || strarr[i + 2];
							}
	
							// Try the pattern again on the reconstructed text
							pattern.lastIndex = 0;
							match = pattern.exec(combStr);
							if (!match) {
								continue;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0);
							// To be a valid candidate, the new match has to start inside of str
							if (from >= str.length) {
								continue;
							}
							var to = match.index + match[0].length,
							    len = str.length + nextToken.length;
	
							// Number of tokens to delete and replace with the new match
							delNum = 3;
	
							if (to <= len) {
								if (strarr[i + 1].greedy) {
									continue;
								}
								delNum = 2;
								combStr = combStr.slice(0, len);
							}
							str = combStr;
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
		this.matchedStr = matchedStr || null;
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
	
		var attributes = '';
	
		for (var name in env.attributes) {
			attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
		}
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
	
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
				requestAnimationFrame(_.highlightAll, 0);
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
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
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
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
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
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
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
/* 305 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	
		if (typeof self === 'undefined' || !self.Prism || !self.document) {
			return;
		}
	
		// The languages map is built automatically with gulp
		var Languages = /*languages_placeholder[*/{ "css": "CSS", "clike": "C-like", "javascript": "JavaScript", "abap": "ABAP", "actionscript": "ActionScript", "apacheconf": "Apache Configuration", "apl": "APL", "applescript": "AppleScript", "aspnet": "ASP.NET (C#)", "autoit": "AutoIt", "autohotkey": "AutoHotkey", "basic": "BASIC", "csharp": "C#", "cpp": "C++", "coffeescript": "CoffeeScript", "css-extras": "CSS Extras", "fsharp": "F#", "glsl": "GLSL", "http": "HTTP", "inform7": "Inform 7", "latex": "LaTeX", "lolcode": "LOLCODE", "matlab": "MATLAB", "mel": "MEL", "nasm": "NASM", "nginx": "nginx", "nsis": "NSIS", "objectivec": "Objective-C", "ocaml": "OCaml", "php": "PHP", "php-extras": "PHP Extras", "powershell": "PowerShell", "jsx": "React JSX", "rest": "reST (reStructuredText)", "sas": "SAS", "sass": "Sass (Sass)", "scss": "Sass (Scss)", "sql": "SQL", "typescript": "TypeScript", "vhdl": "VHDL", "vim": "vim", "wiki": "Wiki markup", "yaml": "YAML" } /*]*/;
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
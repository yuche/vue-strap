<<<<<<< HEAD
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	__webpack_require__(241);
	
	__webpack_require__(47);
	
	__webpack_require__(48);
	
	var _exampleGettingStartedVue = __webpack_require__(49);
	
	var _exampleGettingStartedVue2 = _interopRequireDefault(_exampleGettingStartedVue);
	
	var _srcAffixVue = __webpack_require__(51);
	
	var _srcAffixVue2 = _interopRequireDefault(_srcAffixVue);
	
	var _exampleContainerVue = __webpack_require__(58);
	
	var _exampleContainerVue2 = _interopRequireDefault(_exampleContainerVue);
	
	var _exampleHeaderDocsVue = __webpack_require__(60);
	
	var _exampleHeaderDocsVue2 = _interopRequireDefault(_exampleHeaderDocsVue);
	
	var _exampleAlertDocsVue = __webpack_require__(62);
	
	var _exampleAlertDocsVue2 = _interopRequireDefault(_exampleAlertDocsVue);
	
	var _exampleAccordionDocsVue = __webpack_require__(72);
	
	var _exampleAccordionDocsVue2 = _interopRequireDefault(_exampleAccordionDocsVue);
	
	var _exampleAffixDocsVue = __webpack_require__(83);
	
	var _exampleAffixDocsVue2 = _interopRequireDefault(_exampleAffixDocsVue);
	
	var _exampleAsideDocsVue = __webpack_require__(94);
	
	var _exampleAsideDocsVue2 = _interopRequireDefault(_exampleAsideDocsVue);
	
	var _exampleCarouselDocsVue = __webpack_require__(103);
	
	var _exampleCarouselDocsVue2 = _interopRequireDefault(_exampleCarouselDocsVue);
	
	var _exampleButtonsDocsVue = __webpack_require__(152);
	
	var _exampleButtonsDocsVue2 = _interopRequireDefault(_exampleButtonsDocsVue);
	
	var _exampleDatepickerDocsVue = __webpack_require__(167);
	
	var _exampleDatepickerDocsVue2 = _interopRequireDefault(_exampleDatepickerDocsVue);
	
	var _exampleDropdownDocsVue = __webpack_require__(185);
	
	var _exampleDropdownDocsVue2 = _interopRequireDefault(_exampleDropdownDocsVue);
	
	var _exampleModalDocsVue = __webpack_require__(191);
	
	var _exampleModalDocsVue2 = _interopRequireDefault(_exampleModalDocsVue);
	
	var _examplePopoverDocsVue = __webpack_require__(199);
	
	var _examplePopoverDocsVue2 = _interopRequireDefault(_examplePopoverDocsVue);
	
	var _exampleProgressbarDocsVue = __webpack_require__(207);
	
	var _exampleProgressbarDocsVue2 = _interopRequireDefault(_exampleProgressbarDocsVue);
	
	var _exampleSelectDocsVue = __webpack_require__(213);
	
	var _exampleSelectDocsVue2 = _interopRequireDefault(_exampleSelectDocsVue);
	
	var _exampleTabsDocsVue = __webpack_require__(216);
	
	var _exampleTabsDocsVue2 = _interopRequireDefault(_exampleTabsDocsVue);
	
	var _exampleTooltipDocsVue = __webpack_require__(229);
	
	var _exampleTooltipDocsVue2 = _interopRequireDefault(_exampleTooltipDocsVue);
	
	var _exampleTypeaheadDocsVue = __webpack_require__(232);
	
	var _exampleTypeaheadDocsVue2 = _interopRequireDefault(_exampleTypeaheadDocsVue);
	
	new Vue({
	  el: '#wrapper',
	  components: {
	    gettingStarted: _exampleGettingStartedVue2['default'],
	    container: _exampleContainerVue2['default'],
	    affix: _srcAffixVue2['default'],
	    alertDocs: _exampleAlertDocsVue2['default'],
	    headerDocs: _exampleHeaderDocsVue2['default'],
	    accordionDocs: _exampleAccordionDocsVue2['default'],
	    affixDocs: _exampleAffixDocsVue2['default'],
	    asideDocs: _exampleAsideDocsVue2['default'],
	    carouselDocs: _exampleCarouselDocsVue2['default'],
	    buttonsDocs: _exampleButtonsDocsVue2['default'],
	    datepickerDocs: _exampleDatepickerDocsVue2['default'],
	    dropdownDocs: _exampleDropdownDocsVue2['default'],
	    modalDocs: _exampleModalDocsVue2['default'],
	    popoverDocs: _examplePopoverDocsVue2['default'],
	    progressbarDocs: _exampleProgressbarDocsVue2['default'],
	    selectDocs: _exampleSelectDocsVue2['default'],
	    tabsDocs: _exampleTabsDocsVue2['default'],
	    tooltipDocs: _exampleTooltipDocsVue2['default'],
	    typeaheadDocs: _exampleTypeaheadDocsVue2['default'],
	    list: {
	      inherit: true,
	      template: '<li v-repeat="anchor"><a href="#{{$value.toLowerCase()}}">{{$value | space}}</a></li>'
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
	    this.anchor = [].concat(_toConsumableArray(anchor)).map(function (el) {
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
	          if (navbar.querySelector('.active')) navbar.querySelector('.active').className = '';
	          navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active';
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
/* 43 */
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
/* 44 */
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
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
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
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
		var sourceMap = obj.sourceMap;
	
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
		var media = obj.media;
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
/* 45 */,
/* 46 */,
/* 47 */
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
	var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
	
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
			DFS: function(o, callback, type) {
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object') {
							_.languages.DFS(o[i], callback);
						}
						else if (_.util.type(o[i]) === 'Array') {
							_.languages.DFS(o[i], callback, i);
						}
					}
				}
			}
		},
		plugins: {},
		
		highlightAll: function(async, callback) {
			var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1];
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
	
			if (!code || !grammar) {
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
	
						var match = pattern.exec(str);
	
						if (match) {
							if(lookbehind) {
								lookbehindLength = match[1].length;
							}
	
							var from = match.index - 1 + lookbehindLength,
								match = match[0].slice(lookbehindLength),
								len = match.length,
								to = from + len,
								before = str.slice(0, from + 1),
								after = str.slice(to + 1);
	
							var args = [i, 1];
	
							if (before) {
								args.push(before);
							}
	
							var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias);
	
							args.push(wrapped);
	
							if (after) {
								args.push(after);
							}
	
							Array.prototype.splice.apply(strarr, args);
						}
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
	
	var Token = _.Token = function(type, content, alias) {
		this.type = type;
		this.content = content;
		this.alias = alias;
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
	
	// Get current script and highlight
	var script = document.getElementsByTagName('script');
	
	script = script[script.length - 1];
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
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
			pattern: /<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
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
		'string': /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
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
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'class-name', {
		'template-string': {
			pattern: /`(?:\\`|\\?[^`])*`/,
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
				'html': 'markup',
				'svg': 'markup',
				'xml': 'markup',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell'
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
	
		self.Prism.fileHighlight();
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 48 */
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

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(50)


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"getting-started\">\n    <h1 class=\"page-header\"><a href=\"#getting-started\" class=\"anchor\">Getting started</a></h1>\n    <div class=\"bs-callout bs-callout-success\">\n      <h4>About this project</h4>\n      <p>\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n        The only required dependencies are:\n      </p>\n      <ul>\n        <li><a href=\"http://vuejs.org/\">Vue.js</a>\n          (required ^0.12, test with 0.12.10).</li>\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a>\n          (required 3.x.x, test with 3.3.5).\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n        </li>\n      </ul>\n    </div>\n    <h2>CommonJS</h2>\n    <pre><code class=\"language-javascript\">\n$ npm install vue-strap\n\nvar alert = require('vue-strap/src/alert');\n// or\nvar alert = require('vue-strap').alert;\n\nnew Vue({\n  components: {\n    'alert': alert\n  }\n})\n</code></pre>\n    <h2>ES6</h2>\n    <pre><code class=\"language-javascript\">\n$ npm install vue-strap\n\nimport alert from 'vue-strap/src/alert'\n// or\nimport { alert } from 'vue-strap'\n\nnew Vue({\n  components: {\n    alert\n  }``\n})\n</code></pre>\n\n    <h2>AMD</h2>\n    <pre><code class=\"language-javascript\">\n$ bower install vue-strap\n\ndefine(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });\n</code></pre>\n    <h2>Browser globals</h2>\n    <p>\n      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.min.js</code> with\n      all components exported in the <code>window.VueStrap</code> object. These bundles are also available on both the\n      Bower and NPM packages.\n    </p>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-strap.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueStrap.alert\n&lt;/script&gt;\n</code></pre>\n  </div>";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52)
	module.exports = __webpack_require__(54)
	module.exports.template = __webpack_require__(57)


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".vue-affix {\n    position: fixed;\n  }", ""]);
	
	// exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    offset: {
	      type: Number,
	      'default': 0
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
	    this._scrollEvent = _utilsEventListenerJs2['default'].listen(window, 'scroll', this.scrolling);
	    this._resizeEvent = _utilsEventListenerJs2['default'].listen(window, 'resize', this.scrolling);
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
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = EventListener;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<div>\n<div v-class=\"vue-affix:affixed\"\n  v-style=\"styles\">\n  <content></content>\n</div>\n</div>";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(59)


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container bs-docs-container\">\n    <div class=\"row\">\n        <content></content>\n    </div>\n  </div>";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(61)


/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<header class=\"navbar navbar-static-top bs-docs-nav\" id=\"top\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"../\" class=\"navbar-brand\">VueStrap</a>\n      </div>\n      <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a href=\"#accordion\" style=\"color:#19986B\">Components</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"https://github.com/yuche/vue-strap\">\n            <span class=\"icon-github-circled\"></span>\n            GitHub\n          </a></li>\n        </ul>\n      </nav>\n    </div>\n  </header>";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63)
	module.exports = __webpack_require__(65)
	module.exports.template = __webpack_require__(71)


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".alert-icon-float-left {\n    font-size:32px;float:left;margin-right:5px;\n  }", ""]);
	
	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcAlertVue = __webpack_require__(66);
	
	var _srcAlertVue2 = _interopRequireDefault(_srcAlertVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false
	    };
	  },
	  components: {
	    alert: _srcAlertVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)
	module.exports = __webpack_require__(69)
	module.exports.template = __webpack_require__(70)


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-transition {\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}", ""]);
	
	// exports


/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      "default": false
	    },
	    show: {
	      type: Boolean,
	      "default": true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      "default": 0
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
	      if (val && !!this.duration) {
	        this._timeout = setTimeout(function () {
	          return _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div\n    v-show=\"show\"\n    class=\"alert\"\n    v-class=\"\n      alert-success:type == 'success',\n      alert-warning:type == 'warning',\n      alert-info:type == 'info',\n      alert-danger:type == 'danger',\n      top: placement === 'top',\n      top-right: placement === 'top-right'\n    \"\n    v-transition=\"fade\"\n    v-style=\"width:width\"\n    role=\"alert\">\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n      v-on=\"click:show = false\">\n      <span >&times;</span>\n    </button>\n    <content>\n    </content>\n  </div>";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"alert\">\n    <h1 class=\"page-header\">\n      <a href=\"#alert\" class=\"anchor\">Alert</a>\n    </h1>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        v-on=\"click:showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n\n      <button class=\"btn btn-danger btn-lg\"\n        v-on=\"click:showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <hr>\n      <alert type=\"success\" >\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n\n      <alert type=\"info\" >\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n\n      <alert\n        show=\"{{@showRight}}\"\n        duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n\n      <alert\n        show=\"{{@showTop}}\"\n        duration=\"3000\"\n        type=\"danger\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showRight = !showRight\">\n  Click to toggle alert on right\n</button>\n\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showTop = !showTop\">\n  Click to toggle alert on top\n</button>\n<hr>\n<alert type=\"success\" >\n  <strong>Well Done!</strong>\n  You successfully read this important alert message.\n</alert>\n\n<alert type=\"info\" >\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n</alert>\n\n<alert type=\"danger\" dismissable>\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n\n<alert type=\"warning\" dismissable>\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</alert>\n\n<alert\n  show=\"{{@showRight}}\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable>\n  <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n  <strong>Well Done!</strong>\n  <p>You successfully read this important alert message.</p>\n</alert>\n\n<alert\n  show=\"{{@showTop}}\"\n  duration=\"3000\"\n  type=\"info\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  <span class=\"icon-info-circled alert-icon-float-left\"></span>\n  <strong>Heads up!</strong>\n  <p>This alert needs your attention.</p>\n</alert>\n\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>Whether show the component</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether show close button</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code></td>\n          <td><code>success</code></td>\n          <td>Components styles</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>how to position the component.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(73)
	module.exports.template = __webpack_require__(82)


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcAccordionVue = __webpack_require__(74);
	
	var _srcAccordionVue2 = _interopRequireDefault(_srcAccordionVue);
	
	var _srcPanelVue = __webpack_require__(77);
	
	var _srcPanelVue2 = _interopRequireDefault(_srcPanelVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      checked: true
	    };
	  },
	  components: {
	    accordion: _srcAccordionVue2['default'],
	    panel: _srcPanelVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(241)
	module.exports = __webpack_require__(75)
	module.exports.template = __webpack_require__(76)


/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      'default': false
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
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\n  <content></content>\n</div>";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)
	module.exports = __webpack_require__(80)
	module.exports.template = __webpack_require__(81)


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}", ""]);
	
	// exports


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      'default': false
	    },
	    header: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      height: 0
	    };
	  },
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  ready: function ready() {
	    var panel = this.$$.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    panel.style.maxHeight = this.height + 'px';
	    if (!this.isOpen) panel.style.display = 'none';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\"\n          v-on=\"click:toggleIsOpen(this)\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el=\"panel\"\n      v-show=\"isOpen\"\n      v-transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <content></content>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"accordion\">\n    <h1 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion one-at-atime=\"{{checked}}\">\n        <panel header=\"Panel #1\" is-open=\"true\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #2\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #3\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #4\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n\n<accordion one-at-atime=\"{{checked}}\">\n  <panel header=\"Panel #1\" is-open=\"true\">\n    ...\n  </panel>\n  <panel header=\"Panel #2\">\n    ...\n  </panel>\n  <panel header=\"Panel #3\">\n    ...\n  </panel>\n  <panel header=\"Panel #4\">\n    ...\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84)
	module.exports = __webpack_require__(86)
	module.exports.template = __webpack_require__(93)


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n    0%, 100% {transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}", ""]);
	
	// exports


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTooltipVue = __webpack_require__(87);
	
	var _srcTooltipVue2 = _interopRequireDefault(_srcTooltipVue);
	
	exports['default'] = {
	  components: {
	    tooltip: _srcTooltipVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88)
	module.exports = __webpack_require__(90)
	module.exports.template = __webpack_require__(92)


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _popoverMixinsJs = __webpack_require__(91);
	
	var _popoverMixinsJs2 = _interopRequireDefault(_popoverMixinsJs);
	
	exports['default'] = {
	  mixins: [_popoverMixinsJs2['default']],
	  props: {
	    trigger: {
	      type: String,
	      'default': 'hover'
	    },
	    effect: {
	      type: String,
	      'default': 'scale'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	var PopoverMixin = {
	  props: {
	    trigger: {
	      type: String,
	      'default': 'click'
	    },
	    effect: {
	      type: String,
	      'default': 'fadein'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      'default': true
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
	
	    var popover = this.$$.popover;
	    var triger = this.$$.trigger.children[0];
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _utilsEventListenerJs2['default'].listen(triger, 'mouseenter', function () {
	        return _this.show = true;
	      });
	      this._mouseleaveEvent = _utilsEventListenerJs2['default'].listen(triger, 'mouseleave', function () {
	        return _this.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _utilsEventListenerJs2['default'].listen(triger, 'focus', function () {
	        return _this.show = true;
	      });
	      this._blurEvent = _utilsEventListenerJs2['default'].listen(triger, 'blur', function () {
	        return _this.show = false;
	      });
	    } else {
	      this._clickEvent = _utilsEventListenerJs2['default'].listen(triger, 'click', this.toggle);
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
	
	exports['default'] = PopoverMixin;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<span v-el=\"trigger\">\n    <content>\n    </content>\n  </span>\n  <div class=\"tooltip\"\n    v-class=\"\n    top:placement === 'top',\n    left:placement === 'left',\n    right:placement === 'right',\n    bottom:placement === 'bottom'\n    \"\n    v-el=\"popover\"\n    v-show=\"show\"\n    v-transition=\"{{effect}}\"\n    role=\"tooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>";

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"affix\">\n    <h1 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix</a></h1>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95)
	module.exports.template = __webpack_require__(102)


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcAsideVue = __webpack_require__(96);
	
	var _srcAsideVue2 = _interopRequireDefault(_srcAsideVue);
	
	exports['default'] = {
	  components: {
	    sidebar: _srcAsideVue2['default']
	  },
	  data: function data() {
	    return {
	      showLeft: false,
	      showRight: false
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)
	module.exports = __webpack_require__(99)
	module.exports.template = __webpack_require__(101)


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".aside-open {\n    transition: transform 0.3s;\n  }\n  .aside-open.has-push-right {\n    transform: translateX(-300px);\n  }\n  .aside {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      z-index: 1049;\n      overflow: auto;\n      background: #fff;\n  }\n  .aside.left {\n    left: 0;\n    right: auto;\n  }\n  .aside.right {\n    left: auto;\n    right: 0;\n  }\n\n  .slideleft-enter {\n    animation:slideleft-in .3s;\n  }\n  .slideleft-leave {\n    animation:slideleft-out .3s;\n  }\n  @keyframes slideleft-in {\n    0% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideleft-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n  .slideright-enter {\n    animation:slideright-in .3s;\n  }\n  .slideright-leave {\n    animation:slideright-out .3s;\n  }\n  @keyframes slideright-in {\n    0% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideright-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n\n  .aside:focus {\n      outline: 0\n  }\n\n  @media (max-width: 991px) {\n      .aside {\n          min-width:240px\n      }\n  }\n\n  .aside.left {\n      right: auto;\n      left: 0\n  }\n\n  .aside.right {\n      right: 0;\n      left: auto\n  }\n\n  .aside .aside-dialog .aside-header {\n      border-bottom: 1px solid #e5e5e5;\n      min-height: 16.43px;\n      padding: 6px 15px;\n      background: #337ab7;\n      color: #fff\n  }\n\n  .aside .aside-dialog .aside-header .close {\n      margin-right: -8px;\n      padding: 4px 8px;\n      color: #fff;\n      font-size: 25px;\n      opacity: .8\n  }\n\n  .aside .aside-dialog .aside-body {\n      position: relative;\n      padding: 15px\n  }\n\n  .aside .aside-dialog .aside-footer {\n      padding: 15px;\n      text-align: right;\n      border-top: 1px solid #e5e5e5\n  }\n\n  .aside .aside-dialog .aside-footer .btn+.btn {\n      margin-left: 5px;\n      margin-bottom: 0\n  }\n\n  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n      margin-left: -1px\n  }\n\n  .aside .aside-dialog .aside-footer .btn-block+.btn-block {\n      margin-left: 0\n  }\n\n  .aside-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1040;\n      opacity: 0;\n      transition: opacity .3s ease;\n      background-color: #000\n  }\n\n\n  .aside-backdrop.in {\n      opacity: .5;\n      filter: alpha(opacity=50)\n  }", ""]);
	
	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	var _utilsGetScrollBarWidthJs = __webpack_require__(100);
	
	var _utilsGetScrollBarWidthJs2 = _interopRequireDefault(_utilsGetScrollBarWidthJs);
	
	exports['default'] = {
	  props: {
	    show: {
	      type: Boolean,
	      require: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      'default': 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: Number,
	      'default': '320'
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      var body = document.body;
	      backdrop.className = 'aside-backdrop';
	      var scrollBarWidth = (0, _utilsGetScrollBarWidthJs2['default'])();
	      if (val) {
	        body.appendChild(backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = backdrop.clientHeight;
	        backdrop.className += ' in';
	        this._clickEvent = _utilsEventListenerJs2['default'].listen(backdrop, 'click', this.close);
	      } else {
	        if (this._clickEvent) this._clickEvent.remove();
	        backdrop = document.querySelector('.aside-backdrop');
	        backdrop.className = 'aside-backdrop';
	        setTimeout(function () {
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	          body.removeChild(backdrop);
	        }, 300);
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function () {
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
	
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aside\"\n    v-style=\"width:width + 'px'\"\n    v-class=\"\n    left:placement === 'left',\n    right:placement === 'right'\n    \"\n    v-show=\"show\"\n    v-transition=\"{{this.placement === 'left' ? 'slideleft' : 'slideright'}}\">\n    <div class=\"aside-dialog\">\n      <div class=\"aside-content\">\n        <div class=\"aside-header\">\n          <button type=\"button\" class=\"close\" v-on='click:close'><span>&times;</span></button>\n          <h4 class=\"aside-title\">{{header}}</h4>\n        </div>\n        <div class=\"aside-body\">\n          <content></content>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"aside\">\n    <h1 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-success btn-lg\" v-on=\"click:showRight = true\">Show Aside on right</button>\n\n      <sidebar  show=\"{{@showRight}}\" placement=\"right\" header=\"Title\" width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n          <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" v-on=\"click:showRight=false\">Close</button>\n        </div>\n      </sidebar>\n\n      <button class=\"btn btn-danger btn-lg\" v-on=\"click:showLeft = true\">Show Aside on left</button>\n\n      <sidebar  show=\"{{@showLeft}}\" placement=\"left\" header=\"Title\" width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" v-on=\"click:showLeft=false\">Close</button>\n        </div>\n      </sidebar>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button\nclass=\"btn btn-success btn-lg\"\nv-on=\"click:showRight = true\">Show Aside on right</button>\n\n<sidebar show=\"{{@showRight}}\" placement=\"right\" header=\"Title\" width=\"350\">\n...\n</sidebar>\n\n<button\nclass=\"btn btn-danger btn-lg\"\nv-on=\"click:showLeft = true\">Show Aside on left</button>\n\n<sidebar show=\"{{@showLeft}}\" placement=\"left\" header=\"Title\" width=\"350\">\n...\n</sidebar></script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td></td>\n          <td>Whether show the component.</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\n          <td><code>right</code></td>\n          <td>how to position the component.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Header text of the aside component.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(104)
	module.exports.template = __webpack_require__(151)


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcCarouselVue = __webpack_require__(105);
	
	var _srcCarouselVue2 = _interopRequireDefault(_srcCarouselVue);
	
	var _srcSliderVue = __webpack_require__(148);
	
	var _srcSliderVue2 = _interopRequireDefault(_srcSliderVue);
	
	exports['default'] = {
	  components: {
	    carousel: _srcCarouselVue2['default'],
	    slider: _srcSliderVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106)
	module.exports = __webpack_require__(108)
	module.exports.template = __webpack_require__(147)


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-2949497a .carousel-control {\n    cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray = __webpack_require__(109)['default'];
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    indicators: {
	      type: Boolean,
	      'default': true
	    },
	    controls: {
	      type: Boolean,
	      'default': true
	    },
	    interval: {
	      type: Number,
	      'default': 5000
	    }
	  },
	  components: {
	    'indicator': {
	      inherit: true,
	      template: '<li v-repeat="indicator" v-on="click:handleIndicatorClick($index)" v-class="active:$index === activeIndex"</li>',
	      methods: {
	        handleIndicatorClick: function handleIndicatorClick(index) {
	          if (this.isAnimating) return false;
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
	        [].concat(_toConsumableArray(_this.slider)).forEach(function (el) {
	          return el.className = 'item';
	        });
	        selectedEl.classList.add('active');
	        _this.isAnimating = false;
	      };
	
	      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev');
	      // request property that requires layout to force a layout
	      var x = selectedEl.clientHeight;
	      this._prevSelectedEvent = _utilsEventListenerJs2['default'].listen(prevSelectedEl, 'transitionend', transitionendFn);
	      this._selectedEvent = _utilsEventListenerJs2['default'].listen(selectedEl, 'transitionend', transitionendFn);
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
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Array$from = __webpack_require__(110)["default"];
	
	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(112);
	__webpack_require__(134);
	module.exports = __webpack_require__(120).Array.from;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(113)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(116)(String, 'String', function(iterated){
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(114)
	  , defined   = __webpack_require__(115);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(117)
	  , $def            = __webpack_require__(118)
	  , $redef          = __webpack_require__(121)
	  , hide            = __webpack_require__(122)
	  , has             = __webpack_require__(127)
	  , SYMBOL_ITERATOR = __webpack_require__(128)('iterator')
	  , Iterators       = __webpack_require__(131)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(132)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(123).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(133)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(119)
	  , core      = __webpack_require__(120)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 119 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 120 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(122);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(123)
	  , createDesc = __webpack_require__(124);
	module.exports = __webpack_require__(125) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 124 */
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(126)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(129)('wks')
	  , Symbol = __webpack_require__(119).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(130))('Symbol.' + name));
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(119)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(123)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(122)(IteratorPrototype, __webpack_require__(128)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(124)(1,next)});
	  __webpack_require__(133)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(127)
	  , hide = __webpack_require__(122)
	  , TAG  = __webpack_require__(128)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(135)
	  , $def        = __webpack_require__(118)
	  , toObject    = __webpack_require__(137)
	  , call        = __webpack_require__(138)
	  , isArrayIter = __webpack_require__(141)
	  , toLength    = __webpack_require__(142)
	  , getIterFn   = __webpack_require__(143);
	$def($def.S + $def.F * !__webpack_require__(146)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(136);
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
/* 136 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(115);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(139);
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(140);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(131)
	  , ITERATOR  = __webpack_require__(128)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(114)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(144)
	  , ITERATOR  = __webpack_require__(128)('iterator')
	  , Iterators = __webpack_require__(131);
	module.exports = __webpack_require__(120).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(145)
	  , TAG = __webpack_require__(128)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(128)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide v-2949497a\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <indicator></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <content>\n    </content>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" v-on=\"click:prevClick\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" v-on=\"click:nextClick\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(149)
	module.exports.template = __webpack_require__(150)


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray = __webpack_require__(109)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	  computed: {
	    show: function show() {
	      return this.activeIndex === this.index;
	    }
	  },
	  ready: function ready() {
	    this.index = [].concat(_toConsumableArray(this.$el.parentNode.children)).indexOf(this.$el);
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<div class=\"item\">\n    <content></content>\n  </div>";

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"carousel\">\n    <h1 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel</a></h1>\n    <div class=\"bs-example\">\n      <carousel>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=one\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=two\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=three\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<carousel>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slider>\n</carousel>\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(153)
	module.exports.template = __webpack_require__(166)


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcRadioGroupVue = __webpack_require__(154);
	
	var _srcRadioGroupVue2 = _interopRequireDefault(_srcRadioGroupVue);
	
	var _srcRadioBtnVue = __webpack_require__(157);
	
	var _srcRadioBtnVue2 = _interopRequireDefault(_srcRadioBtnVue);
	
	var _srcCheckboxGroupVue = __webpack_require__(160);
	
	var _srcCheckboxGroupVue2 = _interopRequireDefault(_srcCheckboxGroupVue);
	
	var _srcCheckboxBtnVue = __webpack_require__(163);
	
	var _srcCheckboxBtnVue2 = _interopRequireDefault(_srcCheckboxBtnVue);
	
	exports['default'] = {
	  components: {
	    radio: _srcRadioBtnVue2['default'],
	    radioGroup: _srcRadioGroupVue2['default'],
	    checkboxGroup: _srcCheckboxGroupVue2['default'],
	    checkbox: _srcCheckboxBtnVue2['default']
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: ''
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(155)
	module.exports.template = __webpack_require__(156)


/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <content></content>\n  </div>";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(158)
	module.exports.template = __webpack_require__(159)


/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      "default": false
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
	    if (this.checked) this.$parent.value = this.value;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\n  v-class=\"active:active,\n  btn-success:type == 'success',\n  btn-warning:type == 'warning',\n  btn-info:type == 'info',\n  btn-danger:type == 'danger',\n  btn-default:type == 'default',\n  btn-primary:type == 'primary',\n  \">\n\n    <input type=\"radio\" autocomplete=\"off\"\n    checked=\"{{checked}}\"\n    v-on=\"click:handleClick\">\n\n    <content></content>\n\n  </label>";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(161)
	module.exports.template = __webpack_require__(162)


/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    value: {
	      type: Array,
	      'default': function _default() {
	        return [];
	      }
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <content></content>\n  </div>";

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(164)
	module.exports.template = __webpack_require__(165)


/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      "default": false
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
	    if (this.checked) this.$parent.value.push(this.value);
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\n  v-class=\"active:checked,\n  btn-success:type == 'success',\n  btn-warning:type == 'warning',\n  btn-info:type == 'info',\n  btn-danger:type == 'danger',\n  btn-default:type == 'default',\n  btn-primary:type == 'primary',\n  \">\n\n    <input type=\"checkbox\" autocomplete=\"off\"\n    checked=\"{{checked}}\"\n    v-on=\"click:handleClick\">\n\n    <content></content>\n\n  </label>";

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"buttons\">\n    <h1 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Buttons</a></h1>\n    <div class=\"bs-example\">\n      <h4>Checkbox</h4>\n      <checkbox-group value=\"{{checkboxValue}}\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\" checked>Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </checkbox-group>\n      <p>\n        <pre>\nCheckbox value: {{checkboxValue | json}}\n        </pre>\n      </p>\n      <hr>\n      <h4>Radio</h4>\n      <radio-group value=\"{{@radioValue}}\" type=\"primary\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n\n      <radio-group value=\"{{@radioValue}}\" type=\"success\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n      <p>\n        <pre>\nRadio value: {{radioValue}}\n        </pre>\n      </p>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<checkbox-group value=\"{{checkboxValue}}\">\n  <checkbox value=\"left\">Left</checkbox>\n  <checkbox value=\"middle\" checked>Middle</checkbox>\n  <checkbox value=\"right\">Right</checkbox>\n</checkbox-group>\n\n<radio-group value=\"{{@radioValue}}\" type=\"primary\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n<radio-group value=\"{{@radioValue}}\" type=\"success\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n</script></code></pre>\n\n    <h2>Group options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td>Array</td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of <code>default</code>\n          <code>primary</code>\n          <code>danger</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>success</code></td>\n          <td><code>default</code></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(168)
	module.exports.template = __webpack_require__(184)


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcDatepickerVue = __webpack_require__(169);
	
	var _srcDatepickerVue2 = _interopRequireDefault(_srcDatepickerVue);
	
	var _srcSelectVue = __webpack_require__(174);
	
	var _srcSelectVue2 = _interopRequireDefault(_srcSelectVue);
	
	var _srcOptionVue = __webpack_require__(179);
	
	var _srcOptionVue2 = _interopRequireDefault(_srcOptionVue);
	
	exports['default'] = {
	  components: {
	    datepicker: _srcDatepickerVue2['default'],
	    select: _srcSelectVue2['default'],
	    option: _srcOptionVue2['default']
	  },
	  data: function data() {
	    return {
	      disabled: [],
	      value: 'Oct/06/2015',
	      format: ['MMM/dd/yyyy']
	    };
	  },
	  watch: {
	    disabled: function disabled() {
	      this.$.dp.getDateRange();
	    },
	    format: function format() {
	      this.value = this.$.dp.stringify(new Date(this.value));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(170)
	module.exports = __webpack_require__(172)
	module.exports.template = __webpack_require__(173)


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-mouthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-mouthRange {\n  margin-top: 10px\n}\n.datepicker-mouthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-mouthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}", ""]);
	
	// exports


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      'default': 'MMMM/dd/yyyy'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      'default': function _default() {
	        return [];
	      }
	    },
	    width: {
	      type: String,
	      'default': '200px'
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMouthView: false,
	      displayYearView: false,
	      mouthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	    };
	  },
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
	    },
	    inputClick: function inputClick() {
	      if (this.displayMouthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, mouths, date);
	      } else {
	        this.currDate = new Date(year + 10, mouths, date);
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
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, mouths, date);
	      } else {
	        this.currDate = new Date(year + 1, mouths, date);
	      }
	    },
	    yearSelect: function yearSelect(el, e) {
	      e.stopPropagation();
	      this.displayYearView = false;
	      this.displayMouthView = true;
	      this.currDate = new Date(el.$el.innerHTML, this.currDate.getMonth(), this.currDate.getDate());
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
	    switchMouthView: function switchMouthView() {
	      this.displayDayView = false;
	      this.displayMouthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMouthView = false;
	      this.displayYearView = true;
	    },
	    mouthSelect: function mouthSelect(index) {
	      this.displayMouthView = false;
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
	      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMouth: function parseMouth(date) {
	      return this.mouthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var mouthName = this.parseMouth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, mouthName).replace(/MMM/g, mouthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
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
	      var _this = this;
	
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
	        for (var i = 1; i < firstDayWeek; i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function (i) {
	        var date = new Date(time.year, time.month, i);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	
	        if (i === time.day) {
	          if (_this.value) {
	            var valueDate = _this.parse(_this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this.dateRange.push({
	          text: i,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var i = 1; i <= dayCount; i++) {
	        _loop(i);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var i = 1; i <= nextMonthNeed; i++) {
	          this.dateRange.push({
	            text: i,
	            date: new Date(nextMonth.year, nextMonth.month, i),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _utilsEventListenerJs2['default'].listen(window, 'click', function (e) {
	      if (!_this2.$el.contains(e.target)) _this2.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "<div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" type=\"text\"\n    v-style=\"width:width\"\n    v-on=\"click:inputClick\"\n    v-model=\"value\"/>\n      <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n          <div class=\"datepicker-inner\">\n              <div class=\"datepicker-body\">\n                  <div class=\"datepicker-ctrl\">\n                      <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextMonthClick(0)\">&lt;</span>\n                      <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextMonthClick(1)\">&gt;</span>\n                      <p v-on=\"click:switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"datepicker-weekRange\">\n                      <span v-repeat=\"w:weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"datepicker-dateRange\">\n                      <span v-repeat=\"d:dateRange\" v-class=\"d.sclass\" v-on=\"click:daySelect(d.date,this)\">{{d.text}}</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayMouthView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextYearClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextYearClick(1)\">&gt;</span>\n                    <p v-on=\"click:switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange\">\n                    <span v-repeat=\"m:mouthNames\"\n                    v-class=\"datepicker-dateRange-item-active:\n                    (this.mouthNames[this.parse(this.value).getMonth()]  === m) &&\n                    this.currDate.getFullYear() === this.parse(this.value).getFullYear()\"\n                    v-on=\"click:mouthSelect($index)\">\n                      {{m.substr(0,3)}}\n                    </span>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextDecadeClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange decadeRange\">\n                    <span v-repeat=\"decade:decadeRange\"\n                    v-class=\"datepicker-dateRange-item-active:\n                    this.parse(this.value).getFullYear() === decade.text\"\n                    v-on=\"click:yearSelect(this,$event)\">\n                      {{decade.text}}\n                    </span>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(175)
	module.exports = __webpack_require__(177)
	module.exports.template = __webpack_require__(178)


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n   pointer-events: none;\n  opacity: .9;\n}", ""]);
	
	// exports


/***/ },
/* 177 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    value: {
	      twoWay: true,
	      type: Array,
	      'default': function _default() {
	        return [];
	      }
	    },
	    placeholder: {
	      type: String,
	      'default': 'Nothing Selected'
	    },
	    multiple: {
	      type: Boolean,
	      'default': false
	    },
	    limit: {
	      type: Number,
	      'default': 1024
	    }
	  },
	  data: function data() {
	    return {
	      show: false,
	      showNotify: false
	    };
	  },
	  computed: {
	    showPlaceholder: function showPlaceholder() {
	      return this.value.length <= 0;
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      var timeout = undefined;
	      if (timeout) clearTimeout(timeout);
	      if (val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        timeout = setTimeout(function () {
	          return _this.showNotify = false;
	        }, 1000);
	      }
	    }
	  },
	  methods: {
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" v-class=\"open:show\">\n    <button v-el=\"btn\" type=\"button\" class=\"btn btn-default dropdown-toggle\" v-on=\"click:toggleDropdown,blur:this.show = false\">\n          <span class=\"placeholder\" v-show=\"showPlaceholder\">\n            {{placeholder}}\n          </span>\n          <span class=\"content\">\n            {{value.join(', ')}}\n          </span>\n          <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <content></content>\n      <div class=\"notify\" v-show=\"showNotify\" v-transition=\"fadein\">Limit reached ({{limit}} items max).</div>\n    </ul>\n  </div>";

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(180)
	module.exports = __webpack_require__(182)
	module.exports.template = __webpack_require__(183)


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, "a span.check-mark {\n    position: absolute;\n    display: inline-block;\n    right: 15px;\n    margin-top: 5px;\n  }", ""]);
	
	// exports


/***/ },
/* 182 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
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
	      return this.$parent.value.indexOf(this.value) !== -1 ? true : false;
	    }
	  },
	  methods: {
	    handleClick: function handleClick(e) {
	      e.preventDefault();
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      if (parent.multiple) {
	        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      } else {
	        parent.value = [];
	        parent.value.push(this.value);
	        parent.show = false;
	      }
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "<li style=\"position:relative\">\n    <a v-on='mousedown:handleClick' style=\"cursor:pointer\">\n      <content></content>\n      <content select=\"span.text\">\n        {{value}}\n      </content>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\"></span>\n    </a>\n  </li>";

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"datepicker\">\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">Datepicker</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelected date is: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <datepicker v-ref=\"dp\" value=\"{{@value}}\" disabled-days-of-Week=\"{{disabled}}\"\n      format=\"{{format.toString()}}\"></datepicker>\n      <h4>Disabled days of week</h4>\n      <select multiple value=\"{{@disabled}}\">\n        <option value=\"{{(0).toString()}}\"></option>\n        <option value=\"{{(1).toString()}}\"></option>\n        <option value=\"{{(2).toString()}}\"></option>\n        <option value=\"{{(3).toString()}}\"></option>\n        <option value=\"{{(4).toString()}}\"></option>\n        <option value=\"{{(5).toString()}}\"></option>\n        <option value=\"{{(6).toString()}}\"></option>\n      </select>\n      <h4>Format</h4>\n      <select  value=\"{{@format}}\">\n        <option value=\"yyyy,MM,dd\"></option>\n        <option value=\"yyyy-MM-dd\"></option>\n        <option value=\"yyyy.MM.dd\"></option>\n        <option value=\"MMM/dd/yyyy\"></option>\n        <option value=\"MMMM/dd/yyyy\"></option>\n      </select>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<datepicker\n  value=\"{{@value}}\"\n  disabled-days-of-Week=\"{{disabled}}\"\n  format=\"{{format}}\">\n</datepicker>\n\n<select multiple value=\"{{@disabled}}\">\n  <option value=\"0\"></option>\n  <option value=\"1\"></option>\n  <option value=\"2\"></option>\n  <option value=\"3\"></option>\n  <option value=\"4\"></option>\n  <option value=\"5\"></option>\n  <option value=\"6\"></option>\n</select>\n<select  value=\"{{@format}}\">\n  <option value=\"yyyy,MM,dd\"></option>\n  <option value=\"yyyy-MM-dd\"></option>\n  <option value=\"yyyy.MM.dd\"></option>\n  <option value=\"MMM/dd/yyyy\"></option>\n  <option value=\"MMMM/dd/yyyy\"></option>\n</select>\n    </script></code></pre>\n    <h2>Option</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Value of the input DOM</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>Width of the input DOM</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>The date format, combination of d, dd, M, MM ,MMM , MMMM, yyyy.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\n             Multiple values should be comma-separated.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186)
	module.exports.template = __webpack_require__(190)


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcDropdownVue = __webpack_require__(187);
	
	var _srcDropdownVue2 = _interopRequireDefault(_srcDropdownVue);
	
	exports['default'] = {
	  components: {
	    dropdown: _srcDropdownVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(188)
	module.exports.template = __webpack_require__(189)


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListener = __webpack_require__(56);
	
	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);
	
	exports['default'] = {
	  methods: {
	    toggleDropdown: function toggleDropdown(e) {
	      e.preventDefault();
	      this.$el.classList.toggle('open');
	    }
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var toggle = el.querySelector('[data-toggle="dropdown"]');
	    toggle.style.borderRadius = '4px';
	    toggle.addEventListener('click', this.toggleDropdown);
	    this._closeEvent = _utilsEventListener2['default'].listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) el.classList.remove('open');
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\">\n    <content select=\"[data-toggle='dropdown']\" ></content>\n    <content select=\"ul.dropdown-menu\"></content>\n  </div>";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"dropdown\">\n    <h1 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown</a></h1>\n    <div class=\"bs-example\">\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n          Action\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"dropdown\">\n          Action <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\n          Action <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <div class=\"btn-group btn-group-justified\" role=\"group\">\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Left</a>\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Middle</a>\n        <dropdown>\n          <a href=\"#\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n            Dropdown <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </dropdown>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<dropdown>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n    Action\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</dropdown>\n</script></code></pre>\n    <h2>Usage</h2>\n    <p>\n      Just use as <a target=\"_blank\" href=\"http://getbootstrap.com/javascript/#dropdowns\">original Bootstrap way</a>.\n      Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.\n    </p>\n  </div>";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(192)
	module.exports.template = __webpack_require__(198)


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcModalVue = __webpack_require__(193);
	
	var _srcModalVue2 = _interopRequireDefault(_srcModalVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      showModal: false,
	      bigModal: false,
	      zoomModal: false,
	      showCustomModal: false
	    };
	  },
	  components: {
	    modal: _srcModalVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194)
	module.exports = __webpack_require__(196)
	module.exports.template = __webpack_require__(197)


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(195);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}", ""]);
	
	// exports


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsGetScrollBarWidthJs = __webpack_require__(100);
	
	var _utilsGetScrollBarWidthJs2 = _interopRequireDefault(_utilsGetScrollBarWidthJs);
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    title: {
	      type: String,
	      'default': ''
	    },
	    show: {
	      require: true,
	      type: Boolean,
	      twoWay: true
	    },
	    width: {
	      type: Number,
	      'default': 600
	    },
	    callback: {
	      type: Function,
	      'default': function _default() {}
	    },
	    effect: {
	      type: String,
	      'default': 'fade'
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _utilsGetScrollBarWidthJs2['default'])();
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
	        this._blurModalContentEvent = _utilsEventListenerJs2['default'].listen(this.$el, 'click', function (e) {
	          if (e.target === el) _this.show = false;
	        });
	      } else {
	        if (this._blurModalContentEvent) this._blurModalContentEvent.remove();
	        el.classList.remove('in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade\" role=\"dialog\"\n    v-class=\"\n    fade:effect === 'fade',\n    zoom:effect === 'zoom'\"\n    >\n    <div class=\"modal-dialog\" role=\"document\"\n      v-style=\"width: width + 'px'\n      \">\n      <div class=\"modal-content\">\n        <content select=\".modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" v-on='click:close'><span>&times;</span></button>\n            <h4 class=\"modal-title\" >{{title}}</h4>\n          </div>\n        </content>\n        <content select=\".modal-body\">\n          <div class=\"modal-body\"></div>\n        </content>\n        <content select=\".modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" v-on='click:close'>Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" v-on='click:callback'>Save changes</button>\n          </div>\n        </content>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"modal\">\n    <h1 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default btn-lg\" v-on=\"click:showModal = true\">Show modal</button>\n      <modal title=\"Modal title\" show=\"{{@showModal}}\" effect=\"fade\" width=\"400\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>Title</b></h4>\n        </div>\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-success btn-lg\" v-on=\"click:bigModal = true\">Big modal</button>\n      <modal title=\"Big Modal\" show=\"{{@bigModal}}\" effect=\"fade\" width=\"800\">\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-primary btn-lg\" v-on=\"click:zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" show=\"{{@zoomModal}}\" effect=\"zoom\" width=\"400\">\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-default btn-lg\" v-on=\"click:showCustomModal = true\">Show custom modal</button>\n      <modal show=\"{{@showCustomModal}}\" effect=\"fade\" width=\"400\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" v-on='click:showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" v-on='click:showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showModal = true\"\n  >Show modal\n</button>\n<modal show=\"{{@showModal}}\" effect=\"fade\" width=\"400\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-primary btn-lg\"\n  v-on=\"click:bigModal = true\">\n  Big modal\n</button>\n<modal title=\"Big Modal\" show=\"{{@bigModal}}\" effect=\"fade\" width=\"800\">\n  <div class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-success btn-lg\"\n  v-on=\"click:zoomModal = true\">\n  Zoom modal\n</button>\n<modal title=\"Zoom Modal\" show=\"{{@zoomModal}}\" effect=\"zoom\" width=\"400\">\n  <div class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showCustomModal = true\">\n  Show custom modal\n</button>\n<modal show=\"{{@showCustomModal}}\" effect=\"fade\" width=\"400\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div class=\"modal-body\">...</div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" v-on='click:showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"btn btn-success\" v-on='click:showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Title of the modal component.</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number</code></td>\n        <td><code>600</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>A callback Function when you click the modal primary button.</td>\n      </tr>\n    </tbody>\n  </table>\n  <h2>Usage</h2>\n  <p>\n    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\n    <code>&lt;div class=\"modal-title\"&gt;...&lt;/div&gt;</code> and\n    <code>&lt;div class=\"modal-footer\"&gt;...&lt;/div&gt;</code>.\n  </p>\n  </div>";

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(200)
	module.exports.template = __webpack_require__(206)


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcPopover = __webpack_require__(201);
	
	var _srcPopover2 = _interopRequireDefault(_srcPopover);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	  components: {
	    popover: _srcPopover2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(202)
	module.exports = __webpack_require__(204)
	module.exports.template = __webpack_require__(205)


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(203);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _popoverMixinsJs = __webpack_require__(91);
	
	var _popoverMixinsJs2 = _interopRequireDefault(_popoverMixinsJs);
	
	exports['default'] = {
	  mixins: [_popoverMixinsJs2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<span v-el=\"trigger\">\n    <content>\n    </content>\n  </span>\n  <div class=\"popover\"\n    v-class=\"\n    top:placement === 'top',\n    left:placement === 'left',\n    right:placement === 'right',\n    bottom:placement === 'bottom'\n    \"\n    v-el=\"popover\"\n    v-show=\"show\"\n    v-transition=\"{{effect}}\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-show=\"header\">{{title}}</h3>\n      <div class=\"popover-content\">\n        {{{content}}}\n      </div>\n  </div>";

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"popover\">\n    <h1 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover</a></h1>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">Popover on bottom</button>\n</popover>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(208)
	module.exports.template = __webpack_require__(212)


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcProgressbar = __webpack_require__(209);
	
	var _srcProgressbar2 = _interopRequireDefault(_srcProgressbar);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      dynamicData: [5, 15, 25, 35, 45],
	      stackedData: [10, 20, 30, 40]
	    };
	  },
	  components: {
	    progressbar: _srcProgressbar2['default']
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
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(210)
	module.exports.template = __webpack_require__(211)


/***/ },
/* 210 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    now: {
	      type: Number,
	      require: true
	    },
	    label: {
	      type: Boolean,
	      "default": false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      "default": false
	    },
	    animated: {
	      type: Boolean,
	      "default": false
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "<div class=\"progress-bar\" role=\"progressbar\"\n    v-class=\"\n    progress-bar-success:type == 'success',\n    progress-bar-warning:type == 'warning',\n    progress-bar-info:type == 'info',\n    progress-bar-danger:type == 'danger',\n    progress-bar-striped:striped,\n    active:animated\n    \"\n    v-style=\"width:now + '%'\">\n    {{label ? now + '%':'' }}\n  </div>";

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"progressbar\">\n    <h1 class=\"page-header\"><a href=\"#progressbar\" class=\"anchor\">Progressbar</a></h1>\n    <div class=\"bs-example\">\n      <h4>Static</h4>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"20\" type=\"success\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"40\" type=\"info\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"60\" type=\"primary\"></progressbar>\n          </div>\n        </div>\n      </div>\n\n      <hr>\n\n      <h4>\n        Dynamic\n        <button type=\"button\" class=\"btn btn-default\" v-on=\"click:dynamicClick\">Randomize</button>\n      </h4>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[0] * 2}}\" type=\"info\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[1] * 2}}\" type=\"warning\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[2] * 2}}\" type=\"danger\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[3] * 2}}\" type=\"success\" striped></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[4] * 2}}\" type=\"success\" striped animated></progressbar>\n      </div>\n\n      <hr>\n\n      <h4>\n        Stacked\n        <button type=\"button\" class=\"btn btn-default\" v-on=\"click:stackedClick\">Randomize</button>\n      </h4>\n\n      <div class=\"progress\">\n        <progressbar now=\"{{stackedData[0]}}\" label type=\"warning\" striped></progressbar>\n\n        <progressbar now=\"{{stackedData[1]}}\" label type=\"success\" ></progressbar>\n\n        <progressbar now=\"{{stackedData[2]}}\" label type=\"danger\"></progressbar>\n\n        <progressbar now=\"{{stackedData[3]}}\" label type=\"primary\" striped animated></progressbar>\n      </div>\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- Stacked -->\n<div class=\"progress\">\n  <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n\n  <progressbar now=\"\" label type=\"success\" ></progressbar>\n\n  <progressbar now=\"\" label type=\"danger\"></progressbar>\n\n  <progressbar now=\"\" label type=\"primary\" striped animated></progressbar>\n</div>\n<!-- Single -->\n<div class=\"progress\">\n  <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n</div>\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>now</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td>The current value of progress completed.</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Style type. Possible values are 'success', 'warning' etc.</td>\n        </tr>\n        <tr>\n          <td>label</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>Whether to show the label.</td>\n        </tr>\n        <tr>\n          <td>striped</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether the progressbar has striped effect or not.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(214)
	module.exports.template = __webpack_require__(215)


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcSelect = __webpack_require__(174);
	
	var _srcSelect2 = _interopRequireDefault(_srcSelect);
	
	var _srcOption = __webpack_require__(179);
	
	var _srcOption2 = _interopRequireDefault(_srcOption);
	
	exports['default'] = {
	  components: {
	    vSelect: _srcSelect2['default'],
	    vOption: _srcOption2['default']
	  },
	  data: function data() {
	    return {
	      single: [],
	      multiple: [],
	      multipleLimit: [],
	      custom: []
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"select\">\n    <h1 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select</a></h1>\n    <p>\n      This a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.\n    </p>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelect data : {{single}}\n        </pre>\n      </p>\n      <v-select value=\"{{@single}}\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select</h4>\n      <p>\n        <pre>\nSelect data : {{multiple.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple value=\"{{@multiple}}\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select limit</h4>\n      <p>\n        <pre>\nSelect data : {{multipleLimit.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple limit=\"2\" value=\"{{@multipleLimit}}\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Custom template</h4>\n      <p>\n        <pre>\nSelect data : {{custom.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple value=\"{{@custom}}\">\n        <v-option value=\"Star\"><span class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n        <v-option value=\"Heart\"><span class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n        <v-option value=\"Film\"><span class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n        <v-option value=\"Inbox\"><span class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n      </v-select>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-select>\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple limit=\"2\">\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Star\"><span class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n  <v-option value=\"Heart\"><span class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n  <v-option value=\"Film\"><span class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n  <v-option value=\"Inbox\"><span class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n</v-select>\n    </script></code></pre>\n    <h2>Select Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array</code></td>\n          <td><code>[]</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>Nothing Selected</td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>";

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(217)
	module.exports.template = __webpack_require__(228)


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTabset = __webpack_require__(218);
	
	var _srcTabset2 = _interopRequireDefault(_srcTabset);
	
	var _srcTab = __webpack_require__(223);
	
	var _srcTab2 = _interopRequireDefault(_srcTab);
	
	exports['default'] = {
	  components: {
	    tabs: _srcTabset2['default'],
	    tab: _srcTab2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)
	module.exports = __webpack_require__(221)
	module.exports.template = __webpack_require__(222)


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(220);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-97456a72 .nav-tabs {\n    margin-bottom: 15px\n}", ""]);
	
	// exports


/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    effect: {
	      type: String,
	      'default': 'fadein'
	    }
	  },
	  data: function data() {
	    return {
	      renderData: [],
	      activeIndex: 0
	    };
	  },
	  components: {
	    'tablist': {
	      inherit: true,
	      template: '<li v-on="click:handleTablistClick($event,$index,this)"\n        v-class="active:$index === activeIndex,\n        disabled:disabled === true">\n        <a href="#">\n        {{{header}}}\n        </a></li>',
	      methods: {
	        handleTablistClick: function handleTablistClick(e, index, el) {
	          e.preventDefault();
	          if (!el.disabled) this.activeIndex = index;
	        }
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-97456a72\">\n    <!-- Nav tabs -->\n     <ul class=\"nav nav-tabs\" role=\"tablist\">\n       <tablist v-repeat=\"renderData\"></tablist>\n     </ul>\n\n     <!-- Tab panes -->\n     <div class=\"tab-content\" v-el=\"tabContent\">\n       <content></content>\n     </div>\n\n  </div>";

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)
	module.exports = __webpack_require__(226)
	module.exports.template = __webpack_require__(227)


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(225);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-903c5e2a .tab-content > .tab-pane {\n    display: block;\n}\n.v-903c5e2a .tab-content > .tab-pane.hide {\n    position: absolute;\n}", ""]);
	
	// exports


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _toConsumableArray = __webpack_require__(109)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      "default": false
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
	      return this.$parent.activeIndex === this.index;
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
	    this.index = [].concat(_toConsumableArray(this.$el.parentNode.children)).indexOf(this.$el);
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<div role=\"tabpanel\" class=\"tab-pane v-903c5e2a\" v-class=\"hide:!show\" v-show=\"show\" v-transition=\"{{transition}}\">\n    <content></content>\n  </div>";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tabs\">\n    <h1 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs</a></h1>\n    <div class=\"bs-example\">\n      <tabs>\n        <tab header=\"one\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n        </tab>\n        <tab header=\"two\">\n           <p>\n              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\n           </p>\n        </tab>\n        <tab header=\"three\" disabled>\n          ...\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"one\">\n    ...\n  </tab>\n  <tab header=\"two\">\n    ...\n  </tab>\n  <tab header=\"three\" disabled>\n    ...\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab Options (NOT TABS)</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>Whether tab is clickable and can be activated. </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(230)
	module.exports.template = __webpack_require__(231)


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTooltip = __webpack_require__(87);
	
	var _srcTooltip2 = _interopRequireDefault(_srcTooltip);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	  components: {
	    tooltip: _srcTooltip2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tooltip\">\n    <h1 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip</a></h1>\n    <div class=\"bs-example\">\n      <tooltip  header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">tooltip on top</button>\n      </tooltip>\n      <tooltip  header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">tooltip on left</button>\n      </tooltip>\n      <tooltip  header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">tooltip on right</button>\n      </tooltip>\n      <tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">tooltip on bottom</button>\n      </tooltip>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n        effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n    content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tooltip\n  effect=\"scale\"\n  placement=\"bottom\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">tooltip on bottom</button>\n</tooltip>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>hover</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the tooltip is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>\n        <td><code>scale</code></td>\n        <td></td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the tooltip.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(233)
	module.exports.template = __webpack_require__(240)


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTypeahead = __webpack_require__(234);
	
	var _srcTypeahead2 = _interopRequireDefault(_srcTypeahead);
	
	var _srcTooltip = __webpack_require__(87);
	
	var _srcTooltip2 = _interopRequireDefault(_srcTooltip);
	
	exports['default'] = {
	  components: {
	    typeahead: _srcTypeahead2['default'],
	    tooltip: _srcTooltip2['default']
	  },
	  data: function data() {
	    return {
	      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	      asynchronous: '{{formatted_address}}',
	      customTemplate: '<img width="18px" height="18px" v-attr="src:avatar_url"/> <span>{{login}}</span>'
	    };
	  },
	  methods: {
	    googleCallback: function googleCallback(items, targetVM) {
	      var that = targetVM.$parent;
	      that.reset();
	      that.query = items.formatted_address;
	    },
	    githubCallback: function githubCallback(items) {
	      window.open(items.html_url, '_blank');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(235)
	module.exports = __webpack_require__(237)
	module.exports.template = __webpack_require__(239)


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-menu > li > a {\n  cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsCallAjaxJs = __webpack_require__(238);
	
	var _utilsCallAjaxJs2 = _interopRequireDefault(_utilsCallAjaxJs);
	
	var typeahead = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	  components: {
	    list: {
	      inherit: true,
	      template: '',
	      created: function created() {
	        this.$options.template = '<li v-repeat="items" v-class="active: isActive($index)"><a v-on="mousedown:hit,mousemove: setActive($index)">' + this.template + '</a></li>';
	      }
	    }
	  },
	  props: {
	    data: {
	      type: Array
	    },
	    limit: {
	      type: Number,
	      'default': 8
	    },
	    async: {
	      type: String
	    },
	    template: {
	      'default': '<span v-html="$value | highlight query"></span>'
	    },
	    key: {
	      type: String
	    },
	    matchCase: {
	      type: Boolean,
	      'default': false
	    },
	    onHit: {
	      type: Function,
	      'default': function _default(items) {
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
	          return value.indexOf(_this.query) !== -1;
	        }).slice(0, this.limit);
	      }
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
	        (0, _utilsCallAjaxJs2['default'])(this.async + this.query, function (data) {
	          _this2.items = data[_this2.key].slice(0, _this2.limit);
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
	      this.onHit(this.items[this.current], e.targetVM);
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
	exports['default'] = typeahead;
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (url, callback) {
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
	    httpRequest.send();
	};
	
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\"\n  v-class=\"open:showDropdown\"\n  >\n  <input type=\"text\" class=\"form-control\"\n  placeholder=\"{{placeholder}}\"\n  autocomplete=\"off\"\n  v-model=\"query\"\n  v-on=\"\n  input: update,\n  keydown: up|key 'up',\n  keydown: down | key 'down',\n  keydown: hit|key 'enter',\n  keydown: reset|key 'esc',\n  blur:showDropdown = false\n  \"\n  />\n  <ul class=\"dropdown-menu\" v-el=\"dropdown\">\n  <list></list>\n  </ul>\n</div>";

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"typeahead\">\n    <h1 class=\"page-header\"><a href=\"#typeahead\" class=\"anchor\">Typeahead</a></h1>\n    <div class=\"bs-example\">\n      <h4>\n        Static arrays\n      </h4>\n      <typeahead data=\"{{USstate}}\" placeholder=\"USA states\"></typeahead>\n      <hr>\n      <h4>\n      Asynchronous results\n      <tooltip trigger=\"click\" content=\"The suggestions via a Google Map API, are you behind a FireWall?\" placement=\"top\">\n        <small style=\"cursor:pointer\">(not working?)</small>\n      </tooltip>\n      </h4>\n      <typeahead placeholder=\"Address, async via maps.googleapis.com\"\n      key=\"results\" async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\" template=\"{{asynchronous}}\"\n      on-hit=\"{{googleCallback}}\"></typeahead>\n      <hr>\n      <h4>\n      Custom templates for results\n      </h4>\n      <typeahead placeholder=\"Github users, async via api.github.com\"\n      key=\"items\" async=\"https://api.github.com/search/users?q=\" template=\"{{customTemplate}}\"\n      on-hit=\"{{githubCallback}}\"></typeahead>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>Static arrays</h4>\n<typeahead\n  data=\"{{USstate}}\"\n  placeholder=\"USA states\">\n</typeahead>\n\n<h4>Asynchronous results</h4>\n  <typeahead\n    placeholder=\"Address, async via maps.googleapis.com\"\n    key=\"results\"\n    src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n    template=\"{{asynchronous}}\"\n    on-hit=\"{{googleCallback}}\">\n</typeahead>\n\n<h4>Custom templates for results</h4>\n  <typeahead\n    placeholder=\"Github users, async via api.github.com\"\n    key=\"items\"\n    src=\"https://api.github.com/search/users?q=\"\n    template=\"{{customTemplate}}\"\n    on-hit=\"{{githubCallback}}\">\n</typeahead>\n  </script></code></pre>\n    <pre><code class=\"language-javascript\"><script type=\"language-javascript\">\nnew Vue {\n  components: {\n    typeahead\n  },\n  data() {\n    return {\n      USstate: ['Alabama', 'Alaska', 'Arizona',...],\n      asynchronous: '{{formatted_address}}',\n      customTemplate: '<img width=\"18px\" height=\"18px\" v-attr=\"src:avatar_url\"/>' +\n      '<span>{{login}}</span>'\n    }\n  },\n  methods: {\n    googleCallback(items, targetVM) {\n      const that = targetVM.$parent\n      that.reset()\n      that.query = items.formatted_address\n    },\n    githubCallback(items) {\n      window.open(items.html_url, '_blank')\n    }\n  }\n}\n    </script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>The local data source for suggestions. Expected to be a primitive array.</td>\n        </tr>\n        <tr>\n          <td>async</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>8</code></td>\n          <td>The max number of suggestions to be displayed.</td>\n        </tr>\n        <tr>\n          <td>key</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The remote JSON key you want to render.</td>\n        </tr>\n        <tr>\n          <td>match-case</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Case sensitive for suggestions.</td>\n        </tr>\n        <tr>\n          <td>on-hit</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>A callback function when you click or hit return on an item.</td>\n        </tr>\n        <tr>\n          <td>template</td>\n          <td><code>String</code></td>\n          <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>\n          <td>Used to render suggestion.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< HEAD
	module.exports = __webpack_require__(242);


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(243);


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(244);
	
	__webpack_require__(428);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel/polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(245);
	__webpack_require__(277);
	__webpack_require__(283);
	__webpack_require__(285);
	__webpack_require__(287);
	__webpack_require__(289);
	__webpack_require__(291);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(321);
	__webpack_require__(322);
	__webpack_require__(323);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	__webpack_require__(328);
	__webpack_require__(329);
	__webpack_require__(330);
	__webpack_require__(331);
	__webpack_require__(332);
	__webpack_require__(333);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(336);
	__webpack_require__(337);
	__webpack_require__(339);
	__webpack_require__(344);
	__webpack_require__(345);
	__webpack_require__(349);
	__webpack_require__(350);
	__webpack_require__(352);
	__webpack_require__(353);
	__webpack_require__(358);
	__webpack_require__(359);
	__webpack_require__(362);
	__webpack_require__(364);
	__webpack_require__(366);
	__webpack_require__(368);
	__webpack_require__(369);
	__webpack_require__(370);
	__webpack_require__(372);
	__webpack_require__(373);
	__webpack_require__(375);
	__webpack_require__(376);
	__webpack_require__(377);
	__webpack_require__(378);
	__webpack_require__(384);
	__webpack_require__(387);
	__webpack_require__(388);
	__webpack_require__(390);
	__webpack_require__(391);
	__webpack_require__(392);
	__webpack_require__(393);
	__webpack_require__(394);
	__webpack_require__(395);
	__webpack_require__(396);
	__webpack_require__(397);
	__webpack_require__(398);
	__webpack_require__(399);
	__webpack_require__(400);
	__webpack_require__(401);
	__webpack_require__(403);
	__webpack_require__(404);
	__webpack_require__(405);
	__webpack_require__(406);
	__webpack_require__(407);
	__webpack_require__(408);
	__webpack_require__(410);
	__webpack_require__(411);
	__webpack_require__(412);
	__webpack_require__(413);
	__webpack_require__(415);
	__webpack_require__(416);
	__webpack_require__(418);
	__webpack_require__(419);
	__webpack_require__(421);
	__webpack_require__(422);
	__webpack_require__(423);
	__webpack_require__(426);
	__webpack_require__(427);
	module.exports = __webpack_require__(257);

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                = __webpack_require__(246)
	  , SUPPORT_DESC     = __webpack_require__(247)
	  , createDesc       = __webpack_require__(249)
	  , html             = __webpack_require__(250)
	  , cel              = __webpack_require__(252)
	  , has              = __webpack_require__(254)
	  , cof              = __webpack_require__(255)
	  , $def             = __webpack_require__(256)
	  , invoke           = __webpack_require__(261)
	  , arrayMethod      = __webpack_require__(262)
	  , IE_PROTO         = __webpack_require__(260)('__proto__')
	  , isObject         = __webpack_require__(253)
	  , anObject         = __webpack_require__(273)
	  , aFunction        = __webpack_require__(264)
	  , toObject         = __webpack_require__(266)
	  , toIObject        = __webpack_require__(274)
	  , toInteger        = __webpack_require__(269)
	  , toIndex          = __webpack_require__(275)
	  , toLength         = __webpack_require__(268)
	  , IObject          = __webpack_require__(265)
	  , fails            = __webpack_require__(248)
	  , ObjectProto      = Object.prototype
	  , A                = []
	  , _slice           = A.slice
	  , _join            = A.join
	  , defineProperty   = $.setDesc
	  , getOwnDescriptor = $.getDesc
	  , defineProperties = $.setDescs
	  , $indexOf         = __webpack_require__(276)(false)
	  , factories        = {}
	  , IE8_DOM_DEFINE;
	
	if(!SUPPORT_DESC){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$def($def.S + $def.F * !SUPPORT_DESC, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~$indexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$def($def.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$def($def.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = _slice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(_slice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	var buggySlice = fails(function(){
	  if(html)_slice.call(html);
	});
	
	$def($def.P + $def.F * buggySlice, 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return _slice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$def($def.P + $def.F * (IObject != Object), 'Array', {
	  join: function(){
	    return _join.apply(IObject(this), arguments);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$def($def.S, 'Array', {isArray: __webpack_require__(270)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	$def($def.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(arrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(arrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(arrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(arrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(arrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize($indexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$def($def.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS and old webkit had a broken Date implementation.
	var date       = new Date(-5e13 - 1)
	  , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
	      && fails(function(){ new Date(NaN).toISOString(); }));
	$def($def.P + $def.F * brokenDate, 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(248)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 249 */
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
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(251).document && document.documentElement;

/***/ },
/* 251 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(253)
	  , document = __webpack_require__(251).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 254 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 255 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var global     = __webpack_require__(251)
	  , core       = __webpack_require__(257)
	  , hide       = __webpack_require__(258)
	  , $redef     = __webpack_require__(259)
	  , PROTOTYPE  = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    if(type & $def.B && own)exp = ctx(out, global);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)$redef(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 257 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(246)
	  , createDesc = __webpack_require__(249);
	module.exports = __webpack_require__(247) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(251)
	  , hide      = __webpack_require__(258)
	  , SRC       = __webpack_require__(260)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(257).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    if(!('name' in val))val.name = key;
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 260 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 261 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(263)
	  , isObject = __webpack_require__(253)
	  , IObject  = __webpack_require__(265)
	  , toObject = __webpack_require__(266)
	  , toLength = __webpack_require__(268)
	  , isArray  = __webpack_require__(270)
	  , SPECIES  = __webpack_require__(271)('species');
	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var ASC = function(original, length){
	  var C;
	  if(isArray(original) && isObject(C = original.constructor)){
	    C = C[SPECIES];
	    if(C === null)C = undefined;
	  } return new(C === undefined ? Array : C)(length);
	};
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? ASC($this, length) : IS_FILTER ? ASC($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(264);
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
/* 264 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(255);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(267);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 267 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(269)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 269 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(255);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(272)('wks')
	  , Symbol = __webpack_require__(251).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(260))('Symbol.' + name));
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(251)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(253);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(265)
	  , defined = __webpack_require__(267);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(269)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(274)
	  , toLength  = __webpack_require__(268)
	  , toIndex   = __webpack_require__(275);
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
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(246)
	  , global         = __webpack_require__(251)
	  , has            = __webpack_require__(254)
	  , SUPPORT_DESC   = __webpack_require__(247)
	  , $def           = __webpack_require__(256)
	  , $redef         = __webpack_require__(259)
	  , $fails         = __webpack_require__(248)
	  , shared         = __webpack_require__(272)
	  , setTag         = __webpack_require__(278)
	  , uid            = __webpack_require__(260)
	  , wks            = __webpack_require__(271)
	  , keyOf          = __webpack_require__(279)
	  , $names         = __webpack_require__(280)
	  , enumKeys       = __webpack_require__(281)
	  , isArray        = __webpack_require__(270)
	  , isObject       = __webpack_require__(253)
	  , anObject       = __webpack_require__(273)
	  , toIObject      = __webpack_require__(274)
	  , createDesc     = __webpack_require__(249)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = SUPPORT_DESC && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
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
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
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
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(SUPPORT_DESC && !__webpack_require__(282)){
	    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = wks(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);
	
	setter = true;
	
	$def($def.G + $def.W, {Symbol: $Symbol});
	
	$def($def.S, 'Symbol', symbolStatics);
	
	$def($def.S + $def.F * !useNative, 'Object', {
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
	$JSON && $def($def.S + $def.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(254)
	  , hide = __webpack_require__(258)
	  , TAG  = __webpack_require__(271)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(246)
	  , toIObject = __webpack_require__(274);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString  = {}.toString
	  , toIObject = __webpack_require__(274)
	  , getNames  = __webpack_require__(246).getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(246);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(256);
	
	$def($def.S + $def.F, 'Object', {assign: __webpack_require__(284)});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var toObject = __webpack_require__(266)
	  , IObject  = __webpack_require__(265)
	  , enumKeys = __webpack_require__(281)
	  , has      = __webpack_require__(254);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(248)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){   // eslint-disable-line no-unused-vars
	  var T = toObject(target)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = IObject(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(has(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $def = __webpack_require__(256);
	$def($def.S, 'Object', {
	  is: __webpack_require__(286)
	});

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(256);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(288).set});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(246).getDesc
	  , isObject = __webpack_require__(253)
	  , anObject = __webpack_require__(273);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(263)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(290)
	  , test    = {};
	test[__webpack_require__(271)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(259)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(255)
	  , TAG = __webpack_require__(271)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(253);
	
	__webpack_require__(292)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(256)
	    , fn   = (__webpack_require__(257).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(248)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(253);
	
	__webpack_require__(292)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(253);
	
	__webpack_require__(292)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(253);
	
	__webpack_require__(292)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(253);
	
	__webpack_require__(292)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(253);
	
	__webpack_require__(292)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(274);
	
	__webpack_require__(292)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(266);
	
	__webpack_require__(292)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(266);
	
	__webpack_require__(292)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(292)('getOwnPropertyNames', function(){
	  return __webpack_require__(280).get;
	});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(246).setDesc
	  , createDesc = __webpack_require__(249)
	  , has        = __webpack_require__(254)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(247) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(246)
	  , isObject      = __webpack_require__(253)
	  , HAS_INSTANCE  = __webpack_require__(271)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(246)
	  , global     = __webpack_require__(251)
	  , has        = __webpack_require__(254)
	  , cof        = __webpack_require__(255)
	  , isObject   = __webpack_require__(253)
	  , fails      = __webpack_require__(248)
	  , NUMBER     = 'Number'
	  , $Number    = global[NUMBER]
	  , Base       = $Number
	  , proto      = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF = cof($.create(proto)) == NUMBER;
	var toPrimitive = function(it){
	  var fn, val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to number");
	};
	var toNumber = function(it){
	  if(isObject(it))it = toPrimitive(it);
	  if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
	    var binary = false;
	    switch(it.charCodeAt(1)){
	      case 66 : case 98  : binary = true;
	      case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
	    }
	  } return +it;
	};
	if(!($Number('0o1') && $Number('0b1'))){
	  $Number = function Number(it){
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(247) ? $.getNames(Base) : (
	      // ES3:
	      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	      // ES6 (in case, if modules with ES6 Number statics required before):
	      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	    ).split(','), function(key){
	      if(has(Base, key) && !has($Number, key)){
	        $.setDesc($Number, key, $.getDesc(Base, key));
	      }
	    }
	  );
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(259)(global, NUMBER, $Number);
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $def      = __webpack_require__(256)
	  , _isFinite = __webpack_require__(251).isFinite;
	
	$def($def.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Number', {isInteger: __webpack_require__(308)});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(253)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $def      = __webpack_require__(256)
	  , isInteger = __webpack_require__(308)
	  , abs       = Math.abs;
	
	$def($def.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Number', {parseInt: parseInt});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $def   = __webpack_require__(256)
	  , log1p  = __webpack_require__(316)
	  , sqrt   = Math.sqrt
	  , $acosh = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509 
	$def($def.S + $def.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 316 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $def = __webpack_require__(256);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$def($def.S, 'Math', {asinh: asinh});

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $def = __webpack_require__(256)
	  , sign = __webpack_require__(320);
	
	$def($def.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 320 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $def = __webpack_require__(256)
	  , exp  = Math.exp;
	
	$def($def.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {expm1: __webpack_require__(324)});

/***/ },
/* 324 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $def  = __webpack_require__(256)
	  , sign  = __webpack_require__(320)
	  , pow   = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$def($def.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $def = __webpack_require__(256)
	  , abs  = Math.abs;
	
	$def($def.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , len  = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < len){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $def = __webpack_require__(256);
	
	// WebKit fails with big numbers
	$def($def.S + $def.F * __webpack_require__(248)(function(){
	  return Math.imul(0xffffffff, 5) != -5;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {log1p: __webpack_require__(316)});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {sign: __webpack_require__(320)});

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $def  = __webpack_require__(256)
	  , expm1 = __webpack_require__(324)
	  , exp   = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$def($def.S + $def.F * __webpack_require__(248)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $def  = __webpack_require__(256)
	  , expm1 = __webpack_require__(324)
	  , exp   = Math.exp;
	
	$def($def.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var $def    = __webpack_require__(256)
	  , toIndex = __webpack_require__(275)
	  , fromCharCode = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res = []
	      , len = arguments.length
	      , i   = 0
	      , code;
	    while(len > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var $def      = __webpack_require__(256)
	  , toIObject = __webpack_require__(274)
	  , toLength  = __webpack_require__(268);
	
	$def($def.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl = toIObject(callSite.raw)
	      , len = toLength(tpl.length)
	      , sln = arguments.length
	      , res = []
	      , i   = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < sln)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(338)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	var $def    = __webpack_require__(256)
	  , defined = __webpack_require__(267)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	module.exports = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $def($def.P + $def.F * __webpack_require__(248)(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(340)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(341)(String, 'String', function(iterated){
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
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(269)
	  , defined   = __webpack_require__(267);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(282)
	  , $def            = __webpack_require__(256)
	  , $redef          = __webpack_require__(259)
	  , hide            = __webpack_require__(258)
	  , has             = __webpack_require__(254)
	  , SYMBOL_ITERATOR = __webpack_require__(271)('iterator')
	  , Iterators       = __webpack_require__(342)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(343)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(246).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(278)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 342 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(246)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(258)(IteratorPrototype, __webpack_require__(271)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(249)(1,next)});
	  __webpack_require__(278)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def = __webpack_require__(256)
	  , $at  = __webpack_require__(340)(false);
	$def($def.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $def      = __webpack_require__(256)
	  , toLength  = __webpack_require__(268)
	  , context   = __webpack_require__(346)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$def($def.P + $def.F * __webpack_require__(348)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments[1]
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(347)
	  , defined  = __webpack_require__(267);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(253)
	  , cof      = __webpack_require__(255)
	  , MATCH    = __webpack_require__(271)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[__webpack_require__(271)('match')] = false;
	      return !'/./'[KEY](re);
	    } catch(e){ /* empty */ }
	  } return true;
	};

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $def     = __webpack_require__(256)
	  , context  = __webpack_require__(346)
	  , INCLUDES = 'includes';
	
	$def($def.P + $def.F * __webpack_require__(348)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments[1]);
	  }
	});

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(256);
	
	$def($def.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(351)
	});

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(269)
	  , defined   = __webpack_require__(267);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $def        = __webpack_require__(256)
	  , toLength    = __webpack_require__(268)
	  , context     = __webpack_require__(346)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$def($def.P + $def.F * __webpack_require__(348)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments[1], that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(263)
	  , $def        = __webpack_require__(256)
	  , toObject    = __webpack_require__(266)
	  , call        = __webpack_require__(354)
	  , isArrayIter = __webpack_require__(355)
	  , toLength    = __webpack_require__(268)
	  , getIterFn   = __webpack_require__(356);
	$def($def.S + $def.F * !__webpack_require__(357)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(273);
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
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(342)
	  , ITERATOR  = __webpack_require__(271)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(290)
	  , ITERATOR  = __webpack_require__(271)('iterator')
	  , Iterators = __webpack_require__(342);
	module.exports = __webpack_require__(257).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(271)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def = __webpack_require__(256);
	
	// WebKit Array.of isn't generic
	$def($def.S + $def.F * __webpack_require__(248)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , length = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(length);
	    while(length > index)result[index] = arguments[index++];
	    result.length = length;
	    return result;
	  }
	});

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(360)
	  , step       = __webpack_require__(361)
	  , Iterators  = __webpack_require__(342)
	  , toIObject  = __webpack_require__(274);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(341)(Array, 'Array', function(iterated, kind){
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
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(271)('unscopables');
	if([][UNSCOPABLES] == undefined)__webpack_require__(258)(Array.prototype, UNSCOPABLES, {});
	module.exports = function(key){
	  [][UNSCOPABLES][key] = true;
	};

/***/ },
/* 361 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(363)(Array);

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(246)
	  , SPECIES = __webpack_require__(271)('species');
	module.exports = function(C){
	  if(__webpack_require__(247) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var $def = __webpack_require__(256);
	
	$def($def.P, 'Array', {copyWithin: __webpack_require__(365)});
	
	__webpack_require__(360)('copyWithin');

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(266)
	  , toIndex  = __webpack_require__(275)
	  , toLength = __webpack_require__(268);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments[2]
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $def = __webpack_require__(256);
	
	$def($def.P, 'Array', {fill: __webpack_require__(367)});
	
	__webpack_require__(360)('fill');

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(266)
	  , toIndex  = __webpack_require__(275)
	  , toLength = __webpack_require__(268);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this, true)
	    , length = toLength(O.length)
	    , index  = toIndex(arguments[1], length)
	    , end    = arguments[2]
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var KEY    = 'find'
	  , $def   = __webpack_require__(256)
	  , forced = true
	  , $find  = __webpack_require__(262)(5);
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$def($def.P + $def.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments[1]);
	  }
	});
	__webpack_require__(360)(KEY);

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var KEY    = 'findIndex'
	  , $def   = __webpack_require__(256)
	  , forced = true
	  , $find  = __webpack_require__(262)(6);
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$def($def.P + $def.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments[1]);
	  }
	});
	__webpack_require__(360)(KEY);

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(246)
	  , global   = __webpack_require__(251)
	  , isRegExp = __webpack_require__(347)
	  , $flags   = __webpack_require__(371)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(247) && (!CORRECT_NEW || __webpack_require__(248)(function(){
	  re2[__webpack_require__(271)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(259)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(363)($RegExp);

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(273);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)result += 'g';
	  if(that.ignoreCase)result += 'i';
	  if(that.multiline)result += 'm';
	  if(that.unicode)result += 'u';
	  if(that.sticky)result += 'y';
	  return result;
	};

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(246);
	if(__webpack_require__(247) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(371)
	});

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(374)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = function(KEY, length, exec){
	  var defined  = __webpack_require__(267)
	    , SYMBOL   = __webpack_require__(271)(KEY)
	    , original = ''[KEY];
	  if(__webpack_require__(248)(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    __webpack_require__(259)(String.prototype, KEY, exec(defined, SYMBOL, original));
	    __webpack_require__(258)(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(374)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(374)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(374)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(246)
	  , LIBRARY    = __webpack_require__(282)
	  , global     = __webpack_require__(251)
	  , ctx        = __webpack_require__(263)
	  , classof    = __webpack_require__(290)
	  , $def       = __webpack_require__(256)
	  , isObject   = __webpack_require__(253)
	  , anObject   = __webpack_require__(273)
	  , aFunction  = __webpack_require__(264)
	  , strictNew  = __webpack_require__(379)
	  , forOf      = __webpack_require__(380)
	  , setProto   = __webpack_require__(288).set
	  , same       = __webpack_require__(286)
	  , species    = __webpack_require__(363)
	  , SPECIES    = __webpack_require__(271)('species')
	  , RECORD     = __webpack_require__(260)('record')
	  , asap       = __webpack_require__(381)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(247)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(383)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(278)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(257)[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(357)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 379 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(263)
	  , call        = __webpack_require__(354)
	  , isArrayIter = __webpack_require__(355)
	  , anObject    = __webpack_require__(273)
	  , toLength    = __webpack_require__(268)
	  , getIterFn   = __webpack_require__(356);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(251)
	  , macrotask = __webpack_require__(382).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , isNode    = __webpack_require__(255)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    if(domain)domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	}
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(263)
	  , invoke             = __webpack_require__(261)
	  , html               = __webpack_require__(250)
	  , cel                = __webpack_require__(252)
	  , global             = __webpack_require__(251)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(255)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(259);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(385);
	
	// 23.1 Map Objects
	__webpack_require__(386)('Map', function(get){
	  return function Map(){ return get(this, arguments[0]); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(246)
	  , hide         = __webpack_require__(258)
	  , ctx          = __webpack_require__(263)
	  , species      = __webpack_require__(363)
	  , strictNew    = __webpack_require__(379)
	  , defined      = __webpack_require__(267)
	  , forOf        = __webpack_require__(380)
	  , step         = __webpack_require__(361)
	  , ID           = __webpack_require__(260)('id')
	  , $has         = __webpack_require__(254)
	  , isObject     = __webpack_require__(253)
	  , isExtensible = Object.isExtensible || isObject
	  , SUPPORT_DESC = __webpack_require__(247)
	  , SIZE         = SUPPORT_DESC ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(383)(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments[1], 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(SUPPORT_DESC)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    __webpack_require__(341)(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    species(C);
	    species(__webpack_require__(257)[NAME]); // for wrapper
	  }
	};

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global     = __webpack_require__(251)
	  , $def       = __webpack_require__(256)
	  , forOf      = __webpack_require__(380)
	  , strictNew  = __webpack_require__(379);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    __webpack_require__(259)(proto, KEY,
	      KEY == 'delete' ? function(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'has' ? function has(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'get' ? function get(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	      : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !__webpack_require__(248)(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    __webpack_require__(383)(C.prototype, methods);
	  } else {
	    var inst  = new C
	      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
	      , buggyZero;
	    // wrap for init collections from iterable
	    if(!__webpack_require__(357)(function(iter){ new C(iter); })){ // eslint-disable-line no-new
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || inst.forEach(function(val, key){
	      buggyZero = 1 / key === -Infinity;
	    });
	    // fix converting -0 key to +0
	    if(buggyZero){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    // + fix .add & .set for chaining
	    if(buggyZero || chain !== inst)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  __webpack_require__(278)(C, NAME);
	
	  O[NAME] = C;
	  $def($def.G + $def.W + $def.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(385);
	
	// 23.2 Set Objects
	__webpack_require__(386)('Set', function(get){
	  return function Set(){ return get(this, arguments[0]); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(246)
	  , weak         = __webpack_require__(389)
	  , isObject     = __webpack_require__(253)
	  , has          = __webpack_require__(254)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(386)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments[0]); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    __webpack_require__(259)(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide         = __webpack_require__(258)
	  , anObject     = __webpack_require__(273)
	  , strictNew    = __webpack_require__(379)
	  , forOf        = __webpack_require__(380)
	  , method       = __webpack_require__(262)
	  , WEAK         = __webpack_require__(260)('weak')
	  , isObject     = __webpack_require__(253)
	  , $has         = __webpack_require__(254)
	  , isExtensible = Object.isExtensible || isObject
	  , find         = method(5)
	  , findIndex    = method(6)
	  , id           = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return find(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = findIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(383)(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(389);
	
	// 23.4 WeakSet Objects
	__webpack_require__(386)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments[0]); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $def   = __webpack_require__(256)
	  , _apply = Function.apply;
	
	$def($def.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(246)
	  , $def      = __webpack_require__(256)
	  , aFunction = __webpack_require__(264)
	  , anObject  = __webpack_require__(273)
	  , isObject  = __webpack_require__(253)
	  , bind      = Function.bind || __webpack_require__(257).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$def($def.S + $def.F * __webpack_require__(248)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(246)
	  , $def     = __webpack_require__(256)
	  , anObject = __webpack_require__(273);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$def($def.S + $def.F * __webpack_require__(248)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $def     = __webpack_require__(256)
	  , getDesc  = __webpack_require__(246).getDesc
	  , anObject = __webpack_require__(273);
	
	$def($def.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $def     = __webpack_require__(256)
	  , anObject = __webpack_require__(273);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(343)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$def($def.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(246)
	  , has      = __webpack_require__(254)
	  , $def     = __webpack_require__(256)
	  , isObject = __webpack_require__(253)
	  , anObject = __webpack_require__(273);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$def($def.S, 'Reflect', {get: get});

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(246)
	  , $def     = __webpack_require__(256)
	  , anObject = __webpack_require__(273);
	
	$def($def.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $def     = __webpack_require__(256)
	  , getProto = __webpack_require__(246).getProto
	  , anObject = __webpack_require__(273);
	
	$def($def.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $def          = __webpack_require__(256)
	  , anObject      = __webpack_require__(273)
	  , $isExtensible = Object.isExtensible;
	
	$def($def.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $def = __webpack_require__(256);
	
	$def($def.S, 'Reflect', {ownKeys: __webpack_require__(402)});

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(246)
	  , anObject = __webpack_require__(273)
	  , Reflect  = __webpack_require__(251).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $def               = __webpack_require__(256)
	  , anObject           = __webpack_require__(273)
	  , $preventExtensions = Object.preventExtensions;
	
	$def($def.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(246)
	  , has        = __webpack_require__(254)
	  , $def       = __webpack_require__(256)
	  , createDesc = __webpack_require__(249)
	  , anObject   = __webpack_require__(273)
	  , isObject   = __webpack_require__(253);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$def($def.S, 'Reflect', {set: set});

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $def     = __webpack_require__(256)
	  , setProto = __webpack_require__(288);
	
	if(setProto)$def($def.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def      = __webpack_require__(256)
	  , $includes = __webpack_require__(276)(true);
	$def($def.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments[1]);
	  }
	});
	__webpack_require__(360)('includes');

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/mathiasbynens/String.prototype.at
	'use strict';
	var $def = __webpack_require__(256)
	  , $at  = __webpack_require__(340)(true);
	$def($def.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def = __webpack_require__(256)
	  , $pad = __webpack_require__(409);
	$def($def.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments[1], true);
	  }
	});

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(268)
	  , repeat   = __webpack_require__(351)
	  , defined  = __webpack_require__(267);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $def = __webpack_require__(256)
	  , $pad = __webpack_require__(409);
	$def($def.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments[1], false);
	  }
	});

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(338)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(338)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $def = __webpack_require__(256)
	  , $re  = __webpack_require__(414)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	$def($def.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 414 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(246)
	  , $def       = __webpack_require__(256)
	  , ownKeys    = __webpack_require__(402)
	  , toIObject  = __webpack_require__(274)
	  , createDesc = __webpack_require__(249);
	
	$def($def.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $def    = __webpack_require__(256)
	  , $values = __webpack_require__(417)(false);
	
	$def($def.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(246)
	  , has       = __webpack_require__(254)
	  , toIObject = __webpack_require__(274);
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)has(O, key = keys[i++]) && result.push(isEntries ? [key, O[key]] : O[key]);
	    return result;
	  };
	};

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $def     = __webpack_require__(256)
	  , $entries = __webpack_require__(417)(true);
	
	$def($def.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $def  = __webpack_require__(256);
	
	$def($def.P, 'Map', {toJSON: __webpack_require__(420)('Map')});

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(380)
	  , classof = __webpack_require__(290);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $def  = __webpack_require__(256);
	
	$def($def.P, 'Set', {toJSON: __webpack_require__(420)('Set')});

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(246)
	  , $def    = __webpack_require__(256)
	  , $Array  = __webpack_require__(257).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = __webpack_require__(263)(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$def($def.S, 'Array', statics);

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(251)
	  , $def       = __webpack_require__(256)
	  , invoke     = __webpack_require__(261)
	  , partial    = __webpack_require__(424)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$def($def.G + $def.B + $def.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(425)
	  , invoke    = __webpack_require__(261)
	  , aFunction = __webpack_require__(264);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that    = this
	      , _length = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !_length)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(_length > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(251);

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var $def  = __webpack_require__(256)
	  , $task = __webpack_require__(382);
	$def($def.G + $def.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(359);
	var global      = __webpack_require__(251)
	  , hide        = __webpack_require__(258)
	  , Iterators   = __webpack_require__(342)
	  , ITERATOR    = __webpack_require__(271)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NL && !(ITERATOR in NLProto))hide(NLProto, ITERATOR, ArrayValues);
	if(HTC && !(ITERATOR in HTCProto))hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	
	    generator._invoke = makeInvokeMethod(
	      innerFn, self || null,
	      new Context(tryLocsList || [])
	    );
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      var enqueueResult =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(function() {
	          return invoke(method, arg);
	        }) : new Promise(function(resolve) {
	          resolve(invoke(method, arg));
	        });
	
	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator.
	      previousPromise = enqueueResult["catch"](function(ignored){});
	
	      return enqueueResult;
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(429)))

/***/ },
/* 429 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
=======
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Accordion.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Accordion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".panel-body {\n    color:red;\n  }", ""]);
	
	// exports
>>>>>>> master


/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map
=======
!function(e){function t(a){if(o[a])return o[a].exports;var n=o[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/build/",t(0)}([function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var n=o(41),i=a(n),r=o(79),s=a(r),l=o(81),d=a(l),c=o(89),p=a(c),u=o(91),f=a(u),h=o(93),m=a(h),b=o(103),g=a(b),v=o(114),x=a(v),y=o(125),w=a(y),k=o(134),_=a(k),M=o(145),S=a(M),D=o(160),C=a(D),A=o(187),T=a(A),O=o(193),L=a(O),q=o(205),N=a(q),P=o(213),j=a(P),E=o(219),z=a(E),B=o(222),R=a(B),$=o(235),W=a($),I=o(238),V=a(I);o(247),o(249),o(251),o(252),Vue.config.debug=!0,new Vue({el:"#wrapper",components:{gettingStarted:s["default"],container:p["default"],affix:d["default"],alertDocs:m["default"],headerDocs:f["default"],accordionDocs:g["default"],affixDocs:x["default"],asideDocs:w["default"],carouselDocs:_["default"],buttonsDocs:S["default"],datepickerDocs:C["default"],dropdownDocs:T["default"],modalDocs:L["default"],popoverDocs:N["default"],progressbarDocs:j["default"],selectDocs:z["default"],tabsDocs:R["default"],tooltipDocs:W["default"],typeaheadDocs:V["default"],list:{inherit:!0,template:""}},data:function(){return{anchor:[]}},filters:{space:function(e){return e.replace("-"," ")}},ready:function(){function e(){var e=document.documentElement.scrollTop||document.body.scrollTop;for(r in a)a[r]+420<=e&&n&&(n.querySelector(".active")&&(n.querySelector(".active").className=""),n.querySelector("a[href*="+r+"]").parentNode.className="active")}var t=document.querySelectorAll(".anchor");this.anchor=[].concat((0,i["default"])(t)).map(function(e){return e.innerHTML.replace(" ","-")});var o=document.querySelectorAll(".bs-docs-section"),a={},n=document.querySelector("#sidenav"),r=0;window.onload=function(){Array.prototype.forEach.call(o,function(e){a[e.id]=e.offsetTop})},window.onscroll=function(){e()}}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var n=o(42),i=a(n);t["default"]=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return(0,i["default"])(e)},t.__esModule=!0},function(e,t,o){e.exports={"default":o(43),__esModule:!0}},function(e,t,o){o(44),o(68),e.exports=o(52).Array.from},function(e,t,o){"use strict";var a=o(45)(!0);o(48)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,o=this._i;return o>=t.length?{value:void 0,done:!0}:(e=a(t,o),this._i+=e.length,{value:e,done:!1})})},function(e,t,o){var a=o(46),n=o(47);e.exports=function(e){return function(t,o){var i,r,s=String(n(t)),l=a(o),d=s.length;return 0>l||l>=d?e?"":void 0:(i=s.charCodeAt(l),55296>i||i>56319||l+1===d||(r=s.charCodeAt(l+1))<56320||r>57343?e?s.charAt(l):i:e?s.slice(l,l+2):(i-55296<<10)+(r-56320)+65536)}}},function(e,t){var o=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:o)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,o){"use strict";var a=o(49),n=o(50),i=o(55),r=o(56),s=o(61),l=o(62),d=o(63),c=o(64),p=o(57).getProto,u=o(65)("iterator"),f=!([].keys&&"next"in[].keys()),h="@@iterator",m="keys",b="values",g=function(){return this};e.exports=function(e,t,o,v,x,y,w){d(o,t,v);var k,_,M=function(e){if(!f&&e in A)return A[e];switch(e){case m:return function(){return new o(this,e)};case b:return function(){return new o(this,e)}}return function(){return new o(this,e)}},S=t+" Iterator",D=x==b,C=!1,A=e.prototype,T=A[u]||A[h]||x&&A[x],O=T||M(x);if(T){var L=p(O.call(new e));c(L,S,!0),!a&&s(A,h)&&r(L,u,g),D&&T.name!==b&&(C=!0,O=function(){return T.call(this)})}if(a&&!w||!f&&!C&&A[u]||r(A,u,O),l[t]=O,l[S]=g,x)if(k={values:D?O:M(b),keys:y?O:M(m),entries:D?M("entries"):O},w)for(_ in k)_ in A||i(A,_,k[_]);else n(n.P+n.F*(f||C),t,k);return k}},function(e,t){e.exports=!0},function(e,t,o){var a=o(51),n=o(52),i=o(53),r="prototype",s=function(e,t,o){var l,d,c,p=e&s.F,u=e&s.G,f=e&s.S,h=e&s.P,m=e&s.B,b=e&s.W,g=u?n:n[t]||(n[t]={}),v=u?a:f?a[t]:(a[t]||{})[r];u&&(o=t);for(l in o)d=!p&&v&&l in v,d&&l in g||(c=d?v[l]:o[l],g[l]=u&&"function"!=typeof v[l]?o[l]:m&&d?i(c,a):b&&v[l]==c?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[r]=e[r],t}(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((g[r]||(g[r]={}))[l]=c))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,e.exports=s},function(e,t){var o=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},function(e,t){var o=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=o)},function(e,t,o){var a=o(54);e.exports=function(e,t,o){if(a(e),void 0===t)return e;switch(o){case 1:return function(o){return e.call(t,o)};case 2:return function(o,a){return e.call(t,o,a)};case 3:return function(o,a,n){return e.call(t,o,a,n)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,o){e.exports=o(56)},function(e,t,o){var a=o(57),n=o(58);e.exports=o(59)?function(e,t,o){return a.setDesc(e,t,n(1,o))}:function(e,t,o){return e[t]=o,e}},function(e,t){var o=Object;e.exports={create:o.create,getProto:o.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:o.getOwnPropertyDescriptor,setDesc:o.defineProperty,setDescs:o.defineProperties,getKeys:o.keys,getNames:o.getOwnPropertyNames,getSymbols:o.getOwnPropertySymbols,each:[].forEach}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,o){e.exports=!o(60)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var o={}.hasOwnProperty;e.exports=function(e,t){return o.call(e,t)}},function(e,t){e.exports={}},function(e,t,o){"use strict";var a=o(57),n=o(58),i=o(64),r={};o(56)(r,o(65)("iterator"),function(){return this}),e.exports=function(e,t,o){e.prototype=a.create(r,{next:n(1,o)}),i(e,t+" Iterator")}},function(e,t,o){var a=o(57).setDesc,n=o(61),i=o(65)("toStringTag");e.exports=function(e,t,o){e&&!n(e=o?e:e.prototype,i)&&a(e,i,{configurable:!0,value:t})}},function(e,t,o){var a=o(66)("wks"),n=o(67),i=o(51).Symbol;e.exports=function(e){return a[e]||(a[e]=i&&i[e]||(i||n)("Symbol."+e))}},function(e,t,o){var a=o(51),n="__core-js_shared__",i=a[n]||(a[n]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t){var o=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+a).toString(36))}},function(e,t,o){"use strict";var a=o(53),n=o(50),i=o(69),r=o(70),s=o(73),l=o(74),d=o(75);n(n.S+n.F*!o(78)(function(e){Array.from(e)}),"Array",{from:function(e){var t,o,n,c,p=i(e),u="function"==typeof this?this:Array,f=arguments,h=f.length,m=h>1?f[1]:void 0,b=void 0!==m,g=0,v=d(p);if(b&&(m=a(m,h>2?f[2]:void 0,2)),void 0==v||u==Array&&s(v))for(t=l(p.length),o=new u(t);t>g;g++)o[g]=b?m(p[g],g):p[g];else for(c=v.call(p),o=new u;!(n=c.next()).done;g++)o[g]=b?r(c,m,[n.value,g],!0):n.value;return o.length=g,o}})},function(e,t,o){var a=o(47);e.exports=function(e){return Object(a(e))}},function(e,t,o){var a=o(71);e.exports=function(e,t,o,n){try{return n?t(a(o)[0],o[1]):t(o)}catch(i){var r=e["return"];throw void 0!==r&&a(r.call(e)),i}}},function(e,t,o){var a=o(72);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,o){var a=o(62),n=o(65)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||i[n]===e)}},function(e,t,o){var a=o(46),n=Math.min;e.exports=function(e){return e>0?n(a(e),9007199254740991):0}},function(e,t,o){var a=o(76),n=o(65)("iterator"),i=o(62);e.exports=o(52).getIteratorMethod=function(e){return void 0!=e?e[n]||e["@@iterator"]||i[a(e)]:void 0}},function(e,t,o){var a=o(77),n=o(65)("toStringTag"),i="Arguments"==a(function(){return arguments}());e.exports=function(e){var t,o,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=(t=Object(e))[n])?o:i?a(t):"Object"==(r=a(t))&&"function"==typeof t.callee?"Arguments":r}},function(e,t){var o={}.toString;e.exports=function(e){return o.call(e).slice(8,-1)}},function(e,t,o){var a=o(65)("iterator"),n=!1;try{var i=[7][a]();i["return"]=function(){n=!0},Array.from(i,function(){throw 2})}catch(r){}e.exports=function(e,t){if(!t&&!n)return!1;var o=!1;try{var i=[7],r=i[a]();r.next=function(){o=!0},i[a]=function(){return r},e(i)}catch(s){}return o}},function(e,t,o){("function"==typeof e.exports?e.exports.options:e.exports).template=o(80)},function(e,t){e.exports="<div class=bs-docs-section id=getting-started><h1 class=page-header><a href=#getting-started class=anchor>Getting started</a></h1><div class=\"bs-callout bs-callout-success\"><h4>About this project</h4><p>This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:</p><ul><li><a href=\"http://vuejs.org/\">Vue.js</a> (required ^0.12, test with 0.12.10).</li><li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a> (required 3.x.x, test with 3.3.5). VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.</li></ul></div><h2>CommonJS</h2><pre><code class=language-javascript>\n$ npm install vue-strap\n\nvar alert = require('vue-strap/lib/alert');\n// or\nvar alert = require('vue-strap').alert;\n\nnew Vue({\n  components: {\n    'alert': alert\n  }\n})\n    </code></pre><h2>ES6</h2><pre><code class=language-javascript>\n$ npm install vue-strap\n\nimport alert from 'vue-strap/src/alert'\n// or\nimport { alert } from 'vue-strap'\n\nnew Vue({\n  components: {\n    alert\n  }\n})\n    </code></pre><h2>Browser globals</h2><p>The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.js</code> with all components exported in the <code>window.VueStrap</code> object.</p><pre><code class=language-markup>\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-strap.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueStrap.alert\n&lt;/script&gt;\n    </code></pre></div>"},function(e,t,o){o(82),e.exports=o(86),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(88)},function(e,t,o){var a=o(83);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".vue-affix{position:fixed}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(a[i]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&a[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(e,t,o){function a(e,t){for(var o=0;o<e.length;o++){var a=e[o],n=f[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(d(a.parts[i],t))}else{for(var r=[],i=0;i<a.parts.length;i++)r.push(d(a.parts[i],t));f[a.id]={id:a.id,refs:1,parts:r}}}}function n(e){for(var t=[],o={},a=0;a<e.length;a++){var n=e[a],i=n[0],r=n[1],s=n[2],l=n[3],d={css:r,media:s,sourceMap:l};o[i]?o[i].parts.push(d):t.push(o[i]={id:i,parts:[d]})}return t}function i(e,t){var o=b(),a=x[x.length-1];if("top"===e.insertAt)a?a.nextSibling?o.insertBefore(t,a.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function d(e,t){var o,a,n;if(t.singleton){var i=v++;o=g||(g=s(t)),a=c.bind(null,o,i,!1),n=c.bind(null,o,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=l(t),a=u.bind(null,o),n=function(){r(o),o.href&&URL.revokeObjectURL(o.href)}):(o=s(t),a=p.bind(null,o),n=function(){r(o)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}function c(e,t,o,a){var n=o?"":a.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var i=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function p(e,t){var o=t.css,a=t.media;t.sourceMap;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function u(e,t){var o=t.css,a=(t.media,t.sourceMap);a&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var n=new Blob([o],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(n),i&&URL.revokeObjectURL(i)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=n(e);return a(o,t),function(e){for(var i=[],r=0;r<o.length;r++){var s=o[r],l=f[s.id];l.refs--,i.push(l)}if(e){var d=n(e);a(d,t)}for(var r=0;r<i.length;r++){var l=i[r];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete f[l.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(87),i=a(n);t["default"]={props:{offset:{type:Number,"default":0}},data:function(){return{affixed:!1,styles:{}}},methods:{scrolling:function(){var e=this.getScroll(window,!0),t=this.getOffset(this.$el);!this.affixed&&e>t.top&&(this.affixed=!0,this.styles={top:this.offset+"px",left:t.left+"px",width:this.$el.offsetWidth+"px"}),this.affixed&&e<t.top&&(this.affixed=!1,this.styles={})},getScroll:function(e,t){var o=e["page"+(t?"Y":"X")+"Offset"],a="scroll"+(t?"Top":"Left");if("number"!=typeof o){var n=e.document;o=n.documentElement[a],"number"!=typeof o&&(o=n.body[a])}return o},getOffset:function(e){var t=e.getBoundingClientRect(),o=document.body,a=e.clientTop||o.clientTop||0,n=e.clientLeft||o.clientLeft||0,i=this.getScroll(window,!0),r=this.getScroll(window);return{top:t.top+i-a,left:t.left+r-n}}},ready:function(){this._scrollEvent=i["default"].listen(window,"scroll",this.scrolling),this._resizeEvent=i["default"].listen(window,"resize",this.scrolling)},beforeDestroy:function(){this._scrollEvent&&this._scrollEvent.remove(),this._resizeEvent&&this._resizeEvent.remove()}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={listen:function(e,t,o){return e.addEventListener?(e.addEventListener(t,o,!1),{remove:function(){e.removeEventListener(t,o,!1)}}):e.attachEvent?(e.attachEvent("on"+t,o),{remove:function(){e.detachEvent("on"+t,o)}}):void 0}};t["default"]=o},function(e,t){e.exports="<div><div v-bind:class=\"{'vue-affix': affixed}\" v-bind:style=styles><slot></slot></div></div>"},function(e,t,o){("function"==typeof e.exports?e.exports.options:e.exports).template=o(90)},function(e,t){e.exports='<div class="container bs-docs-container"><div class=row><slot></slot></div></div>'},function(e,t,o){("function"==typeof e.exports?e.exports.options:e.exports).template=o(92)},function(e,t){e.exports='<header class="navbar navbar-static-top bs-docs-nav" id=top role=banner><div class=container><div class=navbar-header><button class="navbar-toggle collapsed" type=button data-toggle=collapse data-target=#bs-navbar aria-controls=bs-navbar aria-expanded=false><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="../" class=navbar-brand>VueStrap</a></div><nav id=bs-navbar class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a href=#accordion style=color:#19986B>Components</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href=https://github.com/yuche/vue-strap><span class=icon-github-circled></span> GitHub</a></li></ul></nav></div></header>'},function(e,t,o){o(94),e.exports=o(96),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(102)},function(e,t,o){var a=o(95);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".alert-icon-float-left{font-size:32px;float:left;margin-right:5px}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(97),i=a(n);t["default"]={data:function(){return{showRight:!1,showTop:!1}},components:{alert:i["default"]}}},function(e,t,o){o(98),e.exports=o(100),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(101)},function(e,t,o){var a=o(99);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".fade-transition{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.fade-enter,.fade-leave{opacity:0}.alert.top{margin:0 auto;left:0;right:0}.alert.top,.alert.top-right{position:fixed;top:30px;z-index:2}.alert.top-right{right:50px}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{type:String},dismissable:{type:Boolean,"default":!1},show:{type:Boolean,"default":!0,twoWay:!0},duration:{type:Number,"default":0},width:{type:String},placement:{type:String}},watch:{show:function(e){var t=this;this._timeout&&clearTimeout(this._timeout),e&&this.duration&&(this._timeout=setTimeout(function(){return t.show=!1},this.duration))}}}},function(e,t){e.exports="<div v-show=show v-bind:class=\"{\n      'alert':		true,\n      'alert-success':(type == 'success'),\n      'alert-warning':(type == 'warning'),\n      'alert-info':	(type == 'info'),\n      'alert-danger':	(type == 'danger'),\n      'top': 			(placement === 'top'),\n      'top-right': 	(placement === 'top-right')\n    }\" transition=fade v-bind:style={width:width} role=alert><button v-show=dismissable type=button class=close @click=\"show = false\"><span>&times;</span></button><slot></slot></div>"},function(e,t){e.exports='<div class=bs-docs-section id=alert><h1 class=page-header><a href=#alert class=anchor>Alert</a></h1><div class=bs-example><button class="btn btn-success btn-lg" @click="showRight = !showRight">Click to toggle alert on right</button> <button class="btn btn-danger btn-lg" @click="showTop = !showTop">Click to toggle alert on top</button><hr><alert type=success><strong>Well Done!</strong> You successfully read this important alert message.</alert><alert type=info><strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.</alert><alert type=danger dismissable><strong>Oh snap!</strong> Change a few things up and try submitting again.</alert><alert type=warning dismissable><strong>Warning!</strong> Better check yourself, you\'re not looking too good.</alert><alert :show.sync=showRight :duration=3000 type=success width=400px placement=top-right dismissable><span class="icon-ok-circled alert-icon-float-left"></span> <strong>Well Done!</strong><p>You successfully read this important alert message.</p></alert><alert :show.sync=showTop :duration=3000 type=danger width=400px placement=top dismissable><span class="icon-info-circled alert-icon-float-left"></span> <strong>Heads up!</strong><p>This alert needs your attention.</p></alert></div><pre><code class=language-markup><script type=language-mark-up>\n<button class="btn btn-default btn-lg"\n  @click="showRight = !showRight">\n  Click to toggle alert on right\n</button>\n \n<button class="btn btn-default btn-lg"\n  @click="showTop = !showTop">\n  Click to toggle alert on top\n</button>\n<hr>\n<alert type="success" >\n  <strong>Well Done!</strong>\n  You successfully read this important alert message.\n</alert>\n \n<alert type="info" >\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</alert>\n \n<alert type="danger" dismissable>\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n \n<alert type="warning" dismissable>\n  <strong>Warning!</strong> Better check yourself, you\'re not looking too good.\n</alert>\n \n<alert\n  show="{{showRight}}"\n  duration="3000"\n  type="success"\n  width="400px"\n  placement="top-right"\n  dismissable>\n  <span class="icon-ok-circled alert-icon-float-left"></span>\n  <strong>Well Done!</strong>\n  <p>You successfully read this important alert message.</p>\n</alert>\n \n<alert\n  show="{{showTop}}"\n  duration="3000"\n  type="info"\n  width="400px"\n  placement="top"\n  dismissable>\n  <span class="icon-info-circled alert-icon-float-left"></span>\n  <strong>Heads up!</strong>\n  <p>This alert needs your attention.</p>\n</alert>\n \n</script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>show<td><code>Boolean</code><td><code>true</code><td>Whether show the component<tr><td>dismissable<td><code>Boolean</code><td><code>false</code><td>Whether show close button<tr><td>type<td><code>String</code>, one of <code>success</code> <code>info</code> <code>warning</code> <code>danger</code><td><code>success</code><td>Components styles<tr><td>duration<td><code>Number</code><td><code>0</code><td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.<tr><td>width<td><code>String</code><td><tr><td>placement<td><code>String</code>. one of <code>top</code>, <code>top-right</code><td><td>how to position the component.</table></div>'},function(e,t,o){e.exports=o(104),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(113)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(105),i=a(n),r=o(108),s=a(r);t["default"]={data:function(){return{checked:!0}},components:{accordion:i["default"],panel:s["default"]}}},function(e,t,o){e.exports=o(106),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(107)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{oneAtATime:{type:Boolean,"default":!1}},created:function(){var e=this;this.$on("isOpenEvent",function(t){e.oneAtATime&&e.$children.forEach(function(e){t!==e&&(e.isOpen=!1)})})}}},function(e,t){e.exports="<div class=panel-group><slot></slot></div>"},function(e,t,o){o(109),e.exports=o(111),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(112)},function(e,t,o){var a=o(110);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".accordion-toggle{cursor:pointer}.collapse-transition{-webkit-transition:max-height .5s ease;transition:max-height .5s ease;overflow:hidden}.collapse-enter,.collapse-leave{max-height:0!important}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{isOpen:{type:Boolean,"default":!1},header:{type:String}},data:function(){return{height:0}},methods:{toggleIsOpen:function(){this.isOpen=!this.isOpen,this.$dispatch("isOpenEvent",this)}},ready:function(){var e=this.$els.panel;e.style.display="block",this.height=e.offsetHeight,e.style.maxHeight=this.height+"px",this.isOpen||(e.style.display="none")}}},function(e,t){e.exports='<div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle @click=toggleIsOpen()>{{ header }}</a></h4></div><div class=panel-collapse v-el:panel v-show=isOpen transition=collapse><div class=panel-body><slot></slot></div></div></div>'},function(e,t){e.exports='<div class=bs-docs-section id=accordion><h1 class=page-header><a href=#accordion class=anchor>Accordion</a></h1><div class=bs-example><p><input type=checkbox v-model=checked> Open only one at a time.</p><accordion :one-at-atime=checked><panel header="Panel #1" :is-open=true>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</panel><panel header="Panel #2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</panel><panel header="Panel #3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</panel><panel header="Panel #4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</panel></accordion></div><pre><code class=language-markup><script type=language-mark-up>\n<input type="checkbox" v-model="checked">\n<label for="checked">Open only one at a time.</label>\n\n<accordion :one-at-atime="checked">\n  <panel header="Panel #1" :is-open="true">\n    ...\n  </panel>\n  <panel header="Panel #2">\n    ...\n  </panel>\n  <panel header="Panel #3">\n    ...\n  </panel>\n  <panel header="Panel #4">\n    ...\n  </panel>\n</accordion>\n</script></code></pre><h2>Accordion Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>one-at-time<td><code>Boolean</code><td><code>false</code><td>Control whether expanding an item will cause the other items to close.</table><h2>Panel Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>is-open<td><code>Boolean</code><td><code>false</code><td>Whether accordion group is open or closed.<tr><td>header<td><code>String</code><td><td>The clickable text on the group\'s header. You need one to be able to click on the header for toggling.</table></div>'},function(e,t,o){o(115),e.exports=o(117),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(124)},function(e,t,o){var a=o(116);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".animated{-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes shake{0%,to{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}20%,40%,60%,80%{-webkit-transform:translateX(5px);transform:translateX(5px)}}@keyframes shake{0%,to{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}20%,40%,60%,80%{-webkit-transform:translateX(5px);transform:translateX(5px)}}.shake{-webkit-animation-name:shake;animation-name:shake}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(118),i=a(n);t["default"]={components:{tooltip:i["default"]}}},function(e,t,o){o(119),e.exports=o(121),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(123)},function(e,t,o){var a=o(120);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".tooltip{opacity:.9}.fadein-enter{-webkit-animation:fadein-in .3s ease-in;animation:fadein-in .3s ease-in}.fadein-leave{-webkit-animation:fadein-out .3s ease-out;animation:fadein-out .3s ease-out}@-webkit-keyframes fadein-in{0%{opacity:0}to{opacity:1}}@keyframes fadein-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-out{0%{opacity:1}to{opacity:0}}@keyframes fadein-out{0%{opacity:1}to{opacity:0}}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(122),i=a(n);t["default"]={mixins:[i["default"]],props:{trigger:{type:String,"default":"hover"},effect:{type:String,"default":"scale"}}}},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(87),i=a(n),r={props:{trigger:{type:String,"default":"click"},effect:{type:String,"default":"fadein"},title:{type:String},content:{type:String},header:{type:Boolean,"default":!0},placement:{type:String}},data:function(){return{position:{top:0,left:0},show:!0}},methods:{toggle:function(){this.show=!this.show}},ready:function(){var e=this;if(!this.$els.popover)return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");var t=this.$els.popover,o=this.$els.trigger.children[0];switch("hover"===this.trigger?(this._mouseenterEvent=i["default"].listen(o,"mouseenter",function(){return e.show=!0}),this._mouseleaveEvent=i["default"].listen(o,"mouseleave",function(){return e.show=!1})):"focus"===this.trigger?(this._focusEvent=i["default"].listen(o,"focus",function(){return e.show=!0}),this._blurEvent=i["default"].listen(o,"blur",function(){return e.show=!1})):this._clickEvent=i["default"].listen(o,"click",this.toggle),this.placement){case"top":this.position.left=o.offsetLeft-t.offsetWidth/2+o.offsetWidth/2,this.position.top=o.offsetTop-t.offsetHeight;break;case"left":this.position.left=o.offsetLeft-t.offsetWidth,this.position.top=o.offsetTop+o.offsetHeight/2-t.offsetHeight/2;
break;case"right":this.position.left=o.offsetLeft+o.offsetWidth,this.position.top=o.offsetTop+o.offsetHeight/2-t.offsetHeight/2;break;case"bottom":this.position.left=o.offsetLeft-t.offsetWidth/2+o.offsetWidth/2,this.position.top=o.offsetTop+o.offsetHeight;break;default:console.log("Wrong placement prop")}t.style.top=this.position.top+"px",t.style.left=this.position.left+"px",t.style.display="none",this.show=!this.show},beforeDestroy:function(){this._blurEvent&&(this._blurEvent.remove(),this._focusEvent.remove()),this._mouseenterEvent&&(this._mouseenterEvent.remove(),this._mouseleaveEvent.remove()),this._clickEvent&&this._clickEvent.remove()}};t["default"]=r},function(e,t){e.exports="<span v-el:trigger><slot></slot></span><div class=tooltip v-bind:class=\"{\n    'top':    placement === 'top',\n    'left':   placement === 'left',\n    'right':  placement === 'right',\n    'bottom': placement === 'bottom'\n    }\" v-el:popover v-show=show :transition=effect role=tooltip><div class=tooltip-arrow></div><div class=tooltip-inner>{{{content}}}</div></div>"},function(e,t){e.exports='<div class=bs-docs-section id=affix><h1 class=page-header><a href=#affix class=anchor>Affix</a></h1><div class=bs-example><h3>The sub-navigation on the RIGHT is a live demo of the affix.<tooltip trigger=hover effect=fadein content="I\'m a direction, not jerking off!" placement=left><span class="glyphicon glyphicon-hand-right pull-right animated shake"></span></tooltip></h3></div><pre><code class=language-markup><script type=language-mark-up>\n<affix offset="">\n  <nav class="sidebar">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>offset<td><code>Number</code><td><code>0</code><td>Pixels to offset from top of screen when calculating position of scroll.</table></div>'},function(e,t,o){e.exports=o(126),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(133)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(127),i=a(n);t["default"]={components:{sidebar:i["default"]},data:function(){return{showLeft:!1,showRight:!1}}}},function(e,t,o){o(128),e.exports=o(130),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(132)},function(e,t,o){var a=o(129);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".aside-open{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.aside-open.has-push-right{-webkit-transform:translateX(-300px);transform:translateX(-300px)}.aside{position:fixed;top:0;bottom:0;z-index:1049;overflow:auto;background:#fff}.aside.left{left:0;right:auto}.aside.right{left:auto;right:0}.slideleft-enter{-webkit-animation:slideleft-in .3s;animation:slideleft-in .3s}.slideleft-leave{-webkit-animation:slideleft-out .3s;animation:slideleft-out .3s}@-webkit-keyframes slideleft-in{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slideleft-in{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes slideleft-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}@keyframes slideleft-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}.slideright-enter{-webkit-animation:slideright-in .3s;animation:slideright-in .3s}.slideright-leave{-webkit-animation:slideright-out .3s;animation:slideright-out .3s}@-webkit-keyframes slideright-in{0%{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slideright-in{0%{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes slideright-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}}@keyframes slideright-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}}.aside:focus{outline:0}@media (max-width:991px){.aside{min-width:240px}}.aside.left{right:auto;left:0}.aside.right{right:0;left:auto}.aside .aside-dialog .aside-header{border-bottom:1px solid #e5e5e5;min-height:16.43px;padding:6px 15px;background:#337ab7;color:#fff}.aside .aside-dialog .aside-header .close{margin-right:-8px;padding:4px 8px;color:#fff;font-size:25px;opacity:.8}.aside .aside-dialog .aside-body{position:relative;padding:15px}.aside .aside-dialog .aside-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.aside .aside-dialog .aside-footer .btn+.btn{margin-left:5px;margin-bottom:0}.aside .aside-dialog .aside-footer .btn-group .btn+.btn{margin-left:-1px}.aside .aside-dialog .aside-footer .btn-block+.btn-block{margin-left:0}.aside-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;background-color:#000}.aside-backdrop.in{opacity:.5;filter:alpha(opacity=50)}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(87),i=a(n),r=o(131),s=a(r);t["default"]={props:{show:{type:Boolean,require:!0,twoWay:!0},placement:{type:String,"default":"right"},header:{type:String},width:{type:Number,"default":"320"}},watch:{show:function(e){var t=document.createElement("div"),o=document.body;t.className="aside-backdrop";var a=(0,s["default"])();if(e){o.appendChild(t),o.classList.add("modal-open"),0!==a&&(o.style.paddingRight=a+"px");t.clientHeight;t.className+=" in",this._clickEvent=i["default"].listen(t,"click",this.close)}else this._clickEvent&&this._clickEvent.remove(),t=document.querySelector(".aside-backdrop"),t.className="aside-backdrop",setTimeout(function(){o.classList.remove("modal-open"),o.style.paddingRight="0",o.removeChild(t)},300)}},methods:{close:function(){this.show=!1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var o=e.offsetWidth;t.style.overflow="scroll";var a=e.offsetWidth;return o===a&&(a=t.clientWidth),document.body.removeChild(t),o-a}},function(e,t){e.exports="<div class=aside v-bind:style=\"{width:width + 'px'}\" v-bind:class=\"{\n    left:placement === 'left',\n    right:placement === 'right'\n    }\" v-show=show :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\"><div class=aside-dialog><div class=aside-content><div class=aside-header><button type=button class=close @click=close><span>&times;</span></button><h4 class=aside-title>{{header}}</h4></div><div class=aside-body><slot></slot></div></div></div></div>"},function(e,t){e.exports='<div class=bs-docs-section id=aside><h1 class=page-header><a href=#aside class=anchor>Aside</a></h1><div class=bs-example><button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button><sidebar :show.sync=showRight placement=right header=Title :width=350><h4>Text in aside</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><pre><code class=language-javascript>\nif (talk === cheap){\n  code.style.display = \'block\'\n}\n        </code></pre><div class=aside-footer><button type=button class="btn btn-default" @click="showRight=false">Close</button></div></sidebar><button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button><sidebar :show.sync=showLeft placement=left header=Title :width=350><h4>Text in aside</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><pre><code class=language-javascript>\nif (talk === cheap){\n  code.style.display = \'block\'\n}\n        </code></pre><div class=aside-footer><button type=button class="btn btn-default" @click="showLeft=false">Close</button></div></sidebar></div><pre><code class=language-markup><script type=language-mark-up>\n<button\nclass="btn btn-success btn-lg"\n@click="showRight = true">Show Aside on right</button>\n\n<sidebar :show.sync="showRight" placement="right" header="Title" :width="350">\n...\n</sidebar>\n\n<button\nclass="btn btn-danger btn-lg"\n@click="showLeft = true">Show Aside on left</button>\n\n<sidebar :show.sync="showLeft" placement="left" header="Title" :width="350">\n...\n</sidebar></script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>show<td><code>Boolean</code><td><td>Whether show the component.<tr><td>placement<td><code>String</code>, one of <code>left</code>, <code>right</code><td><code>right</code><td>how to position the component.<tr><td>header<td><code>String</code><td><td>Header text of the aside component.<tr><td>width<td><code>Number</code><td><td></table></div>'},function(e,t,o){e.exports=o(135),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(144)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(136),i=a(n),r=o(141),s=a(r);t["default"]={components:{carousel:i["default"],slider:s["default"]}}},function(e,t,o){o(137),e.exports=o(139),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(140)},function(e,t,o){var a=o(138);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".carousel-control[_v-619cca58]{cursor:pointer}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(41),i=a(n),r=o(87),s=a(r);t["default"]={props:{indicators:{type:Boolean,"default":!0},controls:{type:Boolean,"default":!0},interval:{type:Number,"default":5e3}},components:{indicator:{inherit:!0,template:'<li v-for="i in indicator" @click="handleIndicatorClick($index)" v-bind:class="{\'active\':$index === activeIndex}"</li>',methods:{handleIndicatorClick:function(e){return this.isAnimating?!1:(this.isAnimating=!0,void(this.activeIndex=e))}}}},data:function(){return{indicator:[],activeIndex:0,isAnimating:!1}},computed:{slider:function(){return this.$el.querySelectorAll(".item")}},watch:{activeIndex:function(e,t){e>t?this.slide("left",e,t):this.slide("right",e,t)}},methods:{slide:function(e,t,o){var a=this;this._prevSelectedEvent&&this._prevSelectedEvent.remove(),this._selectedEvent&&this._selectedEvent.remove();var n=this.slider[o],r=this.slider[t],l=function(){[].concat((0,i["default"])(a.slider)).forEach(function(e){return e.className="item"}),r.classList.add("active"),a.isAnimating=!1};"left"===e?r.classList.add("next"):r.classList.add("prev");r.clientHeight;this._prevSelectedEvent=s["default"].listen(n,"transitionend",l),this._selectedEvent=s["default"].listen(r,"transitionend",l),n.classList.add(e),r.classList.add(e)},nextClick:function(){return this.isAnimating?!1:(this.isAnimating=!0,void(this.activeIndex+1<this.slider.length?this.activeIndex+=1:this.activeIndex=0))},prevClick:function(){return this.isAnimating?!1:(this.isAnimating=!0,void(0===this.activeIndex?this.activeIndex=this.slider.length-1:this.activeIndex-=1))}},ready:function(){function e(e,t,a){e?o=setInterval(t,a):clearInterval(o)}var t=this,o=null,a=this.$el;this.interval&&(e(!0,this.nextClick,this.interval),a.addEventListener("mouseenter",function(){return e(!1)}),a.addEventListener("mouseleave",function(){return e(!0,t.nextClick,t.interval)}))}}},function(e,t){e.exports='<div class="carousel slide" data-ride=carousel _v-619cca58=""><ol class=carousel-indicators v-show=indicators _v-619cca58=""><indicator _v-619cca58=""></indicator></ol><div class=carousel-inner role=listbox _v-619cca58=""><slot _v-619cca58=""></slot></div><a v-show=controls class="left carousel-control" @click=prevClick _v-619cca58=""><span class="glyphicon glyphicon-chevron-left" aria-hidden=true _v-619cca58=""></span> <span class=sr-only _v-619cca58="">Previous</span></a> <a v-show=controls class="right carousel-control" @click=nextClick _v-619cca58=""><span class="glyphicon glyphicon-chevron-right" aria-hidden=true _v-619cca58=""></span> <span class=sr-only _v-619cca58="">Next</span></a></div>'},function(e,t,o){e.exports=o(142),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(143)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{index:0,show:!1}},computed:{show:function(){return this.$parent.activeIndex===this.index}},ready:function(){for(var e in this.$parent.$children)if(this.$parent.$children[e].$el==this.$el){this.index=parseInt(e,10);break}this.$parent.indicator.push(this.index),0===this.index&&this.$el.classList.add("active")}}},function(e,t){e.exports="<div class=item><slot></slot></div>"},function(e,t){e.exports='<div class=bs-docs-section id=carousel><h1 class=page-header><a href=#caoursel class=anchor>Carousel</a></h1><div class=bs-example><carousel><slider><img src="http://placehold.it/1200x500?text=one"><div class=carousel-caption><h3>Slide #1</h3><p>sunt in culpa qui officia deserunt mollit a.</p></div></slider><slider><img src="http://placehold.it/1200x500?text=two"><div class=carousel-caption><h3>Slide #2</h3><p>sunt in culpa qui officia deserunt mollit a.</p></div></slider><slider><img src="http://placehold.it/1200x500?text=three"><div class=carousel-caption><h3>Slide #3</h3><p>sunt in culpa qui officia deserunt mollit a.</p></div></slider></carousel></div><pre><code class=language-markup><script type=language-mark-up>\n<carousel>\n  <slider>\n    <img src="http://placehold.it/1200x400?text=one">\n      <div class="carousel-caption">\n       ...\n     </div>\n  </slider>\n  <slider>\n    <img src="http://placehold.it/1200x400?text=two">\n  </slider>\n  <slider>\n    <img src="http://placehold.it/1200x400?text=three">\n  </slider>\n</carousel>\n</script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>indicators<td><code>Boolean</code><td><code>true</code><td>Whether to show the indicators.<tr><td>controls<td><code>Boolean</code><td><code>true</code><td>Whether to show the direction controls.<tr><td>interval<td><code>Number</code><td><code>5000</code><td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number, carousel will not automatically cycle.</table></div>'},function(e,t,o){e.exports=o(146),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(159)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(147),i=a(n),r=o(150),s=a(r),l=o(153),d=a(l),c=o(156),p=a(c);t["default"]={components:{radio:s["default"],radioGroup:i["default"],checkboxGroup:d["default"],checkbox:p["default"]},data:function(){return{checkboxValue:[],radioValue:""}}}},function(e,t,o){e.exports=o(148),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(149)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:String,twoWay:!0},type:{type:String,"default":"default"}}}},function(e,t){e.exports="<div class=btn-group data-toggle=buttons><slot></slot></div>"},function(e,t,o){e.exports=o(151),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(152)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:String},checked:{type:Boolean,"default":!1}},computed:{type:function(){return this.$parent.type},active:function(){return this.$parent.value===this.value}},methods:{handleClick:function(){this.$parent.value=this.value}},created:function(){this.checked&&(this.$parent.value=this.value)}}},function(e,t){e.exports="<label class=btn v-bind:class=\"{\n    'active':active,\n    'btn-success':type == 'success',\n    'btn-warning':type == 'warning',\n    'btn-info':type == 'info',\n    'btn-danger':type == 'danger',\n    'btn-default':type == 'default',\n    'btn-primary':type == 'primary'\n  }\"><input type=radio autocomplete=off :checked=checked @click=\"handleClick\"><slot></slot></label>"},function(e,t,o){e.exports=o(154),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(155)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:Array,"default":function(){return[]}},type:{type:String,"default":"default"}}}},function(e,t){e.exports="<div class=btn-group data-toggle=buttons><slot></slot></div>"},function(e,t,o){e.exports=o(157),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(158)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:String},checked:{type:Boolean,"default":!1}},computed:{type:function(){return this.$parent.type}},methods:{handleClick:function(){var e=this.$parent,t=e.value.indexOf(this.value);-1===t?e.value.push(this.value):e.value.splice(t,1),this.checked=!this.checked}},created:function(){this.checked&&this.$parent.value.push(this.value)}}},function(e,t){e.exports="<label class=btn v-bind:class=\"{\n    'active':checked,\n    'btn-success':type == 'success',\n    'btn-warning':type == 'warning',\n    'btn-info':type == 'info',\n    'btn-danger':type == 'danger',\n    'btn-default':type == 'default',\n    'btn-primary':type == 'primary'\n  }\"><input type=checkbox autocomplete=off :checked=checked @click=\"handleClick\"><slot></slot></label>"},function(e,t){e.exports='<div class=bs-docs-section id=buttons><h1 class=page-header><a href=#buttons class=anchor>Buttons</a></h1><div class=bs-example><h4>Checkbox</h4><checkbox-group :value.sync=checkboxValue><checkbox value=left>Left</checkbox><checkbox value=middle checked>Middle</checkbox><checkbox value=right>Right</checkbox></checkbox-group><p><pre>\nCheckbox value: {{checkboxValue | json}}\n        </pre></p><hr><h4>Radio</h4><radio-group :value.sync=radioValue type=primary><radio value=left>Left</radio><radio value=middle checked>Middle</radio><radio value=right>Right</radio></radio-group><radio-group :value.sync=radioValue type=success><radio value=left>Left</radio><radio value=middle checked>Middle</radio><radio value=right>Right</radio></radio-group><p><pre>\nRadio value: {{radioValue}}\n        </pre></p></div><pre><code class=language-markup><script type=language-mark-up>\n<checkbox-group :value.sync="checkboxValue">\n  <checkbox value="left">Left</checkbox>\n  <checkbox value="middle" checked>Middle</checkbox>\n  <checkbox value="right">Right</checkbox>\n</checkbox-group>\n\n<radio-group :value.sync="radioValue" type="primary">\n  <radio value="left">Left</radio>\n  <radio value="middle" checked>Middle</radio>\n  <radio value="right">Right</radio>\n</radio-group>\n\n<radio-group :value.sync="radioValue" type="success">\n  <radio value="left">Left</radio>\n  <radio value="middle" checked>Middle</radio>\n  <radio value="right">Right</radio>\n</radio-group>\n</script></code></pre><h2>Group options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>value<td>Array<td><td><tr><td>type<td><code>String</code>, one of <code>default</code> <code>primary</code> <code>danger</code> <code>info</code> <code>warning</code> <code>success</code><td><code>default</code><td></table></div>'},function(e,t,o){e.exports=o(161),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(186)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(162),i=a(n),r=o(167),s=a(r),l=o(181),d=a(l);t["default"]={components:{datepicker:i["default"],"v-select":s["default"],"v-option":d["default"]},data:function(){return{disabled:[],value:"Oct/06/2015",format:["MMM/dd/yyyy"]}},watch:{disabled:function(){this.$refs.dp.getDateRange()},format:function(e){this.value=this.$refs.dp.stringify(new Date(this.value))}}}},function(e,t,o){o(163),e.exports=o(165),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(166)},function(e,t,o){var a=o(164);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".datepicker{position:relative;display:inline-block}.datepicker-popup{position:absolute;border:1px solid #ccc;border-radius:5px;background:#fff;margin-top:2px;z-index:1000;box-shadow:0 6px 12px rgba(0,0,0,.175)}.datepicker-inner{width:218px}.datepicker-body{padding:10px}.datepicker-body span,.datepicker-ctrl p,.datepicker-ctrl span{display:inline-block;width:28px;line-height:28px;height:28px;border-radius:4px}.datepicker-ctrl p{width:65%}.datepicker-ctrl span{position:absolute}.datepicker-body span{text-align:center}.datepicker-mouthRange span{width:48px;height:50px;line-height:45px}.datepicker-item-disable{background-color:#fff!important;cursor:not-allowed!important}.datepicker-item-disable,.datepicker-item-gray,.decadeRange span:first-child,.decadeRange span:last-child{color:#999}.datepicker-dateRange-item-active,.datepicker-dateRange-item-active:hover{background:#3276b1!important;color:#fff!important}.datepicker-mouthRange{margin-top:10px}.datepicker-ctrl p,.datepicker-ctrl span,.datepicker-dateRange span,.datepicker-mouthRange span{cursor:pointer}.datepicker-ctrl i:hover,.datepicker-ctrl p:hover,.datepicker-dateRange-item-hover,.datepicker-dateRange span:hover,.datepicker-mouthRange span:hover{background-color:#eee}.datepicker-weekRange span{font-weight:700}.datepicker-label{background-color:#f8f8f8;font-weight:700;padding:7px 0;text-align:center}.datepicker-ctrl{position:relative;height:30px;line-height:30px;font-weight:700;text-align:center}.month-btn{font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker-preBtn{left:2px}.datepicker-nextBtn{right:2px}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(87),i=a(n);t["default"]={props:{value:{type:String,twoWay:!0},format:{"default":"MMMM/dd/yyyy"},disabledDaysOfWeek:{type:Array,"default":function(){return[]}},width:{type:String,"default":"200px"}},data:function(){return{weekRange:["Su","Mo","Tu","We","Th","Fr","Sa"],dateRange:[],decadeRange:[],currDate:new Date,displayDayView:!1,displayMouthView:!1,displayYearView:!1,mouthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},watch:{currDate:function(){this.getDateRange()}},methods:{close:function(){this.displayDayView=this.displayMouthView=this.displayMouthView=!1},inputClick:function(){this.displayMouthView||this.displayYearView?this.displayDayView=!1:this.displayDayView=!this.displayDayView},preNextDecadeClick:function(e){var t=this.currDate.getFullYear(),o=this.currDate.getMonth(),a=this.currDate.getDate();0===e?this.currDate=new Date(t-10,o,a):this.currDate=new Date(t+10,o,a)},preNextMonthClick:function(e){var t=this.currDate.getFullYear(),o=this.currDate.getMonth(),a=this.currDate.getDate();if(0===e){var n=this.getYearMonth(t,o-1);this.currDate=new Date(n.year,n.month,a)}else{var i=this.getYearMonth(t,o+1);this.currDate=new Date(i.year,i.month,a)}},preNextYearClick:function(e){var t=this.currDate.getFullYear(),o=this.currDate.getMonth(),a=this.currDate.getDate();0===e?this.currDate=new Date(t-1,o,a):this.currDate=new Date(t+1,o,a)},yearSelect:function(e){this.displayYearView=!1,this.displayMouthView=!0,this.currDate=new Date(e,this.currDate.getMonth(),this.currDate.getDate())},daySelect:function(e,t){return"datepicker-item-disable"===t.$el.classList[0]?!1:(this.currDate=e,this.value=this.stringify(this.currDate),this.displayDayView=!1,void 0)},switchMouthView:function(){this.displayDayView=!1,this.displayMouthView=!0},switchDecadeView:function(){this.displayMouthView=!1,this.displayYearView=!0},mouthSelect:function(e){this.displayMouthView=!1,this.displayDayView=!0,this.currDate=new Date(this.currDate.getFullYear(),e,this.currDate.getDate())},getYearMonth:function(e,t){return t>11?(e++,t=0):0>t&&(e--,t=11),{year:e,month:t}},stringifyDecadeHeader:function(e){var t=e.getFullYear().toString(),o=t.substring(0,t.length-1)+0,a=parseInt(o,10)+10;return o+"-"+a},stringifyDayHeader:function(e){return this.mouthNames[e.getMonth()]+" "+e.getFullYear()},parseMouth:function(e){return this.mouthNames[e.getMonth()]},stringifyYearHeader:function(e){return e.getFullYear()},stringify:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.format:arguments[1],o=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),i=this.parseMouth(e);return t.replace(/yyyy/g,o).replace(/MMMM/g,i).replace(/MMM/g,i.substring(0,3)).replace(/MM/g,("0"+a).slice(-2)).replace(/dd/g,("0"+n).slice(-2)).replace(/yy/g,o).replace(/M(?!a)/g,a).replace(/d/g,n)},parse:function(e){var t=new Date(e);return isNaN(t.getFullYear())?null:t},getDayCount:function(e,t){var o=[31,28,31,30,31,30,31,31,30,31,30,31];return 1===t?e%400===0||e%4===0&&e%100!==0?29:28:o[t]},getDateRange:function(){var e=this;this.dateRange=[],this.decadeRange=[];for(var t={year:this.currDate.getFullYear(),month:this.currDate.getMonth(),day:this.currDate.getDate()},o=t.year.toString(),a=o.substring(0,o.length-1)+0-1,n=0;12>n;n++)this.decadeRange.push({text:a+n});var i=new Date(t.year,t.month,1),r=i.getDay()+1;0===r&&(r=7);var s=this.getDayCount(t.year,t.month);if(r>1)for(var l=this.getYearMonth(t.year,t.month-1),d=this.getDayCount(l.year,l.month),n=1;r>n;n++){var c=d-r+n+1;this.dateRange.push({text:c,date:new Date(l.year,l.month,c),sclass:"datepicker-item-gray"})}for(var p=function(o){var a=new Date(t.year,t.month,o),n=a.getDay(),i="";if(e.disabledDaysOfWeek.forEach(function(e){n===parseInt(e,10)&&(i="datepicker-item-disable")}),o===t.day&&e.value){var r=e.parse(e.value);r&&r.getFullYear()===t.year&&r.getMonth()===t.month&&(i="datepicker-dateRange-item-active")}e.dateRange.push({text:o,date:a,sclass:i})},n=1;s>=n;n++)p(n);if(this.dateRange.length<42)for(var u=42-this.dateRange.length,f=this.getYearMonth(t.year,t.month+1),n=1;u>=n;n++)this.dateRange.push({text:n,date:new Date(f.year,f.month,n),sclass:"datepicker-item-gray"})}},ready:function(){var e=this;this.$dispatch("child-created",this),this.currDate=this.parse(this.value)||this.parse(new Date),this._closeEvent=i["default"].listen(window,"click",function(t){e.$el.contains(t.target)||e.close()})},beforeDestroy:function(){this._closeEvent&&this._closeEvent.remove()}}},function(e,t){e.exports='<div class=datepicker><input class="form-control datepicker-input" v-bind:style={width:width} @click=inputClick v-model="value"><div class=datepicker-popup v-show=displayDayView><div class=datepicker-inner><div class=datepicker-body><div class=datepicker-ctrl><span class="month-btn datepicker-preBtn" @click=preNextMonthClick(0)>&lt;</span> <span class="month-btn datepicker-nextBtn" @click=preNextMonthClick(1)>&gt;</span><p @click=switchMouthView>{{stringifyDayHeader(currDate)}}</p></div><div class=datepicker-weekRange><span v-for="w in weekRange">{{w}}</span></div><div class=datepicker-dateRange><span v-for="d in dateRange" v-bind:class=d.sclass @click=daySelect(d.date,this)>{{d.text}}</span></div></div></div></div><div class=datepicker-popup v-show=displayMouthView><div class=datepicker-inner><div class=datepicker-body><div class=datepicker-ctrl><span class="month-btn datepicker-preBtn" @click=preNextYearClick(0)>&lt;</span> <span class="month-btn datepicker-nextBtn" @click=preNextYearClick(1)>&gt;</span><p @click=switchDecadeView>{{stringifyYearHeader(currDate)}}</p></div><div class=datepicker-mouthRange><template v-for="m in mouthNames"><span v-bind:class="{\'datepicker-dateRange-item-active\':\n			                    (this.mouthNames[this.parse(this.value).getMonth()]  === m) &&\n			                    this.currDate.getFullYear() === this.parse(this.value).getFullYear()}" @click=mouthSelect($index)>{{m.substr(0,3)}}</span></template></div></div></div></div><div class=datepicker-popup v-show=displayYearView><div class=datepicker-inner><div class=datepicker-body><div class=datepicker-ctrl><span class="month-btn datepicker-preBtn" @click=preNextDecadeClick(0)>&lt;</span> <span class="month-btn datepicker-nextBtn" @click=preNextDecadeClick(1)>&gt;</span><p>{{stringifyDecadeHeader(currDate)}}</p></div><div class="datepicker-mouthRange decadeRange"><template v-for="decade in decadeRange"><span v-bind:class="{\'datepicker-dateRange-item-active\':\n		                    this.parse(this.value).getFullYear() === decade.text}" @click.stop=yearSelect(decade.text)>{{decade.text}}</span></template></div></div></div></div></div>'},function(e,t,o){o(168),e.exports=o(170),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(180)},function(e,t,o){var a=o(169);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".bs_searchbox{padding:4px 8px}.btn-group .dropdown-menu .notify{position:absolute;bottom:5px;width:96%;margin:0 2%;min-height:26px;padding:3px 5px;background:#f5f5f5;border:1px solid #e3e3e3;box-shadow:inset 0 1px 1px rgba(0,0,0,.05);pointer-events:none;opacity:.9}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(171),i=a(n);t["default"]={props:{options:{type:Array,"default":function(){return[]}},value:{twoWay:!0},placeholder:{type:String,"default":"Nothing Selected"},multiple:{type:Boolean,"default":!1},search:{type:Boolean,"default":!1},limit:{type:Number,"default":1024}},ready:function(){this.multiple&&(this.value=[])},data:function(){return{searchText:null,show:!1,showNotify:!1}},computed:{selectedItems:function(){if(this.multiple){if(this.options.length){var e=[],t=!0,o=!1,a=void 0;try{for(var n,r=(0,i["default"])(this.options);!(t=(n=r.next()).done);t=!0){
var s=n.value;-1!==this.value.indexOf(s.value)&&e.push(s.label)}}catch(l){o=!0,a=l}finally{try{!t&&r["return"]&&r["return"]()}finally{if(o)throw a}}return e.join(", ")}var d=[],c=!0,p=!1,u=void 0;try{for(var f,h=(0,i["default"])(this.$children);!(c=(f=h.next()).done);c=!0){var m=f.value;-1!==this.value.indexOf(m.value)&&d.push(m.$els.v.innerText)}}catch(l){p=!0,u=l}finally{try{!c&&h["return"]&&h["return"]()}finally{if(p)throw u}}return d.join(",")}var b=!0,g=!1,v=void 0;try{for(var x,y=(0,i["default"])(this.$children);!(b=(x=y.next()).done);b=!0){var m=x.value;if(m.value==this.value)return m.$els.v.innerText}}catch(l){g=!0,v=l}finally{try{!b&&y["return"]&&y["return"]()}finally{if(g)throw v}}return""},showPlaceholder:function(){return this.multiple?this.value.length<=0:"undefined"==typeof this.value||""==this.value}},watch:{value:function(e){var t=this,o=void 0;o&&clearTimeout(o),e.length>this.limit&&(this.showNotify=!0,this.value.pop(),o=setTimeout(function(){return t.showNotify=!1},1e3))}},methods:{select:function(e){if(0!=this.multiple){var t=this.value.indexOf(e);-1===t?this.value.push(e):this.value.$remove(e)}else this.value=e},toggleDropdown:function(){this.show=!this.show}}}},function(e,t,o){e.exports={"default":o(172),__esModule:!0}},function(e,t,o){o(173),o(44),e.exports=o(179)},function(e,t,o){o(174);var a=o(62);a.NodeList=a.HTMLCollection=a.Array},function(e,t,o){"use strict";var a=o(175),n=o(176),i=o(62),r=o(177);e.exports=o(48)(Array,"Array",function(e,t){this._t=r(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,o=this._i++;return!e||o>=e.length?(this._t=void 0,n(1)):"keys"==t?n(0,o):"values"==t?n(0,e[o]):n(0,[o,e[o]])},"values"),i.Arguments=i.Array,a("keys"),a("values"),a("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,o){var a=o(178),n=o(47);e.exports=function(e){return a(n(e))}},function(e,t,o){var a=o(77);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t,o){var a=o(71),n=o(75);e.exports=o(52).getIterator=function(e){var t=n(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},function(e,t){e.exports='<div class=btn-group v-bind:class={open:show}><button v-el:btn type=button class="btn btn-default dropdown-toggle" @click=toggleDropdown @blur="show = (search ? show:false)"><span class=placeholder v-show=showPlaceholder>{{placeholder}}</span> <span class=content>{{ selectedItems }}</span> <span class=caret></span></button><ul class=dropdown-menu><template v-if=options.length><li v-if=search class=bs-searchbox><input placeholder=Search v-model=searchText class=form-control autocomplete=off></li><li v-for="option in options | filterBy searchText " v-bind:id=option.value style=position:relative><a @mousedown.prevent=select(option.value) style=cursor:pointer>{{ option.label }} <span class="glyphicon glyphicon-ok check-mark" v-show="value.indexOf(option.value) !== -1"></span></a></li></template><slot v-else></slot><div class=notify v-show=showNotify transition=fadein>Limit reached ({{limit}} items max).</div></ul></div>'},function(e,t,o){o(182),e.exports=o(184),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(185)},function(e,t,o){var a=o(183);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,"a span.check-mark{position:absolute;display:inline-block;right:15px;margin-top:5px}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:String}},data:function(){return{chosen:!1}},computed:{chosen:function(){return this.$parent.multiple?-1!==this.$parent.value.indexOf(this.value)?!0:!1:this.$parent.value==this.value}},methods:{handleClick:function(){var e=this.$parent;if(e.multiple){var t=e.value.indexOf(this.value);-1===t?e.value.push(this.value):e.value.splice(t,1)}else e.value=this.value,e.show=!1}}}},function(e,t){e.exports='<li style=position:relative><a @mousedown.prevent=handleClick style=cursor:pointer><span v-el:v><slot></slot></span><slot name=span>{{value}}</slot><span class="glyphicon glyphicon-ok check-mark" v-show=chosen></span></a></li>'},function(e,t){e.exports='<div class=bs-docs-section id=datepicker><h1 class=page-header><a href=#datepicker class=anchor>Datepicker</a></h1><div class=bs-example><p><pre>\nSelected date is: {{new Date(value).toString().slice(0, -23)}}\n        </pre></p><datepicker v-ref:dp :value.sync=value :disabled-days-of-week=disabled :format=format.toString()></datepicker><h4>Disabled days of week</h4><v-select multiple :value.sync=disabled><v-option value=0></v-option><v-option value=1></v-option><v-option value=2></v-option><v-option value=3></v-option><v-option value=4></v-option><v-option value=5></v-option><v-option value=6></v-option></v-select><h4>Format</h4><v-select :value.sync=format><v-option value=yyyy,MM,dd></v-option><v-option value=yyyy-MM-dd></v-option><v-option value=yyyy.MM.dd></v-option><v-option value=MMM/dd/yyyy></v-option><v-option value=MMMM/dd/yyyy></v-option></v-select></div><pre><code class=language-markup><script type=language-mark-up>\n<datepicker\n  :value.sync="value"\n  :disabled-days-of-Week="disabled"\n  :format="format">\n</datepicker>\n\n<select multiple :value.sync="disabled" size=5>\n  <option value="0"></option>\n  <option value="1"></option>\n  <option value="2"></option>\n  <option value="3"></option>\n  <option value="4"></option>\n  <option value="5"></option>\n  <option value="6"></option>\n</select>\n<select  :value.sync="format">\n  <option value="yyyy,MM,dd"></option>\n  <option value="yyyy-MM-dd"></option>\n  <option value="yyyy.MM.dd"></option>\n  <option value="MMM/dd/yyyy"></option>\n  <option value="MMMM/dd/yyyy"></option>\n</select>\n    </script></code></pre><h2>Option</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>value<td><code>String</code><td><td>Value of the input DOM<tr><td>Width<td><code>String</code><td>200px<td>Width of the input DOM<tr><td>format<td><code>String</code><td><code>MMMM/dd/yyyy</code><td>The date format, combination of d, dd, M, MM ,MMM , MMMM, yyyy.<tr><td>disabledDaysOfWeek<td><code>Array</code><td><td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated.</table></div>'},function(e,t,o){e.exports=o(188),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(192)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(189),i=a(n);t["default"]={components:{dropdown:i["default"]}}},function(e,t,o){e.exports=o(190),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(191)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(87),i=a(n);t["default"]={methods:{toggleDropdown:function(e){e.preventDefault(),this.$el.classList.toggle("open")}},ready:function(){var e=this.$el,t=e.querySelector('[data-toggle="dropdown"]');t&&(t.style.borderRadius="4px",t.addEventListener("click",this.toggleDropdown)),this._closeEvent=i["default"].listen(window,"click",function(t){e.contains(t.target)||e.classList.remove("open")})},beforeDestroy:function(){this._closeEvent&&this._closeEvent.remove()}}},function(e,t){e.exports="<div class=btn-group><slot></slot><slot name=dropdown-menu></slot></div>"},function(e,t){e.exports='<div class=bs-docs-section id=dropdown><h1 class=page-header><a href=#dropdown class=anchor>Dropdown</a></h1><div class=bs-example><dropdown><button type=button class="btn btn-default" data-toggle=dropdown>Action <span class=caret></span></button><ul name=dropdown-menu class=dropdown-menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li><a href=#>Separated link</a></li></ul></dropdown><dropdown><button type=button class="btn btn-success" data-toggle=dropdown>Action <span class=caret></span></button><ul name=dropdown-menu class=dropdown-menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li><a href=#>Separated link</a></li></ul></dropdown><dropdown><button type=button class="btn btn-primary" data-toggle=dropdown>Action <span class=caret></span></button><ul name=dropdown-menu class=dropdown-menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li><a href=#>Separated link</a></li></ul></dropdown><div class="btn-group btn-group-justified" role=group><a href=# class="btn btn-default" role=button>Left</a> <a href=# class="btn btn-default" role=button>Middle</a><dropdown><a href=# class="btn btn-default" data-toggle=dropdown>Dropdown <span class=caret></span></a><ul name=dropdown-menu class=dropdown-menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li><a href=#>Separated link</a></li></ul></dropdown></div></div><pre><code class=language-markup><script type=language-mark-up>\n<dropdown>\n  <button type="button" class="btn btn-default" data-toggle="dropdown">\n    Action\n    <span class="caret"></span>\n  </button>\n  <ul name="dropdown-menu" class="dropdown-menu">\n    <li><a href="#">Action</a></li>\n    <li><a href="#">Another action</a></li>\n    <li><a href="#">Something else here</a></li>\n    <li role="separator" class="divider"></li>\n    <li><a href="#">Separated link</a></li>\n  </ul>\n</dropdown>\n</script></code></pre><h2>Usage</h2><p>Just use as <a target=_blank href=http://getbootstrap.com/javascript/#dropdowns>original Bootstrap way</a>. Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.</p></div>'},function(e,t,o){e.exports=o(194),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(204)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(195),i=a(n);t["default"]={data:function(){return{showModal:!1,fadeModal:!1,zoomModal:!1,showCustomModal:!1,largeModal:!1,smallModal:!1}},components:{modal:i["default"]}}},function(e,t,o){o(196),e.exports=o(198),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(203)},function(e,t,o){var a=o(197);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".modal{-webkit-transition:all .3s ease;transition:all .3s ease}.modal.in{background-color:rgba(0,0,0,.5)}.modal.zoom .modal-dialog{-webkit-transform:scale(.1);transform:scale(.1);top:300px;opacity:0;-webkit-transition:all .3s;transition:all .3s}.modal.zoom.in .modal-dialog{-webkit-transform:scale(1);transform:scale(1);-webkit-transform:translate3d(0,-300px,0);transform:translate3d(0,-300px,0);opacity:1}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(199),i=a(n),r=o(131),s=a(r),l=o(87),d=a(l);t["default"]={props:{title:{type:String,"default":""},show:{require:!0,type:Boolean,twoWay:!0},width:{"default":null},callback:{type:Function,"default":function(){}},effect:{type:String,"default":null},backdrop:{type:Boolean,"default":!0},large:{type:Boolean,"default":!1},small:{type:Boolean,"default":!1}},watch:{show:function(e){var t=this,o=this.$el,a=document.body,n=(0,s["default"])();e?(o.querySelector(".modal-content").focus(),o.style.display="block",setTimeout(function(){return o.classList.add("in")},0),a.classList.add("modal-open"),0!==n&&(a.style.paddingRight=n+"px"),this.backdrop&&(this._blurModalContentEvent=d["default"].listen(this.$el,"click",function(e){e.target===o&&(t.show=!1)}))):(this._blurModalContentEvent&&this._blurModalContentEvent.remove(),o.classList.remove("in"),setTimeout(function(){o.style.display="none",a.classList.remove("modal-open"),a.style.paddingRight="0"},300))}},computed:{optionalWidth:function(){return null===this.width?null:(0,i["default"])(this.width)?this.width+"px":this.width}},methods:{close:function(){this.show=!1}}}},function(e,t,o){e.exports={"default":o(200),__esModule:!0}},function(e,t,o){o(201),e.exports=o(52).Number.isInteger},function(e,t,o){var a=o(50);a(a.S,"Number",{isInteger:o(202)})},function(e,t,o){var a=o(72),n=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&n(e)===e}},function(e,t){e.exports="<div role=dialog v-bind:class=\"{\n    'modal':true,\n    'fade':effect === 'fade',\n    'zoom':effect === 'zoom'\n    }\"><div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=document v-bind:style=\"{width: optionalWidth}\"><div class=modal-content><slot name=modal-header><div class=modal-header><button type=button class=close @click=close><span>&times;</span></button><h4 class=modal-title>{{title}}</h4></div></slot><slot name=modal-body><div class=modal-body></div></slot><slot name=modal-footer><div class=modal-footer><button type=button class=\"btn btn-default\" @click=close>Close</button> <button type=button class=\"btn btn-primary\" @click=callback>Save changes</button></div></slot></div></div></div>"},function(e,t){e.exports='<div class=bs-docs-section id=modal><h1 class=page-header><a href=#modal class=anchor>Modal</a></h1><div class=bs-example><button class="btn btn-default" @click="showModal = true">Show modal</button><modal title="Modal title" :show.sync=showModal><div slot=modal-header class=modal-header><h4 class=modal-title>Modal <b>Title</b></h4></div><div slot=modal-body class=modal-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></modal><button class="btn btn-success" @click="fadeModal = true">Fade modal</button><modal title="Fade Modal" :show.sync=fadeModal effect=fade width=800><div slot=modal-body class=modal-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></modal><button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button><modal title="Zoom Modal" :show.sync=zoomModal effect=zoom width=400><div slot=modal-body class=modal-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></modal><button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button><modal :show.sync=showCustomModal effect=fade width=50%><div slot=modal-header class=modal-header><h4 class=modal-title><i>Custom</i> <code>Modal</code> <b>Title</b></h4></div><div slot=modal-body class=modal-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><div slot=modal-footer class=modal-footer><button type=button class="btn btn-default" @click="showCustomModal = false">Exit</button> <button type=button class="btn btn-success" @click="showCustomModal = false">Custom Save</button></div></modal><button class="btn btn-warning" @click="largeModal = true">Large modal</button><modal title="Large Modal" :show.sync=largeModal large><div slot=modal-body class=modal-body><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></modal><button class="btn btn-danger" @click="smallModal = true">Small modal</button><modal title="Small Modal" :show.sync=smallModal small><div slot=modal-body class=modal-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></modal></div><pre><code class=language-markup><script type=language-mark-up>\n<button class="btn btn-default"\n  @click="showModal = true"\n  >Show modal\n</button>\n<modal :show.sync="showModal">\n  <div slot="modal-header" class="modal-header">\n    <h4 class="modal-title">Modal title</h4>\n  </div>\n  <div slot="modal-body" class="modal-body">...</div>\n</modal>\n\n<button class="btn btn-primary"\n  @click="fadeModal = true">\n  Fade modal\n</button>\n<modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">\n  <div slot="modal-body" class="modal-body">...</div>\n</modal>\n\n<button class="btn btn-success"\n  @click="zoomModal = true">\n  Zoom modal\n</button>\n<modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">\n  <div slot="modal-body" class="modal-body">...</div>\n</modal>\n\n<button class="btn btn-default"\n  @click="showCustomModal = true">\n  Show custom modal\n</button>\n<modal :show.sync="showCustomModal" effect="fade" width="400">\n  <div slot="modal-header" class="modal-header">\n    <h4 class="modal-title">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div slot="modal-body" class="modal-body">...</div>\n  <div slot="modal-footer" class="modal-footer">\n    <button type="button" class="btn btn-default" @click=\'showCustomModal = false\'>Exit</button>\n    <button type="button" class="btn btn-success" @click=\'showCustomModal = false\'>Custom Save</button>\n  </div>\n</modal>\n<button class="btn btn-default"\n  @click="largeModal = true"\n  >Large Modal\n</button>\n<modal :show.sync="largeModal">\n  <div slot="modal-body" class="modal-body">...</div>\n</modal>\n<button class="btn btn-default"\n  @click="smallModal = true"\n  >Small Modal\n</button>\n<modal :show.sync="smallModal">\n  <div slot="modal-body" class="modal-body">...</div>\n</modal>\n  </script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>title<td><code>String</code><td><td>Title of the modal component.<tr><td>width<td><code>Number, String or null</code><td><code>null</code><td>Pass a Number in pixels or a String with relational sizes ( ex: \'80%\' or \'5em\' ). If null, the modal will be responsive per bootstrap\'s default.<tr><td>callback<td><code>Function</code><td><td>A callback Function when you click the modal primary button.<tr><td>large<td><code>Boolean</code><td><code>false</code><td>Creates a large modal ( see boostrap\'s documentation for .modal-lg )<tr><td>small<td><code>Boolean</code><td><code>false</code><td>Creates a small modal ( see boostrap\'s documentation for .modal-sm )</table><h2>Usage</h2><p>If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you need to put custom HTML or a custom footer, you can override the header or footer block by using <code>&lt;div slot="modal-title" class="modal-title"&gt;...&lt;/div&gt;</code> and <code>&lt;div slot="modal-footer" class="modal-footer"&gt;...&lt;/div&gt;</code>.</p></div>'},function(e,t,o){e.exports=o(206),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(212)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(207),i=a(n);t["default"]={data:function(){return{title:"Title",text:"Lorem ipsum dolor sit amet"}},components:{popover:i["default"]}}},function(e,t,o){o(208),e.exports=o(210),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(211)},function(e,t,o){var a=o(209);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".fade-transition,.scale-transition{display:block}.scale-enter{-webkit-animation:scale-in .15s ease-in;animation:scale-in .15s ease-in}.scale-leave{-webkit-animation:scale-out .15s ease-out;animation:scale-out .15s ease-out}@-webkit-keyframes scale-in{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale-in{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes scale-out{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes scale-out{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(122),i=a(n);t["default"]={mixins:[i["default"]]}},function(e,t){e.exports="<span v-el:trigger><slot></slot></span><div class=popover v-bind:class=\"{\n    'top':placement === 'top',\n    'left':placement === 'left',\n    'right':placement === 'right',\n    'bottom':placement === 'bottom'\n    }\" v-el:popover v-show=show :transition=effect><div class=arrow></div><h3 class=popover-title v-show=title>{{title}}</h3><div class=popover-content>{{{content}}}</div></div>"},function(e,t){e.exports='<div class=bs-docs-section id=popover><h1 class=page-header><a href=#popover class=anchor>Popover</a></h1><div class=bs-example><popover effect=fade :header=true title=Title content="Lorem ipsum dolor sit amet" placement=top><button class="btn btn-default">Popover on top</button></popover><popover effect=fade :header=true title=Title content="Lorem ipsum dolor sit amet" placement=left><button class="btn btn-default">Popover on left</button></popover><popover effect=fade :header=true title=Title content="Lorem ipsum dolor sit amet" placement=right><button class="btn btn-default">Popover on right</button></popover><popover effect=fade placement=bottom :header=true title=Title content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"><button class="btn btn-default">Popover on bottom</button></popover><hr><h4>No title</h4><popover effect=fade title=Title content="Lorem ipsum dolor sit amet" placement=top><button class="btn btn-default">Popover on top</button></popover><popover effect=fade title=Title content="Lorem ipsum dolor sit amet" placement=left><button class="btn btn-default">Popover on left</button></popover><popover effect=fade title=Title content="Lorem ipsum dolor sit amet" placement=right><button class="btn btn-default">Popover on right</button></popover><popover effect=fade placement=bottom title=Title content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"><button class="btn btn-default">Popover on bottom</button></popover><hr><h4>Triger</h4><p><popover effect=scale title=Title content="Lorem ipsum dolor sit amet" placement=top trigger=hover><button class="btn btn-default">Mouseenter</button></popover></p><popover effect=scale title=Title content="Lorem ipsum dolor sit amet" placement=bottom trigger=focus><input class=form-control placeholder=Focus></popover></div><pre><code class=language-markup><script type=language-mark-up>\n<popover\n  effect="fade"\n  placement="bottom"\n  title="Title"\n  content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">\n  <button class="btn btn-default ">Popover on bottom</button>\n</popover>\n</script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>trigger<td><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code><td><code>click</code><td>How the popover is triggered.<tr><td>effect<td><code>String</code>, one of <code>scale</code> <code>fade</code><td><code>fade</code><td><tr><td>title<td><code>String</code><td><td><tr><td>content<td><code>String</code><td><td><tr><td>header<td><code>Boolean</code><td><code>true</code><td>Whether to show the header.<tr><td>placement<td><code>String</code>, one of <code>top</code> <code>left</code> <code>right</code> <code>bottom</code><td><td>How to position the popover.</table></div>'},function(e,t,o){e.exports=o(214),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(218)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(215),i=a(n);t["default"]={data:function(){return{dynamicData:[5,15,25,35,45],stackedData:[10,20,30,40]}},components:{progressbar:i["default"]},methods:{dynamicClick:function(){this.dynamicData=this.dynamicData.map(function(){return Math.floor(50*Math.random())})},stackedClick:function(){var e=100;this.stackedData=this.stackedData.map(function(){var t=Math.floor(Math.random()*e);return e-=t,t})}}}},function(e,t,o){e.exports=o(216),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(217)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{now:{type:Number,require:!0},label:{type:Boolean,"default":!1},type:{type:String},striped:{type:Boolean,"default":!1},animated:{type:Boolean,"default":!1}}}},function(e,t){e.exports="<div role=progressbar v-bind:class=\"{\n    'progress-bar' : true,\n    'progress-bar-success':type == 'success',\n    'progress-bar-warning':type == 'warning',\n    'progress-bar-info':type == 'info',\n    'progress-bar-danger':type == 'danger',\n    'progress-bar-striped':striped,\n    'active':animated\n    }\" v-bind:style=\"{width: now + '%'}\">{{label ? now + '%':'' }}</div>"},function(e,t){e.exports='<div class=bs-docs-section id=progressbar><h1 class=page-header><a href=#progressbar class=anchor>Progressbar</a></h1><div class=bs-example><h4>Static</h4><div class=row><div class=col-md-4><div class=progress><progressbar :now=20 type=success></progressbar></div></div><div class=col-md-4><div class=progress><progressbar :now=40 type=info></progressbar></div></div><div class=col-md-4><div class=progress><progressbar :now=60 type=primary></progressbar></div></div></div><hr><h4>Dynamic <button type=button class="btn btn-default" @click=dynamicClick>Randomize</button></h4><div class=progress><progressbar :now="dynamicData[0] * 2" type=info></progressbar></div><div class=progress><progressbar :now="dynamicData[1] * 2" type=warning></progressbar></div><div class=progress><progressbar :now="dynamicData[2] * 2" type=danger></progressbar></div><div class=progress><progressbar :now="dynamicData[3] * 2" type=success striped></progressbar></div><div class=progress><progressbar :now="dynamicData[4] * 2" type=success striped animated></progressbar></div><hr><h4>Stacked <button type=button class="btn btn-default" @click=stackedClick>Randomize</button></h4><div class=progress><progressbar :now=stackedData[0] label type=warning striped></progressbar><progressbar :now=stackedData[1] label type=success></progressbar><progressbar :now=stackedData[2] label type=danger></progressbar><progressbar :now=stackedData[3] label type=primary striped animated></progressbar></div></div><pre><code class=language-markup><script type=language-mark-up>\n<!-- Stacked -->\n<div class="progress">\n  <progressbar :now="" label type="warning" striped></progressbar>\n\n  <progressbar :now="" label type="success" ></progressbar>\n\n  <progressbar :now="" label type="danger"></progressbar>\n\n  <progressbar :now="" label type="primary" striped animated></progressbar>\n</div>\n<!-- Single -->\n<div class="progress">\n  <progressbar :now="" label type="warning" striped></progressbar>\n</div>\n</script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>now<td><code>Number</code><td><td>The current value of progress completed.<tr><td>type<td><code>String</code><td><td>Style type. Possible values are \'success\', \'warning\' etc.<tr><td>label<td><code>Boolean</code><td>false<td>Whether to show the label.<tr><td>striped<td><code>Boolean</code><td><code>false</code><td>Whether the progressbar has striped effect or not.</table></div>'},function(e,t,o){e.exports=o(220),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(221)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(167),i=a(n),r=o(181),s=a(r);t["default"]={components:{vSelect:i["default"],vOption:s["default"]},data:function(){return{fruitOptions:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"}],arr:[],single:[],multiple:[],multipleLimit:[],custom:[]}}}},function(e,t){e.exports='<div class=bs-docs-section id=select><h1 class=page-header><a href=#select class=anchor>Select</a></h1><p>This a <a target=_blank href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.</p><div class=bs-example><p><pre>\nSelect data : {{single}}\n        </pre></p><v-select :value.sync=single><v-option value=Apple></v-option><v-option value=Banana></v-option><v-option value=Cherry></v-option><v-option value=Orange></v-option><v-option value=Grape></v-option></v-select><hr><h4>Multiple select</h4><p><pre>\nSelect data : {{multiple.join(\', \')}}\n        </pre></p><v-select multiple :value.sync=multiple><v-option value=Apple></v-option><v-option value=Banana></v-option><v-option value=Cherry></v-option><v-option value=Orange></v-option><v-option value=Grape></v-option></v-select><hr><h4>Multiple select limit</h4><p><pre>\nSelect data : {{multipleLimit.join(\', \')}}\n        </pre></p><v-select multiple :limit=2 :value.sync=multipleLimit><v-option value=Apple></v-option><v-option value=Banana></v-option><v-option value=Cherry></v-option><v-option value=Orange></v-option><v-option value=Grape></v-option></v-select><hr><h4>Custom template</h4><p><pre>\nSelect data : {{custom.join(\', \')}}\n        </pre></p><v-select multiple :value.sync=custom><v-option value=Star><span slot=span class="glyphicon glyphicon-star"></span> Star</v-option><v-option value=Heart><span slot=span class="glyphicon glyphicon-heart"></span> Heart</v-option><v-option value=Film><span slot=span class="glyphicon glyphicon-film"></span> Film</v-option><v-option value=Inbox><span slot=span class="glyphicon glyphicon-inbox"></span> Inbox</v-option></v-select><hr><h4>Array/Collection driven w/ search</h4><p>Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.<pre>\nSelect data : {{arr}}\n        </pre></p><v-select :value.sync=arr :options=fruitOptions :search=true></v-select></div><pre><code class=language-markup><script type=language-mark-up>\n<v-select>\n  <v-option value="Apple"></v-option>\n  <v-option value="Banana"></v-option>\n  <v-option value="Cherry"></v-option>\n  <v-option value="Orange"></v-option>\n  <v-option value="Grape"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value="Apple"></v-option>\n  <v-option value="Banana"></v-option>\n  <v-option value="Cherry"></v-option>\n  <v-option value="Orange"></v-option>\n  <v-option value="Grape"></v-option>\n</v-select>\n<hr>\n<v-select multiple :limit="2">\n  <v-option value="Apple"></v-option>\n  <v-option value="Banana"></v-option>\n  <v-option value="Cherry"></v-option>\n  <v-option value="Orange"></v-option>\n  <v-option value="Grape"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value="Star"><span slot="span" class="glyphicon glyphicon-star"></span> Star</v-option>\n  <v-option value="Heart"><span slot="span" class="glyphicon glyphicon-heart"></span> Heart</v-option>\n  <v-option value="Film"><span slot="span" class="glyphicon glyphicon-film"></span> Film</v-option>\n  <v-option value="Inbox"><span slot="span" class="glyphicon glyphicon-inbox"></span> Inbox</v-option>\n</v-select>\n\n<v-select :value.sync="arr" :options="fruitOptions" :search="true">\n</v-select>\nfruitOptions = [\n  {value:\'apple\', label:\'Apple\'},\n  {value:\'banana\', label:\'Banana\'},\n  {value:\'cherry\', label:\'Cherry\'},\n  {value:\'orange\', label:\'Orange\'},\n  {value:\'grape\', label:\'Grape\'},\n]\n\n    </script></code></pre><h2>Select Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>value<td><code>Array</code><td><code>[]</code><td><tr><td>placeholder<td><code>String</code><td>Nothing Selected<td><tr><td>multiple<td><code>Boolean</code><td><code>false</code><td><tr><td>limit<td><code>Number</code><td><code>1024</code><td>Limit the number of elements you are allowed to select.</table></div>';
},function(e,t,o){e.exports=o(223),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(234)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(224),i=a(n),r=o(229),s=a(r);t["default"]={components:{tabs:i["default"],tab:s["default"]}}},function(e,t,o){o(225),e.exports=o(227),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(228)},function(e,t,o){var a=o(226);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".nav-tabs[_v-1ab76b25]{margin-bottom:15px}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{effect:{type:String,"default":"fadein"}},data:function(){return{renderData:[],activeIndex:0}},methods:{handleTabListClick:function(e,t){t.disabled||(this.activeIndex=e)}}}},function(e,t){e.exports='<div _v-1ab76b25=""><ul class="nav nav-tabs" role=tablist _v-1ab76b25=""><li v-for="r in renderData" v-bind:class="{\n                  \'active\': ($index === activeIndex),\n                  \'disabled\': r.disabled\n                }" @click.prevent="handleTabListClick($index, r)" :disabled=r.disabled _v-1ab76b25=""><a href=# _v-1ab76b25="">{{r.header}}</a></li></ul><div class=tab-content v-el:tabcontent="" _v-1ab76b25=""><slot _v-1ab76b25=""></slot></div></div>'},function(e,t,o){o(230),e.exports=o(232),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(233)},function(e,t,o){var a=o(231);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".tab-content>.tab-pane[_v-16bcbd4d]{display:block}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{header:{type:String},disabled:{type:Boolean,"default":!1}},data:function(){return{index:0,show:!1}},computed:{show:function(){return this.$parent.activeIndex==this.index},transition:function(){return this.$parent.effect}},created:function(){this.$parent.renderData.push({header:this.header,disabled:this.disabled})},ready:function(){for(var e in this.$parent.$children)if(this.$parent.$children[e].$el==this.$el){this.index=e;break}}}},function(e,t){e.exports='<div role=tabpanel class=tab-pane v-bind:class={hide:!show} v-show=show :transition=transition _v-16bcbd4d=""><slot _v-16bcbd4d=""></slot></div>'},function(e,t){e.exports='<div class=bs-docs-section id=tabs><h1 class=page-header><a href=#tabs class=anchor>Tabs</a></h1><div class=bs-example><tabs><tab header=one><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></tab><tab header=two><p>Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p></tab><tab header=three disabled>...</tab></tabs></div><pre><code class=language-markup><script type=language-mark-up>\n<tabs>\n  <tab header="one">\n    ...\n  </tab>\n  <tab header="two">\n    ...\n  </tab>\n  <tab header="three" disabled>\n    ...\n  </tab>\n</tabs>\n</script></code></pre><h2>Tab Options (NOT TABS)</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>header<td><code>String</code><td><td>Heading text of the tab.<tr><td>disabled<td><code>Boolean</code><td>false<td>Whether tab is clickable and can be activated.</table></div>'},function(e,t,o){e.exports=o(236),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(237)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(118),i=a(n);t["default"]={data:function(){return{title:"Title",text:"Lorem ipsum dolor sit amet"}},components:{tooltip:i["default"]}}},function(e,t){e.exports='<div class=bs-docs-section id=tooltip><h1 class=page-header><a href=#tooltip class=anchor>Tooltip</a></h1><div class=bs-example><tooltip :header=true content="Lorem ipsum dolor sit amet" placement=top><button class="btn btn-default">tooltip on top</button></tooltip><tooltip :header=true content="Lorem ipsum dolor sit amet" placement=left><button class="btn btn-default">tooltip on left</button></tooltip><tooltip :header=true content="Lorem ipsum dolor sit amet" placement=right><button class="btn btn-default">tooltip on right</button></tooltip><tooltip placement=bottom content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"><button class="btn btn-default">tooltip on bottom</button></tooltip><hr><h4>Triger</h4><p><tooltip trigger=click effect=scale content="Lorem ipsum dolor sit amet" placement=top trigger=hover><button class="btn btn-default">Click</button></tooltip></p><tooltip effect=scale content="Lorem ipsum dolor sit amet" placement=bottom trigger=focus><input class=form-control placeholder=Focus></tooltip></div><pre><code class=language-markup><script type=language-mark-up>\n<tooltip\n  effect="scale"\n  placement="bottom"\n  content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">\n  <button class="btn btn-default ">tooltip on bottom</button>\n</tooltip>\n</script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>trigger<td><code>String</code>, one of <code>hover</code> <code>focus</code> <code>hover</code><td><code>click</code><td>How the tooltip is triggered.<tr><td>effect<td><code>String</code>, one of <code>scale</code> <code>fadein</code><td><code>scale</code><td><tr><td>content<td><code>String</code><td><td><td>placement<td><code>String</code>, one of <code>top</code> <code>left</code> <code>right</code> <code>bottom</code><td><td>How to position the tooltip.</table></div>'},function(e,t,o){e.exports=o(239),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(246)},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(240),i=a(n),r=o(118),s=a(r);t["default"]={components:{typeahead:i["default"],tooltip:s["default"]},partials:{},data:function(){return{USstate:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],asyncTemplate:"{{ item.formatted_address }}",githubTemplate:'<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'}},methods:{googleCallback:function(e,t){var o=t;o.reset(),o.query=e.formatted_address},githubCallback:function(e){window.open(e.html_url,"_blank")}}}},function(e,t,o){o(241),e.exports=o(243),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=o(245)},function(e,t,o){var a=o(242);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,".dropdown-menu>li>a{cursor:pointer}",""])},function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(244),i=a(n),r={created:function(){this.items=this.primitiveData},partials:{"default":'<span v-html="item | highlight query"></span>'},props:{data:{type:Array},limit:{type:Number,"default":8},async:{type:String},template:{type:String},templateName:{type:String,"default":"default"},key:{type:String},matchCase:{type:Boolean,"default":!1},onHit:{type:Function,"default":function(e){this.reset(),this.query=e}},placeholder:{type:String}},data:function(){return{query:"",showDropdown:!1,noResults:!0,current:0,items:[]}},computed:{primitiveData:function(){var e=this;return this.data?this.data.filter(function(t){return t=e.matchCase?t:t.toLowerCase(),-1!==t.indexOf(e.query)}).slice(0,this.limit):void 0}},ready:function(){this.templateName&&"default"!==this.templateName&&Vue.partial(this.templateName,this.template)},methods:{update:function(){var e=this;return this.query?(this.data&&(this.items=this.primitiveData,this.showDropdown=this.items.length?!0:!1),void(this.async&&(0,i["default"])(this.async+this.query,function(t){e.items=t[e.key].slice(0,e.limit),e.showDropdown=e.items.length?!0:!1}))):(this.reset(),!1)},reset:function(){this.items=[],this.query="",this.loading=!1,this.showDropdown=!1},setActive:function(e){this.current=e},isActive:function(e){return this.current===e},hit:function(e){console.log("e",e,"e.targetVm",e.targetVM),e.preventDefault(),this.onHit(this.items[this.current],this)},up:function(){this.current>0&&this.current--},down:function(){this.current<this.items.length-1&&this.current++}},filters:{highlight:function(e,t){return e.replace(new RegExp("("+t+")","gi"),"<strong>$1</strong>")}}};t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var e=JSON.parse(o.responseText);t&&t(e)}},o.open("GET",e),o.send()}},function(e,t){e.exports='<div style="position: relative" v-bind:class="{\'open\':showDropdown}"><input class=form-control :placeholder=placeholder autocomplete=off v-model=query @input=update @keydown.up=up @keydown.down=down @keydown.enter=hit @keydown.esc=reset @blur="showDropdown = false"><ul class=dropdown-menu v-el:dropdown><li v-for="item in items" v-bind:class="{\'active\': isActive($index)}"><a @mousedown.prevent=hit @mousemove=setActive($index)><partial :name=templateName></partial></a></li></ul></div>'},function(e,t){e.exports='<div class=bs-docs-section id=typeahead><h1 class=page-header><a href=#typeahead class=anchor>Typeahead</a></h1><div class=bs-example><h4>Static arrays</h4><typeahead :data=USstate placeholder="USA states"></typeahead><hr><h4>Asynchronous results<tooltip trigger=click content="The suggestions via a Google Map API, are you behind a FireWall?" placement=top><small style=cursor:pointer>(not working?)</small></tooltip></h4><typeahead placeholder="CCCAddress, async via maps.googleapis.com" key=results async template-name=async :template=asyncTemplate :on-hit=googleCallback></typeahead><hr><h4>Custom templates for results</h4><typeahead placeholder="Github users, async via api.github.com" key=items async template-name=github :template=githubTemplate :on-hit=githubCallback></typeahead></div><pre><code class=language-markup><script type=language-mark-up>\n<h4>Static arrays</h4>\n<typeahead\n  :data="USstate"\n  placeholder="USA states">\n</typeahead>\n\n<h4>Asynchronous results</h4>\n  <typeahead\n    placeholder="Address, async via maps.googleapis.com"\n    key="results"\n    src="https://maps.googleapis.com/maps/api/geocode/json?address="\n    template-name="async"\n    :template="asyncTemplate"\n    :on-hit="googleCallback">\n</typeahead>\n\n<h4>Custom templates for results</h4>\n  <typeahead\n    placeholder="Github users, async via api.github.com"\n    key="items"\n    src="https://api.github.com/search/users?q="\n    template-name="typeahead-github-template"\n    :template="githubTemplate"\n    :on-hit="githubCallback">\n</typeahead>\n  </script></code></pre><pre><code class=language-javascript><script type=language-javascript>\nnew Vue {\n  components: {\n    typeahead\n  },\n  data() {\n    return {\n      USstate: [\'Alabama\', \'Alaska\', \'Arizona\',...],\n      asynchronous: \'{{formatted_address}}\',\n      customTemplate: \'<img width="18px" height="18px" v-attr="src:avatar_url"/>\' +\n      \'<span>{{login}}</span>\'\n    }\n  },\n  methods: {\n    googleCallback(items, targetVM) {\n      const that = targetVM;\n      that.reset()\n      that.query = items.formatted_address\n    },\n    githubCallback(items) {\n      window.open(items.html_url, \'_blank\')\n    }\n  }\n}\n    </script></code></pre><h2>Options</h2><table class="table table-bordered"><thead><tr><th>Name<th>Type<th>Default<th>Description<tbody><tr><td>data<td><code>Array</code><td><td>The local data source for suggestions. Expected to be a primitive array.<tr><td>async<td><code>String</code><td><td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.<tr><td>limit<td><code>Number</code><td><code>8</code><td>The max number of suggestions to be displayed.<tr><td>key<td><code>String</code><td><td>The remote JSON key you want to render.<tr><td>match-case<td><code>Boolean</code><td><code>false</code><td>Case sensitive for suggestions.<tr><td>on-hit<td><code>Function</code><td><td>A callback function when you click or hit return on an item.<tr><td>template<td><code>String</code><td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code><td>Used to render suggestion.</table></div>'},function(e,t,o){var a=o(248);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,"/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */body{position:relative}.table code{font-size:13px;font-weight:400}.btn-outline{color:#563d7c;background-color:transparent;border-color:#563d7c}.btn-outline:active,.btn-outline:focus,.btn-outline:hover{color:#fff;background-color:#563d7c;border-color:#563d7c}.btn-outline-inverse{color:#fff;background-color:transparent;border-color:#cdbfe3}.btn-outline-inverse:active,.btn-outline-inverse:focus,.btn-outline-inverse:hover{color:#563d7c;text-shadow:none;background-color:#fff;border-color:#fff}.bs-docs-booticon{display:block;font-weight:500;color:#fff;text-align:center;cursor:default;background-color:#563d7c;border-radius:15%}.bs-docs-booticon-sm{width:30px;height:30px;font-size:20px;line-height:28px}.bs-docs-booticon-lg{width:144px;height:144px;font-size:108px;line-height:140px}.bs-docs-booticon-inverse{color:#563d7c;background-color:#fff}.bs-docs-booticon-outline{background-color:transparent;border:1px solid #cdbfe3}.bs-docs-nav{margin-bottom:0;background-color:#fff;border-bottom:0}.bs-home-nav .bs-nav-b{display:none}.bs-docs-nav .navbar-brand,.bs-docs-nav .navbar-nav>li>a{font-weight:500;color:#563d7c}.bs-docs-nav .navbar-nav>.active>a,.bs-docs-nav .navbar-nav>.active>a:hover,.bs-docs-nav .navbar-nav>li>a:hover{color:#463265;background-color:#f9f9f9}.bs-docs-nav .navbar-toggle .icon-bar{background-color:#563d7c}.bs-docs-nav .navbar-header .navbar-toggle{border-color:#fff}.bs-docs-nav .navbar-header .navbar-toggle:focus,.bs-docs-nav .navbar-header .navbar-toggle:hover{background-color:#f9f9f9;border-color:#f9f9f9}.bs-docs-footer{padding-top:40px;padding-bottom:40px;margin-top:100px;color:#777;text-align:center;border-top:1px solid #e5e5e5}.bs-docs-footer-links{padding-left:0;margin-top:20px;color:#999}.bs-docs-footer-links li{display:inline;padding:0 2px}.bs-docs-footer-links li:first-child{padding-left:0}@media (min-width:768px){.bs-docs-footer p{margin-bottom:0}}.bs-docs-social{margin-bottom:20px;text-align:center}.bs-docs-social-buttons{display:inline-block;padding-left:0;margin-bottom:0;list-style:none}.bs-docs-social-buttons li{display:inline-block;padding:5px 8px;line-height:1}.bs-docs-social-buttons .twitter-follow-button{width:225px!important}.bs-docs-social-buttons .twitter-share-button{width:98px!important}.github-btn{overflow:hidden;border:0}.bs-docs-header,.bs-docs-masthead{position:relative;padding:30px 15px;color:#cdbfe3;text-align:center;text-shadow:0 1px 0 rgba(0,0,0,.1);background-color:#6f5499;background-image:-webkit-gradient(linear,left top,left bottom,from(#563d7c),to(#6f5499));background-image:-webkit-linear-gradient(top,#563d7c 0,#6f5499 100%);background-image:linear-gradient(to bottom,#563d7c 0,#6f5499 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c',endColorstr='#6F5499',GradientType=0);background-repeat:repeat-x}.bs-docs-masthead .bs-docs-booticon{margin:0 auto 30px}.bs-docs-masthead h1{font-weight:300;line-height:1;color:#fff}.bs-docs-masthead .lead{margin:0 auto 30px;font-size:20px;color:#fff}.bs-docs-masthead .version{margin-top:-15px;margin-bottom:30px;color:#9783b9}.bs-docs-masthead .btn{width:100%;padding:15px 30px;font-size:20px}@media (min-width:480px){.bs-docs-masthead .btn{width:auto}}@media (min-width:768px){.bs-docs-masthead h1{font-size:60px}.bs-docs-masthead .lead{font-size:24px}}@media (min-width:992px){.bs-docs-masthead .lead{width:80%;font-size:30px}}.bs-docs-header{margin-bottom:40px;font-size:20px}.bs-docs-header h1{margin-top:0;color:#fff}.bs-docs-header p{margin-bottom:0;font-weight:300;line-height:1.4}.bs-docs-header .container{position:relative}@media (min-width:768px){.bs-docs-header{padding-top:60px;padding-bottom:60px;font-size:24px;text-align:left}.bs-docs-header h1{font-size:60px;line-height:1}}@media (min-width:992px){.bs-docs-header h1,.bs-docs-header p{margin-right:380px}}.carbonad{width:auto!important;height:auto!important;padding:20px!important;margin:30px -30px -31px!important;overflow:hidden;font-size:13px!important;line-height:16px!important;text-align:left;background:transparent!important;border:solid #866ab3!important;border-width:1px 0!important}.carbonad-img{margin:0!important}.carbonad-tag,.carbonad-text{display:block!important;float:none!important;width:auto!important;height:auto!important;margin-left:145px!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important}.carbonad-text{padding-top:0!important}.carbonad-tag{color:inherit!important;text-align:left!important}.carbonad-tag a,.carbonad-text a{color:#fff!important}.carbonad #azcarbon>img{display:none}@media (min-width:480px){.carbonad{width:330px!important;margin:20px auto!important;border-width:1px!important;border-radius:4px}.bs-docs-masthead .carbonad{margin:50px auto 0!important}}@media (min-width:768px){.carbonad{margin-right:0!important;margin-left:0!important}}@media (min-width:992px){.carbonad{position:absolute;top:0;right:15px;width:330px!important;padding:15px!important;margin:0!important}.bs-docs-masthead .carbonad{position:static}}.bs-docs-featurette{padding-top:40px;padding-bottom:40px;font-size:16px;line-height:1.5;color:#555;text-align:center;background-color:#fff;border-bottom:1px solid #e5e5e5}.bs-docs-featurette+.bs-docs-footer{margin-top:0;border-top:0}.bs-docs-featurette-title{margin-bottom:5px;font-size:30px;font-weight:400;color:#333}.half-rule{width:100px;margin:40px auto}.bs-docs-featurette h3{margin-bottom:5px;font-weight:400;color:#333}.bs-docs-featurette-img{display:block;margin-bottom:20px;color:#333}.bs-docs-featurette-img:hover{color:#428bca;text-decoration:none}.bs-docs-featurette-img img{display:block;margin-bottom:15px}@media (min-width:480px){.bs-docs-featurette .img-responsive{margin-top:30px}}@media (min-width:768px){.bs-docs-featurette{padding-top:100px;padding-bottom:100px}.bs-docs-featurette-title{font-size:40px}.bs-docs-featurette .lead{max-width:80%;margin-right:auto;margin-left:auto}.bs-docs-featured-sites .col-sm-3:first-child img{border-top-left-radius:4px;border-bottom-left-radius:4px}.bs-docs-featured-sites .col-sm-3:last-child img{border-top-right-radius:4px;border-bottom-right-radius:4px}.bs-docs-featurette .img-responsive{margin-top:0}}.bs-docs-featured-sites{margin-right:-1px;margin-left:-1px}.bs-docs-featured-sites .col-sm-3{padding-right:1px;padding-left:1px}.bs-docs-featured-sites .img-responsive{margin-bottom:15px}@media (min-width:480px){.bs-docs-featured-sites .img-responsive{margin-bottom:0}}@media (max-width:480px){.bs-examples{margin-right:-10px;margin-left:-10px}.bs-examples>[class^=col-]{padding-right:10px;padding-left:10px}}.bs-docs-sidebar.affix{position:static}@media (min-width:768px){.bs-docs-sidebar{padding-left:20px}}.bs-docs-sidenav{margin-top:20px;margin-bottom:20px}.bs-docs-sidebar .nav>li>a{display:block;padding:4px 20px;font-size:13px;font-weight:500;color:#999}.bs-docs-sidebar .nav>li>a:focus,.bs-docs-sidebar .nav>li>a:hover{padding-left:19px;color:#1d976c;text-decoration:none;background-color:transparent;border-left:1px solid #1d976c}.bs-docs-sidebar .nav>.active:focus>a,.bs-docs-sidebar .nav>.active:hover>a,.bs-docs-sidebar .nav>.active>a{padding-left:18px;font-weight:700;color:#1d976c;background-color:transparent;border-left:2px solid #1d976c}.bs-docs-sidebar .nav .nav{display:none;padding-bottom:10px}.bs-docs-sidebar .nav .nav>li>a{padding-top:1px;padding-bottom:1px;padding-left:30px;font-size:12px;font-weight:400}.bs-docs-sidebar .nav .nav>li>a:focus,.bs-docs-sidebar .nav .nav>li>a:hover{padding-left:29px}.bs-docs-sidebar .nav .nav>.active:focus>a,.bs-docs-sidebar .nav .nav>.active:hover>a,.bs-docs-sidebar .nav .nav>.active>a{padding-left:28px;font-weight:500}.back-to-top,.bs-docs-theme-toggle{display:none;padding:4px 10px;margin-top:10px;margin-left:10px;font-size:12px;font-weight:500;color:#999}.back-to-top:hover,.bs-docs-theme-toggle:hover{color:#563d7c;text-decoration:none}.bs-docs-theme-toggle{margin-top:0}@media (min-width:768px){.back-to-top,.bs-docs-theme-toggle{display:block}}@media (min-width:992px){.bs-docs-sidebar .nav>.active>ul{display:block}.bs-docs-sidebar.affix,.bs-docs-sidebar.affix-bottom{width:213px}.bs-docs-sidebar.affix{position:fixed;top:20px}.bs-docs-sidebar.affix-bottom{position:absolute}.bs-docs-sidebar.affix-bottom .bs-docs-sidenav,.bs-docs-sidebar.affix .bs-docs-sidenav{margin-top:0;margin-bottom:0}}@media (min-width:1200px){.bs-docs-sidebar.affix,.bs-docs-sidebar.affix-bottom{width:263px}}.bs-docs-section{margin-bottom:60px}.bs-docs-section:last-child{margin-bottom:0}h1[id]{padding-top:20px;margin-top:0}.bs-callout{padding:20px;margin:20px 0;border:1px solid #eee;border-left-width:5px;border-radius:3px}.bs-callout h4{margin-top:0;margin-bottom:5px}.bs-callout p:last-child{margin-bottom:0}.bs-callout code{border-radius:3px}.bs-callout+.bs-callout{margin-top:-5px}.bs-callout-danger{border-left-color:#d9534f}.bs-callout-danger h4{color:#d9534f}.bs-callout-warning{border-left-color:#f0ad4e}.bs-callout-warning h4{color:#f0ad4e}.bs-callout-info{border-left-color:#5bc0de}.bs-callout-info h4{color:#5bc0de}.color-swatches{margin:0 -5px;overflow:hidden}.color-swatch{float:left;width:60px;height:60px;margin:0 5px;border-radius:3px}@media (min-width:768px){.color-swatch{width:100px;height:100px}}.color-swatches .gray-darker{background-color:#222}.color-swatches .gray-dark{background-color:#333}.color-swatches .gray{background-color:#555}.color-swatches .gray-light{background-color:#999}.color-swatches .gray-lighter{background-color:#eee}.color-swatches .brand-primary{background-color:#428bca}.color-swatches .brand-success{background-color:#5cb85c}.color-swatches .brand-warning{background-color:#f0ad4e}.color-swatches .brand-danger{background-color:#d9534f}.color-swatches .brand-info{background-color:#5bc0de}.color-swatches .bs-purple{background-color:#563d7c}.color-swatches .bs-purple-light{background-color:#c7bfd3}.color-swatches .bs-purple-lighter{background-color:#e5e1ea}.color-swatches .bs-gray{background-color:#f9f9f9}.bs-team .team-member{line-height:32px;color:#555}.bs-team .team-member:hover{color:#333;text-decoration:none}.bs-team .github-btn{float:right;width:180px;height:20px;margin-top:6px}.bs-team img{float:left;width:32px;margin-right:10px;border-radius:4px}.show-grid{margin-bottom:15px}.show-grid [class^=col-]{padding-top:10px;padding-bottom:10px;background-color:#eee;background-color:rgba(86,61,124,.15);border:1px solid #ddd;border:1px solid rgba(86,61,124,.2)}.bs-example{position:relative;padding:45px 15px 15px;margin:0 -15px 15px;border-color:#e5e5e5 #eee #eee;border-style:solid;border-width:1px 0;box-shadow:inset 0 3px 6px rgba(0,0,0,.05)}.bs-example:after{position:absolute;top:15px;left:15px;font-size:12px;font-weight:700;color:#959595;text-transform:uppercase;letter-spacing:1px;content:\"Example\"}.bs-example+.highlight{margin:-15px -15px 15px;border-width:0 0 1px;border-radius:0}@media (min-width:768px){.bs-example{background-color:#fff;border-color:#ddd;border-radius:4px 4px 0 0;box-shadow:none}.bs-example,.bs-example+.highlight{margin-right:0;margin-left:0;border-width:1px}.bs-example+.highlight{margin-top:-16px;border-bottom-right-radius:4px;border-bottom-left-radius:4px}}.bs-example .container{width:auto}.bs-example>.alert:last-child,.bs-example>.form-control:last-child,.bs-example>.jumbotron:last-child,.bs-example>.list-group:last-child,.bs-example>.navbar:last-child,.bs-example>.panel:last-child,.bs-example>.progress:last-child,.bs-example>.table-responsive:last-child>.table,.bs-example>.table:last-child,.bs-example>.well:last-child,.bs-example>blockquote:last-child,.bs-example>ol:last-child,.bs-example>p:last-child,.bs-example>ul:last-child{margin-bottom:0}.bs-example>p>.close{float:none}.bs-example-type .table .type-info{color:#999;vertical-align:middle}.bs-example-type .table td{padding:15px 0;border-color:#eee}.bs-example-type .table tr:first-child td{border-top:0}.bs-example-type h1,.bs-example-type h2,.bs-example-type h3,.bs-example-type h4,.bs-example-type h5,.bs-example-type h6{margin:0}.bs-example-bg-classes p{padding:15px}.bs-example>.img-circle,.bs-example>.img-rounded,.bs-example>.img-thumbnail{margin:5px}.bs-example>.table-responsive>.table{background-color:#fff}.bs-example>.btn,.bs-example>.btn-group{margin-top:5px;margin-bottom:5px}.bs-example-control-sizing input[type=text]+input[type=text],.bs-example-control-sizing select,.bs-example>.btn-toolbar+.btn-toolbar{margin-top:10px}.bs-example-form .input-group{margin-bottom:10px}.bs-example>textarea.form-control{resize:vertical}.bs-example>.list-group{max-width:400px}.bs-example .navbar:last-child{margin-bottom:0}.bs-navbar-bottom-example,.bs-navbar-top-example{z-index:1;padding:0;overflow:hidden}.bs-navbar-bottom-example .navbar-header,.bs-navbar-top-example .navbar-header{margin-left:0}.bs-navbar-bottom-example .navbar-fixed-bottom,.bs-navbar-top-example .navbar-fixed-top{position:relative;margin-right:0;margin-left:0}.bs-navbar-top-example{padding-bottom:45px}.bs-navbar-top-example:after{top:auto;bottom:15px}.bs-navbar-top-example .navbar-fixed-top{top:-1px}.bs-navbar-bottom-example{padding-top:45px}.bs-navbar-bottom-example .navbar-fixed-bottom{bottom:-1px}.bs-navbar-bottom-example .navbar{margin-bottom:0}@media (min-width:768px){.bs-navbar-bottom-example .navbar-fixed-bottom,.bs-navbar-top-example .navbar-fixed-top{position:absolute}}.bs-example .pagination{margin-top:10px;margin-bottom:10px}.bs-example>.pager{margin-top:0}.bs-example-modal{background-color:#f5f5f5}.bs-example-modal .modal{position:relative;top:auto;right:auto;bottom:auto;left:auto;z-index:1;display:block}.bs-example-modal .modal-dialog{left:auto;margin-right:auto;margin-left:auto}.custom-modal{width:90%}.bs-example>.dropdown>.dropdown-toggle{float:left}.bs-example>.dropdown>.dropdown-menu{position:static;display:block;margin-bottom:5px;clear:left}.bs-example-tabs .nav-tabs{margin-bottom:15px}.bs-example-tooltips{text-align:center}.bs-example-tooltips>.btn{margin-top:5px;margin-bottom:5px}.bs-example-popover{padding-bottom:24px;background-color:#f9f9f9}.bs-example-popover .popover{position:relative;display:block;float:left;width:260px;margin:20px}.scrollspy-example{position:relative;height:200px;margin-top:10px;overflow:auto}.bs-example .dropdown-menu.open{position:static;display:block;margin-bottom:5px;clear:left}.highlight{padding:9px 14px;margin-bottom:14px;background-color:#f7f7f9;border:1px solid #e1e1e8;border-radius:4px}.highlight pre{padding:0;margin-top:0;margin-bottom:0;word-break:normal;word-wrap:nowrap;white-space:nowrap;background-color:transparent;border:0}.highlight pre code{font-size:inherit;color:#333}.highlight pre code:first-child{display:inline-block;padding-right:45px}.table-responsive .highlight pre{white-space:normal}.bs-table th small,.responsive-utilities th small{display:block;font-weight:400;color:#999}.responsive-utilities tbody th{font-weight:400}.responsive-utilities td{text-align:center}.responsive-utilities td.is-visible{color:#468847;background-color:#dff0d8!important}.responsive-utilities td.is-hidden{color:#ccc;background-color:#f9f9f9!important}.responsive-utilities-test{margin-top:5px}.responsive-utilities-test .col-xs-6{margin-bottom:10px}.responsive-utilities-test span{display:block;padding:15px 10px;font-size:14px;font-weight:700;line-height:1.1;text-align:center;border-radius:4px}.hidden-on .col-xs-6 .hidden-lg,.hidden-on .col-xs-6 .hidden-md,.hidden-on .col-xs-6 .hidden-sm,.hidden-on .col-xs-6 .hidden-xs,.visible-on .col-xs-6 .hidden-lg,.visible-on .col-xs-6 .hidden-md,.visible-on .col-xs-6 .hidden-sm,.visible-on .col-xs-6 .hidden-xs{color:#999;border:1px solid #ddd}.hidden-on .col-xs-6 .visible-lg-block,.hidden-on .col-xs-6 .visible-md-block,.hidden-on .col-xs-6 .visible-sm-block,.hidden-on .col-xs-6 .visible-xs-block,.visible-on .col-xs-6 .visible-lg-block,.visible-on .col-xs-6 .visible-md-block,.visible-on .col-xs-6 .visible-sm-block,.visible-on .col-xs-6 .visible-xs-block{color:#468847;background-color:#dff0d8;border:1px solid #d6e9c6}.bs-glyphicons{margin:0 -10px 20px;overflow:hidden}.bs-glyphicons-list{padding-left:0;list-style:none}.bs-glyphicons li{float:left;width:25%;height:115px;padding:10px;font-size:10px;line-height:1.4;text-align:center;background-color:#f9f9f9;border:1px solid #fff}.bs-glyphicons .glyphicon{margin-top:5px;margin-bottom:10px;font-size:24px}.bs-glyphicons .glyphicon-class{display:block;text-align:center;word-wrap:break-word}.bs-glyphicons li:hover{color:#fff;background-color:#563d7c}@media (min-width:768px){.bs-glyphicons{margin-right:0;margin-left:0}.bs-glyphicons li{width:12.5%;font-size:12px}}.bs-customizer .toggle{float:right;margin-top:25px}.bs-customizer label{margin-top:10px;font-weight:500;color:#555}.bs-customizer h2{padding-top:30px;margin-top:0;margin-bottom:5px}.bs-customizer h3{margin-bottom:0}.bs-customizer h4{margin-top:15px;margin-bottom:0}.bs-customizer .bs-callout h4{margin-top:0;margin-bottom:5px}.bs-customizer input[type=text]{font-family:Menlo,Monaco,Consolas,Courier New,monospace;background-color:#fafafa}.bs-customizer .help-block{margin-bottom:5px;font-size:12px}#less-section label{font-weight:400}.bs-customizer-input{float:left;width:33.333333%;padding-right:15px;padding-left:15px}.bs-customize-download .btn-outline{padding:20px}.bs-customizer-alert{position:fixed;top:0;right:0;left:0;z-index:1030;padding:15px 0;color:#fff;background-color:#d9534f;border-bottom:1px solid #b94441;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.25)}.bs-customizer-alert .close{margin-top:-4px;font-size:24px}.bs-customizer-alert p{margin-bottom:0}.bs-customizer-alert .glyphicon{margin-right:5px}.bs-customizer-alert pre{margin:10px 0 0;color:#fff;background-color:#a83c3a;border-color:#973634;box-shadow:inset 0 2px 4px rgba(0,0,0,.05),0 1px 0 hsla(0,0%,100%,.1)}.bs-brand-logos{display:table;width:100%;margin-bottom:15px;overflow:hidden;color:#563d7c;background-color:#f9f9f9;border-radius:4px}.bs-brand-item{padding:60px 0;text-align:center}.bs-brand-item+.bs-brand-item{border-top:1px solid #fff}.bs-brand-logos .inverse{color:#fff;background-color:#563d7c}.bs-brand-item .svg{width:144px;height:144px}.bs-brand-item h1,.bs-brand-item h3{margin-top:0;margin-bottom:0}.bs-brand-item .bs-docs-booticon{margin-right:auto;margin-left:auto}.bs-brand-item .glyphicon{width:30px;height:30px;margin:10px auto -10px;line-height:30px;color:#fff;border-radius:50%}.bs-brand-item .glyphicon-ok{background-color:#5cb85c}.bs-brand-item .glyphicon-remove{background-color:#d9534f}@media (min-width:768px){.bs-brand-item{display:table-cell;width:1%}.bs-brand-item+.bs-brand-item{border-top:0;border-left:1px solid #fff}.bs-brand-item h1{font-size:60px}}.bs-examples .thumbnail{margin-bottom:10px}.bs-examples h4{margin-bottom:5px}.bs-examples p{margin-bottom:20px}#focusedInput{border-color:#ccc;border-color:rgba(82,168,236,.8);outline:0;outline:thin dotted\\9;box-shadow:0 0 8px rgba(82,168,236,.6)}.zero-clipboard{position:relative;display:none}.btn-clipboard{position:absolute;top:0;right:0;z-index:10;display:block;padding:5px 8px;font-size:12px;color:#777;cursor:pointer;background-color:#fff;border:1px solid #e1e1e8;border-radius:0 4px 0 4px}.btn-clipboard-hover{color:#fff;background-color:#563d7c;border-color:#563d7c}@media (min-width:768px){.zero-clipboard{display:block}}",""]);
},function(e,t,o){var a=o(250);"string"==typeof a&&(a=[[e.id,a,""]]);o(85)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,o){t=e.exports=o(84)(),t.push([e.id,"body{font-family:Source Sans Pro,helvetica neue,Avenir Next,Avenir,Arial,sans-serif}.bs-docs-section h1{font-size:42px}.bs-docs-nav .navbar-nav>li>a{color:#333}.bs-docs-footer{padding-top:20px;text-align:left}.bs-docs-nav .navbar-collapse{overflow:hidden}.bs-docs-nav{box-shadow:0 3px 3px rgba(0,0,0,.175)}.bs-docs-header p{font-weight:lighter}.bs-docs-header a{color:#fff;font-weight:400}.btn-outline-inverse{border-color:#fff;transition:color .15s ease}.bs-docs-header a:hover,.bs-docs-nav .navbar-brand,.btn-outline-inverse:active,.btn-outline-inverse:focus,.btn-outline-inverse:hover{color:#1d976c}.bs-docs-header,.bs-docs-masthead{background:linear-gradient(90deg,#1d976c 10%,#93f9b9 90%);filter:none;color:#e9e9e9}.bs-docs-masthead{margin-bottom:20px}.bs-docs-header h1,.bs-docs-header p{color:#fff}a.back-to-top{font-size:13px;margin-top:0}.bs-docs-sidebar .nav>li>a{color:#767676;font-size:14px}.bs-docs-sidebar .nav>li>a:focus,.bs-docs-sidebar .nav>li>a:hover{color:#42b983;border-left:1px solid #42b983}.back-to-top:hover{color:#42b983}.CodeMirror,.CodeMirror-scroll{height:auto}.bs-example .btn-toolbar+.btn-toolbar{margin-top:10px}.bs-example .static-modal .modal{position:relative;top:auto;right:auto;left:auto;bottom:auto;z-index:1;display:block}.bs-docs-booticon{background-size:contain;border:0;width:200px;height:200px}.bs-example-popover-contained{height:200px}.bs-example-popover-contained>div{position:relative}.bs-example-popover-scroll{overflow:scroll;height:200px}.bs-example-popover-scroll>div{position:relative;padding:100px 0}.playground{margin-bottom:36px}.bs-example{margin-bottom:0}.bs-example+.highlight{margin-top:0;margin-bottom:0;border-top:none;border-bottom-right-radius:0}.code-toggle{float:right;display:inline-block;position:relative;top:-1px;background:#fafafa;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border:1px solid #e1e1e8;border-top:none;padding:4px 8px}@media (min-width:768px){.code-toggle{background:#fff}}.code-toggle.open{background:#f8f5ec}.modal-container{position:relative}.modal-container .modal,.modal-container .modal-backdrop{position:absolute}.prop-table{background-color:#fff}.bs-example.tooltip-static .tooltip{position:relative;display:inline-block;margin:5px 10px}.bs-example .super-colors{background:-moz-linear-gradient(top,red 0,#ff0 15%,#0f0 30%,#0ff 50%,#00f 65%,#f0f 80%,red 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,red),color-stop(15%,#ff0),color-stop(30%,#0f0),color-stop(50%,#0ff),color-stop(65%,#00f),color-stop(80%,#f0f),color-stop(100%,red))}.anchor,.anchor:active,.anchor:focus,.anchor:hover{color:#000;text-decoration:none;position:relative}.anchor-icon{font-size:90%;padding-top:.1em;position:absolute;left:-.8em;opacity:0}h1 a:focus .anchor-icon,h1:hover .anchor-icon,h2 a:focus .anchor-icon,h2:hover .anchor-icon,h3 a:focus .anchor-icon,h3:hover .anchor-icon,h4 a:focus .anchor-icon,h4:hover .anchor-icon{opacity:.5}.prop-desc pre{border-radius:0;border-width:0;border-left-width:3px}.prop-desc-heading{margin-bottom:10px}.bs-callout{padding:20px;margin:20px 0;border:1px solid #eee;border-left-width:5px;border-radius:3px}.bs-callout h4{margin-top:0;margin-bottom:5px}.bs-callout p:last-child{margin-bottom:0}.bs-callout code{border-radius:3px}.bs-callout+.bs-callout{margin-top:-5px}.bs-callout-default{border-left-color:#777}.bs-callout-default h4{color:#777}.bs-callout-primary{border-left-color:#428bca}.bs-callout-primary h4{color:#428bca}.bs-callout-success{border-left-color:#42b983}.bs-callout-success h4{color:#42b983}.bs-callout-danger{border-left-color:#d9534f}.bs-callout-danger h4{color:#d9534f}.bs-callout-warning{border-left-color:#f0ad4e}.bs-callout-warning h4{color:#f0ad4e}.bs-callout-info{border-left-color:#5bc0de}.bs-callout-info h4{color:#5bc0de}",""])},function(e,t){(function(t){var o="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=o.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var o=t.util.type(e);switch(o){case"Object":var a={};for(var n in e)e.hasOwnProperty(n)&&(a[n]=t.util.clone(e[n]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,o){var a=t.util.clone(t.languages[e]);for(var n in o)a[n]=o[n];return a},insertBefore:function(e,o,a,n){n=n||t.languages;var i=n[e];if(2==arguments.length){a=arguments[1];for(var r in a)a.hasOwnProperty(r)&&(i[r]=a[r]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==o)for(var r in a)a.hasOwnProperty(r)&&(s[r]=a[r]);s[l]=i[l]}return t.languages.DFS(t.languages,function(t,o){o===n[e]&&t!=e&&(this[t]=s)}),n[e]=s},DFS:function(e,o,a){for(var n in e)e.hasOwnProperty(n)&&(o.call(e,n,e[n],a||n),"Object"===t.util.type(e[n])?t.languages.DFS(e[n],o):"Array"===t.util.type(e[n])&&t.languages.DFS(e[n],o,n))}},plugins:{},highlightAll:function(e,o){for(var a,n=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=n[i++];)t.highlightElement(a,e===!0,o)},highlightElement:function(a,n,i){for(var r,s,l=a;l&&!e.test(l.className);)l=l.parentNode;l&&(r=(l.className.match(e)||[,""])[1],s=t.languages[r]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var d=a.textContent,c={element:a,language:r,grammar:s,code:d};if(!d||!s)return void t.hooks.run("complete",c);if(t.hooks.run("before-highlight",c),n&&o.Worker){var p=new Worker(t.filename);p.onmessage=function(e){c.highlightedCode=e.data,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(e,o,n){var i=t.tokenize(e,o);return a.stringify(t.util.encode(i),n)},tokenize:function(e,o,a){var n=t.Token,i=[e],r=o.rest;if(r){for(var s in r)o[s]=r[s];delete o.rest}e:for(var s in o)if(o.hasOwnProperty(s)&&o[s]){var l=o[s];l="Array"===t.util.type(l)?l:[l];for(var d=0;d<l.length;++d){var c=l[d],p=c.inside,u=!!c.lookbehind,f=0,h=c.alias;c=c.pattern||c;for(var m=0;m<i.length;m++){var b=i[m];if(i.length>e.length)break e;if(!(b instanceof n)){c.lastIndex=0;var g=c.exec(b);if(g){u&&(f=g[1].length);var v=g.index-1+f,g=g[0].slice(f),x=g.length,y=v+x,w=b.slice(0,v+1),k=b.slice(y+1),_=[m,1];w&&_.push(w);var M=new n(s,p?t.tokenize(g,p):g,h);_.push(M),k&&_.push(k),Array.prototype.splice.apply(i,_)}}}}}return i},hooks:{all:{},add:function(e,o){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(o)},run:function(e,o){var a=t.hooks.all[e];if(a&&a.length)for(var n,i=0;n=a[i++];)n(o)}}},a=t.Token=function(e,t,o){this.type=e,this.content=t,this.alias=o};if(a.stringify=function(e,o,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,o,e)}).join("");var i={type:e.type,content:a.stringify(e.content,o,n),tag:"span",classes:["token",e.type],attributes:{},language:o,parent:n};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var r="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}t.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=(s?" ":"")+l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!o.document)return o.addEventListener?(o.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,i=a.code,r=a.immediateClose;o.postMessage(t.highlight(i,t.languages[n],n)),r&&o.close()},!1),o.Prism):o.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),o.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=a),"undefined"!=typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),a.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var o,n=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(o=(t.className.match(r)||[,""])[1]),!o){var s=(n.match(/\.(\w+)$/)||[,""])[1];o=e[s]||s}var l=document.createElement("code");l.className="language-"+o,t.textContent="",l.textContent="Loading…",t.appendChild(l);var d=new XMLHttpRequest;d.open("GET",n,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(l.textContent=d.responseText,a.highlightElement(l)):d.status>=400?l.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:l.textContent="✖ Error: File does not exist or is empty")},d.send(null)})},self.Prism.fileHighlight())}()}).call(t,function(){return this}())},function(e,t){"use strict";!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e={css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",http:"HTTP",inform7:"Inform 7",latex:"LaTeX",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",yaml:"YAML"};Prism.hooks.add("before-highlight",function(t){var o=t.element.parentNode;if(o&&/pre/i.test(o.nodeName)){var a=e[t.language]||t.language.substring(0,1).toUpperCase()+t.language.substring(1);o.setAttribute("data-language",a)}})}}()}]);
>>>>>>> master

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
	
	var _bodyDocs = __webpack_require__(1);
	
	var _bodyDocs2 = _interopRequireDefault(_bodyDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(298);
	__webpack_require__(301);
	
	var Prism = __webpack_require__(303);
	__webpack_require__(304);
	
	var Vue = window.Vue = __webpack_require__(305);
	Vue.use(__webpack_require__(306));
	__webpack_require__(307);
	__webpack_require__(308);
	
	Vue.config.devtools = true;
	Vue.config.debug = true;
	
	new Vue({
	  el: '#app',
	  components: {
	    bodyDocs: _bodyDocs2.default
	  },
	  data: {
	    sections: []
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    document.querySelectorAll('.bs-docs-section').forEach(function (el) {
	      var id = el.id;
	      var name = el.querySelector('.anchor', el).innerText;
	      if (id && name) _this.sections.push({ el: el, id: id, name: name });
	    });
	  },
	  updated: function updated() {
	    Prism.highlightAll();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(297)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/bodyDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fcc83c1e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-fcc83c1e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] bodyDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _accordionDocs = __webpack_require__(3);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(34);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _affixSidebar = __webpack_require__(108);
	
	var _affixSidebar2 = _interopRequireDefault(_affixSidebar);
	
	var _alertDocs = __webpack_require__(120);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _asideDocs = __webpack_require__(130);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _buttonGroupDocs = __webpack_require__(138);
	
	var _buttonGroupDocs2 = _interopRequireDefault(_buttonGroupDocs);
	
	var _carouselDocs = __webpack_require__(149);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _checkboxDocs = __webpack_require__(160);
	
	var _checkboxDocs2 = _interopRequireDefault(_checkboxDocs);
	
	var _datepickerDocs = __webpack_require__(163);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _dropdownDocs = __webpack_require__(174);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _formGroupDocs = __webpack_require__(180);
	
	var _formGroupDocs2 = _interopRequireDefault(_formGroupDocs);
	
	var _formValidatorDocs = __webpack_require__(201);
	
	var _formValidatorDocs2 = _interopRequireDefault(_formValidatorDocs);
	
	var _gettingStarted = __webpack_require__(209);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _inputDocs = __webpack_require__(212);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _modalDocs = __webpack_require__(215);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _navbarDocs = __webpack_require__(227);
	
	var _navbarDocs2 = _interopRequireDefault(_navbarDocs);
	
	var _popoverDocs = __webpack_require__(233);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _progressbarDocs = __webpack_require__(241);
	
	var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);
	
	var _radioDocs = __webpack_require__(247);
	
	var _radioDocs2 = _interopRequireDefault(_radioDocs);
	
	var _selectDocs = __webpack_require__(250);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _spinnerDocs = __webpack_require__(255);
	
	var _spinnerDocs2 = _interopRequireDefault(_spinnerDocs);
	
	var _tabsDocs = __webpack_require__(263);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _tooltipDocs = __webpack_require__(271);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _typeaheadDocs = __webpack_require__(274);
	
	var _typeaheadDocs2 = _interopRequireDefault(_typeaheadDocs);
	
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
	//
	
	exports.default = {
	  components: {
	    accordionDocs: _accordionDocs2.default,
	    affixDocs: _affixDocs2.default,
	    affixSidebar: _affixSidebar2.default,
	    alertDocs: _alertDocs2.default,
	    asideDocs: _asideDocs2.default,
	    buttonGroupDocs: _buttonGroupDocs2.default,
	    carouselDocs: _carouselDocs2.default,
	    checkboxDocs: _checkboxDocs2.default,
	    datepickerDocs: _datepickerDocs2.default,
	    dropdownDocs: _dropdownDocs2.default,
	    formGroupDocs: _formGroupDocs2.default,
	    formValidatorDocs: _formValidatorDocs2.default,
	    gettingStarted: _gettingStarted2.default,
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(4)
	
	/* template */
	var __vue_template__ = __webpack_require__(33)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/accordionDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-65e6a40c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-65e6a40c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] accordionDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Accordion = __webpack_require__(10);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Panel = __webpack_require__(20);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    Accordion: _Accordion2.default,
	    Checkbox: _Checkbox2.default,
	    Panel: _Panel2.default,
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/utils/docSection.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f5b093b8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f5b093b8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] docSection.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
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
	    id: { type: String, default: null, required: true },
	    name: { type: String, default: null, required: true }
	  },
	  created: function created() {
	    this._section = true;
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "bs-docs-section",
	    attrs: {
	      "id": _vm.id
	    }
	  }, [_h('h1', {
	    staticClass: "page-header"
	  }, [_h('a', {
	    staticClass: "anchor",
	    attrs: {
	      "href": '#' + _vm.id
	    }
	  }, [_vm._s(_vm.name)])]), " ", _vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f5b093b8", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  render: function render(createElement) {
	    var defaultHeaders = {
	      events: ['Name', 'Arguments', 'Description'],
	      options: ['Name', 'Type', 'Default', 'Description']
	    };
	    var headers = this.headers || defaultHeaders[this.type.toLowerCase()] || [];
	    var len = headers.length;
	    headers = [createElement('tr', headers.map(function (name) {
	      return createElement('th', name);
	    }))];
	    var options = this.$slots.default.filter(function (el) {
	      return el.tag;
	    });
	    options.forEach(function (el) {
	      el.tag = 'tr';
	      el.children = el.children.filter(function (el) {
	        return el.tag;
	      }).filter(function (el, i) {
	        return i < len;
	      });
	      el.children.forEach(function (el) {
	        el.tag = 'td';
	      });
	    });
	    return createElement('div', [createElement('h2', this.name + ' ' + this.type), createElement('div', { attrs: { class: 'table-responsive' } }, [createElement('table', { attrs: { class: 'table table-bordered' } }, [createElement('thead', headers), createElement('tbody', options)])])]);
	  },
	  props: {
	    name: { type: String, default: '' },
	    type: { type: String, default: 'Options' },
	    headers: { type: Array, default: null }
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    language: { type: String, default: 'html' }
	  },
	  render: function render(createElement) {
	    var content = this.$slots.default && this.$slots.default[0].text;
	    if (~['html', 'markup'].indexOf(this.language)) content = content.replace(/(\w+)=""/g, '$1');
	    var matches = content.match(/(\n|\r)[ ]*\S/g);
	    if (matches) {
	      (function () {
	        var values = matches.map(function (el) {
	          return el.length - 2;
	        });
	        var min = Math.min.apply(Math, values);
	        content = content.replace(/(\n|\r)([^\n\S]*)/g, function (str, nr, s) {
	          return nr + s.substr(min);
	        });
	      })();
	    }
	    return createElement('pre', [createElement('code', { attrs: { class: this.language ? 'language-' + this.language : null } }, !this.language ? content : [createElement('script', { attrs: { type: this.language === 'markup' ? 'language-mark-up' : this.language ? 'language-' + this.language : null } }, content.replace(/^([ \t]*[\r\n]+)+|([\r\n]+[ \t]*)+$/g, ''))])]);
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(11)
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Accordion.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-106f3346", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-106f3346", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Accordion.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
	// let coerce = {
	//   oneAtAtime: 'boolean'
	// }
	
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "panel-group"
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-106f3346", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(14)
	
	/* script */
	__vue_exports__ = __webpack_require__(18)
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-21fa9ebe"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-21fa9ebe", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-21fa9ebe", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Checkbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-21fa9ebe&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-21fa9ebe&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\nlabel.checkbox[data-v-21fa9ebe] {\n  position: relative;\n  padding-left: 18px;\n}\nlabel.checkbox > input[data-v-21fa9ebe] {\n  box-sizing: border-box;\n  position: absolute;\n  z-index: -1;\n  padding: 0;\n  opacity: 0;\n  margin: 0;\n}\nlabel.checkbox > .icon[data-v-21fa9ebe] {\n  position: absolute;\n  top: .2rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  line-height:1rem;\n  text-align: center;\n  user-select: none;\n  border-radius: .35rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\nlabel.checkbox:not(.active) > .icon[data-v-21fa9ebe] {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\nlabel.checkbox > input:focus ~ .icon[data-v-21fa9ebe] {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\nlabel.checkbox.active > .icon[data-v-21fa9ebe] {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\n}\nlabel.checkbox.active .btn-default[data-v-21fa9ebe] { filter: brightness(75%);\n}\nlabel.checkbox.disabled[data-v-21fa9ebe],\nlabel.checkbox.readonly[data-v-21fa9ebe],\n.btn.readonly[data-v-21fa9ebe] {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=checkbox][data-v-21fa9ebe] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}\n", "", {"version":3,"sources":["/./src/Checkbox.vue?9d54007e"],"names":[],"mappings":";AAyFA;EACA,mBAAA;EACA,mBAAA;CACA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,kZAAA;CACA;AACA,sDAAA,wBAAA;CAAA;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Checkbox.vue","sourcesContent":["<template>\n  <a :is=\"isButton?'a':'label'\" @click=\"toggle\" :class=\"[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\">\n    <input v-if=\"name\" type=\"hidden\" :name=\"name\" :value=\"checked?trueValue:falseValue\" />\n    <span v-if=\"!isButton\" class=\"icon dropdown-toggle\" :class=\"[checked?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\n    <span v-if=\"!isButton&&checked&&typeColor==='default'\" class=\"icon\"></span>\n    <slot></slot>\n  </a>\n</template>\n\n<script>\nexport default {\n  props: {\n    button: {type: Boolean, default: false},\n    disabled: {type: Boolean, default: false},\n    falseValue: {default: false},\n    name: {type: String, default: null},\n    readonly: {type: Boolean, default: false},\n    trueValue: {default: true},\n    type: {type: String, default: null},\n    value: {default: false}\n  },\n  data () {\n    return {\n      checked: (this.value === this.trueValue)\n    }\n  },\n  computed: {\n    isButton () { return this.button || (this._inGroup && this.$parent.buttons) },\n    isFalse () { return this.value === this.falseValue },\n    isTrue () { return this.value === this.trueValue },\n    parentValue () { return this._ingroup && this.$parent.val },\n    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }\n  },\n  watch: {\n    checked (val, old) {\n      var value = val ? this.trueValue : this.falseValue\n      this.$emit('checked', val)\n      this.$emit('input', value)\n      this.eval()\n    },\n    parentValue (val) {\n      var checked = val === this.trueValue\n      if (this.checked !== checked) {\n        this.checked = checked\n      }\n    },\n    value (val, old) {\n      var checked = val === this.trueValue\n      if (this.checked !== checked) {\n        this.checked = checked\n      }\n    }\n  },\n  created () {\n    const parent = this.$parent\n    if (parent && parent._btnGroup && !parent._radioGroup) {\n      this._inGroup = true\n      parent._checkboxGroup = true\n      if (!(parent.val instanceof Array)) { parent.val = [] }\n      this.eval()\n    }\n  },\n  mounted () {\n    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') { return }\n    if (this.$parent.val.length) {\n      // this.checked = ~this.$parent.val.indexOf(this.value)\n      this.$emit('checked', ~this.$parent.val.indexOf(this.value))\n    } else if (this.checked) {\n      this.$parent.val.push(this.value)\n    }\n  },\n  methods: {\n    eval () {\n      if (this._inGroup) {\n        var value = this.checked ? this.isTrue : this.isFalse\n        var index = this.$parent.val.indexOf(value)\n        if (this.checked && !~index) this.$parent.val.push(value)\n        if (!this.checked && ~index) this.$parent.val.splice(index, 1)\n      }\n    },\n    toggle () {\n      if (this.disabled || this.readonly) { return }\n      this.checked = !this.checked\n    }\n  }\n}\n</script>\n\n<style scoped>\nlabel.checkbox {\n  position: relative;\n  padding-left: 18px;\n}\nlabel.checkbox > input {\n  box-sizing: border-box;\n  position: absolute;\n  z-index: -1;\n  padding: 0;\n  opacity: 0;\n  margin: 0;\n}\nlabel.checkbox > .icon {\n  position: absolute;\n  top: .2rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  line-height:1rem;\n  text-align: center;\n  user-select: none;\n  border-radius: .35rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\nlabel.checkbox:not(.active) > .icon {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\nlabel.checkbox > input:focus ~ .icon {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\nlabel.checkbox.active > .icon {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\n}\nlabel.checkbox.active .btn-default { filter: brightness(75%); }\n\nlabel.checkbox.disabled,\nlabel.checkbox.readonly,\n.btn.readonly {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=checkbox] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 16 */
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
/* 17 */
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
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
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
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h(_vm.isButton ? 'a' : 'label', {
	    tag: "a",
	    class: [_vm.isButton ? 'btn btn-' + _vm.typeColor : 'open checkbox ' + _vm.typeColor, {
	      active: _vm.checked,
	      disabled: _vm.disabled,
	      readonly: _vm.readonly
	    }],
	    on: {
	      "click": _vm.toggle
	    }
	  }, [(_vm.name) ? _h('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.checked ? _vm.trueValue : _vm.falseValue
	    }
	  }) : _vm._e(), " ", (!_vm.isButton) ? _h('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [_vm.checked ? 'btn-' + _vm.typeColor : '', {
	      bg: _vm.typeColor === 'default'
	    }]
	  }) : _vm._e(), " ", (!_vm.isButton && _vm.checked && _vm.typeColor === 'default') ? _h('span', {
	    staticClass: "icon"
	  }) : _vm._e(), " ", _vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-21fa9ebe", module.exports)
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(21)
	
	/* script */
	__vue_exports__ = __webpack_require__(23)
	
	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1debb399", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1debb399", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Panel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1debb399!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1debb399!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.accordion-toggle {\n  cursor: pointer;\n}\n.collapse-enter-active,\n.collapse-leave-active {\n  transition: max-height .5s ease;\n}\n.collapse-enter,\n.collapse-leave-active {\n  max-height: 0 !important;\n}\n", "", {"version":3,"sources":["/./src/Panel.vue?5ef21893"],"names":[],"mappings":";AAiEA;EACA,gBAAA;CACA;AACA;;EAEA,gCAAA;CACA;AACA;;EAEA,yBAAA;CACA","file":"Panel.vue","sourcesContent":["<template>\n  <div :class=\"['panel',panelType]\">\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\n      <slot name=\"header\"><h4 class=\"panel-title\">{{ header }}</h4></slot>\n    </div>\n    <transition name=\"collapse\">\n      <div class=\"panel-collapse\" v-if=\"open\">\n        <div class=\"panel-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    header: {type: String},\n    isOpen: {type: Boolean, default: null},\n    type: {type: String, default : null}\n  },\n  data() {\n    return {\n      open: this.isOpen\n    }\n  },\n  watch: {\n    isOpen( val ) {\n      this.open = val\n    }\n  },\n  computed: {\n    inAccordion () { return this.$parent && this.$parent._isAccordion },\n    panelType () { return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default') }\n  },\n  methods: {\n    toggle () {\n      this.open = !this.open\n      this.$emit('open', this)\n    }\n  },\n  transitions: {\n    collapse: {\n      afterEnter (el) {\n        el.style.maxHeight = ''\n        el.style.overflow = ''\n      },\n      beforeLeave (el) {\n        el.style.maxHeight = el.offsetHeight + 'px'\n        el.style.overflow = 'hidden'\n        // Recalculate DOM before the class gets added.\n        return el.offsetHeight\n      }\n    }\n  },\n  created () {\n    if (this.isOpen === null) {\n      this.open = !this.inAccordion\n    }\n  }\n}\n</script>\n\n<style>\n.accordion-toggle {\n  cursor: pointer;\n}\n.collapse-enter-active,\n.collapse-leave-active {\n  transition: max-height .5s ease;\n}\n.collapse-enter,\n.collapse-leave-active {\n  max-height: 0 !important;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 23 */
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
	      this.$emit('open', this);
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
	      this.open = !this.inAccordion;
	    }
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    class: ['panel', _vm.panelType]
	  }, [_h('div', {
	    class: ['panel-heading', {
	      'accordion-toggle': _vm.inAccordion
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.inAccordion && _vm.toggle()
	      }
	    }
	  }, [_vm._t("header", [_h('h4', {
	    staticClass: "panel-title"
	  }, [_vm._s(_vm.header)])])]), " ", _h('transition', {
	    attrs: {
	      "name": "collapse"
	    }
	  }, [(_vm.open) ? _h('div', {
	    staticClass: "panel-collapse"
	  }, [_h('div', {
	    staticClass: "panel-body"
	  }, [_vm._t("default")])]) : _vm._e()])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1debb399", module.exports)
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(26)
	
	/* script */
	__vue_exports__ = __webpack_require__(28)
	
	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1bd6df92"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1bd6df92", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1bd6df92", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Select.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1bd6df92&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1bd6df92&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\nbutton.form-control.dropdown-toggle[data-v-1bd6df92]{\n  height: auto;\n  padding-right: 24px;\n}\nbutton.form-control.dropdown-toggle[data-v-1bd6df92]:after{\n  content: ' ';\n  position: absolute;\n  right: 13px;\n  top: 50%;\n  margin: -1px 0 0;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.bs-searchbox[data-v-1bd6df92] {\n  position: relative;\n  margin: 4px 8px;\n}\n.bs-searchbox .close[data-v-1bd6df92] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.bs-searchbox input[data-v-1bd6df92]:focus,\n.secret:focus + button[data-v-1bd6df92] {\n  outline: 0;\n  border-color: #66afe9 !important;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.secret[data-v-1bd6df92] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\nbutton>.close[data-v-1bd6df92] { margin-left: 5px;\n}\n.notify.out[data-v-1bd6df92] { position: relative;\n}\n.notify.in[data-v-1bd6df92],\n.notify>div[data-v-1bd6df92] {\n  position: absolute;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n  pointer-events: none;\n}\n.notify>div[data-v-1bd6df92] {\n  top: 5px;\n  z-index: 1;\n}\n.notify.in[data-v-1bd6df92] {\n  opacity: .9;\n  bottom: 5px;\n}\n.btn-group-justified .dropdown-toggle>span[data-v-1bd6df92]:not(.close) {\n  width: calc(100% - 18px);\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -4px;\n}\n.btn-group-justified .dropdown-menu[data-v-1bd6df92] { width: 100%;\n}\n", "", {"version":3,"sources":["/./src/Select.vue?e31f3ea2"],"names":[],"mappings":";AA4PA;EACA,aAAA;EACA,oBAAA;CACA;AACA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,oCAAA;EACA,mCAAA;CACA;AACA;EACA,mBAAA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;;EAEA,WAAA;EACA,iCAAA;EACA,0EAAA;CACA;AACA;EACA,UAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,WAAA;CACA;AACA,iCAAA,iBAAA;CAAA;AACA,+BAAA,mBAAA;CAAA;AACA;;EAEA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;EACA,4CAAA;EACA,qBAAA;CACA;AACA;EACA,SAAA;EACA,WAAA;CACA;AACA;EACA,YAAA;EACA,YAAA;CACA;AACA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;CACA;AACA,uDAAA,YAAA;CAAA","file":"Select.vue","sourcesContent":["<template>\n  <div ref=\"select\" :class=\"classes\" v-click-outside=\"blur\">\n    <button type=\"button\" class=\"form-control dropdown-toggle\"\n      :disabled=\"disabled || !hasParent\"\n      :readonly=\"readonly\"\n      @click=\"toggle()\"\n      @keyup.esc=\"show = false\"\n    >\n      <span class=\"btn-content\" v-html=\"loading ? text.loading : showPlaceholder || selected\"></span>\n      <span v-if=\"clearButton&&values.length\" class=\"close\" @click=\"clear()\">&times;</span>\n    </button>\n    <select ref=\"sel\" v-model=\"val\" v-show=\"show\" :name=\"name\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\">\n      <option v-if=\"required\" value=\"\"></option>\n      <option v-for=\"option in list\" :value=\"option[optionsValue]\">{{ option[optionsLabel] }}</option>\n    </select>\n    <ul class=\"dropdown-menu\">\n      <template v-if=\"list.length\">\n        <li v-if=\"canSearch\" class=\"bs-searchbox\">\n          <input type=\"text\" :placeholder=\"searchText||text.search\" class=\"form-control\" autocomplete=\"off\" ref=\"search\"\n            v-model=\"searchValue\"\n            @keyup.esc=\"show = false\"\n          />\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\">&times;</span>\n        </li>\n        <li v-if=\"required&&!clearButton\"><a @mousedown.prevent=\"clear() && blur()\">{{ placeholder || text.notSelected }}</a></li>\n        <li v-for=\"option in filteredOptions\" :id=\"option[optionsValue]\">\n          <a @mousedown.prevent=\"select(option[optionsValue])\">\n            <span v-html=\"option[optionsLabel]\"></span>\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option[optionsValue])\"></span>\n          </a>\n        </li>\n      </template>\n      <slot></slot>\n      <transition v-if=\"notify && !closeOnSelect\" name=\"fadein\"><div class=\"notify in\">{{limitText}}</div></transition>\n    </ul>\n    <transition v-if=\"notify && closeOnSelect\" name=\"fadein\"><div class=\"notify out\"><div>{{limitText}}</div></div></transition>\n    <!-- <pre>Options: {{list}}</pre> -->\n  </div>\n</template>\n\n<script>\nimport {translations} from './utils/utils.js'\nimport ClickOutside from './directives/ClickOutside.js'\n\nvar timeout = {}\nexport default {\n  directives: {\n    ClickOutside\n  },\n  props: {\n    clearButton: {type: Boolean, default: false},\n    closeOnSelect: {type: Boolean, default: false},\n    disabled: {type: Boolean, default: false},\n    lang: {type: String, default: navigator.language},\n    limit: {type: Number, default: 1024},\n    minSearch: {type: Number, default: 0},\n    multiple: {type: Boolean, default: false},\n    name: {type: String, default: null},\n    options: {type: Array, default () { return [] }},\n    optionsLabel: {type: String, default: 'label'},\n    optionsValue: {type: String, default: 'value'},\n    parent: {default: true},\n    placeholder: {type: String, default: null},\n    readonly: {type: Boolean, default: null},\n    required: {type: Boolean, default: null},\n    search: {type: Boolean, default: false},\n    searchText: {type: String, default: null},\n    url: {type: String, default: null},\n    value: null\n  },\n  data () {\n    return {\n      list: [],\n      loading: null,\n      searchValue: null,\n      show: false,\n      notify: false,\n      val: null,\n      valid: null\n    }\n  },\n  computed: {\n    canSearch () { return this.minSearch ? this.list.length >= this.minSearch : this.search },\n    classes () { return [{open: this.show, disabled: this.disabled}, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'] },\n    filteredOptions () {\n      var search = (this.searchValue || '').toLowerCase()\n      return !search ? this.list : this.list.filter(el => {\n        return ~el[this.optionsValue].toLowerCase().search(search)\n      })\n    },\n    hasParent () { return this.parent instanceof Array ? this.parent.length : this.parent },\n    inInput () { return this.$parent._input },\n    isLi () { return this.$parent._navbar || this.$parent.menu || this.$parent._tabset },\n    limitText () { return this.text.limit.replace('{{limit}}', this.limit) },\n    selected () {\n      if (this.list.length === 0) { return '' }\n      var sel = this.values.map(val => (this.list.find(o => o[this.optionsValue] === val) || {})[this.optionsLabel]).filter(val => val !== undefined)\n      this.$emit('selected', sel)\n      return sel.join(', ')\n    },\n    showPlaceholder () { return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null },\n    text () { return translations(this.lang) },\n    values () { return this.val instanceof Array ? this.val : ~[null, undefined].indexOf(this.val) ? [] : [this.val] },\n    valOptions () { return this.list.map(el => el[this.optionsValue]) }\n  },\n  watch: {\n    options (options) {\n      if (options instanceof Array) this.setOptions(options)\n    },\n    show (val) {\n      if (val) {\n        this.$refs.sel.focus()\n        this.$refs.search && this.$refs.search.focus()\n        // onBlur(this.$refs.select, e => { this.show = false })\n      } else {\n        // offBlur(this.$refs.select)\n      }\n    },\n    url () {\n      this.urlChanged()\n    },\n    valid (val, old) {\n      this.$emit('isvalid', val)\n      this.$emit(!val ? 'invalid' : 'valid')\n      if (val !== old && this._parent) this._parent.validate()\n    },\n    value (val, old) {\n      if (val !== old) { this.val = val }\n    },\n    val (val, old) {\n      if (val !== old) {\n        this.$emit('change', val)\n        this.$emit('input', val)\n      }\n      if (val instanceof Array && val.length > this.limit) {\n        this.val = val.slice(0, this.limit)\n        this.notify = true\n        if (timeout.limit) clearTimeout(timeout.limit)\n        timeout.limit = setTimeout(() => {\n          timeout.limit = false\n          this.notify = false\n        }, 1500)\n      }\n      this.valid = this.validate()\n    }\n  },\n  methods: {\n    blur () {\n      this.show = false\n    },\n    checkData () {\n      if (this.multiple) {\n        if (this.limit < 1) { this.limit = 1 }\n        if (!(this.val instanceof Array)) {\n          this.val = (this.val === null || this.val === undefined) ? [] : [this.val]\n        }\n        var values = this.valOptions\n        this.val = this.val.filter(el => ~values.indexOf(el))\n        if (this.values.length > this.limit) {\n          this.val = this.val.slice(0, this.limit)\n        }\n      } else {\n        if (!~this.valOptions.indexOf(this.val)) { this.val = null }\n      }\n    },\n    clear () {\n      if (this.disabled || this.readonly) { return }\n      this.val = this.val instanceof Array ? [] : null\n      this.toggle()\n    },\n    clearSearch () {\n      this.searchValue = ''\n      this.$refs.search.focus()\n    },\n    isSelected (v) {\n      return this.values.indexOf(v) > -1\n    },\n    select (v) {\n      if (this.val instanceof Array) {\n        if (~this.val.indexOf(v)) {\n          var index = this.val.indexOf(v)\n          this.val.splice(index, 1)\n        } else {\n          this.val.push(v)\n        }\n        if (this.closeOnSelect) {\n          this.toggle()\n        }\n      } else {\n        this.val = v\n        this.toggle()\n      }\n    },\n    setOptions (options) {\n      this.list = options.map(el => {\n        if (el instanceof Object) { return el }\n        let obj = {}\n        obj[this.optionsLabel] = el\n        obj[this.optionsValue] = el\n        return obj\n      })\n      this.$emit('options', this.list)\n    },\n    toggle () {\n      this.show = !this.show\n    },\n    urlChanged () {\n      if (!this.url || !this.$http) { return }\n      this.loading = true\n      this.$http.get(this.url).then(response => {\n        var data = response.data instanceof Array ? response.data : []\n        try { data = JSON.parse(data) } catch (e) {}\n        this.setOptions(data)\n        this.loading = false\n        this.checkData()\n      }, response => {\n        this.loading = false\n      })\n    },\n    validate () {\n      return !this.required ? true : this.val instanceof Array ? this.val.length > 0 : this.val !== null\n    }\n  },\n  created () {\n    this.setOptions(this.options)\n    this.val = this.value\n    this._select = true\n    if (this.val === undefined || !this.parent) { this.val = null }\n    if (!this.multiple && this.val instanceof Array) {\n      this.val = this.val[0]\n    }\n    this.checkData()\n    if (this.url) this.urlChanged()\n    let parent = this.$parent\n    while (parent && !parent._formGroup) { parent = parent.$parent }\n    if (parent && parent._formGroup) {\n      this._parent = parent\n    }\n  },\n  mounted () {\n    if (this._parent) this._parent.children.push(this)\n  },\n  beforeDestroy () {\n    if (this._parent) {\n      var index = this._parent.children.indexOf(this)\n      this._parent.children.splice(index, 1)\n    }\n  }\n}\n</script>\n\n<style scoped>\nbutton.form-control.dropdown-toggle{\n  height: auto;\n  padding-right: 24px;\n}\nbutton.form-control.dropdown-toggle:after{\n  content: ' ';\n  position: absolute;\n  right: 13px;\n  top: 50%;\n  margin: -1px 0 0;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.bs-searchbox {\n  position: relative;\n  margin: 4px 8px;\n}\n.bs-searchbox .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.bs-searchbox input:focus,\n.secret:focus + button {\n  outline: 0;\n  border-color: #66afe9 !important;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.secret {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\nbutton>.close { margin-left: 5px;}\n.notify.out { position: relative; }\n.notify.in,\n.notify>div {\n  position: absolute;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n  pointer-events: none;\n}\n.notify>div {\n  top: 5px;\n  z-index: 1;\n}\n.notify.in {\n  opacity: .9;\n  bottom: 5px;\n}\n.btn-group-justified .dropdown-toggle>span:not(.close) {\n  width: calc(100% - 18px);\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -4px;\n}\n.btn-group-justified .dropdown-menu { width: 100%; }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
	var _ClickOutside = __webpack_require__(30);
	
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
	        return ~el[_this.optionsValue].toLowerCase().search(search);
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
	        this.$refs.sel.focus();
	        this.$refs.search && this.$refs.search.focus();
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
	    blur: function blur() {
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
	        if (~this.val.indexOf(v)) {
	          var index = this.val.indexOf(v);
	          this.val.splice(index, 1);
	        } else {
	          this.val.push(v);
	        }
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
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    if (this._parent) this._parent.children.push(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	};

/***/ },
/* 29 */
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
	      var response;
	      var i;
	      var value;
	
	      (function () {
	        var e = { status: request.status };
	        if (request.status === 200) {
	          try {
	            response = request.responseText;
	
	            for (i in data.done) {
	              value = data.done[i](response);
	
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
	      })();
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
/* 30 */
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
	    return el.node !== node ? true : !callback ? false : el.node.callback !== callback;
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
	    removeEventListener(el, binding.value);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (_vm.blur),
	      expression: "blur"
	    }],
	    ref: "select",
	    class: _vm.classes
	  }, [_h('button', {
	    staticClass: "form-control dropdown-toggle",
	    attrs: {
	      "type": "button",
	      "disabled": _vm.disabled || !_vm.hasParent,
	      "readonly": _vm.readonly
	    },
	    on: {
	      "click": function($event) {
	        _vm.toggle()
	      },
	      "keyup": function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        _vm.show = false
	      }
	    }
	  }, [_h('span', {
	    staticClass: "btn-content",
	    domProps: {
	      "innerHTML": _vm._s(_vm.loading ? _vm.text.loading : _vm.showPlaceholder || _vm.selected)
	    }
	  }), " ", (_vm.clearButton && _vm.values.length) ? _h('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.clear()
	      }
	    }
	  }, ["×"]) : _vm._e()]), " ", _h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }, {
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
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
	        _vm.val = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }
	    }
	  }, [(_vm.required) ? _h('option', {
	    attrs: {
	      "value": ""
	    }
	  }) : _vm._e(), " ", _vm._l((_vm.list), function(option) {
	    return _h('option', {
	      domProps: {
	        "value": option[_vm.optionsValue]
	      }
	    }, [_vm._s(option[_vm.optionsLabel])])
	  })]), " ", _h('ul', {
	    staticClass: "dropdown-menu"
	  }, [(_vm.list.length) ? [(_vm.canSearch) ? _h('li', {
	    staticClass: "bs-searchbox"
	  }, [_h('input', {
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
	      "value": _vm._s(_vm.searchValue)
	    },
	    on: {
	      "keyup": function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        _vm.show = false
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchValue = $event.target.value
	      }
	    }
	  }), " ", _h('span', {
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
	  }, ["×"])]) : _vm._e(), " ", (_vm.required && !_vm.clearButton) ? _h('li', [_h('a', {
	    on: {
	      "mousedown": function($event) {
	        $event.preventDefault();
	        _vm.clear() && _vm.blur()
	      }
	    }
	  }, [_vm._s(_vm.placeholder || _vm.text.notSelected)])]) : _vm._e(), " ", _vm._l((_vm.filteredOptions), function(option) {
	    return _h('li', {
	      attrs: {
	        "id": option[_vm.optionsValue]
	      }
	    }, [_h('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.select(option[_vm.optionsValue])
	        }
	      }
	    }, [_h('span', {
	      domProps: {
	        "innerHTML": _vm._s(option[_vm.optionsLabel])
	      }
	    }), " ", _h('span', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (_vm.isSelected(option[_vm.optionsValue])),
	        expression: "isSelected(option[optionsValue])"
	      }],
	      staticClass: "glyphicon glyphicon-ok check-mark"
	    })])])
	  })] : _vm._e(), " ", _vm._t("default"), " ", (_vm.notify && !_vm.closeOnSelect) ? _h('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_h('div', {
	    staticClass: "notify in"
	  }, [_vm._s(_vm.limitText)])]) : _vm._e()]), " ", (_vm.notify && _vm.closeOnSelect) ? _h('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_h('div', {
	    staticClass: "notify out"
	  }, [_h('div', [_vm._s(_vm.limitText)])])]) : _vm._e(), " "])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1bd6df92", module.exports)
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "accordion",
	      "name": "***Accordion"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    attrs: {
	      "type": "primary"
	    },
	    domProps: {
	      "value": (_vm.checked)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checked = $event
	      }
	    }
	  }, ["Open only one at a time."]), " ", _h('p', [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.selected),
	      expression: "selected"
	    }],
	    attrs: {
	      "options": _vm.types,
	      "clear-button": "",
	      "placeholder": "Global type"
	    },
	    domProps: {
	      "value": (_vm.selected)
	    },
	    on: {
	      "input": function($event) {
	        _vm.selected = $event
	      }
	    }
	  })]), " ", _h('p', [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.first),
	      expression: "first"
	    }],
	    attrs: {
	      "options": _vm.types,
	      "clear-button": "",
	      "placeholder": "First element type"
	    },
	    domProps: {
	      "value": (_vm.first)
	    },
	    on: {
	      "input": function($event) {
	        _vm.first = $event
	      }
	    }
	  })]), " ", _h('accordion', {
	    attrs: {
	      "one-at-atime": _vm.checked,
	      "type": _vm.selected
	    }
	  }, [_h('panel', {
	    attrs: {
	      "is-open": "",
	      "type": _vm.first == 'panel' ? null : _vm.first
	    }
	  }, [_h('strong', {
	    slot: "header"
	  }, [_h('u', ["Panel #1"])]), "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      "]), " ", _h('panel', {
	    attrs: {
	      "header": "Panel #2"
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      "]), " ", _h('panel', {
	    attrs: {
	      "header": "Panel #3"
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      "]), " ", _h('panel', {
	    attrs: {
	      "header": "Panel #4"
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      "])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <accordion :one-at-atime=\"checked\" type=\"info\">\n      <panel is-open type=\"primary\">\n        <strong slot=\"header\"><u>Panel #1</u></strong>\n        ...\n      </panel>\n      <panel header=\"Panel #2\">\n        ...\n      </panel>\n      <panel header=\"Panel #3\">\n        ...\n      </panel>\n      <panel header=\"Panel #4\">\n        ...\n      </panel>\n    </accordion>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Define the type of color for the tabs (global)."])]), " ", _h('div', [_h('p', ["one-at-time"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Control whether expanding an item will cause the other items to close."])])]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Panel"
	    }
	  }, [_h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["The clickable text on the group's header. You need one to be able to click on the header for toggling."])]), " ", _h('div', [_h('p', ["is-open"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Whether accordion group is open or closed."])]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Define the type of color for the tab (single)."])])]), " ", _h('p', ["If you want to personalice your header with some html you can use the slot instead of header attribute (panel #1 in the example)."])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-65e6a40c", module.exports)
	  }
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(35)
	
	/* script */
	__vue_exports__ = __webpack_require__(37)
	
	/* template */
	var __vue_template__ = __webpack_require__(107)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/affixDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-12162a02", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-12162a02", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] affixDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12162a02!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12162a02!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n0%, 100% {transform: translateX(0);\n}\n10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);\n}\n20%, 40%, 60%, 80% {transform: translateX(5px);\n}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n", "", {"version":3,"sources":["/./docs/example/affixDocs.vue?1c810bbd"],"names":[],"mappings":";AAiDA;IACA,+BAAA;IACA,uBAAA;IACA,kCAAA;IACA,0BAAA;IACA,mCAAA;CACA;AACA;AACA,UAAA,yBAAA;CAAA;AACA,yBAAA,4BAAA;CAAA;AACA,oBAAA,2BAAA;CAAA;CACA;AACA;IACA,8BAAA;IACA,sBAAA;CACA","file":"affixDocs.vue","sourcesContent":["<template>\n  <doc-section id=\"affix\" name=\"Affix\">\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <span class=\"visible-xs-block visible-sm-block\">(The live demo is hidden in small screens)</span>\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <doc-code language=\"markup\">\n      &lt;affix offset=\"50\">\n        &lt;ul>\n          &lt;li>...&lt;/li>\n          &lt;li>...&lt;/li>\n          &lt;li>...&lt;/li>\n        &lt;/ul>\n        &lt;a href=\"#\">...&lt;/a>\n      &lt;/affix>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>offset</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>Pixels to offset from top of screen when calculating position of scroll.</p>\n      </div>\n    </doc-table>\n  </doc-section>\n</template>\n\n<script>\nimport docSection from './utils/docSection.vue'\nimport docTable from './utils/docTable.js'\nimport docCode from './utils/docCode.js'\nimport tooltip from 'src/Tooltip.vue'\n\nexport default {\n  components: {\n    docSection,\n    docTable,\n    docCode,\n    tooltip\n  }\n}\n</script>\n\n<style>\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n    0%, 100% {transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Tooltip = __webpack_require__(38);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
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
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    tooltip: _Tooltip2.default
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(39)
	
	/* script */
	__vue_exports__ = __webpack_require__(41)
	
	/* template */
	var __vue_template__ = __webpack_require__(106)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-783c16d8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-783c16d8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-783c16d8!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-783c16d8!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tooltip.top,\n.tooltip.left,\n.tooltip.right,\n.tooltip.bottom {\n  opacity: .9\n}\n.fadein-enter {\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave-active {\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: .9;\n}\n}\n@keyframes fadein-out {\n0% {\n    opacity: .9;\n}\n100% {\n    opacity: 0;\n}\n}\n", "", {"version":3,"sources":["/./src/Tooltip.vue?13bc09c0"],"names":[],"mappings":";AAyBA;;;;EAIA,WAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,WAAA;CACA;AACA;IACA,YAAA;CACA;CACA;AACA;AACA;IACA,YAAA;CACA;AACA;IACA,WAAA;CACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\n  <span ref=\"trigger\">\n    <slot></slot>\n    <transition :name=\"effect\">\n      <div ref=\"popover\" v-if=\"show\" style=\"display:block;\" :class=\"['tooltip',placement]\">\n        <div class=\"tooltip-arrow\"></div>\n        <div class=\"tooltip-inner\"><slot name=\"content\" v-html=\"content\"></slot></div>\n      </div>\n    </transition>\n  </span>\n</template>\n\n<script>\nimport PopoverMixin from './utils/popoverMixins.js'\n\nexport default {\n  mixins: [PopoverMixin],\n  props: {\n    effect: {type: String, default: 'scale'},\n    trigger: {type: String, default: 'hover'}\n  }\n}\n</script>\n\n<style>\n.tooltip.top,\n.tooltip.left,\n.tooltip.right,\n.tooltip.bottom {\n  opacity: .9\n}\n.fadein-enter {\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave-active {\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: .9;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: .9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(42);
	
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

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(43);
	
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
	      this.$nextTick(function () {
	        var popover = _this.$refs.popover;
	        var trigger = _this.$refs.trigger.children[0];
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
	      });
	    }
	  },
	  mounted: function mounted() {
	    var trigger = this.$refs.trigger;
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(44);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(62);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(98);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(104);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(105);
	
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
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      return NodeListJS(ArrayProto.filter.apply(this, arguments), this);
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
	      ArrayProto.forEach.apply(this, arguments);
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
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
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
	
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
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
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      return NodeListJS(ArrayProto.slice.apply(this, args), this);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
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
	
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
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
	      var _this4 = this;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      classes.forEach(function (c) {
	        return _this4.each(function (el) {
	          return el.classList[method](c);
	        });
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
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
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
	      if (typeof events === 'string' && callback instanceof Function) {
	        this.each(function (el) {
	          events.split(' ').forEach(function (event) {
	            Events.forEach(function (e) {
	              if (Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        });
	      } else if (typeof events === 'string') {
	        this.each(function (el) {
	          events.split(' ').forEach(function (event) {
	            Events.forEach(function (e) {
	              if (Events[e] && Events[e].el === el && Events[e].event === event) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        });
	      } else if (callback instanceof Function) {
	        this.each(function (el) {
	          Events.forEach(function (e) {
	            if (Events[e] && Events[e].el === el && Events[e].callback === callback) {
	              Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	              delete Events[e];
	            }
	          });
	        });
	      } else {
	        this.each(function (el) {
	          Events.forEach(function (e) {
	            if (Events[e] && Events[e].el === el) {
	              Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	              delete Events[e];
	            }
	          });
	        });
	      }
	      Events = Events.filter(function (el) {
	        return el !== undefined;
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
	  var _this5 = this;
	
	  if (NL[prop]) return;
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
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
	      return returnThis ? _this5 : flatten(arr, _this5);
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
	  for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	    args[_key9] = arguments[_key9];
	  }
	
	  return new NodeList(args);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	var $Object = __webpack_require__(49).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(47);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(57), 'Object', {defineProperty: __webpack_require__(53).f});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(48)
	  , core      = __webpack_require__(49)
	  , ctx       = __webpack_require__(50)
	  , hide      = __webpack_require__(52)
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
/* 48 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 49 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(51);
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
/* 51 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(53)
	  , createDesc = __webpack_require__(61);
	module.exports = __webpack_require__(57) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(54)
	  , IE8_DOM_DEFINE = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(60)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(57) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(57) && !__webpack_require__(58)(function(){
	  return Object.defineProperty(__webpack_require__(59)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(58)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55)
	  , document = __webpack_require__(48).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(55);
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	__webpack_require__(93);
	module.exports = __webpack_require__(97).f('iterator');

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(65)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(68)(String, 'String', function(iterated){
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(66)
	  , defined   = __webpack_require__(67);
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
/* 66 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(69)
	  , $export        = __webpack_require__(47)
	  , redefine       = __webpack_require__(70)
	  , hide           = __webpack_require__(52)
	  , has            = __webpack_require__(71)
	  , Iterators      = __webpack_require__(72)
	  , $iterCreate    = __webpack_require__(73)
	  , setToStringTag = __webpack_require__(89)
	  , getPrototypeOf = __webpack_require__(91)
	  , ITERATOR       = __webpack_require__(90)('iterator')
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
/* 69 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(52);

/***/ },
/* 71 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(74)
	  , descriptor     = __webpack_require__(61)
	  , setToStringTag = __webpack_require__(89)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(52)(IteratorPrototype, __webpack_require__(90)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(54)
	  , dPs         = __webpack_require__(75)
	  , enumBugKeys = __webpack_require__(87)
	  , IE_PROTO    = __webpack_require__(84)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(59)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(88).appendChild(iframe);
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(53)
	  , anObject = __webpack_require__(54)
	  , getKeys  = __webpack_require__(76);
	
	module.exports = __webpack_require__(57) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(77)
	  , enumBugKeys = __webpack_require__(87);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(71)
	  , toIObject    = __webpack_require__(78)
	  , arrayIndexOf = __webpack_require__(81)(false)
	  , IE_PROTO     = __webpack_require__(84)('IE_PROTO');
	
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(79)
	  , defined = __webpack_require__(67);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(80);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(78)
	  , toLength  = __webpack_require__(82)
	  , toIndex   = __webpack_require__(83);
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(66)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(66)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(85)('keys')
	  , uid    = __webpack_require__(86);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(48)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(48).document && document.documentElement;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(53).f
	  , has = __webpack_require__(71)
	  , TAG = __webpack_require__(90)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(85)('wks')
	  , uid        = __webpack_require__(86)
	  , Symbol     = __webpack_require__(48).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(71)
	  , toObject    = __webpack_require__(92)
	  , IE_PROTO    = __webpack_require__(84)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(67);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	var global        = __webpack_require__(48)
	  , hide          = __webpack_require__(52)
	  , Iterators     = __webpack_require__(72)
	  , TO_STRING_TAG = __webpack_require__(90)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(95)
	  , step             = __webpack_require__(96)
	  , Iterators        = __webpack_require__(72)
	  , toIObject        = __webpack_require__(78);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(68)(Array, 'Array', function(iterated, kind){
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
/* 95 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(90);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(100);
	var $Object = __webpack_require__(49).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(101)('getOwnPropertyNames', function(){
	  return __webpack_require__(102).f;
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(47)
	  , core    = __webpack_require__(49)
	  , fails   = __webpack_require__(58);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(78)
	  , gOPN      = __webpack_require__(103).f
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(77)
	  , hiddenKeys = __webpack_require__(87).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(44);
	
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), " ", _h('transition', {
	    attrs: {
	      "name": _vm.effect
	    }
	  }, [(_vm.show) ? _h('div', {
	    ref: "popover",
	    class: ['tooltip', _vm.placement],
	    staticStyle: {
	      "display": "block"
	    }
	  }, [_h('div', {
	    staticClass: "tooltip-arrow"
	  }), " ", _h('div', {
	    staticClass: "tooltip-inner"
	  }, [_vm._t("content")])]) : _vm._e()])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-783c16d8", module.exports)
	  }
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "affix",
	      "name": "Affix"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('h3', ["\n      The sub-navigation on the RIGHT is a live demo of the affix.\n      ", _h('span', {
	    staticClass: "visible-xs-block visible-sm-block"
	  }, ["(The live demo is hidden in small screens)"]), " ", _h('tooltip', {
	    attrs: {
	      "trigger": "hover",
	      "effect": "fadein",
	      "content": "I'm a direction, not jerking off!",
	      "placement": "left"
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm"
	  })])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <affix offset=\"50\">\n      <ul>\n        <li>...</li>\n        <li>...</li>\n        <li>...</li>\n      </ul>\n      <a href=\"#\">...</a>\n    </affix>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["offset"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p', ["Pixels to offset from top of screen when calculating position of scroll."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-12162a02", module.exports)
	  }
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(109)
	
	/* template */
	var __vue_template__ = __webpack_require__(119)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/affixSidebar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47b98640", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47b98640", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] affixSidebar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(110);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _Affix = __webpack_require__(115);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Scroll = __webpack_require__(117);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
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
	
	exports.default = {
	  directives: {
	    Scroll: _Scroll2.default
	  },
	  components: {
	    Affix: _Affix2.default
	  },
	  filters: {
	    space: function space(val) {
	      return val.replace('-', ' ');
	    }
	  },
	  data: function data() {
	    return {
	      active: null
	    };
	  },
	
	  computed: {
	    sections: function sections() {
	      return this.$root.sections;
	    }
	  },
	  methods: {
	    scrollSpy: function scrollSpy() {
	      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.sections), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var s = _step.value;
	
	          // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
	          // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
	          if (s.el.offsetTop + 420 <= scrollPosition) {
	            this.active = s.id;
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
	    }
	  },
	  mounted: function mounted() {
	    this.scrollSpy();
	  }
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	__webpack_require__(64);
	module.exports = __webpack_require__(112);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(54)
	  , get      = __webpack_require__(113);
	module.exports = __webpack_require__(49).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(114)
	  , ITERATOR  = __webpack_require__(90)('iterator')
	  , Iterators = __webpack_require__(72);
	module.exports = __webpack_require__(49).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(80)
	  , TAG = __webpack_require__(90)('toStringTag')
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(116)
	
	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Affix.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-54cc9536", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-54cc9536", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Affix.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Scroll = __webpack_require__(117);
	
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
/* 117 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "hidden-print hidden-xs hidden-sm"
	  }, [_h('nav', {
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
	  }, [_vm._t("default")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-54cc9536", module.exports)
	  }
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('affix', {
	    directives: [{
	      name: "scroll",
	      rawName: "v-scroll",
	      value: (_vm.scrollSpy),
	      expression: "scrollSpy"
	    }],
	    attrs: {
	      "offset": 50
	    }
	  }, [_h('ul', {
	    staticClass: "nav bs-docs-sidenav",
	    attrs: {
	      "id": "sidenav"
	    }
	  }, [_vm._l((_vm.sections), function(s) {
	    return _h('li', {
	      class: {
	        active: _vm.active == s.id
	      }
	    }, [_h('a', {
	      attrs: {
	        "href": '#' + s.id
	      }
	    }, [_vm._s(s.name)])])
	  })]), " ", _h('a', {
	    staticClass: "back-to-top",
	    attrs: {
	      "href": "#"
	    }
	  }, ["Back to top"]), " ", _h('a', {
	    staticClass: "back-to-top",
	    attrs: {
	      "href": "https://github.com/yuche/vue-strap"
	    }
	  }, ["GitHub"])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47b98640", module.exports)
	  }
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(121)
	
	/* script */
	__vue_exports__ = __webpack_require__(123)
	
	/* template */
	var __vue_template__ = __webpack_require__(129)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/alertDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1e42d4e4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1e42d4e4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] alertDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e42d4e4!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e42d4e4!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alertDocs.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.alert-icon-float-left {\n  font-size:32px;\n  float:left;\n  margin-right:5px;\n}\n", "", {"version":3,"sources":["/./docs/example/alertDocs.vue?133d156a"],"names":[],"mappings":";AA6HA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;CACA","file":"alertDocs.vue","sourcesContent":["<template>\n  <doc-section id=\"alert\" name=\"Alert\">\n    <div class=\"bs-example\">\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <alert v-model=\"showTop\" placement=\"top\" :duration=\"3000\"\n        type=\"danger\" width=\"400px\" dismissable\n      >\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n      <alert v-model=\"showRight\" placement=\"top-right\" :duration=\"3000\"\n        type=\"success\" width=\"400px\" dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n      <hr>\n      <alert type=\"success\">\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n      <alert type=\"info\">\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n    </div>\n\n    <doc-code language=\"markup\">\n      &lt;alert type=\"success/info/danger/warning\">\n        ...\n      &lt;/alert>\n\n      &lt;alert v-model=\"showRight\" placement=\"top-right\" duration=\"3000\" type=\"success\" width=\"400px\" dismissable>\n        &lt;span class=\"icon-ok-circled alert-icon-float-left\">&lt;/span>\n        &lt;strong>Well Done!&lt;/strong>\n        &lt;p>You successfully read this important alert message.&lt;/p>\n      &lt;/alert>\n\n      &lt;alert v-models=\"showTop\" placement=\"top\" duration=\"3000\" type=\"danger\" width=\"400px\" dismissable>\n        &lt;span class=\"icon-info-circled alert-icon-float-left\">&lt;/span>\n        &lt;strong>Heads up!&lt;/strong>\n        &lt;p>This alert needs your attention.&lt;/p>\n      &lt;/alert>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>value</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether show the component</p>\n      </div>\n      <div>\n        <p>dismissable</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Whether show close button</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of\n        <code>success</code>\n        <code>info</code>\n        <code>warning</code>\n        <code>danger</code></p>\n        <p><code>success</code></p>\n        <p>Components styles</p>\n      </div>\n      <div>\n        <p>duration</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>\n      </div>\n      <div>\n        <p>width</p>\n        <p><code>String</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>\n        <p></p>\n        <p>how to position the component.</p>\n      </div>\n    </doc-table>\n  </div>\n</template>\n\n<script>\nimport docSection from './utils/docSection.vue'\nimport docTable from './utils/docTable.js'\nimport docCode from './utils/docCode.js'\nimport alert from 'src/Alert.vue'\n\nexport default {\n  components: {\n    docSection,\n    docTable,\n    docCode,\n    alert\n  },\n  data () {\n    return {\n      showRight: false,\n      showTop: false\n    }\n  }\n}\n</script>\n\n<style>\n.alert-icon-float-left {\n  font-size:32px;\n  float:left;\n  margin-right:5px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Alert = __webpack_require__(124);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(125)
	
	/* script */
	__vue_exports__ = __webpack_require__(127)
	
	/* template */
	var __vue_template__ = __webpack_require__(128)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Alert.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1f1dc6f1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1f1dc6f1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1f1dc6f1!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1f1dc6f1!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave-active {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 1050;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 1050;\n}\n", "", {"version":3,"sources":["/./src/Alert.vue?6d4dc055"],"names":[],"mappings":";AAoDA;;EAEA,6BAAA;CACA;AACA;;EAEA,UAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,cAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\n  <transition name=\"fade\">\n    <div v-show=\"val\" :class=\"['alert', 'alert-'+type, placement]\" :style=\"{width:width}\" role=\"alert\">\n      <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"val = false\">\n        <span>&times;</span>\n      </button>\n      <slot></slot>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport {coerce, delayer} from './utils/utils.js'\n\nvar DURATION = 0\nexport default {\n  props: {\n    dismissable: {type: Boolean, default: false},\n    duration: {default: DURATION},\n    placement: {type: String},\n    type: {type: String},\n    value: {type: Boolean, default: true },\n    width: {type: String}\n  },\n  data () {\n    return {\n      val: this.value\n    }\n  },\n  computed: {\n    durationNum () { return coerce.number(this.duration, DURATION) }\n  },\n  watch: {\n    val (val) {\n      if (val && this.durationNum > 0) { this._delayClose() }\n      this.$emit('input', val)\n    },\n    value (val) {\n      if (this.val !== val) {\n        this.val = val\n      }\n    }\n  },\n  created () {\n    this._delayClose = delayer(function () {\n      this.val = false\n    }, 'durationNum')\n  }\n}\n</script>\n\n<style>\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave-active {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 1050;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 1050;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_h('div', {
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
	  }, [_h('button', {
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
	  }, [_h('span', ["×"])]), " ", _vm._t("default")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1f1dc6f1", module.exports)
	  }
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "alert",
	      "name": "Alert"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('button', {
	    staticClass: "btn btn-danger btn-lg",
	    on: {
	      "click": function($event) {
	        _vm.showTop = !_vm.showTop
	      }
	    }
	  }, ["\n      Click to toggle alert on top\n    "]), " ", _h('alert', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.showTop),
	      expression: "showTop"
	    }],
	    attrs: {
	      "placement": "top",
	      "duration": 3000,
	      "type": "danger",
	      "width": "400px",
	      "dismissable": ""
	    },
	    domProps: {
	      "value": (_vm.showTop)
	    },
	    on: {
	      "input": function($event) {
	        _vm.showTop = $event
	      }
	    }
	  }, [_h('span', {
	    staticClass: "icon-info-circled alert-icon-float-left"
	  }), " ", _h('strong', ["Heads up!"]), " ", _h('p', ["This alert needs your attention."])]), " ", _h('button', {
	    staticClass: "btn btn-success btn-lg",
	    on: {
	      "click": function($event) {
	        _vm.showRight = !_vm.showRight
	      }
	    }
	  }, ["\n      Click to toggle alert on right\n    "]), " ", _h('alert', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.showRight),
	      expression: "showRight"
	    }],
	    attrs: {
	      "placement": "top-right",
	      "duration": 3000,
	      "type": "success",
	      "width": "400px",
	      "dismissable": ""
	    },
	    domProps: {
	      "value": (_vm.showRight)
	    },
	    on: {
	      "input": function($event) {
	        _vm.showRight = $event
	      }
	    }
	  }, [_h('span', {
	    staticClass: "icon-ok-circled alert-icon-float-left"
	  }), " ", _h('strong', ["Well Done!"]), " ", _h('p', ["You successfully read this important alert message."])]), " ", _h('hr'), " ", _h('alert', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_h('strong', ["Well Done!"]), "\n      You successfully read this important alert message.\n    "]), " ", _h('alert', {
	    attrs: {
	      "type": "info"
	    }
	  }, [_h('strong', ["Heads up!"]), " This alert needs your attention, but it's not super important.\n    "]), " ", _h('alert', {
	    attrs: {
	      "type": "danger",
	      "dismissable": ""
	    }
	  }, [_h('strong', ["Oh snap!"]), " Change a few things up and try submitting again.\n    "]), " ", _h('alert', {
	    attrs: {
	      "type": "warning",
	      "dismissable": ""
	    }
	  }, [_h('strong', ["Warning!"]), " Better check yourself, you're not looking too good.\n    "])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <alert type=\"success/info/danger/warning\">\n      ...\n    </alert>\n\n    <alert v-model=\"showRight\" placement=\"top-right\" duration=\"3000\" type=\"success\" width=\"400px\" dismissable>\n      <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n      <strong>Well Done!</strong>\n      <p>You successfully read this important alert message.</p>\n    </alert>\n\n    <alert v-models=\"showTop\" placement=\"top\" duration=\"3000\" type=\"danger\" width=\"400px\" dismissable>\n      <span class=\"icon-info-circled alert-icon-float-left\"></span>\n      <strong>Heads up!</strong>\n      <p>This alert needs your attention.</p>\n    </alert>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether show the component"])]), " ", _h('div', [_h('p', ["dismissable"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Whether show close button"])]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of\n      ", _h('code', ["success"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["danger"])]), " ", _h('p', [_h('code', ["success"])]), " ", _h('p', ["Components styles"])]), " ", _h('div', [_h('p', ["duration"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p', ["Auto close duration. Set ", _h('code', ["0"]), " or a negative number will NOT be auto-close."])]), " ", _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ". one of ", _h('code', ["top"]), ", ", _h('code', ["top-right"])]), " ", _h('p'), " ", _h('p', ["how to position the component."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1e42d4e4", module.exports)
	  }
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(131)
	
	/* template */
	var __vue_template__ = __webpack_require__(137)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/asideDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6e46356a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6e46356a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] asideDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Aside = __webpack_require__(132);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
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
	//
	//
	//
	//
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

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(133)
	
	/* script */
	__vue_exports__ = __webpack_require__(135)
	
	/* template */
	var __vue_template__ = __webpack_require__(136)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Aside.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9db09666", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9db09666", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9db09666!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9db09666!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.aside-open {\n  transition: transform 0.3s;\n}\n.aside-open.has-push-right {\n  transform: translateX(-300px);\n}\n.aside {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 1049;\n    overflow: auto;\n    background: #fff;\n}\n.aside.left {\n  left: 0;\n  right: auto;\n}\n.aside.right {\n  left: auto;\n  right: 0;\n}\n.slideleft-enter {\n  animation:slideleft-in .3s;\n}\n.slideleft-leave-active {\n  animation:slideleft-out .3s;\n}\n@keyframes slideleft-in {\n0% {\n    transform: translateX(-100%);\n    opacity: 0;\n}\n100% {\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes slideleft-out {\n0% {\n    transform: translateX(0);\n    opacity: 1;\n}\n100% {\n    transform: translateX(-100%);\n    opacity: 0;\n}\n}\n.slideright-enter {\n  animation:slideright-in .3s;\n}\n.slideright-leave-active {\n  animation:slideright-out .3s;\n}\n@keyframes slideright-in {\n0% {\n    transform: translateX(100%);\n    opacity: 0;\n}\n100% {\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes slideright-out {\n0% {\n    transform: translateX(0);\n    opacity: 1;\n}\n100% {\n    transform: translateX(100%);\n    opacity: 0;\n}\n}\n.aside:focus {\n    outline: 0\n}\n@media (max-width: 991px) {\n.aside {\n    min-width:240px\n}\n}\n.aside.left {\n  right: auto;\n  left: 0\n}\n.aside.right {\n  right: 0;\n  left: auto\n}\n.aside .aside-dialog .aside-header {\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.43px;\n  padding: 6px 15px;\n  background: #337ab7;\n  color: #fff\n}\n.aside .aside-dialog .aside-header .close {\n  margin-right: -8px;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 25px;\n  opacity: .8\n}\n.aside .aside-dialog .aside-body {\n  position: relative;\n  padding: 15px\n}\n.aside .aside-dialog .aside-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5\n}\n.aside .aside-dialog .aside-footer .btn+.btn {\n  margin-left: 5px;\n  margin-bottom: 0\n}\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n  margin-left: -1px\n}\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\n  margin-left: 0\n}\n.aside-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: 0;\n  transition: opacity .3s ease;\n  background-color: #000\n}\n.aside-backdrop.in {\n  opacity: .5;\n  filter: alpha(opacity=50)\n}\n", "", {"version":3,"sources":["/./src/Aside.vue?17c0e450"],"names":[],"mappings":";AAsFA;EACA,2BAAA;CACA;AACA;EACA,8BAAA;CACA;AACA;IACA,gBAAA;IACA,OAAA;IACA,UAAA;IACA,cAAA;IACA,eAAA;IACA,iBAAA;CACA;AACA;EACA,QAAA;EACA,YAAA;CACA;AACA;EACA,WAAA;EACA,SAAA;CACA;AACA;EACA,2BAAA;CACA;AACA;EACA,4BAAA;CACA;AACA;AACA;IACA,6BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,6BAAA;IACA,WAAA;CACA;CACA;AACA;EACA,4BAAA;CACA;AACA;EACA,6BAAA;CACA;AACA;AACA;IACA,4BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,4BAAA;IACA,WAAA;CACA;CACA;AACA;IACA,UAAA;CACA;AACA;AACA;IACA,eAAA;CACA;CACA;AACA;EACA,YAAA;EACA,OAAA;CACA;AACA;EACA,SAAA;EACA,UAAA;CACA;AACA;EACA,iCAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;CACA;AACA;EACA,cAAA;EACA,kBAAA;EACA,6BAAA;CACA;AACA;EACA,iBAAA;EACA,gBAAA;CACA;AACA;EACA,iBAAA;CACA;AACA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,cAAA;EACA,WAAA;EACA,6BAAA;EACA,sBAAA;CACA;AACA;EACA,YAAA;EACA,yBAAA;CACA","file":"Aside.vue","sourcesContent":["<template>\n  <transition :name=\"'side' + this.placement\">\n    <div class=\"aside\" v-if=\"show\" :style=\"{width:width+'px'}\" :class=\"placement\">\n      <div class=\"aside-dialog\">\n        <div class=\"aside-content\">\n          <div class=\"aside-header\">\n            <button type=\"button\" class=\"close\" @click='trigger_close'><span>&times;</span></button>\n            <h4 class=\"aside-title\"><slot name=\"header\">{{ header }}</slot></h4>\n          </div>\n          <div class=\"aside-body\"><slot></slot></div>\n        </div>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\nimport {getScrollBarWidth} from './utils/utils.js'\nimport $ from './utils/NodeList.js'\n// let coerce = {\n//   value: 'boolean',\n//   width: 'number'\n// }\n\nexport default {\n  props: {\n    header: {type: String},\n    placement: {type: String, default: 'right'},\n    show: {type: Boolean, required: true},\n    width: {type: Number, default: 320}\n  },\n  watch: {\n    show (val, old) {\n      this.$emit('input', val)\n      this.$emit(this.show ? 'open' : 'close')\n      const body = document.body\n      const scrollBarWidth = getScrollBarWidth()\n      if (val) {\n        if (!this._backdrop) {\n          this._backdrop = document.createElement('div')\n        }\n        this._backdrop.className = 'aside-backdrop'\n        body.appendChild(this._backdrop)\n        body.classList.add('modal-open')\n        if (scrollBarWidth !== 0) {\n          body.style.paddingRight = scrollBarWidth + 'px'\n        }\n        // request property that requires layout to force a layout\n        var x = this._backdrop.clientHeight\n        this._backdrop.classList.add('in')\n        $(this._backdrop).on('click', () => this.trigger_close())\n      } else {\n        $(this._backdrop).on('transitionend', () => {\n          $(this._backdrop).off()\n          try {\n            body.classList.remove('modal-open')\n            body.style.paddingRight = '0'\n            body.removeChild(this._backdrop)\n            this._backdrop = null\n          } catch (e) {}\n        })\n        this._backdrop.className = 'aside-backdrop'\n      }\n    }\n  },\n  methods: {\n    trigger () {\n      return {\n        close: () => this.trigger_close(),\n        open: () => this.trigger_open()\n      }\n    },\n    trigger_close () { \n      this.$emit( 'close' )\n    },\n    trigger_open() { \n      this.$emit( 'open' )\n    }\n  },\n  mounted () {\n    this.$emit('trigger', () => this.trigger)\n  }\n}\n</script>\n\n<style>\n.aside-open {\n  transition: transform 0.3s;\n}\n.aside-open.has-push-right {\n  transform: translateX(-300px);\n}\n.aside {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 1049;\n    overflow: auto;\n    background: #fff;\n}\n.aside.left {\n  left: 0;\n  right: auto;\n}\n.aside.right {\n  left: auto;\n  right: 0;\n}\n.slideleft-enter {\n  animation:slideleft-in .3s;\n}\n.slideleft-leave-active {\n  animation:slideleft-out .3s;\n}\n@keyframes slideleft-in {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideleft-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.slideright-enter {\n  animation:slideright-in .3s;\n}\n.slideright-leave-active {\n  animation:slideright-out .3s;\n}\n@keyframes slideright-in {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideright-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.aside:focus {\n    outline: 0\n}\n@media (max-width: 991px) {\n  .aside {\n    min-width:240px\n  }\n}\n.aside.left {\n  right: auto;\n  left: 0\n}\n.aside.right {\n  right: 0;\n  left: auto\n}\n.aside .aside-dialog .aside-header {\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.43px;\n  padding: 6px 15px;\n  background: #337ab7;\n  color: #fff\n}\n.aside .aside-dialog .aside-header .close {\n  margin-right: -8px;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 25px;\n  opacity: .8\n}\n.aside .aside-dialog .aside-body {\n  position: relative;\n  padding: 15px\n}\n.aside .aside-dialog .aside-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5\n}\n.aside .aside-dialog .aside-footer .btn+.btn {\n  margin-left: 5px;\n  margin-bottom: 0\n}\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n  margin-left: -1px\n}\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\n  margin-left: 0\n}\n.aside-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: 0;\n  transition: opacity .3s ease;\n  background-color: #000\n}\n.aside-backdrop.in {\n  opacity: .5;\n  filter: alpha(opacity=50)\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
	var _NodeList = __webpack_require__(43);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// let coerce = {
	//   value: 'boolean',
	//   width: 'number'
	// }
	
	//
	//
	//
	//
	//
	//
	//
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('transition', {
	    attrs: {
	      "name": 'side' + this.placement
	    }
	  }, [(_vm.show) ? _h('div', {
	    staticClass: "aside",
	    class: _vm.placement,
	    style: ({
	      width: _vm.width + 'px'
	    })
	  }, [_h('div', {
	    staticClass: "aside-dialog"
	  }, [_h('div', {
	    staticClass: "aside-content"
	  }, [_h('div', {
	    staticClass: "aside-header"
	  }, [_h('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.trigger_close
	    }
	  }, [_h('span', ["×"])]), " ", _h('h4', {
	    staticClass: "aside-title"
	  }, [_vm._t("header", [_vm._s(_vm.header)])])]), " ", _h('div', {
	    staticClass: "aside-body"
	  }, [_vm._t("default")])])])]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9db09666", module.exports)
	  }
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "aside",
	      "name": "Aside"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('button', {
	    staticClass: "btn btn-danger btn-lg",
	    on: {
	      "click": function($event) {
	        _vm.showLeft = true
	      }
	    }
	  }, ["Show Aside on left"]), " ", _h('button', {
	    staticClass: "btn btn-success btn-lg",
	    on: {
	      "click": function($event) {
	        _vm.showRight = true
	      }
	    }
	  }, ["Show Aside on right"]), " ", _h('sidebar', {
	    attrs: {
	      "show": _vm.showLeft,
	      "placement": "left",
	      "header": "Title",
	      "width": 350
	    },
	    on: {
	      "close": function($event) {
	        _vm.showLeft = false
	      }
	    }
	  }, [_h('h4', ["Text in aside"]), " ", _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua."]), " ", _h('p', [" Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat."]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n        if (talk === cheap){\n          code.style.display = 'block'\n        }\n      "]), " ", _h('div', {
	    staticClass: "aside-footer"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.showLeft = false
	      }
	    }
	  }, ["Close"])])]), " ", _h('sidebar', {
	    attrs: {
	      "show": _vm.showRight,
	      "placement": "right",
	      "header": "Title",
	      "width": 350
	    },
	    on: {
	      "close": function($event) {
	        _vm.showRight = false
	      }
	    }
	  }, [_h('h4', ["Text in aside"]), " ", _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua."]), " ", _h('p', [" Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat."]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n        if (talk === cheap){\n          code.style.display = 'block'\n        }\n      "]), " ", _h('div', {
	    staticClass: "aside-footer"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.showRight = false
	      }
	    }
	  }, ["Close"])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <sidebar v-model=\"showRight\" placement=\"right\" header=\"Title\" width=\"350\">\n      ...\n    </sidebar>\n    <sidebar v-model=\"showLeft\" placement=\"left\" header=\"Title\" width=\"350\">\n      ...\n    </sidebar>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["Whether show the component."])]), " ", _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["left"]), ", ", _h('code', ["right"])]), " ", _h('p', [_h('code', ["right"])]), " ", _h('p', ["how to position the component."])]), " ", _h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Header text of the aside component."])]), " ", _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p'), " ", _h('p')])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6e46356a", module.exports)
	  }
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(139)
	
	/* template */
	var __vue_template__ = __webpack_require__(148)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/buttonGroupDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2bed2e5f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2bed2e5f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] buttonGroupDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _ButtonGroup = __webpack_require__(140);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Radio = __webpack_require__(143);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    ButtonGroup: _ButtonGroup2.default,
	    Checkbox: _Checkbox2.default,
	    Radio: _Radio2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: 'middle'
	    };
	  }
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(141)
	
	/* template */
	var __vue_template__ = __webpack_require__(142)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/ButtonGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-603e69c2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-603e69c2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ButtonGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


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
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    class: {
	      'btn-group': _vm.buttons, 'btn-group-justified': _vm.justified, 'btn-group-vertical': _vm.vertical
	    },
	    attrs: {
	      "data-toggle": _vm.buttons && 'buttons'
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-603e69c2", module.exports)
	  }
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(144)
	
	/* script */
	__vue_exports__ = __webpack_require__(146)
	
	/* template */
	var __vue_template__ = __webpack_require__(147)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3c73ea10", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3c73ea10", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(145);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3c73ea10!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3c73ea10!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.radio { position: relative;\n}\n.radio > label > input {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  z-index: -1;\n  box-sizing: border-box;\n}\n.radio > label > .icon {\n  position: absolute;\n  top: .15rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  text-align: center;\n  user-select: none;\n  border-radius: .7rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.radio:not(.active) > label > .icon {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\n.radio > label > input:focus ~ .icon {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.radio.active > label > .icon {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\n}\n.radio.active .btn-default { filter: brightness(75%);\n}\n.radio.disabled > label > .icon,\n.radio.readonly > label > .icon,\n.btn.readonly {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=radio] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}\n", "", {"version":3,"sources":["/./src/Radio.vue?59cee086"],"names":[],"mappings":";AAmGA,SAAA,mBAAA;CAAA;AACA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,8OAAA;CACA;AACA,6BAAA,wBAAA;CAAA;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Radio.vue","sourcesContent":["<template>\n  <div :is=\"buttonStyle?'label':'div'\" @click.prevent=\"toggle\"\n    :class=\"[(buttonStyle?'btn btn-'+typeColor:'radio '+typeColor),{active:active,disabled:disabled,readonly:readonly}]\"\n  >\n    <template v-if=\"buttonStyle\">\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\n        v-show=\"!readonly\"\n        v-model=\"check\"\n        :value=\"checkedValue\"\n        :name=\"name\"\n        :readonly=\"readonly\"\n        :disabled=\"disabled\"\n      />\n      <slot></slot>\n    </template>\n    <label v-else class=\"open\">\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\n        v-model=\"check\"\n        :value=\"checkedValue\"\n        :name=\"name\"\n        :readonly=\"readonly\"\n        :disabled=\"disabled\"\n      />\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\n      <slot></slot>\n    </label>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    button: {type: Boolean, default: false},\n    checkedValue: {default: true},\n    disabled: {type: Boolean, default: false},\n    name: {type: String, default: null},\n    readonly: {type: Boolean, default: false},\n    type: {type: String, default: null},\n    value: {default: false}\n  },\n  data () {\n    return {\n      check: this.value\n    }\n  },\n  computed: {\n    active () { return this.check === this.checkedValue },\n    parentValue () { return this._inGroup ? this.$parent.val === this.value : null },\n    buttonStyle () { return this.button || (this._inGroup && this.$parent.buttons) },\n    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }\n  },\n  watch: {\n    check (val) {\n      if (this.checkedValue === val) {\n        this.$emit('input', val)\n        this.$emit('checked', true)\n        if (this._inGroup) { this.$parent.val = val }\n      }\n    },\n    parentValue (val) {\n      if (this.check !== val && this.checkedValue === val) { this.check = val }\n    },\n    value (val) {\n      this.check = this.checkedValue === val ? val : null\n    }\n  },\n  created () {\n    var parent = this.$parent\n    if (parent && parent._btnGroup && !parent._checkboxGroup) {\n      this._inGroup = true\n      parent._radioGroup = true\n    }\n    if (this.$parent._radioGroup) {\n      if (this.$parent.val) {\n        this.check = (this.$parent.val === this.checkedValue)\n      } else if (this.check) {\n        this.$parent.val = this.checkedValue\n      }\n    }\n  },\n  methods: {\n    focus () {\n      this.$refs.input.focus()\n    },\n    toggle () {\n      if (this.disabled) { return }\n      this.focus()\n      if (this.readonly) { return }\n      this.check = this.checkedValue\n      if (this._inGroup) {\n        this.$parent.val = this.checkedValue\n      }\n    }\n  }\n}\n</script>\n\n<style scope>\n.radio { position: relative; }\n.radio > label > input {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  z-index: -1;\n  box-sizing: border-box;\n}\n.radio > label > .icon {\n  position: absolute;\n  top: .15rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  text-align: center;\n  user-select: none;\n  border-radius: .7rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.radio:not(.active) > label > .icon {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\n.radio > label > input:focus ~ .icon {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.radio.active > label > .icon {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\n}\n.radio.active .btn-default { filter: brightness(75%); }\n\n.radio.disabled > label > .icon,\n.radio.readonly > label > .icon,\n.btn.readonly {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=radio] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 146 */
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h(_vm.buttonStyle ? 'label' : 'div', {
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
	  }, [(_vm.buttonStyle) ? [_h('input', {
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
	      "change": function($event) {
	        _vm.check = _vm.checkedValue
	      }
	    }
	  }), " ", _vm._t("default")] : _h('label', {
	    staticClass: "open"
	  }, [_h('input', {
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
	      "change": function($event) {
	        _vm.check = _vm.checkedValue
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [_vm.active ? 'btn-' + _vm.typeColor : '', {
	      bg: _vm.typeColor === 'default'
	    }]
	  }), " ", (_vm.active && _vm.typeColor === 'default') ? _h('span', {
	    staticClass: "icon"
	  }) : _vm._e(), " ", _vm._t("default")]), " "])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3c73ea10", module.exports)
	  }
	}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "button-group",
	      "name": "***Button Group"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('h4', ["Checkbox"]), " ", _h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue),
	      expression: "checkboxValue"
	    }],
	    domProps: {
	      "value": (_vm.checkboxValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue = $event
	      }
	    }
	  }, [_h('checkbox', {
	    attrs: {
	      "true-value": "left"
	    }
	  }, ["Left"]), " ", _h('checkbox', {
	    attrs: {
	      "true-value": "middle"
	    }
	  }, ["Middle"]), " ", _h('checkbox', {
	    attrs: {
	      "true-value": "right"
	    }
	  }, ["Right"])]), " ", _h('p', [_h('pre', ["Checkbox value: " + _vm._s(_vm.checkboxValue)])]), " ", _h('hr'), " ", _h('h4', ["Radio"]), " ", _h('p', [_h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "type": "primary"
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, [_h('radio', {
	    attrs: {
	      "true-value": "left"
	    }
	  }, ["Left"]), " ", _h('radio', {
	    attrs: {
	      "true-value": "middle"
	    }
	  }, ["Middle"]), " ", _h('radio', {
	    attrs: {
	      "true-value": "right"
	    }
	  }, ["Right"])])]), " ", _h('p', [_h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "type": "success"
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, [_h('radio', {
	    attrs: {
	      "true-value": "left"
	    }
	  }, ["Left"]), " ", _h('radio', {
	    attrs: {
	      "true-value": "middle"
	    }
	  }, ["Middle"]), " ", _h('radio', {
	    attrs: {
	      "true-value": "right"
	    }
	  }, ["Right"])])]), " ", _h('p', [_h('label', ["Not buttons:"]), " ", _h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "type": "info",
	      "buttons": "false"
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, [_h('radio', {
	    attrs: {
	      "true-value": "left"
	    }
	  }, ["Left"]), " ", _h('radio', {
	    attrs: {
	      "true-value": "middle"
	    }
	  }, ["Middle"]), " ", _h('radio', {
	    attrs: {
	      "true-value": "right"
	    }
	  }, ["Right"])])]), " ", _h('p', [_h('pre', ["Radio value: " + _vm._s(_vm.radioValue)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <button-group v-model=\"checkboxValue\">\n      <checkbox value=\"left\">Left</checkbox>\n      <checkbox value=\"middle\">Middle</checkbox>\n      <checkbox value=\"right\">Right</checkbox>\n    </button-group>\n\n    <button-group v-model=\"radioValue\" type=\"primary\">\n      <radio value=\"left\">Left</radio>\n      <radio value=\"middle\">Middle</radio>\n      <radio value=\"right\">Right</radio>\n    </button-group>\n\n    Not Buttons:\n    <button-group v-model=\"radioValue\" type=\"info\" buttons=\"false\">\n      <radio value=\"left\">Left</radio>\n      <radio value=\"middle\">Middle</radio>\n      <radio value=\"right\">Right</radio>\n    </button-group>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Array"]), " or ", _h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["If defined, then the defined values will be checked otherwise the elements with a checked attribute\n      will be checked."])]), " ", _h('div', [_h('p', ["buttons"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p'), _h('p', ["Can enable/disable button style."]), " ", _h('p', ["Group normal checks if you want to set the same type color for all."]), " ", _h('p')]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2bed2e5f", module.exports)
	  }
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(150)
	
	/* template */
	var __vue_template__ = __webpack_require__(159)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/carouselDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-168473b4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-168473b4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] carouselDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Carousel = __webpack_require__(151);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(156);
	
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

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(152)
	
	/* script */
	__vue_exports__ = __webpack_require__(154)
	
	/* template */
	var __vue_template__ = __webpack_require__(155)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Carousel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-29f4644a"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-29f4644a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-29f4644a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Carousel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29f4644a&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29f4644a&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[data-v-29f4644a] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/Carousel.vue?345ee27f"],"names":[],"mappings":";AA4GA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\n<div class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <li v-for=\"(indicator,i) in indicator_list\" @click=\"indicatorClick(i)\" :class=\"{active:i === index}\"><span></span></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <slot></slot>\n  </div>\n  <!-- Controls -->\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\">\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    </a>\n  </div>\n</div>\n</template>\n\n<script>\nimport $ from './utils/NodeList.js'\n// let coerce = {\n//   interval: 'number'\n// }\n\nexport default {\n  props: {\n    indicators: {\n      type: Boolean,\n      default: true\n    },\n    controls: {\n      type: Boolean,\n      default: true\n    },\n    interval: {\n      type: Number,\n      default: 5000\n    }\n  },\n  data () {\n    return {\n      indicator_list: [],\n      index: 0,\n      isAnimating: false\n    }\n  },\n  watch: {\n    index(newVal, oldVal) {\n      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)\n    }\n  },\n  methods: {\n    indicatorClick(index) {\n      if (this.isAnimating || this.index === index) return false\n      this.isAnimating = true\n      this.index = index\n    },\n    slide (direction, next, prev) {\n      if (!this.$el) { return }\n      const $slider = $('.item', this.$el)\n      if (!$slider.length) { return }\n      const selected = $slider[next] || $slider[0]\n      $(selected).addClass(direction === 'left' ? 'next' : 'prev')\n      // request property that requires layout to force a layout\n      var x = selected.clientHeight\n      $([$slider[prev], selected]).addClass(direction).on('transitionend', () => {\n        $slider.off('transitionend').className = 'item'\n        $(selected).addClass('active')\n        this.isAnimating = false\n      })\n    },\n    next() {\n      if (!this.$el || this.isAnimating) { return false }\n      this.isAnimating = true\n      this.index + 1 < $('.item', this.$el).length ? this.index += 1 : this.index = 0\n    },\n    prev() {\n      if (!this.$el || this.isAnimating) { return false }\n      this.isAnimating = true\n      this.index === 0 ? this.index = $('.item', this.$el).length - 1 : this.index -= 1\n    },\n    toggleInterval (val) {\n      if (val === undefined) { val = this._intervalID }\n      if(this._intervalID) {\n        clearInterval(this._intervalID)\n        delete this._intervalID\n      }\n      if(val && this.interval > 0) {\n        this._intervalID = setInterval(this.next, this.interval)\n      }\n    }\n  },\n  mounted () {\n    this.toggleInterval(true)\n    $(this.$el).on('mouseenter', () => this.toggleInterval(false)).on('mouseleave', () => this.toggleInterval(true))\n  },\n  beforeDestroy () {\n    this.toggleInterval(false)\n    $(this.$el).off('mouseenter mouseleave')\n  }\n}\n</script>\n\n<style scoped>\n.carousel-control {\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(43);
	
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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "carousel slide",
	    attrs: {
	      "data-ride": "carousel"
	    }
	  }, [_h('ol', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.indicators),
	      expression: "indicators"
	    }],
	    staticClass: "carousel-indicators"
	  }, [_vm._l((_vm.indicator_list), function(indicator, i) {
	    return _h('li', {
	      class: {
	        active: i === _vm.index
	      },
	      on: {
	        "click": function($event) {
	          _vm.indicatorClick(i)
	        }
	      }
	    }, [_h('span')])
	  })]), " ", " ", _h('div', {
	    staticClass: "carousel-inner",
	    attrs: {
	      "role": "listbox"
	    }
	  }, [_vm._t("default")]), " ", " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.controls),
	      expression: "controls"
	    }],
	    staticClass: "carousel-controls hidden-xs"
	  }, [_h('a', {
	    staticClass: "left carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-chevron-left",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })]), " ", _h('a', {
	    staticClass: "right carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-29f4644a", module.exports)
	  }
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(157)
	
	/* template */
	var __vue_template__ = __webpack_require__(158)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d2914cc8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d2914cc8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 157 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
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
	  mounted: function mounted() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c] === this) {
	        this.index = parseInt(c, 10);
	        break;
	      }
	    }
	    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
	    if (this.$parent.indicator) this.$parent.indicator.push(this.index);
	
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "item"
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d2914cc8", module.exports)
	  }
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "carousel",
	      "name": "Carousel"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('carousel', [_h('slider', [_h('img', {
	    attrs: {
	      "src": "https://placehold.it/1200x500?text=one"
	    }
	  }), " ", _h('div', {
	    staticClass: "carousel-caption"
	  }, [_h('h3', ["Slide #1"]), " ", _h('p', ["sunt in culpa qui officia deserunt mollit a."])])]), " ", _h('slider', [_h('img', {
	    attrs: {
	      "src": "https://placehold.it/1200x500?text=two"
	    }
	  }), " ", _h('div', {
	    staticClass: "carousel-caption"
	  }, [_h('h3', ["Slide #2"]), " ", _h('p', ["sunt in culpa qui officia deserunt mollit a."])])]), " ", _h('slider', [_h('img', {
	    attrs: {
	      "src": "https://placehold.it/1200x500?text=three"
	    }
	  }), " ", _h('div', {
	    staticClass: "carousel-caption"
	  }, [_h('h3', ["Slide #3"]), " ", _h('p', ["sunt in culpa qui officia deserunt mollit a."])])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <carousel>\n      <slider>\n        <img src=\"https://placehold.it/1200x400?text=one\">\n        <div class=\"carousel-caption\">\n          ...\n        </div>\n      </slider>\n      <slider>\n        <img src=\"https://placehold.it/1200x400?text=two\">\n      </slider>\n      <slider>\n        <img src=\"https://placehold.it/1200x400?text=three\">\n      </slider>\n    </carousel>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["indicators"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether to show the indicators."])]), " ", _h('div', [_h('p', ["controls"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether to show the direction controls."])]), " ", _h('div', [_h('p', ["interval"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["5000"])]), " ", _h('p', ["The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n        carousel will not automatically cycle.\n      "])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-168473b4", module.exports)
	  }
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(161)
	
	/* template */
	var __vue_template__ = __webpack_require__(162)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/checkboxDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-33101b17", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-33101b17", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] checkboxDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
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
	//
	//
	
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
	        one: false,
	        two: true,
	        three: false,
	        four: false
	      }
	    };
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "checkbox",
	      "name": "Checkbox"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('h4', ["Checkbox"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.one),
	      expression: "checkboxValue.one"
	    }],
	    attrs: {
	      "true-value": "1"
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.one)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.one = $event
	      }
	    }
	  }, ["One"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.two),
	      expression: "checkboxValue.two"
	    }],
	    attrs: {
	      "true-value": "two",
	      "type": "danger",
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.two)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.two = $event
	      }
	    }
	  }, ["Two (disabled)"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.two),
	      expression: "checkboxValue.two"
	    }],
	    attrs: {
	      "true-value": "two",
	      "type": "warning",
	      "readonly": ""
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.two)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.two = $event
	      }
	    }
	  }, ["Two (readonly)"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.two),
	      expression: "checkboxValue.two"
	    }],
	    attrs: {
	      "true-value": "two",
	      "type": "success"
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.two)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.two = $event
	      }
	    }
	  }, ["Two"]), " ", _h('hr'), " ", _h('h4', ["Checkbox Button (Single button)"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.three),
	      expression: "checkboxValue.three"
	    }],
	    attrs: {
	      "button": "",
	      "true-value": 2 + 1,
	      "type": "primary"
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.three)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.three = $event
	      }
	    }
	  }, ["Three"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.four),
	      expression: "checkboxValue.four"
	    }],
	    attrs: {
	      "button": "",
	      "type": "info",
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.four)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.four = $event
	      }
	    }
	  }, ["Four (disabled)"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.four),
	      expression: "checkboxValue.four"
	    }],
	    attrs: {
	      "button": "",
	      "type": "info",
	      "readonly": ""
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.four)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.four = $event
	      }
	    }
	  }, ["Four (readonly)"]), " ", _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkboxValue.four),
	      expression: "checkboxValue.four"
	    }],
	    attrs: {
	      "button": "",
	      "type": "info"
	    },
	    domProps: {
	      "value": (_vm.checkboxValue.four)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkboxValue.four = $event
	      }
	    }
	  }, ["Four"]), " ", _h('p', [_h('pre', ["Checkbox values: " + _vm._s(_vm.checkboxValue)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <checkbox v-model=\"checkboxValue.one\" true-value=\"1\">One</checkbox>\n    <checkbox v-model=\"checkboxValue.two\" true-value=\"two\" type=\"primary\">Two</checkbox>\n    <checkbox v-model=\"checkboxValue.three\" :true-value=\"2+1\" type=\"info\">Three</checkbox>\n    <checkbox button v-model=\"checkboxValue.four\" type=\"danger\">Four</checkbox>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Mixed"])]), " ", _h('p'), " ", _h('p', ["Handle the selected value."])]), " ", _h('div', [_h('p', ["true-value"]), " ", _h('p', [_h('code', ["Mixed"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Value when is checked."])]), " ", _h('div', [_h('p', ["false-value"]), " ", _h('p', [_h('code', ["Mixed"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Value when is not checked."])]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["button"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["Button style."])])]), " ", _h('p', ["See ", _h('a', {
	    attrs: {
	      "href": "#button-group"
	    }
	  }, ["Button Group"]), " for more options."])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-33101b17", module.exports)
	  }
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(164)
	
	/* template */
	var __vue_template__ = __webpack_require__(173)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/datepickerDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a2cbfd0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5a2cbfd0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] datepickerDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Datepicker = __webpack_require__(165);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(170);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    Checkbox: _Checkbox2.default,
	    Datepicker: _Datepicker2.default,
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      clear: true,
	      datestr: '',
	      disabled: [],
	      format: 'yyyy-MM-dd',
	      formats: ['dd/MM/yyyy', 'dd-MM-yyyy', 'yyyy,MM,dd', 'yyyy-MM-dd', 'yyyy.MM.dd', 'MMM/dd/yyyy', 'MMMM/dd/yyyy', 'MM/dd/yyyy', 'MM-dd-yyyy'],
	      placeholder: 'placeholder is displayed when value is null or empty',
	      value: '2015-06-10'
	    };
	  },
	
	  computed: {
	    dp_string: function dp_string() {
	      return this.datestr;
	    }
	  },
	  mounted: function mounted() {
	    this.datestr = new Date(this.$refs.dp.parse()).toString();
	  },
	
	  watch: {
	    value: function value(nval) {
	      if (this.$refs.dp) this.datestr = new Date(this.$refs.dp.parse()).toString();
	    },
	    disabled: function disabled() {
	      this.$refs.dp.getDateRange();
	    },
	    format: function format(newV) {
	      this.value = this.$refs.dp.stringify();
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(166)
	
	/* script */
	__vue_exports__ = __webpack_require__(168)
	
	/* template */
	var __vue_template__ = __webpack_require__(169)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Datepicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-29d9ef77", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-29d9ef77", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Datepicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29d9ef77!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29d9ef77!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.datepicker {\n  position: relative;\n  display: inline-block;\n}\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n.datepicker > button.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  outline: none;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.datepicker > button.close:focus {\n  opacity: .2;\n}\n.datepicker-popup {\n  position: absolute;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner {\n  width: 218px;\n}\n.datepicker-body {\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span {\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span {\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray {\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: rgb(50, 118, 177)!important;\n  color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color : #eeeeee;\n}\n.datepicker-weekRange span {\n  font-weight: bold;\n}\n.datepicker-label {\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn {\n  font-weight: bold;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n}\n.datepicker-preBtn {\n  left: 2px;\n}\n.datepicker-nextBtn {\n  right: 2px;\n}\n", "", {"version":3,"sources":["/./src/Datepicker.vue?6b5e7ed9"],"names":[],"mappings":";AA0UA;EACA,mBAAA;EACA,sBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,yCAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;;;EAGA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kCAAA;EACA,8BAAA;CACA;AACA;;;;EAIA,YAAA;CACA;AAEA;;EAEA,wCAAA;EACA,uBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;;;;EAIA,gBAAA;CACA;AACA;;;;;EAKA,2BAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\n  <div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\n        :style=\"{width:width}\"\n        :value=\"value\"\n        @click=\"inputClick\"\n        @input=\"$emit('input', $event.target.value)\" />\n    <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"$emit('input', '')\">\n      <span>&times;</span>\n    </button>\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <template v-for=\"(m, index) in text.months\">\n              <span   :class=\"{'datepicker-dateRange-item-active':\n                  (text.months[parse(value).getMonth()]  === m) &&\n                  currDate.getFullYear() === parse(value).getFullYear()}\"\n                  @click=\"monthSelect(index)\"\n                >{{m.substr(0,3)}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <template v-for=\"decade in decadeRange\">\n              <span :class=\"{'datepicker-dateRange-item-active':parse(value).getFullYear() === decade.text}\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport {translations} from './utils/utils.js'\n// import $ from './utils/NodeList.js'\n\nexport default {\n  props: {\n    value: {type: String},\n    format: {default: 'MM/dd/yyyy'},\n    disabledDaysOfWeek: {type: Array, default () { return [] }},\n    width: {type: String, default: '200px'},\n    clearButton: {type: Boolean, default: false},\n    lang: {type: String, default: navigator.language},\n    placeholder: {type: String}\n  },\n  data () {\n    return {\n      currDate: new Date(),\n      dateRange: [],\n      decadeRange: [],\n      displayDayView: false,\n      displayMonthView: false,\n      displayYearView: false\n    }\n  },\n  watch: {\n    value (val) {\n      this.$emit('input', val)\n    },\n    currDate () {\n      this.getDateRange()\n    }\n  },\n  computed: {\n    text () {\n      return translations(this.lang)\n    }\n  },\n  methods: {\n    close () {\n      this.displayDayView = this.displayMonthView = this.displayYearView = false\n    },\n    inputClick () {\n      this.currDate = this.parse(this.value) || this.parse(new Date())\n      if (this.displayMonthView || this.displayYearView) {\n        this.displayDayView = false\n      } else {\n        this.displayDayView = !this.displayDayView\n      }\n    },\n    preNextDecadeClick (flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 10, months, date)\n      } else {\n        this.currDate = new Date(year + 10, months, date)\n      }\n    },\n    preNextMonthClick (flag) {\n      const year = this.currDate.getFullYear()\n      const month = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        const preMonth = this.getYearMonth(year, month - 1)\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\n      } else {\n        const nextMonth = this.getYearMonth(year, month + 1)\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\n      }\n    },\n    preNextYearClick (flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 1, months, date)\n      } else {\n        this.currDate = new Date(year + 1, months, date)\n      }\n    },\n    yearSelect (year) {\n      this.displayYearView = false\n      this.displayMonthView = true\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\n    },\n    daySelect (date) {\n      if (this.$el.classList[0] === 'datepicker-item-disable') {\n        return false\n      } else {\n        this.currDate = date\n        this.displayDayView = false\n        this.$emit('input', this.stringify(this.currDate))\n      }\n    },\n    switchMonthView () {\n      this.displayDayView = false\n      this.displayMonthView = true\n    },\n    switchDecadeView () {\n      this.displayMonthView = false\n      this.displayYearView = true\n    },\n    monthSelect (index) {\n      this.displayMonthView = false\n      this.displayDayView = true\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\n    },\n    getYearMonth (year, month) {\n      if (month > 11) {\n        year++\n        month = 0\n      } else if (month < 0) {\n        year--\n        month = 11\n      }\n      return {year: year, month: month}\n    },\n    stringifyDecadeHeader (date) {\n      const yearStr = date.getFullYear().toString()\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\n      return firstYearOfDecade + '-' + lastYearOfDecade\n    },\n    stringifyDayHeader (date) {\n      return this.text.months[date.getMonth()] + ' ' + date.getFullYear()\n    },\n    parseMonth (date) {\n      return this.text.months[date.getMonth()]\n    },\n    stringifyYearHeader (date) {\n      return date.getFullYear()\n    },\n    stringify (date, format = this.format) {\n      if (!date) date = this.parse()\n      if (!date) return ''\n      const year = date.getFullYear()\n      const month = date.getMonth()\n      const day = date.getDate()\n      const monthName = this.parseMonth(date)\n\n      return format\n      .replace(/yyyy/g, year)\n      .replace(/MMMM/g, monthName)\n      .replace(/MMM/g, monthName.substring(0, 3))\n      .replace(/MM/g, ('0' + month).slice(-2))\n      .replace(/dd/g, ('0' + day).slice(-2))\n      .replace(/yy/g, year)\n      .replace(/M(?!a)/g, month)\n      .replace(/d/g, day)\n    },\n    parse (str = this.value) {\n      let date\n      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {\n        date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2))\n      } else {\n        date = new Date(str)\n      }\n      return isNaN(date.getFullYear()) ? new Date() : date\n    },\n    getDayCount (year, month) {\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n      if (month === 1) {\n        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {\n          return 29\n        }\n      }\n      return dict[month]\n    },\n    getDateRange () {\n      this.dateRange = []\n      this.decadeRange = []\n      const time = {\n        year: this.currDate.getFullYear(),\n        month: this.currDate.getMonth(),\n        day: this.currDate.getDate()\n      }\n      const yearStr = time.year.toString()\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\n      for (let i = 0; i < 12; i++) {\n        this.decadeRange.push({\n          text: firstYearOfDecade + i\n        })\n      }\n\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\n      if (firstDayWeek === 0) {\n        firstDayWeek = 7\n      }\n      const dayCount = this.getDayCount(time.year, time.month)\n      if (firstDayWeek > 1) {\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\n        for (let i = 1; i < firstDayWeek; i++) {\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\n          this.dateRange.push({\n            text: dayText,\n            date: new Date(preMonth.year, preMonth.month, dayText),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n\n      for (let i = 1; i <= dayCount; i++) {\n        const date = new Date(time.year, time.month, i)\n        const week = date.getDay()\n        let sclass = ''\n        this.disabledDaysOfWeek.forEach((el) => {\n          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'\n        })\n        if (i === time.day) {\n          if (this.value) {\n            const valueDate = this.parse(this.value)\n            if (valueDate) {\n              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {\n                sclass = 'datepicker-dateRange-item-active'\n              }\n            }\n          }\n        }\n        this.dateRange.push({\n          text: i,\n          date: date,\n          sclass: sclass\n        })\n      }\n\n      if (this.dateRange.length < 42) {\n        const nextMonthNeed = 42 - this.dateRange.length\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\n\n        for (let i = 1; i <= nextMonthNeed; i++) {\n          this.dateRange.push({\n            text: i,\n            date: new Date(nextMonth.year, nextMonth.month, i),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n    }\n  },\n  mounted () {\n    let el = this.$el\n    this._blur = e => {\n      if (!el.contains(e.target)) \n        this.close()\n    }\n    this.$emit('child-created', this)\n    this.currDate = this.parse(this.value) || this.parse(new Date())\n    window.addEventListener('click', this._blur);\n  },\n  beforeDestroy () {\n    window.removeEventListner('click', this._blur)\n  }\n}\n</script>\n\n<style>\n.datepicker {\n  position: relative;\n  display: inline-block;\n}\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n.datepicker > button.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  outline: none;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.datepicker > button.close:focus {\n  opacity: .2;\n}\n.datepicker-popup {\n  position: absolute;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner {\n  width: 218px;\n}\n.datepicker-body {\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span {\n  display: inline-block;\n  width: 28px;\n  line-height: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n.datepicker-ctrl p {\n  width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span {\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray {\n  color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n  background: rgb(50, 118, 177)!important;\n  color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n  background-color : #eeeeee;\n}\n.datepicker-weekRange span {\n  font-weight: bold;\n}\n.datepicker-label {\n  background-color: #f8f8f8;\n  font-weight: 700;\n  padding: 7px 0;\n  text-align: center;\n}\n.datepicker-ctrl {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n.month-btn {\n  font-weight: bold;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n}\n.datepicker-preBtn {\n  left: 2px;\n}\n.datepicker-nextBtn {\n  right: 2px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
	// import $ from './utils/NodeList.js'
	
	exports.default = {
	  props: {
	    value: { type: String },
	    format: { default: 'MM/dd/yyyy' },
	    disabledDaysOfWeek: { type: Array, default: function _default() {
	        return [];
	      }
	    },
	    width: { type: String, default: '200px' },
	    clearButton: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    placeholder: { type: String }
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
	    value: function value(val) {
	      this.$emit('input', val);
	    },
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
	    daySelect: function daySelect(date) {
	      if (this.$el.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = date;
	        this.displayDayView = false;
	        this.$emit('input', this.stringify(this.currDate));
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
	      var month = date.getMonth();
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse() {
	      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
	
	      var date = void 0;
	      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
	        date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2));
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
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	        if (_i2 === time.day) {
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
	  },
	  mounted: function mounted() {
	    var _this2 = this;
	
	    var el = this.$el;
	    this._blur = function (e) {
	      if (!el.contains(e.target)) _this2.close();
	    };
	    this.$emit('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    window.addEventListener('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListner('click', this._blur);
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

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "datepicker"
	  }, [_h('input', {
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
	      "value": _vm.value
	    },
	    on: {
	      "click": _vm.inputClick,
	      "input": function($event) {
	        _vm.$emit('input', $event.target.value)
	      }
	    }
	  }), " ", (_vm.clearButton && _vm.value) ? _h('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$emit('input', '')
	      }
	    }
	  }, [_h('span', ["×"])]) : _vm._e(), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayDayView),
	      expression: "displayDayView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_h('div', {
	    staticClass: "datepicker-inner"
	  }, [_h('div', {
	    staticClass: "datepicker-body"
	  }, [_h('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_h('span', {
	    staticClass: "datepicker-preBtn glyphicon glyphicon-chevron-left",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(0)
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "datepicker-nextBtn glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(1)
	      }
	    }
	  }), " ", _h('p', {
	    on: {
	      "click": _vm.switchMonthView
	    }
	  }, [_vm._s(_vm.stringifyDayHeader(_vm.currDate))])]), " ", _h('div', {
	    staticClass: "datepicker-weekRange"
	  }, [_vm._l((_vm.text.daysOfWeek), function(w) {
	    return _h('span', [_vm._s(w)])
	  })]), " ", _h('div', {
	    staticClass: "datepicker-dateRange"
	  }, [_vm._l((_vm.dateRange), function(d) {
	    return _h('span', {
	      class: d.sclass,
	      on: {
	        "click": function($event) {
	          _vm.daySelect(d.date)
	        }
	      }
	    }, [_vm._s(d.text)])
	  })])])])]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayMonthView),
	      expression: "displayMonthView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_h('div', {
	    staticClass: "datepicker-inner"
	  }, [_h('div', {
	    staticClass: "datepicker-body"
	  }, [_h('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_h('span', {
	    staticClass: "datepicker-preBtn glyphicon glyphicon-chevron-left",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(0)
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "datepicker-nextBtn glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(1)
	      }
	    }
	  }), " ", _h('p', {
	    on: {
	      "click": _vm.switchDecadeView
	    }
	  }, [_vm._s(_vm.stringifyYearHeader(_vm.currDate))])]), " ", _h('div', {
	    staticClass: "datepicker-monthRange"
	  }, [_vm._l((_vm.text.months), function(m, index) {
	    return [_h('span', {
	      class: {
	        'datepicker-dateRange-item-active':
	        (_vm.text.months[_vm.parse(_vm.value).getMonth()] === m) &&
	        _vm.currDate.getFullYear() === _vm.parse(_vm.value).getFullYear()
	      },
	      on: {
	        "click": function($event) {
	          _vm.monthSelect(index)
	        }
	      }
	    }, [_vm._s(m.substr(0, 3))])]
	  })])])])]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayYearView),
	      expression: "displayYearView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_h('div', {
	    staticClass: "datepicker-inner"
	  }, [_h('div', {
	    staticClass: "datepicker-body"
	  }, [_h('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_h('span', {
	    staticClass: "datepicker-preBtn glyphicon glyphicon-chevron-left",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(0)
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "datepicker-nextBtn glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(1)
	      }
	    }
	  }), " ", _h('p', [_vm._s(_vm.stringifyDecadeHeader(_vm.currDate))])]), " ", _h('div', {
	    staticClass: "datepicker-monthRange decadeRange"
	  }, [_vm._l((_vm.decadeRange), function(decade) {
	    return [_h('span', {
	      class: {
	        'datepicker-dateRange-item-active': _vm.parse(_vm.value).getFullYear() === decade.text
	      },
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.yearSelect(decade.text)
	        }
	      }
	    }, [_vm._s(decade.text)])]
	  })])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-29d9ef77", module.exports)
	  }
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(171)
	
	/* template */
	var __vue_template__ = __webpack_require__(172)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b2b101a0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-b2b101a0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Option.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 171 */
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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return (_vm.loading) ? _h('li', [_vm._t("default")]) : _vm._e()
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b2b101a0", module.exports)
	  }
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "datepicker",
	      "name": "***Datepicker"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('p', [_h('pre', ["Selected date is: " + _vm._s(_vm.dp_string)])]), " ", _h('datepicker', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.value),
	      expression: "value"
	    }],
	    ref: "dp",
	    attrs: {
	      "disabled-days-of-Week": _vm.disabled,
	      "format": _vm.format,
	      "clear-button": _vm.clear,
	      "placeholder": _vm.placeholder,
	      "width": "370px"
	    },
	    domProps: {
	      "value": (_vm.value)
	    },
	    on: {
	      "input": function($event) {
	        _vm.value = $event
	      }
	    }
	  }), " ", _h('h4', ["Disabled days of week"]), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.disabled),
	      expression: "disabled"
	    }],
	    attrs: {
	      "multiple": "",
	      "options": [0, 1, 2, 3, 4, 5, 6]
	    },
	    domProps: {
	      "value": (_vm.disabled)
	    },
	    on: {
	      "input": function($event) {
	        _vm.disabled = $event
	      }
	    }
	  }), " ", _h('h4', ["Format"]), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.format),
	      expression: "format"
	    }],
	    attrs: {
	      "options": _vm.formats
	    },
	    domProps: {
	      "value": (_vm.format)
	    },
	    on: {
	      "input": function($event) {
	        _vm.format = $event
	      }
	    }
	  }), " ", _h('h4', ["Reset button"]), " ", _h('checkbox', {
	    attrs: {
	      "checked": _vm.clear,
	      "type": "primary"
	    },
	    on: {
	      "checked": function($event) {
	        _vm.clear = arguments[0]
	      }
	    }
	  }, ["toggle clear button"])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <datepicker v-model=\"value\" :disabled-days-of-Week=\"disabled\" :format=\"format\" :clear-button=\"clear\" :placeholder=\"placeholder\"></datepicker>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["clear-button"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["If ", _h('strong', ["true"]), " shows an × shaped button to clear the selected date.\n        Usefull in forms where date entry is optional."])]), " ", _h('div', [_h('p', ["disabled-days-of-week"]), " ", _h('p', [_h('code', ["Array"])]), " ", _h('p'), " ", _h('p', ["Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\n         Multiple values should be comma-separated."])]), " ", _h('div', [_h('p', ["format"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["MMMM/dd/yyyy"])]), " ", _h('p', ["The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy."])]), " ", _h('div', [_h('p', ["placeholder"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Placeholder to put on the input field when no date (null or empty) is set"])]), " ", _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Value of the input DOM"])]), " ", _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["200px"]), " ", _h('p', ["Width of the input DOM"])])]), " ", _h('doc-table', {
	    attrs: {
	      "type": "Events"
	    }
	  }, [_h('div', [_h('p', ["input"]), " ", _h('p', ["(", _h('code', ["value"]), ")"]), " ", _h('p', ["Return the selected value."])])]), " ", " ", _h('div')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5a2cbfd0", module.exports)
	  }
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(175)
	
	/* template */
	var __vue_template__ = __webpack_require__(179)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/dropdownDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9033d536", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9033d536", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dropdownDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Dropdown = __webpack_require__(176);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    dropdown: _Dropdown2.default
	  }
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(177)
	
	/* template */
	var __vue_template__ = __webpack_require__(178)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ad41fe8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1ad41fe8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(43);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _ClickOutside = __webpack_require__(30);
	
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
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    var $el = (0, _NodeList2.default)(this.$el);
	    $el.findChildren('a,button.dropdown-toggle').on('click', function (e) {
	      e.preventDefault();
	      if (!_this.disabled) {
	        _this.show = !_this.show;
	      }
	      return false;
	    });
	    $el.findChildren('ul').on('click', 'li>a', function (e) {
	      _this.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(this.$el).findChildren('a,button,ul').off();
	  }
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h(_vm.isLi ? 'li' : 'div', {
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
	  }, [_vm._t("before"), " ", _vm._t("button", [(_vm.isLi) ? _h('a', {
	    class: ['dropdown-toggle', _vm.buttonSize, {
	      disabled: _vm.disabled
	    }],
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "keyup": function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        _vm.show = false
	      }
	    }
	  }, ["\n      " + _vm._s(_vm.text) + "\n      ", _h('span', {
	    staticClass: "caret"
	  })]) : _h('button', {
	    class: ['btn btn-' + _vm.type, _vm.buttonSize, 'dropdown-toggle'],
	    attrs: {
	      "type": "button",
	      "disabled": _vm.disabled
	    },
	    on: {
	      "keyup": function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        _vm.show = false
	      }
	    }
	  }, ["\n      " + _vm._s(_vm.text) + "\n      ", _h('span', {
	    staticClass: "caret"
	  })]), " "]), " ", _vm._t("dropdown-menu", [_h('ul', {
	    staticClass: "dropdown-menu"
	  }, [_vm._t("default")])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1ad41fe8", module.exports)
	  }
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "dropdown",
	      "name": "Dropdown"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('dropdown', [_h('button', {
	    staticClass: "btn btn-default dropdown-toggle",
	    attrs: {
	      "type": "button"
	    },
	    slot: "button"
	  }, ["\n        Action\n        ", _h('span', {
	    staticClass: "caret"
	  })]), " ", _h('ul', {
	    staticClass: "dropdown-menu",
	    slot: "dropdown-menu"
	  }, [_h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])]), " ", _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  }), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])])]), " ", _h('dropdown', {
	    attrs: {
	      "text": "Action",
	      "type": "primary"
	    }
	  }, [_h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])]), " ", _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  }), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])]), " ", _h('dropdown', [_h('button', {
	    staticClass: "btn btn-success dropdown-toggle",
	    attrs: {
	      "type": "button"
	    },
	    slot: "button"
	  }, ["\n        Action ", _h('span', {
	    staticClass: "caret"
	  })]), " ", _h('ul', {
	    staticClass: "dropdown-menu",
	    slot: "dropdown-menu"
	  }, [_h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])]), " ", _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  }), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])])]), " ", _h('dropdown', {
	    attrs: {
	      "text": "Disabled",
	      "type": "warning",
	      "disabled": ""
	    }
	  }, [_h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])]), " ", _h('dropdown', {
	    attrs: {
	      "type": "info"
	    }
	  }, [_h('button', {
	    staticClass: "btn btn-info",
	    attrs: {
	      "type": "button"
	    },
	    slot: "before"
	  }, ["Segmented"]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])]), " ", _h('div', {
	    staticClass: "btn-group btn-group-justified"
	  }, [_h('a', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "href": "#dropdown",
	      "role": "button"
	    }
	  }, ["Left"]), " ", _h('dropdown', [_h('a', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "href": "#dropdown"
	    },
	    slot: "button"
	  }, ["\n          Dropdown ", _h('span', {
	    staticClass: "caret"
	  })]), " ", _h('ul', {
	    staticClass: "dropdown-menu",
	    slot: "dropdown-menu"
	  }, [_h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])]), " ", _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  }), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])])]), " ", _h('a', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "href": "#dropdown",
	      "role": "button"
	    }
	  }, ["Right"])])]), " ", _h('doc-code', ["\n    <dropdown text=\"Action\" type=\"primary\">\n      <li><a href=\"#dropdown\">Action</a></li>\n      <li role=\"separator\" class=\"divider\"></li>\n      <li><a href=\"#dropdown\">Separated link</a></li>\n    </dropdown>\n    // For segmented dropdown, ignore text and add a \"before\" slot\n    <dropdown type=\"info\">\n      <button slot=\"before\" type=\"button\" class=\"btn btn-info\">Segmented</button>\n      <li><a href=\"#dropdown\">...</a></li>\n    </dropdown>\n    // In a button group\n    <div class=\"btn-group btn-group-justified\">\n      <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Left</a>\n      <dropdown>...</dropdown>\n      <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Right</a>\n    </div>\n    // With slots you can handle some elements as native bootstrap\n    <dropdown>\n      <button slot=\"button\" type=\"button\" class=\"btn btn-default dropdown-toggle\">\n        Action\n        <span class=\"caret\"></span>\n      </button>\n      <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n        <li><a href=\"#dropdown\">Action</a></li>\n        <li><a href=\"#dropdown\">Another action</a></li>\n        <li><a href=\"#dropdown\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#dropdown\">Separated link</a></li>\n      </ul>\n    </dropdown>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["value (v-model)"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["Whether show the component."])]), " ", _h('div', [_h('p', ["disabled"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Dropdown button text."])]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of\n        ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])]), " ", _h('doc-table', {
	    attrs: {
	      "type": "Events"
	    }
	  }, [_h('div', [_h('p', ["input"]), " ", _h('p', ["(", _h('code', ["Boolean"]), ")"]), " ", _h('p', ["Return if the dropdown is shown."])])]), " ", _h('h2', ["Usage"]), " ", _h('p', ["Just like the examples. With slots you can use it as the ", _h('a', {
	    attrs: {
	      "target": "_blank",
	      "href": "http://getbootstrap.com/javascript/#dropdowns"
	    }
	  }, ["original Bootstrap way"]), "."])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9033d536", module.exports)
	  }
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(181)
	
	/* script */
	__vue_exports__ = __webpack_require__(183)
	
	/* template */
	var __vue_template__ = __webpack_require__(200)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/formGroupDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2ea6b9cd", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2ea6b9cd", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] formGroupDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2ea6b9cd!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formGroupDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2ea6b9cd!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formGroupDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}\n", "", {"version":3,"sources":["/./docs/example/formGroupDocs.vue?8d81623a"],"names":[],"mappings":";AAmHA;EACA,kBAAA;CACA","file":"formGroupDocs.vue","sourcesContent":["<template>\n  <doc-section id=\"form-group\" name=\"***Form Group\">\n    <p>This is not a style component, is just a global validation manager.</p>\n    <p>If you need to evaluate if a group of elements are all valids, you can handle easier with this component.</p>\n    <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>\n    <div class=\"bs-example\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>Valid user data : {{valid.user}}</pre></p>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>Valid direction : {{valid.direction}}</pre></p>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>All valid : {{valid.all}}</pre></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <form-group @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <tabs :active=\"active\">\n              <tab header=\"User\">\n                <form-group @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\n                  <bs-input label=\"User Name\" required></bs-input>\n                  <bs-input label=\"Email\" type=\"email\" required></bs-input>\n                </form-group>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n              </tab>\n              <tab header=\"Direction\" :disabled=\"!valid.user\">\n                <form-group @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Continent</label>\n                    <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                  </div>\n                  <bs-input label=\"City\" type=\"text\" required></bs-input>\n                </form-group>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n              </tab>\n            </tabs>\n          </div>\n        </form-group>\n      </div>\n    </div>\n    <doc-code language=\"markup\">\n        &lt;form-group @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\n          &lt;div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            &lt;tabs :active=\"active\">\n              &lt;tab header=\"User\">\n                &lt;form-group @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\n                  &lt;bs-input label=\"User Name\" required>&lt;/bs-input>\n                  &lt;bs-input label=\"Email\" type=\"email\" required>&lt;/bs-input>\n                &lt;/form-group>\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue&lt;/button>\n              &lt;/tab>\n              &lt;tab header=\"Direction\" :disabled=\"!valid.user\">\n                &lt;form-group @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\n                  &lt;div class=\"form-group\">\n                    &lt;label class=\"control-label\">Continent&lt;/label>\n                    &lt;v-select required justified :options=\"['America','Europe']\" clear-button>&lt;/v-select>\n                  &lt;/div>\n                  &lt;bs-input label=\"City\" type=\"text\" required>&lt;/bs-input>\n                &lt;/form-group>\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!&lt;/button>\n              &lt;/tab>\n            &lt;/tabs>\n          &lt;/div>\n        &lt;/form-group>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>valid</p>\n        <p><code>Boolean</code></p>\n        <p></p>\n        <p>Return if all the internal form elements (<code>select</code>, <code>input</code>) are valids.</p>\n      </div>\n    </doc-table>\n  </doc-section>\n</template>\n\n<script>\nimport docSection from './utils/docSection.vue'\nimport docTable from './utils/docTable.js'\nimport docCode from './utils/docCode.js'\nimport formGroup from 'src/FormGroup.vue'\nimport bsInput from 'src/Input.vue'\nimport tab from 'src/Tab.vue'\nimport tabs from 'src/Tabs.vue'\nimport vSelect from 'src/Select.vue'\n\nexport default {\n  components: {\n    docSection,\n    docTable,\n    docCode,\n    formGroup,\n    bsInput,\n    tab,\n    tabs,\n    vSelect\n  },\n  data () {\n    return {\n      active: 0,\n      valid: {}\n    }\n  },\n  methods: {\n    show (value) {\n      return value instanceof Array ? value.join(', ') : value\n    }\n  }\n}\n</script>\n\n<style>\n.checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _FormGroup = __webpack_require__(184);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _Input = __webpack_require__(187);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Tab = __webpack_require__(192);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(195);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
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
	//
	//
	//
	//
	//
	//
	//
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
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    formGroup: _FormGroup2.default,
	    bsInput: _Input2.default,
	    tab: _Tab2.default,
	    tabs: _Tabs2.default,
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

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(185)
	
	/* template */
	var __vue_template__ = __webpack_require__(186)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/FormGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47e158a0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47e158a0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FormGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(43);
	
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
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('span', [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47e158a0", module.exports)
	  }
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(188)
	
	/* script */
	__vue_exports__ = __webpack_require__(190)
	
	/* template */
	var __vue_template__ = __webpack_require__(191)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-47f2a342"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47f2a342", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47f2a342", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Input.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(189);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47f2a342&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47f2a342&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-group[data-v-47f2a342] {\n  position: relative;\n}\nlabel~.close[data-v-47f2a342] {\n  top: 25px;\n}\n.input-group>.icon[data-v-47f2a342] {\n  position: relative;\n  display: table-cell;\n  width:0;\n  z-index: 3;\n}\n.close[data-v-47f2a342] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.has-feedback .close[data-v-47f2a342] {\n  right: 20px;\n}\n", "", {"version":3,"sources":["/./src/Input.vue?74e3f42f"],"names":[],"mappings":";AAoQA;EACA,mBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,QAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA","file":"Input.vue","sourcesContent":["<template>\n  <div class=\"form-group\" :class=\"{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}\">\n    <slot name=\"label\"><label v-if=\"label\" class=\"control-label\" @click=\"focus\">{{label}}</label></slot>\n    <div v-if=\"$slots.before||$slots.after\" class=\"input-group\">\n      <slot name=\"before\"></slot>\n      <textarea :is=\"type=='textarea'?type:'input'\" class=\"form-control\" ref=\"input\"\n        :cols=\"cols\"\n        :disabled=\"disabled\"\n        :list=\"id_datalist\"\n        :max=\"attr(max)\"\n        :maxlength=\"maxlength\"\n        :min=\"attr(min)\"\n        :name=\"name\"\n        :placeholder=\"placeholder\"\n        :readonly=\"readonly\"\n        :required=\"required\"\n        :rows=\"rows\"\n        :step=\"step\"\n        :title=\"attr(title)\"\n        :type=\"type=='textarea'?null:type\"\n        v-model=\"val\"\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\n      ></textarea>\n      <div v-if=\"clearButton && value\" :class=\"{icon:icon}\">\n        <span class=\"close\" @click=\"value = ''\">&times;</span>\n      </div>\n      <div v-if=\"icon\" class=\"icon\">\n        <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\n      </div>\n      <slot name=\"after\"></slot>\n    </div>\n    <template v-else>\n      <textarea :is=\"type=='textarea'?type:'input'\" class=\"form-control\" ref=\"input\"\n        :cols=\"cols\"\n        :disabled=\"disabled\"\n        :list=\"id_datalist\"\n        :max=\"attr(max)\"\n        :maxlength=\"maxlength\"\n        :min=\"attr(min)\"\n        :name=\"name\"\n        :placeholder=\"placeholder\"\n        :readonly=\"readonly\"\n        :required=\"required\"\n        :rows=\"rows\"\n        :step=\"step\"\n        :title=\"attr(title)\"\n        :type=\"type=='textarea'?null:type\"\n        v-model=\"val\"\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\n      ></textarea>\n      <span v-if=\"clearButton && val\" class=\"close\" @click=\"val = ''\">&times;</span>\n      <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\n    </template>\n    <datalist v-if=\"id_datalist\" :id=\"id_datalist\">\n      <option v-for=\"opc in options\" :value=\"opc\"></option>\n    </datalist>\n    <div v-if=\"showHelp\" class=\"help-block\" @click=\"focus\">{{help}}</div>\n    <div v-if=\"showError\" class=\"help-block with-errors\" @click=\"focus\">{{errorText}}</div>\n  </div>\n</template>\n\n<script>\nimport {coerce, delayer, translations} from './utils/utils.js'\nimport $ from './utils/NodeList.js'\n\nvar DELAY = 300\n\nexport default {\n  props: {\n    clearButton: {type: Boolean, default: false},\n    cols: {type: Number, default: null},\n    datalist: {type: Array, default: null},\n    disabled: {type: Boolean, default: false},\n    enterSubmit: {type: Boolean, default: false},\n    error: {type: String, default: null},\n    help: {type: String, default: null},\n    hideHelp: {type: Boolean, default: true},\n    icon: {type: Boolean, default: false},\n    label: {type: String, default: null},\n    lang: {type: String, default: navigator.language},\n    mask: null,\n    maskDelay: {type: Number, default: 100},\n    match: {type: String, default: null},\n    max: {type: String, default: null},\n    maxlength: {type: Number, default: null},\n    min: {type: String, default: null},\n    minlength: {type: Number, default: 0},\n    name: {type: String, default: null},\n    pattern: {default: null},\n    placeholder: {type: String, default: null},\n    readonly: {type: Boolean, default: false},\n    required: {type: Boolean, default: false},\n    rows: {type: Number, default: 3},\n    step: {type: Number, default: null},\n    type: {type: String, default: 'text'},\n    url: {type: String, default: null},\n    urlMap: {type: Function, default: null},\n    validationDelay: {type: Number, default: 250},\n    value: {default: null}\n  },\n  data () {\n    var val = this.value\n    return {\n      options: this.datalist,\n      val,\n      valid: null,\n      timeout: null\n    }\n  },\n  computed: {\n    canValidate () { return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null) },\n    errorText () {\n      let value = this.value\n      let error = [this.error]\n      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')\n      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')\n      return error.join(' ')\n    },\n    id_datalist () {\n      if (this.type !== 'textarea' && this.datalist instanceof Array) {\n        if (!this._id_datalist) {\n          if (!this.$root.id_datalist) { this.$root.id_datalist = 0 }\n          this._id_datalist = 'input-datalist' + this.$root.id_datalist++\n        }\n        return this._id_datalist\n      }\n      return null\n    },\n    input () { return this.$refs.input },\n    nativeValidate () { return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },\n    regex () { return coerce.pattern(this.pattern) },\n    showError () { return this.error && this.valid === false },\n    showHelp () { return this.help && (!this.showError || !this.hideHelp) },\n    text () { return translations(this.lang) },\n    title () { return this.errorText || this.help || '' }\n  },\n  watch: {\n    datalist (val, old) {\n      if (val !== old && val instanceof Array) { this.options = val }\n    },\n    match (val) { this.eval() },\n    options (val, old) {\n      if (val !== old) this.$emit('options', val)\n    },\n    url (val) {\n      this._url()\n    },\n    val (val, old) {\n      this.$emit('input', val)\n      if (val !== old) {\n        if (this.mask instanceof Function) {\n          val = this.mask(val || '')\n          if (this.val !== val) {\n            if (this._timeout.mask) clearTimeout(this._timeout.mask)\n            this._timeout.mask = setTimeout(() => {\n              this.val = val\n            }, isNaN(this.maskDelay) ? 0 : this.maskDelay)\n          }\n        }\n        this.eval()\n      }\n    },\n    valid (val, old) {\n      this.$emit('isvalid', val)\n      this.$emit(!val ? 'invalid' : 'valid')\n      if (this._parent) this._parent.validate()\n    },\n    value (val) {\n      if (this.val !== val) { this.val = val }\n    }\n  },\n  methods: {\n    attr (value) {\n      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value\n    },\n    emit (e) {\n      this.$emit(e.type, e)\n      if (e.type === 'blur' && this.canValidate) { this.valid = this.validate() }\n    },\n    eval () {\n      if (this._timeout.eval) clearTimeout(this._timeout.eval)\n      if (!this.canValidate) {\n        this.valid = true\n      } else {\n        this._timeout.eval = setTimeout(() => {\n          this.valid = this.validate()\n          this._timeout.eval = null\n        }, this.validationDelay)\n      }\n    },\n    focus () { this.input.focus() },\n    submit () {\n      if (this.$parent._formValidator) {\n        return this.$parent.validate()\n      }\n      if (this.input.form) {\n        const invalids = $('.form-group.validate:not(.has-success)', this.input.form)\n        if (invalids.length) {\n          invalids.find('input,textarea,select')[0].focus()\n        } else {\n          this.input.form.submit()\n        }\n      }\n    },\n    validate () {\n      if (!this.canValidate) { return true }\n      let value = (this.val || '').trim()\n      if (!value) { return !this.required }\n      if (this.match !== null) { return this.match === value }\n      if (value.length < this.minlength) { return false }\n      if (this.nativeValidate && !this.input.checkValidity()) { return false }\n      if (this.regex) {\n        if (!(this.regex instanceof Function ? this.regex(this.value) : this.regex.test(this.value))) { return false }\n      }\n      return true\n    }\n  },\n  created () {\n    this._input = true\n    this._timeout = {}\n    let parent = this.$parent\n    while (parent && !parent._formValidator) { parent = parent.$parent }\n    if (parent && parent._formValidator) {\n      this._parent = parent\n      this._parent && this._parent.children.push(this)\n    }\n    this._url = delayer(function () {\n      if (!this.url || !this.$http || this._loading) { return }\n      this._loading = true\n      this.$http.get(this.url).then(response => {\n        var data = response.data instanceof Array ? response.data : []\n        try { data = JSON.parse(data) } catch (e) {}\n        if (this.urlMap) { data = data.map(this.urlMap) }\n        this.options = data\n        this.loading = false\n      }, response => {\n        this.loading = false\n      })\n    }, DELAY)\n    if (this.url) this._url()\n  },\n  mounted () {\n    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {\n    //   if (this.canValidate) { this.valid = this.validate() }\n    //   this.$emit('blur', e)\n    // })\n  },\n  beforeDestroy () {\n    // $(this.input).off()\n    if (this._parent) {\n      var index = this._parent.children.indexOf(this)\n      this._parent.children.splice(index, 1)\n    }\n  }\n}\n</script>\n\n<style scoped>\n.form-group {\n  position: relative;\n}\nlabel~.close {\n  top: 25px;\n}\n.input-group>.icon {\n  position: relative;\n  display: table-cell;\n  width:0;\n  z-index: 3;\n}\n.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.has-feedback .close {\n  right: 20px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
	var _NodeList = __webpack_require__(43);
	
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
	      this.$emit(e.type, e);
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
	      this._parent = parent;
	      this._parent && this._parent.children.push(this);
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "form-group",
	    class: {
	      validate: _vm.canValidate, 'has-feedback': _vm.icon, 'has-error': _vm.canValidate && _vm.valid === false, 'has-success': _vm.canValidate && _vm.valid
	    }
	  }, [_vm._t("label", [(_vm.label) ? _h('label', {
	    staticClass: "control-label",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._s(_vm.label)]) : _vm._e()]), " ", (_vm.$slots.before || _vm.$slots.after) ? _h('div', {
	    staticClass: "input-group"
	  }, [_vm._t("before"), " ", _h(_vm.type == 'textarea' ? _vm.type : 'input', {
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
	      "value": _vm._s(_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }), " ", (_vm.clearButton && _vm.value) ? _h('div', {
	    class: {
	      icon: _vm.icon
	    }
	  }, [_h('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.value = ''
	      }
	    }
	  }, ["×"])]) : _vm._e(), " ", (_vm.icon) ? _h('div', {
	    staticClass: "icon"
	  }, [(_vm.icon && _vm.valid !== null) ? _h('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()]) : _vm._e(), " ", _vm._t("after")]) : [_h(_vm.type == 'textarea' ? _vm.type : 'input', {
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
	      "value": _vm._s(_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }), " ", (_vm.clearButton && _vm.val) ? _h('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.val = ''
	      }
	    }
	  }, ["×"]) : _vm._e(), " ", (_vm.icon && _vm.valid !== null) ? _h('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()], " ", " ", (_vm.id_datalist) ? _h('datalist', {
	    attrs: {
	      "id": _vm.id_datalist
	    }
	  }, [_vm._l((_vm.options), function(opc) {
	    return _h('option', {
	      domProps: {
	        "value": opc
	      }
	    })
	  })]) : _vm._e(), " ", (_vm.showHelp) ? _h('div', {
	    staticClass: "help-block",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._s(_vm.help)]) : _vm._e(), " ", (_vm.showError) ? _h('div', {
	    staticClass: "help-block with-errors",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._s(_vm.errorText)]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47f2a342", module.exports)
	  }
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(193)
	
	/* template */
	var __vue_template__ = __webpack_require__(194)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ff6b582c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ff6b582c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 193 */
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
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    ref: "panel",
	    class: ['tab-pane', {
	      'active fade': _vm.active,
	      'in': _vm.fadein
	    }],
	    attrs: {
	      "role": "tabpanel"
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ff6b582c", module.exports)
	  }
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(196)
	
	/* script */
	__vue_exports__ = __webpack_require__(198)
	
	/* template */
	var __vue_template__ = __webpack_require__(199)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Tabs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e6a86b0e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e6a86b0e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e6a86b0e!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e6a86b0e!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n[tabs] > .tab-content {\n  margin: 15px 0;\n}\n", "", {"version":3,"sources":["/./src/Tabs.vue?1a971f86"],"names":[],"mappings":";AA0EA;EACA,eAAA;CACA","file":"Tabs.vue","sourcesContent":["<template>\n  <div tabs>\n    <ul :class=\"navStyleClass\" role=\"tablist\">\n      <template v-for=\"header in headers\">\n        <li v-if=\"header._isTab\" :class=\"{active:header.active, disabled:header.disabled}\" @click.prevent=\"select(header)\">\n          <slot name=\"header\"><a href=\"#\" v-html=\"header.header\"></a></slot>\n        </li>\n        <dropdown v-if=\"header._isTabGroup\" :text=\"header.header\" :class=\"{active:header.active}\" :disabled=\"header.disabled\">\n          <li v-for=\"tab in header.tabs\" :class=\"{disabled:tab.disabled}\"><a href=\"#\" @click.prevent=\"select(tab)\">{{tab.header}}</a></li>\n        </dropdown>\n      </template>\n    </ul>\n    <div class=\"tab-content\"><slot></slot></div>\n  </div>\n</template>\n\n<script>\nimport {coerce} from './utils/utils.js'\nimport dropdown from './Dropdown.vue'\n\nexport default {\n  components: {\n    dropdown\n  },\n  props: {\n    // effect: {type: String, default: 'fadein'},\n    justified: false,\n    navStyle: {type: String, default: null},\n    value: {type: Number, default: 0}\n  },\n  data () {\n    var index = this.value || 0\n    return {\n      index,\n      headers: [],\n      tabs: []\n    }\n  },\n  watch: {\n    index (val) {\n      this.$emit('active', val)\n      this.$emit('input', val)\n    },\n    value (val) {\n      this.index = val\n    }\n  },\n  computed: {\n    navStyleClass () {\n      return [\n        'nav',\n        ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs',\n        {\n          'nav-justified': coerce.boolean(this.justified),\n          'nav-pills': this.navStyle === 'stacked'\n        }\n      ]\n    },\n    show () { return this.tabs[this.index] || this.tabs[0] }\n  },\n  methods: {\n    select (tab) {\n      if (!tab.disabled) {\n        this.index = this.tabs.indexOf(tab)\n      }\n    }\n  },\n  created () {\n    this._isTabs = true\n  }\n}\n</script>\n\n<style>\n[tabs] > .tab-content {\n  margin: 15px 0;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
	var _Dropdown = __webpack_require__(176);
	
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
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "tabs": ""
	    }
	  }, [_h('ul', {
	    class: _vm.navStyleClass,
	    attrs: {
	      "role": "tablist"
	    }
	  }, [_vm._l((_vm.headers), function(header) {
	    return [(header._isTab) ? _h('li', {
	      class: {
	        active: header.active, disabled: header.disabled
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.select(header)
	        }
	      }
	    }, [_vm._t("header", [_h('a', {
	      attrs: {
	        "href": "#"
	      },
	      domProps: {
	        "innerHTML": _vm._s(header.header)
	      }
	    })])]) : _vm._e(), " ", (header._isTabGroup) ? _h('dropdown', {
	      class: {
	        active: header.active
	      },
	      attrs: {
	        "text": header.header,
	        "disabled": header.disabled
	      }
	    }, [_vm._l((header.tabs), function(tab) {
	      return _h('li', {
	        class: {
	          disabled: tab.disabled
	        }
	      }, [_h('a', {
	        attrs: {
	          "href": "#"
	        },
	        on: {
	          "click": function($event) {
	            $event.preventDefault();
	            _vm.select(tab)
	          }
	        }
	      }, [_vm._s(tab.header)])])
	    })]) : _vm._e()]
	  })]), " ", _h('div', {
	    staticClass: "tab-content"
	  }, [_vm._t("default")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e6a86b0e", module.exports)
	  }
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "form-group",
	      "name": "***Form Group"
	    }
	  }, [_h('p', ["This is not a style component, is just a global validation manager."]), " ", _h('p', ["If you need to evaluate if a group of elements are all valids, you can handle easier with this component."]), " ", _h('p', ["In this example, the buttons and tabs are disabled while the inner elements are empty."]), " ", _h('div', {
	    staticClass: "bs-example"
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid user data : " + _vm._s(_vm.valid.user)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid direction : " + _vm._s(_vm.valid.direction)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["All valid : " + _vm._s(_vm.valid.all)])])])]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('form-group', {
	    on: {
	      "valid": function($event) {
	        _vm.valid.all = true
	      },
	      "invalid": function($event) {
	        _vm.valid.all = false
	      }
	    }
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
	  }, [_h('tabs', {
	    attrs: {
	      "active": _vm.active
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "User"
	    }
	  }, [_h('form-group', {
	    on: {
	      "valid": function($event) {
	        _vm.valid.user = true
	      },
	      "invalid": function($event) {
	        _vm.valid.user = false
	      }
	    }
	  }, [_h('bs-input', {
	    attrs: {
	      "label": "User Name",
	      "required": ""
	    }
	  }), " ", _h('bs-input', {
	    attrs: {
	      "label": "Email",
	      "type": "email",
	      "required": ""
	    }
	  })]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button",
	      "disabled": !_vm.valid.user
	    },
	    on: {
	      "click": function($event) {
	        _vm.active = 1
	      }
	    }
	  }, ["Continue"])]), " ", _h('tab', {
	    attrs: {
	      "header": "Direction",
	      "disabled": !_vm.valid.user
	    }
	  }, [_h('form-group', {
	    on: {
	      "valid": function($event) {
	        _vm.valid.direction = true
	      },
	      "invalid": function($event) {
	        _vm.valid.direction = false
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-group"
	  }, [_h('label', {
	    staticClass: "control-label"
	  }, ["Continent"]), " ", _h('v-select', {
	    attrs: {
	      "required": "",
	      "justified": "",
	      "options": ['America', 'Europe'],
	      "clear-button": ""
	    }
	  })]), " ", _h('bs-input', {
	    attrs: {
	      "label": "City",
	      "type": "text",
	      "required": ""
	    }
	  })]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button",
	      "disabled": !_vm.valid.all
	    }
	  }, ["Done!!"])])])])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n      <form-group @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <tabs :active=\"active\">\n            <tab header=\"User\">\n              <form-group @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\n                <bs-input label=\"User Name\" required></bs-input>\n                <bs-input label=\"Email\" type=\"email\" required></bs-input>\n              </form-group>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n            </tab>\n            <tab header=\"Direction\" :disabled=\"!valid.user\">\n              <form-group @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Continent</label>\n                  <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                </div>\n                <bs-input label=\"City\" type=\"text\" required></bs-input>\n              </form-group>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n            </tab>\n          </tabs>\n        </div>\n      </form-group>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["valid"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["Return if all the internal form elements (", _h('code', ["select"]), ", ", _h('code', ["input"]), ") are valids."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2ea6b9cd", module.exports)
	  }
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(202)
	
	/* script */
	__vue_exports__ = __webpack_require__(204)
	
	/* template */
	var __vue_template__ = __webpack_require__(208)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/formValidatorDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d1eb33c0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d1eb33c0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] formValidatorDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(203);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d1eb33c0!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formValidatorDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d1eb33c0!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formValidatorDocs.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}\n", "", {"version":3,"sources":["/./docs/example/formValidatorDocs.vue?edd9b4c6"],"names":[],"mappings":";AAsIA;EACA,kBAAA;CACA","file":"formValidatorDocs.vue","sourcesContent":["<template>\n  <doc-section id=\"form-validator\" name=\"***Form Validator\">\n    <p>This is not a style component, is just a global validation manager.</p>\n    <p>If you need to evaluate if a group of elements are all valids, you can handle easier with this component.</p>\n    <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>\n    <div class=\"bs-example\">\n      <h4>Basic Usage:</h4>\n      <doc-code>\n        &lt;!-- Using v-model -->\n        &lt;!-- The starting variable value will be ignored. -->\n        &lt;form-validator v-model=\"valid\">\n          ...\n        &lt;/form-validator>\n        &lt;!-- Using event isvalid -->\n          &lt;form-validator @isvalid=\"valid = arguments[0]\">...&lt;/form-validator>\n          &lt;!-- or -->\n          &lt;form-validator @isvalid=\"validMethod\">\n            &lt;!-- the method receive true or false in the first argument -->\n          &lt;/form-validator>\n        &lt;!-- Using events valid and/or invalid -->\n        &lt;form-validator @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\n            ...\n        &lt;/form-validator>\n      </doc-code>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>Valid user data : {{valid.user}}</pre></p>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>Valid direction : {{valid.direction}}</pre></p>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n          <p><pre>All valid : {{valid.all}}</pre></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <form-validator v-model=\"valid.all\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <tabs v-model=\"active\">\n              <tab header=\"User\">\n                <form-validator v-model=\"valid.user\">\n                  <bs-input label=\"User Name\" required></bs-input>\n                  <bs-input label=\"Email\" type=\"email\" required></bs-input>\n                </form-validator>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n              </tab>\n              <tab header=\"Direction\" :disabled=\"!valid.user\">\n                <form-validator v-model=\"valid.direction\">\n                  <div class=\"form-validator\">\n                    <label class=\"control-label\">Continent</label>\n                    <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                  </div>\n                  <bs-input label=\"City\" type=\"text\" required></bs-input>\n                </form-validator>\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n              </tab>\n            </tabs>\n          </div>\n        </form-validator>\n      </div>\n    </div>\n    <doc-code language=\"markup\">\n        &lt;form-validator v-model=\"valid.all\">\n          &lt;div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            &lt;tabs v-model=\"active\">\n              &lt;tab header=\"User\">\n                &lt;form-validator @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\n                  &lt;bs-input label=\"User Name\" required>&lt;/bs-input>\n                  &lt;bs-input label=\"Email\" type=\"email\" required>&lt;/bs-input>\n                &lt;/form-validator>\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue&lt;/button>\n              &lt;/tab>\n              &lt;tab header=\"Direction\" :disabled=\"!valid.user\">\n                &lt;form-validator @isvalid=\"valid.direction = arguments[0]\">\n                  &lt;div class=\"form-validator\">\n                    &lt;label class=\"control-label\">Continent&lt;/label>\n                    &lt;v-select required justified :options=\"['America','Europe']\" clear-button>&lt;/v-select>\n                  &lt;/div>\n                  &lt;bs-input label=\"City\" type=\"text\" required>&lt;/bs-input>\n                &lt;/form-validator>\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!&lt;/button>\n              &lt;/tab>\n            &lt;/tabs>\n          &lt;/div>\n        &lt;/form-validator>\n    </doc-code>\n    <doc-table>\n      <div>\n        <p>valid</p>\n        <p><code>Boolean</code></p>\n        <p></p>\n        <p>Return if all the internal form elements (<code>select</code>, <code>input</code>) are valids.</p>\n      </div>\n    </doc-table>\n  </doc-section>\n</template>\n\n<script>\nimport docSection from './utils/docSection.vue'\nimport docTable from './utils/docTable.js'\nimport docCode from './utils/docCode.js'\nimport formValidator from 'src/FormValidator.vue'\nimport bsInput from 'src/Input.vue'\nimport tab from 'src/Tab.vue'\nimport tabs from 'src/Tabs.vue'\nimport vSelect from 'src/Select.vue'\n\nexport default {\n  components: {\n    docSection,\n    docTable,\n    docCode,\n    formValidator,\n    bsInput,\n    tab,\n    tabs,\n    vSelect\n  },\n  data () {\n    var valid = {}; ['all', 'direction', 'user'].forEach(el => { valid[el] = null })\n    return {\n      active: 0,\n      valid\n    }\n  },\n  methods: {\n    show (value) {\n      return value instanceof Array ? value.join(', ') : value\n    }\n  }\n}\n</script>\n\n<style>\n.checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _FormValidator = __webpack_require__(205);
	
	var _FormValidator2 = _interopRequireDefault(_FormValidator);
	
	var _Input = __webpack_require__(187);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Tab = __webpack_require__(192);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(195);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    formValidator: _FormValidator2.default,
	    bsInput: _Input2.default,
	    tab: _Tab2.default,
	    tabs: _Tabs2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    var valid = {};['all', 'direction', 'user'].forEach(function (el) {
	      valid[el] = null;
	    });
	    return {
	      active: 0,
	      valid: valid
	    };
	  },
	
	  methods: {
	    show: function show(value) {
	      return value instanceof Array ? value.join(', ') : value;
	    }
	  }
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(206)
	
	/* template */
	var __vue_template__ = __webpack_require__(207)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/FormValidator.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-680b1283", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-680b1283", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FormValidator.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(43);
	
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
	      var invalid = !this.children.some(function (el) {
	        return el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
	      });
	      this.valid = !invalid;
	      return !invalid;
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
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('span', [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-680b1283", module.exports)
	  }
	}

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "form-validator",
	      "name": "***Form Validator"
	    }
	  }, [_h('p', ["This is not a style component, is just a global validation manager."]), " ", _h('p', ["If you need to evaluate if a group of elements are all valids, you can handle easier with this component."]), " ", _h('p', ["In this example, the buttons and tabs are disabled while the inner elements are empty."]), " ", _h('div', {
	    staticClass: "bs-example"
	  }, [_h('h4', ["Basic Usage:"]), " ", _h('doc-code', ["\n      <!-- Using v-model -->\n      <!-- The starting variable value will be ignored. -->\n      <form-validator v-model=\"valid\">\n        ...\n      </form-validator>\n      <!-- Using event isvalid -->\n        <form-validator @isvalid=\"valid = arguments[0]\">...</form-validator>\n        <!-- or -->\n        <form-validator @isvalid=\"validMethod\">\n          <!-- the method receive true or false in the first argument -->\n        </form-validator>\n      <!-- Using events valid and/or invalid -->\n      <form-validator @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\n          ...\n      </form-validator>\n    "]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid user data : " + _vm._s(_vm.valid.user)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid direction : " + _vm._s(_vm.valid.direction)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["All valid : " + _vm._s(_vm.valid.all)])])])]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('form-validator', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.valid.all),
	      expression: "valid.all"
	    }],
	    domProps: {
	      "value": (_vm.valid.all)
	    },
	    on: {
	      "input": function($event) {
	        _vm.valid.all = $event
	      }
	    }
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
	  }, [_h('tabs', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.active),
	      expression: "active"
	    }],
	    domProps: {
	      "value": (_vm.active)
	    },
	    on: {
	      "input": function($event) {
	        _vm.active = $event
	      }
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "User"
	    }
	  }, [_h('form-validator', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.valid.user),
	      expression: "valid.user"
	    }],
	    domProps: {
	      "value": (_vm.valid.user)
	    },
	    on: {
	      "input": function($event) {
	        _vm.valid.user = $event
	      }
	    }
	  }, [_h('bs-input', {
	    attrs: {
	      "label": "User Name",
	      "required": ""
	    }
	  }), " ", _h('bs-input', {
	    attrs: {
	      "label": "Email",
	      "type": "email",
	      "required": ""
	    }
	  })]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button",
	      "disabled": !_vm.valid.user
	    },
	    on: {
	      "click": function($event) {
	        _vm.active = 1
	      }
	    }
	  }, ["Continue"])]), " ", _h('tab', {
	    attrs: {
	      "header": "Direction",
	      "disabled": !_vm.valid.user
	    }
	  }, [_h('form-validator', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.valid.direction),
	      expression: "valid.direction"
	    }],
	    domProps: {
	      "value": (_vm.valid.direction)
	    },
	    on: {
	      "input": function($event) {
	        _vm.valid.direction = $event
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-validator"
	  }, [_h('label', {
	    staticClass: "control-label"
	  }, ["Continent"]), " ", _h('v-select', {
	    attrs: {
	      "required": "",
	      "justified": "",
	      "options": ['America', 'Europe'],
	      "clear-button": ""
	    }
	  })]), " ", _h('bs-input', {
	    attrs: {
	      "label": "City",
	      "type": "text",
	      "required": ""
	    }
	  })]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button",
	      "disabled": !_vm.valid.all
	    }
	  }, ["Done!!"])])])])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n      <form-validator v-model=\"valid.all\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <tabs v-model=\"active\">\n            <tab header=\"User\">\n              <form-validator @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\n                <bs-input label=\"User Name\" required></bs-input>\n                <bs-input label=\"Email\" type=\"email\" required></bs-input>\n              </form-validator>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n            </tab>\n            <tab header=\"Direction\" :disabled=\"!valid.user\">\n              <form-validator @isvalid=\"valid.direction = arguments[0]\">\n                <div class=\"form-validator\">\n                  <label class=\"control-label\">Continent</label>\n                  <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                </div>\n                <bs-input label=\"City\" type=\"text\" required></bs-input>\n              </form-validator>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n            </tab>\n          </tabs>\n        </div>\n      </form-validator>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["valid"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["Return if all the internal form elements (", _h('code', ["select"]), ", ", _h('code', ["input"]), ") are valids."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d1eb33c0", module.exports)
	  }
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(210)
	
	/* template */
	var __vue_template__ = __webpack_require__(211)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/gettingStarted.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-00875356", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-00875356", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] gettingStarted.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    docCode: _docCode2.default,
	    docSection: _docSection2.default
	  }
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('doc-section', {
	    attrs: {
	      "id": "getting-started",
	      "name": "Getting started"
	    }
	  }, [_h('div', {
	    staticClass: "bs-callout bs-callout-success"
	  }, [_h('h4', ["About this project"]), " ", _h('p', ["\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n        The only required dependencies are:\n      "]), " ", _h('ul', [_h('li', [_h('a', {
	    attrs: {
	      "href": "http://vuejs.org/"
	    }
	  }, ["Vue.js"]), "\n          (required ^2.x.x, test with 2.0.5)."]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "http://getbootstrap.com/"
	    }
	  }, ["Bootstrap CSS"]), "\n          (required 3.x.x, test with 3.3.6).\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n        "])])]), " ", _h('h4', ["CommonJS"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      $ npm install vue-strap\n\n      var alert = require('vue-strap/src/alert');\n      // or\n      var alert = require('vue-strap').alert;\n\n      new Vue({\n        components: {\n          alert: alert\n        }\n      })\n    "]), " ", _h('h4', ["ES6"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      $ npm install vue-strap\n\n      import alert from 'vue-strap/src/alert'\n      // or\n      import { alert } from 'vue-strap'\n\n      new Vue({\n        components: {\n          alert\n        }\n      })\n    "]), " ", _h('h4', ["AMD"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      $ bower install vue-strap\n\n      define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });\n    "]), " ", _h('h4', ["Browser globals"]), " ", _h('p', ["\n      The ", _h('code', ["dist"]), " folder contains ", _h('code', ["vue-strap.js"]), " and ", _h('code', ["vue-strap.min.js"]), " with\n      all components exported in the ", _h('code', ["window.VueStrap"]), " object. These bundles are also available on both the\n      Bower and NPM packages.\n    "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n      <v-select :options=\"options\"></v-select>\n\n      <script src=\"path/to/vue.js\"></script>\n      <script src=\"path/to/vue-strap.js\"></script>\n      <script>\n        new Vue({\n          components: {\n            vSelect: VueStrap.select\n          },\n          data: {\n            options: []\n          }\n        })\n      </script>\n    "]), " ", _h('h2', ["Translations (optional):"]), " ", _h('p', ["If you want to enable language support, you have to add:"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n      <script src=\"path/to/vue-strap-lang.js\"></script>\n    "]), " ", _h('h4', ["CommonJS"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      require('vue-strap/dist/vue-strap-lang.js')\n    "]), " ", _h('p', ["If not included what you need, you can add your own, without editing the source code of vue-strap."]), " ", _h('hr'), " ", _h('h2', ["Mobile detection (optional):"]), " ", _h('p', ["If you need to enable/disable options if is a mobile device you can add:"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n      <script src=\"path/to/isMobileBrowser.js\"></script>\n    "]), " ", _h('h4', ["CommonJS"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      require('vue-strap/dist/isMobileBrowser.js')\n    "]), " ", _h('p', ["Then in javascript you can check it just doing:"]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      if (navigator.isMobile) {\n        //do something if is mobile\n      }\n      if ('isMobile' in navigator) {\n        //do things only if the plugin was loaded\n\n        if (!navigator.isMobile) {\n          //do something if is not a mobile\n        }\n      }\n    "]), " ", _h('p', ["Based on ", _h('a', {
	    attrs: {
	      "href": "http://detectmobilebrowsers.com/"
	    }
	  }, ["Detect Mobile Browsers"]), "."])]), " ", _h('doc-section', {
	    attrs: {
	      "id": "handle-events",
	      "name": "Event Handling"
	    }
	  }, [_h('p', ["The events return values as arguments, you have 2 ways to handle them:"]), " ", _h('doc-code', ["\n      <!-- using expression -->\n      <component @event=\"arg0 = arguments[0]\"></component>\n      <!-- using method -->\n      <component @event=\"callable\"></component>\n    "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      methods: {\n        callable: function (arg0, arg1, ...) {\n          // defined arguments\n          this.arg0 = arg0\n          // or global arguments array\n          this.arg0 = arguments[0]\n        }\n      }\n    "]), " ", _h('p', ["The number of arguments depend on the event."])]), " ", _h('doc-section', {
	    attrs: {
	      "id": "v-model",
	      "name": "v-model"
	    }
	  }, [_h('p', ["According to the vue2 specifications, ", _h('code', ["twoWay"]), " binding is not supported anymore, except for ", _h('code', ["v-model"]), "."]), " ", _h('p', ["The ", _h('code', ["v-model"]), " directive in a component always link to ", _h('code', ["value"]), " attribute."]), " ", _h('p', ["Keep in mind that in vue2:"]), " ", _h('doc-code', ["\n      <!-- using v-model like this: -->\n      <component v-model=\"element\"></component>\n      <!-- is the same that: -->\n      <component :value=\"element\" @input=\"element = argument[0]\"></component>\n    "])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-00875356", module.exports)
	  }
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(213)
	
	/* template */
	var __vue_template__ = __webpack_require__(214)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/inputDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-91ebd408", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-91ebd408", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] inputDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Input = __webpack_require__(187);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ButtonGroup = __webpack_require__(140);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Dropdown = __webpack_require__(176);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    bsInput: _Input2.default,
	    ButtonGroup: _ButtonGroup2.default,
	    Checkbox: _Checkbox2.default,
	    Dropdown: _Dropdown2.default
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
	      fruits: ['apple', 'banana', 'cherry', 'coconut', 'grapefruit', 'lime', 'orange', 'strawberry', 'watermelon'],
	      input: null,
	      match: null
	    };
	  },
	
	  methods: {
	    mask: function mask(value) {
	      return value.toLowerCase().replace(/^[^a-z]+/, '').replace(/[^a-z0-9]/g, '');
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "input",
	      "name": "Input"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example text-left"
	  }, [_h('form', {
	    attrs: {
	      "action": ".",
	      "method": "get",
	      "accept-charset": "utf-8"
	    }
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-6"
	  }, [_h('bs-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.input),
	      expression: "input"
	    }],
	    attrs: {
	      "name": "username",
	      "disabled": _vm.check.disabled,
	      "error": _vm.check.error ? 'Insert user name' : null,
	      "help": "Only allows lowercase letters and numbers.",
	      "enter-submit": _vm.check.enterSubmit,
	      "icon": _vm.check.icon,
	      "label": _vm.check.label ? 'User Name' : null,
	      "mask": _vm.check.mask ? _vm.mask : null,
	      "minlength": _vm.check.minlength ? 5 : 0,
	      "pattern": "^[a-z][a-z0-9]+$",
	      "placeholder": _vm.check.placeholder ? 'Username can\'t start with a number.' : null,
	      "readonly": _vm.check.readonly,
	      "required": _vm.check.required,
	      "hide-help": _vm.check.hideHelp,
	      "clear-button": _vm.check.clearButton
	    },
	    domProps: {
	      "value": (_vm.input)
	    },
	    on: {
	      "input": function($event) {
	        _vm.input = $event
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-6"
	  }, [_h('bs-input', {
	    attrs: {
	      "name": "match",
	      "required": "",
	      "type": "password",
	      "match": _vm.input,
	      "icon": _vm.check.icon,
	      "enter-submit": _vm.check.enterSubmit,
	      "help": "Match the User Name"
	    }
	  }, [_h('label', {
	    slot: "label"
	  }, ["Match value"])])])]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('button-group', {
	    attrs: {
	      "type": "primary",
	      "buttons": false
	    }
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-6"
	  }, [_h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.label),
	      expression: "check.label"
	    }],
	    domProps: {
	      "value": (_vm.check.label)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.label = $event
	      }
	    }
	  }, ["Label"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.placeholder),
	      expression: "check.placeholder"
	    }],
	    domProps: {
	      "value": (_vm.check.placeholder)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.placeholder = $event
	      }
	    }
	  }, ["placeholder"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.hideHelp),
	      expression: "check.hideHelp"
	    }],
	    domProps: {
	      "value": (_vm.check.hideHelp)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.hideHelp = $event
	      }
	    }
	  }, ["hide help"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.disabled),
	      expression: "check.disabled"
	    }],
	    domProps: {
	      "value": (_vm.check.disabled)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.disabled = $event
	      }
	    }
	  }, ["disabled"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.error),
	      expression: "check.error"
	    }],
	    domProps: {
	      "value": (_vm.check.error)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.error = $event
	      }
	    }
	  }, ["error"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.icon),
	      expression: "check.icon"
	    }],
	    domProps: {
	      "value": (_vm.check.icon)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.icon = $event
	      }
	    }
	  }, ["icon"])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-6"
	  }, [_h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.mask),
	      expression: "check.mask"
	    }],
	    domProps: {
	      "value": (_vm.check.mask)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.mask = $event
	      }
	    }
	  }, ["mask"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.minlength),
	      expression: "check.minlength"
	    }],
	    domProps: {
	      "value": (_vm.check.minlength)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.minlength = $event
	      }
	    }
	  }, ["minlength=5"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.readonly),
	      expression: "check.readonly"
	    }],
	    domProps: {
	      "value": (_vm.check.readonly)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.readonly = $event
	      }
	    }
	  }, ["readonly"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.required),
	      expression: "check.required"
	    }],
	    domProps: {
	      "value": (_vm.check.required)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.required = $event
	      }
	    }
	  }, ["required"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.clearButton),
	      expression: "check.clearButton"
	    }],
	    domProps: {
	      "value": (_vm.check.clearButton)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.clearButton = $event
	      }
	    }
	  }, ["clear button"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check.enterSubmit),
	      expression: "check.enterSubmit"
	    }],
	    domProps: {
	      "value": (_vm.check.enterSubmit)
	    },
	    on: {
	      "input": function($event) {
	        _vm.check.enterSubmit = $event
	      }
	    }
	  }, ["enter submit"])])])])]), " ", _h('hr'), " ", _h('bs-input', {
	    attrs: {
	      "label": "Input with slots",
	      "type": "text",
	      "required": "",
	      "icon": "",
	      "clear-button": ""
	    }
	  }, [_h('span', {
	    staticClass: "input-group-addon",
	    slot: "before"
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-user"
	  })]), " ", _h('span', {
	    staticClass: "input-group-addon",
	    slot: "after"
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-question-sign"
	  })])]), " ", _h('bs-input', {
	    attrs: {
	      "name": "textarea",
	      "label": "Textarea",
	      "type": "textarea",
	      "icon": _vm.check.icon,
	      "enter-submit": _vm.check.enterSubmit
	    },
	    on: {
	      "focus": function($event) {
	        _vm.event = 'focused'
	      },
	      "blur": function($event) {
	        _vm.event = 'blured'
	      }
	    }
	  }), " ", _h('pre', [" Test event on textarea: " + _vm._s(_vm.event)])]), " ", _h('doc-code', ["\n      <bs-input v-model=\"input\"\n        label=\"Username\"\n        help=\"Only allows lowercase letters and numbers.\"\n        error=\"Insert username\"\n        placeholder=\"Username can't start with a number.\"\n        pattern=\"^[a-z][a-z0-9]+$\"\n        :mask=\"mask\"\n        minlength=\"5\"\n        readonly\n        required\n        icon\n      ></bs-input>\n      <bs-input required label=\"Match value\" type=\"password\"\n        :match=\"input\"\n      ></bs-input>\n      <bs-input label=\"Textarea\" type=\"textarea\"\n        @focus=\"event = 'focused'\"\n        @blur=\"event = 'blured'\"\n      ></bs-input>\n    "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      mask: function (value) {\n        // change to lowercase, remove up to the first letter,\n        // and then remove all other unsuported characters\n        return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/[^a-z0-9]/g,'');\n      }\n    "]), " ", _h('h2', ["Input groups:"]), " ", _h('p', ["More details in ", _h('a', {
	    attrs: {
	      "href": "http://getbootstrap.com/components/#input-groups"
	    }
	  }, ["bootstrap input groups"]), "."]), " ", _h('bs-input', {
	    attrs: {
	      "label": "With dropdown and button",
	      "type": "text"
	    }
	  }, [_h('dropdown', {
	    attrs: {
	      "text": "dropdown"
	    },
	    slot: "before"
	  }, [_h('li', [_h('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["option"])])]), " ", _h('span', {
	    staticClass: "input-group-btn",
	    slot: "after"
	  }, [_h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    }
	  }, ["Go!"])])]), " ", _h('doc-code', ["\n      <bs-input label=\"With dropdown and button\" type=\"text\">\n        <dropdown slot=\"before\" text=\"dropdown\">\n          <li><a href=\"#\">option</a></li>\n        </dropdown>\n        <span slot=\"after\" class=\"input-group-btn\">\n          <button type=\"button\" class=\"btn btn-primary\">Go!</button>\n        </span>\n      </bs-input>\n    "]), " ", _h('bs-input', {
	    attrs: {
	      "label": "With icon and text",
	      "type": "number",
	      "placeholder": "Insert how much cost your house"
	    }
	  }, [_h('span', {
	    staticClass: "input-group-addon",
	    slot: "before"
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-home"
	  })]), " ", _h('span', {
	    staticClass: "input-group-addon",
	    slot: "after"
	  }, ["$"])]), " ", _h('doc-code', ["\n      <bs-input label=\"With icon and text\" type=\"number\" placeholder=\"Insert how much cost your house\">\n        <span slot=\"before\" class=\"input-group-addon\"><span class=\"glyphicon glyphicon-home\"></span></span>\n        <span slot=\"after\" class=\"input-group-addon\">$</span>\n      </bs-input>\n    "]), " ", _h('bs-input', {
	    attrs: {
	      "label": "With datalist (new on html5)",
	      "type": "text",
	      "placeholder": "Insert a fruit",
	      "datalist": _vm.fruits
	    }
	  }), " ", _h('doc-code', ["\n      <bs-input label=\"With datalist\" type=\"text\" placeholder=\"Insert a fruit\" :datalist=\"fruits\">\n      </bs-input>\n    "])]), " ", _h('doc-table', [_h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p', ["Input value. Use ", _h('code', ["v-model=\"value\""])])]), " ", _h('div', [_h('p', ["datalist"]), " ", _h('p', [_h('code', ["Array"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["\n        A list of predefined values that you can select. Work closer to an autocomplete. The items must be ", _h('code', ["String"]), " values.\n      "])]), " ", _h('div', [_h('p', ["disabled"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["enterSubmit"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Submit when you press ", _h('code', ["Enter"]), ". Not supported on type ", _h('code', ["textarea"]), "."])]), " ", _h('div', [_h('p', ["error"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Error message."])]), " ", _h('div', [_h('p', ["help"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Help text behind the input"])]), " ", _h('div', [_h('p', ["hide-help"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Only work with help and error.", _h('br'), "Hide the help if have to show any error message."])]), " ", _h('div', [_h('p', ["icon"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["label"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Enable input label (name)."])]), " ", _h('div', [_h('p', ["lang"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Browser language"]), " ", _h('p', [_h('abbr', {
	    attrs: {
	      "title": "ISO 639-1 code"
	    }
	  }, [_h('a', {
	    attrs: {
	      "href": "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
	    }
	  }, ["Language"])]), ". Default ", _h('code', ["en"]), " if the translation doesn't exist."])]), " ", _h('div', [_h('p', ["mask"]), " ", _h('p', [_h('code', ["Function"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Mask function that receive and edit the value."])]), " ", _h('div', [_h('p', ["mask-delay"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["100"])]), " ", _h('p', ["Delay time before apply the mask."])]), " ", _h('div', [_h('p', ["match"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p', ["Matching value. Both have to be the same value."])]), " ", _h('div', [_h('p', ["maxlength"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["minlength"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["name"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["pattern"]), " ", _h('p', [_h('code', ["String"]), ", ", _h('code', ["RegExp"]), " or ", _h('code', ["Function"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Validation pattern. A full ", _h('a', {
	    attrs: {
	      "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
	      "target": "_blank"
	    }
	  }, ["regular expression"]), " or a function that evaluate the content and return ", _h('code', ["true"]), " or ", _h('code', ["false"]), "."])]), " ", _h('div', [_h('p', ["placeholder"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["required"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["text"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["url"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["url for a datalist."])]), " ", _h('div', [_h('p', ["url-map"]), " ", _h('p', [_h('code', ["Function"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["A map function that handle the data receibed from the url."])]), " ", _h('div', [_h('p', ["validation-delay"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["250"])]), " ", _h('p', ["Delay time before apply the validation."])])]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Supported Native Validator",
	      "headers": ['Name', 'Description']
	    }
	  }, [_h('div', [_h('p', ["type"]), " ", _h('p', ["Use native validation with ", _h('code', ["url"]), " and ", _h('code', ["email"]), "."])]), " ", _h('div', [_h('p', ["min / max / step"]), " ", _h('p', ["That attributes handle the values supported.\n        Work with the following input types: ", _h('code', ["number"]), ", ", _h('code', ["range"]), ", ", _h('code', ["date"]), ", ", _h('code', ["datetime-local"]), ", ", _h('code', ["month"]), ", ", _h('code', ["time"]), " and ", _h('code', ["week"]), "."])])]), "\n  That validations only work in browsers that support ", _h('a', {
	    attrs: {
	      "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation",
	      "target": "_blank"
	    }
	  }, ["HTML5 form validations (all modern browsers support it)."])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-91ebd408", module.exports)
	  }
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(216)
	
	/* template */
	var __vue_template__ = __webpack_require__(226)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/modalDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-73a1b442", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-73a1b442", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modalDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Modal = __webpack_require__(217);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(218)
	
	/* script */
	__vue_exports__ = __webpack_require__(220)
	
	/* template */
	var __vue_template__ = __webpack_require__(225)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-10c5b07c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-10c5b07c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(219);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10c5b07c!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10c5b07c!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n  -webkit-transform: scale(0.1);\n  -moz-transform: scale(0.1);\n  -ms-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}\n", "", {"version":3,"sources":["/./src/Modal.vue?712092ee"],"names":[],"mappings":";AA6FA;EACA,0BAAA;CACA;AACA;EACA,kCAAA;CACA;AACA;EACA,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,6BAAA;EACA,0BAAA;EACA,qBAAA;CACA;AACA;EACA,4BAAA;EACA,yBAAA;EACA,wBAAA;EACA,oBAAA;EACA,6CAAA;EACA,qCAAA;EACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n  <div role=\"dialog\" :class=\"['modal',effect]\" @click=\"backClose\" @transitionend=\"transitionend\">\n    <div :class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\" :style=\"{width: optionalWidth}\">\n      <div class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"modal-title\"><slot name=\"title\">{{title}}</slot></h4>\n          </div>\n        </slot>\n        <slot name=\"modal-body\"><div class=\"modal-body\"><slot></slot></div></slot>\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"ok\">{{ okText }}</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport {getScrollBarWidth} from './utils/utils.js'\n\nexport default {\n  props: {\n    backdrop: {type: Boolean, default: true},\n    callback: {type: Function, default: null},\n    cancelText: {type: String, default: 'Close'},\n    effect: {type: String, default: null},\n    large: {type: Boolean, default: false},\n    okText: {type: String, default: 'Save changes'},\n    small: {type: Boolean, default: false},\n    title: {type: String, default: ''},\n    value: {type: Boolean, required: true},\n    width: {default: null}\n  },\n  computed: {\n    optionalWidth () {\n      if (this.width === null) {\n        return null\n      } else if (Number.isInteger(this.width)) {\n        return this.width + 'px'\n      }\n      return this.width\n    }\n  },\n  watch: {\n    value (val) {\n      this.transitionstart()\n    }\n  },\n  methods: {\n    backClose (e) {\n      if (this.backdrop && e.target === this.$el) { this.close() }\n    },\n    close () {\n      this.$emit('cancel')\n      this.$emit('input', false)\n    },\n    ok () {\n      if (this.callback instanceof Function) this.callback()\n      this.$emit('ok')\n    },\n    transitionstart () {\n      const el = this.$el\n      const body = document.body\n      const scrollBarWidth = getScrollBarWidth()\n      if (this.value) {\n        el.querySelector('.modal-content').focus()\n        el.style.display = 'block'\n        setTimeout(() => el.classList.add('in'), 0)\n        body.classList.add('modal-open')\n        if (scrollBarWidth !== 0) {\n          body.style.paddingRight = scrollBarWidth + 'px'\n        }\n      } else {\n        el.classList.remove('in')\n      }\n    },\n    transitionend () {\n      if (!this.value) {\n        this.$el.style.display = 'none'\n        const body = document.body\n        body.style.paddingRight = null\n        body.classList.remove('modal-open')\n      }\n    }\n  }\n}\n</script>\n<style>\n.modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n  -webkit-transform: scale(0.1);\n  -moz-transform: scale(0.1);\n  -ms-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(221);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(29);
	
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
	    value: function value(val) {
	      this.transitionstart();
	    }
	  },
	  methods: {
	    backClose: function backClose(e) {
	      if (this.backdrop && e.target === this.$el) {
	        this.close();
	      }
	    },
	    close: function close() {
	      this.$emit('cancel');
	      this.$emit('input', false);
	    },
	    ok: function ok() {
	      if (this.callback instanceof Function) this.callback();
	      this.$emit('ok');
	    },
	    transitionstart: function transitionstart() {
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (this.value) {
	        el.querySelector('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return el.classList.add('in');
	        }, 0);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	      } else {
	        el.classList.remove('in');
	      }
	    },
	    transitionend: function transitionend() {
	      if (!this.value) {
	        this.$el.style.display = 'none';
	        var body = document.body;
	        body.style.paddingRight = null;
	        body.classList.remove('modal-open');
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
	//
	//
	//
	//
	//
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
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(222), __esModule: true };

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223);
	module.exports = __webpack_require__(49).Number.isInteger;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(47);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(224)});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(55)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    class: ['modal', _vm.effect],
	    attrs: {
	      "role": "dialog"
	    },
	    on: {
	      "click": _vm.backClose,
	      "transitionend": _vm.transitionend
	    }
	  }, [_h('div', {
	    class: {
	      'modal-dialog': true, 'modal-lg': _vm.large, 'modal-sm': _vm.small
	    },
	    style: ({
	      width: _vm.optionalWidth
	    }),
	    attrs: {
	      "role": "document"
	    }
	  }, [_h('div', {
	    staticClass: "modal-content"
	  }, [_vm._t("modal-header", [_h('div', {
	    staticClass: "modal-header"
	  }, [_h('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.close
	    }
	  }, [_h('span', ["×"])]), " ", _h('h4', {
	    staticClass: "modal-title"
	  }, [_vm._t("title", [_vm._s(_vm.title)])])])]), " ", _vm._t("modal-body", [_h('div', {
	    staticClass: "modal-body"
	  }, [_vm._t("default")])]), " ", _vm._t("modal-footer", [_h('div', {
	    staticClass: "modal-footer"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.close
	    }
	  }, [_vm._s(_vm.cancelText)]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.ok
	    }
	  }, [_vm._s(_vm.okText)])])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-10c5b07c", module.exports)
	  }
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "modal",
	      "name": "Modal"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    on: {
	      "click": function($event) {
	        _vm.showModal = true
	      }
	    }
	  }, ["Show modal"]), " ", _h('modal', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.showModal),
	      expression: "showModal"
	    }],
	    attrs: {
	      "title": "Modal title"
	    },
	    domProps: {
	      "value": (_vm.showModal)
	    },
	    on: {
	      "input": function($event) {
	        _vm.showModal = $event
	      }
	    }
	  }, [_h('div', {
	    staticClass: "modal-header",
	    slot: "modal-header"
	  }, [_h('h4', {
	    staticClass: "modal-title"
	  }, ["Modal ", _h('b', ["Title"])])]), "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    "]), " ", _h('button', {
	    staticClass: "btn btn-success",
	    on: {
	      "click": function($event) {
	        _vm.fadeModal = true
	      }
	    }
	  }, ["Fade modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Fade Modal",
	      "value": _vm.fadeModal,
	      "effect": "fade",
	      "width": "800"
	    },
	    on: {
	      "cancel": function($event) {
	        _vm.fadeModal = false
	      }
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    "]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    on: {
	      "click": function($event) {
	        _vm.zoomModal = true
	      }
	    }
	  }, ["Zoom modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Zoom Modal",
	      "value": _vm.zoomModal,
	      "effect": "zoom",
	      "width": "400"
	    },
	    on: {
	      "ok": function($event) {
	        _vm.zoomModal = false
	      }
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    "]), " ", _h('button', {
	    staticClass: "btn btn-default",
	    on: {
	      "click": function($event) {
	        _vm.showCustomModal = true
	      }
	    }
	  }, ["Show custom modal"]), " ", _h('modal', {
	    attrs: {
	      "value": _vm.showCustomModal,
	      "effect": "fade",
	      "width": "50%"
	    },
	    on: {
	      "cancel": function($event) {
	        _vm.showCustomModel = false
	      }
	    }
	  }, [_h('div', {
	    staticClass: "modal-header",
	    slot: "modal-header"
	  }, [_h('h4', {
	    staticClass: "modal-title"
	  }, [_h('i', ["Custom"]), " ", _h('code', ["Modal"]), " ", _h('b', ["Title"])])]), "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      ", _h('div', {
	    staticClass: "modal-footer",
	    slot: "modal-footer"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.showCustomModal = false
	      }
	    }
	  }, ["Exit"]), " ", _h('button', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.showCustomModal = false
	      }
	    }
	  }, ["Custom Save"])])]), " ", _h('button', {
	    staticClass: "btn btn-warning",
	    on: {
	      "click": function($event) {
	        _vm.largeModal = true
	      }
	    }
	  }, ["Large modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Large Modal",
	      "value": _vm.largeModal,
	      "large": ""
	    },
	    on: {
	      "cancel": function($event) {
	        _vm.largeModal = false
	      }
	    }
	  }, [_h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]), " ", _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]), " ", _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])]), " ", _h('button', {
	    staticClass: "btn btn-danger",
	    on: {
	      "click": function($event) {
	        _vm.smallModal = true
	      }
	    }
	  }, ["Small modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Small Modal",
	      "value": _vm.smallModal,
	      "small": ""
	    },
	    on: {
	      "cancel": function($event) {
	        _vm.smallModal = false
	      }
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.\n    "])]), " ", _h('hr'), "\n  Have different ways to use it:\n  ", _h('doc-code', {
	    attrs: {
	      "language": "html"
	    }
	  }, ["\n    <!-- with v-model -->\n    <modal v-model=\"show\" @ok=\"okMethod\">\n      ...\n    </modal>\n    <!-- handling events -->\n    <modal title=\"Fade/Zoom Modal\" effect=\"fade/zoom\"\n      :value=\"show\" @ok=\"doSomething\" @cancel=\"show = false\"\n    >\n      ...\n    </modal>\n    <modal v-model=\"show\" effect=\"fade\">\n      <!-- custom header -->\n      <div slot=\"modal-header\" class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <i>Custom</i> <code>Modal</code> <b>Title</b>\n        </h4>\n      </div>\n      ...\n      <!-- custom buttons -->\n      <div slot=\"modal-footer\" class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" @click=\"showCustomModal = false\">Exit</button>\n        <button type=\"button\" class=\"btn btn-success\" @click=\"saveMethod\">Custom Save</button>\n      </div>\n    </modal>\n"]), " ", _h('doc-table', [_h('div', [_h('p', ["backdrop"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Enables/disables closing the modal by clicking on the backdrop."])]), " ", _h('div', [_h('p', ["callback"]), " ", _h('p', [_h('code', ["Function"])]), " ", _h('p'), " ", _h('p', ["A callback Function when you click the modal primary button."])]), " ", _h('div', [_h('p', ["cancel-text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Close"]), " ", _h('p', ["Text for cancel button"])]), " ", _h('div', [_h('p', ["effect"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["set the name of the effect to use on modal, like fade or zoom"])]), " ", _h('div', [_h('p', ["large"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Large modal (see boostrap's documentation for .modal-lg)"])]), " ", _h('div', [_h('p', ["ok-text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Save changes"]), " ", _h('p', ["Text for OK button"])]), " ", _h('div', [_h('p', ["small"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Small modal (see boostrap's documentation for .modal-sm)"])]), " ", _h('div', [_h('p', ["title"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Title of the modal component."])]), " ", _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["true if modal need to be shown, note the Modal has no intenal state"])]), " ", _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["Number, String or null"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default."])])]), " ", _h('h2', ["Usage"]), " ", _h('p', ["\n  If you just need a simple modal, you can use the ", _h('code', ["title"]), " prop and the default footer. However, if you\n  need to put custom HTML or a custom footer, you can override the header or footer block by using\n  ", _h('code', ["<div slot=\"modal-title\" class=\"modal-title\">...</div>"]), " and\n  ", _h('code', ["<div slot=\"modal-footer\" class=\"modal-footer\">...</div>"]), ".\n"])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-73a1b442", module.exports)
	  }
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(228)
	
	/* template */
	var __vue_template__ = __webpack_require__(232)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/navbarDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0b45c2a4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0b45c2a4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] navbarDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Dropdown = __webpack_require__(176);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Navbar = __webpack_require__(229);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Tooltip = __webpack_require__(38);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    Dropdown: _Dropdown2.default,
	    Navbar: _Navbar2.default,
	    Tooltip: _Tooltip2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      placement: 'top',
	      type: 'default'
	    };
	  },
	
	  computed: {
	    sections: function sections() {
	      return this.$root.sections;
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(230)
	
	/* template */
	var __vue_template__ = __webpack_require__(231)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4826cd4b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4826cd4b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(43);
	
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
	      (function () {
	        var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', _this.$el).parent();
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
	      })();
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
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('nav', {
	    class: ['navbar', 'navbar-' + _vm.type, _vm.placement === 'static' ? 'navbar-static-top' : 'navbar-fixed-' + _vm.placement]
	  }, [_h('div', {
	    staticClass: "container-fluid"
	  }, [_h('div', {
	    staticClass: "navbar-header"
	  }, [(!_vm.$slots.collapse) ? _h('button', {
	    staticClass: "navbar-toggle collapsed",
	    attrs: {
	      "type": "button",
	      "aria-expanded": "false"
	    },
	    on: {
	      "click": _vm.toggleCollapse
	    }
	  }, [_h('span', {
	    staticClass: "sr-only"
	  }, ["Toggle navigation"]), " ", _h('span', {
	    staticClass: "icon-bar"
	  }), " ", _h('span', {
	    staticClass: "icon-bar"
	  }), " ", _h('span', {
	    staticClass: "icon-bar"
	  })]) : _vm._e(), " ", _vm._t("collapse"), " ", _vm._t("brand")]), " ", _h('div', {
	    class: ['navbar-collapse', {
	      collapse: _vm.collapsed
	    }]
	  }, [_h('ul', {
	    staticClass: "nav navbar-nav"
	  }, [_vm._t("default")]), " ", (_vm.$slots.left) ? _h('ul', {
	    staticClass: "nav navbar-nav navbar-left"
	  }, [_vm._t("left")]) : _vm._e(), " ", (_vm.$slots.right) ? _h('ul', {
	    staticClass: "nav navbar-nav navbar-right"
	  }, [_vm._t("right")]) : _vm._e()])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4826cd4b", module.exports)
	  }
	}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "navbar",
	      "name": "Navbar"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('navbar', {
	    attrs: {
	      "placement": _vm.placement,
	      "type": _vm.type
	    }
	  }, [_h('a', {
	    staticClass: "navbar-brand",
	    attrs: {
	      "href": "/",
	      "title": "Home"
	    },
	    slot: "brand"
	  }, ["VueStrap"]), " ", _h('dropdown', {
	    attrs: {
	      "text": "Component List",
	      "type": "primary"
	    }
	  }, [_vm._l((_vm.sections), function(s) {
	    return _h('li', [_h('a', {
	      attrs: {
	        "href": '#' + s.id
	      },
	      domProps: {
	        "textContent": _vm._s(s.name)
	      }
	    })])
	  })]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "https://github.com/yuche/vue-strap",
	      "target": "_blank"
	    }
	  }, ["\n          Fork this project on Github\n          ", _h('svg', {
	    staticClass: "octicon octicon-mark-github",
	    attrs: {
	      "height": "16px",
	      "fill": "#777",
	      "viewBox": "0 0 16 16",
	      "version": "1.1",
	      "aria-hidden": "true"
	    }
	  }, [_h('path', {
	    attrs: {
	      "d": "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
	    }
	  })])])])]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', ["Placement"]), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.placement),
	      expression: "placement"
	    }],
	    attrs: {
	      "clear-button": "",
	      "options": ['top', 'bottom', 'static']
	    },
	    domProps: {
	      "value": (_vm.placement)
	    },
	    on: {
	      "input": function($event) {
	        _vm.placement = $event
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', ["Type"]), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.type),
	      expression: "type"
	    }],
	    attrs: {
	      "options": ['default', 'inverse']
	    },
	    domProps: {
	      "value": (_vm.type)
	    },
	    on: {
	      "input": function($event) {
	        _vm.type = $event
	      }
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <navbar placement=\"top\" type=\"default\">\n      <!-- Brand as slot -->\n      <a slot=\"brand\" href=\"/\" title=\"Home\" class=\"navbar-brand\">VueStrap</a>\n      <!-- You can use dropdown component -->\n      <dropdown text=\"Dropdown\">\n        <li><a href=\"link\">Option</a></li>\n      </dropdown>\n      <!-- Or normal bootstrap style -->\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\">Dropdown</a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"link\">Option</a></li>\n        </ul>\n      </li>\n      <!-- For positioning use slot=\"left\" or slot=\"right\" -->\n      <li slot=\"right\">\n        <a href=\"https://github.com/yuche/vue-strap\" target=\"_blank\">Fork...</a>\n      </li>\n    </navbar>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["top"]), ", ", _h('code', ["bottom"]), ", ", _h('code', ["static"]), ", or empty for normal."]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["inverse"]), ", ", _h('code', ["default"]), "."]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0b45c2a4", module.exports)
	  }
	}

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(234)
	
	/* template */
	var __vue_template__ = __webpack_require__(240)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/popoverDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c83043d2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c83043d2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] popoverDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Popover = __webpack_require__(235);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Input = __webpack_require__(187);
	
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
	//
	//

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(236)
	
	/* script */
	__vue_exports__ = __webpack_require__(238)
	
	/* template */
	var __vue_template__ = __webpack_require__(239)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-53a6847a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-53a6847a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(237);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-53a6847a!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-53a6847a!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.popover.top,\n.popover.left,\n.popover.right,\n.popover.bottom {\n  display: block;\n}\n.scale-enter {\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave-active {\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n0% {\n    transform: scale(0);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0);\n    opacity: 0;\n}\n}\n", "", {"version":3,"sources":["/./src/Popover.vue?5442b34c"],"names":[],"mappings":";AAuBA;;;;EAIA,eAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA","file":"Popover.vue","sourcesContent":["<template>\n  <span ref=\"trigger\">\n    <slot></slot>\n    <div ref=\"popover\" v-if=\"show\" :class=\"['popover',placement]\" :transition=\"effect\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-if=\"title\"><slot name=\"title\">{{title}}</slot></h3>\n      <div class=\"popover-content\"><slot name=\"content\"><span v-html=\"content\"></span></slot></div>\n    </div>\n  </span>\n</template>\n\n<script>\nimport PopoverMixin from './utils/popoverMixins.js'\n\nexport default {\n  mixins: [PopoverMixin],\n  props: {\n    trigger: {type: String, default: 'click'}\n  }\n}\n</script>\n\n<style>\n.popover.top,\n.popover.left,\n.popover.right,\n.popover.bottom {\n  display: block;\n}\n.scale-enter {\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave-active {\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(42);
	
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

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), " ", (_vm.show) ? _h('div', {
	    ref: "popover",
	    class: ['popover', _vm.placement],
	    attrs: {
	      "transition": _vm.effect
	    }
	  }, [_h('div', {
	    staticClass: "arrow"
	  }), " ", (_vm.title) ? _h('h3', {
	    staticClass: "popover-title"
	  }, [_vm._t("title", [_vm._s(_vm.title)])]) : _vm._e(), " ", _h('div', {
	    staticClass: "popover-content"
	  }, [_vm._t("content", [_h('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])])]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-53a6847a", module.exports)
	  }
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "popover",
	      "name": "Popover"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_vm._l((_vm.placements), function(place) {
	    return _h('popover', {
	      attrs: {
	        "effect": "fade",
	        "content": _vm.text,
	        "placement": place
	      }
	    }, [_h('button', {
	      staticClass: "btn btn-default"
	    }, ["Popover on " + _vm._s(place)])])
	  }), " ", _h('hr'), " ", _h('h4', ["Title"]), " ", _vm._l((_vm.placements), function(place) {
	    return _h('popover', {
	      attrs: {
	        "effect": "fade",
	        "header": "",
	        "title": "Title",
	        "content": _vm.text,
	        "placement": place
	      }
	    }, [_h('button', {
	      staticClass: "btn btn-default"
	    }, ["Popover on " + _vm._s(place)])])
	  }), " ", _h('hr'), " ", _h('h4', ["Trigger"]), " ", _h('p', [_h('popover', {
	    attrs: {
	      "effect": "scale",
	      "title": "Title",
	      "content": _vm.content,
	      "placement": "top",
	      "trigger": "hover"
	    }
	  }, [_h('button', {
	    staticClass: "btn btn-default"
	  }, ["Mouseenter"])]), " ", _h('popover', {
	    attrs: {
	      "effect": "scale",
	      "title": "Title",
	      "content": _vm.text,
	      "placement": "top",
	      "trigger": "contextmenu"
	    }
	  }, [_h('button', {
	    staticClass: "btn btn-default"
	  }, ["Contextmenu (right click)"])])]), " ", _h('popover', {
	    attrs: {
	      "effect": "scale",
	      "title": "Title",
	      "content": _vm.text,
	      "placement": "bottom",
	      "trigger": "focus"
	    }
	  }, [_h('bs-input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "Focus"
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <popover effect=\"fade\" placement=\"bottom\" title=\"Title\" content=\"content\">\n      <button class=\"btn btn-default\">Popover on bottom</button>\n    </popover>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["trigger"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["click"]), " ", _h('code', ["focus"]), " ", _h('code', ["hover"]), " ", _h('code', ["contextmenu"])]), " ", _h('p', [_h('code', ["click"])]), " ", _h('p', ["How the popover is triggered."])]), " ", _h('div', [_h('p', ["effect"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["scale"]), " ", _h('code', ["fade"])]), " ", _h('p', [_h('code', ["fade"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["title"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p')]), " ", _h('div', [_h('p', ["content"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p')]), " ", _h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether to show the header."])]), " ", _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["top"]), " ", _h('code', ["left"]), " ", _h('code', ["right"]), " ", _h('code', ["bottom"])]), " ", _h('p'), " ", _h('p', ["How to position the popover."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-c83043d2", module.exports)
	  }
	}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(242)
	
	/* template */
	var __vue_template__ = __webpack_require__(246)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/progressbarDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8809b490", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8809b490", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] progressbarDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Progressbar = __webpack_require__(243);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(244)
	
	/* template */
	var __vue_template__ = __webpack_require__(245)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Progressbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5bd014ca", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5bd014ca", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Progressbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
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
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
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
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5bd014ca", module.exports)
	  }
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "progressbar",
	      "name": "Progressbar"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('h4', ["Static"]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-md-4"
	  }, [_h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": "20",
	      "type": "success"
	    }
	  })])]), " ", _h('div', {
	    staticClass: "col-md-4"
	  }, [_h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": "40",
	      "type": "info"
	    }
	  })])]), " ", _h('div', {
	    staticClass: "col-md-4"
	  }, [_h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": "60",
	      "type": "primary"
	    }
	  })])])]), " ", _h('hr'), " ", _h('h4', ["Dynamic ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.dynamicClick
	    }
	  }, ["Randomize"])]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": _vm.dynamicData[0],
	      "type": "info"
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": _vm.dynamicData[1],
	      "type": "warning"
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": _vm.dynamicData[2],
	      "type": "danger"
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": _vm.dynamicData[3],
	      "type": "success",
	      "striped": ""
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": _vm.dynamicData[4],
	      "type": "success",
	      "striped": "",
	      "animated": ""
	    }
	  })]), " ", _h('hr'), " ", _h('h4', ["Stacked ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.stackedClick
	    }
	  }, ["Randomize"])]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": _vm.stackedData[0],
	      "label": "",
	      "type": "warning",
	      "striped": ""
	    }
	  }), " ", _h('progressbar', {
	    attrs: {
	      "now": _vm.stackedData[1],
	      "label": "",
	      "type": "success"
	    }
	  }), " ", _h('progressbar', {
	    attrs: {
	      "now": _vm.stackedData[2],
	      "label": "",
	      "type": "danger"
	    }
	  }), " ", _h('progressbar', {
	    attrs: {
	      "now": _vm.stackedData[3],
	      "label": "",
	      "type": "primary",
	      "striped": "",
	      "animated": ""
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <!-- Single -->\n    <div class=\"progress\">\n      <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n    </div>\n    <!-- Stacked -->\n    <div class=\"progress\">\n      <progressbar now=\"...\" label type=\"warning\" striped></progressbar>\n      <progressbar now=\"...\" label type=\"success\"></progressbar>\n      <progressbar now=\"...\" label type=\"danger\"></progressbar>\n      <progressbar now=\"...\" label type=\"primary\" striped animated></progressbar>\n    </div>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["now"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p'), " ", _h('p', ["The current value of progress completed. Required."])]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Style type. Possible values are 'success', 'warning' etc."])]), " ", _h('div', [_h('p', ["label"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["Whether to show the label."])]), " ", _h('div', [_h('p', ["striped"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Whether the progressbar has striped effect or not."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8809b490", module.exports)
	  }
	}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(248)
	
	/* template */
	var __vue_template__ = __webpack_require__(249)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/radioDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6220112d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6220112d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radioDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Radio = __webpack_require__(143);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
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

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "radio",
	      "name": "Radio"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('h4', ["Radio"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "checked-value": "one"
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["One"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "checked-value": "two",
	      "type": "danger",
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["Two (disabled)"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "checked-value": "two",
	      "type": "warning",
	      "readonly": ""
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["Two (readonly)"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "checked-value": "two",
	      "type": "success"
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["Two"]), " ", _h('hr'), " ", _h('h4', ["Radio Button (Single buttons)"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "button": "",
	      "checked-value": "three",
	      "type": "primary"
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["Three"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "button": "",
	      "checked-value": "four",
	      "type": "info",
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["Four (disabled)"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "button": "",
	      "checked-value": "four",
	      "type": "info",
	      "readonly": ""
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["Four (readonly)"]), " ", _h('radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "button": "",
	      "checked-value": "four",
	      "type": "info"
	    },
	    domProps: {
	      "value": (_vm.radioValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioValue = $event
	      }
	    }
	  }, ["Four"]), " ", _h('p', [_h('pre', ["Radio value: " + _vm._s(_vm.radioValue)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <radio v-model=\"radioValue\" checked-value=\"one\">One</radio>\n    <radio v-model=\"radioValue\" checked-value=\"two\" type=\"primary\">Two</radio>\n    <radio button v-model=\"radioValue\" checked-value=\"three\" type=\"danger\">Three</radio>\n    <radio button v-model=\"radioValue\" checked-value=\"four\" type=\"info\">Four</radio>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Mixed"])]), " ", _h('p'), " ", _h('p', ["Handle the selected value."])]), " ", _h('div', [_h('p', ["checkedValue"]), " ", _h('p', [_h('code', ["Mixed"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Value to return if the radio item is selected."])]), " ", _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["button"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Enable/Disable button style."])])]), " ", _h('p', ["See ", _h('a', {
	    attrs: {
	      "href": "#button-group"
	    }
	  }, ["Button Group"]), " for more options."])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6220112d", module.exports)
	  }
	}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(251)
	
	/* script */
	__vue_exports__ = __webpack_require__(253)
	
	/* template */
	var __vue_template__ = __webpack_require__(254)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/selectDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9cffa0e0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9cffa0e0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] selectDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(252);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9cffa0e0!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./selectDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9cffa0e0!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./selectDocs.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}\n", "", {"version":3,"sources":["/./docs/example/selectDocs.vue?43bdc93a"],"names":[],"mappings":";AAgPA;EACA,kBAAA;CACA","file":"selectDocs.vue","sourcesContent":["<template>\n  <doc-section id=\"select\" name=\"Select\">\n    <p>Based in a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.</p>\n    <div class=\"bs-example\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n          <p><pre>Normal select data: {{select.normal}}</pre></p>\n          <form action=\"./#select\" method=\"get\">\n            <v-select :options=\"select.options\" options-value=\"val\" v-model=\"select.normal\" name=\"animal\" :search=\"select.search\"\n              :required=\"select.required\" :clear-button=\"select.clearButton\" :disabled=\"select.disabled\"\n              :placeholder=\"select.placeholder?'Using placeholder':null\"\n            ></v-select>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </form>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n          <p><pre>Multiple select data : {{select.multiple.join(',')}}</pre></p>\n          <form action=\"./#select\" method=\"get\">\n            <v-select :options=\"select.options\" options-value=\"val\" v-model=\"select.multiple\" name=\"animals[]\" :search=\"select.search\"\n              multiple :required=\"select.required\" :clear-button=\"select.clearButton\"\n              :placeholder=\"select.placeholder?'Using placeholder':null\"\n              :close-on-select=\"select.closeOnSelect\" :limit=\"select.limit?3:1024\" :disabled=\"select.disabled\"\n            ></v-select>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </form>\n        </div>\n      </div>\n      <br/>\n      <button-group type=\"primary\" :buttons=\"false\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <p><checkbox v-model=\"select.disabled\">Disabled</checkbox></p>\n            <p><checkbox v-model=\"select.placeholder\">Placeholder</checkbox></p>\n            <p><checkbox v-model=\"select.search\">Search</checkbox></p>\n            <p><checkbox v-model=\"select.clearButton\">Clear Button</checkbox></p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <p><checkbox v-model=\"select.required\">Required (empty value if noting selected)</checkbox></p>\n            <p>\n              Multiple:\n              <checkbox v-if=\"select.multiple\" v-model=\"select.limit\">Limit (e.g. 3)</checkbox>\n              <checkbox v-if=\"select.multiple\" v-model=\"select.closeOnSelect\">Close on Select</checkbox>\n            </p>\n          </div>\n        </div>\n      </button-group>\n      <doc-code>\n        &lt;form action=\"./#select\" method=\"get\">\n          &lt;v-select v-model=\"select.value\" :options=\"select.options\" options-value=\"val\"\n            multiple name=\"animals[]\" limit=\"3\"\n            placeholder=\"Using placeholder\"\n            search justified required disabled\n            clear-button close-on-select\n          >&lt;/v-select>\n          &lt;button type=\"submit\" class=\"btn btn-default\">Submit form&lt;/button>\n        &lt;/form>\n      </doc-code>\n      <doc-code language=\"javascript\">\n        options: [\n          {val: 0, label: 'Cat'},\n          {val: 1, label: 'Cow'},\n          {val: 2, label: 'Dog'},\n          {val: 3, label: 'Elephant'},\n          {val: 4, label: 'Fish'},\n          {val: 5, label: 'Lion'},\n          {val: 6, label: 'Tiger'},\n          {val: 7, label: 'Turtle'}\n        ]\n      </doc-code>\n      <h4>Select with option component:</h4>\n      <p><pre>Selected data : {{single}}</pre></p>\n      <v-select v-model=\"single\">\n        <v-option value=\"apple\">Apple</v-option>\n        <v-option value=\"banana\">Banana</v-option>\n        <v-option value=\"cherry\">Cherry</v-option>\n        <v-option value=\"orange\">Orange</v-option>\n        <v-option value=\"grape\">Grape</v-option>\n      </v-select>\n      <doc-code>\n        &lt;v-select>\n          &lt;v-option value=\"apple\">Apple&lt;/v-option>\n          &lt;v-option value=\"banana\">Banana&lt;/v-option>\n          &lt;v-option value=\"cherry\">Cherry&lt;/v-option>\n          &lt;v-option value=\"orange\">Orange&lt;/v-option>\n          &lt;v-option value=\"grape\">Grape&lt;/v-option>\n        &lt;/v-select>\n      </doc-code>\n      <hr/>\n      <h4>Use button-group (component or <a href=\"http://getbootstrap.com/components/#btn-groups-justified\">bootstrap element</a>) if you want to justify.</h4>\n      <button-group justified>\n        <v-select multiple clear-button>\n          <v-option value=\"apple\">Apple</v-option>\n          <v-option value=\"banana\">Banana</v-option>\n          <v-option value=\"cherry\">Cherry</v-option>\n          <v-option value=\"cranberry\">Cranberry</v-option>\n          <v-option value=\"grape\">Grape</v-option>\n          <v-option value=\"orange\">Orange</v-option>\n          <v-option value=\"passionfruit\">Passionfruit</v-option>\n          <v-option value=\"pineapple\">Pineapple</v-option>\n          <v-option value=\"strawberry\">Strawberry</v-option>\n          <v-option value=\"a\">Apple</v-option>\n          <v-option value=\"b\">Banana</v-option>\n          <v-option value=\"c\">Cherry</v-option>\n          <v-option value=\"c\">Cranberry</v-option>\n          <v-option value=\"g\">Grape</v-option>\n          <v-option value=\"o\">Orange</v-option>\n          <v-option value=\"p\">Passionfruit</v-option>\n          <v-option value=\"p\">Pineapple</v-option>\n          <v-option value=\"s\">Strawberry</v-option>\n        </v-select>\n      </button-group>\n      <doc-code>\n        &lt;button-group justified>&lt;select>...&lt;/select>&lt;/button-group>\n        // or\n        &lt;div class=\"btn-group btn-group-justified\">&lt;select>...&lt;/select>&lt;/div>\n      </doc-code>\n      <hr/>\n      <h4>Ajax data and parent dependency:</h4>\n      <p>Depend on <a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">vue-resource</a>. Disabled if not present.</p>\n      <p>The second select has inheritance, is enabled when the first get some value and the ajax return values.</p>\n      <v-select url=\"docs/data.json\" options-label=\"text\" v-model=\"ajax.value\" clear-button @options=\"ajax.options = arguments[0]\"></v-select>\n      <v-select url=\"docs/data.json\" options-label=\"text\" multiple :parent=\"ajax.value\"></v-select>\n      <doc-code>\n        &lt;v-select url=\"docs/data.json\" options-label=\"text\" v-model=\"ajax.value\" clear-button @options=\"ajax.options = arguments[0]\">&lt;/v-select>\n        &lt;v-select url=\"docs/data.json\" options-label=\"text\" multiple :parent=\"ajax.value\">&lt;/v-select>\n      </doc-code>\n      <p>Ajax response:</p>\n      <pre v-html=\"ajax.options\"></pre>\n    </div>\n    <doc-table name=\"Other\">\n      <div>\n        <p>min-search</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>\n      </div>\n      <div>\n        <p>lang</p>\n        <p><code>String</code></p>\n        <p>Browser language</p>\n        <p><abbr title=\"ISO 639-1 code\"><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>\n      </div>\n      <div>\n        <p>options-label</p>\n        <p><code>String</code></p>\n        <p><code>label</code></p>\n        <p>Define the value in the data used as label.</p>\n      </div>\n      <div>\n        <p>options-value</p>\n        <p><code>String</code></p>\n        <p><code>value</code></p>\n        <p>Define the value in the data used as value.</p>\n      </div>\n      <div>\n        <p>placeholder</p>\n        <p><code>String</code></p>\n        <p>Nothing Selected</p>\n        <p></p>\n      </div>\n      <div>\n        <p>search-text</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p></p>\n      </div>\n    </doc-table>\n    <doc-table type=\"Events\">\n      <div>\n        <p>change</p>\n        <p>(<code>value</code>)</p>\n        <p>Return the selected value(s).</p>\n      </div>\n      <div>\n        <p>options</p>\n        <p>(<code>options:Array</code>)</p>\n        <p>Return the options array. Helpfull for dinamic/url options.</p>\n      </div>\n      <div>\n        <p>selected</p>\n        <p>(<code>labels:String</code>)</p>\n        <p>Return a string with the label(s) of the selected item(s).</p>\n      </div>\n    </doc-table>\n  </doc-section>\n</template>\n\n<script>\nimport docSection from './utils/docSection.vue'\nimport docTable from './utils/docTable.js'\nimport docCode from './utils/docCode.js'\nimport ButtonGroup from 'src/ButtonGroup.vue'\nimport checkbox from 'src/Checkbox.vue'\nimport vSelect from 'src/Select.vue'\nimport vOption from 'src/Option.vue'\n\nexport default {\n  components: {\n    docSection,\n    docTable,\n    docCode,\n    ButtonGroup,\n    checkbox,\n    vSelect,\n    vOption\n  },\n  data () {\n    return {\n      select: {\n        clearButton: false,\n        closeOnSelect: false,\n        disabled: false,\n        justified: true,\n        limit: false,\n        multiple: [],\n        options: [\n          {val: 0, label: 'Cat'},\n          {val: 1, label: 'Cow'},\n          {val: 2, label: 'Dog'},\n          {val: 3, label: 'Elephant'},\n          {val: 4, label: 'Fish'},\n          {val: 5, label: 'Lion'},\n          {val: 6, label: 'Tiger'},\n          {val: 7, label: 'Turtle'}\n        ],\n        placeholder: false,\n        required: false,\n        search: true\n      },\n      ajax: {\n        options: [],\n        value:null\n      },\n      single: []\n    }\n  }\n}\n</script>\n\n<style>\n.checkbox>label:not(:first-child) {\n  margin-left: 15px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _ButtonGroup = __webpack_require__(140);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(170);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    ButtonGroup: _ButtonGroup2.default,
	    checkbox: _Checkbox2.default,
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      select: {
	        clearButton: false,
	        closeOnSelect: false,
	        disabled: false,
	        justified: true,
	        limit: false,
	        multiple: [],
	        options: [{ val: 0, label: 'Cat' }, { val: 1, label: 'Cow' }, { val: 2, label: 'Dog' }, { val: 3, label: 'Elephant' }, { val: 4, label: 'Fish' }, { val: 5, label: 'Lion' }, { val: 6, label: 'Tiger' }, { val: 7, label: 'Turtle' }],
	        placeholder: false,
	        required: false,
	        search: true
	      },
	      ajax: {
	        options: [],
	        value: null
	      },
	      single: []
	    };
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "select",
	      "name": "Select"
	    }
	  }, [_h('p', ["Based in a ", _h('a', {
	    attrs: {
	      "target": "_blank",
	      "href": "https://silviomoreto.github.io/bootstrap-select/"
	    }
	  }, ["bootstrap-select"]), " implementation."]), " ", _h('div', {
	    staticClass: "bs-example"
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
	  }, [_h('p', [_h('pre', ["Normal select data: " + _vm._s(_vm.select.normal)])]), " ", _h('form', {
	    attrs: {
	      "action": "./#select",
	      "method": "get"
	    }
	  }, [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.normal),
	      expression: "select.normal"
	    }],
	    attrs: {
	      "options": _vm.select.options,
	      "options-value": "val",
	      "name": "animal",
	      "search": _vm.select.search,
	      "required": _vm.select.required,
	      "clear-button": _vm.select.clearButton,
	      "disabled": _vm.select.disabled,
	      "placeholder": _vm.select.placeholder ? 'Using placeholder' : null
	    },
	    domProps: {
	      "value": (_vm.select.normal)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.normal = $event
	      }
	    }
	  }), " ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "submit"
	    }
	  }, ["Submit"])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
	  }, [_h('p', [_h('pre', ["Multiple select data : " + _vm._s(_vm.select.multiple.join(','))])]), " ", _h('form', {
	    attrs: {
	      "action": "./#select",
	      "method": "get"
	    }
	  }, [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.multiple),
	      expression: "select.multiple"
	    }],
	    attrs: {
	      "options": _vm.select.options,
	      "options-value": "val",
	      "name": "animals[]",
	      "search": _vm.select.search,
	      "multiple": "",
	      "required": _vm.select.required,
	      "clear-button": _vm.select.clearButton,
	      "placeholder": _vm.select.placeholder ? 'Using placeholder' : null,
	      "close-on-select": _vm.select.closeOnSelect,
	      "limit": _vm.select.limit ? 3 : 1024,
	      "disabled": _vm.select.disabled
	    },
	    domProps: {
	      "value": (_vm.select.multiple)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.multiple = $event
	      }
	    }
	  }), " ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "submit"
	    }
	  }, ["Submit"])])])]), " ", _h('br'), " ", _h('button-group', {
	    attrs: {
	      "type": "primary",
	      "buttons": false
	    }
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
	  }, [_h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.disabled),
	      expression: "select.disabled"
	    }],
	    domProps: {
	      "value": (_vm.select.disabled)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.disabled = $event
	      }
	    }
	  }, ["Disabled"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.placeholder),
	      expression: "select.placeholder"
	    }],
	    domProps: {
	      "value": (_vm.select.placeholder)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.placeholder = $event
	      }
	    }
	  }, ["Placeholder"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.search),
	      expression: "select.search"
	    }],
	    domProps: {
	      "value": (_vm.select.search)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.search = $event
	      }
	    }
	  }, ["Search"])]), " ", _h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.clearButton),
	      expression: "select.clearButton"
	    }],
	    domProps: {
	      "value": (_vm.select.clearButton)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.clearButton = $event
	      }
	    }
	  }, ["Clear Button"])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
	  }, [_h('p', [_h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.required),
	      expression: "select.required"
	    }],
	    domProps: {
	      "value": (_vm.select.required)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.required = $event
	      }
	    }
	  }, ["Required (empty value if noting selected)"])]), " ", _h('p', ["\n            Multiple:\n            ", (_vm.select.multiple) ? _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.limit),
	      expression: "select.limit"
	    }],
	    domProps: {
	      "value": (_vm.select.limit)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.limit = $event
	      }
	    }
	  }, ["Limit (e.g. 3)"]) : _vm._e(), " ", (_vm.select.multiple) ? _h('checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.select.closeOnSelect),
	      expression: "select.closeOnSelect"
	    }],
	    domProps: {
	      "value": (_vm.select.closeOnSelect)
	    },
	    on: {
	      "input": function($event) {
	        _vm.select.closeOnSelect = $event
	      }
	    }
	  }, ["Close on Select"]) : _vm._e()])])])]), " ", _h('doc-code', ["\n      <form action=\"./#select\" method=\"get\">\n        <v-select v-model=\"select.value\" :options=\"select.options\" options-value=\"val\"\n          multiple name=\"animals[]\" limit=\"3\"\n          placeholder=\"Using placeholder\"\n          search justified required disabled\n          clear-button close-on-select\n        ></v-select>\n        <button type=\"submit\" class=\"btn btn-default\">Submit form</button>\n      </form>\n    "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      options: [\n        {val: 0, label: 'Cat'},\n        {val: 1, label: 'Cow'},\n        {val: 2, label: 'Dog'},\n        {val: 3, label: 'Elephant'},\n        {val: 4, label: 'Fish'},\n        {val: 5, label: 'Lion'},\n        {val: 6, label: 'Tiger'},\n        {val: 7, label: 'Turtle'}\n      ]\n    "]), " ", _h('h4', ["Select with option component:"]), " ", _h('p', [_h('pre', ["Selected data : " + _vm._s(_vm.single)])]), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.single),
	      expression: "single"
	    }],
	    domProps: {
	      "value": (_vm.single)
	    },
	    on: {
	      "input": function($event) {
	        _vm.single = $event
	      }
	    }
	  }, [_h('v-option', {
	    attrs: {
	      "value": "apple"
	    }
	  }, ["Apple"]), " ", _h('v-option', {
	    attrs: {
	      "value": "banana"
	    }
	  }, ["Banana"]), " ", _h('v-option', {
	    attrs: {
	      "value": "cherry"
	    }
	  }, ["Cherry"]), " ", _h('v-option', {
	    attrs: {
	      "value": "orange"
	    }
	  }, ["Orange"]), " ", _h('v-option', {
	    attrs: {
	      "value": "grape"
	    }
	  }, ["Grape"])]), " ", _h('doc-code', ["\n      <v-select>\n        <v-option value=\"apple\">Apple</v-option>\n        <v-option value=\"banana\">Banana</v-option>\n        <v-option value=\"cherry\">Cherry</v-option>\n        <v-option value=\"orange\">Orange</v-option>\n        <v-option value=\"grape\">Grape</v-option>\n      </v-select>\n    "]), " ", _h('hr'), " ", _h('h4', ["Use button-group (component or ", _h('a', {
	    attrs: {
	      "href": "http://getbootstrap.com/components/#btn-groups-justified"
	    }
	  }, ["bootstrap element"]), ") if you want to justify."]), " ", _h('button-group', {
	    attrs: {
	      "justified": ""
	    }
	  }, [_h('v-select', {
	    attrs: {
	      "multiple": "",
	      "clear-button": ""
	    }
	  }, [_h('v-option', {
	    attrs: {
	      "value": "apple"
	    }
	  }, ["Apple"]), " ", _h('v-option', {
	    attrs: {
	      "value": "banana"
	    }
	  }, ["Banana"]), " ", _h('v-option', {
	    attrs: {
	      "value": "cherry"
	    }
	  }, ["Cherry"]), " ", _h('v-option', {
	    attrs: {
	      "value": "cranberry"
	    }
	  }, ["Cranberry"]), " ", _h('v-option', {
	    attrs: {
	      "value": "grape"
	    }
	  }, ["Grape"]), " ", _h('v-option', {
	    attrs: {
	      "value": "orange"
	    }
	  }, ["Orange"]), " ", _h('v-option', {
	    attrs: {
	      "value": "passionfruit"
	    }
	  }, ["Passionfruit"]), " ", _h('v-option', {
	    attrs: {
	      "value": "pineapple"
	    }
	  }, ["Pineapple"]), " ", _h('v-option', {
	    attrs: {
	      "value": "strawberry"
	    }
	  }, ["Strawberry"]), " ", _h('v-option', {
	    attrs: {
	      "value": "a"
	    }
	  }, ["Apple"]), " ", _h('v-option', {
	    attrs: {
	      "value": "b"
	    }
	  }, ["Banana"]), " ", _h('v-option', {
	    attrs: {
	      "value": "c"
	    }
	  }, ["Cherry"]), " ", _h('v-option', {
	    attrs: {
	      "value": "c"
	    }
	  }, ["Cranberry"]), " ", _h('v-option', {
	    attrs: {
	      "value": "g"
	    }
	  }, ["Grape"]), " ", _h('v-option', {
	    attrs: {
	      "value": "o"
	    }
	  }, ["Orange"]), " ", _h('v-option', {
	    attrs: {
	      "value": "p"
	    }
	  }, ["Passionfruit"]), " ", _h('v-option', {
	    attrs: {
	      "value": "p"
	    }
	  }, ["Pineapple"]), " ", _h('v-option', {
	    attrs: {
	      "value": "s"
	    }
	  }, ["Strawberry"])])]), " ", _h('doc-code', ["\n      <button-group justified><select>...</select></button-group>\n      // or\n      <div class=\"btn-group btn-group-justified\"><select>...</select></div>\n    "]), " ", _h('hr'), " ", _h('h4', ["Ajax data and parent dependency:"]), " ", _h('p', ["Depend on ", _h('a', {
	    attrs: {
	      "href": "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
	    }
	  }, ["vue-resource"]), ". Disabled if not present."]), " ", _h('p', ["The second select has inheritance, is enabled when the first get some value and the ajax return values."]), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ajax.value),
	      expression: "ajax.value"
	    }],
	    attrs: {
	      "url": "docs/data.json",
	      "options-label": "text",
	      "clear-button": ""
	    },
	    domProps: {
	      "value": (_vm.ajax.value)
	    },
	    on: {
	      "options": function($event) {
	        _vm.ajax.options = arguments[0]
	      },
	      "input": function($event) {
	        _vm.ajax.value = $event
	      }
	    }
	  }), " ", _h('v-select', {
	    attrs: {
	      "url": "docs/data.json",
	      "options-label": "text",
	      "multiple": "",
	      "parent": _vm.ajax.value
	    }
	  }), " ", _h('doc-code', ["\n      <v-select url=\"docs/data.json\" options-label=\"text\" v-model=\"ajax.value\" clear-button @options=\"ajax.options = arguments[0]\"></v-select>\n      <v-select url=\"docs/data.json\" options-label=\"text\" multiple :parent=\"ajax.value\"></v-select>\n    "]), " ", _h('p', ["Ajax response:"]), " ", _h('pre', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.ajax.options)
	    }
	  })]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Other"
	    }
	  }, [_h('div', [_h('p', ["min-search"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p', ["If defined, the searchbox is disabled if are less than the minimum value you set."])]), " ", _h('div', [_h('p', ["lang"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Browser language"]), " ", _h('p', [_h('abbr', {
	    attrs: {
	      "title": "ISO 639-1 code"
	    }
	  }, [_h('a', {
	    attrs: {
	      "href": "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
	    }
	  }, ["Language"])]), ". Default ", _h('code', ["en"]), " if the translation doesn't exist."])]), " ", _h('div', [_h('p', ["options-label"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["label"])]), " ", _h('p', ["Define the value in the data used as label."])]), " ", _h('div', [_h('p', ["options-value"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["value"])]), " ", _h('p', ["Define the value in the data used as value."])]), " ", _h('div', [_h('p', ["placeholder"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Nothing Selected"]), " ", _h('p')]), " ", _h('div', [_h('p', ["search-text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p')])]), " ", _h('doc-table', {
	    attrs: {
	      "type": "Events"
	    }
	  }, [_h('div', [_h('p', ["change"]), " ", _h('p', ["(", _h('code', ["value"]), ")"]), " ", _h('p', ["Return the selected value(s)."])]), " ", _h('div', [_h('p', ["options"]), " ", _h('p', ["(", _h('code', ["options:Array"]), ")"]), " ", _h('p', ["Return the options array. Helpfull for dinamic/url options."])]), " ", _h('div', [_h('p', ["selected"]), " ", _h('p', ["(", _h('code', ["labels:String"]), ")"]), " ", _h('p', ["Return a string with the label(s) of the selected item(s)."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9cffa0e0", module.exports)
	  }
	}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(256)
	
	/* template */
	var __vue_template__ = __webpack_require__(262)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/spinnerDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-56eb7d8b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-56eb7d8b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] spinnerDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Spinner = __webpack_require__(257);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
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
	      size: 'lg',
	      spinner: false
	    };
	  },
	
	  methods: {
	    showGlobal: function showGlobal() {
	      this.$root.$emit('spinner::show');
	      this.$nextTick(function () {
	        this.$root.$emit('spinner::hide');
	      });
	    },
	    showModel: function showModel() {
	      this.spinner = true;
	      this.$nextTick(function () {
	        this.spinner = false;
	      });
	    },
	    showRef: function showRef() {
	      this.$refs.spinner.show();
	      this.$nextTick(function () {
	        this.$refs.spinner.hide();
	      });
	    }
	  }
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(258)
	
	/* script */
	__vue_exports__ = __webpack_require__(260)
	
	/* template */
	var __vue_template__ = __webpack_require__(261)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Spinner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2ca80424", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2ca80424", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Spinner.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(259);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2ca80424!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2ca80424!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n@keyframes spin {\n100% {\n    transform: rotate(360deg);\n}\n}\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9);\n}\n.spinner-gritcode.spinner-fixed {\n  position: fixed;\n}\n.spinner-gritcode .spinner-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.spinner-gritcode .spinner-circle {\n  position: relative;\n  border: 4px solid #ccc;\n  border-right-color: #337ab7;\n  border-radius: 50%;\n  display: inline-block;\n  animation: spin 0.6s linear;\n  animation-iteration-count: infinite;\n  width: 3em;\n  height: 3em;\n  z-index: 2;\n}\n.spinner-gritcode .spinner-text {\n  position: relative;\n  text-align: center;\n  margin-top: 0.5em;\n  z-index: 2;\n  width: 100%;\n  font-size: 95%;\n  color: #337ab7;\n}\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em;\n}\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em;\n}\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em;\n}\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em;\n}\n.lt-ie10 .spinner-gritcode .spinner-circle,\n.ie9 .spinner-gritcode .spinner-circle,\n.oldie .spinner-gritcode .spinner-circle,\n.no-csstransitions .spinner-gritcode .spinner-circle,\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px;\n}\n", "", {"version":3,"sources":["/./src/Spinner.vue?c87fc9c2"],"names":[],"mappings":";AA2FA;AACA;IACA,0BAAA;CACA;CACA;AACA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,qCAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,qCAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,4BAAA;EACA,mBAAA;EACA,sBAAA;EACA,4BAAA;EACA,oCAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,WAAA;EACA,YAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;;;;;EAKA,6IAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;CACA","file":"Spinner.vue","sourcesContent":["<template>\n  <div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active||locked\">\n    <div class=\"spinner-wrapper\">\n      <div class=\"spinner-circle\"></div>\n      <div class=\"spinner-text\">{{text}}</div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport {coerce, delayer} from './utils/utils.js'\nconst MIN_WAIT = 500 // in ms\n\nexport default {\n  props: {\n    fixed: {type: Boolean, default: false},\n    global: {type: Boolean, default: false},\n    size: {type: String, default: 'md'},\n    text: {type: String, default: ''},\n    value: {default: false}\n  },\n  data () {\n    return {\n      active: this.value,\n      locked: false\n    }\n  },\n  computed: {\n    spinnerSize () { return 'spinner-' + (this.size ? this.size : 'sm') }\n  },\n  watch: {\n    active (val, old) {\n      if (val !== old) this.$emit('input', val)\n    },\n    value (val, old) {\n      if (val !== old) { this[val ? 'show' : 'hide']() }\n    }\n  },\n  methods: {\n    hide () {\n      var delay = 0\n      this.active = false\n    },\n    show (options) {\n      if (options) {\n        if (options.text) { this.text = options.text }\n        if (options.size) { this.size = options.size }\n        if (options.fixed) { this.fixed = options.fixed }\n      }\n      // block scrolling when spinner is on\n      this._body.style.overflowY = 'hidden'\n      // activate spinner\n      this._started = new Date()\n      this.active = true\n      this.locked = true\n      this._unlock()\n    }\n  },\n  created () {\n    this._body = document.body\n    this._bodyOverflow = document.body.style.overflowY\n    this._unlock = delayer(function () {\n      this.locked = false\n      this._body.style.overflowY = this._bodyOverflow\n    }, MIN_WAIT)\n    if (this.global) {\n      if (!this.$root._globalSpinner) {\n        this.$root._globalSpinner = true\n        var self = this\n        this._global = {\n          hide () { self.hide() },\n          show () { self.show() }\n        }\n        this.$root.$on('spinner::show', this._global.show)\n        this.$root.$on('spinner::hide', this._global.hide)\n      }\n    }\n  },\n  beforeDestroy () {\n    if (this._global) {\n      this.$root.$off('spinner::show', this._global.show)\n      this.$root.$off('spinner::hide', this._global.hide)\n      delete this.$root._globalSpinner\n    }\n    clearTimeout(this._spinnerAnimation)\n    this._body.style.overflowY = this._bodyOverflow\n  }\n}\n</script>\n\n<style>\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9);\n}\n.spinner-gritcode.spinner-fixed {\n  position: fixed;\n}\n.spinner-gritcode .spinner-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.spinner-gritcode .spinner-circle {\n  position: relative;\n  border: 4px solid #ccc;\n  border-right-color: #337ab7;\n  border-radius: 50%;\n  display: inline-block;\n  animation: spin 0.6s linear;\n  animation-iteration-count: infinite;\n  width: 3em;\n  height: 3em;\n  z-index: 2;\n}\n.spinner-gritcode .spinner-text {\n  position: relative;\n  text-align: center;\n  margin-top: 0.5em;\n  z-index: 2;\n  width: 100%;\n  font-size: 95%;\n  color: #337ab7;\n}\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em;\n}\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em;\n}\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em;\n}\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em;\n}\n.lt-ie10 .spinner-gritcode .spinner-circle,\n.ie9 .spinner-gritcode .spinner-circle,\n.oldie .spinner-gritcode .spinner-circle,\n.no-csstransitions .spinner-gritcode .spinner-circle,\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
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
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.active || _vm.locked),
	      expression: "active||locked"
	    }],
	    class: ['spinner spinner-gritcode', _vm.spinnerSize, {
	      'spinner-fixed': _vm.fixed
	    }]
	  }, [_h('div', {
	    staticClass: "spinner-wrapper"
	  }, [_h('div', {
	    staticClass: "spinner-circle"
	  }), " ", _h('div', {
	    staticClass: "spinner-text"
	  }, [_vm._s(_vm.text)])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2ca80424", module.exports)
	  }
	}

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "spinner",
	      "name": "Spinner"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('p', [_h('checkbox', {
	    attrs: {
	      "checked": _vm.fixed,
	      "type": "info"
	    },
	    on: {
	      "checked": function($event) {
	        _vm.fixed = arguments[0]
	      }
	    }
	  }, ["fixed"])]), " ", _h('p', [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.size),
	      expression: "size"
	    }],
	    attrs: {
	      "options": ['sm', 'md', 'lg', 'xl']
	    },
	    domProps: {
	      "value": (_vm.size)
	    },
	    on: {
	      "input": function($event) {
	        _vm.size = $event
	      }
	    }
	  }, ["size"])]), " ", _h('p', [_h('button', {
	    staticClass: "btn btn-info",
	    on: {
	      "click": _vm.showRef
	    }
	  }, ["show spinner (using ref)"]), " ", _h('button', {
	    staticClass: "btn btn-info",
	    on: {
	      "click": _vm.showGlobal
	    }
	  }, ["show spinner (global)"]), " ", _h('button', {
	    staticClass: "btn btn-info",
	    on: {
	      "click": _vm.showModel
	    }
	  }, ["show spinner (v-model)"])]), " ", _h('div', [_h('spinner', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.spinner),
	      expression: "spinner"
	    }],
	    ref: "spinner",
	    attrs: {
	      "global": "",
	      "size": _vm.size,
	      "fixed": _vm.fixed,
	      "text": "I will close in 2 secs"
	    },
	    domProps: {
	      "value": (_vm.spinner)
	    },
	    on: {
	      "input": function($event) {
	        _vm.spinner = $event
	      }
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <spinner ref=\"spinner\" global v-model=\"spinner\" size=\"lg\" fixed text=\"I will close in 2 secs\"></spinner>\n  "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n    // using ref\n    this.$refs.spinner.show()\n    this.$refs.spinner.hide()\n    // using global events\n    this.$root.$emit('spinner::show')\n    this.$root.$emit('spinner::hide')\n    // using v-model\n    this.spinner = true //show\n    this.spinner = false //hide\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["fixed"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Set to true if you want the spinner to occupy the entire window space."])]), " ", _h('div', [_h('p', ["global"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["When is true, set global events for that spinner. Will be ignored if was set another global spinner."])]), " ", _h('div', [_h('p', ["size"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["sm"]), ", ", _h('code', ["md"]), ", ", _h('code', ["lg"]), ", ", _h('code', ["xl"])]), " ", _h('p', [_h('code', ["md"])]), " ", _h('p', ["The size of the spinner."])]), " ", _h('div', [_h('p', ["text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p', ["The text to show under the spinner."])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-56eb7d8b", module.exports)
	  }
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(264)
	
	/* template */
	var __vue_template__ = __webpack_require__(270)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/tabsDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fb543f5c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-fb543f5c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabsDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Tabs = __webpack_require__(195);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _TabGroup = __webpack_require__(265);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tab = __webpack_require__(192);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    docSection: _docSection2.default,
	    docTable: _docTable2.default,
	    docCode: _docCode2.default,
	    checkbox: _Checkbox2.default,
	    tabGroup: _TabGroup2.default,
	    tabs: _Tabs2.default,
	    tab: _Tab2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      justified: false,
	      navStyle: 'tabs'
	    };
	  },
	
	  watch: {
	    navStyle: function navStyle(val) {
	      if (val === 'stacked') {
	        this.justified = false;
	      }
	    }
	  }
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(266)
	
	/* script */
	__vue_exports__ = __webpack_require__(268)
	
	/* template */
	var __vue_template__ = __webpack_require__(269)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/TabGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0ed2d365", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0ed2d365", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TabGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(267);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0ed2d365!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0ed2d365!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content .tab-pane { display: none;\n}\n.tab-content .tab-pane.active { display: block;\n}\n", "", {"version":3,"sources":["/./src/TabGroup.vue?6002cbb3"],"names":[],"mappings":";AAkCA,yBAAA,cAAA;CAAA;AACA,gCAAA,eAAA;CAAA","file":"TabGroup.vue","sourcesContent":["<template><span><slot></slot></span></template>\n\n<script>\nexport default {\n  props: {\n    disabled: {type: Boolean, default: false},\n    header: {type: String}\n  },\n  data () {\n    return {\n      show: false,\n      tabs: []\n    }\n  },\n  computed: {\n    active () { return ~this.tabs.indexOf(this._tabs.show) }\n  },\n  methods: {\n    blur () { this.show = false },\n    toggle () { this.show = !this.show }\n  },\n  created () {\n    this._isTabGroup = true\n    if (this.$parent) {\n      if (this.$parent._isTabGroup) throw Error('Can\\'t nest tab-groups.')\n      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.')\n    }\n    this._tabs = this.$parent\n    this._tabs.headers.push(this)\n  }\n}\n</script>\n\n<style>\n.tab-content .tab-pane { display: none; }\n.tab-content .tab-pane.active { display: block; }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 268 */
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
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('span', [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0ed2d365", module.exports)
	  }
	}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "tabs",
	      "name": "Tabs"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('p', ["Style: ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.navStyle),
	      expression: "navStyle"
	    }],
	    attrs: {
	      "options": ['tabs', 'pills', 'stacked']
	    },
	    domProps: {
	      "value": (_vm.navStyle)
	    },
	    on: {
	      "input": function($event) {
	        _vm.navStyle = $event
	      }
	    }
	  })]), " ", (_vm.navStyle != 'stacked') ? _h('p', ["Justified: ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.justified),
	      expression: "justified"
	    }],
	    attrs: {
	      "options": [true, false]
	    },
	    domProps: {
	      "value": (_vm.justified)
	    },
	    on: {
	      "input": function($event) {
	        _vm.justified = $event
	      }
	    }
	  })]) : _vm._e(), " ", " ", _h('tabs', {
	    attrs: {
	      "nav-style": _vm.navStyle,
	      "justified": _vm.justified
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "zero"
	    }
	  }, [_h('p', ["\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        "])]), " ", _h('tab', {
	    attrs: {
	      "header": "one"
	    }
	  }, [_h('p', ["\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        "])]), " ", _h('tab', {
	    attrs: {
	      "header": "two",
	      "disabled": ""
	    }
	  }, ["\n        ...\n      "]), " ", _h('tab-group', {
	    attrs: {
	      "header": "group1"
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "three"
	    }
	  }, [_h('p', ["\n            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\n         "])]), " ", _h('tab', {
	    attrs: {
	      "header": "four",
	      "disabled": ""
	    }
	  }, ["\n          ...\n        "])]), " ", _h('tab-group', {
	    attrs: {
	      "header": "group2",
	      "disabled": ""
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "five"
	    }
	  }, ["\n          ...\n        "])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <tabs v-model=\"activeTab\" nav-style=\"tabs\" justified>\n      <tab header=\"zero\">\n        ...\n      </tab>\n      <tab header=\"one\">\n        ...\n      </tab>\n      <tab header=\"two\" disabled>\n        ...\n      </tab>\n      <tab-group header=\"group1\">\n        <tab header=\"three\">\n          ...\n        </tab>\n        <tab header=\"four\" disabled>\n          ...\n        </tab>\n      </tab-group>\n      <tab-group header=\"group2\">\n        <tab header=\"five\">\n          ...\n        </tab>\n      </tab-group>\n    </tabs>\n  "]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Tabs (container)"
	    }
	  }, [_h('div', [_h('p', ["value (v-model)"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p', ["Active tab index (0 based)"])]), " ", _h('div', [_h('p', ["justified"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Justify (", _h('code', ["tabs"]), " and ", _h('code', ["pills"]), ")."])]), " ", _h('div', [_h('p', ["nav-style"]), " ", _h('p', [_h('code', ["String"]), ". One of ", _h('code', ["tabs"]), ", ", _h('code', ["pills"]), ", ", _h('code', ["stacked"]), "."]), " ", _h('p', [_h('code', ["'tabs'"])]), " ", _h('p', ["Style for tabs"])])]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Tabs",
	      "type": "Events"
	    }
	  }, [_h('div', [_h('p', ["active / input"]), " ", _h('p', ["(", _h('code', ["Number"]), ")"]), " ", _h('p', ["Return the Active tab index (0 based)."])])]), " ", _h('doc-table', {
	    attrs: {
	      "name": "TabGroup & Tab"
	    }
	  }, [_h('div', [_h('p', ["disabled"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Option can't be selected."])]), " ", _h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Title"])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-fb543f5c", module.exports)
	  }
	}

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(272)
	
	/* template */
	var __vue_template__ = __webpack_require__(273)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/tooltipDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7c911175", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7c911175", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tooltipDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Input = __webpack_require__(187);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Tooltip = __webpack_require__(38);
	
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

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "tooltip",
	      "name": "***Tooltip"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_vm._l((['top', 'left', 'right', 'bottom']), function(place) {
	    return _h('tooltip', {
	      attrs: {
	        "header": "",
	        "content": "Lorem ipsum dolor sit amet",
	        "placement": place
	      }
	    }, [_h('button', {
	      staticClass: "btn btn-default"
	    }, ["Popover on " + _vm._s(place)])])
	  }), " ", _h('hr'), " ", _h('h4', ["Trigger"]), " ", _h('p', [_h('tooltip', {
	    attrs: {
	      "effect": "scale",
	      "content": "Lorem ipsum dolor sit amet",
	      "placement": "top",
	      "trigger": "click"
	    }
	  }, [_h('button', {
	    staticClass: "btn btn-default"
	  }, ["Click"])]), " ", _h('tooltip', {
	    attrs: {
	      "effect": "scale",
	      "content": "Lorem ipsum dolor sit amet",
	      "placement": "top",
	      "trigger": "contextmenu"
	    }
	  }, [_h('button', {
	    staticClass: "btn btn-default"
	  }, ["Contextmenu (right click)"])])]), " ", _h('tooltip', {
	    attrs: {
	      "effect": "scale",
	      "content": "Lorem ipsum dolor sit amet",
	      "placement": "bottom",
	      "trigger": "focus"
	    }
	  }, [_h('bs-input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "Focus"
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <tooltip effect=\"scale\" placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n      <button class=\"btn btn-default\">tooltip on bottom</button>\n    </tooltip>\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["trigger"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["click"]), " ", _h('code', ["focus"]), " ", _h('code', ["hover"]), " ", _h('code', ["contextmenu"])]), " ", _h('p', [_h('code', ["click"])]), " ", _h('p', ["How the tooltip is triggered."])]), " ", _h('div', [_h('p', ["effect"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["scale"]), " ", _h('code', ["fadein"])]), " ", _h('p', [_h('code', ["scale"])]), " ", _h('p'), " ", _h('div', [_h('p', ["content"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p')]), " ", _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["top"]), " ", _h('code', ["left"]), " ", _h('code', ["right"]), " ", _h('code', ["bottom"])]), " ", _h('p'), " ", _h('p', ["How to position the tooltip."])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7c911175", module.exports)
	  }
	}

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(275)
	
	/* template */
	var __vue_template__ = __webpack_require__(296)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/docs/example/typeaheadDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9108d70e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9108d70e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] typeaheadDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(5);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docTable = __webpack_require__(8);
	
	var _docTable2 = _interopRequireDefault(_docTable);
	
	var _docCode = __webpack_require__(9);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Typeahead = __webpack_require__(276);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Tooltip = __webpack_require__(38);
	
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
	  data: function data() {
	    return {
	      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	      asyncTemplate: '{{ item.formatted_address }}',
	      githubTemplate: '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(277)
	
	/* script */
	__vue_exports__ = __webpack_require__(279)
	
	/* template */
	var __vue_template__ = __webpack_require__(295)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mykyta/workspace/vue-strap/src/Typeahead.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3474645c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3474645c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Typeahead.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(278);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3474645c!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3474645c!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/Typeahead.vue?7dbdeb74"],"names":[],"mappings":";AAoIA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\n  <div style=\"position: relative\" :class=\"{'open':showDropdown}\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\"\n      v-model=\"val\"\n      :placeholder=\"placeholder\"\n      @blur=\"showDropdown = false\"\n      @keydown.down=\"down\"\n      @keydown.enter= \"hit\"\n      @keydown.esc=\"reset\"\n      @keydown.up=\"up\"\n    />\n    <ul class=\"dropdown-menu\" ref=\"dropdown\">\n      <li v-for=\"(item, i) in items\" :class=\"{'active': isActive(i)}\">\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive(i)\">\n          <component :is=\"tmpl\" :item=\"item\"></component>\n        </a>\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport {delayer, getJSON} from './utils/utils.js'\nvar DELAY = 300\n\nexport default {\n  props: {\n    async: {type: String},\n    data: {type: Array},\n    delay: {type: Number, default: DELAY},\n    asyncKey: {type: String, default: null},\n    limit: {type: Number, default: 8},\n    matchCase: {type: Boolean, default: false},\n    matchStart: {type: Boolean, default: false},\n    onHit: {\n      type: Function,\n      default (item) {\n        this.reset()\n        this.value = item\n      }\n    },\n    placeholder: {type: String},\n    template: {type: String},\n    value: {type: String, default: ''}\n  },\n  data () {\n    return {\n      showDropdown: false,\n      noResults: true,\n      current: 0,\n      items: [],\n      val: ''\n    }\n  },\n  computed: {\n    templateHtml () { return typeof this.template === 'string' ? '<span>' + this.template + '</span>' : null },\n    tmpl () { return this._tmpl}\n  },\n  watch: {\n    val (val, old) {\n      this.$emit('input', val)\n      if (val !== old) this._update()\n    },\n    value (val) {\n      if (this.val !== val) { this.val = val }\n    }\n  },\n  methods: {\n    setItems (data) {\n      if (this.async) {\n        this.items = this.asyncKey ? data[this.asyncKey] : data\n        this.items = this.items.slice(0, this.limit)\n      } else {\n        this.items = (data || []).filter(value => {\n          if (typeof value === 'object') { return true }\n          value = this.matchCase ? value : value.toLowerCase()\n          var query = this.matchCase ? this.val : this.val.toLowerCase()\n          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1\n        }).slice(0, this.limit)\n      }\n      this.showDropdown = this.items.length > 0\n    },\n    reset () {\n      this.items = []\n      this.val = ''\n      this.loading = false\n      this.showDropdown = false\n    },\n    setActive (index) {\n      this.current = index\n    },\n    isActive (index) {\n      return this.current === index\n    },\n    hit (e) {\n      e.preventDefault()\n      this.onHit(this.items[this.current], this)\n    },\n    up () {\n      if (this.current > 0) this.current--\n    },\n    down () {\n      if (this.current < this.items.length - 1) this.current++\n    }\n  },\n  created () {\n    this.val = this.value\n    this._tmpl = {\n      template: this.templateHtml || '<strong v-html=\"item\"></strong>',\n      props: {\n        item: {default: null}\n      }\n    }\n    this._update = delayer(function () {\n      if (!this.val) {\n        this.reset()\n        return false\n      }\n      if (this.async) {\n        getJSON(this.async + this.val).then(data => {\n          this.setItems(data)\n        })\n      } else if (this.data) {\n        this.setItems(this.data)\n      }\n    }, 'delay', DELAY)\n    this._update()\n  }\n}\n</script>\n\n<style>\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(280);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _utils = __webpack_require__(29);
	
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
	        this.reset();
	        this.value = item;
	      }
	    },
	    placeholder: { type: String },
	    template: { type: String },
	    value: { type: String, default: '' }
	  },
	  data: function data() {
	    return {
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: [],
	      val: ''
	    };
	  },
	
	  computed: {
	    templateHtml: function templateHtml() {
	      return typeof this.template === 'string' ? '<span>' + this.template + '</span>' : null;
	    },
	    tmpl: function tmpl() {
	      return this._tmpl;
	    }
	  },
	  watch: {
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	      if (_val !== old) this._update();
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
	    reset: function reset() {
	      this.items = [];
	      this.val = '';
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
	  created: function created() {
	    this.val = this.value;
	    this._tmpl = {
	      template: this.templateHtml || '<strong v-html="item"></strong>',
	      props: {
	        item: { default: null }
	      }
	    };
	    this._update = (0, _utils.delayer)(function () {
	      var _this2 = this;
	
	      if (!this.val) {
	        this.reset();
	        return false;
	      }
	      if (this.async) {
	        (0, _utils.getJSON)(this.async + this.val).then(function (data) {
	          _this2.setItems(data);
	        });
	      } else if (this.data) {
	        this.setItems(this.data);
	      }
	    }, 'delay', DELAY);
	    this._update();
	  }
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(62);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(281);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(282), __esModule: true };

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(283);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	module.exports = __webpack_require__(49).Symbol;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(48)
	  , has            = __webpack_require__(71)
	  , DESCRIPTORS    = __webpack_require__(57)
	  , $export        = __webpack_require__(47)
	  , redefine       = __webpack_require__(70)
	  , META           = __webpack_require__(284).KEY
	  , $fails         = __webpack_require__(58)
	  , shared         = __webpack_require__(85)
	  , setToStringTag = __webpack_require__(89)
	  , uid            = __webpack_require__(86)
	  , wks            = __webpack_require__(90)
	  , wksExt         = __webpack_require__(97)
	  , wksDefine      = __webpack_require__(285)
	  , keyOf          = __webpack_require__(286)
	  , enumKeys       = __webpack_require__(287)
	  , isArray        = __webpack_require__(290)
	  , anObject       = __webpack_require__(54)
	  , toIObject      = __webpack_require__(78)
	  , toPrimitive    = __webpack_require__(60)
	  , createDesc     = __webpack_require__(61)
	  , _create        = __webpack_require__(74)
	  , gOPNExt        = __webpack_require__(102)
	  , $GOPD          = __webpack_require__(291)
	  , $DP            = __webpack_require__(53)
	  , $keys          = __webpack_require__(76)
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
	  __webpack_require__(103).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(289).f  = $propertyIsEnumerable;
	  __webpack_require__(288).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(69)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(52)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(86)('meta')
	  , isObject = __webpack_require__(55)
	  , has      = __webpack_require__(71)
	  , setDesc  = __webpack_require__(53).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(58)(function(){
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
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(48)
	  , core           = __webpack_require__(49)
	  , LIBRARY        = __webpack_require__(69)
	  , wksExt         = __webpack_require__(97)
	  , defineProperty = __webpack_require__(53).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(76)
	  , toIObject = __webpack_require__(78);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(76)
	  , gOPS    = __webpack_require__(288)
	  , pIE     = __webpack_require__(289);
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
/* 288 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 289 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(80);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(289)
	  , createDesc     = __webpack_require__(61)
	  , toIObject      = __webpack_require__(78)
	  , toPrimitive    = __webpack_require__(60)
	  , has            = __webpack_require__(71)
	  , IE8_DOM_DEFINE = __webpack_require__(56)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(57) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 292 */
/***/ function(module, exports) {



/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285)('asyncIterator');

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285)('observable');

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    class: {
	      'open': _vm.showDropdown
	    },
	    staticStyle: {
	      "position": "relative"
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "autocomplete": "off",
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": _vm._s(_vm.val)
	    },
	    on: {
	      "blur": function($event) {
	        _vm.showDropdown = false
	      },
	      "keydown": [function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        _vm.down($event)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        _vm.hit($event)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        _vm.reset($event)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "up", 38)) { return; }
	        _vm.up($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }
	    }
	  }), " ", _h('ul', {
	    ref: "dropdown",
	    staticClass: "dropdown-menu"
	  }, [_vm._l((_vm.items), function(item, i) {
	    return _h('li', {
	      class: {
	        'active': _vm.isActive(i)
	      }
	    }, [_h('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.hit($event)
	        },
	        "mousemove": function($event) {
	          _vm.setActive(i)
	        }
	      }
	    }, [_h(_vm.tmpl, {
	      tag: "component",
	      attrs: {
	        "item": item
	      }
	    })])])
	  })])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3474645c", module.exports)
	  }
	}

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('doc-section', {
	    attrs: {
	      "id": "typeahead",
	      "name": "***Typeahead"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, ["\n    Typeahead failing.\n    "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <h4>Static arrays</h4>\n    <typeahead\n      :data=\"USstate\"\n      placeholder=\"USA states\">\n    </typeahead>\n\n    <h4>Asynchronous results</h4>\n      <typeahead\n        placeholder=\"Address, async via maps.googleapis.com\"\n        async-key=\"results\"\n        src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n        :template=\"asyncTemplate\"\n        :on-hit=\"googleCallback\">\n    </typeahead>\n\n    <h4>Custom templates for results</h4>\n      <typeahead\n        placeholder=\"Github users, async via api.github.com\"\n        async-key=\"items\"\n        src=\"https://api.github.com/search/users?q=\"\n        :template=\"githubTemplate\"\n        :on-hit=\"githubCallback\">\n    </typeahead>\n  "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n    new Vue {\n      components: {\n        typeahead\n      },\n      data() {\n        return {\n          USstate: ['Alabama', 'Alaska', 'Arizona',...],\n          asynchronous: '" + _vm._s('{{') + "item.formatted_address}}',\n          customTemplate: '<img width=\"18px\" height=\"18px\" :src=\"avatar_url\"/><span>" + _vm._s('{{') + "item.login}}</span>'\n        }\n      },\n      methods: {\n        googleCallback(items, targetVM) {\n          const that = targetVM;\n          that.reset()\n          that.value = items.formatted_address\n        },\n        githubCallback(items) {\n          window.open(items.html_url, '_blank')\n        }\n      }\n    }\n  "]), " ", _h('doc-table', [_h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p')]), " ", _h('div', [_h('p', ["data"]), " ", _h('p', [_h('code', ["Array"])]), " ", _h('p'), " ", _h('p', ["The local data source for suggestions. Expected to be a primitive array."])]), " ", _h('div', [_h('p', ["async"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["An HTTP URL for asynchronous suggestions. Expected to return a JSON object."])]), " ", _h('div', [_h('p', ["async-key"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array)."])]), " ", _h('div', [_h('p', ["limit"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["8"])]), " ", _h('p', ["The max number of suggestions to be displayed."])]), " ", _h('div', [_h('p', ["match-case"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Case sensitive for suggestions."])]), " ", _h('div', [_h('p', ["match-start"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Match only against start of suggestions. E.g. if true, \"a\" matches \"ab\" but not \"ba\"."])]), " ", _h('div', [_h('p', ["on-hit"]), " ", _h('p', [_h('code', ["Function"])]), " ", _h('p'), " ", _h('p', ["A callback function when you click or hit return on an item."])]), " ", _h('div', [_h('p', ["template"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["<span v-html=\"item\"></span>"])]), " ", _h('p', ["Used to render every suggestion. Handler:", _h('code', ["item"]), ". The item can be whatever (e.g. ", _h('code', ["string"]), "/", _h('code', ["array"]), "/", _h('code', ["object"]), ")"])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9108d70e", module.exports)
	  }
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [(_vm.local) ? _h('link', {
	    attrs: {
	      "rel": "stylesheet",
	      "type": "text/css",
	      "href": "node_modules/bootstrap/dist/css/bootstrap.css"
	    }
	  }) : _h('link', {
	    attrs: {
	      "href": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
	      "rel": "stylesheet",
	      "integrity": "sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==",
	      "crossorigin": "anonymous"
	    }
	  }), " ", " ", _h('div', {
	    attrs: {
	      "id": "wrapper"
	    }
	  }, [_vm._m(0), " ", _h('div', {
	    staticClass: "container bs-docs-container"
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-md-9"
	  }, [_h('getting-started'), " ", _h('accordion-docs'), " ", _h('affix-docs'), " ", _h('alert-docs'), " ", _h('aside-docs'), " ", _h('button-group-docs'), " ", _h('carousel-docs'), " ", _h('checkbox-docs'), " ", _h('datepicker-docs'), " ", _h('dropdown-docs'), " ", _h('input-docs'), " ", _h('modal-docs'), " ", _h('navbar-docs'), " ", _h('popover-docs'), " ", _h('progressbar-docs'), " ", _h('radio-docs'), " ", _h('select-docs'), " ", _h('spinner-docs'), " ", _h('tabs-docs'), " ", _h('tooltip-docs'), " ", _h('typeahead-docs'), " ", _h('form-group-docs'), " ", _h('form-validator-docs')]), " ", _h('div', {
	    staticClass: "col-md-3"
	  }, [_h('affix-sidebar')])])])]), " ", _vm._m(1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "bs-docs-header"
	  }, [_h('div', {
	    staticClass: "container"
	  }, [_h('h1', ["VueStrap"]), " ", _h('p', ["Bootstrap components built with ", _h('a', {
	    attrs: {
	      "target": "_blank",
	      "href": "http://vuejs.org/"
	    }
	  }, ["Vue.js"]), "."]), " ", _h('p', ["No jQuery, bootstrap.js, or any 3rd party plugins required."]), " ", _h('br'), " ", _h('p', [_h('a', {
	    staticClass: "btn btn-outline-inverse btn-lg",
	    attrs: {
	      "href": "https://github.com/yuche/vue-strap"
	    }
	  }, ["Code on GitHub"])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('footer', {
	    staticClass: "bs-docs-footer"
	  }, [_h('div', {
	    staticClass: "container"
	  }, [_h('p', ["Designed and built by ", _h('a', {
	    attrs: {
	      "href": "https://github.com/yuche/"
	    }
	  }, ["yuche"]), "."]), " ", _h('p', ["\n        Using ", _h('a', {
	    attrs: {
	      "href": "http://twitter.github.com/bootstrap",
	      "target": "_blank"
	    }
	  }, ["Twitter Bootstrap"]), "\n        and the ", _h('a', {
	    attrs: {
	      "href": "css/docs.css",
	      "target": "_blank"
	    }
	  }, ["Bootstrap's docs styles"]), " designed and built by ", _h('a', {
	    attrs: {
	      "href": "http://twitter.com/mdo",
	      "target": "_blank"
	    }
	  }, ["@mdo"]), "\n        and ", _h('a', {
	    attrs: {
	      "href": "http://twitter.com/fat",
	      "target": "_blank"
	    }
	  }, ["@fat"]), ".\n      "]), " ", _h('p', ["\n        Code licensed under ", _h('a', {
	    attrs: {
	      "href": "//github.com/mgcrea/angular-strap/blob/master/LICENSE.md",
	      "target": "_blank"
	    }
	  }, ["The MIT License"]), ",\n        documentation under ", _h('a', {
	    attrs: {
	      "href": "http://creativecommons.org/licenses/by/3.0/"
	    }
	  }, ["CC BY 3.0"]), ".\n      "])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-fcc83c1e", module.exports)
	  }
	}

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(299);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(300)(content, {});
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
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */\n\n\n/*\n * Bootstrap Documentation\n * Special styles for presenting Bootstrap's documentation and code examples.\n *\n * Table of contents:\n *\n * Scaffolding\n * Main navigation\n * Footer\n * Social buttons\n * Homepage\n * Page headers\n * Old docs callout\n * Ads\n * Side navigation\n * Docs sections\n * Callouts\n * Grid styles\n * Examples\n * Code snippets (highlight)\n * Responsive tests\n * Glyphicons\n * Customizer\n * MenuItem\n * Miscellaneous\n */\n\n\n/*\n * Scaffolding\n *\n * Update the basics of our documents to prep for docs content.\n */\n\nbody {\n  position: relative; /* For scrollspy */\n}\n\n/* Keep code small in tables on account of limited space */\n.table code {\n  font-size: 13px;\n  font-weight: normal;\n}\n\n/* Outline button for use within the docs */\n.btn-outline {\n  color: #563d7c;\n  background-color: transparent;\n  border-color: #563d7c;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n/* Inverted outline button (white on dark) */\n.btn-outline-inverse {\n  color: #fff;\n  background-color: transparent;\n  border-color: #cdbfe3;\n}\n.btn-outline-inverse:hover,\n.btn-outline-inverse:focus,\n.btn-outline-inverse:active {\n  color: #563d7c;\n  text-shadow: none;\n  background-color: #fff;\n  border-color: #fff;\n}\n\n/* Bootstrap \"B\" icon */\n.bs-docs-booticon {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  cursor: default;\n  background-color: #563d7c;\n  border-radius: 15%;\n}\n.bs-docs-booticon-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 28px;\n}\n.bs-docs-booticon-lg {\n  width: 144px;\n  height: 144px;\n  font-size: 108px;\n  line-height: 140px;\n}\n.bs-docs-booticon-inverse {\n  color: #563d7c;\n  background-color: #fff;\n}\n.bs-docs-booticon-outline {\n  background-color: transparent;\n  border: 1px solid #cdbfe3;\n}\n\n\n/*\n * Main navigation\n *\n * Turn the `.navbar` at the top of the docs purple.\n */\n\n.bs-docs-nav {\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0;\n}\n.bs-home-nav .bs-nav-b {\n  display: none;\n}\n.bs-docs-nav .navbar-brand,\n.bs-docs-nav .navbar-nav > li > a {\n  font-weight: 500;\n  color: #563d7c;\n}\n.bs-docs-nav .navbar-nav > li > a:hover,\n.bs-docs-nav .navbar-nav > .active > a,\n.bs-docs-nav .navbar-nav > .active > a:hover {\n  color: #463265;\n  background-color: #f9f9f9;\n}\n.bs-docs-nav .navbar-toggle .icon-bar {\n  background-color: #563d7c;\n}\n.bs-docs-nav .navbar-header .navbar-toggle {\n  border-color: #fff;\n}\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\n  background-color: #f9f9f9;\n  border-color: #f9f9f9;\n}\n\n\n/*\n * Footer\n *\n * Separated section of content at the bottom of all pages, save the homepage.\n */\n\n.bs-docs-footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 100px;\n  color: #777;\n  text-align: center;\n  border-top: 1px solid #e5e5e5;\n}\n.bs-docs-footer-links {\n  padding-left: 0;\n  margin-top: 20px;\n  color: #999;\n}\n.bs-docs-footer-links li {\n  display: inline;\n  padding: 0 2px;\n}\n.bs-docs-footer-links li:first-child {\n  padding-left: 0;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-footer p {\n    margin-bottom: 0;\n  }\n}\n\n\n/*\n * Social buttons\n *\n * Twitter and GitHub social action buttons (for homepage and footer).\n */\n\n.bs-docs-social {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.bs-docs-social-buttons {\n  display: inline-block;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bs-docs-social-buttons li {\n  display: inline-block;\n  padding: 5px 8px;\n  line-height: 1;\n}\n.bs-docs-social-buttons .twitter-follow-button {\n  width: 225px !important;\n}\n.bs-docs-social-buttons .twitter-share-button {\n  width: 98px !important;\n}\n/* Style the GitHub buttons via CSS instead of inline attributes */\n.github-btn {\n  overflow: hidden;\n  border: 0;\n}\n\n\n/*\n * Homepage\n *\n * Tweaks to the custom homepage and the masthead (main jumbotron).\n */\n\n/* Share masthead with page headers */\n.bs-docs-masthead,\n.bs-docs-header {\n  position: relative;\n  padding: 30px 15px;\n  color: #cdbfe3;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\n  background-color: #6f5499;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\n  background-repeat: repeat-x;\n}\n\n/* Masthead (headings and download button) */\n.bs-docs-masthead .bs-docs-booticon {\n  margin: 0 auto 30px;\n}\n.bs-docs-masthead h1 {\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n}\n.bs-docs-masthead .lead {\n  margin: 0 auto 30px;\n  font-size: 20px;\n  color: #fff;\n}\n.bs-docs-masthead .version {\n  margin-top: -15px;\n  margin-bottom: 30px;\n  color: #9783b9;\n}\n.bs-docs-masthead .btn {\n  width: 100%;\n  padding: 15px 30px;\n  font-size: 20px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-masthead .btn {\n    width: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .bs-docs-masthead h1 {\n    font-size: 60px;\n  }\n  .bs-docs-masthead .lead {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-masthead .lead {\n    width: 80%;\n    font-size: 30px;\n  }\n}\n\n\n/*\n * Page headers\n *\n * Jumbotron-esque headers at the top of every page that's not the homepage.\n */\n\n/* Page headers */\n.bs-docs-header {\n  margin-bottom: 40px;\n  font-size: 20px;\n}\n.bs-docs-header h1 {\n  margin-top: 0;\n  color: #fff;\n}\n.bs-docs-header p {\n  margin-bottom: 0;\n  font-weight: 300;\n  line-height: 1.4;\n}\n.bs-docs-header .container {\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-header {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    font-size: 24px;\n    text-align: left;\n  }\n  .bs-docs-header h1 {\n    font-size: 60px;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-header h1,\n  .bs-docs-header p {\n    margin-right: 380px;\n  }\n}\n\n\n/*\n * Carbon ads\n *\n * Single display ad that shows on all pages (except homepage) in page headers.\n * The hella `!important` is required for any pre-set property.\n */\n\n.carbonad {\n  width: auto !important;\n  height: auto !important;\n  padding: 20px !important;\n  margin: 30px -30px -31px !important;\n  overflow: hidden; /* clearfix */\n  font-size: 13px !important;\n  line-height: 16px !important;\n  text-align: left;\n  background: transparent !important;\n  border: solid #866ab3 !important;\n  border-width: 1px 0 !important;\n}\n.carbonad-img {\n  margin: 0 !important;\n}\n.carbonad-text,\n.carbonad-tag {\n  display: block !important;\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: 145px !important;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n.carbonad-text {\n  padding-top: 0 !important;\n}\n.carbonad-tag {\n  color: inherit !important;\n  text-align: left !important;\n}\n.carbonad-text a,\n.carbonad-tag a {\n  color: #fff !important;\n}\n.carbonad #azcarbon > img {\n  display: none; /* hide what I assume are tracking images */\n}\n\n@media (min-width: 480px) {\n  .carbonad {\n    width: 330px !important;\n    margin: 20px auto !important;\n    border-width: 1px !important;\n    border-radius: 4px;\n  }\n  .bs-docs-masthead .carbonad {\n    margin: 50px auto 0 !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .carbonad {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .carbonad {\n    position: absolute;\n    top: 0;\n    right: 15px; /* 15px instead of 0 since box-sizing */\n    width: 330px !important;\n    padding: 15px !important;\n    margin: 0 !important;\n  }\n  .bs-docs-masthead .carbonad {\n    position: static;\n  }\n}\n\n\n/*\n * Homepage featurettes\n *\n * Reasons to use Bootstrap, entries from the Expo, and more.\n */\n\n.bs-docs-featurette {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #555;\n  text-align: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n}\n.bs-docs-featurette + .bs-docs-footer {\n  margin-top: 0;\n  border-top: 0;\n}\n\n.bs-docs-featurette-title {\n  margin-bottom: 5px;\n  font-size: 30px;\n  font-weight: normal;\n  color: #333;\n}\n.half-rule {\n  width: 100px;\n  margin: 40px auto;\n}\n.bs-docs-featurette h3 {\n  margin-bottom: 5px;\n  font-weight: normal;\n  color: #333;\n}\n.bs-docs-featurette-img {\n  display: block;\n  margin-bottom: 20px;\n  color: #333;\n}\n.bs-docs-featurette-img:hover {\n  color: #428bca;\n  text-decoration: none;\n}\n.bs-docs-featurette-img img {\n  display: block;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-featurette .img-responsive {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .bs-docs-featurette {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n  .bs-docs-featurette-title {\n    font-size: 40px;\n  }\n  .bs-docs-featurette .lead {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .bs-docs-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .bs-docs-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n\n  .bs-docs-featurette .img-responsive {\n    margin-top: 0;\n  }\n}\n\n/* Featured sites */\n.bs-docs-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px;\n}\n.bs-docs-featured-sites .col-sm-3 {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n.bs-docs-featured-sites .img-responsive {\n  margin-bottom: 15px;\n}\n@media (min-width: 480px) {\n  .bs-docs-featured-sites .img-responsive {\n    margin-bottom: 0;\n  }\n}\n\n/* Example thumbnails */\n@media (max-width: 480px) {\n  .bs-examples {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n  .bs-examples > [class^=\"col-\"] {\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n}\n\n\n/*\n * Side navigation\n *\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\n * sections of docs content.\n */\n\n/* By default it's not affixed in mobile views, so undo that */\n.bs-docs-sidebar.affix {\n  position: static;\n}\n@media (min-width: 768px) {\n  .bs-docs-sidebar {\n    padding-left: 20px;\n  }\n}\n\n/* First level of nav */\n.bs-docs-sidenav {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n/* All levels of nav */\n.bs-docs-sidebar .nav > li > a {\n  display: block;\n  padding: 4px 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #999;\n}\n.bs-docs-sidebar .nav > li > a:hover,\n.bs-docs-sidebar .nav > li > a:focus {\n  padding-left: 19px;\n  color: #1D976C;\n  text-decoration: none;\n  background-color: transparent;\n  border-left: 1px solid #1D976C;\n}\n.bs-docs-sidebar .nav > .active > a,\n.bs-docs-sidebar .nav > .active:hover > a,\n.bs-docs-sidebar .nav > .active:focus > a {\n  padding-left: 18px;\n  font-weight: bold;\n  color: #1D976C;\n  background-color: transparent;\n  border-left: 2px solid #1D976C;\n}\n\n/* Nav: second level (shown on .active) */\n.bs-docs-sidebar .nav .nav {\n  display: none; /* Hide by default, but at >768px, show it */\n  padding-bottom: 10px;\n}\n.bs-docs-sidebar .nav .nav > li > a {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 30px;\n  font-size: 12px;\n  font-weight: normal;\n}\n.bs-docs-sidebar .nav .nav > li > a:hover,\n.bs-docs-sidebar .nav .nav > li > a:focus {\n  padding-left: 29px;\n}\n.bs-docs-sidebar .nav .nav > .active > a,\n.bs-docs-sidebar .nav .nav > .active:hover > a,\n.bs-docs-sidebar .nav .nav > .active:focus > a {\n  padding-left: 28px;\n  font-weight: 500;\n}\n\n/* Back to top (hidden on mobile) */\n.back-to-top,\n.bs-docs-theme-toggle {\n  display: none;\n  padding: 4px 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #999;\n}\n.back-to-top:hover,\n.bs-docs-theme-toggle:hover {\n  color: #563d7c;\n  text-decoration: none;\n}\n.bs-docs-theme-toggle {\n  margin-top: 0;\n}\n\n@media (min-width: 768px) {\n  .back-to-top,\n  .bs-docs-theme-toggle {\n    display: block;\n  }\n}\n\n/* Show and affix the side nav when space allows it */\n@media (min-width: 992px) {\n  .bs-docs-sidebar .nav > .active > ul {\n    display: block;\n  }\n  /* Widen the fixed sidebar */\n  .bs-docs-sidebar.affix,\n  .bs-docs-sidebar.affix-bottom {\n    width: 213px;\n  }\n  .bs-docs-sidebar.affix {\n    position: fixed; /* Undo the static from mobile first approach */\n    top: 20px;\n  }\n  .bs-docs-sidebar.affix-bottom {\n    position: absolute; /* Undo the static from mobile first approach */\n  }\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  /* Widen the fixed sidebar again */\n  .bs-docs-sidebar.affix-bottom,\n  .bs-docs-sidebar.affix {\n    width: 263px;\n  }\n}\n\n\n/*\n * Docs sections\n *\n * Content blocks for each component or feature.\n */\n\n/* Space things out */\n.bs-docs-section {\n  margin-bottom: 60px;\n}\n.bs-docs-section:last-child {\n  margin-bottom: 0;\n}\n\nh1[id] {\n  padding-top: 20px;\n  margin-top: 0;\n}\n\n\n/*\n * Callouts\n *\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\n * Requires a base and modifier class.\n */\n\n/* Common styles for all types */\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n}\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n  margin-bottom: 0;\n}\n.bs-callout code {\n  border-radius: 3px;\n}\n\n/* Tighten up space between multiple callouts */\n.bs-callout + .bs-callout {\n  margin-top: -5px;\n}\n\n/* Variations */\n.bs-callout-danger {\n  border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n  color: #d9534f;\n}\n.bs-callout-warning {\n  border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n  color: #f0ad4e;\n}\n.bs-callout-info {\n  border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n  color: #5bc0de;\n}\n\n\n/*\n * Color swatches\n *\n * Color swatches and associated values for our grayscale and brand colors.\n */\n\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden; /* clearfix */\n}\n.color-swatch {\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin: 0 5px;\n  border-radius: 3px;\n}\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n/* Framework colors */\n.color-swatches .gray-darker {\n  background-color: #222;\n}\n.color-swatches .gray-dark {\n  background-color: #333;\n}\n.color-swatches .gray {\n  background-color: #555;\n}\n.color-swatches .gray-light {\n  background-color: #999;\n}\n.color-swatches .gray-lighter {\n  background-color: #eee;\n}\n.color-swatches .brand-primary {\n  background-color: #428bca;\n}\n.color-swatches .brand-success {\n  background-color: #5cb85c;\n}\n.color-swatches .brand-warning {\n  background-color: #f0ad4e;\n}\n.color-swatches .brand-danger {\n  background-color: #d9534f;\n}\n.color-swatches .brand-info {\n  background-color: #5bc0de;\n}\n\n/* Docs colors */\n.color-swatches .bs-purple {\n  background-color: #563d7c;\n}\n.color-swatches .bs-purple-light {\n  background-color: #c7bfd3;\n}\n.color-swatches .bs-purple-lighter {\n  background-color: #e5e1ea;\n}\n.color-swatches .bs-gray {\n  background-color: #f9f9f9;\n}\n\n\n/*\n * Team members\n *\n * Avatars, names, and usernames for core team.\n */\n\n.bs-team .team-member {\n  line-height: 32px;\n  color: #555;\n}\n.bs-team .team-member:hover {\n  color: #333;\n  text-decoration: none;\n}\n.bs-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 20px;\n  margin-top: 6px;\n}\n.bs-team img {\n  float: left;\n  width: 32px;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n\n\n/*\n * Grid examples\n *\n * Highlight the grid columns within the docs so folks can see their padding,\n * alignment, sizing, etc.\n */\n\n.show-grid {\n  margin-bottom: 15px;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #eee;\n  background-color: rgba(86,61,124,.15);\n  border: 1px solid #ddd;\n  border: 1px solid rgba(86,61,124,.2);\n}\n\n\n/*\n * Examples\n *\n * Isolated sections of example content for each component or feature. Usually\n * followed by a code snippet.\n */\n\n.bs-example {\n  position: relative;\n  padding: 45px 15px 15px;\n  margin: 0 -15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n}\n/* Echo out a label for the example */\n.bs-example:after {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #959595;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  content: \"Example\";\n}\n\n/* Tweak display of the code snippets when following an example */\n.bs-example + .highlight {\n  margin: -15px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n\n/* Make the examples and snippets not full-width */\n@media (min-width: 768px) {\n  .bs-example {\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #fff;\n    border-color: #ddd;\n    border-width: 1px;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .bs-example + .highlight {\n    margin-top: -16px;\n    margin-right: 0;\n    margin-left: 0;\n    border-width: 1px;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n}\n\n/* Undo width of container */\n.bs-example .container {\n  width: auto;\n}\n\n/* Tweak content of examples for optimum awesome */\n.bs-example > p:last-child,\n.bs-example > ul:last-child,\n.bs-example > ol:last-child,\n.bs-example > blockquote:last-child,\n.bs-example > .form-control:last-child,\n.bs-example > .table:last-child,\n.bs-example > .navbar:last-child,\n.bs-example > .jumbotron:last-child,\n.bs-example > .alert:last-child,\n.bs-example > .panel:last-child,\n.bs-example > .list-group:last-child,\n.bs-example > .well:last-child,\n.bs-example > .progress:last-child,\n.bs-example > .table-responsive:last-child > .table {\n  margin-bottom: 0;\n}\n.bs-example > p > .close {\n  float: none;\n}\n\n/* Typography */\n.bs-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle;\n}\n.bs-example-type .table td {\n  padding: 15px 0;\n  border-color: #eee;\n}\n.bs-example-type .table tr:first-child td {\n  border-top: 0;\n}\n.bs-example-type h1,\n.bs-example-type h2,\n.bs-example-type h3,\n.bs-example-type h4,\n.bs-example-type h5,\n.bs-example-type h6 {\n  margin: 0;\n}\n\n/* Contextual background colors */\n.bs-example-bg-classes p {\n  padding: 15px;\n}\n\n/* Images */\n.bs-example > .img-circle,\n.bs-example > .img-rounded,\n.bs-example > .img-thumbnail {\n  margin: 5px;\n}\n\n/* Tables */\n.bs-example > .table-responsive > .table {\n  background-color: #fff;\n}\n\n/* Buttons */\n.bs-example > .btn,\n.bs-example > .btn-group {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.bs-example > .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n/* Forms */\n.bs-example-control-sizing select,\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\n  margin-top: 10px;\n}\n.bs-example-form .input-group {\n  margin-bottom: 10px;\n}\n.bs-example > textarea.form-control {\n  resize: vertical;\n}\n\n/* List groups */\n.bs-example > .list-group {\n  max-width: 400px;\n}\n\n/* Navbars */\n.bs-example .navbar:last-child {\n  margin-bottom: 0;\n}\n.bs-navbar-top-example,\n.bs-navbar-bottom-example {\n  z-index: 1;\n  padding: 0;\n  overflow: hidden; /* cut the drop shadows off */\n}\n.bs-navbar-top-example .navbar-header,\n.bs-navbar-bottom-example .navbar-header {\n  margin-left: 0;\n}\n.bs-navbar-top-example .navbar-fixed-top,\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0;\n}\n.bs-navbar-top-example {\n  padding-bottom: 45px;\n}\n.bs-navbar-top-example:after {\n  top: auto;\n  bottom: 15px;\n}\n.bs-navbar-top-example .navbar-fixed-top {\n  top: -1px;\n}\n.bs-navbar-bottom-example {\n  padding-top: 45px;\n}\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  bottom: -1px;\n}\n.bs-navbar-bottom-example .navbar {\n  margin-bottom: 0;\n}\n@media (min-width: 768px) {\n  .bs-navbar-top-example .navbar-fixed-top,\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\n    position: absolute;\n  }\n}\n\n/* Pagination */\n.bs-example .pagination {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/* Pager */\n.bs-example > .pager {\n  margin-top: 0;\n}\n\n/* Example modals */\n.bs-example-modal {\n  background-color: #f5f5f5;\n}\n.bs-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block;\n}\n.bs-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n.custom-modal {\n  width: 90%;\n}\n\n/* Example dropdowns */\n.bs-example > .dropdown > .dropdown-toggle {\n  float: left;\n}\n.bs-example > .dropdown > .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n/* Example tabbable tabs */\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px;\n}\n\n/* Tooltips */\n.bs-example-tooltips {\n  text-align: center;\n}\n.bs-example-tooltips > .btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/* Popovers */\n.bs-example-popover {\n  padding-bottom: 24px;\n  background-color: #f9f9f9;\n}\n.bs-example-popover .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 20px;\n}\n\n/* Scrollspy demo on fixed height div */\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: 10px;\n  overflow: auto;\n}\n\n/* MenuItem */\n.bs-example .dropdown-menu.open {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n\n/*\n * Code snippets\n *\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\n */\n\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  word-break: normal;\n  word-wrap: nowrap;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.highlight pre code {\n  font-size: inherit;\n  color: #333; /* Effectively the base text color */\n}\n.highlight pre code:first-child {\n  display: inline-block;\n  padding-right: 45px;\n}\n\n\n/*\n * Responsive tests\n *\n * Generate a set of tests to show the responsive utilities in action.\n */\n\n/* Responsive (scrollable) doc tables */\n.table-responsive .highlight pre {\n  white-space: normal;\n}\n\n/* Utility classes table  */\n.bs-table th small,\n.responsive-utilities th small {\n  display: block;\n  font-weight: normal;\n  color: #999;\n}\n.responsive-utilities tbody th {\n  font-weight: normal;\n}\n.responsive-utilities td {\n  text-align: center;\n}\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8 !important;\n}\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9 !important;\n}\n\n/* Responsive tests */\n.responsive-utilities-test {\n  margin-top: 5px;\n}\n.responsive-utilities-test .col-xs-6 {\n  margin-bottom: 10px;\n}\n.responsive-utilities-test span {\n  display: block;\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.1;\n  text-align: center;\n  border-radius: 4px;\n}\n.visible-on .col-xs-6 .hidden-xs,\n.visible-on .col-xs-6 .hidden-sm,\n.visible-on .col-xs-6 .hidden-md,\n.visible-on .col-xs-6 .hidden-lg,\n.hidden-on .col-xs-6 .hidden-xs,\n.hidden-on .col-xs-6 .hidden-sm,\n.hidden-on .col-xs-6 .hidden-md,\n.hidden-on .col-xs-6 .hidden-lg {\n  color: #999;\n  border: 1px solid #ddd;\n}\n.visible-on .col-xs-6 .visible-xs-block,\n.visible-on .col-xs-6 .visible-sm-block,\n.visible-on .col-xs-6 .visible-md-block,\n.visible-on .col-xs-6 .visible-lg-block,\n.hidden-on .col-xs-6 .visible-xs-block,\n.hidden-on .col-xs-6 .visible-sm-block,\n.hidden-on .col-xs-6 .visible-md-block,\n.hidden-on .col-xs-6 .visible-lg-block {\n  color: #468847;\n  background-color: #dff0d8;\n  border: 1px solid #d6e9c6;\n}\n\n\n/*\n * Glyphicons\n *\n * Special styles for displaying the icons and their classes in the docs.\n */\n\n.bs-glyphicons {\n  margin: 0 -10px 20px;\n  overflow: hidden;\n}\n.bs-glyphicons-list {\n  padding-left: 0;\n  list-style: none;\n}\n.bs-glyphicons li {\n  float: left;\n  width: 25%;\n  height: 115px;\n  padding: 10px;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff;\n}\n.bs-glyphicons .glyphicon {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.bs-glyphicons .glyphicon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word; /* Help out IE10+ with class names */\n}\n.bs-glyphicons li:hover {\n  color: #fff;\n  background-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .bs-glyphicons {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .bs-glyphicons li {\n    width: 12.5%;\n    font-size: 12px;\n  }\n}\n\n\n/*\n * Customizer\n *\n * Since this is so form control heavy, we have quite a few styles to customize\n * the display of inputs, headings, and more. Also included are all the download\n * buttons and actions.\n */\n\n.bs-customizer .toggle {\n  float: right;\n  margin-top: 25px;\n}\n\n/* Headings and form contrls */\n.bs-customizer label {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #555;\n}\n.bs-customizer h2 {\n  padding-top: 30px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-customizer h3 {\n  margin-bottom: 0;\n}\n.bs-customizer h4 {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.bs-customizer .bs-callout h4 {\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\n  margin-bottom: 5px;\n}\n.bs-customizer input[type=\"text\"] {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  background-color: #fafafa;\n}\n.bs-customizer .help-block {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n/* For the variables, use regular weight */\n#less-section label {\n  font-weight: normal;\n}\n\n.bs-customizer-input {\n  float: left;\n  width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/* Downloads */\n.bs-customize-download .btn-outline {\n  padding: 20px;\n}\n\n/* Error handling */\n.bs-customizer-alert {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  padding: 15px 0;\n  color: #fff;\n  background-color: #d9534f;\n  border-bottom: 1px solid #b94441;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n}\n.bs-customizer-alert .close {\n  margin-top: -4px;\n  font-size: 24px;\n}\n.bs-customizer-alert p {\n  margin-bottom: 0;\n}\n.bs-customizer-alert .glyphicon {\n  margin-right: 5px;\n}\n.bs-customizer-alert pre {\n  margin: 10px 0 0;\n  color: #fff;\n  background-color: #a83c3a;\n  border-color: #973634;\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n}\n\n\n/*\n * Brand guidelines\n *\n * Extra styles for displaying wordmarks, logos, etc.\n */\n\n/* Logo series wrapper */\n.bs-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 15px;\n  overflow: hidden;\n  color: #563d7c;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\n\n/* Individual items */\n.bs-brand-item {\n  padding: 60px 0;\n  text-align: center;\n}\n.bs-brand-item + .bs-brand-item {\n  border-top: 1px solid #fff;\n}\n.bs-brand-logos .inverse {\n  color: #fff;\n  background-color: #563d7c;\n}\n.bs-brand-item .svg {\n  width: 144px;\n  height: 144px;\n}\n\n/* Heading content within */\n.bs-brand-item h1,\n.bs-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bs-brand-item .bs-docs-booticon {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Make the icons stand out on what is/isn't okay */\n.bs-brand-item .glyphicon {\n  width: 30px;\n  height: 30px;\n  margin: 10px auto -10px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%;\n}\n.bs-brand-item .glyphicon-ok {\n  background-color: #5cb85c;\n}\n.bs-brand-item .glyphicon-remove {\n  background-color: #d9534f;\n}\n\n@media (min-width: 768px) {\n  .bs-brand-item {\n    display: table-cell;\n    width: 1%;\n  }\n  .bs-brand-item + .bs-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff;\n  }\n  .bs-brand-item h1 {\n    font-size: 60px;\n  }\n}\n\n\n/*\n * Miscellaneous\n *\n * Odds and ends for optimum docs display.\n */\n\n/* Examples gallery: space out content better */\n.bs-examples .thumbnail {\n  margin-bottom: 10px;\n}\n.bs-examples h4 {\n  margin-bottom: 5px;\n}\n.bs-examples p {\n  margin-bottom: 20px;\n}\n\n/* Pseudo :focus state for showing how it looks in the docs */\n#focusedInput {\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\n  border-color: rgba(82,168,236,.8);\n  outline: 0;\n  outline: thin dotted \\9; /* IE6-9 */\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\n}\n\n\n/*\n * ZeroClipboard styles\n */\n\n.zero-clipboard {\n  position: relative;\n  display: none;\n}\n.btn-clipboard {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  display: block;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #e1e1e8;\n  border-radius: 0 4px 0 4px;\n}\n.btn-clipboard-hover {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .zero-clipboard {\n    display: block;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 300 */
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
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(302);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(300)(content, {});
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
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * React-Bootstrap Documentation\n * Special styles for presenting react-bootstrap's documentation and code examples.\n * Based on the Bootstrap Documentation styles and overridden as necessary.\n */\n\nbody {\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\n}\n\n.bs-docs-section h1 {\n  font-size: 42px\n}\n\n.bs-docs-nav .navbar-nav > li > a {\n  color: #333;\n}\n.bs-docs-footer {\n  padding-top: 20px;\n  text-align: left;\n}\n.bs-docs-nav .navbar-collapse {\n  overflow: hidden;\n}\n.bs-docs-nav {\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\n}\n\n.bs-docs-header p {\n  font-weight: lighter;\n}\n\n\n.bs-docs-header a {\n  color: white;\n  font-weight: normal;\n}\n.btn-outline-inverse {\n  border-color: white;\n  transition: color .15s ease;\n}\n.bs-docs-header a:hover,\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\n.bs-docs-nav .navbar-brand {\n  color: #1D976C;\n}\n\n.bs-docs-masthead, .bs-docs-header {\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\n\n  filter: none;\n  color: #e9e9e9;\n}\n\n.bs-docs-masthead {\n  margin-bottom: 20px;\n}\n\n.bs-docs-header h1 {\n  color: #ffffff;\n}\n\n.bs-docs-header p {\n  color: #ffffff;\n}\n\na.back-to-top {\n  font-size: 13px;\n  margin-top: 0;\n}\n\n.bs-docs-sidebar .nav>li>a {\n  color: #767676;\n  font-size: 14px;\n}\n\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\n  color: #42b983;\n  border-left: 1px solid #42b983;\n}\n\n.back-to-top:hover {\n  color: #42b983;\n}\n\n\n.CodeMirror, .CodeMirror-scroll {\n  height: auto;\n}\n\n.bs-example .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n.bs-example .static-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n  bottom: auto;\n  z-index: 1;\n  display: block;\n}\n\n.bs-docs-booticon {\n  background-size: contain;\n  border: 0;\n  width: 200px;\n  height: 200px;\n}\n\n.bs-example-popover-contained {\n  height: 200px;\n}\n\n.bs-example-popover-contained > div {\n  position: relative;\n}\n\n.bs-example-popover-scroll {\n  overflow: scroll;\n  height: 200px;\n}\n\n.bs-example-popover-scroll > div {\n  position: relative;\n  padding: 100px 0;\n}\n\n.playground {\n  margin-bottom: 36px;\n}\n\n.bs-example {\n  margin-bottom: 0;\n}\n\n.bs-example + .highlight {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom-right-radius: 0;\n}\n\n.code-toggle {\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: -1px;\n  background: #fafafa;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid #e1e1e8;\n  border-top: none;\n  padding: 4px 8px;\n}\n\n@media (min-width: 768px) {\n  .code-toggle {\n    background: #fff;\n  }\n}\n\n.code-toggle.open {\n  background: #f8f5ec;\n}\n\n/* Minimal CSS Needed for contained modals */\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n.prop-table {\n  background-color: white;\n}\n\n.bs-example.tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px;\n\n}\n\n.bs-example .super-colors {\n  background: -moz-linear-gradient( top ,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(255, 255, 0, 1) 15%,\n      rgba(0, 255, 0, 1) 30%,\n      rgba(0, 255, 255, 1) 50%,\n      rgba(0, 0, 255, 1) 65%,\n      rgba(255, 0, 255, 1) 80%,\n      rgba(255, 0, 0, 1) 100%);\n  background: -webkit-gradient(linear,  left top,  left bottom,\n      color-stop(0%, rgba(255, 0, 0, 1)),\n      color-stop(15%, rgba(255, 255, 0, 1)),\n      color-stop(30%, rgba(0, 255, 0, 1)),\n      color-stop(50%, rgba(0, 255, 255, 1)),\n      color-stop(65%, rgba(0, 0, 255, 1)),\n      color-stop(80%, rgba(255, 0, 255, 1)),\n      color-stop(100%, rgba(255, 0, 0, 1)));\n}\n\n/*.bs-example .custom-menu > ul > li {\n    padding: 0 20px;\n}*/\n\n.anchor,\n.anchor:hover,\n.anchor:active,\n.anchor:focus {\n  color: black;\n  text-decoration: none;\n  position: relative;\n}\n.anchor-icon {\n  font-size: 90%;\n  padding-top: 0.1em;\n  position: absolute;\n  left: -0.8em;\n  opacity: 0;\n}\n\nh1:hover .anchor-icon,\nh1 a:focus .anchor-icon,\nh2:hover .anchor-icon,\nh2 a:focus .anchor-icon,\nh3:hover .anchor-icon,\nh3 a:focus .anchor-icon,\nh4:hover .anchor-icon,\nh4 a:focus .anchor-icon {\n  opacity: 0.5;\n}\n\n.prop-desc pre {\n  border-radius: 0;\n  border-width: 0;\n  border-left-width: 3px;\n}\n\n.prop-desc-heading {\n  margin-bottom: 10px;\n}\n\n.bs-callout {\n    padding: 20px;\n    margin: 20px 0;\n    border: 1px solid #eee;\n    border-left-width: 5px;\n    border-radius: 3px;\n}\n.bs-callout h4 {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n    margin-bottom: 0;\n}\n.bs-callout code {\n    border-radius: 3px;\n}\n.bs-callout+.bs-callout {\n    margin-top: -5px;\n}\n.bs-callout-default {\n    border-left-color: #777;\n}\n.bs-callout-default h4 {\n    color: #777;\n}\n.bs-callout-primary {\n    border-left-color: #428bca;\n}\n.bs-callout-primary h4 {\n    color: #428bca;\n}\n.bs-callout-success {\n    border-left-color: #42b983;\n}\n.bs-callout-success h4 {\n    color: #42b983;\n}\n.bs-callout-danger {\n    border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n    color: #d9534f;\n}\n.bs-callout-warning {\n    border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n    color: #f0ad4e;\n}\n.bs-callout-info {\n    border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n    color: #5bc0de;\n}\n", ""]);
	
	// exports


/***/ },
/* 303 */
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
/* 304 */
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

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v2.1.4
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vue = factory());
	}(this, (function () { 'use strict';
	
	/*  */
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/*  */
	
	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};
	
	/*  */
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}
	
	/*  */
	/* globals MutationObserver */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}
	
	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	
	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }
	
	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();
	
	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	var warn = noop;
	var formatComponentName;
	
	{
	  var hasConsole = typeof console !== 'undefined';
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };
	
	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}
	
	/*  */
	
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1 (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}
	
	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		isServerRendering: isServerRendering,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var initProxy;
	
	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };
	
	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }
	
	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };
	
	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	
	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	
	  resetSchedulerState();
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};
	
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            "development" !== 'production' && warn(
	              ("Error in watcher \"" + (this.expression) + "\""),
	              this.vm
	            );
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}
	
	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}
	
	/*  */
	
	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initMethods(vm);
	  initData(vm);
	  initComputed(vm);
	  initWatch(vm);
	}
	
	var isReservedProp = { key: 1, ref: 1, slot: 1 };
	
	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      {
	        if (isReservedProp[key]) {
	          warn(
	            ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	            vm
	          );
	        }
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      }
	    };
	
	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}
	
	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}
	
	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if ("development" !== 'production' && methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	    }
	  }
	}
	
	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	
	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};
	
	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}
	
	/*  */
	
	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}
	
	/*  */
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture, once;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, once, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      remove$$1(event, oldOn[name].invoker, capture);
	    }
	  }
	}
	
	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;
	
	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}
	
	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}
	
	/*  */
	
	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          if (!last.isCloned) {
	            last.text += c.text;
	          }
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res
	  }
	}
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}
	
	/*  */
	
	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}
	
	/*  */
	
	var activeInstance = null;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode;
	      {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };
	
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };
	
	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) { // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	      vm.$forceUpdate();
	    }
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}
	
	/*  */
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }
	
	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }
	
	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }
	
	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);
	
	  data = data || {};
	
	  // extract props
	  var propsData = extractProps(data, Ctor);
	
	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;
	
	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (
	  vnode,
	  hydrating,
	  parentElm,
	  refElm
	) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(
	      vnode,
	      activeInstance,
	      parentElm,
	      refElm
	    );
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}
	
	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}
	
	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}
	
	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}
	
	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;
	
	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };
	
	    var reject = function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };
	
	    var res = factory(resolve, reject);
	
	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}
	
	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}
	
	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}
	
	/*  */
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
	      return new VNode(
	        tag, data, normalizeChildren(children, childNs),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}
	
	/*  */
	
	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }
	
	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        {
	          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	        }
	        throw e
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	
	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;
	
	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };
	
	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };
	
	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }
	
	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }
	
	  // filter resolution helper
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };
	
	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };
	
	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback,
	    props
	  ) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) { // scoped slot
	      return scopedSlotFn(props || {}) || fallback
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && "development" !== 'production') {
	        slotNodes._rendered && warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback
	    }
	  };
	
	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    tag,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        "development" !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(tag, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };
	
	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes (
	    eventKeyCode,
	    key,
	    builtInAlias
	  ) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1
	    } else {
	      return keyCodes !== eventKeyCode
	    }
	  };
	}
	
	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var add = function (event, fn, once) {
	    once ? vm.$once(event, fn) : vm.$on(event, fn);
	  };
	  var remove$$1 = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, add, remove$$1, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}
	
	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	var uid = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}
	
	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}
	
	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}
	
	function Vue$3 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	    var name = extendOptions.name || Super.options.name;
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	/*  */
	
	var patternTypes = [String, RegExp];
	
	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else {
	    return pattern.test(name)
	  }
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      // check pattern
	      var name = opts.Ctor.options.name || opts.tag;
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	};
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$3);
	
	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: isServerRendering
	});
	
	Vue$3.version = '2.1.4';
	
	/*  */
	
	// attributes that should be using props for binding
	var mustUseProp = function (tag, attr) {
	  return (
	    (attr === 'value' && (tag === 'input' || tag === 'textarea' || tag === 'option')) ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML',
	  xhtml: 'http://www.w3.org/1999/xhtml'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	var isPreTag = function (tag) { return tag === 'pre'; };
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function childNodes (node) {
	  return node.childNodes
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];
	
	function isUndef (s) {
	  return s == null
	}
	
	function isDef (s) {
	  return s != null
	}
	
	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }
	
	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }
	
	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }
	
	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	
	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }
	
	      if ("development" !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }
	
	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.child) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }
	
	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.child) {
	      innerNode = innerNode.child._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }
	
	  function insert (parent, elm, ref) {
	    if (parent) {
	      nodeOps.insertBefore(parent, elm, ref);
	    }
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }
	
	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.child = oldVnode.child;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var bailed = false;
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	
	        // replacing existing element
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));
	
	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (parent !== null) {
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};
	
	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	];
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	};
	
	// skip type checking this file because we need to attach private properties
	// to elements
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (
	    vnode.elm._v_add = function (event, handler, once, capture) {
	      if (once) {
	        var oldHandler = handler;
	        handler = function (ev) {
	          remove(event, handler, capture);
	          arguments.length === 1
	            ? oldHandler(ev)
	            : oldHandler.apply(null, arguments);
	        };
	      }
	      vnode.elm.addEventListener(event, handler, capture);
	    }
	  );
	  var remove = vnode.elm._v_remove || (
	    vnode.elm._v_remove = function (event, handler, capture) {
	      vnode.elm.removeEventListener(event, handler, capture);
	    }
	  );
	  updateListeners(on, oldOn, add, remove, vnode.context);
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	    }
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};
	
	/*  */
	
	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});
	
	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}
	
	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}
	
	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;
	
	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }
	
	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }
	
	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}
	
	/*  */
	
	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	
	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
	  }
	
	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};
	
	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;
	
	  var style = normalizeStyleBinding(vnode.data.style) || {};
	
	  vnode.data.style = style.__ob__ ? extend({}, style) : style;
	
	  var newStyle = getStyle(vnode, true);
	
	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	};
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}
	
	/*  */
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }
	
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	          pendingNode.context === vnode.context &&
	          pendingNode.tag === vnode.tag &&
	          pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});
	
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}
	
	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}
	
	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (
	      (vnode.tag === 'textarea' || el.type === 'text') &&
	      !binding.modifiers.lazy
	    ) {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};
	
	var platformDirectives = {
	  model: model,
	  show: show
	};
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if ("development" !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }
	
	    return rawChild
	  }
	};
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};
	
	/*  */
	
	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;
	
	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);
	
	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;
	
	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);
	
	/*  */
	
	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}
	
	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;
	
	/*  */
	
	var decoder;
	
	function decode (html) {
	  decoder = decoder || document.createElement('div');
	  decoder.innerHTML = html;
	  return decoder.textContent
	}
	
	/*  */
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);
	
	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */
	
	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */
	
	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);
	
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;
	
	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});
	
	// Special Elements (can contain anything)
	var isScriptOrStyle = makeMap('script,style', true);
	var hasLang = function (attr) { return attr.name === 'lang' && attr.value !== 'html'; };
	var isSpecialTag = function (tag, isSFC, stack) {
	  if (isScriptOrStyle(tag)) {
	    return true
	  }
	  if (isSFC && stack.length === 1) {
	    // top-level template that has no pre-processor
	    if (tag === 'template' && !stack[0].attrs.some(hasLang)) {
	      return false
	    } else {
	      return true
	    }
	  }
	  return false
	};
	
	var reCache = {};
	
	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;
	
	function decodeAttr (value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value
	    .replace(ltRE, '<')
	    .replace(gtRE, '>')
	    .replace(ampRE, '&')
	    .replace(quoteRE, '"')
	}
	
	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');
	
	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');
	
	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }
	
	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }
	
	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue
	        }
	
	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }
	
	      var text = (void 0), rest$1 = (void 0), next = (void 0);
	      if (textEnd > 0) {
	        rest$1 = html.slice(textEnd);
	        while (
	          !endTag.test(rest$1) &&
	          !startTagOpen.test(rest$1) &&
	          !comment.test(rest$1) &&
	          !conditionalComment.test(rest$1)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }
	
	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }
	
	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }
	
	    if (html === last && options.chars) {
	      options.chars(html);
	      break
	    }
	  }
	
	  // Clean up any remaining tags
	  parseEndTag();
	
	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }
	
	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }
	
	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;
	
	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }
	
	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
	
	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }
	
	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }
	
	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }
	
	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }
	
	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }
	
	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}
	
	/*  */
	
	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;
	
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break         // "
	        case 0x27: inSingle = true; break         // '
	        case 0x60: inTemplateString = true; break // `
	        case 0x2f: inRegex = true; break          // /
	        case 0x28: paren++; break                 // (
	        case 0x29: paren--; break                 // )
	        case 0x5B: square++; break                // [
	        case 0x5D: square--; break                // ]
	        case 0x7B: curly++; break                 // {
	        case 0x7D: curly--; break                 // }
	      }
	    }
	  }
	
	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }
	
	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }
	
	  return expression
	}
	
	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}
	
	/*  */
	
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;
	
	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});
	
	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}
	
	/*  */
	
	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
	}
	
	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}
	
	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}
	
	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}
	
	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}
	
	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}
	
	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue)
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}
	
	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}
	
	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;
	
	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */
	
	function parseModel (val) {
	  str = val;
	  len = str.length;
	  index$1 = expressionPos = expressionEndPos = 0;
	
	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    return {
	      exp: val,
	      idx: null
	    }
	  }
	
	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }
	
	  return {
	    exp: val.substring(0, expressionPos),
	    idx: val.substring(expressionPos + 1, expressionEndPos)
	  }
	}
	
	function next () {
	  return str.charCodeAt(++index$1)
	}
	
	function eof () {
	  return index$1 >= len
	}
	
	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}
	
	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}
	
	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}
	
	/*  */
	
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;
	
	var decodeHTMLCached = cached(decode);
	
	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;
	
	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
	
	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }
	
	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }
	
	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        );
	      }
	
	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }
	
	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);
	
	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;
	
	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }
	
	      function checkRootConstraints (el) {
	        if ("development" !== 'production' && !warned) {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warned = true;
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warned = true;
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            );
	          }
	        }
	      }
	
	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else if ("development" !== 'production' && !warned) {
	          warned = true;
	          warn$1(
	            "Component template should contain exactly one root element:" +
	            "\n\n" + template + "\n\n" +
	            "If you are using v-if on multiple elements, " +
	            "use v-else-if to chain them instead."
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) { // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },
	
	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },
	
	    chars: function chars (text) {
	      if (!currentParent) {
	        if ("development" !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	          currentParent.tag === 'textarea' &&
	          currentParent.attrsMap.placeholder === text) {
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}
	
	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}
	
	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}
	
	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}
	
	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}
	
	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      "development" !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}
	
	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}
	
	function processIfConditions (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else {
	    warn$1(
	      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
	      "used on element <" + (el.tag) + "> without corresponding v-if."
	    );
	  }
	}
	
	function addIfCondition (el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}
	
	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}
	
	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if ("development" !== 'production' && el.key) {
	      warn$1(
	        "`key` does not work on <slot> because slots are abstract outlets " +
	        "and can possibly expand into multiple elements. " +
	        "Use the key on a wrapping element instead."
	      );
	    }
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	    }
	    if (el.tag === 'template') {
	      el.slotScope = getAndRemoveAttr(el, 'scope');
	    }
	  }
	}
	
	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}
	
	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') { name = 'innerHTML'; }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	        }
	        if (isProp || platformMustUseProp(el.tag, name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}
	
	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}
	
	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}
	
	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}
	
	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}
	
	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}
	
	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;
	
	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}
	
	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}
	
	/*  */
	
	var isStaticKey;
	var isPlatformReservedTag;
	
	var genStaticKeysCached = cached(genStaticKeys$1);
	
	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}
	
	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}
	
	function markStatic (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (
	      !isPlatformReservedTag(node.tag) &&
	      node.tag !== 'slot' &&
	      node.attrsMap['inline-template'] == null
	    ) {
	      return
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}
	
	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(
	      node.children.length === 1 &&
	      node.children[0].type === 3
	    )) {
	      node.staticRoot = true;
	      return
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      walkThroughConditionsBlocks(node.ifConditions, isInFor);
	    }
	  }
	}
	
	function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
	  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	    markStaticRoots(conditionBlocks[i].block, isInFor);
	  }
	}
	
	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}
	
	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}
	
	/*  */
	
	var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};
	
	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;',
	  ctrl: 'if(!$event.ctrlKey)return;',
	  shift: 'if(!$event.shiftKey)return;',
	  alt: 'if(!$event.altKey)return;',
	  meta: 'if(!$event.metaKey)return;'
	};
	
	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}
	
	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}
	
	function genKeyFilter (keys) {
	  return ("if(" + (keys.map(genFilterCode).join('&&')) + ")return;")
	}
	
	function genFilterCode (key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return ("$event.keyCode!==" + keyVal)
	  }
	  var alias = keyCodes[key];
	  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
	}
	
	/*  */
	
	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}
	
	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};
	
	/*  */
	
	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;
	
	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_h("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}
	
	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);
	
	      var children = el.inlineTemplate ? null : genChildren(el);
	      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}
	
	// hoist static sub-trees out
	function genStatic (el) {
	  el.staticProcessed = true;
	  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}
	
	// v-once
	function genOnce (el) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      "development" !== 'production' && warn$2(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el)
	    }
	    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
	  } else {
	    return genStatic(el)
	  }
	}
	
	function genIf (el) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice())
	}
	
	function genIfConditions (conditions) {
	  if (!conditions.length) {
	    return '_e()'
	  }
	
	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }
	
	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return el.once ? genOnce(el) : genElement(el)
	  }
	}
	
	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}
	
	function genData (el) {
	  var data = '{';
	
	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }
	
	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}
	
	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}
	
	function genInlineTemplate (el) {
	  var ast = el.children[0];
	  if ("development" !== 'production' && (
	    el.children.length > 1 || ast.type !== 1
	  )) {
	    warn$2('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, currentOptions);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}
	
	function genScopedSlots (slots) {
	  return ("scopedSlots:{" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "}")
	}
	
	function genScopedSlot (key, el) {
	  return key + ":function(" + (String(el.attrsMap.scope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? genChildren(el) || 'void 0'
	      : genElement(el)) + "}"
	}
	
	function genChildren (el) {
	  if (el.children.length) {
	    return '[' + el.children.map(genNode).join(',') + ']'
	  }
	}
	
	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}
	
	function genText (text) {
	  return text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))
	}
	
	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return ("_t(" + slotName + (children ? ("," + children) : '') + (el.attrs ? ((children ? '' : ',null') + ",{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}") : '') + ")")
	}
	
	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el);
	  return ("_h(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}
	
	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
	  }
	  return res.slice(0, -1)
	}
	
	// #3895, #4268
	function transformSpecialNewlines (text) {
	  return text
	    .replace(/\u2028/g, '\\u2028')
	    .replace(/\u2029/g, '\\u2029')
	}
	
	/*  */
	
	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}
	
	/*  */
	
	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	
	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}
	
	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}
	
	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}
	
	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}
	
	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}
	
	/*  */
	
	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}
	
	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}
	
	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};
	
	/*  */
	
	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    {
	      var expression = parseText(staticStyle, options.delimiters);
	      if (expression) {
	        warn(
	          "style=\"" + staticStyle + "\": " +
	          'Interpolation inside attributes has been removed. ' +
	          'Use v-bind or the colon shorthand instead. For example, ' +
	          'instead of <div style="{{ val }}">, use <div :style="val">.'
	        );
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }
	
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData$2 (el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + (el.staticStyle) + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + (el.styleBinding) + "),";
	  }
	  return data
	}
	
	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$2
	};
	
	var modules$1 = [
	  klass$1,
	  style$1
	];
	
	/*  */
	
	var warn$3;
	
	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}
	
	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}
	
	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}
	
	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }
	
	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';
	
	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
	  valueExpression = number || type === 'number'
	    ? ("_n(" + valueExpression + ")")
	    : valueExpression;
	  var code = genAssignmentCode(value, valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if ("development" !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }
	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	}
	
	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  {
	    el.children.some(checkOptionWarning);
	  }
	
	  var number = modifiers && modifiers.number;
	  var assignment = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');
	
	  var code = genAssignmentCode(value, assignment);
	  addHandler(el, 'change', code, null, true);
	}
	
	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}
	
	function genAssignmentCode (value, assignment) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return (value + "=" + assignment)
	  } else {
	    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
	      "if (!Array.isArray($$exp)){" +
	        value + "=" + assignment + "}" +
	      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
	  }
	}
	
	/*  */
	
	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	/*  */
	
	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};
	
	/*  */
	
	var cache = Object.create(null);
	
	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};
	
	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}
	
	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}
	
	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}
	
	/*  */
	
	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});
	
	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);
	
	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }
	
	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating)
	};
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}
	
	Vue$3.compile = compileToFunctions;
	
	return Vue$3;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 306 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v1.0.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;
	
	function Promise$1(executor) {
	
	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];
	
	    var promise = this;
	
	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}
	
	Promise$1.reject = function (r) {
	    return new Promise$1(function (resolve, reject) {
	        reject(r);
	    });
	};
	
	Promise$1.resolve = function (x) {
	    return new Promise$1(function (resolve, reject) {
	        resolve(x);
	    });
	};
	
	Promise$1.all = function all(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        var count = 0,
	            result = [];
	
	        if (iterable.length === 0) {
	            resolve(result);
	        }
	
	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;
	
	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }
	
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};
	
	Promise$1.race = function race(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};
	
	var p$1 = Promise$1.prototype;
	
	p$1.resolve = function resolve(x) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        var called = false;
	
	        try {
	            var then = x && x['then'];
	
	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};
	
	p$1.reject = function reject(reason) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};
	
	p$1.notify = function notify() {
	    var promise = this;
	
	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];
	
	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};
	
	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;
	
	    return new Promise$1(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};
	
	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};
	
	/**
	 * Promise adapter.
	 */
	
	if (typeof Promise === 'undefined') {
	    window.Promise = Promise$1;
	}
	
	function PromiseObj(executor, context) {
	
	    if (executor instanceof Promise) {
	        this.promise = executor;
	    } else {
	        this.promise = new Promise(executor.bind(context));
	    }
	
	    this.context = context;
	}
	
	PromiseObj.all = function (iterable, context) {
	    return new PromiseObj(Promise.all(iterable), context);
	};
	
	PromiseObj.resolve = function (value, context) {
	    return new PromiseObj(Promise.resolve(value), context);
	};
	
	PromiseObj.reject = function (reason, context) {
	    return new PromiseObj(Promise.reject(reason), context);
	};
	
	PromiseObj.race = function (iterable, context) {
	    return new PromiseObj(Promise.race(iterable), context);
	};
	
	var p = PromiseObj.prototype;
	
	p.bind = function (context) {
	    this.context = context;
	    return this;
	};
	
	p.then = function (fulfilled, rejected) {
	
	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	};
	
	p.catch = function (rejected) {
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.catch(rejected), this.context);
	};
	
	p.finally = function (callback) {
	
	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return Promise.reject(reason);
	    });
	};
	
	/**
	 * Utility functions.
	 */
	
	var debug = false;var util = {};var slice = [].slice;
	
	
	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}
	
	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}
	
	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}
	
	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}
	
	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}
	
	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}
	
	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}
	
	var isArray = Array.isArray;
	
	function isString(val) {
	    return typeof val === 'string';
	}
	
	function isBoolean(val) {
	    return val === true || val === false;
	}
	
	function isFunction(val) {
	    return typeof val === 'function';
	}
	
	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}
	
	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}
	
	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}
	
	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}
	
	function when(value, fulfilled, rejected) {
	
	    var promise = PromiseObj.resolve(value);
	
	    if (arguments.length < 2) {
	        return promise;
	    }
	
	    return promise.then(fulfilled, rejected);
	}
	
	function options(fn, obj, opts) {
	
	    opts = opts || {};
	
	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }
	
	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}
	
	function each(obj, iterator) {
	
	    var i, key;
	
	    if (obj && typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }
	
	    return obj;
	}
	
	var assign = Object.assign || _assign;
	
	function merge(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });
	
	    return target;
	}
	
	function defaults(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	
	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });
	
	    return target;
	}
	
	function _assign(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source);
	    });
	
	    return target;
	}
	
	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}
	
	/**
	 * Root Prefix Transform.
	 */
	
	function root (options, next) {
	
	    var url = next(options);
	
	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }
	
	    return url;
	}
	
	/**
	 * Query Parameter Transform.
	 */
	
	function query (options, next) {
	
	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);
	
	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });
	
	    query = Url.params(query);
	
	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }
	
	    return url;
	}
	
	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */
	
	function expand(url, params, variables) {
	
	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);
	
	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }
	
	    return expanded;
	}
	
	function parse(template) {
	
	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];
	
	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {
	
	                    var operator = null,
	                        values = [];
	
	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }
	
	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });
	
	                    if (operator && operator !== '+') {
	
	                        var separator = ',';
	
	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }
	
	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}
	
	function getValues(context, operator, key, modifier) {
	
	    var value = context[key],
	        result = [];
	
	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();
	
	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }
	
	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];
	
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }
	
	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }
	
	    return result;
	}
	
	function isDefined(value) {
	    return value !== undefined && value !== null;
	}
	
	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}
	
	function encodeValue(operator, value, key) {
	
	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);
	
	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}
	
	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}
	
	/**
	 * URL Template (RFC 6570) Transform.
	 */
	
	function template (options) {
	
	    var variables = [],
	        url = expand(options.url, options.params, variables);
	
	    variables.forEach(function (key) {
	        delete options.params[key];
	    });
	
	    return url;
	}
	
	/**
	 * Service for URL templating.
	 */
	
	var ie = document.documentMode;
	var el = document.createElement('a');
	
	function Url(url, params) {
	
	    var self = this || {},
	        options = url,
	        transform;
	
	    if (isString(url)) {
	        options = { url: url, params: params };
	    }
	
	    options = merge({}, Url.options, self.$options, options);
	
	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });
	
	    return transform(options);
	}
	
	/**
	 * Url options.
	 */
	
	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};
	
	/**
	 * Url transforms.
	 */
	
	Url.transforms = [template, query, root];
	
	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */
	
	Url.params = function (obj) {
	
	    var params = [],
	        escape = encodeURIComponent;
	
	    params.add = function (key, value) {
	
	        if (isFunction(value)) {
	            value = value();
	        }
	
	        if (value === null) {
	            value = '';
	        }
	
	        this.push(escape(key) + '=' + escape(value));
	    };
	
	    serialize(params, obj);
	
	    return params.join('&').replace(/%20/g, '+');
	};
	
	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */
	
	Url.parse = function (url) {
	
	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }
	
	    el.href = url;
	
	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};
	
	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}
	
	function serialize(params, obj, scope) {
	
	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;
	
	    each(obj, function (value, key) {
	
	        hash = isObject(value) || isArray(value);
	
	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }
	
	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}
	
	/**
	 * XDomain client (Internet Explorer).
	 */
	
	function xdrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xdr = new XDomainRequest(),
	            handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(xdr.responseText, { status: status }));
	        };
	
	        request.abort = function () {
	            return xdr.abort();
	        };
	
	        xdr.open(request.method, request.getUrl());
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}
	
	/**
	 * CORS Interceptor.
	 */
	
	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();
	
	function cors (request, next) {
	
	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }
	
	    if (request.crossOrigin) {
	
	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }
	
	        delete request.emulateHTTP;
	    }
	
	    next();
	}
	
	function crossOrigin(request) {
	
	    var requestUrl = Url.parse(Url(request));
	
	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}
	
	/**
	 * Body Interceptor.
	 */
	
	function body (request, next) {
	
	    if (isFormData(request.body)) {
	
	        request.headers.delete('Content-Type');
	    } else if (isObject(request.body) || isArray(request.body)) {
	
	        if (request.emulateJSON) {
	            request.body = Url.params(request.body);
	            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	        } else {
	            request.body = JSON.stringify(request.body);
	        }
	    }
	
	    next(function (response) {
	
	        Object.defineProperty(response, 'data', {
	            get: function () {
	                return this.body;
	            },
	            set: function (body) {
	                this.body = body;
	            }
	        });
	
	        return response.bodyText ? when(response.text(), function (text) {
	
	            var type = response.headers.get('Content-Type');
	
	            if (isString(type) && type.indexOf('application/json') === 0) {
	
	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }
	            } else {
	                response.body = text;
	            }
	
	            return response;
	        }) : response;
	    });
	}
	
	/**
	 * JSONP client.
	 */
	
	function jsonpClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;
	
	        handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(body, { status: status }));
	
	            delete window[callback];
	            document.body.removeChild(script);
	        };
	
	        request.params[name] = callback;
	
	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };
	
	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	}
	
	/**
	 * JSONP Interceptor.
	 */
	
	function jsonp (request, next) {
	
	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }
	
	    next(function (response) {
	
	        if (request.method == 'JSONP') {
	
	            return when(response.json(), function (json) {
	
	                response.body = json;
	
	                return response;
	            });
	        }
	    });
	}
	
	/**
	 * Before Interceptor.
	 */
	
	function before (request, next) {
	
	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }
	
	    next();
	}
	
	/**
	 * HTTP method override Interceptor.
	 */
	
	function method (request, next) {
	
	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }
	
	    next();
	}
	
	/**
	 * Header Interceptor.
	 */
	
	function header (request, next) {
	
	    var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);
	
	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });
	
	    next();
	}
	
	/**
	 * Timeout Interceptor.
	 */
	
	function timeout (request, next) {
	
	    var timeout;
	
	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }
	
	    next(function (response) {
	
	        clearTimeout(timeout);
	    });
	}
	
	/**
	 * XMLHttp client.
	 */
	
	function xhrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xhr = new XMLHttpRequest(),
	            handler = function (event) {
	
	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	            });
	
	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });
	
	            resolve(response);
	        };
	
	        request.abort = function () {
	            return xhr.abort();
	        };
	
	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }
	
	        xhr.open(request.method, request.getUrl(), true);
	
	        if ('responseType' in xhr) {
	            xhr.responseType = 'blob';
	        }
	
	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }
	
	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });
	
	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;
	        xhr.send(request.getBody());
	    });
	}
	
	/**
	 * Base client.
	 */
	
	function Client (context) {
	
	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;
	
	    if (!isObject(context)) {
	        context = null;
	    }
	
	    function Client(request) {
	        return new PromiseObj(function (resolve) {
	
	            function exec() {
	
	                handler = reqHandlers.pop();
	
	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
	                    next();
	                }
	            }
	
	            function next(response) {
	
	                if (isFunction(response)) {
	
	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {
	
	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });
	
	                    when(response, resolve);
	
	                    return;
	                }
	
	                exec();
	            }
	
	            exec();
	        }, context);
	    }
	
	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };
	
	    return Client;
	}
	
	function sendRequest(request, resolve) {
	
	    var client = request.client || xhrClient;
	
	    resolve(client(request));
	}
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	/**
	 * HTTP Headers.
	 */
	
	var Headers = function () {
	    function Headers(headers) {
	        var _this = this;
	
	        classCallCheck(this, Headers);
	
	
	        this.map = {};
	
	        each(headers, function (value, name) {
	            return _this.append(name, value);
	        });
	    }
	
	    Headers.prototype.has = function has(name) {
	        return getName(this.map, name) !== null;
	    };
	
	    Headers.prototype.get = function get(name) {
	
	        var list = this.map[getName(this.map, name)];
	
	        return list ? list[0] : null;
	    };
	
	    Headers.prototype.getAll = function getAll(name) {
	        return this.map[getName(this.map, name)] || [];
	    };
	
	    Headers.prototype.set = function set(name, value) {
	        this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	    };
	
	    Headers.prototype.append = function append(name, value) {
	
	        var list = this.getAll(name);
	
	        if (list.length) {
	            list.push(trim(value));
	        } else {
	            this.set(name, value);
	        }
	    };
	
	    Headers.prototype.delete = function _delete(name) {
	        delete this.map[getName(this.map, name)];
	    };
	
	    Headers.prototype.forEach = function forEach(callback, thisArg) {
	        var _this2 = this;
	
	        each(this.map, function (list, name) {
	            each(list, function (value) {
	                return callback.call(thisArg, value, name, _this2);
	            });
	        });
	    };
	
	    return Headers;
	}();
	
	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}
	
	function normalizeName(name) {
	
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }
	
	    return trim(name);
	}
	
	/**
	 * HTTP Response.
	 */
	
	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);
	
	
	        this.url = url;
	        this.ok = status >= 200 && status < 300;
	        this.status = status || 0;
	        this.statusText = statusText || '';
	        this.headers = new Headers(headers);
	        this.body = body;
	
	        if (isString(body)) {
	
	            this.bodyText = body;
	        } else if (isBlob(body)) {
	
	            this.bodyBlob = body;
	
	            if (isBlobText(body)) {
	                this.bodyText = blobText(body);
	            }
	        }
	    }
	
	    Response.prototype.blob = function blob() {
	        return when(this.bodyBlob);
	    };
	
	    Response.prototype.text = function text() {
	        return when(this.bodyText);
	    };
	
	    Response.prototype.json = function json() {
	        return when(this.text(), function (text) {
	            return JSON.parse(text);
	        });
	    };
	
	    return Response;
	}();
	
	function blobText(body) {
	    return new PromiseObj(function (resolve) {
	
	        var reader = new FileReader();
	
	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };
	    });
	}
	
	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}
	
	/**
	 * HTTP Request.
	 */
	
	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);
	
	
	        this.body = null;
	        this.params = {};
	
	        assign(this, options, {
	            method: toUpper(options.method || 'GET')
	        });
	
	        if (!(this.headers instanceof Headers)) {
	            this.headers = new Headers(this.headers);
	        }
	    }
	
	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };
	
	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };
	
	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };
	
	    return Request;
	}();
	
	/**
	 * Service for sending network requests.
	 */
	
	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };
	
	function Http(options) {
	
	    var self = this || {},
	        client = Client(self.$vm);
	
	    defaults(options || {}, self.$options, Http.options);
	
	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });
	
	    return client(new Request(options)).then(function (response) {
	
	        return response.ok ? response : PromiseObj.reject(response);
	    }, function (response) {
	
	        if (response instanceof Error) {
	            error(response);
	        }
	
	        return PromiseObj.reject(response);
	    });
	}
	
	Http.options = {};
	
	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};
	
	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];
	
	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {
	
	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});
	
	['post', 'put', 'patch'].forEach(function (method) {
	
	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});
	
	/**
	 * Service for interacting with RESTful services.
	 */
	
	function Resource(url, params, actions, options) {
	
	    var self = this || {},
	        resource = {};
	
	    actions = assign({}, Resource.actions, actions);
	
	    each(actions, function (action, name) {
	
	        action = merge({ url: url, params: assign({}, params) }, options, action);
	
	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });
	
	    return resource;
	}
	
	function opts(action, args) {
	
	    var options = assign({}, action),
	        params = {},
	        body;
	
	    switch (args.length) {
	
	        case 2:
	
	            params = args[0];
	            body = args[1];
	
	            break;
	
	        case 1:
	
	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }
	
	            break;
	
	        case 0:
	
	            break;
	
	        default:
	
	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }
	
	    options.body = body;
	    options.params = assign({}, options.params, params);
	
	    return options;
	}
	
	Resource.actions = {
	
	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }
	
	};
	
	/**
	 * Install plugin.
	 */
	
	function plugin(Vue) {
	
	    if (plugin.installed) {
	        return;
	    }
	
	    Util(Vue);
	
	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = PromiseObj;
	
	    Object.defineProperties(Vue.prototype, {
	
	        $url: {
	            get: function () {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },
	
	        $http: {
	            get: function () {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },
	
	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },
	
	        $promise: {
	            get: function () {
	                var _this = this;
	
	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }
	
	    });
	}
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}
	
	module.exports = plugin;

/***/ },
/* 307 */
/***/ function(module, exports) {

	'use strict';
	
	window.VueStrapLang = function () {
	  var l = { //languages
	
	    en: {
	      daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	      limit: 'Limit reached ({{limit}} items max).',
	      loading: 'Loading...',
	      minLength: 'Min. Length',
	      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	      notSelected: 'Nothing Selected',
	      required: 'Required',
	      search: 'Search'
	    },
	
	    es: {
	      daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
	      loading: 'Cargando...',
	      minLength: 'Tamaño Mínimo',
	      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	      notSelected: 'Nada seleccionado',
	      required: 'Requerido',
	      search: 'Buscar',
	      limit: 'Limite alcanzado (máximo {{limit}} items).'
	    },
	
	    'pt-BR': {
	      daysOfWeek: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
	      limit: 'Limite atingido (máximo {{limit}} items).',
	      loading: 'Cargando...',
	      minLength: 'Tamanho Mínimo',
	      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
	      notSelected: 'Nada selecionado',
	      required: 'Requerido',
	      search: 'Buscar'
	    },
	
	    fr: {
	      daysOfWeek: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
	      limit: 'Limite atteinte ({{limit}} éléments max).',
	      loading: 'Chargement en cours...',
	      minLength: 'Longueur Minimum',
	      months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
	      notSelected: 'Aucune sélection',
	      required: 'Requis',
	      search: 'Recherche'
	    },
	
	    de: {
	      daysOfWeek: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
	      limit: 'Limit erreicht (max {{limit}}).',
	      loading: 'Lade...',
	      minLength: 'Min. Länge',
	      months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
	      notSelected: 'Nichts ausgewählt',
	      required: 'Benötigt',
	      search: 'Suche'
	    }
	
	  };
	
	  /**
	   * Some browsers handle short language code (eg. 'en'), others handle 5 chars (eg. 'en-US').
	   * With aliases you can handle a group of similar languages, using a regular expresion.
	   * If the language is not found, the default language is english.
	   */
	  var aliases = {
	    es: /^es-[A-Z]{2}$/i,
	    en: /^en-[A-Z]{2}$/i,
	    de: /^de-[A-Z]{2}$/i
	  };
	
	  return function (lang) {
	    lang = lang || 'en';
	    var i,
	        tr = {};
	    for (i in aliases) {
	      if (aliases[i].test(lang)) lang = i;
	    }
	    for (i in l.en) {
	      tr[i] = l[lang] && l[lang][i] || l.en[i];
	    }
	
	    return tr;
	  };
	}();

/***/ },
/* 308 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Detect mobile devices (optional)
	 * Based on http://detectmobilebrowsers.com/
	 *
	 * @value: navigator.isMobile
	 * @return: true | false
	 * Detect if this plugin is enabled: ('isMobile' in navigator)
	 */
	(function (a) {
	  var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
	  try {
	    Object.defineProperty(navigator, 'isMobile', { get: function get() {
	        return isMobile;
	      } });
	  } catch (e) {
	    navigator.isMobile = isMobile;
	  }
	})(navigator.userAgent || navigator.vendor || window.opera);

/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map
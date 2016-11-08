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
	
	__webpack_require__(301);
	__webpack_require__(303);
	
	var Prism = __webpack_require__(305);
	__webpack_require__(306);
	
	var Vue = window.Vue = __webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	
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
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(300)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\bodyDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-58838205", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-58838205", __vue_options__)
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
	
	var _affixSidebar = __webpack_require__(123);
	
	var _affixSidebar2 = _interopRequireDefault(_affixSidebar);
	
	var _alertDocs = __webpack_require__(135);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _asideDocs = __webpack_require__(146);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _buttonGroupDocs = __webpack_require__(154);
	
	var _buttonGroupDocs2 = _interopRequireDefault(_buttonGroupDocs);
	
	var _carouselDocs = __webpack_require__(165);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _checkboxDocs = __webpack_require__(176);
	
	var _checkboxDocs2 = _interopRequireDefault(_checkboxDocs);
	
	var _datepickerDocs = __webpack_require__(179);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _dropdownDocs = __webpack_require__(190);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _formGroupDocs = __webpack_require__(197);
	
	var _formGroupDocs2 = _interopRequireDefault(_formGroupDocs);
	
	var _formValidatorDocs = __webpack_require__(218);
	
	var _formValidatorDocs2 = _interopRequireDefault(_formValidatorDocs);
	
	var _gettingStarted = __webpack_require__(226);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _inputDocs = __webpack_require__(229);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _modalDocs = __webpack_require__(232);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _navbarDocs = __webpack_require__(244);
	
	var _navbarDocs2 = _interopRequireDefault(_navbarDocs);
	
	var _popoverDocs = __webpack_require__(250);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _progressbarDocs = __webpack_require__(258);
	
	var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);
	
	var _radioDocs = __webpack_require__(264);
	
	var _radioDocs2 = _interopRequireDefault(_radioDocs);
	
	var _selectDocs = __webpack_require__(267);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _spinnerDocs = __webpack_require__(272);
	
	var _spinnerDocs2 = _interopRequireDefault(_spinnerDocs);
	
	var _tabsDocs = __webpack_require__(281);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _tooltipDocs = __webpack_require__(289);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _typeaheadDocs = __webpack_require__(292);
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\accordionDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76818dd9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-76818dd9", __vue_options__)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\utils\\docSection.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28898352", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-28898352", __vue_options__)
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "bs-docs-section",
	    attrs: {
	      "id": id
	    }
	  }, [_h('h1', {
	    staticClass: "page-header"
	  }, [_h('a', {
	    staticClass: "anchor",
	    attrs: {
	      "href": '#' + id
	    }
	  }, [_s(name)])]), " ", _t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-28898352", module.exports)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Accordion.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d4b75a92", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d4b75a92", __vue_options__)
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

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "panel-group"
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d4b75a92", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6922bf24"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6922bf24", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6922bf24", __vue_options__)
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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6922bf24&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6922bf24&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue");
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
	exports.push([module.id, "\nlabel.checkbox[data-v-6922bf24] {\r\n  position: relative;\r\n  padding-left: 18px;\n}\nlabel.checkbox > input[data-v-6922bf24] {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\n}\nlabel.checkbox > .icon[data-v-6922bf24] {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\n}\nlabel.checkbox:not(.active) > .icon[data-v-6922bf24] {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\n}\nlabel.checkbox > input:focus ~ .icon[data-v-6922bf24] {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\nlabel.checkbox.active > .icon[data-v-6922bf24] {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\n}\nlabel.checkbox.active .btn-default[data-v-6922bf24] { filter: brightness(75%);\n}\nlabel.checkbox.disabled[data-v-6922bf24],\r\nlabel.checkbox.readonly[data-v-6922bf24],\r\n.btn.readonly[data-v-6922bf24] {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\n}\nlabel.btn > input[type=checkbox][data-v-6922bf24] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\n}\r\n", "", {"version":3,"sources":["/./src/Checkbox.vue?f0c9e1c2"],"names":[],"mappings":";AAoGA;EACA,mBAAA;EACA,mBAAA;CACA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,kZAAA;CACA;AACA,sDAAA,wBAAA;CAAA;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Checkbox.vue","sourcesContent":["<template>\r\n  <label :class=\"[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <input type=\"checkbox\" autocomplete=\"off\"\r\n      ref=\"input\"\r\n      :checked=\"active\"\r\n      :value=\"value\"\r\n      :name=\"name\"\r\n      :readonly=\"readonly\"\r\n      :disabled=\"disabled\"\r\n      @checked=\"toggle\"\r\n    />\r\n    <span v-if=\"!isButton\" class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n    <span v-if=\"!isButton&active&&typeColor==='default'\" class=\"icon\"></span>\r\n    <slot></slot>\r\n  </label>\r\n</template>\r\n\r\n<script>\r\n// let coerce = {\r\n//   disabled: 'boolean',\r\n//   readonly: 'boolean'\r\n// }\r\n\r\nexport default {\r\n  props: {\r\n    button: {type: Boolean, default: false},\r\n    checked: {type: Boolean, default: false},\r\n    disabled: {type: Boolean, default: false},\r\n    name: {type: String, default: null},\r\n    readonly: {type: Boolean, default: false},\r\n    type: {type: String, default: null},\r\n    value: {default: true}\r\n  },\r\n  computed: {\r\n    active () { \r\n      return typeof this.value !== 'boolean' && this._inGroup ? ~this.$parent.value.indexOf(this.value) : this.checked \r\n    },\r\n    isButton () { return this.button || (this._inGroup && this.$parent.buttons) },\r\n    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }\r\n  },\r\n  watch: {\r\n    checked (val, old) {\r\n      this.$emit('checked', val ? this.value : null )\r\n\r\n      if (typeof this.value !== 'boolean') {\r\n        this.$emit('input', this.checked ? this.value : null)\r\n        if (this._inGroup) {\r\n          if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value)\r\n          if (!this.checked && ~this.$parent.value.indexOf(this.value)) parent.value.splice(parent.value.indexOf(this.value), 1)\r\n        }\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    if (typeof this.value === 'boolean') { return }\r\n    const parent = this.$parent\r\n    if (parent && parent._btnGroup && !parent._radioGroup) {\r\n      this._inGroup = true\r\n      parent._checkboxGroup = true\r\n      if (!(parent.value instanceof Array)) { parent.value = [] }\r\n    }\r\n  },\r\n  mounted () {\r\n    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') { return }\r\n    if (this.$parent.value.length) {\r\n      // this.checked = ~this.$parent.value.indexOf(this.value)\r\n      this.$emit('checked', ~this.$parent.value.indexOf(this.value))\r\n    } else if (this.checked) {\r\n      this.$parent.value.push(this.value)\r\n    }\r\n  },\r\n  methods: {\r\n    eval () {\r\n      if (typeof this.value !== 'boolean' && this._inGroup) {\r\n        // this.checked = ~this.$parent.value.indexOf(this.value)\r\n        this.$emit('checked', ~this.$parent.value.indexOf(this.value))\r\n      }\r\n    },\r\n    focus () {\r\n      this.$refs.input.focus()\r\n    },\r\n    toggle () {\r\n      if (!this.disabled) {\r\n        this.focus()\r\n        if (!this.readonly) {\r\n          // this.checked = this.checked ? null : this.value\r\n          this.$emit('checked', this.checked ? null : this.value )\r\n          if (this._inGroup && typeof this.value !== 'boolean') {\r\n            const index = this.$parent.value.indexOf(this.value)\r\n            this.$parent.value[~index ? '$remove' : 'push'](this.value)\r\n          }\r\n        }\r\n      }\r\n      return false\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\nlabel.checkbox {\r\n  position: relative;\r\n  padding-left: 18px;\r\n}\r\nlabel.checkbox > input {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\nlabel.checkbox > .icon {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\nlabel.checkbox:not(.active) > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\nlabel.checkbox > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\nlabel.checkbox.active > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\r\n}\r\nlabel.checkbox.active .btn-default { filter: brightness(75%); }\r\n\r\nlabel.checkbox.disabled,\r\nlabel.checkbox.readonly,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=checkbox] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
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
	//
	//
	//
	//
	//
	//
	//
	//
	
	// let coerce = {
	//   disabled: 'boolean',
	//   readonly: 'boolean'
	// }
	
	exports.default = {
	  props: {
	    button: { type: Boolean, default: false },
	    checked: { type: Boolean, default: false },
	    disabled: { type: Boolean, default: false },
	    name: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    type: { type: String, default: null },
	    value: { default: true }
	  },
	  computed: {
	    active: function active() {
	      return typeof this.value !== 'boolean' && this._inGroup ? ~this.$parent.value.indexOf(this.value) : this.checked;
	    },
	    isButton: function isButton() {
	      return this.button || this._inGroup && this.$parent.buttons;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    checked: function checked(val, old) {
	      this.$emit('checked', val ? this.value : null);
	
	      if (typeof this.value !== 'boolean') {
	        this.$emit('input', this.checked ? this.value : null);
	        if (this._inGroup) {
	          if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value);
	          if (!this.checked && ~this.$parent.value.indexOf(this.value)) parent.value.splice(parent.value.indexOf(this.value), 1);
	        }
	      }
	    }
	  },
	  created: function created() {
	    if (typeof this.value === 'boolean') {
	      return;
	    }
	    var parent = this.$parent;
	    if (parent && parent._btnGroup && !parent._radioGroup) {
	      this._inGroup = true;
	      parent._checkboxGroup = true;
	      if (!(parent.value instanceof Array)) {
	        parent.value = [];
	      }
	    }
	  },
	  mounted: function mounted() {
	    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
	      return;
	    }
	    if (this.$parent.value.length) {
	      // this.checked = ~this.$parent.value.indexOf(this.value)
	      this.$emit('checked', ~this.$parent.value.indexOf(this.value));
	    } else if (this.checked) {
	      this.$parent.value.push(this.value);
	    }
	  },
	
	  methods: {
	    eval: function _eval() {
	      if (typeof this.value !== 'boolean' && this._inGroup) {
	        // this.checked = ~this.$parent.value.indexOf(this.value)
	        this.$emit('checked', ~this.$parent.value.indexOf(this.value));
	      }
	    },
	    focus: function focus() {
	      this.$refs.input.focus();
	    },
	    toggle: function toggle() {
	      if (!this.disabled) {
	        this.focus();
	        if (!this.readonly) {
	          // this.checked = this.checked ? null : this.value
	          this.$emit('checked', this.checked ? null : this.value);
	          if (this._inGroup && typeof this.value !== 'boolean') {
	            var index = this.$parent.value.indexOf(this.value);
	            this.$parent.value[~index ? '$remove' : 'push'](this.value);
	          }
	        }
	      }
	      return false;
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    class: [isButton ? 'btn btn-' + typeColor : 'open checkbox ' + typeColor, {
	      active: checked,
	      disabled: disabled,
	      readonly: readonly
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        toggle($event)
	      }
	    }
	  }, [_h('input', {
	    ref: "input",
	    attrs: {
	      "type": "checkbox",
	      "autocomplete": "off",
	      "name": name,
	      "readonly": readonly,
	      "disabled": disabled
	    },
	    domProps: {
	      "checked": active,
	      "value": value
	    },
	    on: {
	      "checked": toggle
	    }
	  }), " ", (!isButton) ? _h('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [active ? 'btn-' + typeColor : '', {
	      bg: typeColor === 'default'
	    }]
	  }) : _e(), " ", (!isButton & active && typeColor === 'default') ? _h('span', {
	    staticClass: "icon"
	  }) : _e(), " ", _t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6922bf24", module.exports)
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b1e0461a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-b1e0461a", __vue_options__)
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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b1e0461a!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b1e0461a!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue");
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
	exports.push([module.id, "\n.accordion-toggle {\r\n  cursor: pointer;\n}\n.collapse-enter-active,\r\n.collapse-leave-active {\r\n  transition: max-height .5s ease;\n}\n.collapse-enter,\r\n.collapse-leave-active {\r\n  max-height: 0 !important;\n}\r\n", "", {"version":3,"sources":["/./src/Panel.vue?1cefe220"],"names":[],"mappings":";AAiEA;EACA,gBAAA;CACA;AACA;;EAEA,gCAAA;CACA;AACA;;EAEA,yBAAA;CACA","file":"Panel.vue","sourcesContent":["<template>\r\n  <div :class=\"['panel',panelType]\">\r\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\r\n      <slot name=\"header\"><h4 class=\"panel-title\">{{ header }}</h4></slot>\r\n    </div>\r\n    <transition name=\"collapse\">\r\n      <div class=\"panel-collapse\" v-if=\"open\">\r\n        <div class=\"panel-body\">\r\n          <slot></slot>\r\n        </div>\r\n      </div>\r\n    </transition>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    header: {type: String},\r\n    isOpen: {type: Boolean, default: null},\r\n    type: {type: String, default : null}\r\n  },\r\n  data() {\r\n    return {\r\n      open: this.isOpen\r\n    }\r\n  },\r\n  watch: {\r\n    isOpen( val ) {\r\n      this.open = val\r\n    }\r\n  },\r\n  computed: {\r\n    inAccordion () { return this.$parent && this.$parent._isAccordion },\r\n    panelType () { return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default') }\r\n  },\r\n  methods: {\r\n    toggle () {\r\n      this.open = !this.open\r\n      this.$emit('open', this)\r\n    }\r\n  },\r\n  transitions: {\r\n    collapse: {\r\n      afterEnter (el) {\r\n        el.style.maxHeight = ''\r\n        el.style.overflow = ''\r\n      },\r\n      beforeLeave (el) {\r\n        el.style.maxHeight = el.offsetHeight + 'px'\r\n        el.style.overflow = 'hidden'\r\n        // Recalculate DOM before the class gets added.\r\n        return el.offsetHeight\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    if (this.isOpen === null) {\r\n      this.open = !this.inAccordion\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-enter-active,\r\n.collapse-leave-active {\r\n  transition: max-height .5s ease;\r\n}\r\n.collapse-enter,\r\n.collapse-leave-active {\r\n  max-height: 0 !important;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
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

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    class: ['panel', panelType]
	  }, [_h('div', {
	    class: ['panel-heading', {
	      'accordion-toggle': inAccordion
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        inAccordion && toggle()
	      }
	    }
	  }, [_t("header", [_h('h4', {
	    staticClass: "panel-title"
	  }, [_s(header)])])]), " ", _h('transition', {
	    attrs: {
	      "name": "collapse"
	    }
	  }, [(open) ? _h('div', {
	    staticClass: "panel-collapse"
	  }, [_h('div', {
	    staticClass: "panel-body"
	  }, [_t("default")])]) : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b1e0461a", module.exports)
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\components\\Select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0444c39e"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0444c39e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0444c39e", __vue_options__)
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
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0444c39e&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0444c39e&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue");
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
	exports.push([module.id, "\nbutton.form-control.dropdown-toggle[data-v-0444c39e]{\r\n  height: auto;\r\n  padding-right: 24px;\n}\nbutton.form-control.dropdown-toggle[data-v-0444c39e]:after{\r\n  content: ' ';\r\n  position: absolute;\r\n  right: 13px;\r\n  top: 50%;\r\n  margin: -1px 0 0;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\n}\n.bs-searchbox[data-v-0444c39e] {\r\n  position: relative;\r\n  margin: 4px 8px;\n}\n.bs-searchbox .close[data-v-0444c39e] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.bs-searchbox input[data-v-0444c39e]:focus,\r\n.secret:focus + button[data-v-0444c39e] {\r\n  outline: 0;\r\n  border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.secret[data-v-0444c39e] {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\n}\nbutton>.close[data-v-0444c39e] { margin-left: 5px;\n}\n.notify.out[data-v-0444c39e] { position: relative;\n}\n.notify.in[data-v-0444c39e],\r\n.notify>div[data-v-0444c39e] {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\n}\n.notify>div[data-v-0444c39e] {\r\n  top: 5px;\r\n  z-index: 1;\n}\n.notify.in[data-v-0444c39e] {\r\n  opacity: .9;\r\n  bottom: 5px;\n}\n.btn-group-justified .dropdown-toggle>span[data-v-0444c39e]:not(.close) {\r\n  width: calc(100% - 18px);\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  margin-bottom: -4px;\n}\n.btn-group-justified .dropdown-menu[data-v-0444c39e] { width: 100%;\n}\r\n", "", {"version":3,"sources":["/./src/components/Select.vue?4b707350"],"names":[],"mappings":";AAwPA;EACA,aAAA;EACA,oBAAA;CACA;AACA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,oCAAA;EACA,mCAAA;CACA;AACA;EACA,mBAAA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;;EAEA,WAAA;EACA,iCAAA;EACA,0EAAA;CACA;AACA;EACA,UAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,WAAA;CACA;AACA,iCAAA,iBAAA;CAAA;AACA,+BAAA,mBAAA;CAAA;AACA;;EAEA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;EACA,4CAAA;EACA,qBAAA;CACA;AACA;EACA,SAAA;EACA,WAAA;CACA;AACA;EACA,YAAA;EACA,YAAA;CACA;AACA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;CACA;AACA,uDAAA,YAAA;CAAA","file":"Select.vue","sourcesContent":["<template>\r\n  <div ref=\"select\" :class=\"classes\" v-click-outside=\"blur\">\r\n    <button type=\"button\" class=\"form-control dropdown-toggle\"\r\n      :disabled=\"disabled || !hasParent\"\r\n      :readonly=\"readonly\"\r\n      @click=\"toggle()\"\r\n      @keyup.esc=\"show = false\"\r\n    >\r\n      <span class=\"btn-content\" v-html=\"loading ? text.loading : showPlaceholder || selected\"></span>\r\n      <span v-if=\"clearButton&&values.length\" class=\"close\" @click=\"clear()\">&times;</span>\r\n    </button>\r\n    <select ref=\"sel\" v-model=\"val\" v-show=\"show\" :name=\"name\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\">\r\n      <option v-if=\"required\" value=\"\"></option>\r\n      <option v-for=\"option in list\" :value=\"option[optionsValue]\">{{ option[optionsLabel] }}</option>\r\n    </select>\r\n    <ul class=\"dropdown-menu\">\r\n      <template v-if=\"list.length\">\r\n        <li v-if=\"canSearch\" class=\"bs-searchbox\">\r\n          <input type=\"text\" :placeholder=\"searchText||text.search\" class=\"form-control\" autocomplete=\"off\" ref=\"search\"\r\n            v-model=\"searchValue\"\r\n            @keyup.esc=\"show = false\"\r\n          />\r\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\">&times;</span>\r\n        </li>\r\n        <li v-if=\"required&&!clearButton\"><a @mousedown.prevent=\"clear() && blur()\">{{ placeholder || text.notSelected }}</a></li>\r\n        <li v-for=\"option in filteredOptions\" :id=\"option[optionsValue]\">\r\n          <a @mousedown.prevent=\"select(option[optionsValue])\">\r\n            <span v-html=\"option[optionsLabel]\"></span>\r\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option[optionsValue])\"></span>\r\n          </a>\r\n        </li>\r\n      </template>\r\n      <slot></slot>\r\n      <transition v-if=\"notify && !closeOnSelect\" name=\"fadein\"><div class=\"notify in\">{{limitText}}</div></transition>\r\n    </ul>\r\n    <transition v-if=\"notify && closeOnSelect\" name=\"fadein\"><div class=\"notify out\"><div>{{limitText}}</div></div></transition>\r\n    <!-- <pre>Options: {{list}}</pre> -->\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {translations} from './utils/utils.js'\r\nimport ClickOutside from './../directives/ClickOutside.js'\r\n\r\nvar timeout = {}\r\nexport default {\r\n  directives: {\r\n    ClickOutside\r\n  },\r\n  props: {\r\n    clearButton: {type: Boolean, default: false},\r\n    closeOnSelect: {type: Boolean, default: false},\r\n    disabled: {type: Boolean, default: false},\r\n    lang: {type: String, default: navigator.language},\r\n    limit: {type: Number, default: 1024},\r\n    minSearch: {type: Number, default: 0},\r\n    multiple: {type: Boolean, default: false},\r\n    name: {type: String, default: null},\r\n    options: {type: Array, default () { return [] }},\r\n    optionsLabel: {type: String, default: 'label'},\r\n    optionsValue: {type: String, default: 'value'},\r\n    parent: {default: true},\r\n    placeholder: {type: String, default: null},\r\n    readonly: {type: Boolean, default: null},\r\n    required: {type: Boolean, default: null},\r\n    search: {type: Boolean, default: false},\r\n    searchText: {type: String, default: null},\r\n    url: {type: String, default: null},\r\n    value: null\r\n  },\r\n  data () {\r\n    return {\r\n      list: [],\r\n      loading: null,\r\n      searchValue: null,\r\n      show: false,\r\n      notify: false,\r\n      val: null,\r\n      valid: null\r\n    }\r\n  },\r\n  computed: {\r\n    canSearch () { return this.minSearch ? this.list.length >= this.minSearch : this.search },\r\n    classes () { return [{open: this.show, disabled: this.disabled}, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'] },\r\n    filteredOptions: function () {\r\n      var search = (this.searchValue || '').toLowerCase()\r\n      return !search ? this.list : this.list.filter(el => {\r\n        return !!~el[this.optionsValue].toLowerCase().search(search)\r\n      })\r\n    },\r\n    hasParent () { return this.parent instanceof Array ? this.parent.length : this.parent },\r\n    inInput () { return this.$parent._input },\r\n    isLi () { return this.$parent._navbar || this.$parent.menu || this.$parent._tabset },\r\n    limitText () { return this.text.limit.replace('{{limit}}', this.limit) },\r\n    selected () {\r\n      if (this.list.length === 0) { return '' }\r\n      var sel = this.values.map(val => (this.list.find(o => o[this.optionsValue] === val) || {})[this.optionsLabel]).filter(val => val !== undefined)\r\n      this.$emit('selected', sel)\r\n      return sel.join(', ')\r\n    },\r\n    showPlaceholder () { return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null },\r\n    text () { return translations(this.lang) },\r\n    values () { return this.val instanceof Array ? this.val : ~[null, undefined].indexOf(this.val) ? [] : [this.val] }\r\n  },\r\n  watch: {\r\n    options (options) {\r\n      if (options instanceof Array) this.setOptions(options)\r\n    },\r\n    show (val) {\r\n      if (val) {\r\n        this.$refs.sel.focus()\r\n        this.$refs.search && this.$refs.search.focus()\r\n        // onBlur(this.$refs.select, e => { this.show = false })\r\n      } else {\r\n        // offBlur(this.$refs.select)\r\n      }\r\n    },\r\n    url () {\r\n      this.urlChanged()\r\n    },\r\n    valid (val, old) {\r\n      this.$emit('isvalid', val)\r\n      this.$emit(!val ? 'invalid' : 'valid')\r\n      if (val !== old && this._parent) this._parent.validate()\r\n    },\r\n    value (val, old) {\r\n      if (val !== old) { this.val = val }\r\n    },\r\n    val (val, old) {\r\n      if (val !== old) {\r\n        this.$emit('change', val)\r\n        this.$emit('input', val)\r\n      }\r\n      if (val instanceof Array && val.length > this.limit) {\r\n        this.notify = true\r\n        if (timeout.limit) clearTimeout(timeout.limit)\r\n        timeout.limit = setTimeout(() => {\r\n          timeout.limit = false\r\n          this.notify = false\r\n        }, 1500)\r\n      }\r\n      this.checkMultiple()\r\n      this.valid = this.validate()\r\n    }\r\n  },\r\n  methods: {\r\n    blur () {\r\n      this.show = false\r\n    },\r\n    checkMultiple () {\r\n      if (this.multiple) {\r\n        if (this.limit < 1) { this.limit = 1 }\r\n        if (!(this.val instanceof Array)) {\r\n          this.val = (this.val === null || this.val === undefined) ? [] : [this.val]\r\n        }\r\n        if (this.values.length > this.limit) {\r\n          this.val = this.val.slice(0, this.limit)\r\n        }\r\n      }\r\n    },\r\n    clear () {\r\n      if (this.disabled || this.readonly) { return }\r\n      this.val = this.val instanceof Array ? [] : null\r\n      this.toggle()\r\n    },\r\n    clearSearch () {\r\n      this.searchValue = ''\r\n      this.$refs.search.focus()\r\n    },\r\n    isSelected (v) {\r\n      return this.values.indexOf(v) > -1\r\n    },\r\n    select (v) {\r\n      if (this.val instanceof Array) {\r\n        if (~this.val.indexOf(v)) {\r\n          var index = this.val.indexOf(v)\r\n          this.val.splice(index, 1)\r\n        } else {\r\n          this.val.push(v)\r\n        }\r\n        if (this.closeOnSelect) {\r\n          this.toggle()\r\n        }\r\n      } else {\r\n        this.val = v\r\n        this.toggle()\r\n      }\r\n    },\r\n    setOptions (options) {\r\n      this.list = options.map(el => {\r\n        if (el instanceof Object) { return el }\r\n        let obj = {}\r\n        obj[this.optionsLabel] = el\r\n        obj[this.optionsValue] = el\r\n        return obj\r\n      })\r\n      this.$emit('input-options', this.list)\r\n    },\r\n    toggle () {\r\n      this.show = !this.show\r\n    },\r\n    urlChanged () {\r\n      if (!this.url || !this.$http) { return }\r\n      this.loading = true\r\n      this.$http.get(this.url).then(response => {\r\n        var data = response.data instanceof Array ? response.data : []\r\n        try { data = JSON.parse(data) } catch (e) {}\r\n        this.setOptions(data)\r\n        this.loading = false\r\n        this.checkMultiple()\r\n      }, response => {\r\n        this.loading = false\r\n        this.checkMultiple()\r\n      })\r\n    },\r\n    validate () {\r\n      return !this.required ? true : this.val instanceof Array ? this.val.length > 0 : this.val !== null\r\n    }\r\n  },\r\n  created () {\r\n    this.setOptions(this.options)\r\n    this.val = this.value\r\n    this._select = true\r\n    if (this.val === undefined || !this.parent) { this.val = null }\r\n    if (!this.multiple && this.val instanceof Array) {\r\n      this.val = this.val[0]\r\n    }\r\n    this.checkMultiple()\r\n    if (this.url) this.urlChanged()\r\n    let parent = this.$parent\r\n    while (parent && !parent._formGroup) { parent = parent.$parent }\r\n    if (parent && parent._formGroup) {\r\n      this._parent = parent\r\n    }\r\n  },\r\n  mounted () {\r\n    if (this._parent) this._parent.children.push(this)\r\n  },\r\n  beforeDestroy () {\r\n    if (this._parent) {\r\n      var index = this._parent.children.indexOf(this)\r\n      this._parent.children.splice(index, 1)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\nbutton.form-control.dropdown-toggle{\r\n  height: auto;\r\n  padding-right: 24px;\r\n}\r\nbutton.form-control.dropdown-toggle:after{\r\n  content: ' ';\r\n  position: absolute;\r\n  right: 13px;\r\n  top: 50%;\r\n  margin: -1px 0 0;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n.bs-searchbox {\r\n  position: relative;\r\n  margin: 4px 8px;\r\n}\r\n.bs-searchbox .close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.bs-searchbox input:focus,\r\n.secret:focus + button {\r\n  outline: 0;\r\n  border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.secret {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\nbutton>.close { margin-left: 5px;}\r\n.notify.out { position: relative; }\r\n.notify.in,\r\n.notify>div {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n}\r\n.notify>div {\r\n  top: 5px;\r\n  z-index: 1;\r\n}\r\n.notify.in {\r\n  opacity: .9;\r\n  bottom: 5px;\r\n}\r\n.btn-group-justified .dropdown-toggle>span:not(.close) {\r\n  width: calc(100% - 18px);\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  margin-bottom: -4px;\r\n}\r\n.btn-group-justified .dropdown-menu { width: 100%; }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
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
	        return !!~el[_this.optionsValue].toLowerCase().search(search);
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
	      var _this3 = this;
	
	      if (_val !== old) {
	        this.$emit('change', _val);
	        this.$emit('input', _val);
	      }
	      if (_val instanceof Array && _val.length > this.limit) {
	        this.notify = true;
	        if (timeout.limit) clearTimeout(timeout.limit);
	        timeout.limit = setTimeout(function () {
	          timeout.limit = false;
	          _this3.notify = false;
	        }, 1500);
	      }
	      this.checkMultiple();
	      this.valid = this.validate();
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    checkMultiple: function checkMultiple() {
	      if (this.multiple) {
	        if (this.limit < 1) {
	          this.limit = 1;
	        }
	        if (!(this.val instanceof Array)) {
	          this.val = this.val === null || this.val === undefined ? [] : [this.val];
	        }
	        if (this.values.length > this.limit) {
	          this.val = this.val.slice(0, this.limit);
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
	      var _this4 = this;
	
	      this.list = options.map(function (el) {
	        if (el instanceof Object) {
	          return el;
	        }
	        var obj = {};
	        obj[_this4.optionsLabel] = el;
	        obj[_this4.optionsValue] = el;
	        return obj;
	      });
	      this.$emit('input-options', this.list);
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	    urlChanged: function urlChanged() {
	      var _this5 = this;
	
	      if (!this.url || !this.$http) {
	        return;
	      }
	      this.loading = true;
	      this.$http.get(this.url).then(function (response) {
	        var data = response.data instanceof Array ? response.data : [];
	        try {
	          data = JSON.parse(data);
	        } catch (e) {}
	        _this5.setOptions(data);
	        _this5.loading = false;
	        _this5.checkMultiple();
	      }, function (response) {
	        _this5.loading = false;
	        _this5.checkMultiple();
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
	    this.checkMultiple();
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
	exports.oneBlur = oneBlur;
	exports.onBlur = onBlur;
	exports.offBlur = offBlur;
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
	  var actions = ['done', 'fail'];
	  actions.forEach(function (name) {
	    data[name] = [];
	    p[name] = function (fn) {
	      if (fn instanceof Function) data[name].push(fn);
	      return p;
	    };
	  });
	  p.done(JSON.parse);
	  request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	      (function () {
	        var e = { status: request.status };
	        if (request.status === 200) {
	          try {
	            (function () {
	              var value = void 0;
	              var response = request.responseText;
	              data.done.forEach(function (done) {
	                if ((value = done(response)) !== undefined) {
	                  response = value;
	                }
	              });
	            })();
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
	
	// delayer: set a function that execute after a delay. Work with a prop timer set in the vue object, or a direct number value.
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
	
	var blurList = [];
	function oneBlur(node, callback) {
	  if (!callback) {
	    return;
	  }
	  var blurEvent = function blurEvent(e) {
	    if (!node.contains(e.target) && node !== e.target) {
	      callback.call(node, e, node);
	      offBlur(node, callback);
	    }
	  };
	  blurList.push({
	    node: node,
	    callback: callback,
	    blurEvent: blurEvent
	  });
	  document.addEventListener('click', blurEvent, false);
	  document.addEventListener('touchstart', blurEvent, false);
	}
	
	function onBlur(node, callback) {
	  if (!callback) {
	    return;
	  }
	  var blurEvent = function blurEvent(e) {
	    if (!node.contains(e.target) && node !== e.target) callback.call(node, e, node);
	  };
	  blurList.push({
	    node: node,
	    callback: callback,
	    blurEvent: blurEvent
	  });
	  document.addEventListener('click', blurEvent, false);
	  document.addEventListener('touchstart', blurEvent, false);
	}
	
	function offBlur(node, callback) {
	  blurList.filter(function (el) {
	    return el.node === node && (callback ? el.callback === callback : true);
	  }).forEach(function (el) {
	    el.node.removeEventListener('click', el.callback);
	    el.node.removeEventListener('touchstart', el.callback);
	  });
	  blurList = blurList.filter(function (el) {
	    return el.node !== node || (callback ? el.callback !== callback : false);
	  });
	}
	
	// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a parser, so this work only if your code is compatible with both)
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var HANDLER = '_vue_clickoutside_handler';
	
	function bind(el, binding) {
	  unbind(el);
	
	  var callback = binding.value;
	  if (typeof callback !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      Vue.util.warn('ClickOutside only work with a function value, received: v-' + binding.name + '="' + binding.expression + '"');
	    }
	  } else {
	    el[HANDLER] = function (e) {
	      if (!el.contains(e.target)) callback(e);
	    };
	    document.addEventListener('click', el[HANDLER], false);
	  }
	}
	
	function unbind(el) {
	  document.removeEventListener('click', el[HANDLER], false);
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

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (blur),
	      expression: "blur"
	    }],
	    ref: "select",
	    class: classes
	  }, [_h('button', {
	    staticClass: "form-control dropdown-toggle",
	    attrs: {
	      "type": "button",
	      "disabled": disabled || !hasParent,
	      "readonly": readonly
	    },
	    on: {
	      "click": function($event) {
	        toggle()
	      },
	      "keyup": function($event) {
	        if ($event.keyCode !== 27) return;
	        show = false
	      }
	    }
	  }, [_h('span', {
	    staticClass: "btn-content",
	    domProps: {
	      "innerHTML": _s(loading ? text.loading : showPlaceholder || selected)
	    }
	  }), " ", (clearButton && values.length) ? _h('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        clear()
	      }
	    }
	  }, ["×"]) : _e()]), " ", _h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (val),
	      expression: "val"
	    }, {
	      name: "show",
	      rawName: "v-show",
	      value: (show),
	      expression: "show"
	    }],
	    ref: "sel",
	    staticClass: "secret",
	    attrs: {
	      "name": name,
	      "multiple": multiple,
	      "required": required,
	      "readonly": readonly,
	      "disabled": disabled
	    },
	    on: {
	      "change": function($event) {
	        val = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          return "_value" in o ? o._value : o.value
	        })[0]
	      }
	    }
	  }, [(required) ? _h('option', {
	    attrs: {
	      "value": ""
	    }
	  }) : _e(), " ", _l((list), function(option) {
	    return _h('option', {
	      domProps: {
	        "value": option[optionsValue]
	      }
	    }, [_s(option[optionsLabel])])
	  })]), " ", _h('ul', {
	    staticClass: "dropdown-menu"
	  }, [(list.length) ? [(canSearch) ? _h('li', {
	    staticClass: "bs-searchbox"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (searchValue),
	      expression: "searchValue"
	    }],
	    ref: "search",
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": searchText || text.search,
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": _s(searchValue)
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 27) return;
	        show = false
	      },
	      "input": function($event) {
	        if ($event.target.composing) return;
	        searchValue = $event.target.value
	      }
	    }
	  }), " ", _h('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (searchValue),
	      expression: "searchValue"
	    }],
	    staticClass: "close",
	    on: {
	      "click": clearSearch
	    }
	  }, ["×"])]) : _e(), " ", (required && !clearButton) ? _h('li', [_h('a', {
	    on: {
	      "mousedown": function($event) {
	        $event.preventDefault();
	        clear() && blur()
	      }
	    }
	  }, [_s(placeholder || text.notSelected)])]) : _e(), " ", _l((filteredOptions), function(option) {
	    return _h('li', {
	      attrs: {
	        "id": option[optionsValue]
	      }
	    }, [_h('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          select(option[optionsValue])
	        }
	      }
	    }, [_h('span', {
	      domProps: {
	        "innerHTML": _s(option[optionsLabel])
	      }
	    }), " ", _h('span', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (isSelected(option[optionsValue])),
	        expression: "isSelected(option[optionsValue])"
	      }],
	      staticClass: "glyphicon glyphicon-ok check-mark"
	    })])])
	  })] : _e(), " ", _t("default"), " ", (notify && !closeOnSelect) ? _h('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_h('div', {
	    staticClass: "notify in"
	  }, [_s(limitText)])]) : _e()]), " ", (notify && closeOnSelect) ? _h('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_h('div', {
	    staticClass: "notify out"
	  }, [_h('div', [_s(limitText)])])]) : _e(), " "])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0444c39e", module.exports)
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "accordion",
	      "name": "Accordion"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('checkbox', {
	    attrs: {
	      "type": "primary"
	    },
	    domProps: {
	      "checked": checked
	    },
	    on: {
	      "checked": function($event) {
	        checked = argument[0]
	      }
	    }
	  }, ["Open only one at a time."]), " ", _h('p', [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (selected),
	      expression: "selected"
	    }],
	    attrs: {
	      "options": types,
	      "clear-button": "",
	      "placeholder": "Global type"
	    },
	    domProps: {
	      "value": (selected)
	    },
	    on: {
	      "input": function($event) {
	        selected = $event
	      }
	    }
	  })]), " ", _h('p', [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (first),
	      expression: "first"
	    }],
	    attrs: {
	      "options": types,
	      "clear-button": "",
	      "placeholder": "First element type"
	    },
	    domProps: {
	      "value": (first)
	    },
	    on: {
	      "input": function($event) {
	        first = $event
	      }
	    }
	  })]), " ", _h('accordion', {
	    attrs: {
	      "one-at-atime": checked,
	      "type": selected
	    }
	  }, [_h('panel', {
	    attrs: {
	      "is-open": "",
	      "type": first == 'panel' ? null : first
	    }
	  }, [_h('strong', {
	    slot: "header"
	  }, [_m(0)]), "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      "]), " ", _h('panel', {
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
	  }, ["\n    <accordion :one-at-atime=\"checked\" type=\"info\">\n      <panel is-open type=\"primary\">\n        <strong slot=\"header\"><u>Panel #1</u></strong>\n        ...\n      </panel>\n      <panel header=\"Panel #2\">\n        ...\n      </panel>\n      <panel header=\"Panel #3\">\n        ...\n      </panel>\n      <panel header=\"Panel #4\">\n        ...\n      </panel>\n    </accordion>\n  "]), " ", _h('doc-table', [_m(1), " ", _m(2)]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Panel"
	    }
	  }, [_m(3), " ", _m(4), " ", _m(5)]), " ", _m(6)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('u', ["Panel #1"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Define the type of color for the tabs (global)."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["one-at-time"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Control whether expanding an item will cause the other items to close."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["The clickable text on the group's header. You need one to be able to click on the header for toggling."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["is-open"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Whether accordion group is open or closed."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Define the type of color for the tab (single)."])])
	}},function (){with(this) {
	  return _h('p', ["If you want to personalice your header with some html you can use the slot instead of header attribute (panel #1 in the example)."])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-76818dd9", module.exports)
	  }
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(35)
	
	/* script */
	__vue_exports__ = __webpack_require__(37)
	
	/* template */
	var __vue_template__ = __webpack_require__(122)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\affixDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-81085d3e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-81085d3e", __vue_options__)
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
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-81085d3e!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-81085d3e!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./affixDocs.vue");
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
	exports.push([module.id, "\n.animated {\r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n0%, 100% {transform: translateX(0);\n}\n10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);\n}\n20%, 40%, 60%, 80% {transform: translateX(5px);\n}\n}\n.shake {\r\n    -webkit-animation-name: shake;\r\n    animation-name: shake;\n}\r\n", "", {"version":3,"sources":["/./docs/example/affixDocs.vue?2d2dca86"],"names":[],"mappings":";AAiDA;IACA,+BAAA;IACA,uBAAA;IACA,kCAAA;IACA,0BAAA;IACA,mCAAA;CACA;AACA;AACA,UAAA,yBAAA;CAAA;AACA,yBAAA,4BAAA;CAAA;AACA,oBAAA,2BAAA;CAAA;CACA;AACA;IACA,8BAAA;IACA,sBAAA;CACA","file":"affixDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"affix\" name=\"Affix\">\r\n    <div class=\"bs-example\">\r\n      <h3>\r\n        The sub-navigation on the RIGHT is a live demo of the affix.\r\n        <span class=\"visible-xs-block visible-sm-block\">(The live demo is hidden in small screens)</span>\r\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\r\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm\"></span>\r\n        </tooltip>\r\n      </h3>\r\n    </div>\r\n    <doc-code language=\"markup\">\r\n      &lt;affix offset=\"50\">\r\n        &lt;ul>\r\n          &lt;li>...&lt;/li>\r\n          &lt;li>...&lt;/li>\r\n          &lt;li>...&lt;/li>\r\n        &lt;/ul>\r\n        &lt;a href=\"#\">...&lt;/a>\r\n      &lt;/affix>\r\n    </doc-code>\r\n    <doc-table>\r\n      <div>\r\n        <p>offset</p>\r\n        <p><code>Number</code></p>\r\n        <p><code>0</code></p>\r\n        <p>Pixels to offset from top of screen when calculating position of scroll.</p>\r\n      </div>\r\n    </doc-table>\r\n  </doc-section>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './utils/docSection.vue'\r\nimport docTable from './utils/docTable.js'\r\nimport docCode from './utils/docCode.js'\r\nimport tooltip from 'src/Tooltip.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docTable,\r\n    docCode,\r\n    tooltip\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.animated {\r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    animation-iteration-count: infinite\r\n}\r\n@keyframes shake {\r\n    0%, 100% {transform: translateX(0);}\r\n    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}\r\n    20%, 40%, 60%, 80% {transform: translateX(5px);}\r\n}\r\n.shake {\r\n    -webkit-animation-name: shake;\r\n    animation-name: shake;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
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
	
	/* styles */
	__webpack_require__(39)
	
	/* script */
	__vue_exports__ = __webpack_require__(41)
	
	/* template */
	var __vue_template__ = __webpack_require__(121)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-48fb51b2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-48fb51b2", __vue_options__)
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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-48fb51b2!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-48fb51b2!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue");
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
	exports.push([module.id, "\n.tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9\n}\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave-active {\r\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n0% {\r\n    opacity: 0;\n}\n100% {\r\n    opacity: .9;\n}\n}\n@keyframes fadein-out {\n0% {\r\n    opacity: .9;\n}\n100% {\r\n    opacity: 0;\n}\n}\r\n", "", {"version":3,"sources":["/./src/Tooltip.vue?1dbc0654"],"names":[],"mappings":";AAyBA;;;;EAIA,WAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,WAAA;CACA;AACA;IACA,YAAA;CACA;CACA;AACA;AACA;IACA,YAAA;CACA;AACA;IACA,WAAA;CACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\r\n  <span ref=\"trigger\">\r\n    <slot></slot>\r\n    <transition :name=\"effect\">\r\n      <div ref=\"popover\" v-if=\"show\" style=\"display:block;\" :class=\"['tooltip',placement]\">\r\n        <div class=\"tooltip-arrow\"></div>\r\n        <div class=\"tooltip-inner\"><slot name=\"content\" v-html=\"content\"></slot></div>\r\n      </div>\r\n    </transition>\r\n  </span>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    effect: {type: String, default: 'scale'},\r\n    trigger: {type: String, default: 'hover'}\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9\r\n}\r\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave-active {\r\n  animation:fadein-out 0.3s ease-out;\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
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
	
	// let coerce = {
	//   header: 'boolean'
	// }
	
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
	      setTimeout(function () {
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
	      }, 0);
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
	
	var _typeof2 = __webpack_require__(44);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _defineProperty = __webpack_require__(112);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(45);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(115);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(119);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(120);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Node = window.Node;
	var HTMLCollection = window.HTMLCollection;
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent = void 0;
	var blurList = [];
	var Events = [];
	
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
	    } else if (0 in args && !(args[0] instanceof Node) && args[0] && 'length' in args[0]) {
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
	        for (var i in arr) {
	          if (arr[i] instanceof Node) {
	            if (!~nodes.indexOf(arr[i])) nodes.push(arr[i]);
	          } else if (arr[i]) {
	            flatten(arr[i]);
	          }
	        }
	      }
	      for (var i in arguments) {
	        var arg = arguments[i];
	        if (arg instanceof Node) {
	          if (!~nodes.indexOf(arg)) nodes.push(arg);
	        } else if (arg instanceof window.NodeList || arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array) {
	          flatten(arg);
	        } else {
	          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	        }
	      }
	      return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return this.map(function (el) {
	        return el.parentNode;
	      });
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      return new NodeList([ArrayProto.filter.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      var flat = flatten(this);
	      for (var i in flat) {
	        var n = flat[i];
	        if (n && n.querySelectorAll) {
	          var node = n.querySelectorAll(element);
	          if (node && node.length) nodes.push(node);
	        }
	      }
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'findChildren',
	    value: function findChildren(element) {
	      var _this = this;
	
	      return this.find(element).filter(function (el) {
	        return _this.includes(el.parentElement);
	      });
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
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return flatten(ArrayProto.map.apply(this, args), this);
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
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      for (var i in args) {
	        if (!(args[i] instanceof Node)) throw nodeError;
	        if (!~this.indexOf(args[i])) ArrayProto.push.call(this, args[i]);
	      }
	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      return ArrayProto.filter.call(this, function (el) {
	        if (el.remove) {
	          el.remove();
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        }
	        return document.body.contains(el);
	      });
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var shift = ArrayProto.shift.bind(this);
	      while (amount--) {
	        nodes.push(shift());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return new NodeList([ArrayProto.slice.apply(this, args), this]);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      for (var i = 2, l = args.length; i < l; i++) {
	        if (!(args[i] instanceof Node)) throw nodeError;
	      }
	      return new NodeList([ArrayProto.splice.apply(this, args), this]);
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var unshift = ArrayProto.unshift.bind(this);
	
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      for (var i in args) {
	        if (!(args[i] instanceof Node)) throw nodeError;
	        if (!~this.indexOf(args[i])) unshift(args[i]);
	      }
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
	      var _this2 = this;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      classes.forEach(function (c) {
	        return _this2.each(function (el) {
	          return el.classList[method](c);
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      for (var i in this) {
	        if (this[i] !== null) {
	          this[i] = this[i][prop];
	        }
	        arr.push(this[i]);
	      }
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      var i = void 0;
	      if (prop.constructor === Object) {
	        for (i in this) {
	          if (this[i]) {
	            for (var key in prop) {
	              if (key in this[i]) {
	                this[i][key] = prop[key];
	              }
	            }
	          }
	        }
	      } else {
	        for (i in this) {
	          if (prop in this[i]) {
	            this[i][prop] = value;
	          }
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      for (var i in this) {
	        if (this[i] && this[i][method] instanceof Function) {
	          this[i] = this[i][method].apply(this[i], args);
	          arr.push(this[i]);
	          if (returnThis && this[i] !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      }
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return new NodeList([[this[index]], this]);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      var _this3 = this;
	
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
	        var els = new NodeList([selector, this]);
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
	      events.forEach(function (event) {
	        for (var i in _this3) {
	          if (_this3[i] === window || _this3[i] instanceof Node) {
	            _this3[i].addEventListener(event, callback, false);
	            Events.push({
	              el: _this3[i],
	              event: event,
	              callback: callback
	            });
	          }
	        }
	      });
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      var _this4 = this;
	
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      if (typeof events === 'string' && callback instanceof Function) {
	        var _loop = function _loop(i) {
	          Events.forEach(function (e) {
	            events.events.split(' ').forEach(function (event) {
	              if (Events[e] && Events[e].el === _this4[i] && Events[e].event === event && Events[e].callback === callback) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        };
	
	        for (var i in this) {
	          _loop(i);
	        }
	      } else if (typeof events === 'string') {
	        var _loop2 = function _loop2(_i) {
	          Events.forEach(function (e) {
	            events.split(' ').forEach(function (event) {
	              if (Events[e] && Events[e].el === _this4[_i] && Events[e].event === event) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        };
	
	        for (var _i in this) {
	          _loop2(_i);
	        }
	      } else if (callback instanceof Function) {
	        for (var _i2 in this) {
	          for (var e in Events) {
	            if (Events[e] && Events[e].el === this[_i2] && Events[e].callback === callback) {
	              Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	              delete Events[e];
	            }
	          }
	        }
	      } else {
	        for (var _i3 in this) {
	          for (var _e in Events) {
	            if (Events[_e] && Events[_e].el === this[_i3]) {
	              Events[_e].el.removeEventListener(Events[_e].event, Events[_e].callback);
	              delete Events[_e];
	            }
	          }
	        }
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
	        blurList.push({
	          el: el,
	          callback: callback
	        });
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
	        for (var e in blurList) {
	          if (blurList[e] && blurList[e].el === el && (!callback || blurList[e].callback === callback)) {
	            delete blurList[e];
	          }
	        }
	      });
	      blurList = blurList.filter(function (el) {
	        return el !== undefined;
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
	  for (var i in arr) {
	    var el = arr[i];
	    if (el instanceof Node || el === null) {
	      if (!~list.indexOf(el)) list.push(el);
	    } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
	      for (var id in el) {
	        list.push(el[id]);
	      }
	    } else {
	      arr.get = NL.get;
	      arr.set = NL.set;
	      arr.call = NL.call;
	      arr.owner = owner;
	      return arr;
	    }
	  }
	  return new NodeList([list, owner]);
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
	  var _arguments = arguments,
	      _this5 = this;
	
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      var arr = [];
	      var returnThis = true;
	      for (var i in NL) {
	        var el = NL[i];
	        if (el && el[prop] instanceof Function) {
	          el = el[prop].apply(el, _arguments);
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
	        for (var i in this) {
	          if (this[i] !== null) {
	            this[i] = this[i][prop];
	          }
	          arr.push(this[i]);
	        }
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        for (var i in this) {
	          if (i) {
	            var o = this[i];
	
	            if ((typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) == 'object' && prop in o) {
	              o[prop] = value;
	            }
	          }
	        }
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  return new NodeList(arguments);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(45);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(96);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
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
	module.exports = __webpack_require__(95).f('iterator');

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
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(86).appendChild(iframe);
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

	__webpack_require__(92);
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(93)
	  , step             = __webpack_require__(94)
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
/* 93 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(88);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	module.exports = __webpack_require__(55).Symbol;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(54)
	  , has            = __webpack_require__(69)
	  , DESCRIPTORS    = __webpack_require__(63)
	  , $export        = __webpack_require__(53)
	  , redefine       = __webpack_require__(68)
	  , META           = __webpack_require__(99).KEY
	  , $fails         = __webpack_require__(64)
	  , shared         = __webpack_require__(83)
	  , setToStringTag = __webpack_require__(87)
	  , uid            = __webpack_require__(84)
	  , wks            = __webpack_require__(88)
	  , wksExt         = __webpack_require__(95)
	  , wksDefine      = __webpack_require__(100)
	  , keyOf          = __webpack_require__(101)
	  , enumKeys       = __webpack_require__(102)
	  , isArray        = __webpack_require__(105)
	  , anObject       = __webpack_require__(60)
	  , toIObject      = __webpack_require__(76)
	  , toPrimitive    = __webpack_require__(66)
	  , createDesc     = __webpack_require__(67)
	  , _create        = __webpack_require__(72)
	  , gOPNExt        = __webpack_require__(106)
	  , $GOPD          = __webpack_require__(108)
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
	  __webpack_require__(107).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(104).f  = $propertyIsEnumerable;
	  __webpack_require__(103).f = $getOwnPropertySymbols;
	
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
/* 99 */
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(54)
	  , core           = __webpack_require__(55)
	  , LIBRARY        = __webpack_require__(52)
	  , wksExt         = __webpack_require__(95)
	  , defineProperty = __webpack_require__(59).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 101 */
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(74)
	  , gOPS    = __webpack_require__(103)
	  , pIE     = __webpack_require__(104);
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
/* 103 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 104 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(78);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(76)
	  , gOPN      = __webpack_require__(107).f
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(75)
	  , hiddenKeys = __webpack_require__(85).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(104)
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
/* 109 */
/***/ function(module, exports) {



/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(100)('asyncIterator');

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(100)('observable');

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(114);
	var $Object = __webpack_require__(55).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(63), 'Object', {defineProperty: __webpack_require__(59).f});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117);
	var $Object = __webpack_require__(55).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(118)('getOwnPropertyNames', function(){
	  return __webpack_require__(106).f;
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(53)
	  , core    = __webpack_require__(55)
	  , fails   = __webpack_require__(64);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(112);
	
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('span', {
	    ref: "trigger"
	  }, [_t("default"), " ", _h('transition', {
	    attrs: {
	      "name": effect
	    }
	  }, [(show) ? _h('div', {
	    ref: "popover",
	    class: ['tooltip', placement],
	    attrs: {
	      "style": "display:block;"
	    }
	  }, [_m(0), " ", _h('div', {
	    staticClass: "tooltip-inner"
	  }, [_t("content")])]) : _e()])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "tooltip-arrow"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-48fb51b2", module.exports)
	  }
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "affix",
	      "name": "Affix"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('h3', ["\n      The sub-navigation on the RIGHT is a live demo of the affix.\n      ", _m(0), " ", _h('tooltip', {
	    attrs: {
	      "trigger": "hover",
	      "effect": "fadein",
	      "content": "I'm a direction, not jerking off!",
	      "placement": "left"
	    }
	  }, [_m(1)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <affix offset=\"50\">\n      <ul>\n        <li>...</li>\n        <li>...</li>\n        <li>...</li>\n      </ul>\n      <a href=\"#\">...</a>\n    </affix>\n  "]), " ", _h('doc-table', [_m(2)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    staticClass: "visible-xs-block visible-sm-block"
	  }, ["(The live demo is hidden in small screens)"])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm"
	  })
	}},function (){with(this) {
	  return _h('div', [_h('p', ["offset"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p', ["Pixels to offset from top of screen when calculating position of scroll."])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-81085d3e", module.exports)
	  }
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(124)
	
	/* template */
	var __vue_template__ = __webpack_require__(134)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\affixSidebar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-91569a18", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-91569a18", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] affixSidebar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(125);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _Affix = __webpack_require__(130);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Scroll = __webpack_require__(132);
	
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	__webpack_require__(47);
	module.exports = __webpack_require__(127);

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(60)
	  , get      = __webpack_require__(128);
	module.exports = __webpack_require__(55).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(129)
	  , ITERATOR  = __webpack_require__(88)('iterator')
	  , Iterators = __webpack_require__(70);
	module.exports = __webpack_require__(55).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 129 */
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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(131)
	
	/* template */
	var __vue_template__ = __webpack_require__(133)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Affix.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5ebddebf", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5ebddebf", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Affix.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Scroll = __webpack_require__(132);
	
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
/* 132 */
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "hidden-print hidden-xs hidden-sm"
	  }, [_h('nav', {
	    directives: [{
	      name: "scroll",
	      rawName: "v-scroll",
	      value: (checkScroll),
	      expression: "checkScroll"
	    }],
	    staticClass: "bs-docs-sidebar",
	    class: {
	      affix: affixed
	    },
	    style: ({
	      marginTop: top
	    })
	  }, [_t("default")])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5ebddebf", module.exports)
	  }
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('affix', {
	    directives: [{
	      name: "scroll",
	      rawName: "v-scroll",
	      value: (scrollSpy),
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
	  }, [_l((sections), function(s) {
	    return _h('li', {
	      class: {
	        active: active == s.id
	      }
	    }, [_h('a', {
	      attrs: {
	        "href": '#' + s.id
	      }
	    }, [_s(s.name)])])
	  })]), " ", _m(0), " ", _m(1)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('a', {
	    staticClass: "back-to-top",
	    attrs: {
	      "href": "#"
	    }
	  }, ["Back to top"])
	}},function (){with(this) {
	  return _h('a', {
	    staticClass: "back-to-top",
	    attrs: {
	      "href": "https://github.com/yuche/vue-strap"
	    }
	  }, ["GitHub"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-91569a18", module.exports)
	  }
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(136)
	
	/* script */
	__vue_exports__ = __webpack_require__(138)
	
	/* template */
	var __vue_template__ = __webpack_require__(145)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\alertDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c3778626", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c3778626", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] alertDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c3778626!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c3778626!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.alert-icon-float-left {\r\n  font-size:32px;\r\n  float:left;\r\n  margin-right:5px;\n}\r\n", "", {"version":3,"sources":["/./docs/example/alertDocs.vue?72cfaf6f"],"names":[],"mappings":";AA6HA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;CACA","file":"alertDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"alert\" name=\"Alert\">\r\n    <div class=\"bs-example\" >\r\n      <button class=\"btn btn-danger btn-lg\"\r\n        @click=\"showTop = !showTop\">\r\n        Click to toggle alert on top\r\n      </button>\r\n      <button class=\"btn btn-success btn-lg\"\r\n        @click=\"showRight = !showRight\">\r\n        Click to toggle alert on right\r\n      </button>\r\n      <hr>\r\n      <alert type=\"success\">\r\n        <strong>Well Done!</strong>\r\n        You successfully read this important alert message.\r\n      </alert>\r\n      <alert type=\"info\">\r\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n      </alert>\r\n      <alert type=\"danger\" dismissable>\r\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n      </alert>\r\n      <alert type=\"warning\" dismissable>\r\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n      </alert>\r\n      <alert v-model=\"showRight\" placement=\"top-right\" :duration=\"3000\"\r\n        type=\"success\" width=\"400px\" dismissable\r\n      >\r\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\r\n        <strong>Well Done!</strong>\r\n        <p>You successfully read this important alert message.</p>\r\n      </alert>\r\n      <alert v-model=\"showTop\" placement=\"top\" :duration=\"3000\"\r\n        type=\"danger\" width=\"400px\" dismissable\r\n      >\r\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\r\n        <strong>Heads up!</strong>\r\n        <p>This alert needs your attention.</p>\r\n      </alert>\r\n    </div>\r\n\r\n    <doc-code language=\"markup\">\r\n      &lt;alert type=\"success/info/danger/warning\">\r\n        ...\r\n      &lt;/alert>\r\n\r\n      &lt;alert v-model=\"showRight\" placement=\"top-right\" duration=\"3000\" type=\"success\" width=\"400px\" dismissable>\r\n        &lt;span class=\"icon-ok-circled alert-icon-float-left\">&lt;/span>\r\n        &lt;strong>Well Done!&lt;/strong>\r\n        &lt;p>You successfully read this important alert message.&lt;/p>\r\n      &lt;/alert>\r\n\r\n      &lt;alert v-models=\"showTop\" placement=\"top\" duration=\"3000\" type=\"danger\" width=\"400px\" dismissable>\r\n        &lt;span class=\"icon-info-circled alert-icon-float-left\">&lt;/span>\r\n        &lt;strong>Heads up!&lt;/strong>\r\n        &lt;p>This alert needs your attention.&lt;/p>\r\n      &lt;/alert>\r\n    </doc-code>\r\n    <doc-table>\r\n      <div>\r\n        <p>show</p>\r\n        <p><code>Boolean</code></p>\r\n        <p><code>true</code></p>\r\n        <p>Whether show the component</p>\r\n      </div>\r\n      <div>\r\n        <p>dismissable</p>\r\n        <p><code>Boolean</code></p>\r\n        <p><code>false</code></p>\r\n        <p>Whether show close button</p>\r\n      </div>\r\n      <div>\r\n        <p>type</p>\r\n        <p><code>String</code>, one of\r\n        <code>success</code>\r\n        <code>info</code>\r\n        <code>warning</code>\r\n        <code>danger</code></p>\r\n        <p><code>success</code></p>\r\n        <p>Components styles</p>\r\n      </div>\r\n      <div>\r\n        <p>duration</p>\r\n        <p><code>Number</code></p>\r\n        <p><code>0</code></p>\r\n        <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>\r\n      </div>\r\n      <div>\r\n        <p>width</p>\r\n        <p><code>String</code></p>\r\n        <p></p>\r\n      </div>\r\n      <div>\r\n        <p>placement</p>\r\n        <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>\r\n        <p></p>\r\n        <p>how to position the component.</p>\r\n      </div>\r\n    </doc-table>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './utils/docSection.vue'\r\nimport docTable from './utils/docTable.js'\r\nimport docCode from './utils/docCode.js'\r\nimport alert from 'src/Alert.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docTable,\r\n    docCode,\r\n    alert\r\n  },\r\n  data () {\r\n    return {\r\n      showRight: false,\r\n      showTop: false\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.alert-icon-float-left {\r\n  font-size:32px;\r\n  float:left;\r\n  margin-right:5px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 138 */
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
	
	var _Alert = __webpack_require__(139);
	
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(140)
	
	/* script */
	__vue_exports__ = __webpack_require__(142)
	
	/* template */
	var __vue_template__ = __webpack_require__(144)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Alert.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-af7c1f6a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-af7c1f6a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-af7c1f6a!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-af7c1f6a!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.fade-enter-active,\r\n.fade-leave-active {\r\n  transition: opacity .3s ease;\n}\n.fade-enter,\r\n.fade-leave-active {\r\n  height: 0;\r\n  opacity: 0;\n}\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\n}\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\n}\r\n", "", {"version":3,"sources":["/./src/Alert.vue?1ca07e0e"],"names":[],"mappings":";AA4CA;;EAEA,6BAAA;CACA;AACA;;EAEA,UAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,cAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\r\n  <transition name=\"fade\">\r\n    <div v-show=\"value\"\r\n      :class=\"['alert', 'alert-'+type, placement]\"\r\n      :style=\"{width:width}\"\r\n      role=\"alert\"\r\n    >\r\n      <button v-show=\"dismissable\" type=\"button\" class=\"close\"\r\n        @click=\"value = false\">\r\n        <span>&times;</span>\r\n      </button>\r\n      <slot></slot>\r\n    </div>\r\n  </transition>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    dismissable: {type: Boolean, default: false},\r\n    duration: {default: null},\r\n    placement: {type: String},\r\n    type: {type: String},\r\n    value: {type: Boolean, default: true },\r\n    width: {type: String}\r\n  },\r\n  computed: {\r\n    durationNum () { return coerce.number(this.duration, 0) }\r\n  },\r\n  watch: {\r\n    value (val, old) {\r\n      if (this._timeout) clearTimeout(this._timeout)\r\n      if (val && this.duration) {\r\n        this._timeout = setTimeout(() => { this.value = false }, this.duration)\r\n      }\r\n      this.$emit('input', val)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.fade-enter-active,\r\n.fade-leave-active {\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave-active {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(143);
	
	exports.default = {
	  props: {
	    dismissable: { type: Boolean, default: false },
	    duration: { default: null },
	    placement: { type: String },
	    type: { type: String },
	    value: { type: Boolean, default: true },
	    width: { type: String }
	  },
	  computed: {
	    durationNum: function durationNum() {
	      return _utils.coerce.number(this.duration, 0);
	    }
	  },
	  watch: {
	    value: function value(val, old) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && this.duration) {
	        this._timeout = setTimeout(function () {
	          _this.value = false;
	        }, this.duration);
	      }
	      this.$emit('input', val);
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

/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getJSON = getJSON;
	exports.getScrollBarWidth = getScrollBarWidth;
	exports.translations = translations;
	exports.delayer = delayer;
	exports.oneBlur = oneBlur;
	exports.onBlur = onBlur;
	exports.offBlur = offBlur;
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
	  var actions = ['done', 'fail'];
	  actions.forEach(function (name) {
	    data[name] = [];
	    p[name] = function (fn) {
	      if (fn instanceof Function) data[name].push(fn);
	      return p;
	    };
	  });
	  p.done(JSON.parse);
	  request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	      (function () {
	        var e = { status: request.status };
	        if (request.status === 200) {
	          try {
	            (function () {
	              var value = void 0;
	              var response = request.responseText;
	              data.done.forEach(function (done) {
	                if ((value = done(response)) !== undefined) {
	                  response = value;
	                }
	              });
	            })();
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
	
	// delayer: set a function that execute after a delay. Work with a prop timer set in the vue object, or a direct number value.
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
	
	var blurList = [];
	function oneBlur(node, callback) {
	  if (!callback) {
	    return;
	  }
	  var blurEvent = function blurEvent(e) {
	    if (!node.contains(e.target) && node !== e.target) {
	      callback.call(node, e, node);
	      offBlur(node, callback);
	    }
	  };
	  blurList.push({
	    node: node,
	    callback: callback,
	    blurEvent: blurEvent
	  });
	  document.addEventListener('click', blurEvent, false);
	  document.addEventListener('touchstart', blurEvent, false);
	}
	
	function onBlur(node, callback) {
	  if (!callback) {
	    return;
	  }
	  var blurEvent = function blurEvent(e) {
	    if (!node.contains(e.target) && node !== e.target) callback.call(node, e, node);
	  };
	  blurList.push({
	    node: node,
	    callback: callback,
	    blurEvent: blurEvent
	  });
	  document.addEventListener('click', blurEvent, false);
	  document.addEventListener('touchstart', blurEvent, false);
	}
	
	function offBlur(node, callback) {
	  blurList.filter(function (el) {
	    return el.node === node && (callback ? el.callback === callback : true);
	  }).forEach(function (el) {
	    el.node.removeEventListener('click', el.callback);
	    el.node.removeEventListener('touchstart', el.callback);
	  });
	  blurList = blurList.filter(function (el) {
	    return el.node !== node || (callback ? el.callback !== callback : false);
	  });
	}
	
	// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a parser, so this work only if your code is compatible with both)
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (value),
	      expression: "value"
	    }],
	    class: ['alert', 'alert-' + type, placement],
	    style: ({
	      width: width
	    }),
	    attrs: {
	      "role": "alert"
	    }
	  }, [_h('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (dismissable),
	      expression: "dismissable"
	    }],
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        value = false
	      }
	    }
	  }, [_m(0)]), " ", _t("default")])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["×"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-af7c1f6a", module.exports)
	  }
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
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
	        showTop = !showTop
	      }
	    }
	  }, ["\n      Click to toggle alert on top\n    "]), " ", _h('button', {
	    staticClass: "btn btn-success btn-lg",
	    on: {
	      "click": function($event) {
	        showRight = !showRight
	      }
	    }
	  }, ["\n      Click to toggle alert on right\n    "]), " ", _m(0), " ", _h('alert', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_m(1), "\n      You successfully read this important alert message.\n    "]), " ", _h('alert', {
	    attrs: {
	      "type": "info"
	    }
	  }, [_m(2), " This alert needs your attention, but it's not super important.\n    "]), " ", _h('alert', {
	    attrs: {
	      "type": "danger",
	      "dismissable": ""
	    }
	  }, [_m(3), " Change a few things up and try submitting again.\n    "]), " ", _h('alert', {
	    attrs: {
	      "type": "warning",
	      "dismissable": ""
	    }
	  }, [_m(4), " Better check yourself, you're not looking too good.\n    "]), " ", _h('alert', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (showRight),
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
	      "value": (showRight)
	    },
	    on: {
	      "input": function($event) {
	        showRight = $event
	      }
	    }
	  }, [_m(5), " ", _m(6), " ", _m(7)]), " ", _h('alert', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (showTop),
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
	      "value": (showTop)
	    },
	    on: {
	      "input": function($event) {
	        showTop = $event
	      }
	    }
	  }, [_m(8), " ", _m(9), " ", _m(10)])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <alert type=\"success/info/danger/warning\">\n      ...\n    </alert>\n\n    <alert v-model=\"showRight\" placement=\"top-right\" duration=\"3000\" type=\"success\" width=\"400px\" dismissable>\n      <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n      <strong>Well Done!</strong>\n      <p>You successfully read this important alert message.</p>\n    </alert>\n\n    <alert v-models=\"showTop\" placement=\"top\" duration=\"3000\" type=\"danger\" width=\"400px\" dismissable>\n      <span class=\"icon-info-circled alert-icon-float-left\"></span>\n      <strong>Heads up!</strong>\n      <p>This alert needs your attention.</p>\n    </alert>\n  "]), " ", _h('doc-table', [_m(11), " ", _m(12), " ", _m(13), " ", _m(14), " ", _m(15), " ", _m(16)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('strong', ["Well Done!"])
	}},function (){with(this) {
	  return _h('strong', ["Heads up!"])
	}},function (){with(this) {
	  return _h('strong', ["Oh snap!"])
	}},function (){with(this) {
	  return _h('strong', ["Warning!"])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "icon-ok-circled alert-icon-float-left"
	  })
	}},function (){with(this) {
	  return _h('strong', ["Well Done!"])
	}},function (){with(this) {
	  return _h('p', ["You successfully read this important alert message."])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "icon-info-circled alert-icon-float-left"
	  })
	}},function (){with(this) {
	  return _h('strong', ["Heads up!"])
	}},function (){with(this) {
	  return _h('p', ["This alert needs your attention."])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["show"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether show the component"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["dismissable"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Whether show close button"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of\n      ", _h('code', ["success"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["danger"])]), " ", _h('p', [_h('code', ["success"])]), " ", _h('p', ["Components styles"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["duration"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p', ["Auto close duration. Set ", _h('code', ["0"]), " or a negative number will NOT be auto-close."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ". one of ", _h('code', ["top"]), ", ", _h('code', ["top-right"])]), " ", _h('p'), " ", _h('p', ["how to position the component."])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-c3778626", module.exports)
	  }
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(147)
	
	/* template */
	var __vue_template__ = __webpack_require__(153)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\asideDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1babdcc9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1babdcc9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] asideDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 147 */
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
	
	var _Aside = __webpack_require__(148);
	
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(149)
	
	/* script */
	__vue_exports__ = __webpack_require__(151)
	
	/* template */
	var __vue_template__ = __webpack_require__(152)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Aside.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3a4bde27", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3a4bde27", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(150);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3a4bde27!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3a4bde27!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.aside-open {\r\n  transition: transform 0.3s;\n}\n.aside-open.has-push-right {\r\n  transform: translateX(-300px);\n}\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\n}\n.aside.left {\r\n  left: 0;\r\n  right: auto;\n}\n.aside.right {\r\n  left: auto;\r\n  right: 0;\n}\n.slideleft-enter {\r\n  animation:slideleft-in .3s;\n}\n.slideleft-leave-active {\r\n  animation:slideleft-out .3s;\n}\n@keyframes slideleft-in {\n0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\n}\n100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n}\n@keyframes slideleft-out {\n0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n100% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\n}\n}\n.slideright-enter {\r\n  animation:slideright-in .3s;\n}\n.slideright-leave-active {\r\n  animation:slideright-out .3s;\n}\n@keyframes slideright-in {\n0% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\n}\n100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n}\n@keyframes slideright-out {\n0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n100% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\n}\n}\n.aside:focus {\r\n    outline: 0\n}\n@media (max-width: 991px) {\n.aside {\r\n    min-width:240px\n}\n}\n.aside.left {\r\n  right: auto;\r\n  left: 0\n}\n.aside.right {\r\n  right: 0;\r\n  left: auto\n}\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\n}\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\n}\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\n}\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\n}\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\n}\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\n}\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\n}\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\n}\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\n}\r\n", "", {"version":3,"sources":["/./src/Aside.vue?37593035"],"names":[],"mappings":";AAsFA;EACA,2BAAA;CACA;AACA;EACA,8BAAA;CACA;AACA;IACA,gBAAA;IACA,OAAA;IACA,UAAA;IACA,cAAA;IACA,eAAA;IACA,iBAAA;CACA;AACA;EACA,QAAA;EACA,YAAA;CACA;AACA;EACA,WAAA;EACA,SAAA;CACA;AACA;EACA,2BAAA;CACA;AACA;EACA,4BAAA;CACA;AACA;AACA;IACA,6BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,6BAAA;IACA,WAAA;CACA;CACA;AACA;EACA,4BAAA;CACA;AACA;EACA,6BAAA;CACA;AACA;AACA;IACA,4BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,4BAAA;IACA,WAAA;CACA;CACA;AACA;IACA,UAAA;CACA;AACA;AACA;IACA,eAAA;CACA;CACA;AACA;EACA,YAAA;EACA,OAAA;CACA;AACA;EACA,SAAA;EACA,UAAA;CACA;AACA;EACA,iCAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;CACA;AACA;EACA,cAAA;EACA,kBAAA;EACA,6BAAA;CACA;AACA;EACA,iBAAA;EACA,gBAAA;CACA;AACA;EACA,iBAAA;CACA;AACA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,cAAA;EACA,WAAA;EACA,6BAAA;EACA,sBAAA;CACA;AACA;EACA,YAAA;EACA,yBAAA;CACA","file":"Aside.vue","sourcesContent":["<template>\r\n  <transition :name=\"'side' + this.placement\">\r\n    <div class=\"aside\" v-if=\"show\" :style=\"{width:width+'px'}\" :class=\"placement\">\r\n      <div class=\"aside-dialog\">\r\n        <div class=\"aside-content\">\r\n          <div class=\"aside-header\">\r\n            <button type=\"button\" class=\"close\" @click='trigger_close'><span>&times;</span></button>\r\n            <h4 class=\"aside-title\"><slot name=\"header\">{{ header }}</slot></h4>\r\n          </div>\r\n          <div class=\"aside-body\"><slot></slot></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </transition>\r\n</template>\r\n\r\n<script>\r\nimport {getScrollBarWidth} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n// let coerce = {\r\n//   value: 'boolean',\r\n//   width: 'number'\r\n// }\r\n\r\nexport default {\r\n  props: {\r\n    header: {type: String},\r\n    placement: {type: String, default: 'right'},\r\n    show: {type: Boolean, required: true},\r\n    width: {type: Number, default: 320}\r\n  },\r\n  watch: {\r\n    show (val, old) {\r\n      this.$emit('input', val)\r\n      this.$emit(this.show ? 'open' : 'close')\r\n      const body = document.body\r\n      const scrollBarWidth = getScrollBarWidth()\r\n      if (val) {\r\n        if (!this._backdrop) {\r\n          this._backdrop = document.createElement('div')\r\n        }\r\n        this._backdrop.className = 'aside-backdrop'\r\n        body.appendChild(this._backdrop)\r\n        body.classList.add('modal-open')\r\n        if (scrollBarWidth !== 0) {\r\n          body.style.paddingRight = scrollBarWidth + 'px'\r\n        }\r\n        // request property that requires layout to force a layout\r\n        var x = this._backdrop.clientHeight\r\n        this._backdrop.classList.add('in')\r\n        $(this._backdrop).on('click', () => this.trigger_close())\r\n      } else {\r\n        $(this._backdrop).on('transitionend', () => {\r\n          $(this._backdrop).off()\r\n          try {\r\n            body.classList.remove('modal-open')\r\n            body.style.paddingRight = '0'\r\n            body.removeChild(this._backdrop)\r\n            this._backdrop = null\r\n          } catch (e) {}\r\n        })\r\n        this._backdrop.className = 'aside-backdrop'\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    trigger () {\r\n      return {\r\n        close: () => this.trigger_close(),\r\n        open: () => this.trigger_open()\r\n      }\r\n    },\r\n    trigger_close () { \r\n      this.$emit( 'close' )\r\n    },\r\n    trigger_open() { \r\n      this.$emit( 'open' )\r\n    }\r\n  },\r\n  mounted () {\r\n    this.$emit('trigger', () => this.trigger)\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.aside-open {\r\n  transition: transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  transform: translateX(-300px);\r\n}\r\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave-active {\r\n  animation:slideleft-out .3s;\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter {\r\n  animation:slideright-in .3s;\r\n}\r\n.slideright-leave-active {\r\n  animation:slideright-out .3s;\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width:240px\r\n  }\r\n}\r\n.aside.left {\r\n  right: auto;\r\n  left: 0\r\n}\r\n.aside.right {\r\n  right: 0;\r\n  left: auto\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(143);
	
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
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": 'side' + this.placement
	    }
	  }, [(show) ? _h('div', {
	    staticClass: "aside",
	    class: placement,
	    style: ({
	      width: width + 'px'
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
	      "click": trigger_close
	    }
	  }, [_m(0)]), " ", _h('h4', {
	    staticClass: "aside-title"
	  }, [_t("header", [_s(header)])])]), " ", _h('div', {
	    staticClass: "aside-body"
	  }, [_t("default")])])])]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["×"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3a4bde27", module.exports)
	  }
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
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
	        showLeft = true
	      }
	    }
	  }, ["Show Aside on left"]), " ", _h('button', {
	    staticClass: "btn btn-success btn-lg",
	    on: {
	      "click": function($event) {
	        showRight = true
	      }
	    }
	  }, ["Show Aside on right"]), " ", _h('sidebar', {
	    attrs: {
	      "show": showLeft,
	      "placement": "left",
	      "header": "Title",
	      "width": 350
	    },
	    on: {
	      "close": function($event) {
	        showLeft = false
	      }
	    }
	  }, [_m(0), " ", _m(1), " ", _m(2), " ", _h('doc-code', {
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
	        showLeft = false
	      }
	    }
	  }, ["Close"])])]), " ", _h('sidebar', {
	    attrs: {
	      "show": showRight,
	      "placement": "right",
	      "header": "Title",
	      "width": 350
	    },
	    on: {
	      "close": function($event) {
	        showRight = false
	      }
	    }
	  }, [_m(3), " ", _m(4), " ", _m(5), " ", _h('doc-code', {
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
	        showRight = false
	      }
	    }
	  }, ["Close"])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <sidebar v-model=\"showRight\" placement=\"right\" header=\"Title\" width=\"350\">\n      ...\n    </sidebar>\n    <sidebar v-model=\"showLeft\" placement=\"left\" header=\"Title\" width=\"350\">\n      ...\n    </sidebar>\n  "]), " ", _h('doc-table', [_m(6), " ", _m(7), " ", _m(8), " ", _m(9)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', ["Text in aside"])
	}},function (){with(this) {
	  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua."])
	}},function (){with(this) {
	  return _h('p', [" Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat."])
	}},function (){with(this) {
	  return _h('h4', ["Text in aside"])
	}},function (){with(this) {
	  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua."])
	}},function (){with(this) {
	  return _h('p', [" Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat."])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["Whether show the component."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["left"]), ", ", _h('code', ["right"])]), " ", _h('p', [_h('code', ["right"])]), " ", _h('p', ["how to position the component."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Header text of the aside component."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p'), " ", _h('p')])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1babdcc9", module.exports)
	  }
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(155)
	
	/* template */
	var __vue_template__ = __webpack_require__(164)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\buttonGroupDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4ba9927e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4ba9927e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] buttonGroupDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 155 */
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
	
	var _buttonGroup = __webpack_require__(156);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Radio = __webpack_require__(159);
	
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

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\buttonGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-323defbc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-323defbc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] buttonGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
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
	//
	//
	//
	//
	
	
	exports.default = {
	  props: {
	    buttons: true,
	    justified: {
	      type: Boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    value: null,
	    vertical: {
	      type: Boolean,
	      default: false
	    }
	  },
	  watch: {
	    value: {
	      deep: true,
	      handler: function handler(val) {
	        this.$emit('input', val);
	        this.$children.forEach(function (el) {
	          if (el._inGroup && el.eval) el.eval();
	        });
	      }
	    }
	  },
	  created: function created() {
	    this._btnGroup = true;
	  }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    class: {
	      'btn-group': buttons, 'btn-group-justified': justified, 'btn-group-vertical': vertical
	    },
	    attrs: {
	      "data-toggle": buttons && 'buttons'
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-323defbc", module.exports)
	  }
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(160)
	
	/* script */
	__vue_exports__ = __webpack_require__(162)
	
	/* template */
	var __vue_template__ = __webpack_require__(163)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-74cfd92c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-74cfd92c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(161);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-74cfd92c!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-74cfd92c!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.radio { position: relative;\n}\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\n}\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\n}\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\n}\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\n}\n.radio.active .btn-default { filter: brightness(75%);\n}\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\n}\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\n}\r\n", "", {"version":3,"sources":["/./src/Radio.vue?472819be"],"names":[],"mappings":";AAyGA,SAAA,mBAAA;CAAA;AACA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,8OAAA;CACA;AACA,6BAAA,wBAAA;CAAA;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Radio.vue","sourcesContent":["<template>\r\n  <div :is=\"buttonStyle?'label':'div'\" @click.prevent=\"toggle\"\r\n    :class=\"[(buttonStyle?'btn btn-'+typeColor:'radio '+typeColor),{active:active,disabled:disabled,readonly:readonly}]\"\r\n  >\r\n    <template v-if=\"buttonStyle\">\r\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\r\n        v-show=\"!readonly\"\r\n        :checked=\"active\"\r\n        :value=\"value\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <slot></slot>\r\n    </template>\r\n    <label v-else class=\"open\">\r\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\r\n        :checked=\"active\"\r\n        :value=\"value\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\r\n      <slot></slot>\r\n    </label>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n// let coerce = {\r\n//   disabled: 'boolean',\r\n//   readonly: 'boolean'\r\n// }\r\n\r\nexport default {\r\n  props: {\r\n    button: {type: Boolean, default: false},\r\n    checked: {type: Boolean, default: false},\r\n    disabled: {type: Boolean, default: false},\r\n    name: {type: String, default: null},\r\n    readonly: {type: Boolean, default: false},\r\n    type: {type: String, default: null},\r\n    value: {default: true}\r\n  },\r\n  data () {\r\n    var check = this.checked\r\n    return {\r\n      check\r\n    }\r\n  },\r\n  computed: {\r\n    active () { return this._inGroup ? this.$parent.value === this.value : this.value === this.check },\r\n    buttonStyle () { return this.button || (this._inGroup && this.$parent.buttons) },\r\n    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }\r\n  },\r\n  watch: {\r\n    check (val) {\r\n      this.$emit('checked', val)\r\n      if (typeof this.value !== 'boolean') {\r\n        this.$emit('input', this.check ? this.value : null)\r\n        if (this._inGroup && this.check) {\r\n          this.$parent.value = this.value\r\n        }\r\n      }\r\n    },\r\n    checked (val) {\r\n      if (this.check !== val) { this.check = val }\r\n    }\r\n  },\r\n  created () {\r\n    const parent = this.$parent\r\n    if (!parent) return\r\n    if (parent._btnGroup && !parent._checkboxGroup) {\r\n      this._inGroup = true\r\n      parent._radioGroup = true\r\n    }\r\n  },\r\n  mounted () {\r\n    if (!this.$parent._radioGroup) return\r\n    if (this.$parent.value) {\r\n      this.check = (this.$parent.value === this.value)\r\n    } else if (this.check) {\r\n      this.$parent.value = this.value\r\n    }\r\n  },\r\n  methods: {\r\n    focus () {\r\n      this.$refs.input.focus()\r\n    },\r\n    toggle () {\r\n      if (this.disabled) { return }\r\n      this.focus()\r\n      if (this.readonly) { return }\r\n      this.check = this.value\r\n      if (this._inGroup) {\r\n        this.$parent.value = this.value\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scope>\r\n.radio { position: relative; }\r\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\r\n}\r\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\r\n}\r\n.radio.active .btn-default { filter: brightness(75%); }\r\n\r\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 162 */
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
	
	// let coerce = {
	//   disabled: 'boolean',
	//   readonly: 'boolean'
	// }
	
	exports.default = {
	  props: {
	    button: { type: Boolean, default: false },
	    checked: { type: Boolean, default: false },
	    disabled: { type: Boolean, default: false },
	    name: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    type: { type: String, default: null },
	    value: { default: true }
	  },
	  data: function data() {
	    var check = this.checked;
	    return {
	      check: check
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return this._inGroup ? this.$parent.value === this.value : this.value === this.check;
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
	      this.$emit('checked', val);
	      if (typeof this.value !== 'boolean') {
	        this.$emit('input', this.check ? this.value : null);
	        if (this._inGroup && this.check) {
	          this.$parent.value = this.value;
	        }
	      }
	    },
	    checked: function checked(val) {
	      if (this.check !== val) {
	        this.check = val;
	      }
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (!parent) return;
	    if (parent._btnGroup && !parent._checkboxGroup) {
	      this._inGroup = true;
	      parent._radioGroup = true;
	    }
	  },
	  mounted: function mounted() {
	    if (!this.$parent._radioGroup) return;
	    if (this.$parent.value) {
	      this.check = this.$parent.value === this.value;
	    } else if (this.check) {
	      this.$parent.value = this.value;
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
	      this.check = this.value;
	      if (this._inGroup) {
	        this.$parent.value = this.value;
	      }
	    }
	  }
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h(buttonStyle ? 'label' : 'div', {
	    tag: "div",
	    class: [(buttonStyle ? 'btn btn-' + typeColor : 'radio ' + typeColor), {
	      active: active,
	      disabled: disabled,
	      readonly: readonly
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        toggle($event)
	      }
	    }
	  }, [(buttonStyle) ? [_h('input', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!readonly),
	      expression: "!readonly"
	    }],
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": name,
	      "readonly": readonly,
	      "disabled": disabled
	    },
	    domProps: {
	      "checked": active,
	      "value": value
	    }
	  }), " ", _t("default")] : _h('label', {
	    staticClass: "open"
	  }, [_h('input', {
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": name,
	      "readonly": readonly,
	      "disabled": disabled
	    },
	    domProps: {
	      "checked": active,
	      "value": value
	    }
	  }), " ", _h('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [active ? 'btn-' + typeColor : '', {
	      bg: typeColor === 'default'
	    }]
	  }), " ", (active && typeColor === 'default') ? _h('span', {
	    staticClass: "icon"
	  }) : _e(), " ", _t("default")]), " "])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-74cfd92c", module.exports)
	  }
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "button-group",
	      "name": "Button Group"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_m(0), " ", _h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checkboxValue),
	      expression: "checkboxValue"
	    }],
	    domProps: {
	      "value": (checkboxValue)
	    },
	    on: {
	      "input": function($event) {
	        checkboxValue = $event
	      }
	    }
	  }, [_h('checkbox', {
	    attrs: {
	      "value": "left"
	    }
	  }, ["Left"]), " ", _h('checkbox', {
	    attrs: {
	      "value": "middle"
	    }
	  }, ["Middle"]), " ", _h('checkbox', {
	    attrs: {
	      "value": "right"
	    }
	  }, ["Right"])]), " ", _h('p', [_h('pre', ["Checkbox value: " + _s(checkboxValue)])]), " ", _m(1), " ", _m(2), " ", _h('p', [_h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "type": "primary"
	    },
	    domProps: {
	      "value": (radioValue)
	    },
	    on: {
	      "input": function($event) {
	        radioValue = $event
	      }
	    }
	  }, [_h('radio', {
	    attrs: {
	      "value": "left"
	    }
	  }, ["Left"]), " ", _h('radio', {
	    attrs: {
	      "value": "middle"
	    }
	  }, ["Middle"]), " ", _h('radio', {
	    attrs: {
	      "value": "right"
	    }
	  }, ["Right"])])]), " ", _h('p', [_h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "type": "success"
	    },
	    domProps: {
	      "value": (radioValue)
	    },
	    on: {
	      "input": function($event) {
	        radioValue = $event
	      }
	    }
	  }, [_h('radio', {
	    attrs: {
	      "value": "left"
	    }
	  }, ["Left"]), " ", _h('radio', {
	    attrs: {
	      "value": "middle"
	    }
	  }, ["Middle"]), " ", _h('radio', {
	    attrs: {
	      "value": "right"
	    }
	  }, ["Right"])])]), " ", _h('p', [_m(3), " ", _h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (radioValue),
	      expression: "radioValue"
	    }],
	    attrs: {
	      "type": "info",
	      "buttons": "false"
	    },
	    domProps: {
	      "value": (radioValue)
	    },
	    on: {
	      "input": function($event) {
	        radioValue = $event
	      }
	    }
	  }, [_h('radio', {
	    attrs: {
	      "value": "left"
	    }
	  }, ["Left"]), " ", _h('radio', {
	    attrs: {
	      "value": "middle"
	    }
	  }, ["Middle"]), " ", _h('radio', {
	    attrs: {
	      "value": "right"
	    }
	  }, ["Right"])])]), " ", _h('p', [_h('pre', ["Radio value: " + _s(radioValue)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <button-group v-model=\"checkboxValue\">\n      <checkbox value=\"left\">Left</checkbox>\n      <checkbox value=\"middle\">Middle</checkbox>\n      <checkbox value=\"right\">Right</checkbox>\n    </button-group>\n\n    <button-group v-model=\"radioValue\" type=\"primary\">\n      <radio value=\"left\">Left</radio>\n      <radio value=\"middle\">Middle</radio>\n      <radio value=\"right\">Right</radio>\n    </button-group>\n\n    Not Buttons:\n    <button-group v-model=\"radioValue\" type=\"info\" buttons=\"false\">\n      <radio value=\"left\">Left</radio>\n      <radio value=\"middle\">Middle</radio>\n      <radio value=\"right\">Right</radio>\n    </button-group>\n  "]), " ", _h('doc-table', [_m(4), " ", _m(5), " ", _m(6)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', ["Checkbox"])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h4', ["Radio"])
	}},function (){with(this) {
	  return _h('label', ["Not buttons:"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Array"]), " or ", _h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["If defined, then the defined values will be checked otherwise the elements with a checked attribute\n      will be checked."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["buttons"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p'), _h('p', ["Can enable/disable button style."]), " ", _h('p', ["Group normal checks if you want to set the same type color for all."]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4ba9927e", module.exports)
	  }
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(166)
	
	/* template */
	var __vue_template__ = __webpack_require__(175)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\carouselDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7f149bf5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7f149bf5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] carouselDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 166 */
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
	
	var _Carousel = __webpack_require__(167);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(172);
	
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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(168)
	
	/* script */
	__vue_exports__ = __webpack_require__(170)
	
	/* template */
	var __vue_template__ = __webpack_require__(171)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Carousel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-322dee41"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-322dee41", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-322dee41", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Carousel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-322dee41&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-322dee41&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[data-v-322dee41] {\r\n  cursor: pointer;\n}\r\n", "", {"version":3,"sources":["/./src/Carousel.vue?18a01e4d"],"names":[],"mappings":";AA4GA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\r\n<div class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\r\n    <li v-for=\"(indicator,i) in indicator_list\" @click=\"indicatorClick(i)\" :class=\"{active:i === index}\"><span></span></li>\r\n  </ol>\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <slot></slot>\r\n  </div>\r\n  <!-- Controls -->\r\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\">\r\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n    </a>\r\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n</div>\r\n</template>\r\n\r\n<script>\r\nimport $ from './utils/NodeList.js'\r\n// let coerce = {\r\n//   interval: 'number'\r\n// }\r\n\r\nexport default {\r\n  props: {\r\n    indicators: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    controls: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    interval: {\r\n      type: Number,\r\n      default: 5000\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      indicator_list: [],\r\n      index: 0,\r\n      isAnimating: false\r\n    }\r\n  },\r\n  watch: {\r\n    index(newVal, oldVal) {\r\n      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)\r\n    }\r\n  },\r\n  methods: {\r\n    indicatorClick(index) {\r\n      if (this.isAnimating || this.index === index) return false\r\n      this.isAnimating = true\r\n      this.index = index\r\n    },\r\n    slide (direction, next, prev) {\r\n      if (!this.$el) { return }\r\n      const $slider = $('.item', this.$el)\r\n      if (!$slider.length) { return }\r\n      const selected = $slider[next] || $slider[0]\r\n      $(selected).addClass(direction === 'left' ? 'next' : 'prev')\r\n      // request property that requires layout to force a layout\r\n      var x = selected.clientHeight\r\n      $([$slider[prev], selected]).addClass(direction).on('transitionend', () => {\r\n        $slider.off('transitionend').className = 'item'\r\n        $(selected).addClass('active')\r\n        this.isAnimating = false\r\n      })\r\n    },\r\n    next() {\r\n      if (!this.$el || this.isAnimating) { return false }\r\n      this.isAnimating = true\r\n      this.index + 1 < $('.item', this.$el).length ? this.index += 1 : this.index = 0\r\n    },\r\n    prev() {\r\n      if (!this.$el || this.isAnimating) { return false }\r\n      this.isAnimating = true\r\n      this.index === 0 ? this.index = $('.item', this.$el).length - 1 : this.index -= 1\r\n    },\r\n    toggleInterval (val) {\r\n      if (val === undefined) { val = this._intervalID }\r\n      if(this._intervalID) {\r\n        clearInterval(this._intervalID)\r\n        delete this._intervalID\r\n      }\r\n      if(val && this.interval > 0) {\r\n        this._intervalID = setInterval(this.next, this.interval)\r\n      }\r\n    }\r\n  },\r\n  mounted () {\r\n    this.toggleInterval(true)\r\n    $(this.$el).on('mouseenter', () => this.toggleInterval(false)).on('mouseleave', () => this.toggleInterval(true))\r\n  },\r\n  beforeDestroy () {\r\n    this.toggleInterval(false)\r\n    $(this.$el).off('mouseenter mouseleave')\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.carousel-control {\r\n  cursor: pointer;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 170 */
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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "carousel slide",
	    attrs: {
	      "data-ride": "carousel"
	    }
	  }, [_h('ol', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (indicators),
	      expression: "indicators"
	    }],
	    staticClass: "carousel-indicators"
	  }, [_l((indicator_list), function(indicator, i) {
	    return _h('li', {
	      class: {
	        active: i === index
	      },
	      on: {
	        "click": function($event) {
	          indicatorClick(i)
	        }
	      }
	    }, [_m(0, true)])
	  })]), " ", " ", _h('div', {
	    staticClass: "carousel-inner",
	    attrs: {
	      "role": "listbox"
	    }
	  }, [_t("default")]), " ", " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (controls),
	      expression: "controls"
	    }],
	    staticClass: "carousel-controls hidden-xs"
	  }, [_h('a', {
	    staticClass: "left carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": prev
	    }
	  }, [_m(1)]), " ", _h('a', {
	    staticClass: "right carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": next
	    }
	  }, [_m(2)])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span')
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "glyphicon glyphicon-chevron-left",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-322dee41", module.exports)
	  }
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(173)
	
	/* template */
	var __vue_template__ = __webpack_require__(174)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-32185b82", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-32185b82", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 173 */
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
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "item"
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-32185b82", module.exports)
	  }
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "carousel",
	      "name": "Carousel"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('carousel', [_h('slider', [_m(0), " ", _m(1)]), " ", _h('slider', [_m(2), " ", _m(3)]), " ", _h('slider', [_m(4), " ", _m(5)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <carousel>\n      <slider>\n        <img src=\"https://placehold.it/1200x400?text=one\">\n        <div class=\"carousel-caption\">\n          ...\n        </div>\n      </slider>\n      <slider>\n        <img src=\"https://placehold.it/1200x400?text=two\">\n      </slider>\n      <slider>\n        <img src=\"https://placehold.it/1200x400?text=three\">\n      </slider>\n    </carousel>\n  "]), " ", _h('doc-table', [_m(6), " ", _m(7), " ", _m(8)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('img', {
	    attrs: {
	      "src": "https://placehold.it/1200x500?text=one"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "carousel-caption"
	  }, [_h('h3', ["Slide #1"]), " ", _h('p', ["sunt in culpa qui officia deserunt mollit a."])])
	}},function (){with(this) {
	  return _h('img', {
	    attrs: {
	      "src": "https://placehold.it/1200x500?text=two"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "carousel-caption"
	  }, [_h('h3', ["Slide #2"]), " ", _h('p', ["sunt in culpa qui officia deserunt mollit a."])])
	}},function (){with(this) {
	  return _h('img', {
	    attrs: {
	      "src": "https://placehold.it/1200x500?text=three"
	    }
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "carousel-caption"
	  }, [_h('h3', ["Slide #3"]), " ", _h('p', ["sunt in culpa qui officia deserunt mollit a."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["indicators"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether to show the indicators."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["controls"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether to show the direction controls."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["interval"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["5000"])]), " ", _h('p', ["The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n        carousel will not automatically cycle.\n      "])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7f149bf5", module.exports)
	  }
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\checkboxDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c8bf7950", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c8bf7950", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] checkboxDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 177 */
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
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "checkbox",
	      "name": "Checkbox"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_m(0), " ", _h('checkbox', {
	    attrs: {
	      "value": "one"
	    },
	    domProps: {
	      "checked": checkboxValue.one
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.one = 'one' == arguments[0]
	      }
	    }
	  }, ["One"]), " ", _h('checkbox', {
	    attrs: {
	      "value": "two",
	      "type": "danger",
	      "disabled": ""
	    },
	    domProps: {
	      "checked": checkboxValue.two
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.two = 'two' == arguments[0]
	      }
	    }
	  }, ["Two (disabled)"]), " ", _h('checkbox', {
	    attrs: {
	      "value": "two",
	      "type": "warning",
	      "readonly": ""
	    },
	    domProps: {
	      "checked": checkboxValue.two
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.two = 'two' == arguments[0]
	      }
	    }
	  }, ["Two (readonly)"]), " ", _h('checkbox', {
	    attrs: {
	      "value": "two",
	      "type": "success"
	    },
	    domProps: {
	      "checked": checkboxValue.two
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.two = 'two' == arguments[0]
	      }
	    }
	  }, ["Two"]), " ", _m(1), " ", _m(2), " ", _h('checkbox', {
	    attrs: {
	      "button": "",
	      "value": "three",
	      "type": "primary"
	    },
	    domProps: {
	      "checked": checkboxValue.three
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.three = 'tree' == arguments[0]
	      }
	    }
	  }, ["Three"]), " ", _h('checkbox', {
	    attrs: {
	      "button": "",
	      "value": "four",
	      "type": "info",
	      "disabled": ""
	    },
	    domProps: {
	      "checked": checkboxValue.four
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.four = 'four' == arguments[0]
	      }
	    }
	  }, ["Four (disabled)"]), " ", _h('checkbox', {
	    attrs: {
	      "button": "",
	      "value": "four",
	      "type": "info",
	      "readonly": ""
	    },
	    domProps: {
	      "checked": checkboxValue.four
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.four = 'four' == arguments[0]
	      }
	    }
	  }, ["Four (readonly)"]), " ", _h('checkbox', {
	    attrs: {
	      "button": "",
	      "value": "four",
	      "type": "info"
	    },
	    domProps: {
	      "checked": checkboxValue.four
	    },
	    on: {
	      "checked": function($event) {
	        checkboxValue.four = 'four' == arguments[0]
	      }
	    }
	  }, ["Four"]), " ", _h('p', [_h('pre', ["Checkbox values: " + _s(checkboxValue)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <checkbox :checked=\"checkboxValue.one\" @checked=\"checkboxValue.one = 'one' == arguments[0]\" value=\"one\">One</checkbox>\n    <checkbox :checked=\"checkboxValue.two\" @checked=\"checkboxValue.two = 'two' == arguments[0]\" value=\"two\" type=\"primary\">Two</checkbox>\n    <checkbox :checked=\"checkboxValue.three\" @checked=\"checkboxValue.three = 'tree' == arguments[0]\" value=\"three\" type=\"info\">Three</checkbox>\n    <checkbox button :checked=\"checkboxValue.four\" @checked=\"checkboxValue.four = 'four' == arguments[0]\" value=\"four\" type=\"danger\">Four</checkbox>\n  "]), " ", _h('doc-table', [_m(3), " ", _m(4), " ", _m(5), " ", _m(6)]), " ", _m(7)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', ["Checkbox"])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h4', ["Checkbox Button (Single button)"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["checked"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["Handle the selected value."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Number"]), " or ", _h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Value to return if the checkbox item is selected."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["button"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["Button style."])])
	}},function (){with(this) {
	  return _h('p', ["See ", _h('a', {
	    attrs: {
	      "href": "#button-group"
	    }
	  }, ["Button Group"]), " for more options."])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-c8bf7950", module.exports)
	  }
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(180)
	
	/* template */
	var __vue_template__ = __webpack_require__(189)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\datepickerDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4158485e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4158485e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] datepickerDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 180 */
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
	
	var _Datepicker = __webpack_require__(181);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(186);
	
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

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(182)
	
	/* script */
	__vue_exports__ = __webpack_require__(184)
	
	/* template */
	var __vue_template__ = __webpack_require__(185)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Datepicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-477b8e5d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-477b8e5d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Datepicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-477b8e5d!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-477b8e5d!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.datepicker{\r\n  position: relative;\r\n  display: inline-block;\n}\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\n}\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.datepicker > button.close:focus {\r\n  opacity: .2;\n}\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\r\n  width: 218px;\n}\n.datepicker-body{\r\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\n}\n.datepicker-ctrl p {\r\n  width: 65%;\n}\n.datepicker-ctrl span {\r\n  position: absolute;\n}\n.datepicker-body span {\r\n  text-align: center;\n}\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\n}\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\n}\n.datepicker-monthRange {\r\n  margin-top: 10px\n}\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\n}\n.datepicker-weekRange span{\r\n  font-weight: bold;\n}\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\n}\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\n}\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\n}\n.datepicker-preBtn{\r\n  left: 2px;\n}\n.datepicker-nextBtn{\r\n  right: 2px;\n}\r\n", "", {"version":3,"sources":["/./src/Datepicker.vue?49ed3016"],"names":[],"mappings":";AA8VA;EACA,mBAAA;EACA,sBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,yCAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;;;EAGA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kCAAA;EACA,8BAAA;CACA;AACA;;;;EAIA,YAAA;CACA;AAEA;;EAEA,wCAAA;EACA,uBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;;;;EAIA,gBAAA;CACA;AACA;;;;;EAKA,2BAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\r\n  <div class=\"datepicker\">\r\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\r\n        :style=\"{width:width}\"\r\n        :value=\"value\"\r\n        @click=\"inputClick\"\r\n        @input=\"this.$emit('input',$event.target.value)\" />\r\n    <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"value = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"(m, index) in text.months\">\r\n              <span   :class=\"{'datepicker-dateRange-item-active':\r\n                  (text.months[parse(value).getMonth()]  === m) &&\r\n                  currDate.getFullYear() === parse(value).getFullYear()}\"\r\n                  @click=\"monthSelect(index)\"\r\n                >{{m.substr(0,3)}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span :class=\"{'datepicker-dateRange-item-active':parse(this.value).getFullYear() === decade.text}\"\r\n                @click.stop=\"yearSelect(decade.text)\"\r\n              >{{decade.text}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {translations} from './utils/utils.js'\r\n// import $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    value: {\r\n      type: String\r\n    },\r\n    format: {\r\n      default: 'MM/dd/yyyy'\r\n    },\r\n    disabledDaysOfWeek: {\r\n      type: Array,\r\n      default () {\r\n        return []\r\n      }\r\n    },\r\n    width: {\r\n      type: String,\r\n      default: '200px'\r\n    },\r\n    clearButton: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    lang: {\r\n      type: String,\r\n      default: navigator.language\r\n    },\r\n    placeholder: {\r\n      type: String\r\n    }\r\n  },\r\n  mounted () {\r\n    let el = this.$el\r\n    this._blur = e => {\r\n      if (!el.contains(e.target)) \r\n        this.close()\r\n    }\r\n    this.$emit('child-created', this)\r\n    this.currDate = this.parse(this.value) || this.parse(new Date())\r\n    window.addEventListener('click', this._blur);\r\n  },\r\n  beforeDestroy () {\r\n    window.removeEventListner('click', this._blur)\r\n  },\r\n  data () {\r\n    return {\r\n      currDate: new Date(),\r\n      dateRange: [],\r\n      decadeRange: [],\r\n      displayDayView: false,\r\n      displayMonthView: false,\r\n      displayYearView: false\r\n    }\r\n  },\r\n  watch: {\r\n    value (val) {\r\n      this.$emit('input', val)\r\n    },\r\n    currDate () {\r\n      this.getDateRange()\r\n    }\r\n  },\r\n  computed: {\r\n    text () {\r\n      return translations(this.lang)\r\n    }\r\n  },\r\n  methods: {\r\n    close () {\r\n      this.displayDayView = this.displayMonthView = this.displayYearView = false\r\n    },\r\n    inputClick () {\r\n      this.currDate = this.parse(this.value) || this.parse(new Date())\r\n      if (this.displayMonthView || this.displayYearView) {\r\n        this.displayDayView = false\r\n      } else {\r\n        this.displayDayView = !this.displayDayView\r\n      }\r\n    },\r\n    preNextDecadeClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 10, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 10, months, date)\r\n      }\r\n    },\r\n    preNextMonthClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const month = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        const preMonth = this.getYearMonth(year, month - 1)\r\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\r\n      } else {\r\n        const nextMonth = this.getYearMonth(year, month + 1)\r\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\r\n      }\r\n    },\r\n    preNextYearClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 1, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 1, months, date)\r\n      }\r\n    },\r\n    yearSelect (year) {\r\n      this.displayYearView = false\r\n      this.displayMonthView = true\r\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\r\n    },\r\n    daySelect (date, el) {\r\n      if (this.$el.classList[0] === 'datepicker-item-disable') {\r\n        return false\r\n      } else {\r\n        this.currDate = date\r\n        this.value = this.stringify(this.currDate)\r\n        this.displayDayView = false\r\n      }\r\n    },\r\n    switchMonthView () {\r\n      this.displayDayView = false\r\n      this.displayMonthView = true\r\n    },\r\n    switchDecadeView () {\r\n      this.displayMonthView = false\r\n      this.displayYearView = true\r\n    },\r\n    monthSelect (index) {\r\n      this.displayMonthView = false\r\n      this.displayDayView = true\r\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\r\n    },\r\n    getYearMonth (year, month) {\r\n      if (month > 11) {\r\n        year++\r\n        month = 0\r\n      } else if (month < 0) {\r\n        year--\r\n        month = 11\r\n      }\r\n      return {year: year, month: month}\r\n    },\r\n    stringifyDecadeHeader (date) {\r\n      const yearStr = date.getFullYear().toString()\r\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\r\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\r\n      return firstYearOfDecade + '-' + lastYearOfDecade\r\n    },\r\n    stringifyDayHeader (date) {\r\n      return this.text.months[date.getMonth()] + ' ' + date.getFullYear()\r\n    },\r\n    parseMonth (date) {\r\n      return this.text.months[date.getMonth()]\r\n    },\r\n    stringifyYearHeader (date) {\r\n      return date.getFullYear()\r\n    },\r\n    stringify (date, format = this.format) {\r\n      if (!date) date = this.parse()\r\n      if (!date) return ''\r\n      const year = date.getFullYear()\r\n      const month = date.getMonth() + 1\r\n      const day = date.getDate()\r\n      const monthName = this.parseMonth(date)\r\n\r\n      return format\r\n      .replace(/yyyy/g, year)\r\n      .replace(/MMMM/g, monthName)\r\n      .replace(/MMM/g, monthName.substring(0, 3))\r\n      .replace(/MM/g, ('0' + month).slice(-2))\r\n      .replace(/dd/g, ('0' + day).slice(-2))\r\n      .replace(/yy/g, year)\r\n      .replace(/M(?!a)/g, month)\r\n      .replace(/d/g, day)\r\n    },\r\n    parse (str = this.value) {\r\n      let date\r\n      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {\r\n        date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2))\r\n      } else {\r\n        date = new Date(str)\r\n      }\r\n      return isNaN(date.getFullYear()) ? new Date() : date\r\n    },\r\n    getDayCount (year, month) {\r\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\r\n      if (month === 1) {\r\n        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {\r\n          return 29\r\n        }\r\n      }\r\n      return dict[month]\r\n    },\r\n    getDateRange () {\r\n      this.dateRange = []\r\n      this.decadeRange = []\r\n      const time = {\r\n        year: this.currDate.getFullYear(),\r\n        month: this.currDate.getMonth(),\r\n        day: this.currDate.getDate()\r\n      }\r\n      const yearStr = time.year.toString()\r\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\r\n      for (let i = 0; i < 12; i++) {\r\n        this.decadeRange.push({\r\n          text: firstYearOfDecade + i\r\n        })\r\n      }\r\n\r\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\r\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\r\n      if (firstDayWeek === 0) {\r\n        firstDayWeek = 7\r\n      }\r\n      const dayCount = this.getDayCount(time.year, time.month)\r\n      if (firstDayWeek > 1) {\r\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\r\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\r\n        for (let i = 1; i < firstDayWeek; i++) {\r\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\r\n          this.dateRange.push({\r\n            text: dayText,\r\n            date: new Date(preMonth.year, preMonth.month, dayText),\r\n            sclass: 'datepicker-item-gray'\r\n          })\r\n        }\r\n      }\r\n\r\n      for (let i = 1; i <= dayCount; i++) {\r\n        const date = new Date(time.year, time.month, i)\r\n        const week = date.getDay()\r\n        let sclass = ''\r\n        this.disabledDaysOfWeek.forEach((el) => {\r\n          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'\r\n        })\r\n        if (i === time.day) {\r\n          if (this.value) {\r\n            const valueDate = this.parse(this.value)\r\n            if (valueDate) {\r\n              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {\r\n                sclass = 'datepicker-dateRange-item-active'\r\n              }\r\n            }\r\n          }\r\n        }\r\n        this.dateRange.push({\r\n          text: i,\r\n          date: date,\r\n          sclass: sclass\r\n        })\r\n      }\r\n\r\n      if (this.dateRange.length < 42) {\r\n        const nextMonthNeed = 42 - this.dateRange.length\r\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\r\n\r\n        for (let i = 1; i <= nextMonthNeed; i++) {\r\n          this.dateRange.push({\r\n            text: i,\r\n            date: new Date(nextMonth.year, nextMonth.month, i),\r\n            sclass: 'datepicker-item-gray'\r\n          })\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.datepicker{\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner{\r\n  width: 218px;\r\n}\r\n.datepicker-body{\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span{\r\n  font-weight: bold;\r\n}\r\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn{\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn{\r\n  right: 2px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(143);
	
	// import $ from './utils/NodeList.js'
	
	exports.default = {
	  props: {
	    value: {
	      type: String
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
	  mounted: function mounted() {
	    var _this = this;
	
	    var el = this.$el;
	    this._blur = function (e) {
	      if (!el.contains(e.target)) _this.close();
	    };
	    this.$emit('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    window.addEventListener('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListner('click', this._blur);
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
	    daySelect: function daySelect(date, el) {
	      if (this.$el.classList[0] === 'datepicker-item-disable') {
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
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "datepicker"
	  }, [_h('input', {
	    staticClass: "form-control datepicker-input",
	    class: {
	      'with-reset-button': clearButton
	    },
	    style: ({
	      width: width
	    }),
	    attrs: {
	      "type": "text",
	      "placeholder": placeholder
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "click": inputClick,
	      "input": function($event) {
	        this.$emit('input', $event.target.value)
	      }
	    }
	  }), " ", (clearButton && value) ? _h('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        value = ''
	      }
	    }
	  }, [_m(0)]) : _e(), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (displayDayView),
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
	        preNextMonthClick(0)
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "datepicker-nextBtn glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        preNextMonthClick(1)
	      }
	    }
	  }), " ", _h('p', {
	    on: {
	      "click": switchMonthView
	    }
	  }, [_s(stringifyDayHeader(currDate))])]), " ", _h('div', {
	    staticClass: "datepicker-weekRange"
	  }, [_l((text.daysOfWeek), function(w) {
	    return _h('span', [_s(w)])
	  })]), " ", _h('div', {
	    staticClass: "datepicker-dateRange"
	  }, [_l((dateRange), function(d) {
	    return _h('span', {
	      class: d.sclass,
	      on: {
	        "click": function($event) {
	          daySelect(d.date, this)
	        }
	      }
	    }, [_s(d.text)])
	  })])])])]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (displayMonthView),
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
	        preNextYearClick(0)
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "datepicker-nextBtn glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        preNextYearClick(1)
	      }
	    }
	  }), " ", _h('p', {
	    on: {
	      "click": switchDecadeView
	    }
	  }, [_s(stringifyYearHeader(currDate))])]), " ", _h('div', {
	    staticClass: "datepicker-monthRange"
	  }, [_l((text.months), function(m, index) {
	    return [_h('span', {
	      class: {
	        'datepicker-dateRange-item-active':
	        (text.months[parse(value).getMonth()] === m) &&
	        currDate.getFullYear() === parse(value).getFullYear()
	      },
	      on: {
	        "click": function($event) {
	          monthSelect(index)
	        }
	      }
	    }, [_s(m.substr(0, 3))])]
	  })])])])]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (displayYearView),
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
	        preNextDecadeClick(0)
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "datepicker-nextBtn glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        preNextDecadeClick(1)
	      }
	    }
	  }), " ", _h('p', [_s(stringifyDecadeHeader(currDate))])]), " ", _h('div', {
	    staticClass: "datepicker-monthRange decadeRange"
	  }, [_l((decadeRange), function(decade) {
	    return [_h('span', {
	      class: {
	        'datepicker-dateRange-item-active': parse(this.value).getFullYear() === decade.text
	      },
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          yearSelect(decade.text)
	        }
	      }
	    }, [_s(decade.text)])]
	  })])])])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["×"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-477b8e5d", module.exports)
	  }
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(187)
	
	/* template */
	var __vue_template__ = __webpack_require__(188)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-42088116", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-42088116", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Option.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 187 */
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
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return (loading) ? _h('li', [_t("default")]) : _e()
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-42088116", module.exports)
	  }
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "datepicker",
	      "name": "Datepicker"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('p', [_h('pre', ["Selected date is: " + _s(dp_string)])]), " ", _h('datepicker', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (value),
	      expression: "value"
	    }],
	    ref: "dp",
	    attrs: {
	      "disabled-days-of-Week": disabled,
	      "format": format,
	      "clear-button": clear,
	      "placeholder": placeholder,
	      "width": "370px"
	    },
	    domProps: {
	      "value": (value)
	    },
	    on: {
	      "input": function($event) {
	        value = $event
	      }
	    }
	  }), " ", _m(0), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (disabled),
	      expression: "disabled"
	    }],
	    attrs: {
	      "multiple": "",
	      "options": [0, 1, 2, 3, 4, 5, 6]
	    },
	    domProps: {
	      "value": (disabled)
	    },
	    on: {
	      "input": function($event) {
	        disabled = $event
	      }
	    }
	  }), " ", _m(1), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (format),
	      expression: "format"
	    }],
	    attrs: {
	      "options": formats
	    },
	    domProps: {
	      "value": (format)
	    },
	    on: {
	      "input": function($event) {
	        format = $event
	      }
	    }
	  }), " ", _m(2), " ", _h('checkbox', {
	    attrs: {
	      "type": "primary"
	    },
	    domProps: {
	      "checked": clear
	    },
	    on: {
	      "checked": function($event) {
	        clear = arguments[0]
	      }
	    }
	  }, ["toggle clear button"])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <datepicker v-model=\"value\" :disabled-days-of-Week=\"disabled\" :format=\"format\" :clear-button=\"clear\" :placeholder=\"placeholder\"></datepicker>\n  "]), " ", _h('doc-table', [_m(3), " ", _m(4), " ", _m(5), " ", _m(6), " ", _m(7), " ", _m(8)]), " ", " ", _m(9)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', ["Disabled days of week"])
	}},function (){with(this) {
	  return _h('h4', ["Format"])
	}},function (){with(this) {
	  return _h('h4', ["Reset button"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["clear-button"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["If ", _h('strong', ["true"]), " shows an × shaped button to clear the selected date.\n        Usefull in forms where date entry is optional."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["disabled-days-of-week"]), " ", _h('p', [_h('code', ["Array"])]), " ", _h('p'), " ", _h('p', ["Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\n         Multiple values should be comma-separated."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["format"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["MMMM/dd/yyyy"])]), " ", _h('p', ["The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["placeholder"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Placeholder to put on the input field when no date (null or empty) is set"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Value of the input DOM"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["200px"]), " ", _h('p', ["Width of the input DOM"])])
	}},function (){with(this) {
	  return _h('div')
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4158485e", module.exports)
	  }
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(191)
	
	/* template */
	var __vue_template__ = __webpack_require__(196)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\dropdownDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-20763da6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-20763da6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dropdownDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 191 */
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
	
	var _Dropdown = __webpack_require__(192);
	
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
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(193)
	
	/* template */
	var __vue_template__ = __webpack_require__(195)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\components\\Dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-30536786", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-30536786", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(194);
	
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
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(112);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(45);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(115);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(119);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(120);
	
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
	        for (var i in arr) {
	          if (isNode(arr[i])) {
	            if (!~nodes.indexOf(arr[i])) nodes.push(arr[i]);
	          } else if (arr[i]) {
	            flatten(arr[i]);
	          }
	        }
	      }
	      for (var i in arguments) {
	        var arg = arguments[i];
	        if (isNode(arg)) {
	          if (!~nodes.indexOf(arg)) nodes.push(arg);
	        } else if (isNodeList(arg)) {
	          flatten(arg);
	        } else {
	          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	        }
	      }
	      return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      return flatten(this).filter(function (el) {
	        if (el.remove) {
	          el.remove();
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        }
	        return document.body.contains(el);
	      });
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
	      return new NodeList([ArrayProto.filter.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      flatten(this).forEach(function (node) {
	        nodes.push.apply(nodes, node.querySelectorAll(element));
	      });
	      return NodeListJS(nodes, this.owner);
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
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return flatten(ArrayProto.map.apply(this, args), this);
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return this.map(function (el) {
	        return el.parentNode;
	      });
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
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      for (var i in args) {
	        if (!isNode(args[i])) throw nodeError;
	        if (!~this.indexOf(args[i])) ArrayProto.push.call(this, args[i]);
	      }
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var shift = ArrayProto.shift.bind(this);
	      while (amount--) {
	        nodes.push(shift());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return new NodeList([ArrayProto.slice.apply(this, args), this]);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      for (var i = 2, l = args.length; i < l; i++) {
	        if (!isNode(args[i])) throw nodeError;
	      }
	      return new NodeList([ArrayProto.splice.apply(this, args), this]);
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var unshift = ArrayProto.unshift.bind(this);
	
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      for (var i in args) {
	        if (!isNode(args[i])) throw nodeError;
	        if (!~this.indexOf(args[i])) unshift(args[i]);
	      }
	      return this;
	    }
	
	    // classes
	
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
	      var _this2 = this;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      classes.forEach(function (c) {
	        return _this2.each(function (el) {
	          return el.classList[method](c);
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      for (var i in this) {
	        if (this[i] !== null) {
	          this[i] = this[i][prop];
	        }
	        arr.push(this[i]);
	      }
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      var i = void 0;
	      if (prop.constructor === Object) {
	        for (i in this) {
	          if (this[i]) {
	            for (var key in prop) {
	              if (key in this[i]) {
	                this[i][key] = prop[key];
	              }
	            }
	          }
	        }
	      } else {
	        for (i in this) {
	          if (prop in this[i]) {
	            this[i][prop] = value;
	          }
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      for (var i in this) {
	        if (this[i] && this[i][method] instanceof Function) {
	          this[i] = this[i][method].apply(this[i], args);
	          arr.push(this[i]);
	          if (returnThis && this[i] !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      }
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return new NodeList([[this[index]], this]);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      var _this3 = this;
	
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
	        var els = new NodeList([selector, this]);
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
	      events.forEach(function (event) {
	        for (var i in _this3) {
	          if (_this3[i] === window || isNode(_this3[i])) {
	            _this3[i].addEventListener(event, callback, false);
	            Events.push({
	              el: _this3[i],
	              event: event,
	              callback: callback
	            });
	          }
	        }
	      });
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      var _this4 = this;
	
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      if (typeof events === 'string' && callback instanceof Function) {
	        var _loop = function _loop(i) {
	          Events.forEach(function (e) {
	            events.events.split(' ').forEach(function (event) {
	              if (Events[e] && Events[e].el === _this4[i] && Events[e].event === event && Events[e].callback === callback) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        };
	
	        for (var i in this) {
	          _loop(i);
	        }
	      } else if (typeof events === 'string') {
	        var _loop2 = function _loop2(_i) {
	          Events.forEach(function (e) {
	            events.split(' ').forEach(function (event) {
	              if (Events[e] && Events[e].el === _this4[_i] && Events[e].event === event) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        };
	
	        for (var _i in this) {
	          _loop2(_i);
	        }
	      } else if (callback instanceof Function) {
	        for (var _i2 in this) {
	          for (var e in Events) {
	            if (Events[e] && Events[e].el === this[_i2] && Events[e].callback === callback) {
	              Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	              delete Events[e];
	            }
	          }
	        }
	      } else {
	        for (var _i3 in this) {
	          for (var _e in Events) {
	            if (Events[_e] && Events[_e].el === this[_i3]) {
	              Events[_e].el.removeEventListener(Events[_e].event, Events[_e].callback);
	              delete Events[_e];
	            }
	          }
	        }
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
	        blurList.push({
	          el: el,
	          callback: callback
	        });
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
	        for (var e in blurList) {
	          if (blurList[e] && blurList[e].el === el && (!callback || blurList[e].callback === callback)) {
	            delete blurList[e];
	          }
	        }
	      });
	      blurList = blurList.filter(function (el) {
	        return el !== undefined;
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
	  for (var i in arr) {
	    var el = arr[i];
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
	  }
	  return new NodeList([list, owner]);
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
	  var _arguments = arguments,
	      _this5 = this;
	
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      var arr = [];
	      var returnThis = true;
	      for (var i in NL) {
	        var el = NL[i];
	        if (el && el[prop] instanceof Function) {
	          el = el[prop].apply(el, _arguments);
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
	        for (var i in this) {
	          if (this[i] !== null) {
	            this[i] = this[i][prop];
	          }
	          arr.push(this[i]);
	        }
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        for (var i in this) {
	          if (i) {
	            var o = this[i];
	
	            if (o && prop in o) {
	              o[prop] = value;
	            }
	          }
	        }
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  return new NodeList(arguments);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h(isLi ? 'li' : 'div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (blur),
	      expression: "blur"
	    }],
	    tag: "div",
	    class: [{
	      open: show,
	      disabled: disabled,
	      dropdown: isLi,
	      'input-group-btn': inInput,
	      'btn-group': !isLi && !inInput
	    }]
	  }, [_t("before"), " ", _t("button", [(isLi) ? _h('a', {
	    class: ['dropdown-toggle', buttonSize, {
	      disabled: disabled
	    }],
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 27) return;
	        show = false
	      }
	    }
	  }, ["\n      " + _s(text) + "\n      ", _m(0)]) : _h('button', {
	    class: ['btn btn-' + type, buttonSize, 'dropdown-toggle'],
	    attrs: {
	      "type": "button",
	      "disabled": disabled
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 27) return;
	        show = false
	      }
	    }
	  }, ["\n      " + _s(text) + "\n      ", _h('span', {
	    staticClass: "caret"
	  })]), " "]), " ", _t("dropdown-menu", [_h('ul', {
	    staticClass: "dropdown-menu"
	  }, [_t("default")])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    staticClass: "caret"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-30536786", module.exports)
	  }
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "dropdown",
	      "name": "Dropdown"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('dropdown', [_h('button', {
	    slot: "button",
	    staticClass: "btn btn-default dropdown-toggle",
	    attrs: {
	      "type": "button"
	    }
	  }, ["\n        Action\n        ", _m(0)]), " ", _h('ul', {
	    slot: "dropdown-menu",
	    staticClass: "dropdown-menu"
	  }, [_m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5)])]), " ", _h('dropdown', {
	    attrs: {
	      "text": "Action",
	      "type": "primary"
	    }
	  }, [_m(6), " ", _m(7), " ", _m(8), " ", _m(9), " ", _m(10)]), " ", _h('dropdown', [_h('button', {
	    slot: "button",
	    staticClass: "btn btn-success dropdown-toggle",
	    attrs: {
	      "type": "button"
	    }
	  }, ["\n        Action ", _m(11)]), " ", _h('ul', {
	    slot: "dropdown-menu",
	    staticClass: "dropdown-menu"
	  }, [_m(12), " ", _m(13), " ", _m(14), " ", _m(15), " ", _m(16)])]), " ", _h('dropdown', {
	    attrs: {
	      "text": "Disabled",
	      "type": "warning",
	      "disabled": ""
	    }
	  }, [_m(17)]), " ", _h('dropdown', {
	    attrs: {
	      "type": "info"
	    }
	  }, [_h('button', {
	    slot: "before",
	    staticClass: "btn btn-info",
	    attrs: {
	      "type": "button"
	    }
	  }, ["Segmented"]), " ", _m(18)]), " ", _h('div', {
	    staticClass: "btn-group btn-group-justified"
	  }, [_m(19), " ", _h('dropdown', [_h('a', {
	    slot: "button",
	    staticClass: "btn btn-default",
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["\n          Dropdown ", _m(20)]), " ", _h('ul', {
	    slot: "dropdown-menu",
	    staticClass: "dropdown-menu"
	  }, [_m(21), " ", _m(22), " ", _m(23), " ", _m(24), " ", _m(25)])]), " ", _m(26)])]), " ", _h('doc-code', ["\n    <dropdown text=\"Action\" type=\"primary\">\n      <li><a href=\"#dropdown\">Action</a></li>\n      <li role=\"separator\" class=\"divider\"></li>\n      <li><a href=\"#dropdown\">Separated link</a></li>\n    </dropdown>\n    // For segmented dropdown, ignore text and add a \"before\" slot\n    <dropdown type=\"info\">\n      <button slot=\"before\" type=\"button\" class=\"btn btn-info\">Segmented</button>\n      <li><a href=\"#dropdown\">...</a></li>\n    </dropdown>\n    // In a button group\n    <div class=\"btn-group btn-group-justified\">\n      <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Left</a>\n      <dropdown>...</dropdown>\n      <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Right</a>\n    </div>\n    // With slots you can handle some elements as native bootstrap\n    <dropdown>\n      <button slot=\"button\" type=\"button\" class=\"btn btn-default dropdown-toggle\">\n        Action\n        <span class=\"caret\"></span>\n      </button>\n      <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n        <li><a href=\"#dropdown\">Action</a></li>\n        <li><a href=\"#dropdown\">Another action</a></li>\n        <li><a href=\"#dropdown\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#dropdown\">Separated link</a></li>\n      </ul>\n    </dropdown>\n  "]), " ", _h('doc-table', [_m(27), " ", _m(28), " ", _m(29), " ", _m(30)]), " ", _h('doc-table', {
	    attrs: {
	      "type": "Events"
	    }
	  }, [_m(31)]), " ", _m(32), " ", _m(33)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    staticClass: "caret"
	  })
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])])
	}},function (){with(this) {
	  return _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  })
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])])
	}},function (){with(this) {
	  return _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  })
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "caret"
	  })
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])])
	}},function (){with(this) {
	  return _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  })
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])
	}},function (){with(this) {
	  return _h('a', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "href": "#dropdown",
	      "role": "button"
	    }
	  }, ["Left"])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "caret"
	  })
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Another action"])])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Something else here"])])
	}},function (){with(this) {
	  return _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  })
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#dropdown"
	    }
	  }, ["Separated link"])])
	}},function (){with(this) {
	  return _h('a', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "href": "#dropdown",
	      "role": "button"
	    }
	  }, ["Right"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value (v-model)"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["Whether show the component."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["disabled"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Dropdown button text."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of\n        ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["input"]), " ", _h('p', ["(", _h('code', ["Boolean"]), ")"]), " ", _h('p', ["Return if the dropdown is shown."])])
	}},function (){with(this) {
	  return _h('h2', ["Usage"])
	}},function (){with(this) {
	  return _h('p', ["Just like the examples. With slots you can use it as the ", _h('a', {
	    attrs: {
	      "target": "_blank",
	      "href": "http://getbootstrap.com/javascript/#dropdowns"
	    }
	  }, ["original Bootstrap way"]), "."])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-20763da6", module.exports)
	  }
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(198)
	
	/* script */
	__vue_exports__ = __webpack_require__(200)
	
	/* template */
	var __vue_template__ = __webpack_require__(217)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\formGroupDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4fc8cca8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4fc8cca8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] formGroupDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(199);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4fc8cca8!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formGroupDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4fc8cca8!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formGroupDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\n}\r\n", "", {"version":3,"sources":["/./docs/example/formGroupDocs.vue?098d7366"],"names":[],"mappings":";AAmHA;EACA,kBAAA;CACA","file":"formGroupDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"form-group\" name=\"Form Group\">\r\n    <p>This is not a style component, is just a global validation manager.</p>\r\n    <p>If you need to evaluate if a group of elements are all valids, you can handle easier with this component.</p>\r\n    <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>\r\n    <div class=\"bs-example\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n          <p><pre>Valid user data : {{valid.user}}</pre></p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n          <p><pre>Valid direction : {{valid.direction}}</pre></p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n          <p><pre>All valid : {{valid.all}}</pre></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form-group @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\r\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <tabs :active=\"active\">\r\n              <tab header=\"User\">\r\n                <form-group @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\r\n                  <bs-input label=\"User Name\" required></bs-input>\r\n                  <bs-input label=\"Email\" type=\"email\" required></bs-input>\r\n                </form-group>\r\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\r\n              </tab>\r\n              <tab header=\"Direction\" :disabled=\"!valid.user\">\r\n                <form-group @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Continent</label>\r\n                    <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\r\n                  </div>\r\n                  <bs-input label=\"City\" type=\"text\" required></bs-input>\r\n                </form-group>\r\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\r\n              </tab>\r\n            </tabs>\r\n          </div>\r\n        </form-group>\r\n      </div>\r\n    </div>\r\n    <doc-code language=\"markup\">\r\n        &lt;form-group @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\r\n          &lt;div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            &lt;tabs :active=\"active\">\r\n              &lt;tab header=\"User\">\r\n                &lt;form-group @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\r\n                  &lt;bs-input label=\"User Name\" required>&lt;/bs-input>\r\n                  &lt;bs-input label=\"Email\" type=\"email\" required>&lt;/bs-input>\r\n                &lt;/form-group>\r\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue&lt;/button>\r\n              &lt;/tab>\r\n              &lt;tab header=\"Direction\" :disabled=\"!valid.user\">\r\n                &lt;form-group @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\r\n                  &lt;div class=\"form-group\">\r\n                    &lt;label class=\"control-label\">Continent&lt;/label>\r\n                    &lt;v-select required justified :options=\"['America','Europe']\" clear-button>&lt;/v-select>\r\n                  &lt;/div>\r\n                  &lt;bs-input label=\"City\" type=\"text\" required>&lt;/bs-input>\r\n                &lt;/form-group>\r\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!&lt;/button>\r\n              &lt;/tab>\r\n            &lt;/tabs>\r\n          &lt;/div>\r\n        &lt;/form-group>\r\n    </doc-code>\r\n    <doc-table>\r\n      <div>\r\n        <p>valid</p>\r\n        <p><code>Boolean</code></p>\r\n        <p></p>\r\n        <p>Return if all the internal form elements (<code>select</code>, <code>input</code>) are valids.</p>\r\n      </div>\r\n    </doc-table>\r\n  </doc-section>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './utils/docSection.vue'\r\nimport docTable from './utils/docTable.js'\r\nimport docCode from './utils/docCode.js'\r\nimport formGroup from 'src/FormGroup.vue'\r\nimport bsInput from 'src/components/Input.vue'\r\nimport tab from 'src/components/Tab.vue'\r\nimport tabs from 'src/components/Tabs.vue'\r\nimport vSelect from 'src/components/Select.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docTable,\r\n    docCode,\r\n    formGroup,\r\n    bsInput,\r\n    tab,\r\n    tabs,\r\n    vSelect\r\n  },\r\n  data () {\r\n    return {\r\n      active: 0,\r\n      valid: {}\r\n    }\r\n  },\r\n  methods: {\r\n    show (value) {\r\n      return value instanceof Array ? value.join(', ') : value\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 200 */
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
	
	var _FormGroup = __webpack_require__(201);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _Input = __webpack_require__(204);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Tab = __webpack_require__(209);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(212);
	
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
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(202)
	
	/* template */
	var __vue_template__ = __webpack_require__(203)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\FormGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-79eb400a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-79eb400a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FormGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 202 */
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
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('span', [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-79eb400a", module.exports)
	  }
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(205)
	
	/* script */
	__vue_exports__ = __webpack_require__(207)
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\components\\Input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5846f925"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5846f925", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5846f925", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Input.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(206);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5846f925&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5846f925&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-group[data-v-5846f925] {\r\n  position: relative;\n}\nlabel~.close[data-v-5846f925] {\r\n  top: 25px;\n}\n.input-group>.icon[data-v-5846f925] {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\n}\n.close[data-v-5846f925] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.has-feedback .close[data-v-5846f925] {\r\n  right: 20px;\n}\r\n", "", {"version":3,"sources":["/./src/components/Input.vue?7ca1352e"],"names":[],"mappings":";AAiOA;EACA,mBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,QAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA","file":"Input.vue","sourcesContent":["<template>\r\n  <div class=\"form-group\" :class=\"{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}\" @focus=\"input_focus\" @blur=\"input_blur\">\r\n    <slot name=\"label\"><label v-if=\"label\" class=\"control-label\" @click=\"focus\">{{label}}</label></slot>\r\n    <div v-if=\"$slots.before||$slots.after\" class=\"input-group\">\r\n      <slot name=\"before\"></slot>\r\n      <textarea :is=\"type=='textarea'?type:'input'\" class=\"form-control\" ref=\"input\"\r\n        :cols=\"cols\"\r\n        :disabled=\"disabled\"\r\n        :max=\"attr(max)\"\r\n        :maxlength=\"maxlength\"\r\n        :min=\"attr(min)\"\r\n        :name=\"name\"\r\n        :placeholder=\"placeholder\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :rows=\"rows\"\r\n        :step=\"step\"\r\n        :title=\"attr(title)\"\r\n        :type=\"type=='textarea'?null:type\"\r\n        v-model=\"val\"\r\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\r\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\r\n      ></textarea>\r\n      <div v-if=\"clearButton && value\" :class=\"{icon:icon}\">\r\n        <span class=\"close\" @click=\"value = ''\">&times;</span>\r\n      </div>\r\n      <div v-if=\"icon\" class=\"icon\">\r\n        <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\r\n      </div>\r\n      <slot name=\"after\"></slot>\r\n    </div>\r\n    <template v-else>\r\n      <textarea :is=\"type=='textarea'?type:'input'\" class=\"form-control\" ref=\"input\"\r\n        :cols=\"cols\"\r\n        :disabled=\"disabled\"\r\n        :max=\"attr(max)\"\r\n        :maxlength=\"maxlength\"\r\n        :min=\"attr(min)\"\r\n        :name=\"name\"\r\n        :placeholder=\"placeholder\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :rows=\"rows\"\r\n        :step=\"step\"\r\n        :title=\"attr(title)\"\r\n        :type=\"type=='textarea'?null:type\"\r\n        v-model=\"val\"\r\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\r\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\r\n      ></textarea>\r\n      <span v-if=\"clearButton && val\" class=\"close\" @click=\"val = ''\">&times;</span>\r\n      <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\r\n    </template>\r\n    <div v-if=\"showHelp\" class=\"help-block\" @click=\"focus\">{{help}}</div>\r\n    <div v-if=\"showError\" class=\"help-block with-errors\" @click=\"focus\">{{errorText}}</div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, translations} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    clearButton: {type: Boolean, default: false},\r\n    cols: {type: Number, default: null},\r\n    disabled: {type: Boolean, default: false},\r\n    enterSubmit: {type: Boolean, default: false},\r\n    error: {type: String, default: null},\r\n    help: {type: String, default: null},\r\n    hideHelp: {type: Boolean, default: true},\r\n    icon: {type: Boolean, default: false},\r\n    label: {type: String, default: null},\r\n    lang: {type: String, default: navigator.language},\r\n    mask: null,\r\n    maskDelay: {type: Number, default: 100},\r\n    match: {type: String, default: null},\r\n    max: {type: String, default: null},\r\n    maxlength: {type: Number, default: null},\r\n    min: {type: String, default: null},\r\n    minlength: {type: Number, default: 0},\r\n    name: {type: String, default: null},\r\n    pattern: {default: null},\r\n    placeholder: {type: String, default: null},\r\n    readonly: {type: Boolean, default: false},\r\n    required: {type: Boolean, default: false},\r\n    rows: {type: Number, default: 3},\r\n    step: {type: Number, default: null},\r\n    type: {type: String, default: 'text'},\r\n    validationDelay: {type: Number, default: 250},\r\n    value: {default: null}\r\n  },\r\n  data () {\r\n    var val = this.value\r\n    return {\r\n      val,\r\n      valid: null,\r\n      timeout: null\r\n    }\r\n  },\r\n  computed: {\r\n    canValidate () { return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null) },\r\n    errorText () {\r\n      let value = this.value\r\n      let error = [this.error]\r\n      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')\r\n      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')\r\n      return error.join(' ')\r\n    },\r\n    input () { return this.$refs.input },\r\n    nativeValidate () { return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },\r\n    regex () { return coerce.pattern(this.pattern) },\r\n    showError () { return this.error && this.valid === false },\r\n    showHelp () { return this.help && (!this.showError || !this.hideHelp) },\r\n    text () { return translations(this.lang) },\r\n    title () { return this.errorText || this.help || '' }\r\n  },\r\n  watch: {\r\n    match (val) { this.eval() },\r\n    val (val, old) {\r\n      this.$emit('input', val)\r\n      if (val !== old) {\r\n        if (this.mask instanceof Function) {\r\n          val = this.mask(val || '')\r\n          if (this.val !== val) {\r\n            if (this._timeout.mask) clearTimeout(this._timeout.mask)\r\n            this._timeout.mask = setTimeout(() => {\r\n              this.val = val\r\n            }, isNaN(this.maskDelay) ? 0 : this.maskDelay)\r\n          }\r\n        }\r\n        this.eval()\r\n      }\r\n    },\r\n    valid (val, old) {\r\n      this.$emit('isvalid', val)\r\n      this.$emit(!val ? 'invalid' : 'valid')\r\n      if (this._parent) this._parent.validate()\r\n    },\r\n    value (val) {\r\n      if (this.val !== val) { this.val = val }\r\n    }\r\n  },\r\n  methods: {\r\n    input_focus( e ) {\r\n      this.$emit('focus', e)\r\n    },\r\n    input_blur( e ) {\r\n      if (this.canValidate) { \r\n        this.valid = this.validate() \r\n      }\r\n      this.$emit('blur', e)\r\n    },\r\n    attr (value) {\r\n      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value\r\n    },\r\n    emit (e) {\r\n      this.$emit(e.type, e)\r\n      if (e.type === 'blur' && this.canValidate) { this.valid = this.validate() }\r\n    },\r\n    eval () {\r\n      if (this._timeout.eval) clearTimeout(this._timeout.eval)\r\n      if (!this.canValidate) {\r\n        this.valid = true\r\n      } else {\r\n        this._timeout.eval = setTimeout(() => {\r\n          this.valid = this.validate()\r\n          this._timeout.eval = null\r\n        }, this.validationDelay)\r\n      }\r\n    },\r\n    focus () { this.input.focus() },\r\n    submit () {\r\n      if (this.$parent._formValidator) {\r\n        return this.$parent.validate()\r\n      }\r\n      if (this.input.form) {\r\n        const invalids = $('.form-group.validate:not(.has-success)', this.input.form)\r\n        if (invalids.length) {\r\n          invalids.find('input,textarea,select')[0].focus()\r\n        } else {\r\n          this.input.form.submit()\r\n        }\r\n      }\r\n    },\r\n    validate () {\r\n      if (!this.canValidate) { return true }\r\n      let value = (this.val || '').trim()\r\n      if (!value) { return !this.required }\r\n      if (this.match !== null) { return this.match === value }\r\n      if (value.length < this.minlength) { return false }\r\n      if (this.nativeValidate && !this.input.checkValidity()) { return false }\r\n      if (this.regex) {\r\n        if (!(this.regex instanceof Function ? this.regex(this.value) : this.regex.test(this.value))) { return false }\r\n      }\r\n      return true\r\n    }\r\n  },\r\n  created () {\r\n    this._input = true\r\n    this._timeout = {}\r\n    let parent = this.$parent\r\n    while (parent && !parent._formValidator) { parent = parent.$parent }\r\n    if (parent && parent._formValidator) {\r\n      this._parent = parent\r\n      this._parent && this._parent.children.push(this)\r\n    }\r\n  },\r\n  mounted () {\r\n    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {\r\n    //   if (this.canValidate) { this.valid = this.validate() }\r\n    //   this.$emit('blur', e)\r\n    // })\r\n  },\r\n  beforeDestroy () {\r\n    // $(this.input).off()\r\n    if (this._parent) {\r\n      var index = this._parent.children.indexOf(this)\r\n      this._parent.children.splice(index, 1)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.form-group {\r\n  position: relative;\r\n}\r\nlabel~.close {\r\n  top: 25px;\r\n}\r\n.input-group>.icon {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback .close {\r\n  right: 20px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
	var _NodeList = __webpack_require__(194);
	
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
	
	exports.default = {
	  props: {
	    clearButton: { type: Boolean, default: false },
	    cols: { type: Number, default: null },
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
	    validationDelay: { type: Number, default: 250 },
	    value: { default: null }
	  },
	  data: function data() {
	    var val = this.value;
	    return {
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
	    match: function match(val) {
	      this.eval();
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
	    input_focus: function input_focus(e) {
	      this.$emit('focus', e);
	    },
	    input_blur: function input_blur(e) {
	      if (this.canValidate) {
	        this.valid = this.validate();
	      }
	      this.$emit('blur', e);
	    },
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "form-group",
	    class: {
	      validate: canValidate, 'has-feedback': icon, 'has-error': canValidate && valid === false, 'has-success': canValidate && valid
	    },
	    on: {
	      "focus": input_focus,
	      "blur": input_blur
	    }
	  }, [_t("label", [(label) ? _h('label', {
	    staticClass: "control-label",
	    on: {
	      "click": focus
	    }
	  }, [_s(label)]) : _e()]), " ", ($slots.before || $slots.after) ? _h('div', {
	    staticClass: "input-group"
	  }, [_t("before"), " ", _h(type == 'textarea' ? type : 'input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (val),
	      expression: "val"
	    }],
	    ref: "input",
	    tag: "textarea",
	    staticClass: "form-control",
	    attrs: {
	      "cols": cols,
	      "disabled": disabled,
	      "max": attr(max),
	      "maxlength": maxlength,
	      "min": attr(min),
	      "name": name,
	      "placeholder": placeholder,
	      "readonly": readonly,
	      "required": required,
	      "rows": rows,
	      "step": step,
	      "title": attr(title),
	      "type": type == 'textarea' ? null : type
	    },
	    domProps: {
	      "value": _s(val)
	    },
	    on: {
	      "blur": emit,
	      "focus": emit,
	      "input": [function($event) {
	        if ($event.target.composing) return;
	        val = $event.target.value
	      }, emit],
	      "keyup": function($event) {
	        if ($event.keyCode !== 13) return;
	        type != 'textarea' && enterSubmit && submit()
	      }
	    }
	  }), " ", (clearButton && value) ? _h('div', {
	    class: {
	      icon: icon
	    }
	  }, [_h('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        value = ''
	      }
	    }
	  }, ["×"])]) : _e(), " ", (icon) ? _h('div', {
	    staticClass: "icon"
	  }, [(icon && valid !== null) ? _h('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _e()]) : _e(), " ", _t("after")]) : [_h(type == 'textarea' ? type : 'input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (val),
	      expression: "val"
	    }],
	    ref: "input",
	    tag: "textarea",
	    staticClass: "form-control",
	    attrs: {
	      "cols": cols,
	      "disabled": disabled,
	      "max": attr(max),
	      "maxlength": maxlength,
	      "min": attr(min),
	      "name": name,
	      "placeholder": placeholder,
	      "readonly": readonly,
	      "required": required,
	      "rows": rows,
	      "step": step,
	      "title": attr(title),
	      "type": type == 'textarea' ? null : type
	    },
	    domProps: {
	      "value": _s(val)
	    },
	    on: {
	      "blur": emit,
	      "focus": emit,
	      "input": [function($event) {
	        if ($event.target.composing) return;
	        val = $event.target.value
	      }, emit],
	      "keyup": function($event) {
	        if ($event.keyCode !== 13) return;
	        type != 'textarea' && enterSubmit && submit()
	      }
	    }
	  }), " ", (clearButton && val) ? _h('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        val = ''
	      }
	    }
	  }, ["×"]) : _e(), " ", (icon && valid !== null) ? _h('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _e()], " ", " ", (showHelp) ? _h('div', {
	    staticClass: "help-block",
	    on: {
	      "click": focus
	    }
	  }, [_s(help)]) : _e(), " ", (showError) ? _h('div', {
	    staticClass: "help-block with-errors",
	    on: {
	      "click": focus
	    }
	  }, [_s(errorText)]) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5846f925", module.exports)
	  }
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\components\\Tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-68eacfa0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-68eacfa0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 210 */
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
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "panel",
	    class: ['tab-pane', {
	      'active fade': active,
	      'in': fadein
	    }],
	    attrs: {
	      "role": "tabpanel"
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-68eacfa0", module.exports)
	  }
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(213)
	
	/* script */
	__vue_exports__ = __webpack_require__(215)
	
	/* template */
	var __vue_template__ = __webpack_require__(216)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\components\\Tabs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ad17e21a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ad17e21a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(214);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ad17e21a!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ad17e21a!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n[tabs] > .tab-content {\r\n  margin: 15px 0;\n}\r\n", "", {"version":3,"sources":["/./src/components/Tabs.vue?4317b9af"],"names":[],"mappings":";AA0EA;EACA,eAAA;CACA","file":"Tabs.vue","sourcesContent":["<template>\r\n  <div tabs>\r\n    <ul :class=\"navStyleClass\" role=\"tablist\">\r\n      <template v-for=\"header in headers\">\r\n        <li v-if=\"header._isTab\" :class=\"{active:header.active, disabled:header.disabled}\" @click.prevent=\"select(header)\">\r\n          <slot name=\"header\"><a href=\"#\" v-html=\"header.header\"></a></slot>\r\n        </li>\r\n        <dropdown v-if=\"header._isTabGroup\" :text=\"header.header\" :class=\"{active:header.active}\" :disabled=\"header.disabled\">\r\n          <li v-for=\"tab in header.tabs\" :class=\"{disabled:tab.disabled}\"><a href=\"#\" @click.prevent=\"select(tab)\">{{tab.header}}</a></li>\r\n        </dropdown>\r\n      </template>\r\n    </ul>\r\n    <div class=\"tab-content\"><slot></slot></div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\nimport dropdown from './Dropdown.vue'\r\n\r\nexport default {\r\n  components: {\r\n    dropdown\r\n  },\r\n  props: {\r\n    // effect: {type: String, default: 'fadein'},\r\n    justified: false,\r\n    navStyle: {type: String, default: null},\r\n    value: {type: Number, default: 0}\r\n  },\r\n  data () {\r\n    var index = this.value || 0\r\n    return {\r\n      index,\r\n      headers: [],\r\n      tabs: []\r\n    }\r\n  },\r\n  watch: {\r\n    index (val) {\r\n      this.$emit('active', val)\r\n      this.$emit('input', val)\r\n    },\r\n    value (val) {\r\n      this.index = val\r\n    }\r\n  },\r\n  computed: {\r\n    navStyleClass () {\r\n      return [\r\n        'nav',\r\n        ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs',\r\n        {\r\n          'nav-justified': coerce.boolean(this.justified),\r\n          'nav-pills': this.navStyle === 'stacked'\r\n        }\r\n      ]\r\n    },\r\n    show () { return this.tabs[this.index] || this.tabs[0] }\r\n  },\r\n  methods: {\r\n    select (tab) {\r\n      if (!tab.disabled) {\r\n        this.index = this.tabs.indexOf(tab)\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    this._isTabs = true\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n[tabs] > .tab-content {\r\n  margin: 15px 0;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(29);
	
	var _Dropdown = __webpack_require__(192);
	
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
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    attrs: {
	      "tabs": ""
	    }
	  }, [_h('ul', {
	    class: navStyleClass,
	    attrs: {
	      "role": "tablist"
	    }
	  }, [_l((headers), function(header) {
	    return [(header._isTab) ? _h('li', {
	      class: {
	        active: header.active, disabled: header.disabled
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          select(header)
	        }
	      }
	    }, [_t("header", [_h('a', {
	      attrs: {
	        "href": "#"
	      },
	      domProps: {
	        "innerHTML": _s(header.header)
	      }
	    })])]) : _e(), " ", (header._isTabGroup) ? _h('dropdown', {
	      class: {
	        active: header.active
	      },
	      attrs: {
	        "text": header.header,
	        "disabled": header.disabled
	      }
	    }, [_l((header.tabs), function(tab) {
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
	            select(tab)
	          }
	        }
	      }, [_s(tab.header)])])
	    })]) : _e()]
	  })]), " ", _h('div', {
	    staticClass: "tab-content"
	  }, [_t("default")])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ad17e21a", module.exports)
	  }
	}

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "form-group",
	      "name": "Form Group"
	    }
	  }, [_m(0), " ", _m(1), " ", _m(2), " ", _h('div', {
	    staticClass: "bs-example"
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid user data : " + _s(valid.user)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid direction : " + _s(valid.direction)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["All valid : " + _s(valid.all)])])])]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('form-group', {
	    on: {
	      "valid": function($event) {
	        valid.all = true
	      },
	      "invalid": function($event) {
	        valid.all = false
	      }
	    }
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
	  }, [_h('tabs', {
	    attrs: {
	      "active": active
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "User"
	    }
	  }, [_h('form-group', {
	    on: {
	      "valid": function($event) {
	        valid.user = true
	      },
	      "invalid": function($event) {
	        valid.user = false
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
	      "disabled": !valid.user
	    },
	    on: {
	      "click": function($event) {
	        active = 1
	      }
	    }
	  }, ["Continue"])]), " ", _h('tab', {
	    attrs: {
	      "header": "Direction",
	      "disabled": !valid.user
	    }
	  }, [_h('form-group', {
	    on: {
	      "valid": function($event) {
	        valid.direction = true
	      },
	      "invalid": function($event) {
	        valid.direction = false
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-group"
	  }, [_m(3), " ", _h('v-select', {
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
	      "disabled": !valid.all
	    }
	  }, ["Done!!"])])])])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n      <form-group @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <tabs :active=\"active\">\n            <tab header=\"User\">\n              <form-group @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\n                <bs-input label=\"User Name\" required></bs-input>\n                <bs-input label=\"Email\" type=\"email\" required></bs-input>\n              </form-group>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n            </tab>\n            <tab header=\"Direction\" :disabled=\"!valid.user\">\n              <form-group @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Continent</label>\n                  <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                </div>\n                <bs-input label=\"City\" type=\"text\" required></bs-input>\n              </form-group>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n            </tab>\n          </tabs>\n        </div>\n      </form-group>\n  "]), " ", _h('doc-table', [_m(4)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('p', ["This is not a style component, is just a global validation manager."])
	}},function (){with(this) {
	  return _h('p', ["If you need to evaluate if a group of elements are all valids, you can handle easier with this component."])
	}},function (){with(this) {
	  return _h('p', ["In this example, the buttons and tabs are disabled while the inner elements are empty."])
	}},function (){with(this) {
	  return _h('label', {
	    staticClass: "control-label"
	  }, ["Continent"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["valid"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["Return if all the internal form elements (", _h('code', ["select"]), ", ", _h('code', ["input"]), ") are valids."])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4fc8cca8", module.exports)
	  }
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(219)
	
	/* script */
	__vue_exports__ = __webpack_require__(221)
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\formValidatorDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8d838302", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8d838302", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] formValidatorDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(220);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8d838302!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formValidatorDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8d838302!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formValidatorDocs.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\n}\r\n", "", {"version":3,"sources":["/./docs/example/formValidatorDocs.vue?2d599998"],"names":[],"mappings":";AAuIA;EACA,kBAAA;CACA","file":"formValidatorDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"form-validator\" name=\"Form Validator\">\r\n    <p>This is not a style component, is just a global validation manager.</p>\r\n    <p>If you need to evaluate if a group of elements are all valids, you can handle easier with this component.</p>\r\n    <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>\r\n    <div class=\"bs-example\">\r\n      <h4>Basic Usage:</h4>\r\n      <doc-code>\r\n        &lt;!-- Using v-model -->\r\n        &lt;!-- The starting variable value will be ignored. -->\r\n        &lt;form-validator v-model=\"valid\">\r\n          ...\r\n        &lt;/form-validator>\r\n        &lt;!-- Using event isvalid -->\r\n          &lt;form-validator @isvalid=\"valid = arguments[0]\">...&lt;/form-validator>\r\n          &lt;!-- or -->\r\n          &lt;form-validator @isvalid=\"validMethod\">\r\n            &lt;!-- the method receive true or false in the first argument -->\r\n          &lt;/form-validator>\r\n        &lt;!-- Using events valid and/or invalid -->\r\n        &lt;form-validator @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\r\n            ...\r\n        &lt;/form-validator>\r\n    </doc-code>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n          <p><pre>Valid user data : {{valid.user}}</pre></p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n          <p><pre>Valid direction : {{valid.direction}}</pre></p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n          <p><pre>All valid : {{valid.all}}</pre></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form-validator v-model=\"valid.all\">\r\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <tabs :active=\"active\">\r\n              <tab header=\"User\">\r\n                <form-validator v-model=\"valid.user\">\r\n                  <bs-input label=\"User Name\" required></bs-input>\r\n                  <bs-input label=\"Email\" type=\"email\" required></bs-input>\r\n                </form-validator>\r\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\r\n              </tab>\r\n              <tab header=\"Direction\" :disabled=\"!valid.user\">\r\n                <form-validator v-model=\"valid.direction\">\r\n                  <div class=\"form-validator\">\r\n                    <label class=\"control-label\">Continent</label>\r\n                    <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\r\n                  </div>\r\n                  <bs-input label=\"City\" type=\"text\" required></bs-input>\r\n                </form-validator>\r\n                <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\r\n              </tab>\r\n            </tabs>\r\n          </div>\r\n        </form-validator>\r\n      </div>\r\n    </div>\r\n    <doc-code language=\"markup\">\r\n        &lt;form-validator v-model=\"valid.all\">\r\n          &lt;div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            &lt;tabs :active=\"active\">\r\n              &lt;tab header=\"User\">\r\n                &lt;form-validator @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\r\n                  &lt;bs-input label=\"User Name\" required>&lt;/bs-input>\r\n                  &lt;bs-input label=\"Email\" type=\"email\" required>&lt;/bs-input>\r\n                &lt;/form-validator>\r\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue&lt;/button>\r\n              &lt;/tab>\r\n              &lt;tab header=\"Direction\" :disabled=\"!valid.user\">\r\n                &lt;form-validator @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\r\n                  &lt;div class=\"form-validator\">\r\n                    &lt;label class=\"control-label\">Continent&lt;/label>\r\n                    &lt;v-select required justified :options=\"['America','Europe']\" clear-button>&lt;/v-select>\r\n                  &lt;/div>\r\n                  &lt;bs-input label=\"City\" type=\"text\" required>&lt;/bs-input>\r\n                &lt;/form-validator>\r\n                &lt;button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!&lt;/button>\r\n              &lt;/tab>\r\n            &lt;/tabs>\r\n          &lt;/div>\r\n        &lt;/form-validator>\r\n    </doc-code>\r\n    <doc-table>\r\n      <div>\r\n        <p>valid</p>\r\n        <p><code>Boolean</code></p>\r\n        <p></p>\r\n        <p>Return if all the internal form elements (<code>select</code>, <code>input</code>) are valids.</p>\r\n      </div>\r\n    </doc-table>\r\n  </doc-section>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './utils/docSection.vue'\r\nimport docTable from './utils/docTable.js'\r\nimport docCode from './utils/docCode.js'\r\nimport formValidator from 'src/components/FormValidator.vue'\r\nimport bsInput from 'src/components/Input.vue'\r\nimport tab from 'src/components/Tab.vue'\r\nimport tabs from 'src/components/Tabs.vue'\r\nimport vSelect from 'src/components/Select.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docTable,\r\n    docCode,\r\n    formValidator,\r\n    bsInput,\r\n    tab,\r\n    tabs,\r\n    vSelect\r\n  },\r\n  data () {\r\n    var valid = {}; ['all', 'direction', 'user'].forEach(el => { valid[el] = null })\r\n    return {\r\n      active: 0,\r\n      valid\r\n    }\r\n  },\r\n  methods: {\r\n    show (value) {\r\n      return value instanceof Array ? value.join(', ') : value\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 221 */
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
	
	var _FormValidator = __webpack_require__(222);
	
	var _FormValidator2 = _interopRequireDefault(_FormValidator);
	
	var _Input = __webpack_require__(204);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Tab = __webpack_require__(209);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(212);
	
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
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(223)
	
	/* template */
	var __vue_template__ = __webpack_require__(224)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\components\\FormValidator.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-194f3749", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-194f3749", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FormValidator.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(194);
	
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
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('span', [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-194f3749", module.exports)
	  }
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "form-validator",
	      "name": "Form Validator"
	    }
	  }, [_m(0), " ", _m(1), " ", _m(2), " ", _h('div', {
	    staticClass: "bs-example"
	  }, [_m(3), " ", _h('doc-code', ["\n      <!-- Using v-model -->\n      <!-- The starting variable value will be ignored. -->\n      <form-validator v-model=\"valid\">\n        ...\n      </form-validator>\n      <!-- Using event isvalid -->\n        <form-validator @isvalid=\"valid = arguments[0]\">...</form-validator>\n        <!-- or -->\n        <form-validator @isvalid=\"validMethod\">\n          <!-- the method receive true or false in the first argument -->\n        </form-validator>\n      <!-- Using events valid and/or invalid -->\n      <form-validator @valid=\"valid.all = true\" @invalid=\"valid.all = false\">\n          ...\n      </form-validator>\n  "]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid user data : " + _s(valid.user)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["Valid direction : " + _s(valid.direction)])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
	  }, [_h('p', [_h('pre', ["All valid : " + _s(valid.all)])])])]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('form-validator', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (valid.all),
	      expression: "valid.all"
	    }],
	    domProps: {
	      "value": (valid.all)
	    },
	    on: {
	      "input": function($event) {
	        valid.all = $event
	      }
	    }
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
	  }, [_h('tabs', {
	    attrs: {
	      "active": active
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "User"
	    }
	  }, [_h('form-validator', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (valid.user),
	      expression: "valid.user"
	    }],
	    domProps: {
	      "value": (valid.user)
	    },
	    on: {
	      "input": function($event) {
	        valid.user = $event
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
	      "disabled": !valid.user
	    },
	    on: {
	      "click": function($event) {
	        active = 1
	      }
	    }
	  }, ["Continue"])]), " ", _h('tab', {
	    attrs: {
	      "header": "Direction",
	      "disabled": !valid.user
	    }
	  }, [_h('form-validator', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (valid.direction),
	      expression: "valid.direction"
	    }],
	    domProps: {
	      "value": (valid.direction)
	    },
	    on: {
	      "input": function($event) {
	        valid.direction = $event
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-validator"
	  }, [_m(4), " ", _h('v-select', {
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
	      "disabled": !valid.all
	    }
	  }, ["Done!!"])])])])])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n      <form-validator v-model=\"valid.all\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <tabs :active=\"active\">\n            <tab header=\"User\">\n              <form-validator @valid=\"valid.user = true\" @invalid=\"valid.user = false\">\n                <bs-input label=\"User Name\" required></bs-input>\n                <bs-input label=\"Email\" type=\"email\" required></bs-input>\n              </form-validator>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.user\" @click=\"active = 1\">Continue</button>\n            </tab>\n            <tab header=\"Direction\" :disabled=\"!valid.user\">\n              <form-validator @valid=\"valid.direction = true\" @invalid=\"valid.direction = false\">\n                <div class=\"form-validator\">\n                  <label class=\"control-label\">Continent</label>\n                  <v-select required justified :options=\"['America','Europe']\" clear-button></v-select>\n                </div>\n                <bs-input label=\"City\" type=\"text\" required></bs-input>\n              </form-validator>\n              <button type=\"button\" class=\"btn btn-primary\" :disabled=\"!valid.all\">Done!!</button>\n            </tab>\n          </tabs>\n        </div>\n      </form-validator>\n  "]), " ", _h('doc-table', [_m(5)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('p', ["This is not a style component, is just a global validation manager."])
	}},function (){with(this) {
	  return _h('p', ["If you need to evaluate if a group of elements are all valids, you can handle easier with this component."])
	}},function (){with(this) {
	  return _h('p', ["In this example, the buttons and tabs are disabled while the inner elements are empty."])
	}},function (){with(this) {
	  return _h('h4', ["Basic Usage:"])
	}},function (){with(this) {
	  return _h('label', {
	    staticClass: "control-label"
	  }, ["Continent"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["valid"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["Return if all the internal form elements (", _h('code', ["select"]), ", ", _h('code', ["input"]), ") are valids."])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8d838302", module.exports)
	  }
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(227)
	
	/* template */
	var __vue_template__ = __webpack_require__(228)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\gettingStarted.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f4a32152", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f4a32152", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] gettingStarted.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 227 */
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
	
	exports.default = {
	  components: {
	    docCode: _docCode2.default,
	    docSection: _docSection2.default
	  }
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [_h('doc-section', {
	    attrs: {
	      "id": "getting-started",
	      "name": "Getting started"
	    }
	  }, [_m(0), " ", _m(1), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\r\n      $ npm install vue-strap\r\n\r\n      var alert = require('vue-strap/src/alert');\r\n      // or\r\n      var alert = require('vue-strap').alert;\r\n\r\n      new Vue({\r\n        components: {\r\n          alert: alert\r\n        }\r\n      })\r\n    "]), " ", _m(2), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\r\n      $ npm install vue-strap\r\n\r\n      import alert from 'vue-strap/src/alert'\r\n      // or\r\n      import { alert } from 'vue-strap'\r\n\r\n      new Vue({\r\n        components: {\r\n          alert\r\n        }\r\n      })\r\n    "]), " ", _m(3), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\r\n      $ bower install vue-strap\r\n\r\n      define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });\r\n    "]), " ", _m(4), " ", _m(5), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\r\n      <v-select :options=\"options\"></v-select>\r\n\r\n      <script src=\"path/to/vue.js\"></script>\r\n      <script src=\"path/to/vue-strap.js\"></script>\r\n      <script>\r\n        new Vue({\r\n          components: {\r\n            vSelect: VueStrap.select\r\n          },\r\n          data: {\r\n            options: []\r\n          }\r\n        })\r\n      </script>\r\n    "]), " ", _m(6), " ", _m(7), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\r\n      <script src=\"path/to/vue-strap-lang.js\"></script>\r\n    "]), " ", _m(8), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\r\n      require('vue-strap/dist/vue-strap-lang.js')\r\n    "]), " ", _m(9), " ", _m(10), " ", _m(11), " ", _m(12), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\r\n      <script src=\"path/to/isMobileBrowser.js\"></script>\r\n    "]), " ", _m(13), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\r\n      require('vue-strap/dist/isMobileBrowser.js')\r\n    "]), " ", _m(14), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\r\n      if (navigator.isMobile) {\r\n        //do something if is mobile\r\n      }\r\n      if ('isMobile' in navigator) {\r\n        //do things only if the plugin was loaded\r\n\r\n        if (!navigator.isMobile) {\r\n          //do something if is not a mobile\r\n        }\r\n      }\r\n    "]), " ", _m(15)]), " ", _h('doc-section', {
	    attrs: {
	      "id": "handle-events",
	      "name": "Event Handling"
	    }
	  }, [_m(16), " ", _h('doc-code', ["\r\n      <!-- using expression -->\r\n      <component @event=\"arg0 = arguments[0]\"></component>\r\n      <!-- using method -->\r\n      <component @event=\"callable\"></component>\r\n    "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\r\n      methods: {\r\n        callable: function (arg0, arg1, ...) {\r\n          // defined arguments\r\n          this.arg0 = arg0\r\n          // or global arguments array\r\n          this.arg0 = arguments[0]\r\n        }\r\n      }\r\n    "]), " ", _m(17)]), " ", _h('doc-section', {
	    attrs: {
	      "id": "vue2-binding",
	      "name": "vue 2 binding"
	    }
	  }, [_m(18), " ", _m(19), " ", _h('doc-code', ["\r\n      <!-- v-model like this: -->\r\n      <component v-model=\"element\"></component>\r\n      <!-- will be translated to: -->\r\n      <component :value=\"element\" @input=\"element = argument[0]\"></component>\r\n    "])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "bs-callout bs-callout-success"
	  }, [_h('h4', ["About this project"]), " ", _h('p', ["\r\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\r\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\r\n        The only required dependencies are:\r\n      "]), " ", _h('ul', [_h('li', [_h('a', {
	    attrs: {
	      "href": "http://vuejs.org/"
	    }
	  }, ["Vue.js"]), "\r\n          (required ^1.0.8, test with 1.0.8)."]), " ", _h('li', [_h('a', {
	    attrs: {
	      "href": "http://getbootstrap.com/"
	    }
	  }, ["Bootstrap CSS"]), "\r\n          (required 3.x.x, test with 3.3.5).\r\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\r\n        "])])])
	}},function (){with(this) {
	  return _h('h4', ["CommonJS"])
	}},function (){with(this) {
	  return _h('h4', ["ES6"])
	}},function (){with(this) {
	  return _h('h4', ["AMD"])
	}},function (){with(this) {
	  return _h('h4', ["Browser globals"])
	}},function (){with(this) {
	  return _h('p', ["\r\n      The ", _h('code', ["dist"]), " folder contains ", _h('code', ["vue-strap.js"]), " and ", _h('code', ["vue-strap.min.js"]), " with\r\n      all components exported in the ", _h('code', ["window.VueStrap"]), " object. These bundles are also available on both the\r\n      Bower and NPM packages.\r\n    "])
	}},function (){with(this) {
	  return _h('h2', ["Translations (optional):"])
	}},function (){with(this) {
	  return _h('p', ["If you want to enable language support, you have to add:"])
	}},function (){with(this) {
	  return _h('h4', ["CommonJS"])
	}},function (){with(this) {
	  return _h('p', ["If not included what you need, you can add your own, without editing the source code of vue-strap."])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h2', ["Mobile detection (optional):"])
	}},function (){with(this) {
	  return _h('p', ["If you need to enable/disable options if is a mobile device you can add:"])
	}},function (){with(this) {
	  return _h('h4', ["CommonJS"])
	}},function (){with(this) {
	  return _h('p', ["Then in javascript you can check it just doing:"])
	}},function (){with(this) {
	  return _h('p', ["Based on ", _h('a', {
	    attrs: {
	      "href": "http://detectmobilebrowsers.com/"
	    }
	  }, ["Detect Mobile Browsers"]), "."])
	}},function (){with(this) {
	  return _h('p', ["The events return values as arguments, you have 2 ways to handle them:"])
	}},function (){with(this) {
	  return _h('p', ["The number of arguments depend on the event."])
	}},function (){with(this) {
	  return _h('p', ["According to the vue2 specifications, ", _h('code', ["twoWay"]), " binding is not supported anymore, except for ", _h('code', ["v-model"]), "."])
	}},function (){with(this) {
	  return _h('p', ["Keep in mind that in vue2 v-model is equal to bind value an handle input event, like this:"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f4a32152", module.exports)
	  }
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\inputDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-646fbd5b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-646fbd5b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] inputDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 230 */
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
	
	var _Input = __webpack_require__(204);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _buttonGroup = __webpack_require__(156);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Dropdown = __webpack_require__(192);
	
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

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
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
	      value: (input),
	      expression: "input"
	    }],
	    attrs: {
	      "name": "username",
	      "disabled": check.disabled,
	      "error": check.error && 'Insert user name',
	      "help": "Only allows lowercase letters and numbers.",
	      "enter-submit": check.enterSubmit,
	      "icon": check.icon,
	      "label": check.label && 'User Name',
	      "mask": check.mask ? mask : null,
	      "minlength": check.minlength ? 5 : 0,
	      "pattern": "^[a-z][a-z0-9]+$",
	      "placeholder": check.placeholder && 'Username can\'t start with a number.',
	      "readonly": check.readonly,
	      "required": check.required,
	      "hide-help": check.hideHelp,
	      "clear-button": check.clearButton
	    },
	    domProps: {
	      "value": (input)
	    },
	    on: {
	      "input": function($event) {
	        input = $event
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-6"
	  }, [_h('bs-input', {
	    attrs: {
	      "name": "match",
	      "required": "",
	      "type": "password",
	      "match": input,
	      "icon": check.icon,
	      "enter-submit": check.enterSubmit,
	      "help": "Match the User Name"
	    }
	  }, [_h('label', {
	    slot: "label"
	  }, ["Match value"])])])]), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('button-group', {
	    attrs: {
	      "type": "primary",
	      "buttons": "false"
	    }
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-6"
	  }, [_h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.label
	    },
	    on: {
	      "checked": function($event) {
	        check.label = arguments[0]
	      }
	    }
	  }, ["Label"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.placeholder
	    },
	    on: {
	      "checked": function($event) {
	        check.placeholder = arguments[0]
	      }
	    }
	  }, ["placeholder"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.hideHelp
	    },
	    on: {
	      "checked": function($event) {
	        check.hideHelp = arguments[0]
	      }
	    }
	  }, ["hide help"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.disabled
	    },
	    on: {
	      "checked": function($event) {
	        check.disabled = arguments[0]
	      }
	    }
	  }, ["disabled"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.error
	    },
	    on: {
	      "checked": function($event) {
	        check.error = arguments[0]
	      }
	    }
	  }, ["error"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.icon
	    },
	    on: {
	      "checked": function($event) {
	        check.icon = arguments[0]
	      }
	    }
	  }, ["icon"])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-6"
	  }, [_h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.mask
	    },
	    on: {
	      "checked": function($event) {
	        check.mask = arguments[0]
	      }
	    }
	  }, ["mask"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.minlength
	    },
	    on: {
	      "checked": function($event) {
	        check.minlength = arguments[0]
	      }
	    }
	  }, ["minlength=5"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.readonly
	    },
	    on: {
	      "checked": function($event) {
	        check.readonly = arguments[0]
	      }
	    }
	  }, ["readonly"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.required
	    },
	    on: {
	      "checked": function($event) {
	        check.required = arguments[0]
	      }
	    }
	  }, ["required"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.clearButton
	    },
	    on: {
	      "checked": function($event) {
	        check.clearButton = arguments[0]
	      }
	    }
	  }, ["clear button"])]), " ", _h('p', [_h('checkbox', {
	    domProps: {
	      "checked": check.enterSubmit
	    },
	    on: {
	      "checked": function($event) {
	        check.enterSubmit = arguments[0]
	      }
	    }
	  }, ["enter submit"])])])])]), " ", _m(0), " ", _h('bs-input', {
	    attrs: {
	      "label": "Input with slots",
	      "type": "text",
	      "required": "",
	      "icon": "",
	      "clear-button": ""
	    }
	  }, [_h('span', {
	    slot: "before",
	    staticClass: "input-group-addon"
	  }, [_m(1)]), " ", _h('span', {
	    slot: "after",
	    staticClass: "input-group-addon"
	  }, [_m(2)])]), " ", _h('bs-input', {
	    attrs: {
	      "name": "textarea",
	      "label": "Textarea",
	      "type": "textarea",
	      "icon": check.icon,
	      "enter-submit": check.enterSubmit
	    },
	    on: {
	      "focus": function($event) {
	        event = 'focused'
	      },
	      "blur": function($event) {
	        event = 'blured'
	      }
	    }
	  }), " ", _h('pre', [" Test event on textarea: " + _s(event)])]), " ", _h('doc-code', ["\n      <bs-input v-model=\"input\"\n        label=\"Username\"\n        help=\"Only allows lowercase letters and numbers.\"\n        error=\"Insert username\"\n        placeholder=\"Username can't start with a number.\"\n        pattern=\"^[a-z][a-z0-9]+$\"\n        :mask=\"mask\"\n        minlength=\"5\"\n        readonly\n        required\n        icon\n      ></bs-input>\n      <bs-input required label=\"Match value\" type=\"password\"\n        :match=\"input\"\n      ></bs-input>\n      <bs-input label=\"Textarea\" type=\"textarea\"\n        @focus=\"event = 'focused'\"\n        @blur=\"event = 'blured'\"\n      ></bs-input>\n    "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n      mask: function (value) {\n        // change to lowercase, remove up to the first letter,\n        // and then remove all other unsuported characters\n        return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/[^a-z0-9]/g,'');\n      }\n    "]), " ", _m(3), " ", _m(4), " ", _h('bs-input', {
	    attrs: {
	      "label": "With dropdown and button",
	      "type": "text"
	    }
	  }, [_h('dropdown', {
	    slot: "before",
	    attrs: {
	      "text": "dropdown"
	    }
	  }, [_m(5)]), " ", _h('span', {
	    slot: "after",
	    staticClass: "input-group-btn"
	  }, [_m(6)])]), " ", _h('doc-code', ["\n      <bs-input label=\"With dropdown and button\" type=\"text\">\n        <dropdown slot=\"before\" text=\"dropdown\">\n          <li><a href=\"#\">option</a></li>\n        </dropdown>\n        <span slot=\"after\" class=\"input-group-btn\">\n          <button type=\"button\" class=\"btn btn-primary\">Go!</button>\n        </span>\n      </bs-input>\n    "]), " ", _h('bs-input', {
	    attrs: {
	      "label": "With text and icon",
	      "type": "number",
	      "placeholder": "Insert how much cost your house"
	    }
	  }, [_h('span', {
	    slot: "before",
	    staticClass: "input-group-addon"
	  }, [_m(7)]), " ", _h('span', {
	    slot: "after",
	    staticClass: "input-group-addon"
	  }, ["$"])]), " ", _h('doc-code', ["\n      <bs-input label=\"With text and icon\" type=\"number\" placeholder=\"Insert how much cost your house\">\n        <span slot=\"before\" class=\"input-group-addon\"><span class=\"glyphicon glyphicon-home\"></span></span>\n        <span slot=\"after\" class=\"input-group-addon\">$</span>\n      </bs-input>\n    "])]), " ", _h('doc-table', [_m(8), " ", _m(9), " ", _m(10), " ", _m(11), " ", _m(12), " ", _m(13), " ", _m(14), " ", _m(15), " ", _m(16), " ", _m(17), " ", _m(18), " ", _m(19), " ", _m(20), " ", _m(21), " ", _m(22), " ", _m(23), " ", _m(24), " ", _m(25), " ", _m(26), " ", _m(27)]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Supported Native Validator",
	      "headers": ['Name', 'Description']
	    }
	  }, [_m(28), " ", _m(29)]), "\n  That validations only work in browsers that support ", _m(30)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "glyphicon glyphicon-user"
	  })
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "glyphicon glyphicon-question-sign"
	  })
	}},function (){with(this) {
	  return _h('h2', ["Input groups:"])
	}},function (){with(this) {
	  return _h('p', ["More details in ", _h('a', {
	    attrs: {
	      "href": "http://getbootstrap.com/components/#input-groups"
	    }
	  }, ["bootstrap input groups"]), "."])
	}},function (){with(this) {
	  return _h('li', [_h('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["option"])])
	}},function (){with(this) {
	  return _h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    }
	  }, ["Go!"])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "glyphicon glyphicon-home"
	  })
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p', ["Input value. Use ", _h('code', ["v-model=\"value\""])])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["match"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p', ["Matching value. Both have to be the same value."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["disabled"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["enterSubmit"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Submit when you press ", _h('code', ["Enter"]), ". Not supported on type ", _h('code', ["textarea"]), "."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["error"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Error message."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["help"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Help text behind the input"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["hide-help"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Only work with help and error.", _h('br'), "Hide the help if have to show any error message."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["icon"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["label"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Enable input label (name)."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["lang"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Browser language"]), " ", _h('p', [_h('abbr', {
	    attrs: {
	      "title": "ISO 639-1 code"
	    }
	  }, [_h('a', {
	    attrs: {
	      "href": "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
	    }
	  }, ["Language"])]), ". Default ", _h('code', ["en"]), " if the translation doesn't exist."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["mask"]), " ", _h('p', [_h('code', ["Function"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Mask function that receive and edit the value."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["mask-delay"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["100"])]), " ", _h('p', ["Delay time before apply the mask."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["maxlength"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["minlength"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["name"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["pattern"]), " ", _h('p', [_h('code', ["String"]), ", ", _h('code', ["RegExp"]), " or ", _h('code', ["Function"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Validation pattern. A full ", _h('a', {
	    attrs: {
	      "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
	      "target": "_blank"
	    }
	  }, ["regular expression"]), " or a function that evaluate the content and return ", _h('code', ["true"]), " or ", _h('code', ["false"]), "."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["placeholder"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["required"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["text"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["validation-delay"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["250"])]), " ", _h('p', ["Delay time before apply the validation."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', ["Use native validation with ", _h('code', ["url"]), " and ", _h('code', ["email"]), "."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["min / max / step"]), " ", _h('p', ["That attributes handle the values supported.\n        Work with the following input types: ", _h('code', ["number"]), ", ", _h('code', ["range"]), ", ", _h('code', ["date"]), ", ", _h('code', ["datetime-local"]), ", ", _h('code', ["month"]), ", ", _h('code', ["time"]), " and ", _h('code', ["week"]), "."])])
	}},function (){with(this) {
	  return _h('a', {
	    attrs: {
	      "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation",
	      "target": "_blank"
	    }
	  }, ["HTML5 form validations (all modern browsers support it)."])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-646fbd5b", module.exports)
	  }
	}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(233)
	
	/* template */
	var __vue_template__ = __webpack_require__(243)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\modalDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7394cd3e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7394cd3e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modalDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 233 */
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
	
	var _Modal = __webpack_require__(234);
	
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
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(235)
	
	/* script */
	__vue_exports__ = __webpack_require__(237)
	
	/* template */
	var __vue_template__ = __webpack_require__(242)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fe7d5dc8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-fe7d5dc8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fe7d5dc8!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fe7d5dc8!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal {\r\n  transition: all 0.3s ease;\n}\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  -moz-transform: scale(0.1);\r\n  -ms-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\n}\r\n", "", {"version":3,"sources":["/./src/Modal.vue?c9c48630"],"names":[],"mappings":";AA6FA;EACA,0BAAA;CACA;AACA;EACA,kCAAA;CACA;AACA;EACA,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,6BAAA;EACA,0BAAA;EACA,qBAAA;CACA;AACA;EACA,4BAAA;EACA,yBAAA;EACA,wBAAA;EACA,oBAAA;EACA,6CAAA;EACA,qCAAA;EACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\r\n  <div role=\"dialog\" :class=\"['modal',effect]\" @click=\"backClose\" @transitionend=\"transitionend\">\r\n    <div :class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\" :style=\"{width: optionalWidth}\">\r\n      <div class=\"modal-content\">\r\n        <slot name=\"modal-header\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\r\n            <h4 class=\"modal-title\"><slot name=\"title\">{{title}}</slot></h4>\r\n          </div>\r\n        </slot>\r\n        <slot name=\"modal-body\"><div class=\"modal-body\"><slot></slot></div></slot>\r\n        <slot name=\"modal-footer\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"ok\">{{ okText }}</button>\r\n          </div>\r\n        </slot>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {getScrollBarWidth} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    backdrop: {type: Boolean, default: true},\r\n    callback: {type: Function, default: null},\r\n    cancelText: {type: String, default: 'Close'},\r\n    effect: {type: String, default: null},\r\n    large: {type: Boolean, default: false},\r\n    okText: {type: String, default: 'Save changes'},\r\n    small: {type: Boolean, default: false},\r\n    title: {type: String, default: ''},\r\n    value: {type: Boolean, required: true},\r\n    width: {default: null}\r\n  },\r\n  computed: {\r\n    optionalWidth () {\r\n      if (this.width === null) {\r\n        return null\r\n      } else if (Number.isInteger(this.width)) {\r\n        return this.width + 'px'\r\n      }\r\n      return this.width\r\n    }\r\n  },\r\n  watch: {\r\n    value (val) {\r\n      this.transitionstart()\r\n    }\r\n  },\r\n  methods: {\r\n    backClose (e) {\r\n      if (this.backdrop && e.target === this.$el) { this.cose() }\r\n    },\r\n    close () {\r\n      this.$emit('cancel')\r\n      this.$emit('input', false)\r\n    },\r\n    ok () {\r\n      if (this.callback instanceof Function) this.callback()\r\n      this.$emit('ok')\r\n    },\r\n    transitionstart () {\r\n      const el = this.$el\r\n      const body = document.body\r\n      const scrollBarWidth = getScrollBarWidth()\r\n      if (this.value) {\r\n        el.querySelector('.modal-content').focus()\r\n        el.style.display = 'block'\r\n        setTimeout(() => el.classList.add('in'), 0)\r\n        body.classList.add('modal-open')\r\n        if (scrollBarWidth !== 0) {\r\n          body.style.paddingRight = scrollBarWidth + 'px'\r\n        }\r\n      } else {\r\n        el.classList.remove('in')\r\n      }\r\n    },\r\n    transitionend () {\r\n      if (!this.value) {\r\n        this.$el.style.display = 'none'\r\n        const body = document.body\r\n        body.style.paddingRight = null\r\n        body.classList.remove('modal-open')\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n<style>\r\n.modal {\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  -moz-transform: scale(0.1);\r\n  -ms-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(238);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(143);
	
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
	        this.cose();
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
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(239), __esModule: true };

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(240);
	module.exports = __webpack_require__(55).Number.isInteger;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(241)});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(61)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    class: ['modal', effect],
	    attrs: {
	      "role": "dialog"
	    },
	    on: {
	      "click": backClose,
	      "transitionend": transitionend
	    }
	  }, [_h('div', {
	    class: {
	      'modal-dialog': true, 'modal-lg': large, 'modal-sm': small
	    },
	    style: ({
	      width: optionalWidth
	    }),
	    attrs: {
	      "role": "document"
	    }
	  }, [_h('div', {
	    staticClass: "modal-content"
	  }, [_t("modal-header", [_h('div', {
	    staticClass: "modal-header"
	  }, [_h('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": close
	    }
	  }, [_m(0)]), " ", _h('h4', {
	    staticClass: "modal-title"
	  }, [_t("title", [_s(title)])])])]), " ", _t("modal-body", [_h('div', {
	    staticClass: "modal-body"
	  }, [_t("default")])]), " ", _t("modal-footer", [_h('div', {
	    staticClass: "modal-footer"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": close
	    }
	  }, [_s(cancelText)]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": ok
	    }
	  }, [_s(okText)])])])])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["×"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-fe7d5dc8", module.exports)
	  }
	}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
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
	        showModal = true
	      }
	    }
	  }, ["Show modal"]), " ", _h('modal', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (showModal),
	      expression: "showModal"
	    }],
	    attrs: {
	      "title": "Modal title"
	    },
	    domProps: {
	      "value": (showModal)
	    },
	    on: {
	      "input": function($event) {
	        showModal = $event
	      }
	    }
	  }, [_h('div', {
	    slot: "modal-header",
	    staticClass: "modal-header"
	  }, [_m(0)]), "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    "]), " ", _h('button', {
	    staticClass: "btn btn-success",
	    on: {
	      "click": function($event) {
	        fadeModal = true
	      }
	    }
	  }, ["Fade modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Fade Modal",
	      "effect": "fade",
	      "width": "800"
	    },
	    domProps: {
	      "value": fadeModal
	    },
	    on: {
	      "cancel": function($event) {
	        fadeModal = false
	      }
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    "]), " ", _h('button', {
	    staticClass: "btn btn-primary",
	    on: {
	      "click": function($event) {
	        zoomModal = true
	      }
	    }
	  }, ["Zoom modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Zoom Modal",
	      "effect": "zoom",
	      "width": "400"
	    },
	    domProps: {
	      "value": zoomModal
	    },
	    on: {
	      "ok": function($event) {
	        zoomModal = false
	      }
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    "]), " ", _h('button', {
	    staticClass: "btn btn-default",
	    on: {
	      "click": function($event) {
	        showCustomModal = true
	      }
	    }
	  }, ["Show custom modal"]), " ", _h('modal', {
	    attrs: {
	      "effect": "fade",
	      "width": "50%"
	    },
	    domProps: {
	      "value": showCustomModal
	    },
	    on: {
	      "cancel": function($event) {
	        showCustomModel = false
	      }
	    }
	  }, [_h('div', {
	    slot: "modal-header",
	    staticClass: "modal-header"
	  }, [_m(1)]), "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      ", _h('div', {
	    slot: "modal-footer",
	    staticClass: "modal-footer"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        showCustomModal = false
	      }
	    }
	  }, ["Exit"]), " ", _h('button', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        showCustomModal = false
	      }
	    }
	  }, ["Custom Save"])])]), " ", _h('button', {
	    staticClass: "btn btn-warning",
	    on: {
	      "click": function($event) {
	        largeModal = true
	      }
	    }
	  }, ["Large modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Large Modal",
	      "large": ""
	    },
	    domProps: {
	      "value": largeModal
	    },
	    on: {
	      "cancel": function($event) {
	        largeModal = false
	      }
	    }
	  }, [_m(2), " ", _m(3), " ", _m(4)]), " ", _h('button', {
	    staticClass: "btn btn-danger",
	    on: {
	      "click": function($event) {
	        smallModal = true
	      }
	    }
	  }, ["Small modal"]), " ", _h('modal', {
	    attrs: {
	      "title": "Small Modal",
	      "small": ""
	    },
	    domProps: {
	      "value": smallModal
	    },
	    on: {
	      "cancel": function($event) {
	        smallModal = false
	      }
	    }
	  }, ["\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.\n    "])]), " ", _m(5), "\n  Have different ways to use it:\n  ", _h('doc-code', {
	    attrs: {
	      "language": "html"
	    }
	  }, ["\n    <!-- with v-model -->\n    <modal v-model=\"show\" @ok=\"okMethod\">\n      ...\n    </modal>\n    <!-- handling events -->\n    <modal title=\"Fade/Zoom Modal\" effect=\"fade/zoom\"\n      :value=\"show\" @ok=\"doSomething\" @cancel=\"show = false\"\n    >\n      ...\n    </modal>\n    <!-- personalice buttons -->\n    <modal v-model=\"show\" effect=\"fade\">\n      <div slot=\"modal-header\" class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <i>Custom</i> <code>Modal</code> <b>Title</b>\n        </h4>\n      </div>\n      ...\n      <div slot=\"modal-footer\" class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" @click=\"showCustomModal = false\">Exit</button>\n        <button type=\"button\" class=\"btn btn-success\" @click=\"saveMethod\">Custom Save</button>\n      </div>\n    </modal>\n"]), " ", _h('doc-table', [_m(6), " ", _m(7), " ", _m(8), " ", _m(9), " ", _m(10), " ", _m(11), " ", _m(12), " ", _m(13), " ", _m(14), " ", _m(15)]), " ", _m(16), " ", _m(17)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', {
	    staticClass: "modal-title"
	  }, ["Modal ", _h('b', ["Title"])])
	}},function (){with(this) {
	  return _h('h4', {
	    staticClass: "modal-title"
	  }, [_h('i', ["Custom"]), " ", _h('code', ["Modal"]), " ", _h('b', ["Title"])])
	}},function (){with(this) {
	  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])
	}},function (){with(this) {
	  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])
	}},function (){with(this) {
	  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('div', [_h('p', ["backdrop"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Enables/disables closing the modal by clicking on the backdrop."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["callback"]), " ", _h('p', [_h('code', ["Function"])]), " ", _h('p'), " ", _h('p', ["A callback Function when you click the modal primary button."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["cancel-text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Close"]), " ", _h('p', ["Text for cancel button"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["effect"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["set the name of the effect to use on modal, like fade or zoom"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["large"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Large modal (see boostrap's documentation for .modal-lg)"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["ok-text"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', ["Save changes"]), " ", _h('p', ["Text for OK button"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["small"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Small modal (see boostrap's documentation for .modal-sm)"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["title"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Title of the modal component."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p'), " ", _h('p', ["true if modal need to be shown, note the Modal has no intenal state"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["width"]), " ", _h('p', [_h('code', ["Number, String or null"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default."])])
	}},function (){with(this) {
	  return _h('h2', ["Usage"])
	}},function (){with(this) {
	  return _h('p', ["\n  If you just need a simple modal, you can use the ", _h('code', ["title"]), " prop and the default footer. However, if you\n  need to put custom HTML or a custom footer, you can override the header or footer block by using\n  ", _h('code', ["<div slot=\"modal-title\" class=\"modal-title\">...</div>"]), " and\n  ", _h('code', ["<div slot=\"modal-footer\" class=\"modal-footer\">...</div>"]), ".\n"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7394cd3e", module.exports)
	  }
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(245)
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\navbarDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0a950725", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0a950725", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] navbarDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 245 */
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
	
	var _Dropdown = __webpack_require__(192);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Navbar = __webpack_require__(246);
	
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
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(247)
	
	/* template */
	var __vue_template__ = __webpack_require__(248)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-38f0619e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-38f0619e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 247 */
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
	    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
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

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('nav', {
	    class: ['navbar', 'navbar-' + type, placement === 'static' ? 'navbar-static-top' : 'navbar-fixed-' + placement]
	  }, [_h('div', {
	    staticClass: "container-fluid"
	  }, [_h('div', {
	    staticClass: "navbar-header"
	  }, [(!$slots.collapse) ? _h('button', {
	    staticClass: "navbar-toggle collapsed",
	    attrs: {
	      "type": "button",
	      "aria-expanded": "false"
	    },
	    on: {
	      "click": toggleCollapse
	    }
	  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3)]) : _e(), " ", _t("collapse"), " ", _t("brand")]), " ", _h('div', {
	    class: ['navbar-collapse', {
	      collapse: collapsed
	    }]
	  }, [_h('ul', {
	    staticClass: "nav navbar-nav"
	  }, [_t("default")]), " ", ($slots.right) ? _h('ul', {
	    staticClass: "nav navbar-nav navbar-right"
	  }, [_t("right")]) : _e()])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    staticClass: "sr-only"
	  }, ["Toggle navigation"])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "icon-bar"
	  })
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "icon-bar"
	  })
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "icon-bar"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-38f0619e", module.exports)
	  }
	}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "navbar",
	      "name": "Navbar"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('navbar', {
	    attrs: {
	      "placement": placement,
	      "type": type
	    }
	  }, [_h('a', {
	    slot: "brand",
	    staticClass: "navbar-brand",
	    attrs: {
	      "href": "/",
	      "title": "Home"
	    }
	  }, ["VueStrap"]), " ", _h('dropdown', {
	    attrs: {
	      "text": "Component List",
	      "type": "primary"
	    }
	  }, [_l((sections), function(s) {
	    return _h('li', [_h('a', {
	      attrs: {
	        "href": '#' + s.id
	      },
	      domProps: {
	        "textContent": _s(s.name)
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
	  }, [_m(0), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (placement),
	      expression: "placement"
	    }],
	    attrs: {
	      "clear-button": "",
	      "options": ['top', 'bottom', 'static']
	    },
	    domProps: {
	      "value": (placement)
	    },
	    on: {
	      "input": function($event) {
	        placement = $event
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_m(1), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (type),
	      expression: "type"
	    }],
	    attrs: {
	      "options": ['default', 'inverse']
	    },
	    domProps: {
	      "value": (type)
	    },
	    on: {
	      "input": function($event) {
	        type = $event
	      }
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <navbar placement=\"top\" type=\"default\">\n      <!-- Brand as slot -->\n      <a slot=\"brand\" href=\"/\" title=\"Home\" class=\"navbar-brand\">VueStrap</a>\n      <!-- You can use dropdown component -->\n      <dropdown text=\"Dropdown\">\n        <li><a href=\"link\">Option</a></li>\n      </dropdown>\n      <!-- Or normal bootstrap style -->\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\">Dropdown</a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"link\">Option</a></li>\n        </ul>\n      </li>\n      <!-- For right positioning use slot -->\n      <li slot=\"right\">\n        <a href=\"https://github.com/yuche/vue-strap\" target=\"_blank\">Fork...</a>\n      </li>\n    </navbar>\n  "]), " ", _h('doc-table', [_m(2), " ", _m(3)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('label', ["Placement"])
	}},function (){with(this) {
	  return _h('label', ["Type"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["top"]), ", ", _h('code', ["bottom"]), ", ", _h('code', ["static"]), ", or empty for normal."]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["inverse"]), ", ", _h('code', ["default"]), "."]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0a950725", module.exports)
	  }
	}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(251)
	
	/* template */
	var __vue_template__ = __webpack_require__(257)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\popoverDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f2fdac94", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f2fdac94", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] popoverDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 251 */
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
	
	var _Popover = __webpack_require__(252);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Input = __webpack_require__(204);
	
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
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(253)
	
	/* script */
	__vue_exports__ = __webpack_require__(255)
	
	/* template */
	var __vue_template__ = __webpack_require__(256)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2465bf54", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2465bf54", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(254);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2465bf54!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2465bf54!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\n}\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave-active {\r\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n0% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n100% {\r\n    transform: scale(1);\r\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\r\n    transform: scale(1);\r\n    opacity: 1;\n}\n100% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n}\r\n", "", {"version":3,"sources":["/./src/Popover.vue?37a7d590"],"names":[],"mappings":";AAuBA;;;;EAIA,eAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA","file":"Popover.vue","sourcesContent":["<template>\r\n  <span ref=\"trigger\">\r\n    <slot></slot>\r\n    <div ref=\"popover\" v-if=\"show\" :class=\"['popover',placement]\" :transition=\"effect\">\r\n      <div class=\"arrow\"></div>\r\n      <h3 class=\"popover-title\" v-if=\"title\"><slot name=\"title\">{{title}}</slot></h3>\r\n      <div class=\"popover-content\"><slot name=\"content\"><span v-html=\"content\"></span></slot></div>\r\n    </div>\r\n  </span>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    trigger: {type: String, default: 'click'}\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave-active {\r\n  animation:scale-out 0.15s ease-out;\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 255 */
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
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('span', {
	    ref: "trigger"
	  }, [_t("default"), " ", (show) ? _h('div', {
	    ref: "popover",
	    class: ['popover', placement],
	    attrs: {
	      "transition": effect
	    }
	  }, [_m(0), " ", (title) ? _h('h3', {
	    staticClass: "popover-title"
	  }, [_t("title", [_s(title)])]) : _e(), " ", _h('div', {
	    staticClass: "popover-content"
	  }, [_t("content", [_h('span', {
	    domProps: {
	      "innerHTML": _s(content)
	    }
	  })])])]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "arrow"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2465bf54", module.exports)
	  }
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "popover",
	      "name": "Popover"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_l((placements), function(place) {
	    return _h('popover', {
	      attrs: {
	        "effect": "fade",
	        "content": text,
	        "placement": place
	      }
	    }, [_h('button', {
	      staticClass: "btn btn-default"
	    }, ["Popover on " + _s(place)])])
	  }), " ", _m(0), " ", _m(1), " ", _l((placements), function(place) {
	    return _h('popover', {
	      attrs: {
	        "effect": "fade",
	        "header": "",
	        "title": "Title",
	        "content": text,
	        "placement": place
	      }
	    }, [_h('button', {
	      staticClass: "btn btn-default"
	    }, ["Popover on " + _s(place)])])
	  }), " ", _m(2), " ", _m(3), " ", _h('p', [_h('popover', {
	    attrs: {
	      "effect": "scale",
	      "title": "Title",
	      "content": content,
	      "placement": "top",
	      "trigger": "hover"
	    }
	  }, [_m(4)]), " ", _h('popover', {
	    attrs: {
	      "effect": "scale",
	      "title": "Title",
	      "content": text,
	      "placement": "top",
	      "trigger": "contextmenu"
	    }
	  }, [_m(5)])]), " ", _h('popover', {
	    attrs: {
	      "effect": "scale",
	      "title": "Title",
	      "content": text,
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
	  }, ["\n    <popover effect=\"fade\" placement=\"bottom\" title=\"Title\" content=\"content\">\n      <button class=\"btn btn-default\">Popover on bottom</button>\n    </popover>\n  "]), " ", _h('doc-table', [_m(6), " ", _m(7), " ", _m(8), " ", _m(9), " ", _m(10), " ", _m(11)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h4', ["Title"])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h4', ["Trigger"])
	}},function (){with(this) {
	  return _h('button', {
	    staticClass: "btn btn-default"
	  }, ["Mouseenter"])
	}},function (){with(this) {
	  return _h('button', {
	    staticClass: "btn btn-default"
	  }, ["Contextmenu (right click)"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["trigger"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["click"]), " ", _h('code', ["focus"]), " ", _h('code', ["hover"]), " ", _h('code', ["contextmenu"])]), " ", _h('p', [_h('code', ["click"])]), " ", _h('p', ["How the popover is triggered."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["effect"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["scale"]), " ", _h('code', ["fade"])]), " ", _h('p', [_h('code', ["fade"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["title"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["content"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["true"])]), " ", _h('p', ["Whether to show the header."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["top"]), " ", _h('code', ["left"]), " ", _h('code', ["right"]), " ", _h('code', ["bottom"])]), " ", _h('p'), " ", _h('p', ["How to position the popover."])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f2fdac94", module.exports)
	  }
	}

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(259)
	
	/* template */
	var __vue_template__ = __webpack_require__(263)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\progressbar-docs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-358fa89c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-358fa89c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] progressbar-docs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 259 */
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
	
	var _Progressbar = __webpack_require__(260);
	
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
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(261)
	
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Progressbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-68aa3375", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-68aa3375", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Progressbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(143);
	
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
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    class: ['progress-bar', 'progress-bar-' + type, {
	      active: animated,
	      'progress-bar-striped': striped
	    }],
	    style: ({
	      width: nowNum + '%'
	    }),
	    domProps: {
	      "textContent": _s(labelBool ? nowNum + '%' : null)
	    }
	  })
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-68aa3375", module.exports)
	  }
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "progressbar",
	      "name": "Progressbar"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_m(0), " ", _h('div', {
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
	  })])])]), " ", _m(1), " ", _h('h4', ["Dynamic ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": dynamicClick
	    }
	  }, ["Randomize"])]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": dynamicData[0],
	      "type": "info"
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": dynamicData[1],
	      "type": "warning"
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": dynamicData[2],
	      "type": "danger"
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": dynamicData[3],
	      "type": "success",
	      "striped": ""
	    }
	  })]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": dynamicData[4],
	      "type": "success",
	      "striped": "",
	      "animated": ""
	    }
	  })]), " ", _m(2), " ", _h('h4', ["Stacked ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": stackedClick
	    }
	  }, ["Randomize"])]), " ", _h('div', {
	    staticClass: "progress"
	  }, [_h('progressbar', {
	    attrs: {
	      "now": stackedData[0],
	      "label": "",
	      "type": "warning",
	      "striped": ""
	    }
	  }), " ", _h('progressbar', {
	    attrs: {
	      "now": stackedData[1],
	      "label": "",
	      "type": "success"
	    }
	  }), " ", _h('progressbar', {
	    attrs: {
	      "now": stackedData[2],
	      "label": "",
	      "type": "danger"
	    }
	  }), " ", _h('progressbar', {
	    attrs: {
	      "now": stackedData[3],
	      "label": "",
	      "type": "primary",
	      "striped": "",
	      "animated": ""
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <!-- Single -->\n    <div class=\"progress\">\n      <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n    </div>\n    <!-- Stacked -->\n    <div class=\"progress\">\n      <progressbar now=\"...\" label type=\"warning\" striped></progressbar>\n      <progressbar now=\"...\" label type=\"success\"></progressbar>\n      <progressbar now=\"...\" label type=\"danger\"></progressbar>\n      <progressbar now=\"...\" label type=\"primary\" striped animated></progressbar>\n    </div>\n  "]), " ", _h('doc-table', [_m(3), " ", _m(4), " ", _m(5), " ", _m(6)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', ["Static"])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('div', [_h('p', ["now"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p'), " ", _h('p', ["The current value of progress completed. Required."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Style type. Possible values are 'success', 'warning' etc."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["label"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["Whether to show the label."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["striped"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Whether the progressbar has striped effect or not."])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-358fa89c", module.exports)
	  }
	}

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(265)
	
	/* template */
	var __vue_template__ = __webpack_require__(266)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\radioDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0f85b88c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0f85b88c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radioDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 265 */
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
	
	var _Radio = __webpack_require__(159);
	
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
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "radio",
	      "name": "Radio"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_m(0), " ", _h('radio', {
	    attrs: {
	      "value": "one"
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["One"]), " ", _h('radio', {
	    attrs: {
	      "value": "two",
	      "type": "danger",
	      "disabled": ""
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["Two (disabled)"]), " ", _h('radio', {
	    attrs: {
	      "value": "two",
	      "type": "warning",
	      "readonly": ""
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["Two (readonly)"]), " ", _h('radio', {
	    attrs: {
	      "value": "two",
	      "type": "success"
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["Two"]), " ", _m(1), " ", _m(2), " ", _h('radio', {
	    attrs: {
	      "button": "",
	      "value": "three",
	      "type": "primary"
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["Three"]), " ", _h('radio', {
	    attrs: {
	      "button": "",
	      "value": "four",
	      "type": "info",
	      "disabled": ""
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["Four (disabled)"]), " ", _h('radio', {
	    attrs: {
	      "button": "",
	      "value": "four",
	      "type": "info",
	      "readonly": ""
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["Four (readonly)"]), " ", _h('radio', {
	    attrs: {
	      "button": "",
	      "value": "four",
	      "type": "info"
	    },
	    domProps: {
	      "checked": radioValue
	    },
	    on: {
	      "checked": function($event) {
	        radioValue = arguments[0]
	      }
	    }
	  }, ["Four"]), " ", _h('p', [_h('pre', ["Radio value: " + _s(radioValue)])])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <radio :checked=\"radioValue\" @checked=\"radioValue = arguments[0]\" value=\"one\">One</radio>\n    <radio :checked=\"radioValue\" @checked=\"radioValue = arguments[0]\" value=\"two\" type=\"primary\">Two</radio>\n    <radio button :checked=\"radioValue\" @checked=\"radioValue = arguments[0]\" value=\"three\" type=\"danger\">Three</radio>\n    <radio button :checked=\"radioValue\" @checked=\"radioValue = arguments[0]\" value=\"four\" type=\"info\">Four</radio>\n  "]), " ", _h('doc-table', [_m(3), " ", _m(4), " ", _m(5), " ", _m(6)]), " ", _m(7)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', ["Radio"])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h4', ["Radio Button (Single buttons)"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["checked"]), " ", _h('p', [_h('code', ["Number"]), " or ", _h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Handle the selected value."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["Number"]), " or ", _h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["Value to return if the radio item is selected."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["type"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["default"]), " ", _h('code', ["primary"]), " ", _h('code', ["danger"]), " ", _h('code', ["info"]), " ", _h('code', ["warning"]), " ", _h('code', ["success"])]), " ", _h('p', [_h('code', ["default"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["button"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', ["false"]), " ", _h('p', ["Button style."])])
	}},function (){with(this) {
	  return _h('p', ["See ", _h('a', {
	    attrs: {
	      "href": "#button-group"
	    }
	  }, ["Button Group"]), " for more options."])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0f85b88c", module.exports)
	  }
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(268)
	
	/* script */
	__vue_exports__ = __webpack_require__(270)
	
	/* template */
	var __vue_template__ = __webpack_require__(271)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\selectDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9e6117de", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9e6117de", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] selectDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9e6117de!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./selectDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9e6117de!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./selectDocs.vue");
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

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\n}\r\n", "", {"version":3,"sources":["/./docs/example/selectDocs.vue?6eb8bbb3"],"names":[],"mappings":";AA6NA;EACA,kBAAA;CACA","file":"selectDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"select\" name=\"Select\">\r\n    <p>Based in a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.</p>\r\n    <div class=\"bs-example\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n          <v-select></v-select>\r\n          <!-- <p><pre>Normal select data: {{select.normal}}</pre></p>\r\n          <form action=\"./#select\" method=\"get\">\r\n            <v-select :options=\"select.options\" options-value=\"val\" v-model=\"select.normal\" name=\"animal\" :search=\"select.search\"\r\n              :required=\"select.required\" :clear-button=\"select.clearButton\" :disabled=\"select.disabled\"\r\n            ></v-select>\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n          </form> -->\r\n        </div>\r\n        <!-- <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n          <p><pre>Multiple select data : {{select.multiple.join(',')}}</pre></p>\r\n          <form action=\"./#select\" method=\"get\">\r\n            <v-select :options=\"select.options\" options-value=\"val\" v-model=\"select.multiple\" name=\"animals[]\" :search=\"select.search\"\r\n              multiple :required=\"select.required\" :clear-button=\"select.clearButton\"\r\n              :close-on-select=\"select.closeOnSelect\" :limit=\"select.limit?3:1024\" :disabled=\"select.disabled\"\r\n            ></v-select>\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n          </form>\r\n        </div> -->\r\n      </div>\r\n      <!-- <br/>\r\n      <button-group type=\"primary\" buttons=\"false\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n            <p><checkbox :checked=\"select.disabled\" @checked=\"select.disabled = arguments[0]\">Disabled</checkbox></p>\r\n            <p><checkbox :checked=\"select.search\" @checked=\"select.search = arguments[0]\">Search</checkbox></p>\r\n            <p><checkbox :checked=\"select.clearButton\" @checked=\"select.clearButton = arguments[0]\">Clear Button</checkbox></p>\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n            <p><checkbox :checked=\"select.required\" @checked=\"select.required = arguments[0]\">Required (empty value if noting selected)</checkbox></p>\r\n            <p>\r\n              Multiple:\r\n              <checkbox v-if=\"select.multiple\" :checked=\"select.limit\" @checked=\"select.limit = arguments[0]\">Limit (e.g. 3)</checkbox>\r\n              <checkbox v-if=\"select.multiple\" :checked=\"select.closeOnSelect\" @checked=\"select.closeOnSelect = arguments[0]\">Close on Select</checkbox>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </button-group>\r\n      <doc-code>\r\n        &lt;form action=\"./#select\" method=\"get\">\r\n          &lt;v-select v-model=\"select.value\" :options=\"select.options\" options-value=\"val\"\r\n            multiple name=\"animals[]\" limit=\"3\"\r\n            search justified required disabled\r\n            clear-button close-on-select\r\n          >&lt;/v-select>\r\n          &lt;button type=\"submit\" class=\"btn btn-default\">Submit form&lt;/button>\r\n        &lt;/form>\r\n      </doc-code>\r\n      <doc-code language=\"javascript\">\r\n        options: [\r\n          {val: 0, label: 'Cat'},\r\n          {val: 1, label: 'Cow'},\r\n          {val: 2, label: 'Dog'},\r\n          {val: 3, label: 'Elephant'},\r\n          {val: 4, label: 'Fish'},\r\n          {val: 5, label: 'Lion'},\r\n          {val: 6, label: 'Tiger'},\r\n          {val: 7, label: 'Turtle'}\r\n        ]\r\n      </doc-code>\r\n      <h4>Select with option component:</h4>\r\n      <p><pre>Selected data : {{single}}</pre></p>\r\n      <v-select v-model=\"single\">\r\n        <v-option value=\"apple\">Apple</v-option>\r\n        <v-option value=\"banana\">Banana</v-option>\r\n        <v-option value=\"cherry\">Cherry</v-option>\r\n        <v-option value=\"orange\">Orange</v-option>\r\n        <v-option value=\"grape\">Grape</v-option>\r\n      </v-select>\r\n      <doc-code>\r\n        &lt;v-select>\r\n          &lt;v-option value=\"apple\">Apple&lt;/v-option>\r\n          &lt;v-option value=\"banana\">Banana&lt;/v-option>\r\n          &lt;v-option value=\"cherry\">Cherry&lt;/v-option>\r\n          &lt;v-option value=\"orange\">Orange&lt;/v-option>\r\n          &lt;v-option value=\"grape\">Grape&lt;/v-option>\r\n        &lt;/v-select>\r\n      </doc-code>\r\n      <hr/>\r\n      <h4>Use button-group (component or <a href=\"http://getbootstrap.com/components/#btn-groups-justified\">bootstrap element</a>) if you want to justify.</h4>\r\n      <button-group justified>\r\n        <v-select multiple clear-button>\r\n          <v-option value=\"apple\">Apple</v-option>\r\n          <v-option value=\"banana\">Banana</v-option>\r\n          <v-option value=\"cherry\">Cherry</v-option>\r\n          <v-option value=\"cranberry\">Cranberry</v-option>\r\n          <v-option value=\"grape\">Grape</v-option>\r\n          <v-option value=\"orange\">Orange</v-option>\r\n          <v-option value=\"passionfruit\">Passionfruit</v-option>\r\n          <v-option value=\"pineapple\">Pineapple</v-option>\r\n          <v-option value=\"strawberry\">Strawberry</v-option>\r\n          <v-option value=\"a\">Apple</v-option>\r\n          <v-option value=\"b\">Banana</v-option>\r\n          <v-option value=\"c\">Cherry</v-option>\r\n          <v-option value=\"c\">Cranberry</v-option>\r\n          <v-option value=\"g\">Grape</v-option>\r\n          <v-option value=\"o\">Orange</v-option>\r\n          <v-option value=\"p\">Passionfruit</v-option>\r\n          <v-option value=\"p\">Pineapple</v-option>\r\n          <v-option value=\"s\">Strawberry</v-option>\r\n        </v-select>\r\n      </button-group>\r\n      <doc-code>\r\n        &lt;button-group justified>&lt;select>...&lt;/select>&lt;/button-group>\r\n        // or\r\n        &lt;div class=\"btn-group btn-group-justified\">&lt;select>...&lt;/select>&lt;/div>\r\n      </doc-code>\r\n      <hr/>\r\n      <h4>Ajax data and parent dependency:</h4>\r\n      <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>\r\n      <v-select url=\"docs/data.json\" options-label=\"text\" v-model=\"ajax.value\" clear-button ref=\"ajax\"></v-select>\r\n      <v-select url=\"docs/data.json\" options-label=\"text\" multiple :parent=\"ajax.value\"></v-select>\r\n      <doc-code>\r\n        &lt;v-select url=\"docs/data.json\" options-label=\"text\" v-model=\"ajax.value\" clear-button>&lt;/v-select>\r\n        &lt;v-select url=\"docs/data.json\" options-label=\"text\" multiple :parent=\"ajax.value\">&lt;/v-select>\r\n      </doc-code>\r\n      <p>Ajax response:</p>\r\n      <pre v-html=\"$refs.ajax&&$refs.ajax.options\"></pre> -->\r\n    </div>\r\n    <!-- <doc-table name=\"Other\">\r\n      <div>\r\n        <p>min-search</p>\r\n        <p><code>Number</code></p>\r\n        <p><code>0</code></p>\r\n        <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>\r\n      </div>\r\n      <div>\r\n        <p>lang</p>\r\n        <p><code>String</code></p>\r\n        <p>Browser language</p>\r\n        <p><abbr title=\"ISO 639-1 code\"><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>\r\n      </div>\r\n      <div>\r\n        <p>options-label</p>\r\n        <p><code>String</code></p>\r\n        <p><code>label</code></p>\r\n        <p>Define the value in the data used as label.</p>\r\n      </div>\r\n      <div>\r\n        <p>options-value</p>\r\n        <p><code>String</code></p>\r\n        <p><code>value</code></p>\r\n        <p>Define the value in the data used as value.</p>\r\n      </div>\r\n      <div>\r\n        <p>placeholder</p>\r\n        <p><code>String</code></p>\r\n        <p>Nothing Selected</p>\r\n      </div>\r\n      <div>\r\n        <p>search-text</p>\r\n        <p><code>String</code></p>\r\n      </div>\r\n    </doc-table>\r\n    <doc-table type=\"Events\">\r\n      <div>\r\n        <p>change</p>\r\n        <p>(<code>value</code>)</p>\r\n        <p>Return the selected value(s).</p>\r\n      </div>\r\n      <div>\r\n        <p>selected</p>\r\n        <p>(<code>labels:String</code>)</p>\r\n        <p>Return a string with the label(s) of the selected item(s).</p>\r\n      </div>\r\n    </doc-table> -->\r\n  </doc-section>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './utils/docSection.vue'\r\nimport docTable from './utils/docTable.js'\r\nimport docCode from './utils/docCode.js'\r\nimport buttonGroup from 'src/buttonGroup.vue'\r\nimport checkbox from 'src/Checkbox.vue'\r\nimport vSelect from 'src/components/Select.vue'\r\nimport vOption from 'src/Option.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docTable,\r\n    docCode,\r\n    buttonGroup,\r\n    checkbox,\r\n    vSelect,\r\n    vOption\r\n  },\r\n  data () {\r\n    return {\r\n      select: {\r\n        justified: true,\r\n        multiple: [],\r\n        options: [\r\n          {val: 0, label: 'Cat'},\r\n          {val: 1, label: 'Cow'},\r\n          {val: 2, label: 'Dog'},\r\n          {val: 3, label: 'Elephant'},\r\n          {val: 4, label: 'Fish'},\r\n          {val: 5, label: 'Lion'},\r\n          {val: 6, label: 'Tiger'},\r\n          {val: 7, label: 'Turtle'}\r\n        ],\r\n        search: true\r\n      },\r\n      ajax: {\r\n        value:null\r\n      },\r\n      single: []\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 270 */
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
	
	var _buttonGroup = __webpack_require__(156);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(13);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Select = __webpack_require__(25);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(186);
	
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
	        justified: true,
	        multiple: [],
	        options: [{ val: 0, label: 'Cat' }, { val: 1, label: 'Cow' }, { val: 2, label: 'Dog' }, { val: 3, label: 'Elephant' }, { val: 4, label: 'Fish' }, { val: 5, label: 'Lion' }, { val: 6, label: 'Tiger' }, { val: 7, label: 'Turtle' }],
	        search: true
	      },
	      ajax: {
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

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "select",
	      "name": "Select"
	    }
	  }, [_m(0), " ", _h('div', {
	    staticClass: "bs-example"
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6"
	  }, [_h('v-select'), " "]), " "]), " "]), " "])
	}},staticRenderFns: [function (){with(this) {
	  return _h('p', ["Based in a ", _h('a', {
	    attrs: {
	      "target": "_blank",
	      "href": "https://silviomoreto.github.io/bootstrap-select/"
	    }
	  }, ["bootstrap-select"]), " implementation."])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9e6117de", module.exports)
	  }
	}

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(273)
	
	/* template */
	var __vue_template__ = __webpack_require__(280)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\spinnerDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4184c92a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4184c92a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] spinnerDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 273 */
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
	
	var _Spinner = __webpack_require__(274);
	
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

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(275)
	
	/* template */
	var __vue_template__ = __webpack_require__(279)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Spinner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8b298e70", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8b298e70", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Spinner.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(276);
	
	// let coerce = {
	//     fixed: 'boolean',
	//     global: 'boolean'
	// }
	
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
	
	// import styling
	exports.default = {
	  props: {
	    fixed: { type: Boolean, default: false },
	    global: { type: Boolean, default: false },
	    size: { type: String, default: 'md' },
	    text: { type: String, default: '' }
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
	      this.$root.$emit('shown::spinner');
	    },
	    hide: function hide() {
	      var _this = this;
	
	      var delay = 0;
	      this._spinnerAnimation = setTimeout(function () {
	        _this.active = false;
	        _this._body.style.overflowY = _this._bodyOverflow;
	        _this.$root.$emit('hidden::spinner');
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
	  mounted: function mounted() {
	    var _this2 = this;
	
	    if (this.global) {
	      this._global = this.global;
	      this.$root.$on('spinner::show', function () {
	        return _this2.show;
	      });
	      this.$root.$on('spinner::hide', function () {
	        return _this2.hide;
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this3 = this;
	
	    if (this._global) {
	      this.$root.$off('spinner::show', function () {
	        return _this3.show;
	      });
	      this.$root.$off('spinner::hide', function () {
	        return _this3.hide;
	      });
	    }
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  }
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(277);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(278)(content, {});
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
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n *\r\n * Spinner\r\n * With fallback to IE9\r\n *\r\n */\n@keyframes spin {\n  100% {\n    transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #337ab7;\n    border-radius: 50%;\n    display: inline-block;\n    animation: spin 0.6s linear;\n    animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #337ab7; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.lt-ie10 .spinner-gritcode .spinner-circle, .ie9 .spinner-gritcode .spinner-circle, .oldie .spinner-gritcode .spinner-circle, .no-csstransitions .spinner-gritcode .spinner-circle, .no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);
	
	// exports


/***/ },
/* 278 */
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
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (active),
	      expression: "active"
	    }],
	    class: ['spinner spinner-gritcode', spinnerSize, {
	      'spinner-fixed': fixed
	    }]
	  }, [_h('div', {
	    staticClass: "spinner-wrapper"
	  }, [_m(0), " ", _h('div', {
	    staticClass: "spinner-text"
	  }, [_s(text)])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "spinner-circle"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8b298e70", module.exports)
	  }
	}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "spinner",
	      "name": "Spinner"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('p', [_h('checkbox', {
	    attrs: {
	      "type": "info"
	    },
	    domProps: {
	      "checked": fixed
	    },
	    on: {
	      "checked": function($event) {
	        fixed = arguments[0]
	      }
	    }
	  }, ["fixed"])]), " ", _h('p', [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (size),
	      expression: "size"
	    }],
	    attrs: {
	      "options": ['sm', 'md', 'lg', 'xl']
	    },
	    domProps: {
	      "value": (size)
	    },
	    on: {
	      "input": function($event) {
	        size = $event
	      }
	    }
	  }, ["size"])]), " ", _h('p', [_h('button', {
	    staticClass: "btn btn-info",
	    on: {
	      "click": function($event) {
	        $root.$emit('spinner::show')
	      }
	    }
	  }, ["show spinner"])]), " ", _h('p', [_h('button', {
	    staticClass: "btn btn-info",
	    on: {
	      "click": function($event) {
	        $emit('show::spinner')
	      }
	    }
	  }, ["show spinner"])]), " ", _h('div', [_h('spinner', {
	    attrs: {
	      "id": "spinner-box",
	      "global": "",
	      "size": size,
	      "fixed": fixed,
	      "text": "I will close in 2 secs"
	    }
	  })])]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <spinner ref=\"spinner\" size=\"md\" fixed text=\"I will close in 2 secs\"></spinner>\n  "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n    // using ref\n    this.$refs.spinner.show()\n    this.$refs.spinner.hide()\n    // using emit\n    this.$emit('show::spinner')\n    this.$emit('hide::spinner')\n  "]), " ", _h('doc-table', [_m(0), " ", _m(1)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', [_h('p', ["size"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["sm"]), ", ", _h('code', ["md"]), ", ", _h('code', ["lg"]), ", ", _h('code', ["xl"])]), " ", _h('p', [_h('code', ["md"])]), " ", _h('p', ["The size of the spinner."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["fixed"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Set to true if you want the spinner to occupy the entire window space."])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4184c92a", module.exports)
	  }
	}

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(282)
	
	/* template */
	var __vue_template__ = __webpack_require__(288)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\tabsDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6c035dda", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6c035dda", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabsDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 282 */
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
	
	var _Tabs = __webpack_require__(212);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _TabGroup = __webpack_require__(283);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tab = __webpack_require__(209);
	
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
	  }
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(284)
	
	/* script */
	__vue_exports__ = __webpack_require__(286)
	
	/* template */
	var __vue_template__ = __webpack_require__(287)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\components\\TabGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4c904adf", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4c904adf", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TabGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(285);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4c904adf!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4c904adf!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content .tab-pane { display: none;\n}\n.tab-content .tab-pane.active { display: block;\n}\r\n", "", {"version":3,"sources":["/./src/components/TabGroup.vue?22ae1c08"],"names":[],"mappings":";AAkCA,yBAAA,cAAA;CAAA;AACA,gCAAA,eAAA;CAAA","file":"TabGroup.vue","sourcesContent":["<template><span><slot></slot></span></template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    disabled: {type: Boolean, default: false},\r\n    header: {type: String}\r\n  },\r\n  data () {\r\n    return {\r\n      show: false,\r\n      tabs: []\r\n    }\r\n  },\r\n  computed: {\r\n    active () { return ~this.tabs.indexOf(this._tabs.show) }\r\n  },\r\n  methods: {\r\n    blur () { this.show = false },\r\n    toggle () { this.show = !this.show }\r\n  },\r\n  created () {\r\n    this._isTabGroup = true\r\n    if (this.$parent) {\r\n      if (this.$parent._isTabGroup) throw Error('Can\\'t nest tab-groups.')\r\n      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.')\r\n    }\r\n    this._tabs = this.$parent\r\n    this._tabs.headers.push(this)\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.tab-content .tab-pane { display: none; }\r\n.tab-content .tab-pane.active { display: block; }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 286 */
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
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('span', [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4c904adf", module.exports)
	  }
	}

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "tabs",
	      "name": "Tabs"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (navStyle),
	      expression: "navStyle"
	    }],
	    attrs: {
	      "options": ['tabs', 'pills', 'stacked']
	    },
	    domProps: {
	      "value": (navStyle)
	    },
	    on: {
	      "input": function($event) {
	        navStyle = $event
	      }
	    }
	  }), " ", _h('v-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (justified),
	      expression: "justified"
	    }],
	    attrs: {
	      "options": [true, false]
	    },
	    domProps: {
	      "value": (justified)
	    },
	    on: {
	      "input": function($event) {
	        justified = $event
	      }
	    }
	  }), " ", " ", _h('tabs', {
	    attrs: {
	      "nav-style": navStyle,
	      "justified": justified
	    }
	  }, [_h('tab', {
	    attrs: {
	      "header": "zero"
	    }
	  }, [_m(0)]), " ", _h('tab', {
	    attrs: {
	      "header": "one"
	    }
	  }, [_m(1)]), " ", _h('tab', {
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
	  }, [_m(2)]), " ", _h('tab', {
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
	  }, [_m(3), " ", _m(4), " ", _m(5)]), " ", _h('doc-table', {
	    attrs: {
	      "name": "Tabs",
	      "type": "Events"
	    }
	  }, [_m(6)]), " ", _h('doc-table', {
	    attrs: {
	      "name": "TabGroup & Tab"
	    }
	  }, [_m(7), " ", _m(8)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('p', ["\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        "])
	}},function (){with(this) {
	  return _h('p', ["\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        "])
	}},function (){with(this) {
	  return _h('p', ["\n            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\n         "])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value (v-model)"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["0"])]), " ", _h('p', ["Active tab index (0 based)"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["justified"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Justify (", _h('code', ["tabs"]), " and ", _h('code', ["pills"]), ")."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["nav-style"]), " ", _h('p', [_h('code', ["String"]), ". One of ", _h('code', ["tabs"]), ", ", _h('code', ["pills"]), ", ", _h('code', ["stacked"]), "."]), " ", _h('p', [_h('code', ["'tabs'"])]), " ", _h('p', ["Style for tabs"])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["active / input"]), " ", _h('p', ["(", _h('code', ["Number"]), ")"]), " ", _h('p', ["Return the Active tab index (0 based)."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["disabled"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Option can't be selected."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["header"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["Title"])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6c035dda", module.exports)
	  }
	}

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(290)
	
	/* template */
	var __vue_template__ = __webpack_require__(291)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\tooltipDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-672a5d14", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-672a5d14", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tooltipDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 290 */
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
	
	var _Input = __webpack_require__(204);
	
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
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "tooltip",
	      "name": "Tooltip"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_l((['top', 'left', 'right', 'bottom']), function(place) {
	    return _h('tooltip', {
	      attrs: {
	        "header": "",
	        "content": "Lorem ipsum dolor sit amet",
	        "placement": place
	      }
	    }, [_h('button', {
	      staticClass: "btn btn-default"
	    }, ["Popover on " + _s(place)])])
	  }), " ", _m(0), " ", _m(1), " ", _h('p', [_h('tooltip', {
	    attrs: {
	      "effect": "scale",
	      "content": "Lorem ipsum dolor sit amet",
	      "placement": "top",
	      "trigger": "click"
	    }
	  }, [_m(2)]), " ", _h('tooltip', {
	    attrs: {
	      "effect": "scale",
	      "content": "Lorem ipsum dolor sit amet",
	      "placement": "top",
	      "trigger": "contextmenu"
	    }
	  }, [_m(3)])]), " ", _h('tooltip', {
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
	  }, ["\n    <tooltip effect=\"scale\" placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n      <button class=\"btn btn-default\">tooltip on bottom</button>\n    </tooltip>\n  "]), " ", _h('doc-table', [_m(4), " ", _m(5)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h4', ["Trigger"])
	}},function (){with(this) {
	  return _h('button', {
	    staticClass: "btn btn-default"
	  }, ["Click"])
	}},function (){with(this) {
	  return _h('button', {
	    staticClass: "btn btn-default"
	  }, ["Contextmenu (right click)"])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["trigger"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["click"]), " ", _h('code', ["focus"]), " ", _h('code', ["hover"]), " ", _h('code', ["contextmenu"])]), " ", _h('p', [_h('code', ["click"])]), " ", _h('p', ["How the tooltip is triggered."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["effect"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["scale"]), " ", _h('code', ["fadein"])]), " ", _h('p', [_h('code', ["scale"])]), " ", _h('p'), " ", _h('div', [_h('p', ["content"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p')]), " ", _h('div', [_h('p', ["placement"]), " ", _h('p', [_h('code', ["String"]), ", one of ", _h('code', ["top"]), " ", _h('code', ["left"]), " ", _h('code', ["right"]), " ", _h('code', ["bottom"])]), " ", _h('p'), " ", _h('p', ["How to position the tooltip."])])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-672a5d14", module.exports)
	  }
	}

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(293)
	
	/* template */
	var __vue_template__ = __webpack_require__(299)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\docs\\example\\typeaheadDocs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-60f07458", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-60f07458", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] typeaheadDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 293 */
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
	
	var _Typeahead = __webpack_require__(294);
	
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
	//
	//

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(295)
	
	/* script */
	__vue_exports__ = __webpack_require__(297)
	
	/* template */
	var __vue_template__ = __webpack_require__(298)
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
	__vue_options__.__file = "C:\\laragon\\www\\vue-strap\\src\\Typeahead.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5b5f5e94", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5b5f5e94", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Typeahead.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(296);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b5f5e94!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b5f5e94!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\r\n  cursor: pointer;\n}\r\n", "", {"version":3,"sources":["/./src/Typeahead.vue?4931a951"],"names":[],"mappings":";AAoIA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\r\n  <div style=\"position: relative\" :class=\"{'open':showDropdown}\">\r\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\"\r\n      v-model=\"val\"\r\n      :placeholder=\"placeholder\"\r\n      @blur=\"showDropdown = false\"\r\n      @keydown.down=\"down\"\r\n      @keydown.enter= \"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @keydown.up=\"up\"\r\n    />\r\n    <ul class=\"dropdown-menu\" ref=\"dropdown\">\r\n      <li v-for=\"(item, i) in items\" :class=\"{'active': isActive(i)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive(i)\">\r\n          <component :is=\"tmpl\" :item=\"item\"></component>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {delayer, getJSON} from './utils/utils.js'\r\nvar DELAY = 300\r\n\r\nexport default {\r\n  props: {\r\n    async: {type: String},\r\n    data: {type: Array},\r\n    delay: {type: Number, default: DELAY},\r\n    asyncKey: {type: String, default: null},\r\n    limit: {type: Number, default: 8},\r\n    matchCase: {type: Boolean, default: false},\r\n    matchStart: {type: Boolean, default: false},\r\n    onHit: {\r\n      type: Function,\r\n      default (item) {\r\n        this.reset()\r\n        this.value = item\r\n      }\r\n    },\r\n    placeholder: {type: String},\r\n    template: {type: String},\r\n    value: {type: String, default: ''}\r\n  },\r\n  data () {\r\n    return {\r\n      showDropdown: false,\r\n      noResults: true,\r\n      current: 0,\r\n      items: [],\r\n      val: ''\r\n    }\r\n  },\r\n  computed: {\r\n    templateHtml () { return typeof this.template === 'string' ? '<span>' + this.template + '</span>' : null },\r\n    tmpl () { return this._tmpl}\r\n  },\r\n  watch: {\r\n    val (val, old) {\r\n      this.$emit('input', val)\r\n      if (val !== old) this.update()\r\n    },\r\n    value (val) {\r\n      if (this.val !== val) { this.val = val }\r\n    }\r\n  },\r\n  created () {\r\n    this.val = this.value\r\n    this._tmpl = {\r\n      template: this.templateHtml || '<strong v-html=\"item\"></strong>',\r\n      props: {\r\n        item: {default: null}\r\n      }\r\n    }\r\n    this.update()\r\n  },\r\n  methods: {\r\n    setItems (data) {\r\n      if (this.async) {\r\n        this.items = this.asyncKey ? data[this.asyncKey] : data\r\n        this.items = this.items.slice(0, this.limit)\r\n      } else {\r\n        this.items = (data || []).filter(value => {\r\n          if (typeof value === 'object') { return true }\r\n          value = this.matchCase ? value : value.toLowerCase()\r\n          var query = this.matchCase ? this.val : this.val.toLowerCase()\r\n          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1\r\n        }).slice(0, this.limit)\r\n      }\r\n      this.showDropdown = this.items.length > 0\r\n    },\r\n    update: delayer(function () {\r\n      if (!this.val) {\r\n        this.reset()\r\n        return false\r\n      }\r\n      if (this.async) {\r\n        getJSON(this.async + this.val).then(data => {\r\n          this.setItems(data)\r\n        })\r\n      } else if (this.data) {\r\n        this.setItems(this.data)\r\n      }\r\n    }, 'delay', DELAY),\r\n    reset () {\r\n      this.items = []\r\n      this.val = ''\r\n      this.loading = false\r\n      this.showDropdown = false\r\n    },\r\n    setActive (index) {\r\n      this.current = index\r\n    },\r\n    isActive (index) {\r\n      return this.current === index\r\n    },\r\n    hit (e) {\r\n      e.preventDefault()\r\n      this.onHit(this.items[this.current], this)\r\n    },\r\n    up () {\r\n      if (this.current > 0) this.current--\r\n    },\r\n    down () {\r\n      if (this.current < this.items.length - 1) this.current++\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(44);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _utils = __webpack_require__(143);
	
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
	      if (_val !== old) this.update();
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
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
	    this.update();
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
	
	    update: (0, _utils.delayer)(function () {
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
	    }, 'delay', DELAY),
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
	  }
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    class: {
	      'open': showDropdown
	    },
	    attrs: {
	      "style": "position: relative"
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (val),
	      expression: "val"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "autocomplete": "off",
	      "placeholder": placeholder
	    },
	    domProps: {
	      "value": _s(val)
	    },
	    on: {
	      "blur": function($event) {
	        showDropdown = false
	      },
	      "keydown": [function($event) {
	        if ($event.keyCode !== 40) return;
	        down($event)
	      }, function($event) {
	        if ($event.keyCode !== 13) return;
	        hit($event)
	      }, function($event) {
	        if ($event.keyCode !== 27) return;
	        reset($event)
	      }, function($event) {
	        if ($event.keyCode !== 38) return;
	        up($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) return;
	        val = $event.target.value
	      }
	    }
	  }), " ", _h('ul', {
	    ref: "dropdown",
	    staticClass: "dropdown-menu"
	  }, [_l((items), function(item, i) {
	    return _h('li', {
	      class: {
	        'active': isActive(i)
	      }
	    }, [_h('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          hit($event)
	        },
	        "mousemove": function($event) {
	          setActive(i)
	        }
	      }
	    }, [_h(tmpl, {
	      tag: "component",
	      attrs: {
	        "item": item
	      }
	    })])])
	  })])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5b5f5e94", module.exports)
	  }
	}

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('doc-section', {
	    attrs: {
	      "id": "typeahead",
	      "name": "Typeahead"
	    }
	  }, [_h('div', {
	    staticClass: "bs-example"
	  }, [_m(0), " ", _h('typeahead', {
	    attrs: {
	      "data": USstate,
	      "placeholder": "USA states"
	    }
	  }), " ", _m(1), " ", _h('h4', ["\n    Asynchronous results\n    ", _h('tooltip', {
	    attrs: {
	      "trigger": "click",
	      "content": "The suggestions via a Google Map API, are you behind a FireWall?",
	      "placement": "top"
	    }
	  }, [_m(2)])]), " ", _h('typeahead', {
	    attrs: {
	      "placeholder": "CCCAddress, async via maps.googleapis.com",
	      "async-key": "results",
	      "async": "https://maps.googleapis.com/maps/api/geocode/json?address=",
	      "template": asyncTemplate,
	      "on-hit": googleCallback
	    }
	  }), " ", _m(3), " ", _m(4), " ", _h('typeahead', {
	    attrs: {
	      "placeholder": "Github users, async via api.github.com",
	      "async-key": "items",
	      "async": "https://api.github.com/search/users?q=",
	      "template": githubTemplate,
	      "on-hit": githubCallback
	    }
	  })]), " ", _h('doc-code', {
	    attrs: {
	      "language": "markup"
	    }
	  }, ["\n    <h4>Static arrays</h4>\n    <typeahead\n      :data=\"USstate\"\n      placeholder=\"USA states\">\n    </typeahead>\n\n    <h4>Asynchronous results</h4>\n      <typeahead\n        placeholder=\"Address, async via maps.googleapis.com\"\n        async-key=\"results\"\n        src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n        :template=\"asyncTemplate\"\n        :on-hit=\"googleCallback\">\n    </typeahead>\n\n    <h4>Custom templates for results</h4>\n      <typeahead\n        placeholder=\"Github users, async via api.github.com\"\n        async-key=\"items\"\n        src=\"https://api.github.com/search/users?q=\"\n        :template=\"githubTemplate\"\n        :on-hit=\"githubCallback\">\n    </typeahead>\n  "]), " ", _h('doc-code', {
	    attrs: {
	      "language": "javascript"
	    }
	  }, ["\n    new Vue {\n      components: {\n        typeahead\n      },\n      data() {\n        return {\n          USstate: ['Alabama', 'Alaska', 'Arizona',...],\n          asynchronous: '" + _s('{{') + "item.formatted_address}}',\n          customTemplate: '<img width=\"18px\" height=\"18px\" :src=\"avatar_url\"/><span>" + _s('{{') + "item.login}}</span>'\n        }\n      },\n      methods: {\n        googleCallback(items, targetVM) {\n          const that = targetVM;\n          that.reset()\n          that.value = items.formatted_address\n        },\n        githubCallback(items) {\n          window.open(items.html_url, '_blank')\n        }\n      }\n    }\n  "]), " ", _h('doc-table', [_m(5), " ", _m(6), " ", _m(7), " ", _m(8), " ", _m(9), " ", _m(10), " ", _m(11), " ", _m(12), " ", _m(13)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h4', ["\n      Static arrays\n    "])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('small', {
	    attrs: {
	      "style": "cursor:pointer"
	    }
	  }, ["(not working?)"])
	}},function (){with(this) {
	  return _h('hr')
	}},function (){with(this) {
	  return _h('h4', ["\n    Custom templates for results\n    "])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["value"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["''"])]), " ", _h('p')])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["data"]), " ", _h('p', [_h('code', ["Array"])]), " ", _h('p'), " ", _h('p', ["The local data source for suggestions. Expected to be a primitive array."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["async"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p'), " ", _h('p', ["An HTTP URL for asynchronous suggestions. Expected to return a JSON object."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["async-key"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["null"])]), " ", _h('p', ["The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array)."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["limit"]), " ", _h('p', [_h('code', ["Number"])]), " ", _h('p', [_h('code', ["8"])]), " ", _h('p', ["The max number of suggestions to be displayed."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["match-case"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Case sensitive for suggestions."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["match-start"]), " ", _h('p', [_h('code', ["Boolean"])]), " ", _h('p', [_h('code', ["false"])]), " ", _h('p', ["Match only against start of suggestions. E.g. if true, \"a\" matches \"ab\" but not \"ba\"."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["on-hit"]), " ", _h('p', [_h('code', ["Function"])]), " ", _h('p'), " ", _h('p', ["A callback function when you click or hit return on an item."])])
	}},function (){with(this) {
	  return _h('div', [_h('p', ["template"]), " ", _h('p', [_h('code', ["String"])]), " ", _h('p', [_h('code', ["<span v-html=\"item\"></span>"])]), " ", _h('p', ["Used to render every suggestion. Handler:", _h('code', ["item"]), ". The item can be whatever (e.g. ", _h('code', ["string"]), "/", _h('code', ["array"]), "/", _h('code', ["object"]), ")"])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-60f07458", module.exports)
	  }
	}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [(local) ? _h('link', {
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
	  }, [_m(0), " ", _h('div', {
	    staticClass: "container bs-docs-container"
	  }, [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-md-9"
	  }, [_h('getting-started'), " ", _h('accordion-docs'), " ", _h('affix-docs'), " ", _h('alert-docs'), " ", _h('aside-docs'), " ", _h('button-group-docs'), " ", _h('carousel-docs'), " ", _h('checkbox-docs'), " ", _h('datepicker-docs'), " ", _h('dropdown-docs'), " ", _h('input-docs'), " ", _h('modal-docs'), " ", _h('navbar-docs'), " ", _h('popover-docs'), " ", _h('progressbar-docs'), " ", _h('radio-docs'), " ", _h('select-docs'), " ", _h('spinner-docs'), " ", _h('tabs-docs'), " ", _h('tooltip-docs'), " ", _h('typeahead-docs'), " ", _h('form-group-docs'), " ", _h('form-validator-docs')]), " ", _h('div', {
	    staticClass: "col-md-3"
	  }, [_h('affix-sidebar')])])])]), " ", _m(1)])
	}},staticRenderFns: [function (){with(this) {
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
	}},function (){with(this) {
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
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-58838205", module.exports)
	  }
	}

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(302);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(278)(content, {});
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
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Bootstrap Docs (http://getbootstrap.com)\r\n * Copyright 2011-2014 Twitter, Inc.\r\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\r\n * details, see http://creativecommons.org/licenses/by/3.0/.\r\n */\r\n\r\n\r\n/*\r\n * Bootstrap Documentation\r\n * Special styles for presenting Bootstrap's documentation and code examples.\r\n *\r\n * Table of contents:\r\n *\r\n * Scaffolding\r\n * Main navigation\r\n * Footer\r\n * Social buttons\r\n * Homepage\r\n * Page headers\r\n * Old docs callout\r\n * Ads\r\n * Side navigation\r\n * Docs sections\r\n * Callouts\r\n * Grid styles\r\n * Examples\r\n * Code snippets (highlight)\r\n * Responsive tests\r\n * Glyphicons\r\n * Customizer\r\n * MenuItem\r\n * Miscellaneous\r\n */\r\n\r\n\r\n/*\r\n * Scaffolding\r\n *\r\n * Update the basics of our documents to prep for docs content.\r\n */\r\n\r\nbody {\r\n  position: relative; /* For scrollspy */\r\n}\r\n\r\n/* Keep code small in tables on account of limited space */\r\n.table code {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n}\r\n\r\n/* Outline button for use within the docs */\r\n.btn-outline {\r\n  color: #563d7c;\r\n  background-color: transparent;\r\n  border-color: #563d7c;\r\n}\r\n.btn-outline:hover,\r\n.btn-outline:focus,\r\n.btn-outline:active {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n  border-color: #563d7c;\r\n}\r\n\r\n/* Inverted outline button (white on dark) */\r\n.btn-outline-inverse {\r\n  color: #fff;\r\n  background-color: transparent;\r\n  border-color: #cdbfe3;\r\n}\r\n.btn-outline-inverse:hover,\r\n.btn-outline-inverse:focus,\r\n.btn-outline-inverse:active {\r\n  color: #563d7c;\r\n  text-shadow: none;\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n}\r\n\r\n/* Bootstrap \"B\" icon */\r\n.bs-docs-booticon {\r\n  display: block;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  text-align: center;\r\n  cursor: default;\r\n  background-color: #563d7c;\r\n  border-radius: 15%;\r\n}\r\n.bs-docs-booticon-sm {\r\n  width: 30px;\r\n  height: 30px;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n}\r\n.bs-docs-booticon-lg {\r\n  width: 144px;\r\n  height: 144px;\r\n  font-size: 108px;\r\n  line-height: 140px;\r\n}\r\n.bs-docs-booticon-inverse {\r\n  color: #563d7c;\r\n  background-color: #fff;\r\n}\r\n.bs-docs-booticon-outline {\r\n  background-color: transparent;\r\n  border: 1px solid #cdbfe3;\r\n}\r\n\r\n\r\n/*\r\n * Main navigation\r\n *\r\n * Turn the `.navbar` at the top of the docs purple.\r\n */\r\n\r\n.bs-docs-nav {\r\n  margin-bottom: 0;\r\n  background-color: #fff;\r\n  border-bottom: 0;\r\n}\r\n.bs-home-nav .bs-nav-b {\r\n  display: none;\r\n}\r\n.bs-docs-nav .navbar-brand,\r\n.bs-docs-nav .navbar-nav > li > a {\r\n  font-weight: 500;\r\n  color: #563d7c;\r\n}\r\n.bs-docs-nav .navbar-nav > li > a:hover,\r\n.bs-docs-nav .navbar-nav > .active > a,\r\n.bs-docs-nav .navbar-nav > .active > a:hover {\r\n  color: #463265;\r\n  background-color: #f9f9f9;\r\n}\r\n.bs-docs-nav .navbar-toggle .icon-bar {\r\n  background-color: #563d7c;\r\n}\r\n.bs-docs-nav .navbar-header .navbar-toggle {\r\n  border-color: #fff;\r\n}\r\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\r\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\r\n  background-color: #f9f9f9;\r\n  border-color: #f9f9f9;\r\n}\r\n\r\n\r\n/*\r\n * Footer\r\n *\r\n * Separated section of content at the bottom of all pages, save the homepage.\r\n */\r\n\r\n.bs-docs-footer {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  margin-top: 100px;\r\n  color: #777;\r\n  text-align: center;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.bs-docs-footer-links {\r\n  padding-left: 0;\r\n  margin-top: 20px;\r\n  color: #999;\r\n}\r\n.bs-docs-footer-links li {\r\n  display: inline;\r\n  padding: 0 2px;\r\n}\r\n.bs-docs-footer-links li:first-child {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-footer p {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Social buttons\r\n *\r\n * Twitter and GitHub social action buttons (for homepage and footer).\r\n */\r\n\r\n.bs-docs-social {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n.bs-docs-social-buttons {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n.bs-docs-social-buttons li {\r\n  display: inline-block;\r\n  padding: 5px 8px;\r\n  line-height: 1;\r\n}\r\n.bs-docs-social-buttons .twitter-follow-button {\r\n  width: 225px !important;\r\n}\r\n.bs-docs-social-buttons .twitter-share-button {\r\n  width: 98px !important;\r\n}\r\n/* Style the GitHub buttons via CSS instead of inline attributes */\r\n.github-btn {\r\n  overflow: hidden;\r\n  border: 0;\r\n}\r\n\r\n\r\n/*\r\n * Homepage\r\n *\r\n * Tweaks to the custom homepage and the masthead (main jumbotron).\r\n */\r\n\r\n/* Share masthead with page headers */\r\n.bs-docs-masthead,\r\n.bs-docs-header {\r\n  position: relative;\r\n  padding: 30px 15px;\r\n  color: #cdbfe3;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\r\n  background-color: #6f5499;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\r\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\r\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\r\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n\r\n/* Masthead (headings and download button) */\r\n.bs-docs-masthead .bs-docs-booticon {\r\n  margin: 0 auto 30px;\r\n}\r\n.bs-docs-masthead h1 {\r\n  font-weight: 300;\r\n  line-height: 1;\r\n  color: #fff;\r\n}\r\n.bs-docs-masthead .lead {\r\n  margin: 0 auto 30px;\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n.bs-docs-masthead .version {\r\n  margin-top: -15px;\r\n  margin-bottom: 30px;\r\n  color: #9783b9;\r\n}\r\n.bs-docs-masthead .btn {\r\n  width: 100%;\r\n  padding: 15px 30px;\r\n  font-size: 20px;\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .bs-docs-masthead .btn {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-masthead h1 {\r\n    font-size: 60px;\r\n  }\r\n  .bs-docs-masthead .lead {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .bs-docs-masthead .lead {\r\n    width: 80%;\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Page headers\r\n *\r\n * Jumbotron-esque headers at the top of every page that's not the homepage.\r\n */\r\n\r\n/* Page headers */\r\n.bs-docs-header {\r\n  margin-bottom: 40px;\r\n  font-size: 20px;\r\n}\r\n.bs-docs-header h1 {\r\n  margin-top: 0;\r\n  color: #fff;\r\n}\r\n.bs-docs-header p {\r\n  margin-bottom: 0;\r\n  font-weight: 300;\r\n  line-height: 1.4;\r\n}\r\n.bs-docs-header .container {\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-header {\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    font-size: 24px;\r\n    text-align: left;\r\n  }\r\n  .bs-docs-header h1 {\r\n    font-size: 60px;\r\n    line-height: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .bs-docs-header h1,\r\n  .bs-docs-header p {\r\n    margin-right: 380px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Carbon ads\r\n *\r\n * Single display ad that shows on all pages (except homepage) in page headers.\r\n * The hella `!important` is required for any pre-set property.\r\n */\r\n\r\n.carbonad {\r\n  width: auto !important;\r\n  height: auto !important;\r\n  padding: 20px !important;\r\n  margin: 30px -30px -31px !important;\r\n  overflow: hidden; /* clearfix */\r\n  font-size: 13px !important;\r\n  line-height: 16px !important;\r\n  text-align: left;\r\n  background: transparent !important;\r\n  border: solid #866ab3 !important;\r\n  border-width: 1px 0 !important;\r\n}\r\n.carbonad-img {\r\n  margin: 0 !important;\r\n}\r\n.carbonad-text,\r\n.carbonad-tag {\r\n  display: block !important;\r\n  float: none !important;\r\n  width: auto !important;\r\n  height: auto !important;\r\n  margin-left: 145px !important;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\r\n}\r\n.carbonad-text {\r\n  padding-top: 0 !important;\r\n}\r\n.carbonad-tag {\r\n  color: inherit !important;\r\n  text-align: left !important;\r\n}\r\n.carbonad-text a,\r\n.carbonad-tag a {\r\n  color: #fff !important;\r\n}\r\n.carbonad #azcarbon > img {\r\n  display: none; /* hide what I assume are tracking images */\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .carbonad {\r\n    width: 330px !important;\r\n    margin: 20px auto !important;\r\n    border-width: 1px !important;\r\n    border-radius: 4px;\r\n  }\r\n  .bs-docs-masthead .carbonad {\r\n    margin: 50px auto 0 !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .carbonad {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .carbonad {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 15px; /* 15px instead of 0 since box-sizing */\r\n    width: 330px !important;\r\n    padding: 15px !important;\r\n    margin: 0 !important;\r\n  }\r\n  .bs-docs-masthead .carbonad {\r\n    position: static;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Homepage featurettes\r\n *\r\n * Reasons to use Bootstrap, entries from the Expo, and more.\r\n */\r\n\r\n.bs-docs-featurette {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  color: #555;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.bs-docs-featurette + .bs-docs-footer {\r\n  margin-top: 0;\r\n  border-top: 0;\r\n}\r\n\r\n.bs-docs-featurette-title {\r\n  margin-bottom: 5px;\r\n  font-size: 30px;\r\n  font-weight: normal;\r\n  color: #333;\r\n}\r\n.half-rule {\r\n  width: 100px;\r\n  margin: 40px auto;\r\n}\r\n.bs-docs-featurette h3 {\r\n  margin-bottom: 5px;\r\n  font-weight: normal;\r\n  color: #333;\r\n}\r\n.bs-docs-featurette-img {\r\n  display: block;\r\n  margin-bottom: 20px;\r\n  color: #333;\r\n}\r\n.bs-docs-featurette-img:hover {\r\n  color: #428bca;\r\n  text-decoration: none;\r\n}\r\n.bs-docs-featurette-img img {\r\n  display: block;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .bs-docs-featurette .img-responsive {\r\n    margin-top: 30px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-docs-featurette {\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n  }\r\n  .bs-docs-featurette-title {\r\n    font-size: 40px;\r\n  }\r\n  .bs-docs-featurette .lead {\r\n    max-width: 80%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  .bs-docs-featured-sites .col-sm-3:first-child img {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n  }\r\n  .bs-docs-featured-sites .col-sm-3:last-child img {\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n\r\n  .bs-docs-featurette .img-responsive {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n/* Featured sites */\r\n.bs-docs-featured-sites {\r\n  margin-right: -1px;\r\n  margin-left: -1px;\r\n}\r\n.bs-docs-featured-sites .col-sm-3 {\r\n  padding-right: 1px;\r\n  padding-left: 1px;\r\n}\r\n.bs-docs-featured-sites .img-responsive {\r\n  margin-bottom: 15px;\r\n}\r\n@media (min-width: 480px) {\r\n  .bs-docs-featured-sites .img-responsive {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n/* Example thumbnails */\r\n@media (max-width: 480px) {\r\n  .bs-examples {\r\n    margin-right: -10px;\r\n    margin-left: -10px;\r\n  }\r\n  .bs-examples > [class^=\"col-\"] {\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Side navigation\r\n *\r\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\r\n * sections of docs content.\r\n */\r\n\r\n/* By default it's not affixed in mobile views, so undo that */\r\n.bs-docs-sidebar.affix {\r\n  position: static;\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-docs-sidebar {\r\n    padding-left: 20px;\r\n  }\r\n}\r\n\r\n/* First level of nav */\r\n.bs-docs-sidenav {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* All levels of nav */\r\n.bs-docs-sidebar .nav > li > a {\r\n  display: block;\r\n  padding: 4px 20px;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #999;\r\n}\r\n.bs-docs-sidebar .nav > li > a:hover,\r\n.bs-docs-sidebar .nav > li > a:focus {\r\n  padding-left: 19px;\r\n  color: #1D976C;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  border-left: 1px solid #1D976C;\r\n}\r\n.bs-docs-sidebar .nav > .active > a,\r\n.bs-docs-sidebar .nav > .active:hover > a,\r\n.bs-docs-sidebar .nav > .active:focus > a {\r\n  padding-left: 18px;\r\n  font-weight: bold;\r\n  color: #1D976C;\r\n  background-color: transparent;\r\n  border-left: 2px solid #1D976C;\r\n}\r\n\r\n/* Nav: second level (shown on .active) */\r\n.bs-docs-sidebar .nav .nav {\r\n  display: none; /* Hide by default, but at >768px, show it */\r\n  padding-bottom: 10px;\r\n}\r\n.bs-docs-sidebar .nav .nav > li > a {\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n  padding-left: 30px;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n.bs-docs-sidebar .nav .nav > li > a:hover,\r\n.bs-docs-sidebar .nav .nav > li > a:focus {\r\n  padding-left: 29px;\r\n}\r\n.bs-docs-sidebar .nav .nav > .active > a,\r\n.bs-docs-sidebar .nav .nav > .active:hover > a,\r\n.bs-docs-sidebar .nav .nav > .active:focus > a {\r\n  padding-left: 28px;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Back to top (hidden on mobile) */\r\n.back-to-top,\r\n.bs-docs-theme-toggle {\r\n  display: none;\r\n  padding: 4px 10px;\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #999;\r\n}\r\n.back-to-top:hover,\r\n.bs-docs-theme-toggle:hover {\r\n  color: #563d7c;\r\n  text-decoration: none;\r\n}\r\n.bs-docs-theme-toggle {\r\n  margin-top: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .back-to-top,\r\n  .bs-docs-theme-toggle {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/* Show and affix the side nav when space allows it */\r\n@media (min-width: 992px) {\r\n  .bs-docs-sidebar .nav > .active > ul {\r\n    display: block;\r\n  }\r\n  /* Widen the fixed sidebar */\r\n  .bs-docs-sidebar.affix,\r\n  .bs-docs-sidebar.affix-bottom {\r\n    width: 213px;\r\n  }\r\n  .bs-docs-sidebar.affix {\r\n    position: fixed; /* Undo the static from mobile first approach */\r\n    top: 20px;\r\n  }\r\n  .bs-docs-sidebar.affix-bottom {\r\n    position: absolute; /* Undo the static from mobile first approach */\r\n  }\r\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\r\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  /* Widen the fixed sidebar again */\r\n  .bs-docs-sidebar.affix-bottom,\r\n  .bs-docs-sidebar.affix {\r\n    width: 263px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Docs sections\r\n *\r\n * Content blocks for each component or feature.\r\n */\r\n\r\n/* Space things out */\r\n.bs-docs-section {\r\n  margin-bottom: 60px;\r\n}\r\n.bs-docs-section:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\nh1[id] {\r\n  padding-top: 20px;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n/*\r\n * Callouts\r\n *\r\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\r\n * Requires a base and modifier class.\r\n */\r\n\r\n/* Common styles for all types */\r\n.bs-callout {\r\n  padding: 20px;\r\n  margin: 20px 0;\r\n  border: 1px solid #eee;\r\n  border-left-width: 5px;\r\n  border-radius: 3px;\r\n}\r\n.bs-callout h4 {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-callout p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.bs-callout code {\r\n  border-radius: 3px;\r\n}\r\n\r\n/* Tighten up space between multiple callouts */\r\n.bs-callout + .bs-callout {\r\n  margin-top: -5px;\r\n}\r\n\r\n/* Variations */\r\n.bs-callout-danger {\r\n  border-left-color: #d9534f;\r\n}\r\n.bs-callout-danger h4 {\r\n  color: #d9534f;\r\n}\r\n.bs-callout-warning {\r\n  border-left-color: #f0ad4e;\r\n}\r\n.bs-callout-warning h4 {\r\n  color: #f0ad4e;\r\n}\r\n.bs-callout-info {\r\n  border-left-color: #5bc0de;\r\n}\r\n.bs-callout-info h4 {\r\n  color: #5bc0de;\r\n}\r\n\r\n\r\n/*\r\n * Color swatches\r\n *\r\n * Color swatches and associated values for our grayscale and brand colors.\r\n */\r\n\r\n.color-swatches {\r\n  margin: 0 -5px;\r\n  overflow: hidden; /* clearfix */\r\n}\r\n.color-swatch {\r\n  float: left;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 0 5px;\r\n  border-radius: 3px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .color-swatch {\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n/* Framework colors */\r\n.color-swatches .gray-darker {\r\n  background-color: #222;\r\n}\r\n.color-swatches .gray-dark {\r\n  background-color: #333;\r\n}\r\n.color-swatches .gray {\r\n  background-color: #555;\r\n}\r\n.color-swatches .gray-light {\r\n  background-color: #999;\r\n}\r\n.color-swatches .gray-lighter {\r\n  background-color: #eee;\r\n}\r\n.color-swatches .brand-primary {\r\n  background-color: #428bca;\r\n}\r\n.color-swatches .brand-success {\r\n  background-color: #5cb85c;\r\n}\r\n.color-swatches .brand-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.color-swatches .brand-danger {\r\n  background-color: #d9534f;\r\n}\r\n.color-swatches .brand-info {\r\n  background-color: #5bc0de;\r\n}\r\n\r\n/* Docs colors */\r\n.color-swatches .bs-purple {\r\n  background-color: #563d7c;\r\n}\r\n.color-swatches .bs-purple-light {\r\n  background-color: #c7bfd3;\r\n}\r\n.color-swatches .bs-purple-lighter {\r\n  background-color: #e5e1ea;\r\n}\r\n.color-swatches .bs-gray {\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n\r\n/*\r\n * Team members\r\n *\r\n * Avatars, names, and usernames for core team.\r\n */\r\n\r\n.bs-team .team-member {\r\n  line-height: 32px;\r\n  color: #555;\r\n}\r\n.bs-team .team-member:hover {\r\n  color: #333;\r\n  text-decoration: none;\r\n}\r\n.bs-team .github-btn {\r\n  float: right;\r\n  width: 180px;\r\n  height: 20px;\r\n  margin-top: 6px;\r\n}\r\n.bs-team img {\r\n  float: left;\r\n  width: 32px;\r\n  margin-right: 10px;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n/*\r\n * Grid examples\r\n *\r\n * Highlight the grid columns within the docs so folks can see their padding,\r\n * alignment, sizing, etc.\r\n */\r\n\r\n.show-grid {\r\n  margin-bottom: 15px;\r\n}\r\n.show-grid [class^=\"col-\"] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  background-color: #eee;\r\n  background-color: rgba(86,61,124,.15);\r\n  border: 1px solid #ddd;\r\n  border: 1px solid rgba(86,61,124,.2);\r\n}\r\n\r\n\r\n/*\r\n * Examples\r\n *\r\n * Isolated sections of example content for each component or feature. Usually\r\n * followed by a code snippet.\r\n */\r\n\r\n.bs-example {\r\n  position: relative;\r\n  padding: 45px 15px 15px;\r\n  margin: 0 -15px 15px;\r\n  border-color: #e5e5e5 #eee #eee;\r\n  border-style: solid;\r\n  border-width: 1px 0;\r\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\r\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\r\n}\r\n/* Echo out a label for the example */\r\n.bs-example:after {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: #959595;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  content: \"Example\";\r\n}\r\n\r\n/* Tweak display of the code snippets when following an example */\r\n.bs-example + .highlight {\r\n  margin: -15px -15px 15px;\r\n  border-width: 0 0 1px;\r\n  border-radius: 0;\r\n}\r\n\r\n/* Make the examples and snippets not full-width */\r\n@media (min-width: 768px) {\r\n  .bs-example {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n    border-width: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n  }\r\n  .bs-example + .highlight {\r\n    margin-top: -16px;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border-width: 1px;\r\n    border-bottom-right-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n  }\r\n}\r\n\r\n/* Undo width of container */\r\n.bs-example .container {\r\n  width: auto;\r\n}\r\n\r\n/* Tweak content of examples for optimum awesome */\r\n.bs-example > p:last-child,\r\n.bs-example > ul:last-child,\r\n.bs-example > ol:last-child,\r\n.bs-example > blockquote:last-child,\r\n.bs-example > .form-control:last-child,\r\n.bs-example > .table:last-child,\r\n.bs-example > .navbar:last-child,\r\n.bs-example > .jumbotron:last-child,\r\n.bs-example > .alert:last-child,\r\n.bs-example > .panel:last-child,\r\n.bs-example > .list-group:last-child,\r\n.bs-example > .well:last-child,\r\n.bs-example > .progress:last-child,\r\n.bs-example > .table-responsive:last-child > .table {\r\n  margin-bottom: 0;\r\n}\r\n.bs-example > p > .close {\r\n  float: none;\r\n}\r\n\r\n/* Typography */\r\n.bs-example-type .table .type-info {\r\n  color: #999;\r\n  vertical-align: middle;\r\n}\r\n.bs-example-type .table td {\r\n  padding: 15px 0;\r\n  border-color: #eee;\r\n}\r\n.bs-example-type .table tr:first-child td {\r\n  border-top: 0;\r\n}\r\n.bs-example-type h1,\r\n.bs-example-type h2,\r\n.bs-example-type h3,\r\n.bs-example-type h4,\r\n.bs-example-type h5,\r\n.bs-example-type h6 {\r\n  margin: 0;\r\n}\r\n\r\n/* Contextual background colors */\r\n.bs-example-bg-classes p {\r\n  padding: 15px;\r\n}\r\n\r\n/* Images */\r\n.bs-example > .img-circle,\r\n.bs-example > .img-rounded,\r\n.bs-example > .img-thumbnail {\r\n  margin: 5px;\r\n}\r\n\r\n/* Tables */\r\n.bs-example > .table-responsive > .table {\r\n  background-color: #fff;\r\n}\r\n\r\n/* Buttons */\r\n.bs-example > .btn,\r\n.bs-example > .btn-group {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-example > .btn-toolbar + .btn-toolbar {\r\n  margin-top: 10px;\r\n}\r\n\r\n/* Forms */\r\n.bs-example-control-sizing select,\r\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\r\n  margin-top: 10px;\r\n}\r\n.bs-example-form .input-group {\r\n  margin-bottom: 10px;\r\n}\r\n.bs-example > textarea.form-control {\r\n  resize: vertical;\r\n}\r\n\r\n/* List groups */\r\n.bs-example > .list-group {\r\n  max-width: 400px;\r\n}\r\n\r\n/* Navbars */\r\n.bs-example .navbar:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.bs-navbar-top-example,\r\n.bs-navbar-bottom-example {\r\n  z-index: 1;\r\n  padding: 0;\r\n  overflow: hidden; /* cut the drop shadows off */\r\n}\r\n.bs-navbar-top-example .navbar-header,\r\n.bs-navbar-bottom-example .navbar-header {\r\n  margin-left: 0;\r\n}\r\n.bs-navbar-top-example .navbar-fixed-top,\r\n.bs-navbar-bottom-example .navbar-fixed-bottom {\r\n  position: relative;\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n.bs-navbar-top-example {\r\n  padding-bottom: 45px;\r\n}\r\n.bs-navbar-top-example:after {\r\n  top: auto;\r\n  bottom: 15px;\r\n}\r\n.bs-navbar-top-example .navbar-fixed-top {\r\n  top: -1px;\r\n}\r\n.bs-navbar-bottom-example {\r\n  padding-top: 45px;\r\n}\r\n.bs-navbar-bottom-example .navbar-fixed-bottom {\r\n  bottom: -1px;\r\n}\r\n.bs-navbar-bottom-example .navbar {\r\n  margin-bottom: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-navbar-top-example .navbar-fixed-top,\r\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\r\n    position: absolute;\r\n  }\r\n}\r\n\r\n/* Pagination */\r\n.bs-example .pagination {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Pager */\r\n.bs-example > .pager {\r\n  margin-top: 0;\r\n}\r\n\r\n/* Example modals */\r\n.bs-example-modal {\r\n  background-color: #f5f5f5;\r\n}\r\n.bs-example-modal .modal {\r\n  position: relative;\r\n  top: auto;\r\n  right: auto;\r\n  bottom: auto;\r\n  left: auto;\r\n  z-index: 1;\r\n  display: block;\r\n}\r\n.bs-example-modal .modal-dialog {\r\n  left: auto;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.custom-modal {\r\n  width: 90%;\r\n}\r\n\r\n/* Example dropdowns */\r\n.bs-example > .dropdown > .dropdown-toggle {\r\n  float: left;\r\n}\r\n.bs-example > .dropdown > .dropdown-menu {\r\n  position: static;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  clear: left;\r\n}\r\n\r\n/* Example tabbable tabs */\r\n.bs-example-tabs .nav-tabs {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/* Tooltips */\r\n.bs-example-tooltips {\r\n  text-align: center;\r\n}\r\n.bs-example-tooltips > .btn {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n/* Popovers */\r\n.bs-example-popover {\r\n  padding-bottom: 24px;\r\n  background-color: #f9f9f9;\r\n}\r\n.bs-example-popover .popover {\r\n  position: relative;\r\n  display: block;\r\n  float: left;\r\n  width: 260px;\r\n  margin: 20px;\r\n}\r\n\r\n/* Scrollspy demo on fixed height div */\r\n.scrollspy-example {\r\n  position: relative;\r\n  height: 200px;\r\n  margin-top: 10px;\r\n  overflow: auto;\r\n}\r\n\r\n/* MenuItem */\r\n.bs-example .dropdown-menu.open {\r\n  position: static;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  clear: left;\r\n}\r\n\r\n\r\n/*\r\n * Code snippets\r\n *\r\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\r\n */\r\n\r\n.highlight {\r\n  padding: 9px 14px;\r\n  margin-bottom: 14px;\r\n  background-color: #f7f7f9;\r\n  border: 1px solid #e1e1e8;\r\n  border-radius: 4px;\r\n}\r\n.highlight pre {\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  word-break: normal;\r\n  word-wrap: nowrap;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.highlight pre code {\r\n  font-size: inherit;\r\n  color: #333; /* Effectively the base text color */\r\n}\r\n.highlight pre code:first-child {\r\n  display: inline-block;\r\n  padding-right: 45px;\r\n}\r\n\r\n\r\n/*\r\n * Responsive tests\r\n *\r\n * Generate a set of tests to show the responsive utilities in action.\r\n */\r\n\r\n/* Responsive (scrollable) doc tables */\r\n.table-responsive .highlight pre {\r\n  white-space: normal;\r\n}\r\n\r\n/* Utility classes table  */\r\n.bs-table th small,\r\n.responsive-utilities th small {\r\n  display: block;\r\n  font-weight: normal;\r\n  color: #999;\r\n}\r\n.responsive-utilities tbody th {\r\n  font-weight: normal;\r\n}\r\n.responsive-utilities td {\r\n  text-align: center;\r\n}\r\n.responsive-utilities td.is-visible {\r\n  color: #468847;\r\n  background-color: #dff0d8 !important;\r\n}\r\n.responsive-utilities td.is-hidden {\r\n  color: #ccc;\r\n  background-color: #f9f9f9 !important;\r\n}\r\n\r\n/* Responsive tests */\r\n.responsive-utilities-test {\r\n  margin-top: 5px;\r\n}\r\n.responsive-utilities-test .col-xs-6 {\r\n  margin-bottom: 10px;\r\n}\r\n.responsive-utilities-test span {\r\n  display: block;\r\n  padding: 15px 10px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  line-height: 1.1;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n.visible-on .col-xs-6 .hidden-xs,\r\n.visible-on .col-xs-6 .hidden-sm,\r\n.visible-on .col-xs-6 .hidden-md,\r\n.visible-on .col-xs-6 .hidden-lg,\r\n.hidden-on .col-xs-6 .hidden-xs,\r\n.hidden-on .col-xs-6 .hidden-sm,\r\n.hidden-on .col-xs-6 .hidden-md,\r\n.hidden-on .col-xs-6 .hidden-lg {\r\n  color: #999;\r\n  border: 1px solid #ddd;\r\n}\r\n.visible-on .col-xs-6 .visible-xs-block,\r\n.visible-on .col-xs-6 .visible-sm-block,\r\n.visible-on .col-xs-6 .visible-md-block,\r\n.visible-on .col-xs-6 .visible-lg-block,\r\n.hidden-on .col-xs-6 .visible-xs-block,\r\n.hidden-on .col-xs-6 .visible-sm-block,\r\n.hidden-on .col-xs-6 .visible-md-block,\r\n.hidden-on .col-xs-6 .visible-lg-block {\r\n  color: #468847;\r\n  background-color: #dff0d8;\r\n  border: 1px solid #d6e9c6;\r\n}\r\n\r\n\r\n/*\r\n * Glyphicons\r\n *\r\n * Special styles for displaying the icons and their classes in the docs.\r\n */\r\n\r\n.bs-glyphicons {\r\n  margin: 0 -10px 20px;\r\n  overflow: hidden;\r\n}\r\n.bs-glyphicons-list {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.bs-glyphicons li {\r\n  float: left;\r\n  width: 25%;\r\n  height: 115px;\r\n  padding: 10px;\r\n  font-size: 10px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  background-color: #f9f9f9;\r\n  border: 1px solid #fff;\r\n}\r\n.bs-glyphicons .glyphicon {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n}\r\n.bs-glyphicons .glyphicon-class {\r\n  display: block;\r\n  text-align: center;\r\n  word-wrap: break-word; /* Help out IE10+ with class names */\r\n}\r\n.bs-glyphicons li:hover {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-glyphicons {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  .bs-glyphicons li {\r\n    width: 12.5%;\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Customizer\r\n *\r\n * Since this is so form control heavy, we have quite a few styles to customize\r\n * the display of inputs, headings, and more. Also included are all the download\r\n * buttons and actions.\r\n */\r\n\r\n.bs-customizer .toggle {\r\n  float: right;\r\n  margin-top: 25px;\r\n}\r\n\r\n/* Headings and form contrls */\r\n.bs-customizer label {\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n  color: #555;\r\n}\r\n.bs-customizer h2 {\r\n  padding-top: 30px;\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-customizer h3 {\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer h4 {\r\n  margin-top: 15px;\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer .bs-callout h4 {\r\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\r\n  margin-bottom: 5px;\r\n}\r\n.bs-customizer input[type=\"text\"] {\r\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n  background-color: #fafafa;\r\n}\r\n.bs-customizer .help-block {\r\n  margin-bottom: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* For the variables, use regular weight */\r\n#less-section label {\r\n  font-weight: normal;\r\n}\r\n\r\n.bs-customizer-input {\r\n  float: left;\r\n  width: 33.333333%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n/* Downloads */\r\n.bs-customize-download .btn-outline {\r\n  padding: 20px;\r\n}\r\n\r\n/* Error handling */\r\n.bs-customizer-alert {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n  padding: 15px 0;\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-bottom: 1px solid #b94441;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\r\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\r\n}\r\n.bs-customizer-alert .close {\r\n  margin-top: -4px;\r\n  font-size: 24px;\r\n}\r\n.bs-customizer-alert p {\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer-alert .glyphicon {\r\n  margin-right: 5px;\r\n}\r\n.bs-customizer-alert pre {\r\n  margin: 10px 0 0;\r\n  color: #fff;\r\n  background-color: #a83c3a;\r\n  border-color: #973634;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\r\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\r\n}\r\n\r\n\r\n/*\r\n * Brand guidelines\r\n *\r\n * Extra styles for displaying wordmarks, logos, etc.\r\n */\r\n\r\n/* Logo series wrapper */\r\n.bs-brand-logos {\r\n  display: table;\r\n  width: 100%;\r\n  margin-bottom: 15px;\r\n  overflow: hidden;\r\n  color: #563d7c;\r\n  background-color: #f9f9f9;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* Individual items */\r\n.bs-brand-item {\r\n  padding: 60px 0;\r\n  text-align: center;\r\n}\r\n.bs-brand-item + .bs-brand-item {\r\n  border-top: 1px solid #fff;\r\n}\r\n.bs-brand-logos .inverse {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n}\r\n.bs-brand-item .svg {\r\n  width: 144px;\r\n  height: 144px;\r\n}\r\n\r\n/* Heading content within */\r\n.bs-brand-item h1,\r\n.bs-brand-item h3 {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.bs-brand-item .bs-docs-booticon {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n/* Make the icons stand out on what is/isn't okay */\r\n.bs-brand-item .glyphicon {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 10px auto -10px;\r\n  line-height: 30px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n}\r\n.bs-brand-item .glyphicon-ok {\r\n  background-color: #5cb85c;\r\n}\r\n.bs-brand-item .glyphicon-remove {\r\n  background-color: #d9534f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-brand-item {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .bs-brand-item + .bs-brand-item {\r\n    border-top: 0;\r\n    border-left: 1px solid #fff;\r\n  }\r\n  .bs-brand-item h1 {\r\n    font-size: 60px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Miscellaneous\r\n *\r\n * Odds and ends for optimum docs display.\r\n */\r\n\r\n/* Examples gallery: space out content better */\r\n.bs-examples .thumbnail {\r\n  margin-bottom: 10px;\r\n}\r\n.bs-examples h4 {\r\n  margin-bottom: 5px;\r\n}\r\n.bs-examples p {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Pseudo :focus state for showing how it looks in the docs */\r\n#focusedInput {\r\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\r\n  border-color: rgba(82,168,236,.8);\r\n  outline: 0;\r\n  outline: thin dotted \\9; /* IE6-9 */\r\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\r\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\r\n}\r\n\r\n\r\n/*\r\n * ZeroClipboard styles\r\n */\r\n\r\n.zero-clipboard {\r\n  position: relative;\r\n  display: none;\r\n}\r\n.btn-clipboard {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n  display: block;\r\n  padding: 5px 8px;\r\n  font-size: 12px;\r\n  color: #777;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border: 1px solid #e1e1e8;\r\n  border-radius: 0 4px 0 4px;\r\n}\r\n.btn-clipboard-hover {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n  border-color: #563d7c;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .zero-clipboard {\r\n    display: block;\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(304);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(278)(content, {});
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
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n * React-Bootstrap Documentation\r\n * Special styles for presenting react-bootstrap's documentation and code examples.\r\n * Based on the Bootstrap Documentation styles and overridden as necessary.\r\n */\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\r\n}\r\n\r\n.bs-docs-section h1 {\r\n  font-size: 42px\r\n}\r\n\r\n.bs-docs-nav .navbar-nav > li > a {\r\n  color: #333;\r\n}\r\n.bs-docs-footer {\r\n  padding-top: 20px;\r\n  text-align: left;\r\n}\r\n.bs-docs-nav .navbar-collapse {\r\n  overflow: hidden;\r\n}\r\n.bs-docs-nav {\r\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\r\n}\r\n\r\n.bs-docs-header p {\r\n  font-weight: lighter;\r\n}\r\n\r\n\r\n.bs-docs-header a {\r\n  color: white;\r\n  font-weight: normal;\r\n}\r\n.btn-outline-inverse {\r\n  border-color: white;\r\n  transition: color .15s ease;\r\n}\r\n.bs-docs-header a:hover,\r\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\r\n.bs-docs-nav .navbar-brand {\r\n  color: #1D976C;\r\n}\r\n\r\n.bs-docs-masthead, .bs-docs-header {\r\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\r\n\r\n  filter: none;\r\n  color: #e9e9e9;\r\n}\r\n\r\n.bs-docs-masthead {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.bs-docs-header h1 {\r\n  color: #ffffff;\r\n}\r\n\r\n.bs-docs-header p {\r\n  color: #ffffff;\r\n}\r\n\r\na.back-to-top {\r\n  font-size: 13px;\r\n  margin-top: 0;\r\n}\r\n\r\n.bs-docs-sidebar .nav>li>a {\r\n  color: #767676;\r\n  font-size: 14px;\r\n}\r\n\r\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\r\n  color: #42b983;\r\n  border-left: 1px solid #42b983;\r\n}\r\n\r\n.back-to-top:hover {\r\n  color: #42b983;\r\n}\r\n\r\n\r\n.CodeMirror, .CodeMirror-scroll {\r\n  height: auto;\r\n}\r\n\r\n.bs-example .btn-toolbar + .btn-toolbar {\r\n  margin-top: 10px;\r\n}\r\n\r\n.bs-example .static-modal .modal {\r\n  position: relative;\r\n  top: auto;\r\n  right: auto;\r\n  left: auto;\r\n  bottom: auto;\r\n  z-index: 1;\r\n  display: block;\r\n}\r\n\r\n.bs-docs-booticon {\r\n  background-size: contain;\r\n  border: 0;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-contained {\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-contained > div {\r\n  position: relative;\r\n}\r\n\r\n.bs-example-popover-scroll {\r\n  overflow: scroll;\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-scroll > div {\r\n  position: relative;\r\n  padding: 100px 0;\r\n}\r\n\r\n.playground {\r\n  margin-bottom: 36px;\r\n}\r\n\r\n.bs-example {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.bs-example + .highlight {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  border-top: none;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.code-toggle {\r\n  float: right;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -1px;\r\n  background: #fafafa;\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  border: 1px solid #e1e1e8;\r\n  border-top: none;\r\n  padding: 4px 8px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .code-toggle {\r\n    background: #fff;\r\n  }\r\n}\r\n\r\n.code-toggle.open {\r\n  background: #f8f5ec;\r\n}\r\n\r\n/* Minimal CSS Needed for contained modals */\r\n.modal-container {\r\n  position: relative;\r\n}\r\n.modal-container .modal, .modal-container .modal-backdrop {\r\n  position: absolute;\r\n}\r\n\r\n.prop-table {\r\n  background-color: white;\r\n}\r\n\r\n.bs-example.tooltip-static .tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 5px 10px;\r\n\r\n}\r\n\r\n.bs-example .super-colors {\r\n  background: -moz-linear-gradient( top ,\r\n      rgba(255, 0, 0, 1) 0%,\r\n      rgba(255, 255, 0, 1) 15%,\r\n      rgba(0, 255, 0, 1) 30%,\r\n      rgba(0, 255, 255, 1) 50%,\r\n      rgba(0, 0, 255, 1) 65%,\r\n      rgba(255, 0, 255, 1) 80%,\r\n      rgba(255, 0, 0, 1) 100%);\r\n  background: -webkit-gradient(linear,  left top,  left bottom,\r\n      color-stop(0%, rgba(255, 0, 0, 1)),\r\n      color-stop(15%, rgba(255, 255, 0, 1)),\r\n      color-stop(30%, rgba(0, 255, 0, 1)),\r\n      color-stop(50%, rgba(0, 255, 255, 1)),\r\n      color-stop(65%, rgba(0, 0, 255, 1)),\r\n      color-stop(80%, rgba(255, 0, 255, 1)),\r\n      color-stop(100%, rgba(255, 0, 0, 1)));\r\n}\r\n\r\n/*.bs-example .custom-menu > ul > li {\r\n    padding: 0 20px;\r\n}*/\r\n\r\n.anchor,\r\n.anchor:hover,\r\n.anchor:active,\r\n.anchor:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  position: relative;\r\n}\r\n.anchor-icon {\r\n  font-size: 90%;\r\n  padding-top: 0.1em;\r\n  position: absolute;\r\n  left: -0.8em;\r\n  opacity: 0;\r\n}\r\n\r\nh1:hover .anchor-icon,\r\nh1 a:focus .anchor-icon,\r\nh2:hover .anchor-icon,\r\nh2 a:focus .anchor-icon,\r\nh3:hover .anchor-icon,\r\nh3 a:focus .anchor-icon,\r\nh4:hover .anchor-icon,\r\nh4 a:focus .anchor-icon {\r\n  opacity: 0.5;\r\n}\r\n\r\n.prop-desc pre {\r\n  border-radius: 0;\r\n  border-width: 0;\r\n  border-left-width: 3px;\r\n}\r\n\r\n.prop-desc-heading {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.bs-callout {\r\n    padding: 20px;\r\n    margin: 20px 0;\r\n    border: 1px solid #eee;\r\n    border-left-width: 5px;\r\n    border-radius: 3px;\r\n}\r\n.bs-callout h4 {\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n}\r\n.bs-callout p:last-child {\r\n    margin-bottom: 0;\r\n}\r\n.bs-callout code {\r\n    border-radius: 3px;\r\n}\r\n.bs-callout+.bs-callout {\r\n    margin-top: -5px;\r\n}\r\n.bs-callout-default {\r\n    border-left-color: #777;\r\n}\r\n.bs-callout-default h4 {\r\n    color: #777;\r\n}\r\n.bs-callout-primary {\r\n    border-left-color: #428bca;\r\n}\r\n.bs-callout-primary h4 {\r\n    color: #428bca;\r\n}\r\n.bs-callout-success {\r\n    border-left-color: #42b983;\r\n}\r\n.bs-callout-success h4 {\r\n    color: #42b983;\r\n}\r\n.bs-callout-danger {\r\n    border-left-color: #d9534f;\r\n}\r\n.bs-callout-danger h4 {\r\n    color: #d9534f;\r\n}\r\n.bs-callout-warning {\r\n    border-left-color: #f0ad4e;\r\n}\r\n.bs-callout-warning h4 {\r\n    color: #f0ad4e;\r\n}\r\n.bs-callout-info {\r\n    border-left-color: #5bc0de;\r\n}\r\n.bs-callout-info h4 {\r\n    color: #5bc0de;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 305 */
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
/* 306 */
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
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v2.0.3
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
	  _maxUpdateCount: 100,
	
	  /**
	   * Server rendering?
	   */
	  _isServer: "client" === 'server'
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
	var bailRE = /[^\w\.\$]/;
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
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]';
	
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
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
	    timerFunc = function () {
	      p.then(nextTickHandler);
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
	    var func = ctx
	      ? function () { cb.call(ctx); }
	      : cb;
	    callbacks.push(func);
	    if (!pending) {
	      pending = true;
	      timerFunc();
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
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var hasProxy;
	var proxyHandlers;
	var initProxy;
	
	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        );
	      }
	      return has || !isAllowed
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	
	var uid$2 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++;
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
	
	var uid$1 = 0;
	
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
	  this.id = ++uid$1; // uid for batching
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
	          "development" !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          );
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
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
	 * Remove self from all dependencies' subcriber list.
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
	function traverse (val, seen) {
	  var i, keys;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = Array.isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) { traverse(val[i], seen); }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) { traverse(val[keys[i]], seen); }
	    }
	  }
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
	    !config._isServer &&
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
	      if (newVal === value) {
	        return
	      }
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
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
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
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	  initWatch(vm);
	}
	
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
	
	  Vue.prototype.$set = set;
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
	  var name, cur, old, fn, event, capture;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      capture = name.charAt(0) === '!';
	      event = capture ? name.slice(1) : name;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, capture);
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
	      event = name.charAt(0) === '!' ? name.slice(1) : name;
	      remove$$1(event, oldOn[name].invoker);
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
	          last.text += c.text;
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
	        if (vm.$options.template) {
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
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    var prevVnode = vm._vnode;
	    vm._vnode = vnode;
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
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
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
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
	
	  if (isObject(Ctor)) {
	    Ctor = Vue$3.extend(Ctor);
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
	      Ctor = resolveAsyncComponent(Ctor, function () {
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
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
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
	        res = Vue$3.extend(res);
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
	  // we are only extrating raw values here.
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
	
	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __);
	    b(_, __);
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
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
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
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
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
	      {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          setTimeout(function () { throw e }, 0);
	        }
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
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (typeof tree[i] !== 'string') {
	          tree[i].isStatic = true;
	          tree[i].key = "__static__" + index + "_" + i;
	        }
	      }
	    } else {
	      tree.isStatic = true;
	      tree.key = "__static__" + index;
	    }
	    return tree
	  };
	
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
	    fallback
	  ) {
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
	  };
	
	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
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
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };
	
	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
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
	  var on = bind$1(vm.$on, vm);
	  var off = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off, vm);
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
	        resolveConstructorOptions(vm),
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
	
	  function initInternalComponent (vm, options) {
	    var opts = vm.$options = Object.create(resolveConstructorOptions(vm));
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent;
	    opts.propsData = options.propsData;
	    opts._parentVnode = options._parentVnode;
	    opts._parentListeners = options._parentListeners;
	    opts._renderChildren = options._renderChildren;
	    opts._componentTag = options._componentTag;
	    if (options.render) {
	      opts.render = options.render;
	      opts.staticRenderFns = options.staticRenderFns;
	    }
	  }
	
	  function resolveConstructorOptions (vm) {
	    var Ctor = vm.constructor;
	    var options = Ctor.options;
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options;
	      var cachedSuperOptions = Ctor.superOptions;
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions;
	        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	        if (options.name) {
	          options.components[options.name] = Ctor;
	        }
	      }
	    }
	    return options
	  }
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
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
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
	 * Make sure component options get converted to actual
	 * constructors.
	 */
	function normalizeComponents (options) {
	  if (options.components) {
	    var components = options.components;
	    var def;
	    for (var key in components) {
	      var lower = key.toLowerCase();
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        "development" !== 'production' && warn(
	          'Do not use built-in or reserved HTML elements as component ' +
	          'id: ' + key
	        );
	        continue
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue$3.extend(def);
	      }
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
	  normalizeComponents(child);
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
	function getPropDefaultValue (vm, prop, name) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
	      'Invalid default value for prop "' + name + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
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
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});
	
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
	    Vue.options = mergeOptions(Vue.options, mixin);
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
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name;
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	        name = null;
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
	    // allow further extension
	    Sub.extend = Super.extend;
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
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
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
	          definition = Vue.extend(definition);
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
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
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
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$3);
	
	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	});
	
	Vue$3.version = '2.0.3';
	
	/*  */
	
	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted');
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
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
	  math: 'http://www.w3.org/1998/Math/MathML'
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
	      if (Array.isArray(refs[key])) {
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
	
	var hooks$1 = ['create', 'update', 'remove', 'destroy'];
	
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
	    nodeOps.removeChild(parent, el);
	  }
	
	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i;
	    var data = vnode.data;
	    vnode.isRootInsert = !nested;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        return vnode.elm
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (
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
	      createChildren(vnode, children, insertedVnodeQueue);
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
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
	
	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
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
	    var oldKeyToIdx, idxInOld, elmToMove, before;
	
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
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
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
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
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
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
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
	        vnode.isCloned) {
	      vnode.elm = oldVnode.elm;
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
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
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
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	
	        createElm(vnode, insertedVnodeQueue);
	
	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm;
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
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
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
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
	      elm[key] = undefined;
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0;
	    }
	    cur = props[key];
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
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name;
	  var el = vnode.elm;
	  var oldStyle = oldVnode.data.style || {};
	  var style = vnode.data.style || {};
	
	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	    return
	  }
	
	  var needClone = style.__ob__;
	
	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style);
	  }
	
	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style);
	  }
	
	  for (name in oldStyle) {
	    if (style[name] == null) {
	      el.style[normalize(name)] = '';
	    }
	  }
	  for (name in style) {
	    cur = style[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      el.style[normalize(name)] = cur == null ? '' : cur;
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
	  var transitionNode = activeInstance.$vnode;
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance;
	
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
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
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
	
	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  },
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
	
	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;
	
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
	      // detect such cases and filter out values that no longer has a matchig
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
	// we want to recrusively retrieve the real component to be rendered
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
	    var moveClass = this.moveClass || (this.name + '-move');
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
	Vue$3.prototype.__patch__ = config._isServer ? noop : patch$1;
	
	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined;
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
	
	var decoder = document.createElement('div');
	
	function decode (html) {
	  decoder.innerHTML = html;
	  return decoder.textContent
	}
	
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
	var singleAttrIdentifier = /([^\s"'<>\/=]+)/;
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
	
	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});
	
	// Special Elements (can contain anything)
	var isSpecialTag = makeMap('script,style', true);
	
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
	    if (!lastTag || !isSpecialTag(lastTag)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (/^<!--/.test(html)) {
	          var commentEnd = html.indexOf('-->');
	
	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (/^<!\[/.test(html)) {
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
	
	      var text = void 0;
	      if (textEnd >= 0) {
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      } else {
	        text = html;
	        html = '';
	      }
	
	      if (options.chars) {
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
	            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
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
	
	    if (html === last) {
	      throw new Error('Error parsing template:\n\n' + html)
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
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;
	
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle; }
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble; }
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
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
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
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	
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
	    return dynamicValue
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
	
	/*  */
	
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var specialNewlineRE = /\u2028|\u2029/g;
	
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
	      if (options.isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }
	
	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs, options.isIE),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }
	
	      if ("client" !== 'server' && isForbiddenTag(element)) {
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
	        {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
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
	      } else if ("development" !== 'production' && !stack.length && !warned) {
	        // allow 2 root elements with v-if and v-else
	        if (root.if && element.else) {
	          checkRootConstraints(element);
	          root.elseBlock = element;
	        } else {
	          warned = true;
	          warn$1(
	            ("Component template should contain exactly one root element:\n\n" + template)
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.else) {
	          processElse(element, currentParent);
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
	          // #3895 special character
	          text = text.replace(specialNewlineRE, '');
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
	  }
	  if (getAndRemoveAttr(el, 'v-else') != null) {
	    el.else = true;
	  }
	}
	
	function processElse (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    prev.elseBlock = el;
	  } else {
	    warn$1(
	      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
	    );
	  }
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
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget;
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
	        if (modifiers && modifiers.prop) {
	          isProp = true;
	          name = camelize(name);
	          if (name === 'innerHtml') { name = 'innerHTML'; }
	        }
	        if (isProp || platformMustUseProp(name)) {
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
	            'Interpolation inside attributes has been deprecated. ' +
	            'Use v-bind or the colon shorthand instead.'
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
	
	function makeAttrsMap (attrs, isIE) {
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
	 * Goal of the optimizier: walk the generated template AST tree
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
	  isPlatformReservedTag = options.isReservedTag || (function () { return false; });
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
	    if (node.once || node.static) {
	      node.staticRoot = true;
	      node.staticInFor = isInFor;
	      return
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
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
	
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*\s*$/;
	
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
	  self: 'if($event.target !== $event.currentTarget)return;'
	};
	
	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}
	
	function genHandler (
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(genHandler).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return simplePathRE.test(handler.value)
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
	  var code = keys.length === 1
	    ? normalizeKeyCode(keys[0])
	    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
	  if (Array.isArray(code)) {
	    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
	  } else {
	    return ("if($event.keyCode!==" + code + ")return;")
	  }
	}
	
	function normalizeKeyCode (key) {
	  return (
	    parseInt(key, 10) || // number keyCode
	    keyCodes[key] || // built-in alias
	    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
	  )
	}
	
	/*  */
	
	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + "," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
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
	var currentOptions;
	
	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_h("div")';
	  staticRenderFns = prevStaticRenderFns;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}
	
	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    // hoist static sub-trees out
	    el.staticProcessed = true;
	    staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	    return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
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
	      code = genComponent(el);
	    } else {
	      var data = genData(el);
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
	
	function genIf (el) {
	  var exp = el.if;
	  el.ifProcessed = true; // avoid recursion
	  return ("(" + exp + ")?" + (genElement(el)) + ":" + (genElse(el)))
	}
	
	function genElse (el) {
	  return el.elseBlock
	    ? genElement(el.elseBlock)
	    : '_e()'
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
	  if (el.plain) {
	    return
	  }
	
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
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
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
	  // inline-template
	  if (el.inlineTemplate) {
	    var ast = el.children[0];
	    if ("development" !== 'production' && (
	      el.children.length > 1 || ast.type !== 1
	    )) {
	      warn$2('Inline-template components must have exactly one child element.');
	    }
	    if (ast.type === 1) {
	      var inlineRenderFns = generate(ast, currentOptions);
	      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}";
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
	    : JSON.stringify(text.text)
	}
	
	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return children
	    ? ("_t(" + slotName + "," + children + ")")
	    : ("_t(" + slotName + ")")
	}
	
	function genComponent (el) {
	  var children = el.inlineTemplate ? null : genChildren(el);
	  return ("_h(" + (el.component) + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}
	
	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (prop.value) + ",";
	  }
	  return res.slice(0, -1)
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
	        'Interpolation inside attributes has been deprecated. ' +
	        'Use v-bind or the colon shorthand instead.'
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
	
	function transformNode$1 (el) {
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData$2 (el) {
	  return el.styleBinding
	    ? ("style:(" + (el.styleBinding) + "),")
	    : ''
	}
	
	var style$1 = {
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
	    genSelect(el, value);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}
	
	function genCheckboxModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
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
	      "var $$v=" + valueBinding + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}
	
	function genRadioModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', (value + "=" + valueBinding), null, true);
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
	    : "$event";
	  var code = number || type === 'number'
	    ? (value + "=_n(" + valueExpression + ")")
	    : (value + "=" + valueExpression);
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
	
	function genSelect (el, value) {
	  {
	    el.children.some(checkOptionWarning);
	  }
	  var code = value + "=Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){return \"_value\" in o ? o._value : o.value})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');
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
	  isIE: isIE,
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


/***/ },
/* 308 */
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
	    }
	
	  };
	
	  /**
	   * Some browsers handle short language code (eg. 'en'), others handle 5 chars (eg. 'en-US').
	   * With aliases you can handle a group of similar languages, using a regular expresion.
	   * If the language is not found, the default language is english.
	   */
	  var aliases = {
	    es: /^es-[A-Z]{2}$/i,
	    en: /^en-[A-Z]{2}$/i
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
/* 309 */
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
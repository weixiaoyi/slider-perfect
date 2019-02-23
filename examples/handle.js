webpackJsonp([0],{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slider_perfect_assets_index_less__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slider_perfect_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slider_perfect_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tooltip_assets_bootstrap_css__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tooltip_assets_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_tooltip_assets_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_tooltip__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slider_perfect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slider_perfect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_slider_perfect__);


/* eslint-disable react/prop-types */








var createSliderWithTooltip = __WEBPACK_IMPORTED_MODULE_7_slider_perfect___default.a.createSliderWithTooltip;
var Range = createSliderWithTooltip(__WEBPACK_IMPORTED_MODULE_7_slider_perfect___default.a.Range);
var Handle = __WEBPACK_IMPORTED_MODULE_7_slider_perfect___default.a.Handle;

var handle = function handle(props) {
  var value = props.value,
      dragging = props.dragging,
      index = props.index,
      restProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(props, ['value', 'dragging', 'index']);

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_rc_tooltip__["a" /* default */],
    {
      prefixCls: 'rc-slider-tooltip',
      overlay: value,
      visible: dragging,
      placement: 'top',
      key: index
    },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Handle, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ value: value }, restProps))
  );
};

var wrapperStyle = { width: 400, margin: 50 };
__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'div',
    { style: wrapperStyle },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'p',
      null,
      'Slider with custom handle'
    ),
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_slider_perfect___default.a, { min: 0, max: 20, defaultValue: 3, handle: handle })
  ),
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'div',
    { style: wrapperStyle },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'p',
      null,
      'Slider with fixed values'
    ),
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_slider_perfect___default.a, { min: 20, defaultValue: 20, marks: { 20: 20, 40: 40, 100: 100 }, step: null })
  ),
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'div',
    { style: wrapperStyle },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'p',
      null,
      'Range with custom handle'
    ),
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Range, { min: 0, max: 20, defaultValue: [3, 10], tipFormatter: function tipFormatter(value) {
        return value + '%';
      } })
  )
), document.getElementById('__react-content'));

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[84]);
//# sourceMappingURL=handle.js.map
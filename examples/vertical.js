webpackJsonp([3],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(162);


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"rc-slider/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
throw new Error("Cannot find module \"rc-slider\"");






var style = { float: 'left', width: 160, height: 400, marginBottom: 160, marginLeft: 50 };
var parentStyle = { overflow: 'hidden' };

var marks = {
  '-10': '-10°C',
  0: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'strong',
    null,
    '0\xB0C'
  ),
  26: '26°C',
  37: '37°C',
  50: '50°C',
  100: {
    style: {
      color: 'red'
    },
    label: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'strong',
      null,
      '100\xB0C'
    )
  }
};

function log(value) {
  console.log(value); //eslint-disable-line
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  { style: parentStyle },
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Slider with marks, `step=null`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a, { vertical: true, min: -10, marks: marks, step: null, onChange: log, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Slider with marks and steps'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a, { vertical: true, dots: true, min: -10, marks: marks, step: 10, onChange: log, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Slider with marks, `included=false`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a, { vertical: true, min: -10, marks: marks, included: false, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Slider with marks and steps, `included=false`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a, { vertical: true, min: -10, marks: marks, step: 10, included: false, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Range with marks'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a.Range, { vertical: true, min: -10, marks: marks, onChange: log, defaultValue: [20, 40] })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Range with marks and steps'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a.Range, { vertical: true, min: -10, marks: marks, step: 10,
      onChange: log, defaultValue: [20, 40]
    })
  )
), document.getElementById('__react-content'));

/***/ })

},[161]);
//# sourceMappingURL=vertical.js.map
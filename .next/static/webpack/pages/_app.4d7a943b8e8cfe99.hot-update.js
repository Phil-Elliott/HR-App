"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav/LeftNav/LeftNav.tsx":
/*!********************************************!*\
  !*** ./components/Nav/LeftNav/LeftNav.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Nav/LeftNav/components/index.ts\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/layout/left-nav/leftNav.module.scss */ \"./styles/layout/left-nav/leftNav.module.scss\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst LeftNav = (param)=>{\n    let { navWidth  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n        style: {\n            width: navWidth\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().top),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                    navWidth: navWidth\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                    navWidth: navWidth\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav); /*\n\n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9MZWZ0TmF2L0xlZnROYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDaUI7QUFDZ0I7QUFFekUsTUFBTUksVUFBVSxTQUF3QztRQUF2QyxFQUFFQyxTQUFRLEVBQXdCO0lBQ2pELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSix5RkFBVztRQUFFTSxPQUFPO1lBQUVDLE9BQU9MO1FBQVM7a0JBQ3BELDRFQUFDQztZQUFJQyxXQUFXSix3RkFBVTs7OEJBQ3hCLDhEQUFDRiwrQ0FBTUE7b0JBQUNJLFVBQVVBOzs7Ozs7OEJBQ2xCLDhEQUFDSCw4Q0FBS0E7b0JBQUNHLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtLQVZNRDtBQVlOLCtEQUFlQSxPQUFPQSxFQUFDLENBRXZCOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTGVmdE5hdi9MZWZ0TmF2LnRzeD8yYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGVyLCBMaW5rcywgRXhwYW5kQnR0biB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9sYXlvdXQvbGVmdC1uYXYvbGVmdE5hdi5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMZWZ0TmF2ID0gKHsgbmF2V2lkdGggfTogeyBuYXZXaWR0aDogc3RyaW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHN0eWxlPXt7IHdpZHRoOiBuYXZXaWR0aCB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cbiAgICAgICAgPEhlYWRlciBuYXZXaWR0aD17bmF2V2lkdGh9IC8+XG4gICAgICAgIDxMaW5rcyBuYXZXaWR0aD17bmF2V2lkdGh9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8RXhwYW5kQnR0biB0b2dnbGVOYXY9e3RvZ2dsZU5hdn0gLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0TmF2O1xuXG4vKlxuXG5cblxuKi9cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkxpbmtzIiwic3R5bGVzIiwiTGVmdE5hdiIsIm5hdldpZHRoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInN0eWxlIiwid2lkdGgiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/LeftNav/LeftNav.tsx\n"));

/***/ })

});
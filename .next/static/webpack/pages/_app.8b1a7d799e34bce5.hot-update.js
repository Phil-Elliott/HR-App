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

/***/ "./components/Layout/components/NormalLayout.tsx":
/*!*******************************************************!*\
  !*** ./components/Layout/components/NormalLayout.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Nav */ \"./components/Nav/index.ts\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/layout/layout.module.scss */ \"./styles/layout/layout.module.scss\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst NormalLayout = (param)=>{\n    let { children , display , navWidth , toggleDisplay , toggleNav  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"normal-layout\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__.LeftNav, {\n                navWidth: navWidth,\n                toggleDisplay: toggleDisplay\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"right-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TopNav, {\n                        toggleNav: toggleNav,\n                        navWidth: navWidth,\n                        toggleDisplay: toggleDisplay\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            \")\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NormalLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NormalLayout);\nvar _c;\n$RefreshReg$(_c, \"NormalLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL05vcm1hbExheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNVO0FBRTJCO0FBRS9ELE1BQU1HLGVBQWUsU0FNRjtRQU5HLEVBQ3BCQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsU0FBUSxFQUNSQyxjQUFhLEVBQ2JDLFVBQVMsRUFDRztJQUNaLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUiwyRkFBdUI7OzBCQUNyQyw4REFBQ0QseUNBQU9BO2dCQUFDSyxVQUFVQTtnQkFBVUMsZUFBZUE7Ozs7OzswQkFDNUMsOERBQUNFO2dCQUFJQyxXQUFXUiw2RkFBeUI7O2tDQUN2Qyw4REFBQ1M7d0JBQ0NILFdBQVdBO3dCQUNYRixVQUFVQTt3QkFDVkMsZUFBZUE7Ozs7OztrQ0FFakIsOERBQUNLO2tDQUFNUjs7Ozs7Ozs7Ozs7O1lBQ0g7Ozs7Ozs7QUFJWjtLQXJCTUQ7QUF1Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9Ob3JtYWxMYXlvdXQudHN4P2E1ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGVmdE5hdiB9IGZyb20gXCIuLi8uLi9OYXZcIjtcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBOb3JtYWxMYXlvdXQgPSAoe1xuICBjaGlsZHJlbixcbiAgZGlzcGxheSxcbiAgbmF2V2lkdGgsXG4gIHRvZ2dsZURpc3BsYXksXG4gIHRvZ2dsZU5hdixcbn06IExheW91dFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5vcm1hbC1sYXlvdXRcIl19PlxuICAgICAgPExlZnROYXYgbmF2V2lkdGg9e25hdldpZHRofSB0b2dnbGVEaXNwbGF5PXt0b2dnbGVEaXNwbGF5fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInJpZ2h0LWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxUb3BOYXZcbiAgICAgICAgICB0b2dnbGVOYXY9e3RvZ2dsZU5hdn1cbiAgICAgICAgICBuYXZXaWR0aD17bmF2V2lkdGh9XG4gICAgICAgICAgdG9nZ2xlRGlzcGxheT17dG9nZ2xlRGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9ybWFsTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGVmdE5hdiIsInN0eWxlcyIsIk5vcm1hbExheW91dCIsImNoaWxkcmVuIiwiZGlzcGxheSIsIm5hdldpZHRoIiwidG9nZ2xlRGlzcGxheSIsInRvZ2dsZU5hdiIsImRpdiIsImNsYXNzTmFtZSIsIlRvcE5hdiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/components/NormalLayout.tsx\n"));

/***/ }),

/***/ "./components/Nav/index.ts":
/*!*********************************!*\
  !*** ./components/Nav/index.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LeftNav\": function() { return /* reexport safe */ _LeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"TopNav\": function() { return /* reexport safe */ _TopNav_TopNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _LeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeftNav/LeftNav */ \"./components/Nav/LeftNav/LeftNav.tsx\");\n/* harmony import */ var _TopNav_TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav/TopNav */ \"./components/Nav/TopNav/TopNav.tsx\");\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ0g7QUFFViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9pbmRleC50cz9jOTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZWZ0TmF2IGZyb20gXCIuL0xlZnROYXYvTGVmdE5hdlwiO1xuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi9Ub3BOYXYvVG9wTmF2XCI7XG5cbmV4cG9ydCB7IExlZnROYXYsIFRvcE5hdiB9O1xuIl0sIm5hbWVzIjpbIkxlZnROYXYiLCJUb3BOYXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/index.ts\n"));

/***/ })

});
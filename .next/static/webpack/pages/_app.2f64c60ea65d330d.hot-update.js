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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Nav */ \"./components/Nav/index.ts\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/layout/layout.module.scss */ \"./styles/layout/layout.module.scss\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst NormalLayout = (param)=>{\n    let { children , display , navWidth , toggleDisplay , toggleNav  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"normal-layout\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__.LeftNav, {\n                navWidth: navWidth,\n                toggleDisplay: toggleDisplay\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"right-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__.TopNav, {\n                        toggleNav: toggleNav,\n                        navWidth: navWidth,\n                        toggleDisplay: toggleDisplay\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            \")\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Layout/components/NormalLayout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NormalLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NormalLayout);\nvar _c;\n$RefreshReg$(_c, \"NormalLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL05vcm1hbExheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUVtQjtBQUUvRCxNQUFNSSxlQUFlLFNBTUY7UUFORyxFQUNwQkMsU0FBUSxFQUNSQyxRQUFPLEVBQ1BDLFNBQVEsRUFDUkMsY0FBYSxFQUNiQyxVQUFTLEVBQ0c7SUFDWixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1IsMkZBQXVCOzswQkFDckMsOERBQUNGLHlDQUFPQTtnQkFBQ00sVUFBVUE7Z0JBQVVDLGVBQWVBOzs7Ozs7MEJBQzVDLDhEQUFDRTtnQkFBSUMsV0FBV1IsNkZBQXlCOztrQ0FDdkMsOERBQUNELHdDQUFNQTt3QkFDTE8sV0FBV0E7d0JBQ1hGLFVBQVVBO3dCQUNWQyxlQUFlQTs7Ozs7O2tDQUVqQiw4REFBQ0k7a0NBQU1QOzs7Ozs7Ozs7Ozs7WUFDSDs7Ozs7OztBQUlaO0tBckJNRDtBQXVCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL05vcm1hbExheW91dC50c3g/YTVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMZWZ0TmF2LCBUb3BOYXYgfSBmcm9tIFwiLi4vLi4vTmF2XCI7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTm9ybWFsTGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGRpc3BsYXksXG4gIG5hdldpZHRoLFxuICB0b2dnbGVEaXNwbGF5LFxuICB0b2dnbGVOYXYsXG59OiBMYXlvdXRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJub3JtYWwtbGF5b3V0XCJdfT5cbiAgICAgIDxMZWZ0TmF2IG5hdldpZHRoPXtuYXZXaWR0aH0gdG9nZ2xlRGlzcGxheT17dG9nZ2xlRGlzcGxheX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJyaWdodC1jb250YWluZXJcIl19PlxuICAgICAgICA8VG9wTmF2XG4gICAgICAgICAgdG9nZ2xlTmF2PXt0b2dnbGVOYXZ9XG4gICAgICAgICAgbmF2V2lkdGg9e25hdldpZHRofVxuICAgICAgICAgIHRvZ2dsZURpc3BsYXk9e3RvZ2dsZURpc3BsYXl9XG4gICAgICAgIC8+XG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vcm1hbExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxlZnROYXYiLCJUb3BOYXYiLCJzdHlsZXMiLCJOb3JtYWxMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJuYXZXaWR0aCIsInRvZ2dsZURpc3BsYXkiLCJ0b2dnbGVOYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/components/NormalLayout.tsx\n"));

/***/ })

});
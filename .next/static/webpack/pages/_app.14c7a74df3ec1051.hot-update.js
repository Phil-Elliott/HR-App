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

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta */ \"./components/meta.tsx\");\n/* harmony import */ var _Nav_LeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav/LeftNav/LeftNav */ \"./components/Nav/LeftNav/LeftNav.tsx\");\n/* harmony import */ var _Nav_TopNav_TopNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav/TopNav/TopNav */ \"./components/Nav/TopNav/TopNav.tsx\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/layout/layout.module.scss */ \"./styles/layout/layout.module.scss\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children  } = param;\n    _s();\n    const [navWidth, setNavWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"responsive\");\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"none\");\n    const toggleNav = ()=>{\n        if (navWidth === \"wide\") {\n            setNavWidth(\"narrow\");\n        } else {\n            setNavWidth(\"wide\");\n        }\n    };\n    const toggleDisplay = ()=>{\n        if (display === \"none\") {\n            setDisplay(\"responsive\");\n        } else {\n            setDisplay(\"none\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_meta__WEBPACK_IMPORTED_MODULE_2__.Meta, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/layout.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            display !== \"none\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_LeftNav_LeftNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                navWidth: navWidth,\n                toggleDisplay: toggleDisplay\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/layout.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"right-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_TopNav_TopNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        toggleNav: toggleNav,\n                        navWidth: navWidth,\n                        toggleDisplay: toggleDisplay\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/layout.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/HR-App/components/layout.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/layout.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"Mpq9ZCaLEvdEHybRKo5hvKEHs/w=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout); /*\n  sidenav \n  https://mui.com/material-ui/react-drawer/\n  persistent drawer or mini variant drawer?\n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNWO0FBQ2M7QUFDSDtBQUNnQjtBQUV6RCxNQUFNTSxTQUFTLFNBQXFDO1FBQXBDLEVBQUVDLFNBQVEsRUFBcUI7O0lBQzdDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVcsWUFBWSxJQUFNO1FBQ3RCLElBQUlKLGFBQWEsUUFBUTtZQUN2QkMsWUFBWTtRQUNkLE9BQU87WUFDTEEsWUFBWTtRQUNkLENBQUM7SUFDSDtJQUVBLE1BQU1JLGdCQUFnQixJQUFNO1FBQzFCLElBQUlILFlBQVksUUFBUTtZQUN0QkMsV0FBVztRQUNiLE9BQU87WUFDTEEsV0FBVztRQUNiLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXViwrRUFBVzs7MEJBQ3pCLDhEQUFDSCx1Q0FBSUE7Ozs7O1lBQ0pRLFlBQVksd0JBQ1gsOERBQUNQLDREQUFPQTtnQkFBQ0ssVUFBVUE7Z0JBQVVLLGVBQWVBOzs7Ozs7MEJBRTlDLDhEQUFDQztnQkFDQ0MsV0FBV1YsNkZBQXlCOztrQ0FNcEMsOERBQUNELDBEQUFNQTt3QkFDTFEsV0FBV0E7d0JBQ1hKLFVBQVVBO3dCQUNWSyxlQUFlQTs7Ozs7O2tDQUVqQiw4REFBQ0c7a0NBQU1UOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQTFDTUQ7S0FBQUE7QUE0Q04sK0RBQWVBLE1BQU1BLEVBQUMsQ0FFdEI7Ozs7OztBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuL21ldGFcIjtcbmltcG9ydCBMZWZ0TmF2IGZyb20gXCIuL05hdi9MZWZ0TmF2L0xlZnROYXZcIjtcbmltcG9ydCBUb3BOYXYgZnJvbSBcIi4vTmF2L1RvcE5hdi9Ub3BOYXZcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IGFueSB9KSA9PiB7XG4gIGNvbnN0IFtuYXZXaWR0aCwgc2V0TmF2V2lkdGhdID0gdXNlU3RhdGUoXCJyZXNwb25zaXZlXCIpO1xuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShcIm5vbmVcIik7XG5cbiAgY29uc3QgdG9nZ2xlTmF2ID0gKCkgPT4ge1xuICAgIGlmIChuYXZXaWR0aCA9PT0gXCJ3aWRlXCIpIHtcbiAgICAgIHNldE5hdldpZHRoKFwibmFycm93XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXROYXZXaWR0aChcIndpZGVcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgaWYgKGRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICBzZXREaXNwbGF5KFwicmVzcG9uc2l2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGlzcGxheShcIm5vbmVcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxNZXRhIC8+XG4gICAgICB7ZGlzcGxheSAhPT0gXCJub25lXCIgJiYgKFxuICAgICAgICA8TGVmdE5hdiBuYXZXaWR0aD17bmF2V2lkdGh9IHRvZ2dsZURpc3BsYXk9e3RvZ2dsZURpc3BsYXl9IC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInJpZ2h0LWNvbnRhaW5lclwiXX1cbiAgICAgICAgLy8gc3R5bGU9e3tcbiAgICAgICAgLy8gICB3aWR0aDpcbiAgICAgICAgLy8gICAgIG5hdldpZHRoID09PSBcInJlc3BvbnNpdmVcIiAmJiBkaXNwbGF5ICE9PSBcIm5vbmVcIiA/IFwiMHZ3XCIgOiBcIjEwMHZ3XCIsXG4gICAgICAgIC8vIH19XG4gICAgICA+XG4gICAgICAgIDxUb3BOYXZcbiAgICAgICAgICB0b2dnbGVOYXY9e3RvZ2dsZU5hdn1cbiAgICAgICAgICBuYXZXaWR0aD17bmF2V2lkdGh9XG4gICAgICAgICAgdG9nZ2xlRGlzcGxheT17dG9nZ2xlRGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG4vKlxuICBzaWRlbmF2IFxuICBodHRwczovL211aS5jb20vbWF0ZXJpYWwtdWkvcmVhY3QtZHJhd2VyL1xuICBwZXJzaXN0ZW50IGRyYXdlciBvciBtaW5pIHZhcmlhbnQgZHJhd2VyP1xuXG5cbiovXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1ldGEiLCJMZWZ0TmF2IiwiVG9wTmF2Iiwic3R5bGVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJuYXZXaWR0aCIsInNldE5hdldpZHRoIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ0b2dnbGVOYXYiLCJ0b2dnbGVEaXNwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n"));

/***/ })

});
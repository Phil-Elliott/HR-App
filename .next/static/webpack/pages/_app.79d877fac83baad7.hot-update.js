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

/***/ "./components/Nav/TopNav/components/Left.tsx":
/*!***************************************************!*\
  !*** ./components/Nav/TopNav/components/Left.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/layout/top-nav/left.module.scss */ \"./styles/layout/top-nav/left.module.scss\");\n/* harmony import */ var _styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Left = (param)=>{\n    let { toggleNav , navWidth  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // returns the page name in the correct form to be displayed\n    const getPageName = ()=>{\n        const path = router.pathname;\n        const pageName = path.split(\"/\")[1];\n        return pageName[0].toUpperCase() + pageName.slice(1).toLowerCase();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default().leftContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),\n                onClick: ()=>toggleNav(),\n                children: navWidth === \"wide\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaAngleLeft, {\n                    className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"arrow-left\"])\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaAngleLeft, {\n                    className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"arrow-right\"])\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"page-name\"]),\n                children: getPageName()\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Left, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Left;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Left);\nvar _c;\n$RefreshReg$(_c, \"Left\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9Ub3BOYXYvY29tcG9uZW50cy9MZWZ0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2M7QUFDZ0M7QUFDM0I7QUFFN0MsTUFBTUksT0FBTyxTQU1QO1FBTlEsRUFDWkMsVUFBUyxFQUNUQyxTQUFRLEVBSVQ7O0lBQ0MsTUFBTUMsU0FBU04sc0RBQVNBO0lBRXhCLDREQUE0RDtJQUM1RCxNQUFNTyxjQUFjLElBQU07UUFDeEIsTUFBTUMsT0FBT0YsT0FBT0csUUFBUTtRQUM1QixNQUFNQyxXQUFXRixLQUFLRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbkMsT0FBT0QsUUFBUSxDQUFDLEVBQUUsQ0FBQ0UsV0FBVyxLQUFLRixTQUFTRyxLQUFLLENBQUMsR0FBR0MsV0FBVztJQUNsRTtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXZiw4RkFBb0I7OzBCQUNsQyw4REFBQ2M7Z0JBQUlDLFdBQVdmLHFGQUFXO2dCQUFFa0IsU0FBUyxJQUFNZjswQkFDekNDLGFBQWEsdUJBQ1osOERBQUNILHVEQUFXQTtvQkFBQ2MsV0FBV2YsOEZBQW9COzs7Ozs4Q0FFNUMsOERBQUNDLHVEQUFXQTtvQkFBQ2MsV0FBV2YsK0ZBQXFCOzs7Ozs2QkFDOUM7Ozs7OzswQkFFSCw4REFBQ21CO2dCQUFHSixXQUFXZiw2RkFBbUI7MEJBQUdNOzs7Ozs7Ozs7Ozs7QUFHM0M7R0E1Qk1KOztRQU9XSCxrREFBU0E7OztLQVBwQkc7QUE4Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvVG9wTmF2L2NvbXBvbmVudHMvTGVmdC50c3g/Y2Q5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3N0eWxlcy9sYXlvdXQvdG9wLW5hdi9sZWZ0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBGYUFuZ2xlTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5jb25zdCBMZWZ0ID0gKHtcbiAgdG9nZ2xlTmF2LFxuICBuYXZXaWR0aCxcbn06IHtcbiAgdG9nZ2xlTmF2OiBhbnk7XG4gIG5hdldpZHRoOiBzdHJpbmc7XG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIHJldHVybnMgdGhlIHBhZ2UgbmFtZSBpbiB0aGUgY29ycmVjdCBmb3JtIHRvIGJlIGRpc3BsYXllZFxuICBjb25zdCBnZXRQYWdlTmFtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXRoID0gcm91dGVyLnBhdGhuYW1lO1xuICAgIGNvbnN0IHBhZ2VOYW1lID0gcGF0aC5zcGxpdChcIi9cIilbMV07XG4gICAgcmV0dXJuIHBhZ2VOYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBwYWdlTmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0gb25DbGljaz17KCkgPT4gdG9nZ2xlTmF2KCl9PlxuICAgICAgICB7bmF2V2lkdGggPT09IFwid2lkZVwiID8gKFxuICAgICAgICAgIDxGYUFuZ2xlTGVmdCBjbGFzc05hbWU9e3N0eWxlc1tcImFycm93LWxlZnRcIl19IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZhQW5nbGVMZWZ0IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJyb3ctcmlnaHRcIl19IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1tcInBhZ2UtbmFtZVwiXX0+e2dldFBhZ2VOYW1lKCl9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlZnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJGYUFuZ2xlTGVmdCIsIkxlZnQiLCJ0b2dnbGVOYXYiLCJuYXZXaWR0aCIsInJvdXRlciIsImdldFBhZ2VOYW1lIiwicGF0aCIsInBhdGhuYW1lIiwicGFnZU5hbWUiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImRpdiIsImNsYXNzTmFtZSIsImxlZnRDb250YWluZXIiLCJsZWZ0Iiwib25DbGljayIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/TopNav/components/Left.tsx\n"));

/***/ })

});
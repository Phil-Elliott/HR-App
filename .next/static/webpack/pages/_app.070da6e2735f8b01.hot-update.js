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

/***/ "./components/Nav/LeftNav/components/Links.tsx":
/*!*****************************************************!*\
  !*** ./components/Nav/LeftNav/components/Links.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_layout_left_nav_links_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/layout/left-nav/links.module.scss */ \"./styles/layout/left-nav/links.module.scss\");\n/* harmony import */ var _styles_layout_left_nav_links_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_left_nav_links_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Links = (param)=>{\n    let { navWidth , path , name , icon  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: path,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                // className={styles.link}\n                className: router.pathname == \"/\" ? \"active\" : \"\",\n                style: {\n                    justifyContent: navWidth !== \"15rem\" ? \"center\" : \"inherit\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_layout_left_nav_links_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),\n                        children: icon\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/components/Links.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    navWidth === \"15rem\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_layout_left_nav_links_module_scss__WEBPACK_IMPORTED_MODULE_3___default().name),\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/components/Links.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 36\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/components/Links.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        }, name, false, {\n            fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/components/Links.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Links;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Links);\nvar _c;\n$RefreshReg$(_c, \"Links\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9MZWZ0TmF2L2NvbXBvbmVudHMvTGlua3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0c7QUFFNkM7QUFTMUUsTUFBTUcsUUFBUSxTQUErQztRQUE5QyxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQWE7SUFDdEQscUJBQ0U7a0JBQ0UsNEVBQUNOLGtEQUFJQTtZQUFDTyxNQUFNSDtzQkFDViw0RUFBQ0k7Z0JBQ0MsMEJBQTBCO2dCQUMxQkMsV0FBV0MsT0FBT0MsUUFBUSxJQUFJLE1BQU0sV0FBVyxFQUFFO2dCQUNqREMsT0FBTztvQkFDTEMsZ0JBQWdCVixhQUFhLFVBQVUsV0FBVyxTQUFTO2dCQUM3RDs7a0NBRUEsOERBQUNLO3dCQUFJQyxXQUFXUix1RkFBVztrQ0FBR0s7Ozs7OztvQkFDN0JILGFBQWEseUJBQVcsOERBQUNLO3dCQUFJQyxXQUFXUix1RkFBVztrQ0FBR0k7Ozs7Ozs7Ozs7OztXQVRwQ0E7Ozs7OztBQWM3QjtLQWpCTUg7QUFtQk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTGVmdE5hdi9jb21wb25lbnRzL0xpbmtzLnRzeD84MzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL2xheW91dC9sZWZ0LW5hdi9saW5rcy5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgTGlua1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uOiBKU1guRWxlbWVudDtcbiAgcGF0aDogc3RyaW5nO1xuICBuYXZXaWR0aDogc3RyaW5nO1xufVxuXG5jb25zdCBMaW5rcyA9ICh7IG5hdldpZHRoLCBwYXRoLCBuYW1lLCBpY29uIH06IExpbmtQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPXtwYXRofSBrZXk9e25hbWV9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgLy8gY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogbmF2V2lkdGggIT09IFwiMTVyZW1cIiA/IFwiY2VudGVyXCIgOiBcImluaGVyaXRcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT57aWNvbn08L2Rpdj5cbiAgICAgICAgICB7bmF2V2lkdGggPT09IFwiMTVyZW1cIiAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJzdHlsZXMiLCJMaW5rcyIsIm5hdldpZHRoIiwicGF0aCIsIm5hbWUiLCJpY29uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInJvdXRlciIsInBhdGhuYW1lIiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav/LeftNav/components/Links.tsx\n"));

/***/ })

});
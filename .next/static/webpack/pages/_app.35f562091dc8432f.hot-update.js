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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Links */ \"./components/Nav/LeftNav/Links.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/layout/left-nav/leftNav.module.scss */ \"./styles/layout/left-nav/leftNav.module.scss\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LeftNav = ()=>{\n    _s();\n    const [navWidth, setNavWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"15rem\");\n    const toggleNav = ()=>{\n        if (navWidth === \"15rem\") {\n            setNavWidth(\"5rem\");\n        } else {\n            setNavWidth(\"15rem\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n        style: {\n            width: navWidth\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().top),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n                        style: {\n                            justifyContent: navWidth !== \"15rem\" ? \"center\" : \"inherit\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaWpforms, {}, void 0, false, {\n                                    fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            navWidth === \"15rem\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"HRMS\"\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().links),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Links__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            navWidth: navWidth\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"expand-bttn\"]),\n                onClick: ()=>toggleNav(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaAngleDoubleRight, {}, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LeftNav, \"qScH5SBYR4qpyEITVMSjWDJDEao=\");\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav); /*\n\n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9MZWZ0TmF2L0xlZnROYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNaO0FBQ21DO0FBQ1U7QUFFekUsTUFBTU0sVUFBVSxJQUFNOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsWUFBWSxJQUFNO1FBQ3RCLElBQUlGLGFBQWEsU0FBUztZQUN4QkMsWUFBWTtRQUNkLE9BQU87WUFDTEEsWUFBWTtRQUNkLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXTix5RkFBVztRQUFFUSxPQUFPO1lBQUVDLE9BQU9QO1FBQVM7OzBCQUNwRCw4REFBQ0c7Z0JBQUlDLFdBQVdOLHdGQUFVOztrQ0FDeEIsOERBQUNLO3dCQUNDQyxXQUFXTiwyRkFBYTt3QkFDeEJRLE9BQU87NEJBQ0xJLGdCQUFnQlYsYUFBYSxVQUFVLFdBQVcsU0FBUzt3QkFDN0Q7OzBDQUVBLDhEQUFDRztnQ0FBSUMsV0FBV04seUZBQVc7MENBQ3pCLDRFQUFDRCxxREFBU0E7Ozs7Ozs7Ozs7NEJBRVhHLGFBQWEseUJBQ1osOERBQUNHO2dDQUFJQyxXQUFXTiwwRkFBWTswQ0FDMUIsNEVBQUNlOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJViw4REFBQ1Y7d0JBQUlDLFdBQVdOLDBGQUFZO2tDQUMxQiw0RUFBQ0gsOENBQUtBOzRCQUFDSyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3JCLDhEQUFDRztnQkFBSUMsV0FBV04sbUdBQXFCO2dCQUFFaUIsU0FBUyxJQUFNYjswQkFDcEQsNEVBQUNOLDhEQUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0F0Q01HO0tBQUFBO0FBd0NOLCtEQUFlQSxPQUFPQSxFQUFDLENBRXZCOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTGVmdE5hdi9MZWZ0TmF2LnRzeD8yYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmtzIGZyb20gXCIuL0xpbmtzXCI7XG5pbXBvcnQgeyBGYUFuZ2xlRG91YmxlUmlnaHQsIEZhV3Bmb3JtcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2xheW91dC9sZWZ0LW5hdi9sZWZ0TmF2Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IExlZnROYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXZXaWR0aCwgc2V0TmF2V2lkdGhdID0gdXNlU3RhdGUoXCIxNXJlbVwiKTtcblxuICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XG4gICAgaWYgKG5hdldpZHRoID09PSBcIjE1cmVtXCIpIHtcbiAgICAgIHNldE5hdldpZHRoKFwiNXJlbVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2V2lkdGgoXCIxNXJlbVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHN0eWxlPXt7IHdpZHRoOiBuYXZXaWR0aCB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IG5hdldpZHRoICE9PSBcIjE1cmVtXCIgPyBcImNlbnRlclwiIDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8RmFXcGZvcm1zIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge25hdldpZHRoID09PSBcIjE1cmVtXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgIDxoMT5IUk1TPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cbiAgICAgICAgICA8TGlua3MgbmF2V2lkdGg9e25hdldpZHRofSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImV4cGFuZC1idHRuXCJdfSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVOYXYoKX0+XG4gICAgICAgIDxGYUFuZ2xlRG91YmxlUmlnaHQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVmdE5hdjtcblxuLypcblxuXG5cbiovXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmtzIiwiRmFBbmdsZURvdWJsZVJpZ2h0IiwiRmFXcGZvcm1zIiwic3R5bGVzIiwiTGVmdE5hdiIsIm5hdldpZHRoIiwic2V0TmF2V2lkdGgiLCJ0b2dnbGVOYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic3R5bGUiLCJ3aWR0aCIsInRvcCIsImhlYWRlciIsImp1c3RpZnlDb250ZW50IiwibG9nbyIsInRpdGxlIiwiaDEiLCJsaW5rcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/LeftNav/LeftNav.tsx\n"));

/***/ })

});
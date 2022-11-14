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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Nav/LeftNav/components/index.ts\");\n/* harmony import */ var _Shared_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Logo */ \"./components/Shared/Logo.tsx\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/layout/left-nav/leftNav.module.scss */ \"./styles/layout/left-nav/leftNav.module.scss\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\n\nconst LeftNav = (param)=>{\n    let { navWidth  } = param;\n    const NavLinks = [\n        {\n            name: \"Dashboard\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaHome, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            path: \"/\"\n        },\n        {\n            name: \"Company\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBuilding, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            path: \"/company\"\n        },\n        {\n            name: \"Employees\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUser, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            path: \"/employees\"\n        },\n        {\n            name: \"Attendance\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTimes, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            path: \"/attendance\"\n        },\n        {\n            name: \"Leave\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaWalking, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            path: \"/leave\"\n        },\n        {\n            name: \"Claims\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaPen, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            path: \"/claims\"\n        },\n        {\n            name: \"Payroll\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMoneyCheck, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            path: \"/payroll\"\n        },\n        {\n            name: \"Appraisal\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaCheck, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            path: \"/appraisal\"\n        },\n        {\n            name: \"Reporting\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaToiletPaper, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            path: \"/reporting\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main),\n        style: {\n            width: navWidth === \"responsive\" ? \"100vw\" : navWidth === \"wide\" ? \"18rem\" : \"7rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().top),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Shared_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                navWidth: navWidth,\n                                display: \"normal\"\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaCross, {}, void 0, false, {\n                                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    NavLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                            navWidth: navWidth,\n                            icon: link.icon,\n                            path: link.path,\n                            name: link.name\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bottom),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                    navWidth: navWidth,\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTools, {}, void 0, false, void 0, void 0),\n                    path: \"/settings\",\n                    name: \"Settings\"\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav); // https://www.npmjs.com/package/react-icons  (react icons links)\nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9MZWZ0TmF2L0xlZnROYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNXO0FBQ0E7QUFDb0M7QUFhakQ7QUFFeEIsTUFBTWUsVUFBVSxTQUF3QztRQUF2QyxFQUFFQyxTQUFRLEVBQXdCO0lBQ2pELE1BQU1DLFdBQVc7UUFDZjtZQUNFQyxNQUFNO1lBQ05DLG9CQUFNLDhEQUFDZixrREFBTUE7Ozs7O1lBQ2JnQixNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDZCxzREFBVUE7Ozs7O1lBQ2pCZSxNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDYixrREFBTUE7Ozs7O1lBQ2JjLE1BQU07UUFDUjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsb0JBQU0sOERBQUNaLG1EQUFPQTs7Ozs7WUFDZGEsTUFBTTtRQUNSO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ1gscURBQVNBOzs7OztZQUNoQlksTUFBTTtRQUNSO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ1YsaURBQUtBOzs7OztZQUNaVyxNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDVCx3REFBWUE7Ozs7O1lBQ25CVSxNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDUixtREFBT0E7Ozs7O1lBQ2RTLE1BQU07UUFDUjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsb0JBQU0sOERBQUNQLHlEQUFhQTs7Ozs7WUFDcEJRLE1BQU07UUFDUjtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVduQix5RkFBVztRQUN0QnFCLE9BQU87WUFDTEMsT0FDRVQsYUFBYSxlQUNULFVBQ0FBLGFBQWEsU0FDYixVQUNBLE1BQU07UUFDZDs7MEJBRUEsOERBQUNLO2dCQUFJQyxXQUFXbkIsd0ZBQVU7O2tDQUN4Qiw4REFBQ2tCOzswQ0FDQyw4REFBQ25CLG9EQUFJQTtnQ0FBQ2MsVUFBVUE7Z0NBQVVXLFNBQVE7Ozs7OzswQ0FDbEMsOERBQUNiLG1EQUFPQTs7Ozs7Ozs7Ozs7b0JBRVRHLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQzVCLDhDQUFLQTs0QkFDSmUsVUFBVUE7NEJBQ1ZHLE1BQU1VLEtBQUtWLElBQUk7NEJBQ2ZDLE1BQU1TLEtBQUtULElBQUk7NEJBQ2ZGLE1BQU1XLEtBQUtYLElBQUk7Ozs7Ozs7Ozs7OzswQkFJckIsOERBQUNHO2dCQUFJQyxXQUFXbkIsMkZBQWE7MEJBQzNCLDRFQUFDRiw4Q0FBS0E7b0JBQ0plLFVBQVVBO29CQUNWRyxvQkFBTSw4REFBQ04sbURBQU9BO29CQUNkTyxNQUFNO29CQUNORixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtLQXJGTUg7QUF1Rk4sK0RBQWVBLE9BQU9BLEVBQUMsQ0FFdkIsaUVBQWlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2L0xlZnROYXYvTGVmdE5hdi50c3g/MmMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rcyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9TaGFyZWQvTG9nb1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2xheW91dC9sZWZ0LW5hdi9sZWZ0TmF2Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQge1xuICBGYUhvbWUsXG4gIEZhQnVpbGRpbmcsXG4gIEZhVXNlcixcbiAgRmFUaW1lcyxcbiAgRmFXYWxraW5nLFxuICBGYVBlbixcbiAgRmFNb25leUNoZWNrLFxuICBGYUNoZWNrLFxuICBGYVRvaWxldFBhcGVyLFxuICBGYVRvb2xzLFxuICBGYUNyb3NzLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuY29uc3QgTGVmdE5hdiA9ICh7IG5hdldpZHRoIH06IHsgbmF2V2lkdGg6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IE5hdkxpbmtzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXG4gICAgICBpY29uOiA8RmFIb21lIC8+LFxuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkNvbXBhbnlcIixcbiAgICAgIGljb246IDxGYUJ1aWxkaW5nIC8+LFxuICAgICAgcGF0aDogXCIvY29tcGFueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJFbXBsb3llZXNcIixcbiAgICAgIGljb246IDxGYVVzZXIgLz4sXG4gICAgICBwYXRoOiBcIi9lbXBsb3llZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXR0ZW5kYW5jZVwiLFxuICAgICAgaWNvbjogPEZhVGltZXMgLz4sXG4gICAgICBwYXRoOiBcIi9hdHRlbmRhbmNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxlYXZlXCIsXG4gICAgICBpY29uOiA8RmFXYWxraW5nIC8+LFxuICAgICAgcGF0aDogXCIvbGVhdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ2xhaW1zXCIsXG4gICAgICBpY29uOiA8RmFQZW4gLz4sXG4gICAgICBwYXRoOiBcIi9jbGFpbXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUGF5cm9sbFwiLFxuICAgICAgaWNvbjogPEZhTW9uZXlDaGVjayAvPixcbiAgICAgIHBhdGg6IFwiL3BheXJvbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwcmFpc2FsXCIsXG4gICAgICBpY29uOiA8RmFDaGVjayAvPixcbiAgICAgIHBhdGg6IFwiL2FwcHJhaXNhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJSZXBvcnRpbmdcIixcbiAgICAgIGljb246IDxGYVRvaWxldFBhcGVyIC8+LFxuICAgICAgcGF0aDogXCIvcmVwb3J0aW5nXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1haW59XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDpcbiAgICAgICAgICBuYXZXaWR0aCA9PT0gXCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgID8gXCIxMDB2d1wiXG4gICAgICAgICAgICA6IG5hdldpZHRoID09PSBcIndpZGVcIlxuICAgICAgICAgICAgPyBcIjE4cmVtXCJcbiAgICAgICAgICAgIDogXCI3cmVtXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TG9nbyBuYXZXaWR0aD17bmF2V2lkdGh9IGRpc3BsYXk9XCJub3JtYWxcIiAvPlxuICAgICAgICAgIDxGYUNyb3NzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7TmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgPExpbmtzXG4gICAgICAgICAgICBuYXZXaWR0aD17bmF2V2lkdGh9XG4gICAgICAgICAgICBpY29uPXtsaW5rLmljb259XG4gICAgICAgICAgICBwYXRoPXtsaW5rLnBhdGh9XG4gICAgICAgICAgICBuYW1lPXtsaW5rLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cbiAgICAgICAgPExpbmtzXG4gICAgICAgICAgbmF2V2lkdGg9e25hdldpZHRofVxuICAgICAgICAgIGljb249ezxGYVRvb2xzIC8+fVxuICAgICAgICAgIHBhdGg9e1wiL3NldHRpbmdzXCJ9XG4gICAgICAgICAgbmFtZT17XCJTZXR0aW5nc1wifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0TmF2O1xuXG4vLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC1pY29ucyAgKHJlYWN0IGljb25zIGxpbmtzKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGlua3MiLCJMb2dvIiwic3R5bGVzIiwiRmFIb21lIiwiRmFCdWlsZGluZyIsIkZhVXNlciIsIkZhVGltZXMiLCJGYVdhbGtpbmciLCJGYVBlbiIsIkZhTW9uZXlDaGVjayIsIkZhQ2hlY2siLCJGYVRvaWxldFBhcGVyIiwiRmFUb29scyIsIkZhQ3Jvc3MiLCJMZWZ0TmF2IiwibmF2V2lkdGgiLCJOYXZMaW5rcyIsIm5hbWUiLCJpY29uIiwicGF0aCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzdHlsZSIsIndpZHRoIiwidG9wIiwiZGlzcGxheSIsIm1hcCIsImxpbmsiLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/LeftNav/LeftNav.tsx\n"));

/***/ })

});
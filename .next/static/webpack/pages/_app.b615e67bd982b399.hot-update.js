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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Nav/LeftNav/components/index.ts\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/layout/left-nav/leftNav.module.scss */ \"./styles/layout/left-nav/leftNav.module.scss\");\n/* harmony import */ var _styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\nconst LeftNav = (param)=>{\n    let { navWidth  } = param;\n    const NavLinks = [\n        {\n            name: \"Dashboard\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaHome, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            path: \"/\"\n        },\n        {\n            name: \"Company\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBuilding, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            path: \"/company\"\n        },\n        {\n            name: \"Employees\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUser, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            path: \"/employees\"\n        },\n        {\n            name: \"Attendance\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTimes, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            path: \"/attendance\"\n        },\n        {\n            name: \"Leave\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaWalking, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            path: \"/leave\"\n        },\n        {\n            name: \"Claims\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPen, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            path: \"/claims\"\n        },\n        {\n            name: \"Payroll\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMoneyCheck, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            path: \"/payroll\"\n        },\n        {\n            name: \"Appraisal\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCheck, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            path: \"/appraisal\"\n        },\n        {\n            name: \"Reporting\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaToiletPaper, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            path: \"/reporting\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),\n        style: {\n            width: navWidth\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default().top),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                        navWidth: navWidth\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    NavLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                            navWidth: navWidth,\n                            icon: link.icon,\n                            path: link.path,\n                            name: link.name\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_left_nav_leftNav_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bottom),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                    navWidth: navWidth,\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTools, {}, void 0, false, void 0, void 0),\n                    path: \"/settings\",\n                    name: \"Settings\"\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Nav/LeftNav/LeftNav.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav); // https://www.npmjs.com/package/react-icons  (react icons links)\nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9MZWZ0TmF2L0xlZnROYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ21CO0FBQzRCO0FBWWpEO0FBRXhCLE1BQU1jLFVBQVUsU0FBd0M7UUFBdkMsRUFBRUMsU0FBUSxFQUF3QjtJQUNqRCxNQUFNQyxXQUFXO1FBQ2Y7WUFDRUMsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ2Qsa0RBQU1BOzs7OztZQUNiZSxNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDYixzREFBVUE7Ozs7O1lBQ2pCYyxNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDWixrREFBTUE7Ozs7O1lBQ2JhLE1BQU07UUFDUjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsb0JBQU0sOERBQUNYLG1EQUFPQTs7Ozs7WUFDZFksTUFBTTtRQUNSO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ1YscURBQVNBOzs7OztZQUNoQlcsTUFBTTtRQUNSO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ1QsaURBQUtBOzs7OztZQUNaVSxNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDUix3REFBWUE7Ozs7O1lBQ25CUyxNQUFNO1FBQ1I7UUFDQTtZQUNFRixNQUFNO1lBQ05DLG9CQUFNLDhEQUFDUCxtREFBT0E7Ozs7O1lBQ2RRLE1BQU07UUFDUjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsb0JBQU0sOERBQUNOLHlEQUFhQTs7Ozs7WUFDcEJPLE1BQU07UUFDUjtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdsQix5RkFBVztRQUFFb0IsT0FBTztZQUFFQyxPQUFPVDtRQUFTOzswQkFDcEQsOERBQUNLO2dCQUFJQyxXQUFXbEIsd0ZBQVU7O2tDQUN4Qiw4REFBQ0YsK0NBQU1BO3dCQUFDYyxVQUFVQTs7Ozs7O29CQUNqQkMsU0FBU1UsR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDekIsOENBQUtBOzRCQUNKYSxVQUFVQTs0QkFDVkcsTUFBTVMsS0FBS1QsSUFBSTs0QkFDZkMsTUFBTVEsS0FBS1IsSUFBSTs0QkFDZkYsTUFBTVUsS0FBS1YsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUlyQiw4REFBQ0c7Z0JBQUlDLFdBQVdsQiwyRkFBYTswQkFDM0IsNEVBQUNELDhDQUFLQTtvQkFDSmEsVUFBVUE7b0JBQ1ZHLG9CQUFNLDhEQUFDTCxtREFBT0E7b0JBQ2RNLE1BQU07b0JBQ05GLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0tBeEVNSDtBQTBFTiwrREFBZUEsT0FBT0EsRUFBQyxDQUV2QixpRUFBaUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTGVmdE5hdi9MZWZ0TmF2LnRzeD8yYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlciwgTGlua3MgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvbGF5b3V0L2xlZnQtbmF2L2xlZnROYXYubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7XG4gIEZhSG9tZSxcbiAgRmFCdWlsZGluZyxcbiAgRmFVc2VyLFxuICBGYVRpbWVzLFxuICBGYVdhbGtpbmcsXG4gIEZhUGVuLFxuICBGYU1vbmV5Q2hlY2ssXG4gIEZhQ2hlY2ssXG4gIEZhVG9pbGV0UGFwZXIsXG4gIEZhVG9vbHMsXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5jb25zdCBMZWZ0TmF2ID0gKHsgbmF2V2lkdGggfTogeyBuYXZXaWR0aDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgTmF2TGlua3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJEYXNoYm9hcmRcIixcbiAgICAgIGljb246IDxGYUhvbWUgLz4sXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29tcGFueVwiLFxuICAgICAgaWNvbjogPEZhQnVpbGRpbmcgLz4sXG4gICAgICBwYXRoOiBcIi9jb21wYW55XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkVtcGxveWVlc1wiLFxuICAgICAgaWNvbjogPEZhVXNlciAvPixcbiAgICAgIHBhdGg6IFwiL2VtcGxveWVlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBdHRlbmRhbmNlXCIsXG4gICAgICBpY29uOiA8RmFUaW1lcyAvPixcbiAgICAgIHBhdGg6IFwiL2F0dGVuZGFuY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTGVhdmVcIixcbiAgICAgIGljb246IDxGYVdhbGtpbmcgLz4sXG4gICAgICBwYXRoOiBcIi9sZWF2ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDbGFpbXNcIixcbiAgICAgIGljb246IDxGYVBlbiAvPixcbiAgICAgIHBhdGg6IFwiL2NsYWltc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQYXlyb2xsXCIsXG4gICAgICBpY29uOiA8RmFNb25leUNoZWNrIC8+LFxuICAgICAgcGF0aDogXCIvcGF5cm9sbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHByYWlzYWxcIixcbiAgICAgIGljb246IDxGYUNoZWNrIC8+LFxuICAgICAgcGF0aDogXCIvYXBwcmFpc2FsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJlcG9ydGluZ1wiLFxuICAgICAgaWNvbjogPEZhVG9pbGV0UGFwZXIgLz4sXG4gICAgICBwYXRoOiBcIi9yZXBvcnRpbmdcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSBzdHlsZT17eyB3aWR0aDogbmF2V2lkdGggfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XG4gICAgICAgIDxIZWFkZXIgbmF2V2lkdGg9e25hdldpZHRofSAvPlxuICAgICAgICB7TmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgPExpbmtzXG4gICAgICAgICAgICBuYXZXaWR0aD17bmF2V2lkdGh9XG4gICAgICAgICAgICBpY29uPXtsaW5rLmljb259XG4gICAgICAgICAgICBwYXRoPXtsaW5rLnBhdGh9XG4gICAgICAgICAgICBuYW1lPXtsaW5rLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cbiAgICAgICAgPExpbmtzXG4gICAgICAgICAgbmF2V2lkdGg9e25hdldpZHRofVxuICAgICAgICAgIGljb249ezxGYVRvb2xzIC8+fVxuICAgICAgICAgIHBhdGg9e1wiL3NldHRpbmdzXCJ9XG4gICAgICAgICAgbmFtZT17XCJTZXR0aW5nc1wifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0TmF2O1xuXG4vLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC1pY29ucyAgKHJlYWN0IGljb25zIGxpbmtzKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiTGlua3MiLCJzdHlsZXMiLCJGYUhvbWUiLCJGYUJ1aWxkaW5nIiwiRmFVc2VyIiwiRmFUaW1lcyIsIkZhV2Fsa2luZyIsIkZhUGVuIiwiRmFNb25leUNoZWNrIiwiRmFDaGVjayIsIkZhVG9pbGV0UGFwZXIiLCJGYVRvb2xzIiwiTGVmdE5hdiIsIm5hdldpZHRoIiwiTmF2TGlua3MiLCJuYW1lIiwiaWNvbiIsInBhdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic3R5bGUiLCJ3aWR0aCIsInRvcCIsIm1hcCIsImxpbmsiLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/LeftNav/LeftNav.tsx\n"));

/***/ })

});
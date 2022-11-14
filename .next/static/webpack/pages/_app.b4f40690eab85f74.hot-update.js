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

/***/ "./components/Layout/layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/layout.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta */ \"./components/meta.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./components/Layout/components/index.ts\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/layout/layout.module.scss */ \"./styles/layout/layout.module.scss\");\n/* harmony import */ var _styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layout = (param)=>{\n    let { children  } = param;\n    _s();\n    const [navWidth, setNavWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"wide\");\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"none\");\n    const toggleNav = ()=>{\n        if (navWidth === \"wide\") {\n            setNavWidth(\"narrow\");\n        } else {\n            setNavWidth(\"wide\");\n        }\n    };\n    const toggleDisplay = ()=>{\n        if (display === \"none\") {\n            setDisplay(\"responsive\");\n        } else {\n            setDisplay(\"none\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_meta__WEBPACK_IMPORTED_MODULE_2__.Meta, {}, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Layout/layout.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.ResponsiveLayout, {\n                children: children,\n                display: display,\n                toggleNav: toggleNav,\n                toggleDisplay: toggleDisplay\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Layout/layout.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NormalLayout, {\n                children: children,\n                display: display,\n                navWidth: navWidth,\n                toggleNav: toggleNav,\n                toggleDisplay: toggleDisplay\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Layout/layout.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Layout/layout.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"AEZlEbE+eLM7sKJPkVdXXKj1nTA=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9sYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNUO0FBQytCO0FBQ0Y7QUFFNUQsTUFBTU0sU0FBUyxTQUFxQztRQUFwQyxFQUFFQyxTQUFRLEVBQXFCOztJQUM3QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1XLFlBQVksSUFBTTtRQUN0QixJQUFJSixhQUFhLFFBQVE7WUFDdkJDLFlBQVk7UUFDZCxPQUFPO1lBQ0xBLFlBQVk7UUFDZCxDQUFDO0lBQ0g7SUFFQSxNQUFNSSxnQkFBZ0IsSUFBTTtRQUMxQixJQUFJSCxZQUFZLFFBQVE7WUFDdEJDLFdBQVc7UUFDYixPQUFPO1lBQ0xBLFdBQVc7UUFDYixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV1YsK0VBQVc7OzBCQUN6Qiw4REFBQ0gsdUNBQUlBOzs7OzswQkFDTCw4REFBQ0UseURBQWdCQTtnQkFDZkcsVUFBVUE7Z0JBQ1ZHLFNBQVNBO2dCQUNURSxXQUFXQTtnQkFDWEMsZUFBZUE7Ozs7OzswQkFFakIsOERBQUNWLHFEQUFZQTtnQkFDWEksVUFBVUE7Z0JBQ1ZHLFNBQVNBO2dCQUNURixVQUFVQTtnQkFDVkksV0FBV0E7Z0JBQ1hDLGVBQWVBOzs7Ozs7Ozs7Ozs7QUFJdkI7R0F0Q01QO0tBQUFBO0FBd0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC50c3g/M2QwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vbWV0YVwiO1xuaW1wb3J0IHsgTm9ybWFsTGF5b3V0LCBSZXNwb25zaXZlTGF5b3V0IH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogYW55IH0pID0+IHtcbiAgY29uc3QgW25hdldpZHRoLCBzZXROYXZXaWR0aF0gPSB1c2VTdGF0ZShcIndpZGVcIik7XG4gIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcblxuICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XG4gICAgaWYgKG5hdldpZHRoID09PSBcIndpZGVcIikge1xuICAgICAgc2V0TmF2V2lkdGgoXCJuYXJyb3dcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE5hdldpZHRoKFwid2lkZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRGlzcGxheSA9ICgpID0+IHtcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIHNldERpc3BsYXkoXCJyZXNwb25zaXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXREaXNwbGF5KFwibm9uZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPE1ldGEgLz5cbiAgICAgIDxSZXNwb25zaXZlTGF5b3V0XG4gICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgICAgdG9nZ2xlTmF2PXt0b2dnbGVOYXZ9XG4gICAgICAgIHRvZ2dsZURpc3BsYXk9e3RvZ2dsZURpc3BsYXl9XG4gICAgICAvPlxuICAgICAgPE5vcm1hbExheW91dFxuICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAgIG5hdldpZHRoPXtuYXZXaWR0aH1cbiAgICAgICAgdG9nZ2xlTmF2PXt0b2dnbGVOYXZ9XG4gICAgICAgIHRvZ2dsZURpc3BsYXk9e3RvZ2dsZURpc3BsYXl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNZXRhIiwiTm9ybWFsTGF5b3V0IiwiUmVzcG9uc2l2ZUxheW91dCIsInN0eWxlcyIsIkxheW91dCIsImNoaWxkcmVuIiwibmF2V2lkdGgiLCJzZXROYXZXaWR0aCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidG9nZ2xlTmF2IiwidG9nZ2xlRGlzcGxheSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/layout.tsx\n"));

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/left.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/left.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".left_left__Kx61T {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.left_left__Kx61T {\\n  border-radius: 100%;\\n  width: 2rem;\\n  height: 2rem;\\n}\\n\\n.left_leftContainer__fuIAA {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.left_left__Kx61T {\\n  background: white;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  color: #1c4e80;\\n  font-size: clamp(1.25rem, 1.25vw, 1.25vw);\\n  margin-left: -3rem;\\n  cursor: pointer;\\n}\\n\\n.left_arrow-right__7glnQ {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(-180deg);\\n}\\n\\n.left_arrow-left__YZlbE {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(0deg);\\n}\\n\\n.left_page-name__Yp5jf {\\n  font-size: clamp(1.25rem, 1.25vw, 1.25vw);\\n  margin: 0 0 0 1rem;\\n}\\n\\n@media only screen and (max-width: 800px) {\\n  .left_leftContainer__fuIAA {\\n    display: none;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/abstracts/_placeholders.scss\",\"webpack://styles/layout/top-nav/left.module.scss\",\"webpack://styles/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAaA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ACZF;;ADqBA;EACE,mBAAA;EACA,WAAA;EACA,YAAA;AClBF;;AARA;EACE,aAAA;EACA,mBAAA;AAWF;;AARA;EAEE,iBAAA;EACA,4CCYO;EDXP,cCRQ;EDSR,yCAAA;EACA,kBAAA;EACA,eAAA;AAUF;;AAPA;EACE,gCAAA;EACA,2BAAA;AAUF;;AAPA;EACE,gCAAA;EACA,wBAAA;AAUF;;AAPA;EACE,yCAAA;EACA,kBAAA;AAUF;;AAPA;EACE;IACE,aAAA;EAUF;AACF\",\"sourcesContent\":[\"@use \\\"variables.scss\\\" as *;\\n\\n%full-container {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n// flex placeholders\\n%flex-align-center {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-center {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n%flex-between {\\n  @extend %flex-align-center;\\n  justify-content: space-between;\\n}\\n\\n// icon placeholders\\n%main-icon {\\n  border-radius: 100%;\\n  width: 2rem;\\n  height: 2rem;\\n  @extend %flex-center;\\n}\\n\",\"@use \\\"../../abstracts\\\" as *;\\n\\n.leftContainer {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.left {\\n  @extend %main-icon;\\n  background: white;\\n  box-shadow: $shadow;\\n  color: $primary;\\n  font-size: clamp(1.25rem, 1.25vw, 1.25vw);\\n  margin-left: -3rem;\\n  cursor: pointer;\\n}\\n\\n.arrow-right {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(-180deg);\\n}\\n\\n.arrow-left {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(0deg);\\n}\\n\\n.page-name {\\n  font-size: clamp(1.25rem, 1.25vw, 1.25vw);\\n  margin: 0 0 0 1rem;\\n}\\n\\n@media only screen and (max-width: 800px) {\\n  .leftContainer {\\n    display: none;\\n  }\\n}\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #1c4e80;\\n$secondary: #4cb5f5;\\n$tertiary: #f5f5f5;\\n$quaternary: #f5f5f5;\\n$quinary: #f5f5f5;\\n// $primary: #7db8f4;\\n\\n//==================================================\\n// Width\\n//==================================================\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n$shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$light-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\\n$basic-font-size: clamp(1rem, 1vw, 1vw);\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"left\": \"left_left__Kx61T\",\n\t\"leftContainer\": \"left_leftContainer__fuIAA\",\n\t\"arrow-right\": \"left_arrow-right__7glnQ\",\n\t\"arrow-left\": \"left_arrow-left__YZlbE\",\n\t\"page-name\": \"left_page-name__Yp5jf\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9sYXlvdXQvdG9wLW5hdi9sZWZ0Lm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSw2REFBNkQsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyx1QkFBdUIsd0JBQXdCLGdCQUFnQixpQkFBaUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IsaURBQWlELG1CQUFtQiw4Q0FBOEMsdUJBQXVCLG9CQUFvQixHQUFHLDhCQUE4QixxQ0FBcUMsZ0NBQWdDLEdBQUcsNkJBQTZCLHFDQUFxQyw2QkFBNkIsR0FBRyw0QkFBNEIsOENBQThDLHVCQUF1QixHQUFHLCtDQUErQyxnQ0FBZ0Msb0JBQW9CLEtBQUssR0FBRyxPQUFPLG9NQUFvTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLHNEQUFzRCxxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLDhDQUE4QyxrQkFBa0Isd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsbUJBQW1CLCtCQUErQixtQ0FBbUMsR0FBRyxzQ0FBc0Msd0JBQXdCLGdCQUFnQixpQkFBaUIseUJBQXlCLEdBQUcsbUNBQW1DLG9CQUFvQixrQkFBa0Isd0JBQXdCLEdBQUcsV0FBVyx1QkFBdUIsc0JBQXNCLHdCQUF3QixvQkFBb0IsOENBQThDLHVCQUF1QixvQkFBb0IsR0FBRyxrQkFBa0IscUNBQXFDLGdDQUFnQyxHQUFHLGlCQUFpQixxQ0FBcUMsNkJBQTZCLEdBQUcsZ0JBQWdCLDhDQUE4Qyx1QkFBdUIsR0FBRywrQ0FBK0Msb0JBQW9CLG9CQUFvQixLQUFLLEdBQUcsOElBQThJLHNCQUFzQixxQkFBcUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsK1JBQStSLDBLQUEwSyx1REFBdUQsc0pBQXNKLHlLQUF5SyxxQkFBcUI7QUFDaG1IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbGF5b3V0L3RvcC1uYXYvbGVmdC5tb2R1bGUuc2Nzcz85OTQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGVmdF9sZWZ0X19LeDYxVCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVmdF9sZWZ0X19LeDYxVCB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5sZWZ0X2xlZnRDb250YWluZXJfX2Z1SUFBIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdF9sZWZ0X19LeDYxVCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgY29sb3I6ICMxYzRlODA7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDEuMjV2dywgMS4yNXZ3KTtcXG4gIG1hcmdpbi1sZWZ0OiAtM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxlZnRfYXJyb3ctcmlnaHRfXzdnbG5RIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGVaKC0xODBkZWcpO1xcbn1cXG5cXG4ubGVmdF9hcnJvdy1sZWZ0X19ZWmxiRSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcXG59XFxuXFxuLmxlZnRfcGFnZS1uYW1lX19ZcDVqZiB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDEuMjV2dywgMS4yNXZ3KTtcXG4gIG1hcmdpbjogMCAwIDAgMXJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmxlZnRfbGVmdENvbnRhaW5lcl9fZnVJQUEge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2Fic3RyYWN0cy9fcGxhY2Vob2xkZXJzLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvbGF5b3V0L3RvcC1uYXYvbGVmdC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNaRjs7QURxQkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbEJGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBUkE7RUFFRSxpQkFBQTtFQUNBLDRDQ1lPO0VEWFAsY0NSUTtFRFNSLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxnQ0FBQTtFQUNBLDJCQUFBO0FBVUY7O0FBUEE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0FBVUY7O0FBUEE7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0FBVUY7O0FBUEE7RUFDRTtJQUNFLGFBQUE7RUFVRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInZhcmlhYmxlcy5zY3NzXFxcIiBhcyAqO1xcblxcbiVmdWxsLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLy8gZmxleCBwbGFjZWhvbGRlcnNcXG4lZmxleC1hbGlnbi1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuIHtcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ24tY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vLyBpY29uIHBsYWNlaG9sZGVyc1xcbiVtYWluLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vLi4vYWJzdHJhY3RzXFxcIiBhcyAqO1xcblxcbi5sZWZ0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCB7XFxuICBAZXh0ZW5kICVtYWluLWljb247XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XFxuICBjb2xvcjogJHByaW1hcnk7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDEuMjV2dywgMS4yNXZ3KTtcXG4gIG1hcmdpbi1sZWZ0OiAtM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93LXJpZ2h0IHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGVaKC0xODBkZWcpO1xcbn1cXG5cXG4uYXJyb3ctbGVmdCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcXG59XFxuXFxuLnBhZ2UtbmFtZSB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDEuMjV2dywgMS4yNXZ3KTtcXG4gIG1hcmdpbjogMCAwIDAgMXJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmxlZnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBDb2xvcnNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJHByaW1hcnk6ICMxYzRlODA7XFxuJHNlY29uZGFyeTogIzRjYjVmNTtcXG4kdGVydGlhcnk6ICNmNWY1ZjU7XFxuJHF1YXRlcm5hcnk6ICNmNWY1ZjU7XFxuJHF1aW5hcnk6ICNmNWY1ZjU7XFxuLy8gJHByaW1hcnk6ICM3ZGI4ZjQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIFdpZHRoXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBUcmFuc2l0aW9uXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiR0cmFuc2lzdGlvbi1lYXNlOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQm94IFNoYWRvd3NcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJHNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGxpZ2h0LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQm9yZGVyIFJhZGl1c1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBGb250IFNpemVzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcbiRiYXNpYy1mb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMXZ3KTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsZWZ0XCI6IFwibGVmdF9sZWZ0X19LeDYxVFwiLFxuXHRcImxlZnRDb250YWluZXJcIjogXCJsZWZ0X2xlZnRDb250YWluZXJfX2Z1SUFBXCIsXG5cdFwiYXJyb3ctcmlnaHRcIjogXCJsZWZ0X2Fycm93LXJpZ2h0X183Z2xuUVwiLFxuXHRcImFycm93LWxlZnRcIjogXCJsZWZ0X2Fycm93LWxlZnRfX1labGJFXCIsXG5cdFwicGFnZS1uYW1lXCI6IFwibGVmdF9wYWdlLW5hbWVfX1lwNWpmXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/left.module.scss\n"));

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/right.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/right.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".right_right__UbLaI, .right_user__dxZeo {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.right_user__dxZeo .right_name-logo__ha139 {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.right_user__dxZeo .right_name-logo__ha139 {\\n  border-radius: 100%;\\n  width: 2rem;\\n  height: 2rem;\\n}\\n\\n.right_right__UbLaI {\\n  height: 100%;\\n}\\n\\n.right_icon__No4uc {\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  cursor: pointer;\\n  margin-left: 1.5rem;\\n}\\n\\n.right_user__dxZeo {\\n  margin-left: 1rem;\\n}\\n.right_user__dxZeo .right_name-logo__ha139 {\\n  background: #1c4e80;\\n  color: white;\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  margin-left: 1rem;\\n}\\n.right_user__dxZeo .right_user-name__EquWj {\\n  margin-left: 1rem;\\n}\\n.right_user__dxZeo .right_icon__No4uc {\\n  margin-left: 1rem;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .right_user-name__EquWj,\\n  .right_icon__No4uc {\\n    display: none;\\n  }\\n  .right_user__dxZeo {\\n    margin-left: 0;\\n  }\\n  .right_user__dxZeo .right_name-logo__ha139 {\\n    margin-left: 0;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/abstracts/_placeholders.scss\",\"webpack://styles/layout/top-nav/right.module.scss\",\"webpack://styles/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAQA;EACE,aAAA;EACA,mBAAA;ACPF;;ADUA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ACPF;;ADgBA;EACE,mBAAA;EACA,WAAA;EACA,YAAA;ACbF;;AAbA;EAEE,YAAA;AAeF;;AAZA;EACE,gCAAA;EACA,eAAA;EACA,mBAAA;AAeF;;AAZA;EAEE,iBAAA;AAcF;AAZE;EAEE,mBChBM;EDiBN,YAAA;EACA,gCAAA;EACA,iBAAA;AAaJ;AAVE;EACE,iBAAA;AAYJ;AATE;EACE,iBAAA;AAWJ;;AAPA;EACE;;IAEE,aAAA;EAUF;EAPA;IACE,cAAA;EASF;EARE;IACE,cAAA;EAUJ;AACF\",\"sourcesContent\":[\"@use \\\"variables.scss\\\" as *;\\n\\n%full-container {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n// flex placeholders\\n%flex-align-center {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-center {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n%flex-between {\\n  @extend %flex-align-center;\\n  justify-content: space-between;\\n}\\n\\n// icon placeholders\\n%main-icon {\\n  border-radius: 100%;\\n  width: 2rem;\\n  height: 2rem;\\n  @extend %flex-center;\\n}\\n\",\"@use \\\"../../abstracts\\\" as *;\\n\\n.right {\\n  @extend %flex-align-center;\\n  height: 100%;\\n}\\n\\n.icon {\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  cursor: pointer;\\n  margin-left: 1.5rem;\\n}\\n\\n.user {\\n  @extend %flex-align-center;\\n  margin-left: 1rem;\\n\\n  .name-logo {\\n    @extend %main-icon;\\n    background: $primary;\\n    color: white;\\n    font-size: clamp(1rem, 1vw, 1vw);\\n    margin-left: 1rem;\\n  }\\n\\n  .user-name {\\n    margin-left: 1rem;\\n  }\\n\\n  .icon {\\n    margin-left: 1rem;\\n  }\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .user-name,\\n  .icon {\\n    display: none;\\n  }\\n\\n  .user {\\n    margin-left: 0;\\n    .name-logo {\\n      margin-left: 0;\\n    }\\n  }\\n}\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #1c4e80;\\n$secondary: #4cb5f5;\\n$tertiary: #f5f5f5;\\n$quaternary: #f5f5f5;\\n$quinary: #f5f5f5;\\n// $primary: #7db8f4;\\n\\n//==================================================\\n// Width\\n//==================================================\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n$shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$light-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\\n$basic-font-size: clamp(1rem, 1vw, 1vw);\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"right\": \"right_right__UbLaI\",\n\t\"user\": \"right_user__dxZeo\",\n\t\"name-logo\": \"right_name-logo__ha139\",\n\t\"icon\": \"right_icon__No4uc\",\n\t\"user-name\": \"right_user-name__EquWj\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9sYXlvdXQvdG9wLW5hdi9yaWdodC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsbUZBQW1GLGtCQUFrQix3QkFBd0IsR0FBRyxnREFBZ0Qsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxnREFBZ0Qsd0JBQXdCLGdCQUFnQixpQkFBaUIsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcsd0JBQXdCLHFDQUFxQyxvQkFBb0Isd0JBQXdCLEdBQUcsd0JBQXdCLHNCQUFzQixHQUFHLDhDQUE4Qyx3QkFBd0IsaUJBQWlCLHFDQUFxQyxzQkFBc0IsR0FBRyw4Q0FBOEMsc0JBQXNCLEdBQUcseUNBQXlDLHNCQUFzQixHQUFHLCtDQUErQyxvREFBb0Qsb0JBQW9CLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLGdEQUFnRCxxQkFBcUIsS0FBSyxHQUFHLE9BQU8scU1BQXFNLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssc0RBQXNELHFCQUFxQixnQkFBZ0IsaUJBQWlCLEdBQUcsOENBQThDLGtCQUFrQix3QkFBd0IsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxtQkFBbUIsK0JBQStCLG1DQUFtQyxHQUFHLHNDQUFzQyx3QkFBd0IsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxtQ0FBbUMsWUFBWSwrQkFBK0IsaUJBQWlCLEdBQUcsV0FBVyxxQ0FBcUMsb0JBQW9CLHdCQUF3QixHQUFHLFdBQVcsK0JBQStCLHNCQUFzQixrQkFBa0IseUJBQXlCLDJCQUEyQixtQkFBbUIsdUNBQXVDLHdCQUF3QixLQUFLLGtCQUFrQix3QkFBd0IsS0FBSyxhQUFhLHdCQUF3QixLQUFLLEdBQUcsK0NBQStDLDBCQUEwQixvQkFBb0IsS0FBSyxhQUFhLHFCQUFxQixrQkFBa0IsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLDhJQUE4SSxzQkFBc0IscUJBQXFCLHVCQUF1QixvQkFBb0IsdUJBQXVCLCtSQUErUiwwS0FBMEssdURBQXVELHNKQUFzSix5S0FBeUsscUJBQXFCO0FBQzMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2xheW91dC90b3AtbmF2L3JpZ2h0Lm1vZHVsZS5zY3NzPzEyNjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yaWdodF9yaWdodF9fVWJMYUksIC5yaWdodF91c2VyX19keFplbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0X3VzZXJfX2R4WmVvIC5yaWdodF9uYW1lLWxvZ29fX2hhMTM5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yaWdodF91c2VyX19keFplbyAucmlnaHRfbmFtZS1sb2dvX19oYTEzOSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5yaWdodF9yaWdodF9fVWJMYUkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucmlnaHRfaWNvbl9fTm80dWMge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDF2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cXG4ucmlnaHRfdXNlcl9fZHhaZW8ge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5yaWdodF91c2VyX19keFplbyAucmlnaHRfbmFtZS1sb2dvX19oYTEzOSB7XFxuICBiYWNrZ3JvdW5kOiAjMWM0ZTgwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDF2dyk7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLnJpZ2h0X3VzZXJfX2R4WmVvIC5yaWdodF91c2VyLW5hbWVfX0VxdVdqIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4ucmlnaHRfdXNlcl9fZHhaZW8gLnJpZ2h0X2ljb25fX05vNHVjIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucmlnaHRfdXNlci1uYW1lX19FcXVXaixcXG4gIC5yaWdodF9pY29uX19ObzR1YyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAucmlnaHRfdXNlcl9fZHhaZW8ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5yaWdodF91c2VyX19keFplbyAucmlnaHRfbmFtZS1sb2dvX19oYTEzOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2Fic3RyYWN0cy9fcGxhY2Vob2xkZXJzLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvbGF5b3V0L3RvcC1uYXYvcmlnaHQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNQRjs7QURnQkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDYkY7O0FBYkE7RUFFRSxZQUFBO0FBZUY7O0FBWkE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWVGOztBQVpBO0VBRUUsaUJBQUE7QUFjRjtBQVpFO0VBRUUsbUJDaEJNO0VEaUJOLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBYUo7QUFWRTtFQUNFLGlCQUFBO0FBWUo7QUFURTtFQUNFLGlCQUFBO0FBV0o7O0FBUEE7RUFDRTs7SUFFRSxhQUFBO0VBVUY7RUFQQTtJQUNFLGNBQUE7RUFTRjtFQVJFO0lBQ0UsY0FBQTtFQVVKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwidmFyaWFibGVzLnNjc3NcXFwiIGFzICo7XFxuXFxuJWZ1bGwtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vLyBmbGV4IHBsYWNlaG9sZGVyc1xcbiVmbGV4LWFsaWduLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWJldHdlZW4ge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbi1jZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8vIGljb24gcGxhY2Vob2xkZXJzXFxuJW1haW4taWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi8uLi9hYnN0cmFjdHNcXFwiIGFzICo7XFxuXFxuLnJpZ2h0IHtcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ24tY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMXZ3KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi51c2VyIHtcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ24tY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuXFxuICAubmFtZS1sb2dvIHtcXG4gICAgQGV4dGVuZCAlbWFpbi1pY29uO1xcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMXZ3KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICB9XFxuXFxuICAudXNlci1uYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICB9XFxuXFxuICAuaWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAudXNlci1uYW1lLFxcbiAgLmljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnVzZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgLm5hbWUtbG9nbyB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQ29sb3JzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjMWM0ZTgwO1xcbiRzZWNvbmRhcnk6ICM0Y2I1ZjU7XFxuJHRlcnRpYXJ5OiAjZjVmNWY1O1xcbiRxdWF0ZXJuYXJ5OiAjZjVmNWY1O1xcbiRxdWluYXJ5OiAjZjVmNWY1O1xcbi8vICRwcmltYXJ5OiAjN2RiOGY0O1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBXaWR0aFxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gVHJhbnNpdGlvblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJveCBTaGFkb3dzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRzaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiRsaWdodC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJvcmRlciBSYWRpdXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gRm9udCBTaXplc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXG4kYmFzaWMtZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDF2dyk7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicmlnaHRcIjogXCJyaWdodF9yaWdodF9fVWJMYUlcIixcblx0XCJ1c2VyXCI6IFwicmlnaHRfdXNlcl9fZHhaZW9cIixcblx0XCJuYW1lLWxvZ29cIjogXCJyaWdodF9uYW1lLWxvZ29fX2hhMTM5XCIsXG5cdFwiaWNvblwiOiBcInJpZ2h0X2ljb25fX05vNHVjXCIsXG5cdFwidXNlci1uYW1lXCI6IFwicmlnaHRfdXNlci1uYW1lX19FcXVXalwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/right.module.scss\n"));

/***/ })

});
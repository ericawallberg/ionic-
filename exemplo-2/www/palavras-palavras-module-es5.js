(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["palavras-palavras-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/palavras/palavras.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/palavras/palavras.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomePalavrasPalavrasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-button>\n    <ion-title>Palavras</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/palavras/palavras-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/home/palavras/palavras-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: PalavrasPageRoutingModule */

    /***/
    function srcAppHomePalavrasPalavrasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PalavrasPageRoutingModule", function () {
        return PalavrasPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _palavras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./palavras.page */
      "./src/app/home/palavras/palavras.page.ts");

      var routes = [{
        path: '',
        component: _palavras_page__WEBPACK_IMPORTED_MODULE_3__["PalavrasPage"]
      }];

      var PalavrasPageRoutingModule = function PalavrasPageRoutingModule() {
        _classCallCheck(this, PalavrasPageRoutingModule);
      };

      PalavrasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PalavrasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/palavras/palavras.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/home/palavras/palavras.module.ts ***!
      \**************************************************/

    /*! exports provided: PalavrasPageModule */

    /***/
    function srcAppHomePalavrasPalavrasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PalavrasPageModule", function () {
        return PalavrasPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _palavras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./palavras-routing.module */
      "./src/app/home/palavras/palavras-routing.module.ts");
      /* harmony import */


      var _palavras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./palavras.page */
      "./src/app/home/palavras/palavras.page.ts");

      var PalavrasPageModule = function PalavrasPageModule() {
        _classCallCheck(this, PalavrasPageModule);
      };

      PalavrasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _palavras_routing_module__WEBPACK_IMPORTED_MODULE_5__["PalavrasPageRoutingModule"]],
        declarations: [_palavras_page__WEBPACK_IMPORTED_MODULE_6__["PalavrasPage"]]
      })], PalavrasPageModule);
      /***/
    },

    /***/
    "./src/app/home/palavras/palavras.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/home/palavras/palavras.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomePalavrasPalavrasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFsYXZyYXMvcGFsYXZyYXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/home/palavras/palavras.page.ts":
    /*!************************************************!*\
      !*** ./src/app/home/palavras/palavras.page.ts ***!
      \************************************************/

    /*! exports provided: PalavrasPage */

    /***/
    function srcAppHomePalavrasPalavrasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PalavrasPage", function () {
        return PalavrasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PalavrasPage = /*#__PURE__*/function () {
        function PalavrasPage() {
          _classCallCheck(this, PalavrasPage);
        }

        _createClass(PalavrasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PalavrasPage;
      }();

      PalavrasPage.ctorParameters = function () {
        return [];
      };

      PalavrasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-palavras',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./palavras.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/palavras/palavras.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./palavras.page.scss */
        "./src/app/home/palavras/palavras.page.scss"))["default"]]
      })], PalavrasPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=palavras-palavras-module-es5.js.map
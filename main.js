(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_appresolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/appresolver.service */ "./src/app/services/appresolver.service.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_single_template_single_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/single-template/single-template.component */ "./src/app/components/single-template/single-template.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _components_templates_templates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/templates/templates.component */ "./src/app/components/templates/templates.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: ":cat_slug", component: _components_templates_templates_component__WEBPACK_IMPORTED_MODULE_8__["TemplatesComponent"] },
    {
        path: ":cat_slug/:template_slug",
        component: _components_single_template_single_template_component__WEBPACK_IMPORTED_MODULE_3__["SingleTemplateComponent"],
        resolve: { cres: _services_appresolver_service__WEBPACK_IMPORTED_MODULE_1__["AppresolverService"] }
    },
    { path: "**", component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _components_templates_templates_component__WEBPACK_IMPORTED_MODULE_8__["TemplatesComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_single_template_single_template_component__WEBPACK_IMPORTED_MODULE_3__["SingleTemplateComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"]],
            providers: [_services_appresolver_service__WEBPACK_IMPORTED_MODULE_1__["AppresolverService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br />\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-dark\">\n  <div class=\"text-center text-light p-3\">\n    <a href=\"https://www.trycatchclasses.com\" target=\"_blank\"\n      >TryCatch Classes</a\n    >\n    &copy; 2019 All Rights Reserved.\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h5>\n    <strong>Free Responsive Mobile Website Templates</strong>\n  </h5>\n  <br />\n  <div class=\"row templates\">\n    <div class=\"col-md-4 mb-4\" *ngFor=\"let template of default_templates\">\n      <a routerLink=\"/{{ template.cat_slug }}/{{ template.url_slug }}\">\n        <mdb-card cascade=\"true\" narrower=\"true\">\n          <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n            <mdb-card-img src=\"{{ template.image }}\"></mdb-card-img>\n            <div class=\"mask rgba-white-slight\"></div>\n          </div>\n          <mdb-card-body cascade=\"true\" class=\"text-center\">\n            <h6 class=\"card-title\">\n              <strong>{{ template.short_title }}</strong>\n            </h6>\n          </mdb-card-body>\n        </mdb-card>\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"pre_loader\" *ngIf=\"loading;\">\n  <div class=\"myloader\">\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--text\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/seo.service */ "./src/app/services/seo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_templates_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/templates-data.service */ "./src/app/services/templates-data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(templateData, meta, router, _seoService) {
        this.templateData = templateData;
        this.meta = meta;
        this.router = router;
        this._seoService = _seoService;
        this.loading = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.templateData.getDefaultTemplates().subscribe(function (res) {
            _this.loading = true;
            _this.default_templates = res["template_detail"];
            _this._seoService.updateDescription(res["meta_data"].meta_description);
            //this._seoService.updateKeywords(res["meta_data"].meta_keyword);
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_templates_data_service__WEBPACK_IMPORTED_MODULE_3__["TemplatesDataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<mdb-navbar #nav SideClass=\"navbar navbar-expand-lg navbar-dark indigo sticky-top\" [containerInside]=\"false\">\n\n  <!-- Navbar brand -->\n  <mdb-navbar-brand>\n    <a class=\"navbar-brand\" href=\"#\"><img\n        src=\"https://www.trycatchclasses.com/free-templates/assets/images/tcc_logo_hori.png\" height=\"60\"></a>\n  </mdb-navbar-brand>\n\n  <links>\n    <!-- Links -->\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link waves-light\" mdbWavesEffect routerLink=\"home\">Home</a>\n      </li>\n\n      <!-- Dropdown -->\n      <li *ngIf=\"showDropdown\" class=\"nav-item dropdown mega-dropdown\" routerLinkActive=\"active\" mdbDropdown>\n        <a mdbDropdownToggle mdbWavesEffect class=\"nav-link dropdown-toggle waves-light\" mdbwaveseffect>Categories</a>\n        <div class=\"dropdown-menu mega-menu row z-depth-1\">\n          <div class=\"row\">\n            <ng-container *ngFor=\"let menu of cateMenuList\">\n              <div class=\"col-md-5 col-xl-4 sub-menu mt-5 mb-5 pl-4\">\n                <ul class=\"list-unstyled mx-4 pl-0 dark-grey-text\">\n                  <li class=\"sub-title text-uppercase mt-sm\" *ngFor=\"let cat of menu.catList\">\n                    <a class=\"menu-item\" routerLink=\"/{{cat.url_slug}}\">{{cat.category}}</a>\n                  </li>\n                </ul>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </li>\n    </ul>\n    <!-- Links -->\n\n    <!-- Links -->\n    <ul class=\"navbar-nav nav-flex-icons ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.facebook.com/TryCatchClasses/\" target=\"_blank\"><i\n            class=\"fab fa-facebook-f\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://twitter.com/trycatchclasses\" target=\"_blank\"><i class=\"fab fa-twitter\"\n            aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" target=\"_blank\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i></a>\n      </li>\n    </ul>\n    <!-- Links -->\n  </links>\n  <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxlcDI3MnBhXFxEZXNrdG9wXFxWYXJzaGFcXG15Q29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_templates_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/templates-data.service */ "./src/app/services/templates-data.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(templateData) {
        this.templateData = templateData;
        this.cateMenuList = [];
        this.showDropdown = false;
        this.paginateArray = function (array, page_size, page_number) {
            --page_number; // because pages logically start with 1, but technically with 0
            return array.slice(page_number * page_size, (page_number + 1) * page_size);
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.CategoryMenuBind();
    };
    NavbarComponent.prototype.CategoryMenuBind = function () {
        var _this = this;
        var catColumnCnt = 3;
        this.$getAllCategories = this.templateData.getAllCategories().subscribe(function (catList) {
            console.log("catList", catList);
            if (catList.category_data && catList.category_data.length > 0) {
                _this.showDropdown = true;
                var catDat = catList.category_data;
                var loopCnt = Math.ceil(catDat.length / catColumnCnt);
                for (var i = 1; i < loopCnt; i++) {
                    _this.cateMenuList.push({
                        id: i,
                        catList: _this.paginateArray(catDat, loopCnt, i)
                    });
                }
                console.log("cateMenuList", _this.cateMenuList);
            }
        }, function (err) {
            console.log(err);
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.$getAllCategories) {
            this.$getAllCategories.unsubscribe();
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_templates_data_service__WEBPACK_IMPORTED_MODULE_2__["TemplatesDataService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/single-template/single-template.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/single-template/single-template.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h5>\n    <strong>{{ template.title }}</strong>\n  </h5>\n  <br />\n  <img src=\"{{ template.image }}\" class=\"img-fluid single-img\" />\n  <br />\n  <hr />\n  <div class=\"text-center\">\n    <a\n      class=\"btn blue-gradient btn-lg\"\n      href=\"{{ template.demo_link }}\"\n      target=\"_blank\"\n    >\n      <i class=\"far fa-images\"></i> DEMO\n    </a>\n    <a\n      class=\"btn blue-gradient btn-lg\"\n      download\n      href=\"{{ template.download_link }}\"\n      target=\"_self\"\n    >\n      <i class=\"fas fa-cloud-download-alt\"></i> DOWNLOAD\n    </a>\n    <hr />\n  </div>\n  <div class=\"container\" [innerHTML]=\"template.description\"></div>\n  <hr />\n  <br />\n  <div class=\"row templates\">\n    <div class=\"col-md-4 mb-4\" *ngFor=\"let template of related_templates\">\n      <a routerLink=\"/{{ template.cat_slug }}/{{ template.url_slug }}\">\n        <mdb-card cascade=\"true\" narrower=\"true\">\n          <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n            <mdb-card-img src=\"{{ template.image }}\"></mdb-card-img>\n            <div class=\"mask rgba-white-slight\"></div>\n          </div>\n          <mdb-card-body cascade=\"true\" class=\"text-center\">\n            <h6 class=\"card-title\">\n              <strong>{{ template.short_title }}</strong>\n            </h6>\n          </mdb-card-body>\n        </mdb-card>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"pre_loader\" *ngIf=\"loading\">\n  <div class=\"myloader\">\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--text\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/single-template/single-template.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/single-template/single-template.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2luZ2xlLXRlbXBsYXRlL3NpbmdsZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/single-template/single-template.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/single-template/single-template.component.ts ***!
  \*************************************************************************/
/*! exports provided: SingleTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTemplateComponent", function() { return SingleTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/seo.service */ "./src/app/services/seo.service.ts");
/* harmony import */ var _services_templates_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/templates-data.service */ "./src/app/services/templates-data.service.ts");





// import "rxjs/add/operator/map";
// import "rxjs/Rx";
// import { map } from "rxjs/operators";
var SingleTemplateComponent = /** @class */ (function () {
    function SingleTemplateComponent(activeRoute, templateData, _seoService) {
        this.activeRoute = activeRoute;
        this.templateData = templateData;
        this._seoService = _seoService;
        this.loading = true;
    }
    SingleTemplateComponent.prototype.ngOnInit = function () {
        // var template_slug = this.activeRoute.snapshot.params.template_slug;
        // this.activeRoute.data.subscribe(res => {
        //   console.log(res);
        // });
        console.log(this.activeRoute.snapshot.data.cres);
        this.template = this.activeRoute.snapshot.data.cres;
        this.loading = false;
        // this.activeRoute.params.subscribe(routeParams => {
        //   this.loading = true;
        //   window.scrollTo(0, 0);
        //   this.templateData.getSingleTemplate(routeParams.template_slug).subscribe(
        //     res => {
        //       this.template = res;
        //       console.log(res);
        //       this._seoService.updateDescription(res["meta_description"]);
        //       //this._seoService.updateKeywords(res["meta_keyword"]);
        //       this.templateData
        //         .getRelatedTemplates(res["cat_slug"], res["id"])
        //         .subscribe(
        //           t_res => {
        //             this.loading = true;
        //             this.related_templates = t_res["template_data"];
        //             this.loading = false;
        //           },
        //           t_err => {
        //             console.log(t_err);
        //             this.loading = false;
        //           }
        //         );
        //       this.loading = false;
        //     },
        //     err => {
        //       console.log(err);
        //       this.loading = false;
        //     }
        //   );
        // });
    };
    SingleTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-single-template",
            template: __webpack_require__(/*! ./single-template.component.html */ "./src/app/components/single-template/single-template.component.html"),
            styles: [__webpack_require__(/*! ./single-template.component.scss */ "./src/app/components/single-template/single-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_templates_data_service__WEBPACK_IMPORTED_MODULE_4__["TemplatesDataService"],
            _services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SEOService"]])
    ], SingleTemplateComponent);
    return SingleTemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/templates/templates.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/templates/templates.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid template-comp\">\n  <div *ngIf=\"dataFound == true; else nodatafound\">\n    <h5>\n      <strong>Free Responsive Mobile Website Templates</strong>\n    </h5>\n    <br />\n    <div class=\"row templates\">\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let template of templates\">\n        <a routerLink=\"/{{ template.cat_slug }}/{{ template.url_slug }}\">\n          <mdb-card cascade=\"true\" narrower=\"true\">\n            <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n              <mdb-card-img src=\"{{ template.image }}\"></mdb-card-img>\n              <div class=\"mask rgba-white-slight\"></div>\n            </div>\n            <mdb-card-body cascade=\"true\" class=\"text-center\">\n              <h6 class=\"card-title\">\n                <strong>{{ template.short_title }}</strong>\n              </h6>\n            </mdb-card-body>\n          </mdb-card>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #nodatafound>\n  <div class=\"container-fluid text-center\" style=\"height:77.1vh\">\n    <img\n      src=\"https://www.trycatchclasses.com/free-templates/assets/images/notdatafound.png\"\n      alt=\"No Data Found\"\n    />\n    <h4 class=\"my-brown-text text-center font-weight-bold mt-5\">\n      We Will Provide This Soon...\n    </h4>\n  </div>\n</ng-template>\n<div class=\"pre_loader\" *ngIf=\"loading\">\n  <!-- <div\n    class=\"spinner-grow text-primary\" \n    style=\"width: 3rem; height: 3rem;position: absolute;left:47%;top:45%;\"\n    role=\"status\"\n  >\n    <span class=\"sr-only\">Loading...</span> -->\n  <div class=\"myloader\">\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--dot\"></div>\n    <div class=\"loader--text\"></div>\n  </div>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/templates/templates.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/templates/templates.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-brown-text {\n  color: #d17531; }\n\n.template-comp {\n  min-height: 77.1vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZXMvQzpcXFVzZXJzXFxlcDI3MnBhXFxEZXNrdG9wXFxWYXJzaGFcXG15Q29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGVtcGxhdGVzXFx0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlbXBsYXRlcy90ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktYnJvd24tdGV4dCB7XHJcbiAgY29sb3I6ICNkMTc1MzE7XHJcbn1cclxuLnRlbXBsYXRlLWNvbXAge1xyXG4gIG1pbi1oZWlnaHQ6IDc3LjF2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/templates/templates.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/templates/templates.component.ts ***!
  \*************************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_templates_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/templates-data.service */ "./src/app/services/templates-data.service.ts");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/seo.service */ "./src/app/services/seo.service.ts");





var TemplatesComponent = /** @class */ (function () {
    function TemplatesComponent(activeRoute, templateData, routerR, _seoService) {
        this.activeRoute = activeRoute;
        this.templateData = templateData;
        this.routerR = routerR;
        this._seoService = _seoService;
        this.dataFound = true;
        this.loading = true;
    }
    TemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (routeParams) {
            _this.loading = true;
            _this.templateData.getTemplateByCategory(routeParams.cat_slug).subscribe(function (res) {
                if (res[0] == "No data Found") {
                    _this.dataFound = false;
                }
                else {
                    _this.dataFound = true;
                    _this._seoService.updateDescription(res["meta_data"].meta_description);
                    // this._seoService.updateKeywords(res["meta_data"].meta_keyword);
                    _this.templates = res["template_data"];
                }
                _this.loading = false;
            }, function (err) {
                console.log(err);
                _this.loading = false;
            });
        });
    };
    TemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-templates",
            template: __webpack_require__(/*! ./templates.component.html */ "./src/app/components/templates/templates.component.html"),
            styles: [__webpack_require__(/*! ./templates.component.scss */ "./src/app/components/templates/templates.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_templates_data_service__WEBPACK_IMPORTED_MODULE_3__["TemplatesDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]])
    ], TemplatesComponent);
    return TemplatesComponent;
}());



/***/ }),

/***/ "./src/app/services/appresolver.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/appresolver.service.ts ***!
  \*************************************************/
/*! exports provided: AppresolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppresolverService", function() { return AppresolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _templates_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates-data.service */ "./src/app/services/templates-data.service.ts");



var AppresolverService = /** @class */ (function () {
    function AppresolverService(templateDataServ) {
        this.templateDataServ = templateDataServ;
    }
    AppresolverService.prototype.resolve = function (route) {
        return this.templateDataServ.getSingleTemplate(route.paramMap.get("template_slug"));
    };
    AppresolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_templates_data_service__WEBPACK_IMPORTED_MODULE_2__["TemplatesDataService"]])
    ], AppresolverService);
    return AppresolverService;
}());



/***/ }),

/***/ "./src/app/services/seo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SEOService = /** @class */ (function () {
    function SEOService(meta) {
        this.meta = meta;
    }
    SEOService.prototype.updateDescription = function (desc) {
        this.meta.updateTag({ name: "description", content: desc });
    };
    SEOService.prototype.updateKeywords = function (keywords) {
        this.meta.updateTag({ name: "keywords", content: keywords });
    };
    SEOService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], SEOService);
    return SEOService;
}());



/***/ }),

/***/ "./src/app/services/templates-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/templates-data.service.ts ***!
  \****************************************************/
/*! exports provided: TemplatesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesDataService", function() { return TemplatesDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TemplatesDataService = /** @class */ (function () {
    function TemplatesDataService(http) {
        this.http = http;
    }
    TemplatesDataService.prototype.getAllCategories = function () {
        return this.http.get("https://www.trycatchclasses.com/free-templates/backbone/api/all_categories");
    };
    TemplatesDataService.prototype.getDefaultTemplates = function () {
        return this.http.get("https://www.trycatchclasses.com/free-templates/backbone/api/random_templates");
    };
    TemplatesDataService.prototype.getTemplateByCategory = function (cat_slug) {
        return this.http.get("https://www.trycatchclasses.com/free-templates/backbone/api/get_templates/" +
            cat_slug);
    };
    TemplatesDataService.prototype.getSingleTemplate = function (template_slug) {
        return this.http.get("https://www.trycatchclasses.com/free-templates/backbone/api/get_single_template/" +
            template_slug);
    };
    TemplatesDataService.prototype.getRelatedTemplates = function (cat_slug, template_id) {
        return this.http.get("https://www.trycatchclasses.com/free-templates/backbone/api/get_related_template/" +
            cat_slug +
            "/" +
            template_id);
    };
    TemplatesDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TemplatesDataService);
    return TemplatesDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ep272pa\Desktop\Varsha\myCode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
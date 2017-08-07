"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var image_list_component_1 = require("./components/image/image-list/image-list.component");
var image_list_item_component_1 = require("./components/image/image-list-item/image-list-item.component");
var image_detail_component_1 = require("./components/image/image-detail/image-detail.component");
var login_component_1 = require("./components/login/login.component");
var image_service_1 = require("./services/image.service");
var login_service_1 = require("./services/login.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            app_component_1.AppComponent,
            image_list_component_1.ImageList,
            image_list_item_component_1.ImageListItem,
            image_detail_component_1.ImageDetail,
            login_component_1.Login
        ],
        providers: [
            image_service_1.ImageService,
            login_service_1.LoginService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
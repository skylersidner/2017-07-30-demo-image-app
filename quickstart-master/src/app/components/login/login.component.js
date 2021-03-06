"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_service_1 = require("../../services/login.service");
var Login = (function () {
    function Login(loginService) {
        this.loginService = loginService;
    }
    ;
    Login.prototype.onLogin = function (username) {
        this.loginService.login(username);
        this.currentUser = this.loginService.getUser();
    };
    ;
    Login.prototype.onLogout = function () {
        this.loginService.logout();
        this.currentUser = this.loginService.getUser();
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], Login);
exports.Login = Login;
;
//# sourceMappingURL=login.component.js.map
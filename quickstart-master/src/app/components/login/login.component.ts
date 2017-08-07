import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { User } from '../../classes/user';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css']
})

export class Login {

    currentUser: User;

    constructor(private loginService: LoginService){

    };

    onLogin(username: string) {
        this.loginService.login(username);
        this.currentUser = this.loginService.getUser();
    };

    onLogout() {
        this.loginService.logout();
        this.currentUser = this.loginService.getUser();
    }
};
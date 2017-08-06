import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    currentUser = {username: ''};

    login(username: string) {
        this.currentUser.username = username;
    };

    logout() {
        this.currentUser.username = '';
    };
}

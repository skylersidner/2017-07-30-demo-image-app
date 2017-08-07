import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable()
export class LoginService {
    currentUser: User;

    login(username: string) {
        let now = new Date();

        this.currentUser = new User(username, now);
    };

    logout() {
        this.currentUser = null;
    };

    getUser() {
        return this.currentUser;
    }
}

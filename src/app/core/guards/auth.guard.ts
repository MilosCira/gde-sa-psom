import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,

    ) { }

    canActivate() {
        // ----------------------- PRODUCSTION MODE ----------------------------
        // if(this.authQuery.getEntity(1)) {
        //   const currentUser: SignInResponse = this.authQuery.getEntity(1);

        //   if (currentUser.token) {
        //     return true;
        //   }
        // }

        // ----------------------- DEVELOP MODE ----------------------------
        const user = localStorage.getItem('sid');
        if (user) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}

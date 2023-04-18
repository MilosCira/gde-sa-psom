import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        const uri = 'api/login';
        return this.http.post(uri, { email, password });
    }

    loguout() {
        const uri = 'api/logout';
        return this.http.get(uri, {});
    }
}
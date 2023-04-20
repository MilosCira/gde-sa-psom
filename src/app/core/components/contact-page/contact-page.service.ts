import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ContactPageService {
    constructor(private http: HttpClient,) { }

    sendEmail(data: any): Observable<any> {
        const uri = 'api/mail';
        return this.http.post(uri, data);
    }
}
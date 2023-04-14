import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class CateringService {
    constructor(private http: HttpClient) { }

    getRandomCateringFacilties(): Observable<any> {
        const uri = 'kafe/random';
        return this.http.get(uri, {})
    }
    getAllCateringFacilties(): Observable<any> {
        const uri = 'kafe/svi_Kafici';
        return this.http.get(uri, {})
    }
}
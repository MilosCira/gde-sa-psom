import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ParkService {
    constructor(private http: HttpClient) { }
    getParks(): Observable<any> {
        const uri = 'kafe/parks';
        return this.http.get(uri, {})
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, tap, take } from 'rxjs/operators';
import { CateringState, CateringStore } from "./state/catering.store";
@Injectable()
export class CateringService {
    constructor(private http: HttpClient, private catering: CateringStore) { }
    public limit: number = 15;
    getRandomCateringFacilties(): Observable<any> {
        const uri = 'kafe/random';
        return this.http.get(uri, {})
    }
    getLimitCatering(limit: number): Observable<any> {
        const uri = 'kafe/svi_Kafici';
        return this.http.post(uri, { limit })
    }
    getCount(): Observable<any> {
        const uri = 'kafe/svi_Kafici';
        return this.http.get(uri, {})
    }



    searchCatering(word: string): Observable<any> {
        const uri = 'kafe/search-caffe';
        return this.http.post(uri, { word })
    }
}
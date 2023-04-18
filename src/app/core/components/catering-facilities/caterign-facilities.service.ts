import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CateringStore } from "./state/catering.store";
@Injectable()
export class CateringService {
    constructor(private http: HttpClient, private catering: CateringStore) { }

    getRandomCateringFacilties(): Observable<any> {
        const uri = 'kafe/random';
        return this.http.get(uri, {})
    }
    getLimitCatering(): Observable<any> {
        const uri = 'kafe/svi_Kafici';
        return this.http.get(uri, {})
    }
    getFilteredCateringFacilties(ops_id: number, ugo_id: number, sta_id: number): Observable<any> {
        const uri = 'kafe/search-caffe';
        return this.http.post(uri, { ops_id, ugo_id, sta_id })
    }

    getAllTown(): Observable<any> {
        const uri = 'kafe/opstina';
        return this.http.get(uri, {})
    }

    getAllPlaces(): Observable<any> {
        const uri = 'kafe/ugo_objekat';
        return this.http.get(uri, {})
    }

    getAllSizeOfDogs(): Observable<any> {
        const uri = 'kafe/starost';
        return this.http.get(uri, {})
    }

    getSuggestedCaterings(): Observable<any> {
        const uri = 'kafe/predloziKafic';
        return this.http.get(uri, {})
    }

    acceptCatering(data: any): Observable<any> {
        const uri = 'kafe/info_dodaj_ug';
        return this.http.post(uri, data)
    }

    declineCatering(data: any): Observable<any> {
        const uri = 'kafe/delete_suggested';
        return this.http.post(uri, data)
    }
}
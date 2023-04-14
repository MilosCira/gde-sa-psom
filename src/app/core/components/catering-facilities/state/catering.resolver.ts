import { Injectable } from '@angular/core';

import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap, take } from 'rxjs/operators';
import { CateringService } from '../caterign-facilities.service';
import { CateringState, CateringStore } from './catering.store';

@Injectable({
    providedIn: 'root',
})
export class CateringResolver implements Resolve<any[]> {
    pageIndex: number = 1;
    pageSize: number = 25;
    constructor(
        private cateringService: CateringService,
        private cateringStore: CateringStore,
        private router: Router
    ) { }
    resolve(): Observable<any> {



        return this.cateringService.getAllCateringFacilties().pipe(
            catchError((error) => {
                this.router.navigate(['/']);
                return of('No catering data for...');
            }),
            tap((cs: any) => {
                console.log(cs);

                this.cateringStore.set([cs?.objekat2]);
            })
        );
    }
}

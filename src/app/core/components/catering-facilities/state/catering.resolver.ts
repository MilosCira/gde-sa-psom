import { Injectable } from '@angular/core';

import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap, take } from 'rxjs/operators';
import { CateringService } from '../caterign-facilities.service';
import { ICateringFacilities } from './catering-facilities.interface';
import { CateringState, CateringStore } from './catering.store';

@Injectable({
    providedIn: 'root',
})
export class CateringResolver implements Resolve<ICateringFacilities[]> {
    pageIndex: number = 1;
    pageSize: number = 15;
    constructor(
        private cateringService: CateringService,
        private cateringStore: CateringStore,
        private router: Router
    ) { }
    resolve(): Observable<any> {



        return this.cateringService.getLimitCatering().pipe(
            catchError((error) => {
                this.router.navigate(['/']);
                return of('No catering data for...');
            }),
            tap((cs: any) => {

                this.cateringStore.set(cs?.objekat2);
            })
        );
    }
}

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CateringState, CateringStore } from './catering.store';


@Injectable({ providedIn: 'root' })
export class CateringQuery extends QueryEntity<CateringState> {
    constructor(protected cStore: CateringStore) {
        super(cStore);
    }
}

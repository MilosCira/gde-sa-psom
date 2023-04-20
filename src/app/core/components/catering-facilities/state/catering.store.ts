import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ICateringFacilities } from './catering-facilities.interface';


export interface CateringState extends EntityState<ICateringFacilities> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cateringStore' })
export class CateringStore extends EntityStore<any> {
    constructor() {
        super();
    }
}

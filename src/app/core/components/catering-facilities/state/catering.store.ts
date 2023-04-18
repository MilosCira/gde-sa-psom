import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';


export interface CateringState extends EntityState<any> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cateringStore' })
export class CateringStore extends EntityStore<any> {
    constructor() {
        super();
    }
}

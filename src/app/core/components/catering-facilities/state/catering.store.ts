import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';


export interface CateringState extends EntityState<any, any> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'catering' })
export class CateringStore extends EntityStore<any> {
    constructor() {
        super();
    }
}

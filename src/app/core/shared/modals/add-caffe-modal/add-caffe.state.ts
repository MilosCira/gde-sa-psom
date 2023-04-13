
import { Injectable, TemplateRef } from '@angular/core';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class AddCaffeModalState {
    /**
     * The last options passed
     */
    options: any;

    /**
     * The last opened modal
     */
    // @ts-ignore
    modal: NgbModalRef;

    /**
     * The template containing the modal component
     */
    // @ts-ignore
    template: TemplateRef<any>;
}

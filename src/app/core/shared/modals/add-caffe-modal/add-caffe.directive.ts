import { Directive, TemplateRef } from '@angular/core';
import { AddCaffeModalState } from './add-caffe.state';

/**
 * Directive allowing to get a reference to the template containing the login modal component,
 * and to store it into the internal confirm state service. Somewhere in the view, there must be
 
 */
@Directive({
    selector: '[addCaffe]',
})
export class AddCaffeModalDirective {
    constructor(modalTemplate: TemplateRef<any>, private state: AddCaffeModalState) {
        this.state.template = modalTemplate;
    }
}
import { Injectable, TemplateRef } from '@angular/core';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class SuccessModalState {
  /**
   * The last options passed
   */
  options: NgbModalOptions = {
    // windowClass: 'login-modal',
    // backdropClass: 'light-blue-backdrop',
    centered: true,
  };

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

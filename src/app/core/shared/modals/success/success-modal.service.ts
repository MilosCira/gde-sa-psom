import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccessModalState } from './success-modal.state';

/**
 * Service, allowing to open modal from anywhere and get back a promise.
 */
@Injectable()
export class SuccessModalService {
  constructor(private modalService: NgbModal, private state: SuccessModalState) { }

  /**
   * Opens a login modal
   * @param options the options for the modal
   */
  open(options: any): Promise<any> {
    this.state.options = options;
    this.state.modal = this.modalService.open(this.state.template, {
      windowClass: 'twog-modal login-modal',
      backdropClass: 'light-blue-backdrop',
      centered: true,
    });

    return this.state?.modal?.result;
  }

  close(): void {
    this.state?.modal?.close();
  }

  getModalState(): any {
    return this.state;
  }
}

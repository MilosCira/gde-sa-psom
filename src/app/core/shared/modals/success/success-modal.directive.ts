import { Directive, TemplateRef } from '@angular/core';
import { SuccessModalState } from './success-modal.state';

/**
 * Directive allowing to get a reference to the template containing the login modal component,
 * and to store it into the internal confirm state service. Somewhere in the view, there must be
 *
 * ```
 * <ng-template success>
 *   <axel-success></axel-success>
 * </ng-template>
 * ```
 *
 * in order to register the login template to the internal login state
 */
@Directive({
  selector: '[success]',
})
export class SuccessModalDirective {
  constructor(
    modalTemplate: TemplateRef<any>,
    private state: SuccessModalState
  ) {
    this.state.template = modalTemplate;
  }
}

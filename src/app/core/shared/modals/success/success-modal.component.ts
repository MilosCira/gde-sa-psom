import { Component } from '@angular/core';
import { SuccessModalState } from './success-modal.state';


@Component({
  selector: 'app-success',
  templateUrl: 'success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent {
  // ICONS


  options: any;
  //joinTourMsg: string = 'You successfully applied to join tournament.';
  //joinTourMsgDeutsch: string = 'Du hast dich erfolgreich registriert.';
  //leaveTourMsg: string = "You succesfully left tournament";
  //leaveTourMsgDeutsch: string;

  constructor(private state: SuccessModalState) {
    this.options = this.state.options;
  }

  closeModal() {
    this.state.modal.close();
  }
}

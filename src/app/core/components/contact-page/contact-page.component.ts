import { SuccessModalService } from 'src/app/core/shared/modals/success/success-modal.service';
import { Component, OnInit } from '@angular/core';
import { ContactPageService } from './contact-page.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private contactS: ContactPageService,
    private fb: FormBuilder,
    private successS: SuccessModalService
  ) { }

  ngOnInit(): void {
    this.initContactForm();
  }
  initContactForm() {
    this.contactForm = this.fb.group({
      subject: ['', [Validators.required]],
      from: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  sendEmail(data: any) {
    console.log(data.value);

    const sendData = {
      ...data.value
    }

    this.contactS.sendEmail(sendData).subscribe((res) => {
      console.log(res);

      if (res?.mess === 'ok') {
        this.successS.open({ text: 'success' }).then(
          () => {
            this.contactForm.reset();
          }
        )
      }
    });
  }
}

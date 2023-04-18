import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCaffeModalService } from './add-caffe.service';

@Component({
  selector: 'app-add-caffe-modal',
  templateUrl: './add-caffe-modal.component.html',
  styleUrls: ['./add-caffe-modal.component.scss'],
})
export class AddCaffeModalComponent implements OnInit {
  createCatering: FormGroup;
  imgModal: any
  imgModalInside: any
  fileImg: any
  fileImageInside: any | null
  constructor(
    private addCaffeService: AddCaffeModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }
  private initLoginForm(): void {
    this.createCatering = this.fb.group({
      iuo_ime: [null, [Validators.required]],
      iuo_adressa: [null, Validators.compose([Validators.required])],
      iuo_link_web: [null, Validators.compose([Validators.required])],
      iuo_slika: [null, Validators.compose([Validators.required])],
      iuo_slika_unutra: [null],
      ops_id: [1, Validators.compose([Validators.required])],
      ugo_id: [1, Validators.compose([Validators.required])],
      sta_id: [1, Validators.compose([Validators.required])],
      bas_id: [1, Validators.compose([Validators.required])],

    });
  }
  handleUpload(event?: any) {

    const img = event?.target?.files[0];
    this.fileImg = img;
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      console.log(reader);
      this.imgModal = reader.result
    };

  }
  handleUploadInside(event?: any) {
    // console.log(event);

    const img = event?.target?.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      console.log(reader);
      this.imgModalInside = reader.result
    };

  }

  submitForm(value: any) {

    const data = {
      ...value?.value,
      iuo_slika: this.imgModal,
      iuo_slika_unutra: this.imgModalInside
    }

    console.log(data);

    this.addCaffeService.suggestCatering(data).subscribe((res) => {
      console.log(res);

    })

  }
  close() {
    this.addCaffeService.close();
  }
}

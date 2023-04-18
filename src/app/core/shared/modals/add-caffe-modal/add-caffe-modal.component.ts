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
  fileImg: any
  name: any
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
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imgModal = reader.result as string;

        ;

      };

    }
  }
  //Gets called when the user selects an image
  public onFileChanged(event?: any) {
    //Select File
    this.fileImg = event.target.files[0];
    console.log(this.fileImg);

    // const uploadImageData = new FormData();
    // uploadImageData.append('iuo_slika', event.target.files[0]);
  }

  handleUpload(event?: any) {
    // console.log(event);

    // this.fileImg = event?.target?.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileImg);
    reader.onload = () => {
      console.log(reader);
      this.imgModal = reader.result
      // console.log(reader.result);
    };

  }
  getFileModal(e: any) {
    let files: File[] = e.files;
    if (files.length < 1) {
      return;
    }

    let file = files[0];
    this.imgModal = file;

  }
  submitForm(value: any) {

    const data = {
      ...value?.value,
      // iuo_slika: this.fileImg?.name
    }

    console.log(data);

    this.addCaffeService.addCatering(data).subscribe((res) => {
      console.log(res);

    })

  }
  close() {
    this.addCaffeService.close();
  }
}

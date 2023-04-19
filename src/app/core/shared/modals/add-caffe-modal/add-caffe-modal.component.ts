import { AddCaffeModalState } from './add-caffe.state';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CateringService } from 'src/app/core/components/catering-facilities/caterign-facilities.service';
import { SuccessModalService } from '../success/success-modal.service';
import { AddCaffeModalService } from './add-caffe.service';

@Component({
  selector: 'app-add-caffe-modal',
  templateUrl: './add-caffe-modal.component.html',
  styleUrls: ['./add-caffe-modal.component.scss'],
})
export class AddCaffeModalComponent implements OnInit {
  @Input() editMode: boolean = false;
  createCatering: FormGroup;
  imgModal: any;
  imgModalInside: any;
  fileImg: any;
  fileImageInside: any | null;
  dogSize: any;
  town: any;
  garden: any;
  cFacilities: any;
  options: any;
  constructor(
    private addCaffeService: AddCaffeModalService,
    private fb: FormBuilder,
    private cService: CateringService,
    private succesModal: SuccessModalService,
    private state: AddCaffeModalState
  ) {
    this.options = this.state.options;
  }

  ngOnInit(): void {

    if (this.editMode) {
      this.imgModal = this.options?.dataArr.slika;
      this.imgModalInside = this.options?.dataArr.slika_unutra;
    }
    this.initLoginForm();
    this.getMultiDataDrop();
  }
  private initLoginForm(): void {
    this.createCatering = this.fb.group({
      iuo_ime: [this.editMode ? this.options?.dataArr?.name : null, [Validators.required]],
      iuo_adressa: [this.editMode ? this.options?.dataArr?.address : null, Validators.compose([Validators.required])],
      iuo_link_web: [this.editMode ? this.options?.dataArr?.link : null, Validators.compose([Validators.required])],
      iuo_slika: [this.editMode ? this.options?.dataArr?.slika : null, Validators.compose([Validators.required])],
      iuo_slika_unutra: [this.editMode ? this.options?.dataArr?.slika_unutra : null],
      ops_id: [this.editMode ? this.options?.dataArr?.ops_id : null, Validators.compose([Validators.required])],
      ugo_id: [this.editMode ? this.options?.dataArr?.ugo_id : null, Validators.compose([Validators.required])],
      sta_id: [this.editMode ? this.options?.dataArr?.sta_id : null, Validators.compose([Validators.required])],
      bas_id: [this.editMode ? this.options?.dataArr?.bas_id : null, Validators.compose([Validators.required])],
    });
  }
  handleUpload(event?: any) {
    const img = event?.target?.files[0];
    this.fileImg = img;
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      console.log(reader);
      this.imgModal = reader.result;
    };
  }
  handleUploadInside(event?: any) {
    // console.log(event);

    const img = event?.target?.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      console.log(reader);
      this.imgModalInside = reader.result;
    };
  }
  getMultiDataDrop() {
    this.cService.getAllSizeOfDogs().subscribe((res) => {
      this.dogSize = res?.starost;
    });
    this.cService.getAllPlaces().subscribe((res) => {
      this.cFacilities = res?.ugo;
    });
    this.cService.getAllTown().subscribe((res) => {
      this.town = res?.opstina;
    });
    this.cService.getGarden().subscribe((res) => {
      this.garden = res?.basta;
    });
  }

  submitFormUpdate(value: any) {
    console.log(value?.value);

    const data = {
      ...value?.value,
      iuo_slika_base64: this.imgModal,
      iuo_slika_base64_unutra: this.imgModalInside,
      sid: localStorage.getItem('sid'),
      iuo_id: this.options?.dataArr?.iuo_id
    };
    console.log(data);

    this.addCaffeService.updateCatering(data).subscribe((res) => {

      this.succesModal.open({ text: res?.message }).then(
        () => {
          // manual  close handler
          this.createCatering.reset();
          this.close();
        },
        () => {
          // backdrop click handler
        }
      ),
        (error: any) => {
          error;
        };
    });
  }
  submitForm(value: any) {
    const data = {
      ...value?.value,
      iuo_slika: this.imgModal,
      iuo_slika_unutra: this.imgModalInside ? this.imgModalInside : null,
    };

    this.addCaffeService.suggestCatering(data).subscribe((res) => {
      this.createCatering.reset();
      this.close();
      this.succesModal.open({ text: res?.mess }).then(
        () => {
          // manual  close handler

        },
        () => {
          // backdrop click handler
        }
      ),
        (error: any) => {
          error;
        };
    });
  }
  close() {
    this.addCaffeService.close();
  }
}

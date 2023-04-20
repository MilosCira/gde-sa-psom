import { AddCaffeModalService } from 'src/app/core/shared/modals/add-caffe-modal/add-caffe.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SuccessModalService } from 'src/app/core/shared/modals/success/success-modal.service';
import { CateringService } from '../../catering-facilities/caterign-facilities.service';

@Component({
  selector: 'app-edit-catering-facilities',
  templateUrl: './edit-catering-facilities.component.html',
  styleUrls: ['./edit-catering-facilities.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditCateringFacilitiesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize: any;
  caterings: any;
  constructor(
    private cService: CateringService,
    private successModalS: SuccessModalService,
    private addCaffeSer: AddCaffeModalService
  ) {
    // this.refreshCaterings();
  }

  ngOnInit(): void {
    this.getCaterings();
  }
  editCatering(data: any) {

    const dataArr = {
      name: data?.iuo_ime,
      address: data?.iuo_adressa,
      link: data?.iuo_link_web,
      slika: data?.iuo_slika_base64,
      slika_unutra: data?.iuo_slika_base64_unutra,
      sta_id: data?.sta_id,
      bas_id: data?.bas_id,
      ugo_id: data?.ugo_id,
      ops_id: data?.ops_id,
      iuo_id: data?.iuo_id
    };
    this.addCaffeSer.open({ dataArr });
  }
  deleteCatering(data: any) {
    const datas = {
      iuo_id: data?.iuo_id,
      sid: localStorage.getItem('sid'),
    };

    this.cService.deleteCatering(datas).subscribe((res) => {
      this.successModalS.open({ text: 'Uspesno obrisan kafic' }).then(() => {
        this.getCaterings();
      });
    });
  }
  getCaterings() {
    this.cService.getLimitCatering().subscribe((res) => {
      this.caterings = res?.objekat2;
    });
  }
}

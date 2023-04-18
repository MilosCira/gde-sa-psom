import { Component, OnInit } from '@angular/core';
import { CateringService } from '../../catering-facilities/caterign-facilities.service';
import { CateringQuery } from '../../catering-facilities/state/catering-query';
import { CateringStore } from '../../catering-facilities/state/catering.store';

@Component({
  selector: 'app-edit-catering-facilities',
  templateUrl: './edit-catering-facilities.component.html',
  styleUrls: ['./edit-catering-facilities.component.scss']
})
export class EditCateringFacilitiesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize: any;
  caterings: any;
  constructor(private cService: CateringService,) {

    // this.refreshCaterings();
  }

  ngOnInit(): void {

    this.getCaterings();

  }

  getCaterings() {
    this.cService.getLimitCatering().subscribe((res) => {
      console.log(res);
      this.collectionSize = res?.objekat2?.length
      this.caterings = res?.objekat2

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ImageBase64Service } from '../../interceptor/utils/base64.converter';
import { CateringService } from './caterign-facilities.service';
import { CateringQuery } from './state/catering-query';

@Component({
  selector: 'app-catering-facilities',
  templateUrl: './catering-facilities.component.html',
  styleUrls: ['./catering-facilities.component.scss'],
})
export class CateringFacilitiesComponent implements OnInit {
  constructor(private cs: CateringService, private cat: CateringQuery) { }
  allCateringFacilties: any;
  countNumber: number | undefined;
  limitNumber = 10;
  searchWord: string = '';
  ngOnInit(): void {
    // this.allCateringFacilties = this.cat.getAll()[0]
    this.count();
    this.getCateringFacilities();
  }

  count() {
    this.cs.getCount().subscribe((res) => {
      this.countNumber = res?.count?.broj;
    });
  }
  searchCateringFacilities(word: string) {
    this.cs.searchCatering(word).subscribe((res) => {
      this.allCateringFacilties = res?.search_result;
    });
  }

  getCateringFacilities() {
    this.cs.getLimitCatering(this.limitNumber).subscribe((res) => {
      this.allCateringFacilties = res?.objekat2;
    });
  }

  showMore() {
    this.limitNumber += 10;
    this.cs.getLimitCatering(this.limitNumber).subscribe((res) => {
      this.allCateringFacilties = res?.objekat2;
    });
  }
}

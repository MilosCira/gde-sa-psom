import { Component, OnInit } from '@angular/core';
import { ImageBase64Service } from '../../interceptor/utils/base64.converter';
import { CateringService } from './caterign-facilities.service';
import { CateringQuery } from './state/catering-query';

@Component({
  selector: 'app-catering-facilities',
  templateUrl: './catering-facilities.component.html',
  styleUrls: ['./catering-facilities.component.scss']
})
export class CateringFacilitiesComponent implements OnInit {

  constructor(private cs: CateringService, private cat: CateringQuery) { }
  allCateringFacilties: any;
  ngOnInit(): void {
    this.allCateringFacilties = this.cat.getAll()[0]
  }



}

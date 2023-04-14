import { Component, OnInit } from '@angular/core';
import { ImageBase64Service } from '../../interceptor/utils/base64.converter';
import { CateringService } from './caterign-facilities.service';

@Component({
  selector: 'app-catering-facilities',
  templateUrl: './catering-facilities.component.html',
  styleUrls: ['./catering-facilities.component.scss']
})
export class CateringFacilitiesComponent implements OnInit {

  constructor(private cs: CateringService, public imgServ: ImageBase64Service) { }
  allCateringFacilties: any;
  ngOnInit(): void {
    this.getAllCateringF();
  }
  getAllCateringF() {
    this.cs.getAllCateringFacilties().subscribe((res) => {
      console.log(res);
      this.allCateringFacilties = res;

    })

  }
}

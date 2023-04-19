import { Component, OnInit } from '@angular/core';
import { ImageBase64Service } from 'src/app/core/interceptor/utils/base64.converter';
import { CateringService } from '../../catering-facilities/caterign-facilities.service';

@Component({
  selector: 'app-suggested-catering-facilities',
  templateUrl: './suggested-catering-facilities.component.html',
  styleUrls: ['./suggested-catering-facilities.component.scss'],
})
export class SuggestedCateringFacilitiesComponent implements OnInit {
  constructor(
    private cService: CateringService,
    public imgServ: ImageBase64Service
  ) { }
  public randomCateringFacilties: any;
  ngOnInit(): void {
    this.getRandomCF();
  }
  getRandomCF() {
    this.cService.getRandomCateringFacilties().subscribe((res) => {
      this.randomCateringFacilties = res;
    });
  }
}

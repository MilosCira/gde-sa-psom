import { Component, OnInit } from '@angular/core';
import { ImageBase64Service } from 'src/app/core/interceptor/utils/base64.converter';
import { CateringService } from '../../catering-facilities/caterign-facilities.service';
import { Observable } from 'rxjs';

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
  public randomCateringFacilties$: Observable<any>;
  ngOnInit(): void {
    this.getRandomCF();
  }
  getRandomCF() {
    this.randomCateringFacilties$ = this.cService.getRandomCateringFacilties();
  }
}

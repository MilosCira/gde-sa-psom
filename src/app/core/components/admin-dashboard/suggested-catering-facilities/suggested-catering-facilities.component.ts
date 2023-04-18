import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ImageBase64Service } from 'src/app/core/interceptor/utils/base64.converter';
import { CateringService } from '../../catering-facilities/caterign-facilities.service';

@Component({
  selector: 'app-suggested-catering-facilities',
  templateUrl: './suggested-catering-facilities.component.html',
  styleUrls: ['./suggested-catering-facilities.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuggestedCateringFacilitiesComponent implements OnInit {
  suggested: any;
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | any;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  message: string;
  constructor(private cs: CateringService, public imSer: ImageBase64Service) { }

  ngOnInit(): void {
    this.getSuggested()
  }

  declineCatering(pr_id: number) {
    const declineData = {
      pr_id: pr_id,
      sid: localStorage.getItem('sid')
    }
    console.log(declineData);

    this.cs.declineCatering(declineData).subscribe((res) => {
      this.getSuggested()
      console.log(res);
      this.message = res?.delete;
      setTimeout(() => {
        this.message = ''
      }, 6000);
    })
  }
  sendData(data: any) {
    const dataValue = {
      pr_id: data?.pr_id,
      iuo_slika_base64: data?.iuo_slika,
      iuo_slika_base64_unutra: data?.iuo_slika_unutra,
      iuo_ime: data?.iuo_ime,
      ops_id: data?.ops_id,
      bas_id: data?.bas_id,
      ugo_id: data?.ugo_id,
      sta_id: data.sta_id,
      iuo_adressa: data?.iuo_adressa,
      iuo_link_web: data?.iuo_link_web,
      sid: localStorage.getItem('sid')
    }
    this.cs.acceptCatering(dataValue).subscribe((res) => {
      console.log(res);

      this.getSuggested();

    })
    console.log(dataValue);


  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  getSuggested() {
    this.cs.getSuggestedCaterings().subscribe((res) => {
      this.suggested = res?.obj;
      console.log(res);

    })
  }
}

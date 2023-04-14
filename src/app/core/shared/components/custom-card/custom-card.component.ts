import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCardComponent implements OnInit {
  @Input() nameOfObject: any;
  @Input() images: any = [];
  @Input() location: any;
  @Input() garden: any;
  @Input() sizeOfDog: any;
  @Input() siteLink: any;
  @Input() township: any;
  @Input() city: any;
  @Input() imagesInside: any;
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | any;
  images1 = [62].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  constructor() {

  }

  ngOnInit(): void {


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

}

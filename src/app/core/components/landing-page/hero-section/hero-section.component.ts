import { Component, OnInit } from '@angular/core';
import { AddCaffeModalService } from '../../../shared/modals/add-caffe-modal/add-caffe.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor(private addCaffeService: AddCaffeModalService,) { }

  ngOnInit(): void {
  }

  openModal() {

    this.addCaffeService.open();
  }

}

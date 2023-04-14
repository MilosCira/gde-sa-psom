import { Component, OnInit } from '@angular/core';
import { AddCaffeModalService } from 'src/app/core/shared/modals/add-caffe-modal/add-caffe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private addCaffeService: AddCaffeModalService,) { }

  ngOnInit(): void {
  }
  openModal() {

    this.addCaffeService.open();
  }
}

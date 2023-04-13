import { Component, OnInit } from '@angular/core';
import { AddCaffeModalService } from './add-caffe.service';

@Component({
  selector: 'app-add-caffe-modal',
  templateUrl: './add-caffe-modal.component.html',
  styleUrls: ['./add-caffe-modal.component.scss'],

})
export class AddCaffeModalComponent implements OnInit {

  constructor(private addCaffeService: AddCaffeModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.addCaffeService.close()
  }

}

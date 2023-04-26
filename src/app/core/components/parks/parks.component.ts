import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkService } from './parks.service';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})
export class ParksComponent implements OnInit {
  parks: any
  constructor(private parkS: ParkService) { }

  ngOnInit(): void {
    this.getParks()
  }
  getParks() {
    this.parkS.getParks().subscribe((res) => {
      console.log(res);

      this.parks = res?.parks
    });
  }
}

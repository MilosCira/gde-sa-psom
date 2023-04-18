import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}

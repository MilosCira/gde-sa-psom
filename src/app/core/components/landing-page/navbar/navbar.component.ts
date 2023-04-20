import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCaffeModalService } from 'src/app/core/shared/modals/add-caffe-modal/add-caffe.service';
import { LoginService } from '../../admin-dashboard/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showLogout: boolean = false;
  constructor(
    private addCaffeService: AddCaffeModalService,
    private loginS: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('sid')) {
      this.showLogout = true
    } else {
      this.showLogout = false;
    }
  }
  logout() {
    this.loginS.loguout().subscribe((res) => {
      this.router.navigate(['/']);
      // window.location.reload();
      localStorage.removeItem('sid');
    });
  }
  openModal() {
    this.addCaffeService.open();
  }
}

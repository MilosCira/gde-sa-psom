import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  constructor(private loginS: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  loginSubmit() {
    this.loginS.login(this.email, this.password).subscribe((res: any) => {
      localStorage.setItem('sid', res?.sid);
      this.router.navigate(['admin']);
    })
  }
}

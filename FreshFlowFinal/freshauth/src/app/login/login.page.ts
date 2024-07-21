import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  alertMessage: string = '';

  constructor(private authService: AuthserviceService, private router: Router) { }

  ngOnInit() { }

  async login() {
    this.alertMessage = '';

    try {
      const credentials = { Username: this.username, Password: this.password };
      const res = await this.authService.login(credentials).toPromise();
      localStorage.setItem('token', res.token); // Store token in localStorage or secure storage
      this.router.navigate(['/home']); // Navigate to home page after successful login
    } catch (err: any) {
      this.alertMessage = err.error.Message || 'Login failed. Please try again.';
    }
  }
}

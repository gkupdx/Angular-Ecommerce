import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Forms';
import { AuthService } from 'src/app/services/auth.service';
import { fadeInSlow, slideDownSlow } from 'src/app/utilities/animations';

import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    fadeInSlow,
    slideDownSlow,
  ],
})
export class LandingComponent {
  form: LoginForm = {
    email: '',
    password: '',
  }
  isLoginSuccess: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  isLoading() {
    return this.authService.isLoading;
  }

  loginSubmit() {
    // this.authService.login(this.form);
    // this.isLoginSuccess = this.authService.isAuthenticated;

    /* FOR TESTING PURPOSES */
    this.authService.isAuthenticated = true;
    this.router.navigate(['store']);
  }
}

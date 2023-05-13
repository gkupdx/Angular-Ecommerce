import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Forms';
import { AuthService } from 'src/app/services/auth.service';
import { fadeInSlow, slideDown, slideDownSlow } from 'src/app/utilities/animations';

import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    fadeInSlow,
    slideDown,
    slideDownSlow,
  ],
})
export class LandingComponent {
  form: LoginForm = {
    email: '',
    password: '',
  }
  currentForm: string = 'Login';

  constructor(private authService: AuthService, private router: Router) {}

  isLoading() {
    return this.authService.isLoading;
  }

  isLoginSuccess() {
    return this.authService.isLoginSuccess;
  }

  showForm(form: string) {
    this.currentForm = form;
  }

  formUpdateHandler(newValue: any) {
    this.currentForm = newValue;
  }

  loginSubmit() {
    this.authService.login(this.form);

    // /* FOR TESTING PURPOSES */
    // this.authService.isAuthenticated = true;
    // this.router.navigate(['store']);
  }
}

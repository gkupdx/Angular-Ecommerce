import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Forms';
import { AuthService } from 'src/app/services/auth.service';
import { fadeInSlow, slideDownSlow } from 'src/app/utilities/animations';

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

  constructor(private authService: AuthService) {}

  isLoading() {
    return this.authService.isLoading;
  }

  loginSubmit() {
    this.authService.login(this.form);
  }
}

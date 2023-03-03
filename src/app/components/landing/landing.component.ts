import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
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

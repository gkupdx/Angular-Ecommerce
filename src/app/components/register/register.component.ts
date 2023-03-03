import { Component } from '@angular/core';
import { RegForm } from 'src/app/interfaces/Forms';
import { AuthService } from 'src/app/services/auth.service';
import { slideIn } from 'src/app/utilities/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    slideIn,
  ],
})
export class RegisterComponent {
  form: RegForm = {
    email: '',
    password: '',
    passConfirm: '',
  }

  constructor(private authService: AuthService) {}

  isLoading() {
    return this.authService.isLoading;
  }

  regSubmit() {
    this.authService.register(this.form);
  }
}

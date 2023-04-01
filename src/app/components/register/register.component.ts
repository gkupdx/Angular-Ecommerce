import { Component } from '@angular/core';
import { RegForm } from 'src/app/interfaces/Forms';
import { AuthService } from 'src/app/services/auth.service';
import { slideIn, slideDown } from 'src/app/utilities/animations';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    slideIn,
    slideDown,
  ],
})
export class RegisterComponent {
  form: RegForm = {
    email: '',
    password: '',
    passConfirm: '',
  }
  doPasswordsMatch: boolean = true;
  xmark = faXmark;

  constructor(private authService: AuthService) {}

  isLoading() {
    return this.authService.isLoading;
  }

  regSubmit() {
    if (this.form.password !== this.form.passConfirm) {
      this.doPasswordsMatch = false;
      return;
    }
    this.authService.register(this.form);
  }
}

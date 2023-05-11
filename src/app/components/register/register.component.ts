import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RegForm } from 'src/app/interfaces/Forms';
import { AuthService } from 'src/app/services/auth.service';
import { slideIn, slideDown } from 'src/app/utilities/animations';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
  @Output() formUpdateEmitter = new EventEmitter<string>;
  form: RegForm = {
    email: '',
    password: '',
    passConfirm: '',
  }
  doPasswordsMatch: boolean = true;
  arrowLeft = faArrowLeft;
  xmark = faXmark;

  constructor(private authService: AuthService, private router: Router) {}

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

  goToHome() {
    this.formUpdateEmitter.emit('Login');
  }
}

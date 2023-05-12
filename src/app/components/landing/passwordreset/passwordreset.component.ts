import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface PwdResetForm {
  email: string,
}

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css'],
  animations: [
    slideIn,
  ]
})
export class PasswordresetComponent {
  @Output() formUpdateEmitter = new EventEmitter<string>;
  form: PwdResetForm = {
    email: '',
  }
  isLinkSent: boolean = false;
  arrowLeft = faArrowLeft;

  constructor(private authService: AuthService) {}

  isLoading() {
    return this.authService.isLoading;
  }

  pwdResetSubmit() {
    this.isLinkSent = true;
    this.authService.resetPassword(this.form);
  }

  goToHome() {
    this.formUpdateEmitter.emit('Login');
  }
}

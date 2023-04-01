import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { UpdatePassForm } from 'src/app/interfaces/Forms';
import { slideIn, slideDown } from 'src/app/utilities/animations';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css'],
  animations: [
    slideIn,
    slideDown,
  ]
})
export class PasswordchangeComponent {
  form: UpdatePassForm = {
    newPassword: '',
    passConfirm: '',
  }
  updateSuccess: boolean = false;
  backArrow = faArrowLeft;
  checkmark = faCheck;

  constructor(private location: Location, private authService: AuthService) {}

  pwdChangeSubmit() {
    this.updateSuccess = this.authService.updatePassword(this.form);
  }

  goToPrev() {
    this.location.back();
  }
}

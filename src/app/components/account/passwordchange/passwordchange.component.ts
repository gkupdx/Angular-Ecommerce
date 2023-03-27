import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UpdatePassForm } from 'src/app/interfaces/Forms';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css'],
  animations: [
    slideIn,
  ]
})
export class PasswordchangeComponent {
  form: UpdatePassForm = {
    currPassword: '',
    newPassword: '',
    passConfirm: '',
  }
  backArrow = faArrowLeft;

  constructor(private location: Location) {}

  goToPrev() {
    this.location.back();
  }
}

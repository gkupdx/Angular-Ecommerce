import { Component } from '@angular/core';
import { UpdatePassForm } from 'src/app/interfaces/Forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { fadeIn, slideIn, slideDown } from 'src/app/utilities/animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  animations: [
    fadeIn,
    slideIn,
    slideDown,
  ],
})
export class AccountComponent {
  isMembershipActive: boolean = true;
  form: UpdatePassForm = {
    currPassword: '',
    newPassword: '',
    passConfirm: '',
  }

  constructor(private authService: AuthService, private router: Router) {}

  goToStore() {
    this.router.navigate(['store']);
  }

  logout() {
    // this.authService.logout();
    this.authService.isAuthenticated = false;
    this.router.navigate(['']);
  }
}

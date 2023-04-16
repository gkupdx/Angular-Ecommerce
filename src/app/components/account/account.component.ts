import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { slideIn } from 'src/app/utilities/animations';
import { activateMembership, deactivateMembership } from 'src/app/state/account.actions';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  animations: [
    slideIn,
  ],
})
export class AccountComponent {
  membershipState$: Observable<boolean>;
  membershipVal: boolean = false;
  userEmail: string | null | undefined = '';
  arrowLeft = faArrowLeft;

  constructor(private store: Store<{ membershipState: boolean }>, private authService: AuthService, private router: Router) {
    this.membershipState$ = store.select('membershipState');
    this.membershipState$.subscribe((value: boolean) => {
      this.membershipVal = value;
      console.log(this.membershipVal);
    });
    this.userEmail = this.authService.getUserEmail();
  }

  changePassword() {
    this.router.navigate(['pwdchange']);
  }

  changeMembership() {
    this.membershipVal ? this.store.dispatch(deactivateMembership()) : this.store.dispatch(activateMembership());
  }

  logout() {
    // this.authService.logout();
    this.authService.isAuthenticated = false;
    this.router.navigate(['']);
  }

  goToStore() {
    this.router.navigate(['store']);
  }
}

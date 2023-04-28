import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { ModalComponent } from '../modal/modal.component';

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

  constructor(private store: Store<{ membershipState: boolean }>, private authService: AuthService, private router: Router, private dialog: MatDialog) {
    this.membershipState$ = store.select('membershipState');
    this.membershipState$.subscribe((value: boolean) => {
      this.membershipVal = value;
    });
    this.userEmail = this.authService.getUserEmail();
  }

  changePassword() {
    this.router.navigate(['pwdchange']);
  }

  changeMembership() {
    this.openModal();
  }

  openModal() {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      height: '200px',
      panelClass: 'modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  goToStore() {
    this.router.navigate(['store']);
  }

  logout() {
    // this.authService.logout();
    this.authService.isAuthenticated = false;
    this.router.navigate(['']);
  }
}

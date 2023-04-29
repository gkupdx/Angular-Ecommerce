import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { activateMembership, deactivateMembership } from 'src/app/state/account.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  membershipState$: Observable<boolean>;
  membershipVal: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean, private dialogRef: MatDialogRef<ModalComponent>, private store: Store<{ membershipState: boolean }>,
  private router: Router, private authService: AuthService, private menuService: MenuService) {
    this.membershipState$ = store.select('membershipState');
    this.membershipState$.subscribe((value: boolean) => {
      this.membershipVal = value;
    })
  }

  activate() {
    this.store.dispatch(activateMembership());
    this.dialogRef.close();
  }

  deactivate() {
    this.store.dispatch(deactivateMembership());
    this.dialogRef.close();
  }

  confirmLogout() {
    // this.authService.logout();
    this.authService.isAuthenticated = false;
    this.menuService.toggleMenuPanel();
    this.dialogRef.close();
    this.router.navigate(['']);
  }

  closeModal() {
    this.dialogRef.close();
  }
}

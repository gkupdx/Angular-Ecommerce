import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { activateMembership, deactivateMembership } from 'src/app/state/account.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  membershipState$: Observable<boolean>;
  membershipVal: boolean;

  constructor(private dialogRef: MatDialogRef<ModalComponent>, private store: Store<{ membershipState: boolean }>) {
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

  closeModal() {
    this.dialogRef.close();
  }
}

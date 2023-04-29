import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu.service';
import { slideDownSlow } from 'src/app/utilities/animations';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  animations: [
    slideDownSlow,
  ]
})
export class PanelComponent {
  cancelIcon = faXmark;

  constructor(private menuService: MenuService, private router: Router, private dialog: MatDialog) {}

  hideMenuPanel() {
    this.menuService.toggleMenuPanel();
  }

  goToAccount() {
    this.menuService.toggleMenuPanel();
    this.router.navigate(['account']);
  }

  requestLogout() {
    this.openModal();
  }

  openModal() {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      height: '200px',
      data: { logout: false },
      panelClass: 'modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}

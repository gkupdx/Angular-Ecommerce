import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';
import { slideDownSlow } from 'src/app/utilities/animations';
import { faBars, faCartShopping, faUserGear, faHeadset, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    slideDownSlow,
  ],
})
export class NavbarComponent {
  browserWidth: number = window.innerWidth;
  cartItemLength: number = 0;
  menuIcon = faBars;
  cartIcon = faCartShopping;
  userIcon = faUserGear;
  contactIcon = faHeadset;
  logoutIcon = faArrowRightFromBracket;

  constructor(private cartService: CartService, private menuService: MenuService, private router: Router, private dialog: MatDialog) {
    this.cartItemLength = this.cartService.getCartLength();
  }

  @HostListener('window:resize', ['$event'])
    detectResize(event: any) {
      this.browserWidth = event.target.innerWidth;
    }

  isPanelOpen() {
    return this.menuService.isMenuOpened;
  }

  showMenuPanel() {
    this.menuService.toggleMenuPanel();
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  goToAccount() {
    this.router.navigate(['account']);
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

  requestLogout() {
    this.openModal();
  }

  openModal() {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      height: '200px',
      data: { logout: false },
      panelClass: 'modal'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  isCartNonEmpty() {
    this.cartItemLength = this.cartService.cartItems.length;
    return this.cartItemLength;
  }
}

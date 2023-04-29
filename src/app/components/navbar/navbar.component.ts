import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';
import { slideDownSlow } from 'src/app/utilities/animations';
import { faBars, faCartShopping, faUserGear } from '@fortawesome/free-solid-svg-icons';

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
  userGearIcon = faUserGear;

  constructor(private cartService: CartService, private menuService: MenuService, private router: Router) {
    this.cartItemLength = this.cartService.getCartLength();
  }

  isPanelOpen() {
    return this.menuService.isMenuOpened;
  }

  showMenuPanel() {
    this.menuService.toggleMenuPanel();
  }

  showCart() {
    this.router.navigate(['cart']);
  }

  isCartNonEmpty() {
    this.cartItemLength = this.cartService.cartItems.length;
    return this.cartItemLength;
  }
}

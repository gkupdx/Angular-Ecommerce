import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { slideDownSlow } from 'src/app/utilities/animations';
import { faCartShopping, faUserGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    slideDownSlow,
  ],
})
export class NavbarComponent {
  cartItemLength: number = 0;
  cartIcon = faCartShopping;
  userGearIcon = faUserGear;

  constructor(private cartService: CartService) {
    this.cartItemLength = this.cartService.getCartLength();
  }

  isCartNonEmpty() {
    this.cartItemLength = this.cartService.cartItems.length;
    return this.cartItemLength;
  }
}

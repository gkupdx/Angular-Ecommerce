import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { slideIn } from 'src/app/utilities/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    slideIn,
  ]
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  getCartInfo() {
    return this.cartService.getCart();
  }

  getCartTotal() {
    return this.cartService.calculateTotal();
  }
}

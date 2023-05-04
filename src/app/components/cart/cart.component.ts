import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    slideIn,
  ]
})
export class CartComponent {
  cartState: string = 'non-empty';
  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;

  constructor(private router: Router, private cartService: CartService) {}

  getCartInfo() {
    return this.cartService.getCart();
  }

  getCartTotal() {
    return this.cartService.calculateTotal();
  }

  emptyTheCart() {
    this.cartState = 'empty';
    return this.cartService.emptyCart();
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

  goToStore() {
    this.router.navigate(['store']);
  }
}

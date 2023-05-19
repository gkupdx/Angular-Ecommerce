import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Firebase imports
import { getAuth } from 'firebase/auth';
import { database } from 'firebase.config';
import { ref, update, push } from 'firebase/database';

@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.css'],
  animations: [
    slideIn,
  ]
})
export class RevieworderComponent {
  orderKey: string | null = '';
  isLoading: boolean = false;
  isPurchaseSuccessful: boolean = false;
  backArrow = faArrowLeft;

  constructor(private cartService: CartService, private location: Location, private router: Router) {}

  getCartInfo() {
    return this.cartService.getCart();
  }

  getCartTotal() {
    return this.cartService.calculateTotal();
  }

  purchaseConfirm() {
    this.isLoading = true;

    const auth = getAuth();
    const user = auth.currentUser;
    const id = user?.uid;
    // const date = new Date().toLocaleDateString();
    // const orderDate = date.replace(/\//g, '.');
    const cartContents = this.cartService.getCart();
    const cartProductNames = cartContents.map((product) => product.name);
  
    if (user) {
      const reference = ref(database, `users/${id}/` + 'orders');
      const orderRef = push(reference, {
        orderProducts: cartProductNames,
      });
      this.orderKey = orderRef.key;  
    }

    // to simulate the flow of a real transaction, use a setTimeout()
    setTimeout(() => {
      this.cartService.emptyCart();
      this.isPurchaseSuccessful = true;
    }, 3000);
  }

  goToPrev() {
    this.location.back();
  }
}

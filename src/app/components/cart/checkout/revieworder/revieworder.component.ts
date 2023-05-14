import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { database } from 'firebase.config';
// import { ref, set } from 'firebase/database';

@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.css'],
  animations: [
    slideIn,
  ]
})
export class RevieworderComponent {
  isLoading: boolean = false;
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

    // to simulate the flow of a real transaction, use a setTimeout()
    setTimeout(() => {
      this.cartService.emptyCart();
      this.router.navigate(['ordercomplete']);
    }, 3000);
  }

  goToPrev() {
    this.location.back();
  }
}

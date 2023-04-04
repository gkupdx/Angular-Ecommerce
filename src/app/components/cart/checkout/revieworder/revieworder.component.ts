import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.css'],
  animations: [
    slideIn,
  ]
})
export class RevieworderComponent {
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
    setTimeout(() => {
      this.isPurchaseSuccessful = true;
      this.router.navigate(['ordercomplete']);
    }, 3000);
  }

  goToPrev() {
    this.location.back();
  }
}

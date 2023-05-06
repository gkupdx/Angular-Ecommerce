import { Component, HostListener } from '@angular/core';
import { NewRelease } from 'src/app/interfaces/Product';
import { CartProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { fadeInSlow } from 'src/app/utilities/animations';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css'],
  animations: [
    fadeInSlow,
  ]
})
export class NewreleaseComponent {
  browserWidth: number = window.innerWidth;
  cartProduct: CartProduct = {
    name: '',
    price: '',
    imgSrc: '',
    count: 0,
  };
  newProduct: NewRelease = {
    name: '',
    price: '',
    imgSrc: '',
    premiere: '',
  }
  isAddedToCart: boolean = false;
  isMembershipActive: boolean;
  checkmark = faCheck;

  constructor(private productService: ProductService, private cartService: CartService, private authService: AuthService) {
    this.newProduct = this.productService.getNewRelease();
    this.isMembershipActive = this.authService.isMembershipActive;
  }

  @HostListener('window:resize', ['$event'])
    detectResize(event: any) {
      this.browserWidth = event.target.innerWidth;
    }

  emitAddToCart() {
    this.cartProduct.name = this.newProduct.name;
    this.cartProduct.price = this.newProduct.price;
    this.cartProduct.imgSrc = this.newProduct.imgSrc;
    this.cartProduct.count = 1;

    this.isAddedToCart = true;

    this.cartService.addToCart(this.cartProduct);
  }
}

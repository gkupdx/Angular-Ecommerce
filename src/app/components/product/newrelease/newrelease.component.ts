import { Component } from '@angular/core';
import { NewRelease } from 'src/app/interfaces/Product';
import { CartProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { fadeInSlow } from 'src/app/utilities/animations';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css'],
  animations: [
    fadeInSlow,
  ]
})
export class NewreleaseComponent {
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

  constructor(private productService: ProductService, private cartService: CartService) {
    this.newProduct = this.productService.getNewRelease();
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

import { Component, Input } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interfaces/Product';
import { CartProduct } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {} as Product;
  cartProduct: CartProduct = {
    name: '',
    price: '',
    imgSrc: '',
    count: 0,
  };
  itemCount: number = 0;
  isAddedToCart: boolean = false;
  minusIcon = faMinus;
  plusIcon = faPlus;

  constructor(private cartService: CartService) {}

  emitAddToCart() {
    this.cartProduct.name = this.product.name;
    this.cartProduct.price = this.product.price;
    this.cartProduct.imgSrc = this.product.imgSrc;
    this.cartProduct.count = this.itemCount;

    this.isAddedToCart = true;

    this.cartService.addToCart(this.cartProduct);
  }

  decreaseCount() {
    if (this.itemCount === 0) return;
    this.itemCount -= 1;
  }

  increaseCount() {
    this.itemCount += 1;
  }
}

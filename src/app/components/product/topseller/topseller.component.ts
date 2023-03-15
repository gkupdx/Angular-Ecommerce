import { Component, Input } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interfaces/Product';
import { CartProduct } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { fadeInSlow } from 'src/app/utilities/animations';

@Component({
  selector: 'app-topseller',
  templateUrl: './topseller.component.html',
  styleUrls: ['./topseller.component.css'],
  animations: [
    fadeInSlow,
  ]
})
export class TopsellerComponent {
  @Input() product: Product = {} as Product;
  topProducts: Product[] = [];
  cartProduct: CartProduct = {
    name: '',
    price: '',
    imgSrc: '',
    count: 0,
  }
  itemCount: number = 0;
  isAddedToCart: boolean = false;
  minusIcon = faMinus;
  plusIcon = faPlus;

  constructor(private cartService: CartService, private productService: ProductService) {
    this.topProducts = this.productService.getTopProducts();
  }

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

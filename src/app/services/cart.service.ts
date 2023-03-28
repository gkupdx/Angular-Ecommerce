import { Injectable } from '@angular/core';
import { CartProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  isInCart: boolean = false;
  cartItems: CartProduct[] = [];

  constructor() { }

  addToCart(product: CartProduct) {
    this.cartItems.forEach((item) => {
      if (item.name === product.name) {
        item.count += product.count;
        this.isInCart = true;
        return;
      }
    })

    if (this.isInCart) return;
    this.cartItems.push(product);
  }

  removeFromCart(product: CartProduct) {
    this.cartItems = this.cartItems.filter((to_remove) => to_remove !== product)
  }

  getCart() {
    return this.cartItems;
  }

  emptyCart() {
    this.cartItems = [];
  }

  calculateTotal() {
    let total: number = 0;

    this.cartItems.forEach((item) => {
      total += Number(item.price) * item.count;
    })

    return total;
  }
}

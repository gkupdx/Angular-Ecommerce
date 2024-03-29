import { Injectable } from '@angular/core';
import { CartProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  isInCart: boolean = false; // flag to check & see if product was added to cart before
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

    this.isInCart === false ? this.cartItems.push(product) : this.isInCart = false;
  }

  removeFromCart(product: CartProduct) {
    this.cartItems = this.cartItems.filter((to_remove) => to_remove !== product)
  }

  getCart() {
    return this.cartItems;
  }

  getCartLength() {
    return this.cartItems.length;
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

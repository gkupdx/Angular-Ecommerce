import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { CartProduct } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';

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
  quantity: number = 1;
  isVisible: boolean = false;
  isAddedToCart: boolean = false;
  isMembershipActive: boolean;
  caretDownIcon = faCaretDown;
  checkmark = faCheck;

  constructor(private cartService: CartService, private authService: AuthService) {
    this.isMembershipActive = this.authService.isMembershipActive;
  }

  toggleQuantityOptions() {
    this.isVisible = !this.isVisible;
  }

  setQuantity(count: number) {
    this.quantity = count;
    this.isVisible = false;
  }

  emitAddToCart() {
    this.cartProduct.name = this.product.name;
    this.cartProduct.price = this.product.price;
    this.cartProduct.imgSrc = this.product.imgSrc;
    this.cartProduct.count = this.quantity;

    this.isAddedToCart = true;

    this.cartService.addToCart(this.cartProduct);
  }

}

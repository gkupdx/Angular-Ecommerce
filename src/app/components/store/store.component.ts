import { Component } from '@angular/core';
import { Product, NewRelease } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { fadeInSlow, slideDownSlow } from 'src/app/utilities/animations';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'], 
  animations: [
    fadeInSlow,
    slideDownSlow,
  ],
})
export class StoreComponent {
  storeItems: Product[] = [];
  newItem: NewRelease = {
    name: '',
    price: '',
    imgSrc: '',
    premiere: '',
  };

  // want to load up store with products on component creation
  constructor(private productService: ProductService) {
    // this.storeItems = this.productService.getProducts();
    this.newItem = this.productService.getNewRelease();
  }
}

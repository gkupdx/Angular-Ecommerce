import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { slideIn } from 'src/app/utilities/animations';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'], 
  animations: [
    slideIn,
  ],
})
export class StoreComponent {
  storeItems: Product[] = [];

  // want to load up store with products on component creation
  constructor(private productService: ProductService) {
    this.storeItems = this.productService.getProducts();
  }
}

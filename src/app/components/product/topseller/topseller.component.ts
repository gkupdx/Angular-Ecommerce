import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
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
  topProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.topProducts = this.productService.getTopProducts();
  }
}

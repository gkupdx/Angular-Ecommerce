import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { fadeInSlow } from 'src/app/utilities/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    fadeInSlow,
  ]
})
export class ProductsComponent implements OnChanges {
  @Input() filterPrice: string;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterPrice'].currentValue === 'Low -> Hi') {
      this.products = this.productService.getSortedProducts('L2H');
    } else if (changes['filterPrice'].currentValue === 'Hi -> Low') {
      this.products = this.productService.getSortedProducts('H2L');
    }
  }
}

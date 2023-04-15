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
  @Input() productName: string;
  searchedForProduct: Product;
  doesProductExist: boolean = false;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch (prop) {
          case 'filterPrice':
            if (changes['filterPrice'].currentValue === 'Low -> Hi') {
              this.products = this.productService.getSortedProducts('L2H');
            } else if (changes['filterPrice'].currentValue === 'Hi -> Low') {
              this.products = this.productService.getSortedProducts('H2L');
            }
            break;
          case 'productName':
            if (changes['productName'].currentValue !== '') {
              this.productName.toLowerCase();
              this.searchedForProduct = this.productService.getProductByName(this.productName);
              if (this.searchedForProduct.name !== '') this.doesProductExist = true;
            }
            break;
          default:
            return;
        }
      }
    }
  }
}

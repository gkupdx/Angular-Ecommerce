import { Component } from '@angular/core';
import { NewRelease } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { fadeInSlow } from 'src/app/utilities/animations';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css'],
  animations: [
    fadeInSlow,
  ]
})
export class NewreleaseComponent {
  newProduct: NewRelease = {
    name: '',
    price: '',
    imgSrc: '',
    premiere: '',
  }

  constructor(private productService: ProductService) {
    this.newProduct = this.productService.getNewRelease();
  }
}

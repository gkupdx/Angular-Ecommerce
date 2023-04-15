import { Component } from '@angular/core';
import { fadeIn, fadeInSlow, slideDownSlow } from 'src/app/utilities/animations';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'], 
  animations: [
    fadeIn,
    fadeInSlow,
    slideDownSlow,
  ],
})
export class StoreComponent {
  togglePrice: boolean = false;
  filterPrice: string = 'Price';
  searchVal: string = '';
  productName: string = '';
  caretDown = faCaretDown;
  searchIcon = faMagnifyingGlass;

  constructor() {}

  toggleFilter() {
    this.togglePrice = !this.togglePrice;
  }

  filterByPrice(direction: string) {
    if (direction === 'L2H') {
      this.filterPrice = 'Low -> Hi';
      this.togglePrice = false;
    } else {
      this.filterPrice = 'Hi -> Low';
      this.togglePrice = false;
    } 
  }

  searchForProduct() {
    if (this.searchVal === '') {
      return;
    }
    console.log(this.searchVal);
    this.productName = this.searchVal;
  }
}

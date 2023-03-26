import { Component } from '@angular/core';
import { fadeIn, fadeInSlow, slideDownSlow } from 'src/app/utilities/animations';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
  caretDown = faCaretDown;
  togglePrice: boolean = false;
  togglePop: boolean = false;
  filterPrice: string = '';
  filterPop: string = '';

  constructor() {}

  toggleFilter(type: string) {
    if (type === 'price') {
      this.togglePrice = !this.togglePrice;
    } else {
      this.togglePop = !this.togglePop;
    }
  }

  filterByPrice(direction: string) {
    direction === 'L2H' ? this.filterPrice = 'L2H' : this.filterPrice = 'H2L';
  }

  filterByPop(trend: string) {
    trend === 'up' ? this.filterPop = 'up' : this.filterPop = 'down';
  }
}

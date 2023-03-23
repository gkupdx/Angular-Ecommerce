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

  constructor() {}

  togglePriceFilter() {
    this.togglePrice = !this.togglePrice;
  }

  togglePopFilter() {
    this.togglePop = !this.togglePop;
  }
}

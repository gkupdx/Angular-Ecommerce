import { Component } from '@angular/core';
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

  constructor() {}
}

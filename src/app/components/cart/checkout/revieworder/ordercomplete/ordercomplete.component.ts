import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.component.html',
  styleUrls: ['./ordercomplete.component.css'],
  animations: [
    slideIn,
  ]
})
export class OrdercompleteComponent {
  orderNumber: number = 0;
  backArrow = faArrowLeft;

  constructor(private router: Router) {
    let min = Math.ceil(10000);
    let max = Math.floor(20000);
    this.orderNumber = Math.floor(Math.random() * (max - min) + min);
  }

  goToStore() {
    this.router.navigate(['store']);
  }
}

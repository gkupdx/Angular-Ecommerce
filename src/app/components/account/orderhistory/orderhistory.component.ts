import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DatabaseService } from 'src/app/services/database.service';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css'],
  animations: [
    slideIn,
  ]
})
export class OrderhistoryComponent {
  orderKeys: string[] = [];
  orderProducts: Map<string, string[]> = new Map();
  arrowLeft = faArrowLeft;

  constructor(private location: Location, private dbService: DatabaseService) {
    this.dbService.getOrderHistory(this.orderKeys, this.orderProducts);
  }

  goToPrev() {
    this.location.back();
  }
}

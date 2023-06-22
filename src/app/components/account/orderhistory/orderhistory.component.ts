import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DatabaseService } from 'src/app/services/database.service';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css'],
  animations: [
    slideIn,
  ]
})
export class OrderhistoryComponent {
  isBtnClicked: boolean[] = [];
  orderKeys: string[] = [];
  orderProducts: Map<string, string[]> = new Map();
  arrowLeft = faArrowLeft;
  caretDown = faCaretDown;

  constructor(private location: Location, private dbService: DatabaseService) {
    this.dbService.getOrderHistory(this.orderKeys, this.orderProducts);
    for (let i = 0; i < this.orderKeys.length; i++) {
      this.isBtnClicked[i] = false;
    }
  }

  viewOrderContents(index: number) {
    this.isBtnClicked[index] = !this.isBtnClicked[index];
  }

  isOrderReq(index: number): boolean {
    return this.isBtnClicked[index];
  }

  goToPrev() {
    this.location.back();
  }
}

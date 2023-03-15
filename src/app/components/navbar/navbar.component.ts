import { Component } from '@angular/core';
import { slideDownSlow } from 'src/app/utilities/animations';
import { faShop, faCartShopping, faUserGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    slideDownSlow,
  ],
})
export class NavbarComponent {
  storeIcon = faShop;
  cartIcon = faCartShopping;
  userGearIcon = faUserGear;
}

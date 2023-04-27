import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { slideDownSlow } from 'src/app/utilities/animations';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  animations: [
    slideDownSlow,
  ]
})
export class PanelComponent {
  cancelIcon = faXmark;

  constructor(private menuService: MenuService, private router: Router) {}

  hideMenuPanel() {
    this.menuService.toggleMenuPanel();
  }

  goToAccount() {
    this.menuService.toggleMenuPanel();
    this.router.navigate(['account']);
  }
}

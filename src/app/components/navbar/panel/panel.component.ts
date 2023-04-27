import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private menuService: MenuService, private authService: AuthService, private router: Router) {}

  hideMenuPanel() {
    this.menuService.toggleMenuPanel();
  }

  goToAccount() {
    this.menuService.toggleMenuPanel();
    this.router.navigate(['account']);
  }

  logout() {
    // this.authService.logout();
    this.authService.isAuthenticated = false;
    this.menuService.toggleMenuPanel();
    this.router.navigate([''])
  }
}

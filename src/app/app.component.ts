import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';

/* Firebase config imports */
import { firebaseConfig } from 'firebase.config';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'k-ecommerce';

  constructor(private authService: AuthService, private menuService: MenuService) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isSignedIn() {
    return this.authService.isAuthenticated;
  }

  isMenuOpen() {
    return this.menuService.getMenuStatus();
  }
}

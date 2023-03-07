import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}

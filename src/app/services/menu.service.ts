import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isMenuOpened: boolean = false;

  constructor() {}

  toggleMenuPanel() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  getMenuStatus() {
    return this.isMenuOpened;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideIn } from 'src/app/utilities/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    slideIn,
  ]
})

export class ContactComponent {
  arrowLeft = faArrowLeft;

  constructor(private router: Router) {}

  goToStore() {
    this.router.navigate(['store']);
  }
}

import { Component, Input } from '@angular/core';
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
  @Input() orderKey: string | null;
  backArrow = faArrowLeft;

  constructor(private router: Router) {}

  goToStore() {
    this.router.navigate(['store']);
  }
}

import { Component } from '@angular/core';
import { slideIn } from 'src/app/utilities/animations';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  animations: [
    slideIn,
  ]
})
export class PanelComponent {
  cancelIcon = faXmark;

  constructor() {}
}

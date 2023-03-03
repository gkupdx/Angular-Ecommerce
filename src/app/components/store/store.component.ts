import { Component } from '@angular/core';
import { slideIn } from 'src/app/utilities/animations';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'], 
  animations: [
    slideIn,
  ],
})
export class StoreComponent {
  minusIcon = faMinus;
  plusIcon = faPlus;
  itemCount: number = 0;

  minusIconStyle = {
    color: 'darkred',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  }

  plusIconStyle = {
    color: 'darkblue',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  }

  imgSrc: string[] = [
    'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F12%2F14%2Flandscape_red_balloo.2393912c.jpg&w=1366&q=75',
    'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F7%2F29%2Flandscape_the_wild_d.b29cedf3.jpg&w=384&q=75',
    'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2023%2F2%2F4%2Flandscape_il_ji_mae_.848d77b0.jpg&w=1366&q=75',
  ];

  constructor() {}

  decreaseCount() {
    if (this.itemCount === 0) return;
    this.itemCount -= 1;
  }

  increaseCount() {
    this.itemCount += 1;
  }
}

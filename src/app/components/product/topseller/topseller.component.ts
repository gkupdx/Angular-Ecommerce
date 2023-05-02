import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { fadeInSlow, slideIn } from 'src/app/utilities/animations';
import { faChevronLeft, faChevronRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topseller',
  templateUrl: './topseller.component.html',
  styleUrls: ['./topseller.component.css'],
  animations: [
    fadeInSlow,
    slideIn,
  ]
})
export class TopsellerComponent implements OnInit, OnDestroy {
  browserWidth: number = window.innerWidth;
  topProducts: Product[] = [];
  subscription: Subscription; // for subscribing to auto slideshow events
  activeSlide: number = 1;
  leftArrow = faChevronLeft;
  rightArrow = faChevronRight;
  caretDownIcon = faCaretDown;

  constructor(private productService: ProductService) {
    this.topProducts = this.productService.getTopProducts();
  }

  @HostListener('window:resize', ['$event'])
    detectResize(event: any) {
      this.browserWidth = event.target.innerWidth;
    }

  ngOnInit(): void {
    this.subscription = interval(4000).subscribe(() => {
      this.autoSlideshow();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  resetTimer() {
    if (this.subscription) this.subscription.unsubscribe();

    this.subscription = interval(4000).subscribe(() => {
      this.autoSlideshow();
    });
  }

  autoSlideshow() {
    this.activeSlide === this.topProducts.length ? this.activeSlide = 1 : this.activeSlide += 1;
  }

  moveSlide(direction: string) {
    switch (direction) {
      case 'left':
        this.activeSlide === 1 ? this.activeSlide = this.topProducts.length : this.activeSlide -= 1;
        break;
      case 'right':
        this.activeSlide === this.topProducts.length ? this.activeSlide = 1 : this.activeSlide += 1;
        break;
      default:
        return;
    }
    this.resetTimer();
  }
}

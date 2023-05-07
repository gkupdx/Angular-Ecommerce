import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentForm } from 'src/app/interfaces/Forms';
import { slideIn } from 'src/app/utilities/animations';
import { faCcVisa, faCcAmex, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    slideIn,
  ]
})
export class CheckoutComponent {
  form: PaymentForm = {
    cardNum: '',
    expDate: '',
    cvv: '',
  }
  isCardNumValid: boolean = true;
  isExpDateValid: boolean = true;
  isCvvValid: boolean = true;
  paymentResult: string = '';
  visa = faCcVisa;
  amex = faCcAmex;
  mastercard = faCcMastercard;
  discover = faCcDiscover;
  backArrow = faArrowLeft;

  constructor(private location: Location, private router: Router) {}

  inputFieldsEmpty() {
    if (this.form.cardNum.length === 0 || this.form.expDate.length === 0 || this.form.cvv.length === 0) {
      return true;
    }
    return false;
  }

  onChange(fieldName: string) {
    if (fieldName === 'cardNum') {
      this.isCardNumValid = true;
    } else if (fieldName === 'expDate') {
      this.isExpDateValid = true;
    } else {
      this.isCvvValid = true;
    }
  }

  validateCardNum() {
    let numLength: number = this.form.cardNum.length;
    let cardNum: number = Number(this.form.cardNum);

    numLength < 15 || isNaN(cardNum) ? this.isCardNumValid = false : this.isCardNumValid = true;
  }

  validateExpDate() {
    let dateLength: number = this.form.expDate.length;
    let expDate: number = Number(this.form.expDate);

    dateLength < 5 || isNaN(expDate) ? this.isExpDateValid = false : this.isExpDateValid = true;
  }

  validateCvv() {
    let cvvLength: number = this.form.cvv.length;
    let cvv: number = Number(this.form.cvv);

    cvvLength < 3 || isNaN(cvv) ? this.isCvvValid = false : this.isCvvValid = true;
  }

  paymentSubmit() {
    this.validateCardNum();
    this.validateExpDate();
    this.validateCvv();

    if (this.isCardNumValid && this.isExpDateValid && this.isCvvValid) {
      this.router.navigate(['revieworder']);
    }
  }

  goToPrev() {
    this.location.back();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { membershipReducer } from './state/account.reducer';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreComponent } from './components/store/store.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { TopsellerComponent } from './components/product/topseller/topseller.component';
import { NewreleaseComponent } from './components/product/newrelease/newrelease.component';
import { ProductsComponent } from './components/products/products.component';
import { PasswordchangeComponent } from './components/account/passwordchange/passwordchange.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { RevieworderComponent } from './components/cart/checkout/revieworder/revieworder.component';
import { OrdercompleteComponent } from './components/cart/checkout/revieworder/ordercomplete/ordercomplete.component';
import { PanelComponent } from './components/navbar/panel/panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    StoreComponent,
    NavbarComponent,
    AccountComponent,
    CartComponent,
    ProductComponent,
    TopsellerComponent,
    NewreleaseComponent,
    ProductsComponent,
    PasswordchangeComponent,
    CheckoutComponent,
    RevieworderComponent,
    OrdercompleteComponent,
    PanelComponent,
    ModalComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    StoreModule.forRoot({ membershipState: membershipReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

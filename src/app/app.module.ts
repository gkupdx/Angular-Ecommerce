import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
    NewreleaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

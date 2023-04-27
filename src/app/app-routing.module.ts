import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { PasswordchangeComponent } from './components/account/passwordchange/passwordchange.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { OrdercompleteComponent } from './components/cart/checkout/revieworder/ordercomplete/ordercomplete.component';
import { RevieworderComponent } from './components/cart/checkout/revieworder/revieworder.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreComponent } from './components/store/store.component';
import { PanelComponent } from './components/navbar/panel/panel.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'menu', component: PanelComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'store', component: StoreComponent },
  { path: 'account', component: AccountComponent },
  { path: 'pwdchange', component: PasswordchangeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'revieworder', component: RevieworderComponent },
  { path: 'ordercomplete', component: OrdercompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

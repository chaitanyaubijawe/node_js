import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './ui/checkout/checkout.component';
import {ItemFeedComponent} from './ui/item-feed/item-feed.component';

const routes: Routes = [
  {path: '', component:ItemFeedComponent},
  {path: 'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

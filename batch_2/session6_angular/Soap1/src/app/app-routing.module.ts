import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnquiryComponent} from "./enquiry/enquiry.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path:'enquiry', component:EnquiryComponent},
  {path: 'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

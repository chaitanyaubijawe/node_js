import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductDetailsComponent} from "./add-product-details/add-product-details.component";

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"viewProduct", component:ProductDetailsComponent},
  {path:"addProduct", component:AddProductDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

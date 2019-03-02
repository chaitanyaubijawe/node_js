import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PocComponent} from "./poc/poc.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ViewProductDetailsComponent} from "./view-product-details/view-product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";


const routes: Routes = [

  {path:"", component:DashboardComponent},
  {path:"viewproduct/:id", component:ViewProductDetailsComponent},
  {path:"poc", component:PocComponent},
  {path:"add", component:AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PocComponent} from "./poc/poc.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ViewProductDetailsComponent} from "./view-product-details/view-product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EnquiryFormsReactiveComponent} from "./enquiry-forms-reactive/enquiry-forms-reactive.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [

  {path:"", component:DashboardComponent},
  {path:"viewproduct/:id", component:ViewProductDetailsComponent},
  {path:"poc", component:PocComponent},
  {path:"add", component:AddProductComponent, canActivate:[AuthGuard]},
  {path:"contact", component:EnquiryFormsReactiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

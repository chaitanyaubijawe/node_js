import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ViewProductComponent} from "./view-product/view-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {AuthGuard} from "./auth/auth.guard";
import {PocComponent} from "./poc/poc.component";

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"view", component:ViewProductComponent},
  {path:"add", component:AddProductComponent, canActivate:[AuthGuard]},
  {path:"poc", component:PocComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

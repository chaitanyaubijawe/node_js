import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PocComponent} from "./poc/poc.component";


const routes: Routes = [

  {path:"poc", component:PocComponent},
  {path:"signin", component:PocComponent},
  {path:"signup", component:PocComponent},
  {path:"dashboard", component:PocComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

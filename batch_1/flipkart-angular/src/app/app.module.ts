import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import {PocComponent} from './poc/poc.component';
import {AlertDirective} from './shared/alert.directive';
import {LoggerService} from './service/logger.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductsService} from './service/products.service';
import { ViewProductsComponent } from './view-products/view-products.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {SubstringPipe} from './shared/substring.pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthService} from './service/auth.service';
import { SignOutComponent } from './sign-out/sign-out.component';
import {AuthGuard} from './auth-guard/auth.guard';


const appRoutes:Routes = [
  {path:"", component:DashboardComponent},
  {path:"addproduct", component:AddProductComponent, canActivate:[AuthGuard]},
  {path:"productdetails/:id", component:ProductDetailComponent},
  {path:"signin", component:SignInComponent},
  {path:"signup", component:SignUpComponent},
  {path:"signout", component:SignOutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    PocComponent,
    AlertDirective,
    DashboardComponent,
    ViewProductsComponent,
    ProductDetailComponent,SubstringPipe, SignInComponent, SignUpComponent, SignOutComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService, ProductsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

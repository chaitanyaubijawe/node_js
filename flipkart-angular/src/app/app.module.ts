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


const appRoutes:Routes = [
  {path:"", component:DashboardComponent},
  {path:"addproduct", component:AddProductComponent},
  {path:"productdetails/:id", component:ProductDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    PocComponent,
    AlertDirective,
    DashboardComponent,
    ViewProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

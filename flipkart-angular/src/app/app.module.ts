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

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    PocComponent,
    AlertDirective,
    DashboardComponent,
    ViewProductsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggerService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

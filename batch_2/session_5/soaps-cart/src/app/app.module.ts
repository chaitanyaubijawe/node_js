import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocComponent } from './poc/poc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewProductGroupComponent } from './view-product-group/view-product-group.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import {ProductService} from "./services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    PocComponent,
    DashboardComponent,
    ViewProductGroupComponent,
    ViewProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [ProductService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

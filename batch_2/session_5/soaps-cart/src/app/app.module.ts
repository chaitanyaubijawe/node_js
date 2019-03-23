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
import { AddProductComponent } from './add-product/add-product.component';
import {HttpClientModule} from "@angular/common/http";
import { TrimPipe } from './shared/trim.pipe';
import { ClickEventDirective } from './shared/click-event.directive';

@NgModule({
  declarations: [
    AppComponent,
    PocComponent,
    DashboardComponent,
    ViewProductGroupComponent,
    ViewProductDetailsComponent,
    AddProductComponent,
    TrimPipe,
    ClickEventDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [ProductService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

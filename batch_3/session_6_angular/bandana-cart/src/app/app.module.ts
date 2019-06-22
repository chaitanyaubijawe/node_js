import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TrimTextPipe } from './pipe/trim-text.pipe';
import { PocComponent } from './poc/poc.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewProductComponent,
    AddProductComponent,
    TrimTextPipe,
    PocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

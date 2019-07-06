import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TrimTextPipe } from './pipe/trim-text.pipe';
import { PocComponent } from './poc/poc.component';
import { ClickEventListenerDirective } from './directives/click-event-listener.directive';
import {AppService} from "./services/app.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EnquiryComponent } from './enquiry/enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewProductComponent,
    AddProductComponent,
    TrimTextPipe,
    PocComponent,
    ClickEventListenerDirective,
    LoginComponent,
    LogoutComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //providers: [AppService], let angular know your service... Angular will create single object of service and will inject it in required component....
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

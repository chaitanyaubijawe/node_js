import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import {PocComponent} from './poc/poc.component';
import {AlertDirective} from './shared/alert.directive';
import {LoggerService} from './service/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    PocComponent,
    AlertDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

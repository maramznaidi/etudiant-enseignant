import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule,
    FormsModule,CommonModule],
  providers: [],
  declarations: [],

})
export class AppModule {}

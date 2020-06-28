import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {ProductService } from './main/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    FormsModule, HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

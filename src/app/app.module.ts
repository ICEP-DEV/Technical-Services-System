import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './redirectPages/navbar/navbar.component';
import { FooterComponent } from './redirectPages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewrequestComponent } from './pages/viewrequest/viewrequest.component';
import { ComponentComponent } from './component/component.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewrequestComponent,
    NavbarComponent,
    FooterComponent,
    ComponentComponent,
    

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './redirectPages/navbar/navbar.component';
import { FooterComponent } from './redirectPages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewrequestComponent } from './pages/viewrequest/viewrequest.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewrequestComponent,
    NavbarComponent,
    FooterComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

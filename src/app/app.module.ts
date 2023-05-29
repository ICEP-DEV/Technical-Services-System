import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './redirectPages/navbar/navbar.component';
import { FooterComponent } from './redirectPages/footer/footer.component';

import { ViewrequestComponent } from './pages/viewrequest/viewrequest.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './pages/home/home.component';
import { TrackRequestComponent } from './pages/track-request/track-request.component';
import { StafffeedbackComponent } from './pages/stafffeedback/stafffeedback.component';
import { TechnicianViewTaskComponent } from './pages/technician-view-task/technician-view-task.component';
import { AdminviewrequestComponent } from './pages/adminviewrequest/adminviewrequest.component';
import { AvailabletechnicianComponent } from './pages/availabletechnician/availabletechnician.component';
import { AdminviewsinglerequestComponent } from './pages/adminviewsinglerequest/adminviewsinglerequest.component';
import { AdminassigntaskComponent } from './pages/adminviewprogress/adminassigntask.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewrequestComponent,
    NavbarComponent,
    FooterComponent,
    ComponentComponent,
    HomeComponent,
    TrackRequestComponent,
    StafffeedbackComponent,
    TechnicianViewTaskComponent,
    AdminviewrequestComponent,
    AvailabletechnicianComponent,
    AdminviewsinglerequestComponent,
    AdminassigntaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TrackformComponent } from './trackform/trackform.component';
import { MatDialogModule } from '@angular/material/dialog';


import{HttpClientModule} from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';

import { TechloginComponent } from './techlogin/techlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { StaffpageComponent } from './staffpage/staffpage.component';
import { RefConfirmFormComponent } from './ref-confirm-form/ref-confirm-form.component';
import { TrackRequestComponent } from './track-request/track-request.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { StafffeedbackComponent } from './stafffeedback/stafffeedback.component';
import { AdminassigntaskComponent } from './adminassigntask/adminassigntask.component';
import { AdminprogressComponent } from './adminprogress/adminprogress.component';
import { HODloginPageComponent } from './hodlogin-page/hodlogin-page.component';
import { TechpageComponent } from './techpage/techpage.component';
import { HODpageComponent } from './hodpage/hodpage.component';
import { CloselogComponent } from './closelog/closelog.component';
import { ReportComponent } from './report/report.component';
// import { Ng2OrderModule } from 'ng2-order-pipe';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';
import { AdmincloselogComponent } from './admincloselog/admincloselog.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    TrackformComponent,
    TechloginComponent,
     AdminpageComponent,
     ViewrequestComponent,
     StaffpageComponent,
     RefConfirmFormComponent,
     TrackRequestComponent,
     SidenavbarComponent,
     StafffeedbackComponent,
     
     AdminassigntaskComponent,
     AdminprogressComponent,
     HODloginPageComponent,
     TechpageComponent,
     HODpageComponent,
     CloselogComponent,
     ReportComponent,
     AdminassigntaskComponent,
     AdmincloselogComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    
    // Ng2OrderModule,
    // Ng2SearchPipeModule,
    // NgxPaginationModule


  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

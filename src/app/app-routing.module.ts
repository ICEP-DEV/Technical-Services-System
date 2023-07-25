import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { MatDialogModule } from '@angular/material/dialog';
import { TechloginComponent } from './techlogin/techlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { AuthGuard } from './auth.guard';
import { StaffpageComponent } from './staffpage/staffpage.component';
import { TrackRequestComponent } from './track-request/track-request.component';
import { StafffeedbackComponent } from './stafffeedback/stafffeedback.component';

import { AdminassigntaskComponent } from './adminassigntask/adminassigntask.component';
import { AdminprogressComponent } from './adminprogress/adminprogress.component';
import { HodViewProgressComponent } from './hod-view-progress/hod-view-progress.component';
import { HODloginPageComponent } from './hodlogin-page/hodlogin-page.component';
import { TechpageComponent } from './techpage/techpage.component';
import { CloselogComponent } from './closelog/closelog.component';
import { HodgeneratereportsComponent } from './hodgeneratereports/hodgeneratereports.component';



const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'form', component: FormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'techlogin',component: TechloginComponent},
  {path: 'adminpage',component: AdminpageComponent},
  {path: 'viewrequest',component: ViewrequestComponent,canActivate:[AuthGuard]},
  {path: 'staffpage',component: StaffpageComponent},
  {path:'trackrequest',component:TrackRequestComponent},
  {path:'stafffeedback',component:StafffeedbackComponent},
  {path:'availableTechnician', component:AdminassigntaskComponent},
  {path:'adminprogress',component:AdminprogressComponent},
  {path: 'hodviewprogress',component:HodViewProgressComponent},
  {path: 'hodloginpage',component:HODloginPageComponent},
  {path: 'techpage',component:TechpageComponent},
  {path: 'closelog',component:CloselogComponent},
  {path: 'hodgeneratereports',component:HodgeneratereportsComponent},


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatDialogModule]

})
export class AppRoutingModule { }

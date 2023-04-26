import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewrequestComponent } from './pages/viewrequest/viewrequest.component';
import { ComponentComponent } from './component/component.component';
import { TrackRequestComponent } from './pages/track-request/track-request.component';
import { StafffeedbackComponent } from './pages/stafffeedback/stafffeedback.component';
import { TechnicianViewTaskComponent } from './pages/technician-view-task/technician-view-task.component';
import { AdminviewrequestComponent } from './pages/adminviewrequest/adminviewrequest.component';
import { AvailabletechnicianComponent } from './pages/availabletechnician/availabletechnician.component';
import { AdminviewsinglerequestComponent } from './pages/adminviewsinglerequest/adminviewsinglerequest.component';


const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'viewrequest', component:ComponentComponent},
    {path:'component', component:ViewrequestComponent},
    {path:'trackrequest',component:TrackRequestComponent},
    {path:'stafffeedback', component:StafffeedbackComponent},
    {path:'technician', component:TechnicianViewTaskComponent},
    {path:'adminview', component:AdminviewrequestComponent},
    {path:'availabletechs', component:AvailabletechnicianComponent},
    {path:'adminsinglerequest', component:AdminviewsinglerequestComponent},
    {path:'assigntask'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

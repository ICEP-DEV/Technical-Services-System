import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewrequestComponent } from './pages/viewrequest/viewrequest.component';
import { ComponentComponent } from './component/component.component';
import { TrackRequestComponent } from './pages/track-request/track-request.component';


const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'viewrequest', component:ComponentComponent},
    {path:'component', component:ViewrequestComponent},
    {path:'trackrequest',component:TrackRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

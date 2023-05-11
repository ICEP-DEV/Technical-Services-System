import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ReadComponent } from './read/read.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TechloginComponent } from './techlogin/techlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'form', component: FormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'read',component: ReadComponent},
  {path: 'techlogin',component: TechloginComponent},
  {path: 'adminpage',component: AdminpageComponent,canActivate:[AuthGuard]},
  {path: 'viewrequest',component: ViewrequestComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatDialogModule]

})
export class AppRoutingModule { }

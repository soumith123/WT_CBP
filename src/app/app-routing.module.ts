import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HospitalsdataComponent } from './hospitalsdata/hospitalsdata.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SymptomsformComponent } from './symptomsform/symptomsform.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent },
  {path:'login', component:LoginComponent},
  {path:"hospitals", component:HospitalsComponent},
  {path:"users/symptomsForm/:username", component:SymptomsformComponent},
  {path:"hospitalsData/:username", component:HospitalsComponent},
  {path:"users/:username", component:UsersComponent},
  {path:"hospitals/:hospitalName", component:HospitalsdataComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'admin/:username', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AdminGuard] },
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

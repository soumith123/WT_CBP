import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhospitalComponent } from './addhospital/addhospital.component';
import { AdminComponent } from './admin.component';
import { ViewhospitaldetailsComponent } from './viewhospitaldetails/viewhospitaldetails.component';
import { ViewhospitalsComponent } from './viewhospitals/viewhospitals.component';

const routes: Routes = [{ path: '', component: AdminComponent, children:[
  {path:"addHospital", component:AddhospitalComponent },
  {path:"viewHospitals", component:ViewhospitalsComponent},
  {path:"viewHospitals/:hospitalName", component:ViewhospitaldetailsComponent},
  {path:"", redirectTo:"addHospital", pathMatch:"full"}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

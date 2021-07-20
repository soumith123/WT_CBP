import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddhospitalComponent } from './addhospital/addhospital.component';
import { ViewhospitalsComponent } from './viewhospitals/viewhospitals.component';
import {FormsModule} from '@angular/forms';
import { ViewhospitaldetailsComponent } from './viewhospitaldetails/viewhospitaldetails.component';
import { SearchPipe } from './search.pipe'


@NgModule({
  declarations: [
    AdminComponent,
    AddhospitalComponent,
    ViewhospitalsComponent,
    ViewhospitaldetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }

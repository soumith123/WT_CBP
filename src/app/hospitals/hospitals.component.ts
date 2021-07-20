import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalsdataService } from '../hospitalsdata.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  constructor(private hospitalService:HospitalsdataService, private router:Router) {}

  hospitals:any[];

  p=1;

  searchTerm:string;

  ngOnInit(): void 
  {
    this.hospitalService.getHospitals().subscribe(
      hospitals=>
      {
        this.hospitals=hospitals.message;
      },
      err=>
      {
        console.log("error in getting hospital details are", err);        
      }
    )
  }

  onSelectHospital(hospitalName)
  {
    this.router.navigateByUrl("/hospitals/"+hospitalName)
  }

}

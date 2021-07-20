import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospitalsdataService } from '../hospitalsdata.service';

@Component({
  selector: 'app-hospitalsdata',
  templateUrl: './hospitalsdata.component.html',
  styleUrls: ['./hospitalsdata.component.css']
})
export class HospitalsdataComponent implements OnInit {

  constructor(private hospitalService:HospitalsdataService, private ar:ActivatedRoute) {}

  hospital:any;

  
  ngOnInit(): void 
  {
    let hospitalName=this.ar.snapshot.params.hospitalName;

    this.hospitalService.getHospitalDetails(hospitalName).subscribe(
      hospital=>
      {
        this.hospital=hospital.message;
      },
      err=>
      {
        console.log("error in getting games details is", err);
        alert("something went wrong")        
      }
    )
  }

}
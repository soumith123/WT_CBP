import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewhospitaldetails',
  templateUrl: './viewhospitaldetails.component.html',
  styleUrls: ['./viewhospitaldetails.component.css']
})
export class ViewhospitaldetailsComponent implements OnInit {

  hospital:any;

  constructor(private ar:ActivatedRoute, private adminService:AdminService) {}

  ngOnInit(): void 
  {
    let hospitalName=this.ar.snapshot.params.hospitalName;    

    this.adminService.getHospitalDetails(hospitalName).subscribe(
      hospital=>
      {
        this.hospital=hospital["message"];  
        console.log(this.hospital);              
      },
      err=>
      {
        console.log("error in getting hospital details is", err);        
      }
    )
  }

}

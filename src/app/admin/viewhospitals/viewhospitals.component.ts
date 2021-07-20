import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewhospitals',
  templateUrl: './viewhospitals.component.html',
  styleUrls: ['./viewhospitals.component.css']
})
export class ViewhospitalsComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router) {}

  hospitals:any[];

  searchTerm:string;

  p=1;

  ngOnInit(): void 
  {
    this.adminService.getHospitals().subscribe(
      hospitals=>
      {
        this.hospitals=hospitals.message;
      },
      err=>
      {
        console.log("error in getting games is", err);
        alert(err.message)        
      }
    )
  }

  // after clicking hospital info button it navigates to game details page
  onSelectGame(hospitalName)
  {
    this.router.navigateByUrl("admin/covid/viewHospitals/"+hospitalName)
  }  


  // to delete the hospital
  onDeleteHospital(hospitalObj)
  {
    this.adminService.deleteHospital(hospitalObj.hospitalName).subscribe(
      res=>
      {
        if(res.message==="hospital deleted")
        {
          alert("Hospital deleted")
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
        console.log("error in deleting hospital is", err);
        alert("Something wrong in dleeting hospital")        
      }
    )
  }
}

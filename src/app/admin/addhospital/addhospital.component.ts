import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.css']
})
export class AddhospitalComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  file:File;

  selectFile(event)
  {
    this.file=event.target.files[0];
    console.log(this.file)
  }

  // to submit the game to database
  onDSubmitHospital(hospitalObj)
  {

    let formData=new FormData();

    formData.append("photo", this.file, this.file.name)

    formData.append("hospitalObj", JSON.stringify(hospitalObj))

    this.adminService.createHospital(formData).subscribe(
      res=>
      {
        if (res.message==="New hospital inserted")
        {
          alert("New hospital Created")
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
        console.log("error in creating hospital is", err);
        alert("Something went wrong in creating hospital")        
      }
    )
  }

}

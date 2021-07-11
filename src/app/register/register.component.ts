import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  file:File;

  selectFile(event)
  {
    this.file=event.target.files[0];
  }


  onSignUp(userObj)
  {

    let formData= new FormData();

    formData.append("photo", this.file, this.file.name)

    formData.append("userObj", JSON.stringify(userObj))

    this.us.createUser(formData).subscribe(
      res=>
      {
        if (res.message==="New user created")
        {
          alert("New user is created")
          this.router.navigateByUrl("/login")
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
        console.log("Error in posting user to database is", err);
        alert("Something went wrong in user creation")        
      }
    )
  }

 

}

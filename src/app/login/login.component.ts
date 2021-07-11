import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(userCredentials)
  {
    this.us.loginUser(userCredentials).subscribe(
      res=>
      {
        if(res.message==="login success")
        {
          localStorage.setItem("token",res.token)
          localStorage.setItem("username", res.username)
          localStorage.setItem("userObj", JSON.stringify(res.userObj))
          this.us.userLoginStatus=true;
          if(userCredentials.type==="user")
          {
            this.router.navigateByUrl(`users/${res.username}`)
          }
          if(userCredentials.type==="admin")
          {
            this.router.navigateByUrl(`admin/${res.username}`)
          }
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
        console.log("error while sign in is", err);
        alert("Something went wrong in login")
        
      }
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private hc:HttpClient, private router:Router) { }

  userObj;

  ngOnInit(): void 
  {
    this.userObj=JSON.parse(localStorage.getItem("userObj"))
  }

  getPrivateData()
  {
    this.hc.get("/user/testing").subscribe(
      res=>
      {
        alert(res["message"])
      },
      err=>
      {
        console.log(err);
        alert(err.message)        
      }
    )
  }

  onSelectYes(username)
  {
    this.router.navigateByUrl("/users/symptomsForm/"+username)
  }

  onSelectNo(username)
  {
    this.router.navigateByUrl("/hospitalsData/"+username)
  }

}

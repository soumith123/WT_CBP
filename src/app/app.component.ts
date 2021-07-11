import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidHospitalManagement';


  constructor(public us:UsersService) {}

  userLogout()
  {
    localStorage.clear();
    this.us.userLoginStatus=false;
  }
}

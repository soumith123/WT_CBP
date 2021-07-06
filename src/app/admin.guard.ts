import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  // injecting the router for route to login page if admin not logged in
  constructor(private router:Router) {}


  // if username in local storage is null it redirects to login page
 canActivate(): boolean
 {
   if(localStorage.getItem("username")==null)
   {

     // displaying alert to login
     alert("please login to continue")
     this.router.navigateByUrl('/login')
     return false;
   }
   else
   {

     // if admin already logged in he continues accessing data
     return true;
   }
 }
  
}

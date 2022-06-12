import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalsdataService {

  constructor(private hc:HttpClient) {}

  getHospitals():Observable<any>
  {
    return this.hc.get("/hospital/gethospitals")
  }
  
  // hospital details
  getHospitalDetails(hospitalName):Observable<any>
  {
    return this.hc.get(`hospital/gethospital/${hospitalName}`)
  }
  
}
  
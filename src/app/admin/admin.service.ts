import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) {}

  createHospital(hospitalObj):Observable<any>
  {
    return this.hc.post("/hospital/createhospital", hospitalObj)
  }

  getHospitals():Observable<any>
  {
    return this.hc.get("/hospital/gethospitalsAdmin")
  }

  // getting hospital details
  getHospitalDetails(hospitalName):Observable<any>
  {
    return this.hc.get(`hospital/gethospital/${hospitalName}`)
  }

  // to delete a certain hospital
  deleteHospital(hospitalName):Observable<any>
  {
    return this.hc.delete("/hospital/deletehospital/"+hospitalName)
  }
  
}

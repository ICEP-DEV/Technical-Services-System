import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect frontend to backend

  //apiUrl  = 'http://localhost:3000';
  apiUrl = "http://192.168.27.20:3000"
  //get all data

  staffLogin(data:any){
    return this._http.post(this.apiUrl+"/staff/authenticateStaffNumber", data);
  }


  adminLogin(data:any){
    return this._http.post(this.apiUrl+"/admin/login", data);
  }

  techLogin(data:any){
    return this._http.post(this.apiUrl+"/technician/login", data);
  }

  request(data:any){
    return this._http.post(this.apiUrl+"/staff/createRequest", data);
  }

  // staffRequests(data:any){
  //   return this._http.post(this.apiUrl+"/staff/createRequest", data);
  // }

  staffRequests(data:any):Observable<any>
  {
    console.log(data,'createapi=>');
    
    return this._http.post(`${this.apiUrl+"/staff/createRequest"}`,data);
  }

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl+"/admin/viewRequester"}`);
  }

  totalRequests():Observable<any>
  {
    return this._http.get(`${this.apiUrl+"/admin/totalRequests"}`);
  }

  allRequests():Observable<any>
  {
    return this._http.get(`${this.apiUrl+"/admin/viewAllrequest"}`);
  }
  

  createData(data:any):Observable<any>
{
  console.log(data,'createapi=>');
  
  return this._http.post(`${this.apiUrl}`,data);
}

getDataById(id: number): Observable<any> {
  return this._http.get(`${this.apiUrl}/${id}`);
}


}




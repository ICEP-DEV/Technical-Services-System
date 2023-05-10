
import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { Observable } from 'rxjs';
import { Face } from 'src/app/face';


@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {
  get() {
    throw new Error('Method not implemented.');
  }

      //// In the conponent to recieve the httpresponse
      //face : Face [] = [];


      //Api url  for available technicians
      private apiUrlTech = "http://192.168.27.20:3000/admin/";
      private stafffeedbackUrl = "http://192.168.27.20:3000/staff/"
      //private techTaskUrl = "http://192.168.27.20:3000";
     // private adminViewRequest = "http://192.168.27.20:3000";

      //data.json file url  
      // apiUrlJson = "/assets/demoData.json" ;
 


     /// it can be an observable type object that is returned for the request   apiArray =[];

      
      constructor(private httpClient: HttpClient)  { 
        
      }

      ngOnInit() {
        
      }
     
      //Json file getData() 

      //getDatajson () : Observable<any> {
       // return this.httpClient.get(this.apiUrlJson);
      //}


      /*
      
      */
      //Api connection to get the available technician

      getTechData(): Observable<any> {
        return this.httpClient.get(this.apiUrlTech);
        
      }

       //Connection to get tech task data from server

      getTechTaskData(): Observable<any>{
        return this.httpClient.get(this.apiUrlTech);
       }
      
      /*
      getSpecificData ():Observable<any> {

        return this.httpClient.get<any>(this.apiUrlTech+"/path to got to as it appears on the Api router")
      }
      
        

      getData1(): Observable<any>  {

        return this.httpClient.get(this.apiUrlTech + "path")
  
      }
      */

      
      //Api to get the sent request from the connection  

      getSentRequesData(): Observable<any> {
        return this.httpClient.get(this.apiUrlTech+"viewAllrequest");
      }

      //Api post connection
      
      postStaffFeedback(data: any): Observable<any> {
        return this.httpClient.post(this.stafffeedbackUrl+"sendFeedback",data);

      }


      getAllRequests():Observable<any>{
        return this.httpClient.get(this.apiUrlTech);
      }

     
      
      
    
}

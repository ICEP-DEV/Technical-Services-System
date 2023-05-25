
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
      private apiUrlAdmin = "http://192.168.27.20:3000/admin/";
      private apiUrlStaff = "http://192.168.27.20:3000/staff/"
      private apiUrlTech = "http://192.168.27.20:3000/technician/";
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

        /*Technician Apis*/

      //Api connection to get the available technician

      getTechAvailable(): Observable<any> {
        return this.httpClient.get(this.apiUrlTech+"");
        
      }

       //Connection to get task assigned to technician from server, who logged based on the ID 

      getTechTaskById(id:Number): Observable<any>{
        return this.httpClient.get(this.apiUrlTech+"tasks/"+id);
       }
        //Posting the technician progress status to the server
        postTechStatus(data:any): Observable<any> {
          return this.httpClient.post(this.apiUrlTech+"",data);
     }

      //get the technican task, with the progress status feedback
     getTechProgressStatus(): Observable<any> {
          return this.httpClient.get(this.apiUrlTech+"");

     }



      /*
      getSpecificData ():Observable<any> {

        return this.httpClient.get<any>(this.apiUrlTech+"/path to got to as it appears on the Api router")
      }
      
        

      getData1(): Observable<any>  {

        return this.httpClient.get(this.apiUrlTech + "path")
  
      }
      */

      
      /*Admin Apis*/
      //Api to get the sent request and view all the request from the connection  ADMIN
      getSentRequesData(): Observable<any> {
        return this.httpClient.get(this.apiUrlAdmin+"viewAllrequest");
      }



      /*Staff Apis*/
      //Api post feedback connection STAFF
      
      postStaffFeedback(data: any): Observable<any> {
        return this.httpClient.post(this.apiUrlStaff+"sendFeedback",data);

      }
      
      /*Get the staff request that are logged based on the staff id STAFF */ 
      getRequestsBystaffId(id : Number){
        return this.httpClient.get(this.apiUrlStaff+"loggedRequests/"+id)
      }


      /*Get all the request*/
      /*
        getAllRequests():Observable<any>{
        return this.httpClient.get(this.apiUrlAdmin);
      }
      
      */
      

     
      
      
    
}

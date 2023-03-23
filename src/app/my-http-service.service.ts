

import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {

  private apiUrl = "api";

  
  apiArray =[];


  constructor(private httpClient: HttpClient)  { 
    
  }

  ngOnInit() {
     
    this.getApi();
  }

  getApi(): void 
    {
        this.httpClient.get(this.apiUrl).subscribe((results:any) => 
        {
            this.apiArray = results;
          
        });



   }

    
   
  
}



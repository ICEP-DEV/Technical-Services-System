import { Component, OnInit } from '@angular/core';

import { MyHttpServiceService } from 'src/app/my-http-service.service'; 

@Component({
  selector: 'app-adminviewrequest',
  templateUrl: './adminviewrequest.component.html',
  styleUrls: ['./adminviewrequest.component.css']
})
export class AdminviewrequestComponent implements OnInit {
  tempData =[];
  
  alldata: any;
  sentRequest =[];
  constructor(private adminServ:MyHttpServiceService){

  }

  ngOnInit(): void {
    this.getAdminAllrequests();
  }

  getAdminAllrequests(){
    this.adminServ.getSentRequesData().subscribe((v) => {
      
      this.tempData = v.result;
      
      console.log(this.tempData)

     
     

     
      /*
          for(let i=0; i<this.tempData.length; i++) {

        this.sentRequest.push(this.tempData[i])

          console.log(this.sentRequest);

      }
      
      
      */
      

      
     
      
     
    }

    );
  }

}

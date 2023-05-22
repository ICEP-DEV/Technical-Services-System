import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { MyHttpServiceService } from 'src/app/my-http-service.service'; 

@Component({
  selector: 'app-adminviewrequest',
  templateUrl: './adminviewrequest.component.html',
  styleUrls: ['./adminviewrequest.component.css']
})
export class AdminviewrequestComponent implements OnInit {
  //Variable to store temporary data
  tempData =[];

  //Variable to store all the  data
  alldata: any;

   //Variable used to push all the data in
  sentRequest =[];

  constructor(private adminServ:MyHttpServiceService){

  }

  ngOnInit(): void {
    this.getAdminAllrequests();
  }

  getAdminAllrequests(){
    this.adminServ.getSentRequesData().subscribe((v) => {
      //Variable to store temporary data
      this.tempData = v.result
      
     
      //Looping through the object
      for(let i=0; i<this.tempData.length; i++) {

          // pushing all the data in the sentrequest variable
        this.sentRequest.push(this.tempData[i])

         

      }
      
      // saving the data in the alldata variable
      this.alldata =this.sentRequest;

      
      //Optionally displaying the data on the console
      console.log( this.alldata)
     
      

      
     
      
     
    }

    );
  }

}

import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service';


@Component({
  selector: 'app-availabletechnician',
  templateUrl: './availabletechnician.component.html',
  styleUrls: ['./availabletechnician.component.css']
})
export class AvailabletechnicianComponent implements OnInit{
   //Variable to store temporary data
   tempData =[];

   //Variable to store all the  data
   alldata: any;
 
    //Variable used to push all the data in
   sentRequest =[];

  
  constructor(private techService:MyHttpServiceService){}

  ngOnInit(): void {

    //this.getData();
    
  }

  getData(){
        this.techService.getTechAvailable().subscribe(v => {

            //Variable to store temporary data
            this.tempData = v.result;

            //Looping through the object
            for(let i=0; i<this.tempData.length; i++) {

              // pushing all the data in the sentrequest variable
              this.sentRequest.push(this.tempData[i])
            }


            this.alldata = this.sentRequest;

            //Optionally displaying data on the console
            console.log(this.alldata);

        });

      
  }

}

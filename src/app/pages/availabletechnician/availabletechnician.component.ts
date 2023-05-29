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

   //Store all the empty messages
   message = "";
  
  constructor(private techService:MyHttpServiceService){}

  ngOnInit(): void {

    this.getData();
    
    
    
  }

  assignArtisan() {

    setTimeout(function(){
      window.location.reload();
    }, 3000);
   
    this.message = "";
      this.message = "Successfully assigned the request to a artisan, ";
      return alert(this.message)
      
  }

  //Get the available technician of the requester/Staff that is logged in
  getData(){
        this.techService.getTechAvailable(1685352844675).subscribe(v => {
          
            //Variable to store temporary data
            this.tempData = v;
           


           
            /**/

            // //Looping through the object
            for(let i=0; i<this.tempData.length; i++) {

            //   // pushing all the data in the sentrequest variable
              this.sentRequest.push(this.tempData[i])
             }


             this.alldata = this.sentRequest;

            // //Optionally displaying data on the console
             console.log(this.alldata);

        });

      
  }

}

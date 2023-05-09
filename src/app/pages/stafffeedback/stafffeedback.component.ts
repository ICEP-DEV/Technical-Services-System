import { Component } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service';

@Component({
  selector: 'app-stafffeedback',
  templateUrl: './stafffeedback.component.html',
  styleUrls: ['./stafffeedback.component.css']
})
export class StafffeedbackComponent {

  option = "";
  description = "";
   data = "";
  storeApiFromData  = [];
  storeApiFromData1 = [];
  array = [];


  constructor (private staffServ:MyHttpServiceService) {  
  }

  
  errorMsg = ["Both fields are empty","Description is required","3"];
  submitResults(feedback: any) {
    console.log('You have clicked the submit button');
    console.log(feedback.value.inlineRadioOptions);
    console.log(feedback.value.description);
    console.log();

    if (feedback.value.inlineRadioOptions == "" && feedback.value.description == "") {

        alert(this.errorMsg[0]); 
    }
    else 
    if(feedback.value.inlineRadioOptions == "" )
    {
      alert(this.errorMsg[1]); 
    }
    else 
    if(feedback.value.description == "" )
    {
      alert(this.errorMsg[1]); 
    }
    
    else {
      this.option = feedback.value.inlineRadioOptions;
      this.description = feedback.value.description;
      this.data = feedback.value


    }

    /*this.staffServ.postStaffFeedback(this.data).subscribe((v) => {

        console.log(v);

    });
    */
     
    this.staffServ.getSentRequesData().subscribe((v) => {
        
        console.log( this.storeApiFromData1 = v);

         this.array = Object.values(this.storeApiFromData1);

          console.log(this.array);
        
    }) 
    
    
   
  }
}

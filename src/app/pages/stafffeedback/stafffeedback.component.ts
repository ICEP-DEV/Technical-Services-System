import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
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
  storeApiFromData = [];
  storeApiFromData1 = [];
  array = [];
  message = "";



  constructor(private staffServ: MyHttpServiceService) {
  }

  ngOnInit() {

  }

remove(){
  
}

  errorMsg = ["Both fields are empty", "Description is required", "3"];

  tempJobcard: any
  //submitResults(feedback:any) {

  submitResults() {
    this.message = "";

    if (this.option == "") {
      this.message = "Option is required please select"
      return alert(this.message)
    }

    else 
    if (this.description == "") {
      this.message = "Description is required"
      return alert(this.message)

    }
    else  
    if(this.description != "" && this.option != "") {
      this.message = "Feedback has been sent succefully"
      console.log(this.message)
      this.option = ""
      this.description = ""
      return alert(this.message)

    }
    
    
  }

  /*
      console.log('You have clicked the submit button');
// console.log(feedback.value.inlineRadioOptions);
// console.log(feedback.value.description);
console.log(feedback);
 
if (feedback.value.inlineRadioOptions == "" && feedback.value.description == "") {
  this.errorMsg[0];
  
}
 else
  if (feedback.value.inlineRadioOptions == "") {
     this.errorMsg[1];
    
  }
  else{}
if (feedback.value.description == "") {
  this.errorMsg[1];
}
 
else {
this.option = feedback.value.inlineRadioOptions;
this.description = feedback.value.description;
this.data = feedback.value
}
 
  
feedback.reset();
  */








  //var data = { staff_feedback: "job well done", rating: "5", id: 1678884550556 }

  /*
      this.staffServ.postStaffFeedback(data).subscribe((v) => {
        console.log(v)
        this.option="";
        this.description = "";
        console.log("submited")
        
      });*/

  /*
  this.staffServ.getSentRequesData().subscribe((v) => {

    console.log(this.storeApiFromData1 = v);

    //this.array = Object.values(this.storeApiFromData1);

    //console.log(this.array);

  })*/



}












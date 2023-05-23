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

  errorMsg = ["Both fields are empty", "Description is required", "3"];

  tempJobcard: any
  submitResults() {

    this.message = "";
    console.log(this.option, this.description)
    if (this.option == "") {
      return this.message  = "Option is required please select"

    }
    if (this.description == "") {
      return this.message  = "Description is required"
    }

    if (this.description != "" && this.option != "") {
      return this.message = "Feedback has been sent succefully"
      console.log(this.message)
      this.option = ""
      this.description = ""
    }




    // console.log('You have clicked the submit button');
    // console.log(feedback.value.inlineRadioOptions);
    // console.log(feedback.value.description);
    // console.log(feedback.value);

    // if (feedback.value.inlineRadioOptions == "" && feedback.value.description == "") {
    //   this.Errors = this.errorMsg[0];
    //   return this.Errors
    // }
    // else
    //   if (feedback.value.inlineRadioOptions == "") {
    //     this.Errors = this.errorMsg[1];
    //     return this.Errors
    //   }
    //   else{}
    // if (feedback.value.description == "") {
    //   return alert(this.errorMsg[1]);
    // }

    // else {
    // this.option = feedback.value.inlineRadioOptions;
    // this.description = feedback.value.description;
    // this.data = feedback.value
    // }

    var data = { staff_feedback: "job well done", rating: "5", id: 1678884550556 }

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


  remove() {

  }





}



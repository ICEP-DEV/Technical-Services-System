import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-stafffeedback',
  templateUrl: './stafffeedback.component.html',
  styleUrls: ['./stafffeedback.component.css']
})
export class StafffeedbackComponent implements OnInit {

  option = "";
  description = "";
  data = "";
  storeApiFromData = [];
  storeApiFromData1 = [];
  array = [];
  message = "";
  set_object:any;
  readData:any;

  constructor(private service: ApiserviceService,private _router: Router) {}
 
  ngOnInit(): void {
    this.Allrequests()

  }

  Allrequests(){
    var tempId = localStorage.getItem('stafflogin')
    var staffId = Number(tempId?.substring(1, tempId.length -1))
    console.log(staffId);

  }
  



  remove(){
  
  
  }

  // priority(event:any,jobCardId:Number){
  //   var data={
  //     priority:event.target.value,
  //   }
    
  //   console.log(jobCardId)

  //   this.service.updatePriority(jobCardId,data)

  //     .subscribe((response) => {
        // this.set_object = response;
        // console.log(response);
        // if (this.set_object.success == true) {
        //   localStorage.setItem('Priority', JSON.stringify(this.setPriority.priority));
        // }
  // })


  feedback(event:any,jobCardId:any){

    var data={
      feedback:event.target.value
     }
     

     console.log(jobCardId)

     this.service.postStaffFeedback(event,data)
     .subscribe((response) => {
      this.set_object = response;
      console.log(response);         
    })

  }
  
    
  
  
  
    /*
        console.log('You have clicked the submit button');
  console.log(feedback.value.inlineRadioOptions);
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
  
    logout() {
      localStorage.removeItem('stafflogin')
    }
  
}

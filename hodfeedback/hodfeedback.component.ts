import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-hodfeedback',
  templateUrl: './hodfeedback.component.html',
  styleUrls: ['./hodfeedback.component.css']
})
export class HodfeedbackComponent implements OnInit {

  option = "";
  description = "";
  data:any = '';
  storeApiFromData = [];
  storeApiFromData1 = [];
  array = [];
  message = "";
  set_object:any;
  readData:any;
  completedYes:any = '';
  completedNo:any='';

  selected:any='';

  constructor(private service: ApiserviceService,private _router: Router) {}
 
  ngOnInit(): void {

    var tempId = localStorage.getItem('HODlogin')
    var staffId = Number(tempId?.substring(1, tempId.length -1))
    console.log(staffId);

    
  }

  HODrequests(){

    console.log(this.completedYes)
    console.log(this.completedNo)

    if (this.completedYes =='' || this.completedNo == 'No') {
      this.selected = this.completedNo
      console.log(this.selected)
      this.service.hodFeedback(this.selected,this.data)
       .subscribe((response) => {
        this.set_object = response;
        console.log(response);  
        this.completedYes = '';
        this.completedNo = ''
        console.log(this.completedYes,'  ',this.completedYes)       
      })
    } else if (this.completedYes == true || this.completedNo == false) {
      this.selected = 'Yes';
      console.log(this.data)
      this.service.hodFeedback(this.selected,this.data)
       .subscribe((response) => {
        console.log('Post successful',response);      
      
    },
      error => {
        console.error('Error updating cell', error);
      }
    );
  }

  }
  



  remove(){
  
  
  }


  feedback(event:any,jobCardId:any){

    var data={
      feedback:event.target.value
     }
     

     console.log(jobCardId)

     this.service.hodFeedback(event,data)
     .subscribe((response) => {
      this.set_object = response;
      console.log(response);         
    })

  }
  
handleButtonClick() {
  if (this.completedYes =='' && this.completedNo == 'No') {
    this.selected = this.completedNo
    console.log(this.selected)
    this.service.hodFeedback(this.selected,this.data)
     .subscribe((response) => {
      this.set_object = response;
      console.log(response);         
    })
  } else if (this.completedYes == true && this.completedNo == false) {
    this.selected = 'Yes';
    this.service.hodFeedback(this.selected,this.data)
     .subscribe((response) => {
      this.set_object = response;
      console.log(response);      
    
  },
    error => {
      console.error('Error updating cell', error);
    }
  );
}

}

logout() {
  localStorage.removeItem('hodlogin')
}
}


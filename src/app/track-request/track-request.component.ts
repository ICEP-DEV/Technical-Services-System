import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.css']
})
export class TrackRequestComponent {

  constructor(private service: ApiserviceService,private _router: Router) {}
 
  ngOnInit(): void {
    this.recieveAllRequest()
  }

  allRequest: any;
  tempRequest: any;
  numberDone =0
    
  //get the todo tasks
  recieveAllRequest() {
    this.numberDone=0

    var tempId = localStorage.getItem('stafflogin')
    var staffId = Number(tempId?.substring(1, tempId.length -1))
    console.log(staffId);
    
    this.service.getRequestsBystaffId(staffId).subscribe(respond => {

      //storing the data fetched from the server in a temporary variable
      this.tempRequest = respond
      let requestcount = this.tempRequest.result.length
      console.log(this.tempRequest)
      //array 
      var array = []
      for (let i = 0; i < requestcount; i++) {
       

        //Validating the data in the tempRequest variable
        if (this.tempRequest.result[i].progress == "pending") {
          //If it matches, push the MATCHED DATA to the array variable.
          array.push(this.tempRequest.result[i]);
        }
      }

      //Storing the data in the all request variable/array
      this.allRequest = array
      
      console.log(this.allRequest)
    })
  }


  //get the Inprogress tasks
  getInprogress(){
    this.numberDone=0

    var status = "in-progress"
    let requestcount = this.tempRequest.result.length
    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == status) {
        array.push(this.tempRequest.result[i]);
       
      }
    }
    this.allRequest = array
    console.log(this.allRequest)
  }
   //get the onHold tasks
   getOnHoldTasks(){
    this.numberDone=0
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == "pending" && this.tempRequest.result[i].tech_id != null) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
    console.log(this.allRequest)
  }

  assignTask(){
    this.numberDone=0
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == "pending" && this.tempRequest.result[i].tech_id != null) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
    console.log(this.allRequest)
  }

  //get the Completetd tasks
  getCompleteTasks(){
    var status = "complete"
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      console.log(i)
      if (this.tempRequest.result[i].progress == status) {
        this.numberDone++
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
  }
  /*
      // Get the technician progress status method
  getTechProgressStatus() {

    //The technician task with the updated progress status
    this.service.getTechProgressStatus().subscribe(v => {
      this.progressStatus = v
    })
    }

  */

    feedback(reference:Number){
      this._router.navigate(['/stafffeedback', {state:{reference}}])
    }

    logout() {
      localStorage.removeItem('stafflogin')
    }
  

}

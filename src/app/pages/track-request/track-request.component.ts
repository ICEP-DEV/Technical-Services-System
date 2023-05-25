import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service';


@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.css']
})
export class TrackRequestComponent implements OnInit {

  public dataFetched = [];


  public progressStatus = [];

  constructor(private service: MyHttpServiceService) {
  }


  ngOnInit() {

    // Get the technician progress status method
    //this.getTechProgressStatus();
    this.recieveAllRequest();
    //this.getrequestData(); 
  }
  /*
   getrequestData(){
      this.service.getTechData().subscribe(v =>{
        this.dataFetched = v
      })
    }
  
  */

  // 222424345

  allRequest: any;
  tempRequest: any;

    
  //get the todo tasks
  recieveAllRequest() {
    
    this.service.getRequestsBystaffId(222424345).subscribe(respond => {

      //storing the data fetched from the server in a temporary variable
      this.tempRequest = respond
      let requestcount = this.tempRequest.result.length
      console.log(this.tempRequest)
      //array 
      var array = []
      for (let i = 0; i < requestcount; i++) {
       

        //Validating the data in the tempRequest variable
        if (this.tempRequest.result[i].progress == "to-do") {
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
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == "pending") {
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
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
    console.log(this.allRequest)
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
  
}

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

      // this.allRequest = respond.result;
      // console.log(this.allRequest)
      // var Inprog = this.allRequest.filter((toFilter: any)=>{toFilter.progress=="complete"});
      // console.log(Inprog)
      


      //This is the default state, it will look for the todo Request.

      //array 
      var array = []
      for (let i = 0; i < this.tempRequest.length; i++) {
        //Validating the data in the tempRequest variable
        if (this.tempRequest[i].progress == "todo") {
          //If it matches, push the MATCHED DATA to the array variable.
          array.push(this.tempRequest[i]);
        }
      }

      //Storing the data in the all request variable/array
      this.allRequest = array
      console.log(this.allRequest)
    })
  }


  //get the Inprogress tasks
  getInprogress(){
    var array = []
    for (let i = 0; i < this.tempRequest.length; i++) {
      if (this.tempRequest[i].progress == "in-progress") {
        array.push(this.tempRequest[i]);
      }
    }
    this.allRequest = array
    console.log(this.allRequest)
  }
   //get the onHold tasks
   getOnHoldTasks(){
    var array = []
    for (let i = 0; i < this.tempRequest.length; i++) {
      if (this.tempRequest[i].progress == "complete") {
        array.push(this.tempRequest[i]);
      }
    }
    this.allRequest = array
    console.log(this.allRequest)
  }


  //get the Completetd tasks
  getCompleteTasks(){
    var array = []
    for (let i = 0; i < this.tempRequest.length; i++) {
      if (this.tempRequest[i].progress == "complete") {
        array.push(this.tempRequest[i]);
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

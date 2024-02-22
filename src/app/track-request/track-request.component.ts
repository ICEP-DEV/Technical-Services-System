import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

declare var window:any;
@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.css']
})
export class TrackRequestComponent {

  constructor(private service: ApiserviceService, private _router: Router, private dialog: MatDialog) { }
  formModal:any;
  staff_id:any;
  readData:any;
  private intervalId: any;
  showModal=false;
  messages:string='';
  readDatas:any;
  ngOnInit(): void {
    //initial pop modal
   this.formModal=new window.bootstrap.Modal(
    document.getElementById("staffpop")
   );

   
    this.recieveAllRequest()
    setInterval(() => {
      this.getCompletedTasks();
      this.messages=this.arlet;
      if(this.messages===''&&this.intervalId){
        this.stopInterval()
       
      }else if(this.messages!=''&&this.intervalId){
            
             this.startInterval()
      }
    }, 5000); // 1000 milliseconds (1 second)
  }
/////////arlet
//open modal
openStaffModal(){
  this.formModal.show();
}
closeStaffModal(){
  ///close modal
  this.formModal.hide();
  this.showModal=false;
  this.messages='';
  console.log("close modal")
  // this.message='';
  this.stopInterval()

}
 // Function to stop the interval
 stopInterval() {
  clearInterval(this.intervalId);
  console.log("stopped")
}

startInterval() {
  // Set up the interval and store the interval ID
  this.intervalId = setInterval(() => {
  
    console.log("running")
  }, 5000); // 1000 milliseconds (1 second)
}

onToggleInterval() {
  // Toggle between starting and stopping the interval
  if (this.intervalId) {
    this.stopInterval();
  } else {
    this.startInterval();
  }
}
id:any;
description='';
priority='';
expected_date='';
assigned_date='';
progress='';
category='';

arlet='';
matchingData:any;
getCompletedTasks(){
  var tempId = localStorage.getItem('stafflogin')
    // console.log("locals storage",tempId)
    var staffId = Number(tempId?.substring(1, tempId.length - 1))
    // console.log("locals storage",staffId)
  this.service.CompletedTaskArlet(Number(staffId)).subscribe((respo: any) => {
    console.log("arlet reposnse",respo)
    
    // Extract the array from the response object
    this.readDatas = respo.result;
    let test=respo.arlet;
    //  console.log("arlet",test)
    if(test===true){
      this.readDatas.forEach((data: any) => {
        // if (data.tech_id === this.tech_id) {
          // console.log("id true")
          // Store the results for the matching id in a variable
          this.matchingData = data;
          // console.log("matching data",data)
          this.id=data.staff_id;
          console.log("res id",this.id)
          console.log("local storage id",this.id)
            this.description=data.description;
            this.expected_date=data.expected_date;
            this.priority=data.priority;
            this.category=data.category;
            this.progress=data.progress;
            if(this.id===Number(staffId) && this.progress==="complete"){
                this.showModal=true;
            this.openStaffModal()
            console.log("id match")
            }else{
              console.log("id not match")
            }
          
        // }
      })
    }
      

  })

}



  allRequest: any;
  tempRequest: any;
  numberDone = 0;

  todo: any;
  unAssign = 0
  assigned = 0;
  inprogress = 0;
  hold = 0;
  done = 0;
  isPending = false
  //get the todo tasks
  recieveAllRequest() {
    this.numberDone = 0
    this.unAssign = 0
    this.assigned = 0;
    this.inprogress = 0;
    this.hold = 0;
    this.done = 0;
    this.isPending = false
    var tempId = localStorage.getItem('stafflogin')
    console.log("locals storage",tempId)
    var staffId = Number(tempId?.substring(1, tempId.length - 1))
    this.service.getRequestsBystaffId(staffId).subscribe(respond => {
      console.log("api res",respond)
      //storing the data fetched from the server in a temporary variable
      this.tempRequest = respond;
      let requestcount = this.tempRequest.result.length;
      console.log("results variable",this.tempRequest.result )
      //array 
      var array = []
      for (let i = 0; i < requestcount; i++) {
        //Validating the data in the tempRequest variable
        if (this.tempRequest.result[i].progress == "pending" && this.tempRequest.result[i].tech_id == null) {
          this.unAssign++;
          this.isPending = true;
          //If it matches, push the MATCHED DATA to the array variable.
          array.push(this.tempRequest.result[i]);
        }

        else if (this.tempRequest.result[i].progress == "pending") {
          this.assigned++;
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "in-progress") {
          this.inprogress++;
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "on-hold") {
          this.hold++;
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "complete") {
          this.done++;
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "assign") {
          this.assigned++;
          //If it matches, push the MATCHED DATA to the array variable.
        }
      }

      //this.todo=requestcount;



      //Storing the data in the all request variable/array
      this.allRequest = array
      console.log('todo', this.allRequest)

    })
  }


  //get the Inprogress tasks
  getInprogress() {
    this.numberDone = 0
    this.isPending = false
    var status = "in-progress"
    let requestcount = this.tempRequest.result.length
    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == status) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array


  }
  //get the onHold tasks
  getOnHoldTasks() {
    this.numberDone = 0
    this.isPending = false
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == "on-hold" && this.tempRequest.result[i].tech_id != null) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
  }

  assignTask() {
    this.numberDone = 0
    this.isPending = false
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == "assign" && this.tempRequest.result[i].tech_id != null) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
  }

  //get the Completetd tasks
  getCompleteTasks() {
    var status = "complete"
    this.isPending = false
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
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

  feedback(reference: Number) {
    localStorage.setItem("reference", JSON.stringify(reference))
    this._router.navigate(['/stafffeedback'])
    // this._router.navigate(['/stafffeedback', {state:{reference}}])
  }

  navigateToTable() {
    // Get the reference to the table element
    const table = document.querySelector('.table-responsive');

    // Scroll to the table
    if (table) {
      table.scrollIntoView({ behavior: 'smooth' });
    }
  }

  logout() {
    localStorage.removeItem('stafflogin')
  }


}
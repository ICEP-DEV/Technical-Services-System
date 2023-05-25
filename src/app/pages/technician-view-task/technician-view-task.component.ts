import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service'; 

@Component({
  selector: 'app-technician-view-task',
  templateUrl: './technician-view-task.component.html',
  styleUrls: ['./technician-view-task.component.css']
})
export class TechnicianViewTaskComponent implements OnInit{
  fetchedTechTaskData = [];

  status = [];

  selectedOption="";

  constructor(private techViewServ:MyHttpServiceService) {
      
  }
  ngOnInit() {
   //this.getTechTask();
    this. getallRequests();
   //Posting the data to the server
    //postTechProgress();
  }

           // 222424345

          allRequest: any;
          tempRequest: any;

          getallRequests(){
              this.techViewServ.getTechTaskById(25897486).subscribe(respond=>{
                this.tempRequest = respond.result;
                console.log(this.tempRequest)
              })

          }

          //Selecting the user select option, and storing it in the selected option string variable
          SelectChangeHandler(event:any){
            this.selectedOption = event.target.value;
            console.log(this.selectedOption);
            
          }
          
               // Posting the the option selected by the user from the dropdown
            postTechProgress(){
              this.techViewServ.postTechStatus(this.selectedOption).subscribe(v=>{
                this.status =v;
              })
            }
          
            /*
                this.techViewServ.postTechStatus().subscribe(v=>{
              this.status =v;
            })
            */
            
  /*
    getTechTask(){
      this.techViewServ.getTechTaskData().subscribe((v) => {
        console.log(v);
        this.fetchedTechTaskData = v;
      })
    }
  */
  
 
  
}

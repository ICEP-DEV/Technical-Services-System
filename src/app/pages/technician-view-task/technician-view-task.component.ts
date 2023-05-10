import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service'; 

@Component({
  selector: 'app-technician-view-task',
  templateUrl: './technician-view-task.component.html',
  styleUrls: ['./technician-view-task.component.css']
})
export class TechnicianViewTaskComponent implements OnInit{
  fetchedTechTaskData = [];
  constructor(private techViewServ:MyHttpServiceService) {
      
  }
  ngOnInit() {
    this.getTechTask();
  }


  getTechTask(){
    this.techViewServ.getTechTaskData().subscribe((v) => {
      console.log(v);
      this.fetchedTechTaskData = v;
    })
  }
 
  
}

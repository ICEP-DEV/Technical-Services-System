import { Component } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service'; 

@Component({
  selector: 'app-technician-view-task',
  templateUrl: './technician-view-task.component.html',
  styleUrls: ['./technician-view-task.component.css']
})
export class TechnicianViewTaskComponent {
  fetchedTechTaskData = [];
  constructor(private techViewServ:MyHttpServiceService) {
      
  }

  submit() {
    this.techViewServ.getTechTaskData().subscribe((v) => {
      console.log(v);
      this.fetchedTechTaskData = v;
    })
  }
 
  
}

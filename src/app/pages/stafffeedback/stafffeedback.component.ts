import { Component } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service';


@Component({
  selector: 'app-stafffeedback',
  templateUrl: './stafffeedback.component.html',
  styleUrls: ['./stafffeedback.component.css']
})
export class StafffeedbackComponent {


  constructor (private staffServ:MyHttpServiceService) {  
  }
  
  submitResults(feedback: any) {
    console.log('You have clicked the submit button',feedback);
  }

}




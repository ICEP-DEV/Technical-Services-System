import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service';


@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.css']
})
export class TrackRequestComponent implements OnInit {

  public dataFetched = [];

  constructor(private service:MyHttpServiceService) {

    
  }
 
   
  ngOnInit () {

    this.getrequestData(); 
  }

  getrequestData(){
    this.service.getTechData().subscribe(v =>{
      this.dataFetched = v
    })
  }

  
}

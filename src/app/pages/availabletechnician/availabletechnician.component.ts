import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service';


@Component({
  selector: 'app-availabletechnician',
  templateUrl: './availabletechnician.component.html',
  styleUrls: ['./availabletechnician.component.css']
})
export class AvailabletechnicianComponent implements OnInit{

  public techData  = [];
  constructor(private techService:MyHttpServiceService){}

  ngOnInit(): void {

    this.getData();
    
  }

  getData(){
    this.techService.getTechData().subscribe(v => {console.log(v)});
  }

}

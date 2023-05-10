import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service'; 

@Component({
  selector: 'app-adminviewrequest',
  templateUrl: './adminviewrequest.component.html',
  styleUrls: ['./adminviewrequest.component.css']
})
export class AdminviewrequestComponent implements OnInit {

  constructor(private adminServ:MyHttpServiceService){

  }

  ngOnInit(): void {
    this.getAdminAllrequests();
  }

  getAdminAllrequests(){
    this.adminServ.getAllRequests().subscribe((v) => 
      console.log(v)
    );
  }

}

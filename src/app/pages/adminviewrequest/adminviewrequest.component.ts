import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from 'src/app/my-http-service.service'; 

@Component({
  selector: 'app-adminviewrequest',
  templateUrl: './adminviewrequest.component.html',
  styleUrls: ['./adminviewrequest.component.css']
})
export class AdminviewrequestComponent implements OnInit {
  requests = [];
  constructor(private adminServ:MyHttpServiceService){

  }

  ngOnInit(): void {
    this.getAdminAllrequests();
  }

  getAdminAllrequests(){
    this.adminServ.getSentRequesData().subscribe((v) => {
      console.log(v)
      this.requests = v;
    }

    );
  }

}

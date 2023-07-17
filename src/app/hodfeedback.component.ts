import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-hodfeedback',
  templateUrl: './hodfeedback.component.html',
  styleUrls: ['./hodfeedback.component.css']
})
export class HodfeedbackComponent implements OnInit {

  option = "";
  description = "";
  data = "";
  storeApiFromData = [];
  storeApiFromData1 = [];
  array = [];
  message = "";
  set_object:any;
  readData:any;

  constructor(private service: ApiserviceService,private _router: Router) {}
 
  ngOnInit(): void {
    this.Allrequests()

  }

  Allrequests(){
    var tempId = localStorage.getItem('HODlogin')
    var staffId = Number(tempId?.substring(1, tempId.length -1))
    console.log(staffId);

  }
  



  remove(){
  
  
  }

}

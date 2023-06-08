import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-closelog',
  templateUrl: './closelog.component.html',
  styleUrls: ['./closelog.component.css']
})
export class CloselogComponent implements OnInit{

  constructor(private service:ApiserviceService){}

  readData:any;
  ngOnInit():void{
    this.service.allRequests().subscribe((res)=>{
      console.log(res.result,"res==>");
      this.readData = res.result;
      // localStorage.setItem('details', JSON.stringify(this.readData));
    })
  }

}

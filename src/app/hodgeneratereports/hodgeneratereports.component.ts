import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-hodgeneratereports',
  templateUrl: './hodgeneratereports.component.html',
  styleUrls: ['./hodgeneratereports.component.css']
})
export class HodgeneratereportsComponent {

  id:any;
  displayedColumns=['staff_name','description','venue','category', 'request_date','priority'];
  dataSource! :MatTableDataSource<any>;


  constructor(private report:ApiserviceService){}

  hod_report:any;

  readData:any;

  ngOnInit(): void{
  
    var myid = localStorage.getItem('HODlogin')?.toString()
    this.hod_report = myid?.substring(1,myid.length-1)

    console.log(this.hod_report)

    this.report.HODprogress(Number(this.hod_report)).subscribe((res) => {
      console.log(res, "ram==>");


      this.readData = res;
    })


  }
  }


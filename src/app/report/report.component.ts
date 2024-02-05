import { Component, OnInit, Inject, ViewChild, HostListener  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  id:any;
  displayedColumns=['staff_id','id','category', 'priority', 'progress','req_date', 'assigned_date','completed_date','description','venue','staff_feedback','status'];
  dataSource! :MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private service:ApiserviceService){}

  set_object:any;

  readData:any;
  ngOnInit(){
    this.service.allreq().subscribe((res:any)=>{
       this.dataSource = new MatTableDataSource(res.result);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.matSort
      console.log(res.result,"res==>");
      
      
    })
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
   //show side nav on large screens
   isScreenSizeLargerThanThreshold = true;

   @HostListener('window:resize', ['$event'])
   onResize(event: Event) {
     this.checkScreenSize();
   }
 
  
 
   private checkScreenSize() {
     // Set the threshold value based on your requirement
     const threshold = 991; // Change this value as needed
     this.isScreenSizeLargerThanThreshold = window.innerWidth > threshold;
   }
  

}

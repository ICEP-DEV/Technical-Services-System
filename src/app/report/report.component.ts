import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  //export file to excel
  fileName= 'ExcelSheet.xlsx';
  userList = [{}];

  id:any;
  displayedColumns=['staff_id','id','category', 'priority', 'progress','req_date', 'assigned_date','completed_date','description','venue','staff_feedback','tech_feedback','status'];
  dataSource! :MatTableDataSource<any>;

  data:any

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private service:ApiserviceService){}

  set_object:any;

  readData:any;

  adminAllRequests:any;
  searchButton = "";

  //Admin details
  Requesterdetails:any
  staff: any;
  data1:any
  
  ngOnInit(){
    this.service.allreq().subscribe((res:any)=>{
       this.dataSource = new MatTableDataSource(res.result);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.matSort

       this.data.paginator = this.paginator;
       
      console.log(res.result,"res==>");
      // this.readData = res.result;
      // console.log(this.readData);
      
    })

    this.allRequest()


    //TRYING TO GE THE ADMIN DETRAILS
    this.data1 = localStorage.getItem('admindetails');

    this.Requesterdetails = JSON.parse(this.data1)

    this.staff = this.Requesterdetails.result[0]

    console.log(this.staff,"AdminInformation")
   console.log(this.Requesterdetails)

    
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  // Search() {
  //   if (this.id == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.readData = this.readData.filter((res: { id: string }) => {
  //       return res.id.toLowerCase().includes(this.id.toLowerCase());
  //     });
  //   }
  // }
  logout(){
    localStorage.removeItem('logindata')
  }


  allRequest(){
    this.service.adminAllRequest().subscribe((res)=>{
        this.adminAllRequests=res.result;
        console.log(this.adminAllRequests, "All the requests")
    })
  }
 

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}

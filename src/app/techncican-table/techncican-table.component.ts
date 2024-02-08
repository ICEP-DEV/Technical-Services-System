import { Component, OnInit , ViewChild , HostListener } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-techncican-table',
  templateUrl: './techncican-table.component.html',
  styleUrls: ['./techncican-table.component.css']
})
export class TechncicanTableComponent {
  constructor(private service: ApiserviceService) { }
  technicians:any
  displayedColumns=['tech_id','name','surname','phone','email','availability','division_name','campus'];
  dataSource! :MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  ngOnInit() { 
    this.displayTechnicians()
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
  displayTechnicians(){
    this.service.getartisans().subscribe(respond=>{
      console.log(respond)
      this.dataSource = new MatTableDataSource(respond);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort
      this.technicians= respond
    },err=>{
      console.log(err)
    });
    
  }
  logout() {
    localStorage.removeItem('logindata')
  }

  data = {
    status: ''
  }


  log(event: any, id: Number) { }
}

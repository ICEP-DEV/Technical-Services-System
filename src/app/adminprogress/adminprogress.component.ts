import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-adminprogress',
  templateUrl: './adminprogress.component.html',
  styleUrls: ['./adminprogress.component.css']
})
export class AdminprogressComponent {

  availableTechData:any;

  search = ""
  inprogressTasks:any;
  completedTasks:any;
  message = "";

  constructor(private service:ApiserviceService){}

  
  ngOnInit(): void{
    let data = localStorage.getItem('reference');

   

   this.getInProgress();

     this.getCompleted();



     //Displaying the search value

     
  }

 


  logout(): void{
    localStorage.removeItem('logindata')
  }

 

  printer(): void{
    window.print();
  }


  getInProgress(){
    this.service.getInprogressTasks().subscribe((res)=>{
        // this.data = res;
        this.inprogressTasks = res;
        console.log(this.inprogressTasks)
    });
  }


  getCompleted(){
    this.service.getCompletedTasks().subscribe((res)=>{
      this.completedTasks = res;

      console.log(this.completedTasks)
    })
  }












}


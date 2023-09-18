import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-technician-table',
  templateUrl: './technician-table.component.html',
  styleUrls: ['./technician-table.component.css']
})
export class TechnicianTableComponent {
  constructor(private service: ApiserviceService) { }
  technicians:any
  ngOnInit() { 
    this.displayTechnicians()
  }

  displayTechnicians(){
    this.service.getartisans().subscribe(respond=>{
      
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

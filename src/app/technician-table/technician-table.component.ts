import { Component } from '@angular/core';

@Component({
  selector: 'app-technician-table',
  templateUrl: './technician-table.component.html',
  styleUrls: ['./technician-table.component.css']
})
export class TechnicianTableComponent {

  logout(){
    localStorage.removeItem('logindata')
  }

  technicians = [
    { id: 1, name: 'John', surname: 'Doe', gender: 'Male', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane', surname: 'Smith', gender: 'Female', email: 'jane.smith@example.com' },

    // Add more technicians as needed
  ];

}

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
    { id: 1, ID: 21518934,name: 'John', Surname: 'Doe', phone: '0000000000',gender: 'Male', email: 'john.doe@example.com',Availability: 'available',Campus:'polokwane',Password:'khum0'},
    // { id: 2, name: 'Jane', surname: 'Smith', gender: 'Female', email: 'jane.smith@example.com' },

    // Add more technicians as needed
  ];

}

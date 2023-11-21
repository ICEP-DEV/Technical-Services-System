import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-header',
  templateUrl: './tech-header.component.html',
  styleUrls: ['./tech-header.component.css']
})
export class TechHeaderComponent {

  logout(){
    localStorage.removeItem('techlogin')
  }
  
}

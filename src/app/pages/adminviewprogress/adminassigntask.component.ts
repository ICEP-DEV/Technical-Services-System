import { Component } from '@angular/core';

@Component({
  selector: 'app-adminassigntask',
  templateUrl: './adminassigntask.component.html',
  styleUrls: ['./adminassigntask.component.css']
})
export class AdminassigntaskComponent {




  logout() {
    localStorage.removeItem('stafflogin')
  }

  printer(){
    window.print();
  }

}




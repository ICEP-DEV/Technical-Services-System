import { Component } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRcodeComponent {
  staff: any;
  Requesterdetails:any
  data1:any
  
  ngOnInit(): void {
    
   

     this.data1 = localStorage.getItem('staff');

      this.Requesterdetails = JSON.parse(this.data1)

      this.staff = this.Requesterdetails.result[0]

      console.log(this.staff)
     console.log(this.Requesterdetails)




    

  }

  logout() {
    localStorage.removeItem('stafflogin')
  }
}

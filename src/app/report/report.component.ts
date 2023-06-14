import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  id:any;
  constructor(private service:ApiserviceService){}

  set_object:any;

  readData:any;
  ngOnInit():void{
    // this.service.allreq().subscribe((res)=>{
    //   console.log(res.result,"res==>");
    //   this.readData = res.result;
      // localStorage.setItem('details', JSON.stringify(this.readData));
    // })
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
  

}

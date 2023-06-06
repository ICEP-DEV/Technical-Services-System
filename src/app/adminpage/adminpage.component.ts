
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  temData:any;
  set_object: any;
  set_print:any;
  expo:any;

  setPriority = {
    priority: ''
  }

  ngOnInit(): void{
    this.service.allRequests().subscribe((res)=>{
      console.log(res.result,"res==>");
      this.readData = res.result;
      // localStorage.setItem('details', JSON.stringify(this.readData));
    })
    this.total()
  }

  total():void{
    this.service.totalRequests().subscribe((res)=>{
      // console.log(res.result,"ram==>");
      this.temData = res
      console.log(this.temData)
  })
}

  logout(){
    localStorage.removeItem('logindata')
  }

  priority(event:any,jobCardId:Number){
    var data={
      priority:event.target.value,
    }
    
    console.log(jobCardId)

    this.service.updatePriority(jobCardId,data)

      .subscribe((response) => {
        this.set_object = response;
        console.log(response);
        if (this.set_object.success == true) {
          localStorage.setItem('Priority', JSON.stringify(this.setPriority.priority));
        }
  })
}
printer(){
  window.print();
}

export(){

  this.service.report()

}
}

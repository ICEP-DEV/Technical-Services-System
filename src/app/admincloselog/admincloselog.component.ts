import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-admincloselog',
  templateUrl: './admincloselog.component.html',
  styleUrls: ['./admincloselog.component.css']
})
export class AdmincloselogComponent {
  constructor(private service:ApiserviceService){}


  Requesterdetails:any
  staff: any;
  data1:any;

  set_object:any;

  tasksToClose:any;
  tempdata:any
  readData:any
  ngOnInit():void{
    this.service.waitingToBeClose().subscribe((res)=>{
      // console.log(res, "CHeck HERE")
      this.tempdata = res
      this.tasksToClose = this.tempdata.results
      console.log(this.tasksToClose, "Check HERE");
    },(err)=>{
      console.log(err)
    })

    // this.service.allRequests().subscribe((res)=>{
    //   console.log(res.result,"All the logs");
    //   this.readData = res.result;
    //   localStorage.setItem('details', JSON.stringify(this.readData));
      
    // })
     


    this.data1 = localStorage.getItem('admindetails');

    this.Requesterdetails = JSON.parse(this.data1)

    this.staff = this.Requesterdetails.result[0]

    console.log(this.staff,"AdminInformation")
   console.log(this.Requesterdetails)
  }

  log(event:any,jobCardId:Number){
    var data={
      status:event.target.value,
    }
    
    console.log(jobCardId)

    this.service.closeLog(jobCardId,data).subscribe((response)=>{
         this.set_object = response;
        console.log(response);
        if (this.set_object.success == true) {
          this.set_object.status = "closed"
          data.status= this.set_object;
          window.location.reload();
        }
    })
       

  }

  logout(){
    localStorage.removeItem('logindata')
  }

}

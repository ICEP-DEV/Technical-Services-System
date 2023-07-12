import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-admincloselog',
  templateUrl: './admincloselog.component.html',
  styleUrls: ['./admincloselog.component.css']
})
export class AdmincloselogComponent {
  constructor(private service:ApiserviceService){}

  set_object:any;
tempObject:any
  readData:any;
  ngOnInit():void{
    this.service.waitingToBeClose().subscribe((res)=>{
      this.tempObject = res
      if(this.tempObject.success == true){
        this.readData = this.tempObject.results
      }
      else{

      }
      
    },(err)=>{
      console.log(err)
    })
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

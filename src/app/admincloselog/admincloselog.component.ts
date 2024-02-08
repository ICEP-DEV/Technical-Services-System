import { Component, Inject, ViewChild , HostListener  } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-admincloselog',
  templateUrl: './admincloselog.component.html',
  styleUrls: ['./admincloselog.component.css']
})
export class AdmincloselogComponent {
  constructor(private service:ApiserviceService){}

  set_object:any;

  readData:any;
  tempdata:any
  ngOnInit():void{
    this.service.waitingToBeClose().subscribe((res)=>{
      this.tempdata = res
      this.readData = this.tempdata
      console.log("res of feedback",res);
    },(err)=>{
      console.log(err)
    })
  }

  //show side nav on large screens
  isScreenSizeLargerThanThreshold = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

 

  private checkScreenSize() {
    // Set the threshold value based on your requirement
    const threshold = 991; // Change this value as needed
    this.isScreenSizeLargerThanThreshold = window.innerWidth > threshold;
  }
status:any
  log(jobCardId:Number, progress: string){
    
      // this.status=event.target.value,
      // closed_date:new Date()
    
    
    console.log("job id",jobCardId)
    console.log("progress",progress)
    if(progress=="complete"){
      
    this.service.closeLogs(jobCardId).subscribe((response)=>{
      this.set_object = response;
     console.log("close log res",response);
    //  if (this.set_object.success == true) {
    //    this.set_object.status = "closed"
    //    data.status= this.set_object;
    //    window.location.reload();
    //  }
 })
    }

    // this.service.closeLog(jobCardId,data).subscribe((response)=>{
    //      this.set_object = response;
    //     console.log("close log re",response);
    //     if (this.set_object.success == true) {
    //       this.set_object.status = "closed"
    //       data.status= this.set_object;
    //       window.location.reload();
    //     }
    // })
       

  }

  logout(){
    localStorage.removeItem('logindata')
  }

}

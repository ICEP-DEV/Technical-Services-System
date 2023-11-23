import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

declare var window:any;
@Component({
  selector: 'app-techpage',
  templateUrl: './techpage.component.html',
  styleUrls: ['./techpage.component.css']
})
export class TechpageComponent implements OnInit{

  constructor(private service: ApiserviceService, private _router: Router, private dialog: MatDialog) {}

  tech_id:any
  readData:any;
  set_object:any;
  formModal:any;
  private intervalId: any;
  showModal=false;
  messages:string='';

  setProgress = {
    progress: ''
  }
  readDatas:any
arlet='';
  ngOnInit(): void {
   //initial pop modal
   this.formModal=new window.bootstrap.Modal(
    document.getElementById("techpop")
   );

   var myid =localStorage.getItem('techlogin')?.toString()
   this.tech_id = myid?.substring(1,myid.length-1);
   console.log(this.tech_id)
 
   this.getTasks();
   this.service.Techdata(Number(this.tech_id)).subscribe((res: any) => {
    console.log(res)
  
    // Extract the array from the response object
    this.readData = res.result;
  });
    setInterval(() => {
      this.getTasks();
      this.messages=this.arlet;
      if(this.messages===''&&this.intervalId){
        this.stopInterval()
       
      }else if(this.messages!=''&&this.intervalId){
            
             this.startInterval()
      }
    }, 5000); // 1000 milliseconds (1 second)
  
}

id:any;
description='';
priority='';
expected_date='';

matchingData:any;
getTasks(){
  console.log("tech_id",this.tech_id)
  this.service.TechdataArlet(Number(this.tech_id)).subscribe((respo: any) => {
    // console.log(respo.result)

  
    // Extract the array from the response object
    this.readDatas = respo.result;
    let test=respo.arlet;
  //  console.log("arlet",test)
    if(test===true){
      this.readDatas.forEach((data: any) => {
        // if (data.tech_id === this.tech_id) {
          console.log("id true")
          // Store the results for the matching id in a variable
          this.matchingData = data;
          // console.log("matching data",data)
          this.id=data.tech_id;
          // console.log(this.id)
            this.description=data.description;
            this.expected_date=data.expected_date;
            this.priority=data.priority;
            this.showModal=true;
          this.openTechModal()
        // }
      })
      
     
      // this.arlet=respo.arlet;
      // console.log("arlet",respo.arlet);
      // if(this.id===this.tech_id){
       
      // }
      
    }
  });
  
}
/////////arlet
//open modal
openTechModal(){
  this.formModal.show();
}
closeTechModal(){
  ///close modal
  this.formModal.hide();
  this.showModal=false;
  this.messages='';
  console.log("close modal")
  // this.message='';
  this.stopInterval()

}
 // Function to stop the interval
 stopInterval() {
  clearInterval(this.intervalId);
  console.log("stopped")
}

startInterval() {
  // Set up the interval and store the interval ID
  this.intervalId = setInterval(() => {
  
    console.log("running")
  }, 5000); // 1000 milliseconds (1 second)
}

onToggleInterval() {
  // Toggle between starting and stopping the interval
  if (this.intervalId) {
    this.stopInterval();
  } else {
    this.startInterval();
  }
}


progressTask(event:any,jobCardId:Number){
  var data={
    progress:event.target.value,
  }
  
  console.log(jobCardId)

  this.service.progressTech(jobCardId,data)

    .subscribe((response) => {
      this.set_object = response;
      console.log(response);
      if (this.set_object.success == true) {
        localStorage.setItem('Progress', JSON.stringify(this.setProgress.progress));
      }
})
  





}

logout(){
  localStorage.removeItem('techlogin')
}


}
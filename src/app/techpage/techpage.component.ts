import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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


  value1:any;
  Requesterdetails:any
  staff: any;
  data1:any

  setProgress = {
    progress: ''
  }


  ngOnInit(): void {
    var myid =localStorage.getItem('techlogin')?.toString()
    this.tech_id = myid?.substring(1,myid.length-1);


    
    this.service.Techdata(Number(this.tech_id)).subscribe((res: any) => {
      console.log(res)
    
      // Extract the array from the response object
      this.readData = res.result;
    });
    
    
  
    this.data1 = localStorage.getItem('artisanData');

    this.Requesterdetails = JSON.parse(this.data1)

    this.staff = this.Requesterdetails.result[0]

    console.log(this.staff,"Artisan Information")
   console.log(this.Requesterdetails)
}

progressTask(event:any,jobCardId:Number){
  var data={
    progress:event.target.value,
    
  }
  

  this.value1 = "Progress status updated to " + data.progress

 //  this.navrouter.navigate(['/adminpage'])

  console.log(this.value1)
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
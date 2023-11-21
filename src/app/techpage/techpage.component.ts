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
export class TechpageComponent implements OnInit {

  constructor(private service: ApiserviceService, private _router: Router, private dialog: MatDialog) { }

  tech_id: any
  readData: any;
  set_object: any;
  message = ""
  progressStatus = ''

  ngOnInit(): void {
    var myid = localStorage.getItem('techlogin')?.toString()
    this.tech_id = myid?.substring(1, myid.length - 1);
    this.service.Techdata(Number(this.tech_id)).subscribe((res: any) => {
      // Extract the array from the response object
      this.readData = res.result;
      console.log(this.readData)

    });
  }

  onchangeDropdown(event: any) {
    console.log(event.target.value)
    this.progressStatus = event.target.value
  }
  progressTask(jobCard: any) {
    if (this.progressStatus == "") {
      this.message = "Select status before you save"
      console.log(this.message)
      return;
    }
    console.log(this.progressStatus.toLocaleLowerCase() +" == "+jobCard.progress.toLocaleLowerCase())
    if (this.progressStatus.toLocaleLowerCase() == jobCard.progress.toLocaleLowerCase()) {
      this.message = "Could not change the status to " + this.progressStatus + " since is the current status"
      return;
    }
    var data = {
      progress: this.progressStatus
    }
    var jobCardId = Number(jobCard.id)
    console.log(this.progressStatus)
     this.service.progressTech(jobCardId, data)
       .subscribe((response) => {
         this.set_object = response;
         if (this.set_object.success == true) {
           this.message = "Status is now changed to " +this.progressStatus
           localStorage.setItem('Progress', JSON.stringify(this.progressStatus));
         }
         else{
           this.message = "Could not change the status to "+this.progressStatus
         }
       })
  }

  logout() {
    localStorage.removeItem('techlogin')
  }


}
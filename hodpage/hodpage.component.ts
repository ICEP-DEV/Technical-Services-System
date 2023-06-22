import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-hodpage',
  templateUrl: './hodpage.component.html',
  styleUrls: ['./hodpage.component.css']
})
export class HODpageComponent {

constructor(private progress: ApiserviceService){}

hod : any;
readData : any;


  ngOnInit(): void{

    var myid = localStorage.getItem('HODlogin')?.toString()
    this.hod = myid?.substring(1,myid.length-1)

    console.log(this.hod)

    this.progress.HODprogress(Number(this.hod)).subscribe((res) => {
      console.log(res, "ram==>");


      this.readData = res;
    })


  }
}

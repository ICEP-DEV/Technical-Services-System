import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-hodpage',
  templateUrl: './hodpage.component.html',
  styleUrls: ['./hodpage.component.css']
})
export class HODpageComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

 
 public displayColumn : string[]=['Staff name','description','venue','category','request date','priority'];
 public dataSource =[] ;
  readData:any
  temData:any 
  realData : any
  ngOnInit(): void{
    this.service.getData().subscribe((res)=>{
     console.log(res.result,"res==>");
      this.temData = res.result
      
    })
  //  this.GetAllData()
}
//GetAllData(): void{
  //this.service.getData().subscribe((res)=>{
   // console.log(res.result,"res==>");
   // this.readData = res
    //console.log(this.readData)
    
 // })

}

//}  
        

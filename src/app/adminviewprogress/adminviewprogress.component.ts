import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminassigntask',
  templateUrl: './adminassigntask.component.html',
  styleUrls: ['./adminassigntask.component.css']
})
export class AdminassigntaskComponent implements OnInit{

  availableTechData:any;

  data:any;
  message = "";

  constructor(private service:ApiserviceService,private location: Location, private navrouter:Router){}


  ngOnInit(): void{
 


  let data = localStorage.getItem('reference');

 //let id = data?.slice(7,30);
 console.log(data);
  
    this.service.getTechAvailable(Number(data)).subscribe((res)=>{
      console.log(res,"res==>");
      this.availableTechData = res;
     
    })
  }



  logout(){
    localStorage.removeItem('logindata')
  }

  assignArtisan() {

    setTimeout(function(){
      window.location.reload();
    }, 3000);
   

    this.message = "";
      this.message = "Successfully assigned the request to a artisan, ";
      return alert(this.message)
      
    
  }

}
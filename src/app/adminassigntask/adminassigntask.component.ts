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

  availableTechData :any;
  
  adminTechDetails= {
    tech_id:1,
    admin_id:1
  }
  object_:any;
  pdata:any;
  data:any;
  message = "";
  status =true;
  tech_object: any;

  constructor(private service:ApiserviceService, private navrouter:Router){}


  ngOnInit(): void{
 
    
    //Getting the reference of the request in the local storage, the data is a string
  let data = localStorage.getItem('reference');

  //Displaying the typeOf data
  console.log(typeof(data))
  // data?.slice(10, 50)

 //Convert the local storage reference to a number
 let id = Number(data)

  
  


 //Displaying the data
  console.log(id)
 
 
    //Fetch the available artisan of the/based on the reference number.                or Number(data);
    this.service.getTechAvailable(id).subscribe((res)=>{
      console.log(res,"res==>");
      this.availableTechData = res;

      //Storing the Artisan details in the local storage

      localStorage.setItem('techDetails',JSON.stringify(this.availableTechData))

      // let data = localStorage.getItem("techDetails");

      // // console.log(typeof(data), 'tHIS DATA');

      //  let staff_id = data?.slice(12,20);
      // console.log("25897486")
      //  console.log(staff_id);
      // console.log(typeof(staff_id))

      // console.log(this.availableTechData)
     
    })

    this.message = "";
      

    this.message = "Successfully assigned the request to a artisan, ";

    let requestReferenceData = localStorage.getItem('reference')

    let refenceId = Number(requestReferenceData);

    console.log(refenceId,"reference");
    //Get the Artisan details from the local storage
    let techdata = localStorage.getItem("techDetails");

    //Slicing the string, in order to get the Arisan id
     let artisan = techdata?.slice(12,20);
     

     this.adminTechDetails.tech_id = Number(artisan);
   
     //Artisan staff number
    //console.log("25897486")

     console.log(this.adminTechDetails.tech_id,'ARTISAN NUMBER');
    // console.log(typeof(staff_id))


      
     //Getting the admin id in the local storage,the data is a string
    let admin = localStorage.getItem('admin_id');

    //Convert the local storage admin id to a number
    this.adminTechDetails.admin_id= Number(admin);


    console.log(this.adminTechDetails.admin_id,"Admin id");
    //Have to post the assigned Artisan status

  //  this.service.assignavailArtisan(refenceId,this.status).subscribe((response)=>{

  //   this.object_ = response;
  


  //   //   if(this.pdata.success=='true'){
  //   //     console.log("Data submitted")
  //   //   }
      
      
      
      
  //   })


  }



  logout(){
    localStorage.removeItem('logindata')
  }

  assignArtisan() {

     setTimeout(function(){
      window.location.reload();
     }, 6000);
   
    this.message = "";
      

    this.message = "Successfully assigned the request to a artisan, ";

    let requestReferenceData = localStorage.getItem('reference')

    let refenceId = Number(requestReferenceData);

    console.log(refenceId,"reference");
    //Get the Artisan details from the local storage
    let techdata = localStorage.getItem("techDetails");

    //Slicing the string, in order to get the Arisan id
     let artisan = techdata?.slice(12,20);
     

     this.adminTechDetails.tech_id = Number(artisan);
   
     //Artisan staff number
    //console.log("25897486")

     console.log(this.adminTechDetails.tech_id,'ARTISAN NUMBER');
    // console.log(typeof(staff_id))


      
     //Getting the admin id in the local storage,the data is a string
    let admin = localStorage.getItem('admin_id');

    //Convert the local storage admin id to a number
    this.adminTechDetails.admin_id= Number(admin);


    console.log(this.adminTechDetails.admin_id,"Admin id");
    //Have to post the assigned Artisan status

   this.service.assignavailArtisan(refenceId,this.status).subscribe((response)=>{

    this.object_ = response;
  


    //   if(this.pdata.success=='true'){
    //     console.log("Data submitted")
    //   }
      
      
      
      
    })
      return 
      
    
  }

 
  
}
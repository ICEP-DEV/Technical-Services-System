import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  request ={
    staffno:'',
    name:'',
    email:'',
    venue: '',
    des: '',
    category: '',
    img: '',


  }
  constructor() { }

ngOnInit(): void {
}
   staffnomessage: String ='';
  submitForm(){
    this.staffnomessage= '';
    if(this.request.staffno==''){
      this.staffnomessage='Please enter staf number';
    }
    console.log(this.staffnomessage);
  }


}

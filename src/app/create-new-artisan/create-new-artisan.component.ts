import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

export class createNewArtisan {

  id: number | undefined;
  name: string = '';
  surname: string = '';
  phone: string = '';
  email: string = '';
  gender: string = '';
  availability: string = '';


}


@Component({
  selector: 'app-create-new-artisan',
  templateUrl: './create-new-artisan.component.html',
  styleUrls: ['./create-new-artisan.component.css']

})

export class CreateNewArtisanComponent implements OnInit {

  errormsg: any;
  successmsg: any;
  //  user: any= new this.user
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiserviceService,
    private actrouter: ActivatedRoute,
    private router: Router

  ) { }
  tech_form={
    id:'',
    name:'',
    surname: '',
    phone:'',
    email: '',
    gender: '',
    division: '',
    campus: ''

  }
  divisions: any

  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   id: new FormControl('',[Validators.required]),
    //   name: new FormControl('',[Validators.required]),
    //   surname: new FormControl('',[Validators.required]),
    //   phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   gender:new FormControl('',[Validators.required]),
    //   division: new FormControl('',[Validators.required])
     
    // this.apiservice.allDivisions().subscribe((respo)=>{
    //   console.log(respo);
    //   this.divisions=respo
 
    //  },(error: any)=>{
    //    console.log(error);
    //  })
      
    // })
  }
  
  get fc(){
    return this.userForm.controls;
  }

  submit_artisan() {
    /*if (!this.userForm.valid) {
      return;
    }*/
    console.log(this.userForm.value)
    if(this.userForm) {
      /*this.apiservice.createNewArtisan(this.userForm.value).subscribe((res)=>{
        console.log(res, 'data submitted');
        this.userForm.reset();
        this.successmsg = res.message;
      })*/
      // const formData=this.userForm.value;
      console.log("success")
      console.log(this.userForm.value);
    } else {
      this.errormsg = "All fields required.";
    }
  }

  logout() {
    localStorage.removeItem('logindata')
  }


}



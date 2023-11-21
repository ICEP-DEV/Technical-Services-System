import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { MatDialog } from '@angular/material/dialog';

export class createNewArtisan {

  tech_id: number | undefined;
  name: string = '';
  surname: string = '';
  phone: string = '';
  email: string = '';
  gender: string = '';
  availability: string = '';


}

declare var window:any;
@Component({
  selector: 'app-create-new-artisan',
  templateUrl: './create-new-artisan.component.html',
  styleUrls: ['./create-new-artisan.component.css']

})

export class CreateNewArtisanComponent implements OnInit {

  errormsg: any;
  successmsg: any;
  boolmsg:any;
  //  user: any= new this.user
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiserviceService,
    private actrouter: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog

  ) { }
  tech_form={
    tech_id:'',
    name:'',
    surname: '',
    phone:'',
    email: '',
    gender: '',
    division_id: '',
    campus: ''

  }
  divisions: any;
  formModal:any;
  btnClose:any;

  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   id: new FormControl('',[Validators.required]),
    //   name: new FormControl('',[Validators.required]),
    //   surname: new FormControl('',[Validators.required]),
    //   phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   gender:new FormControl('',[Validators.required]),
    //   division: new FormControl('',[Validators.required])
     
   
      
    //  })

    this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModalCenter")
     );
    //form modal
    // this.btnClose.getElementById("close");
    this.apiservice.allDivisions().subscribe((respo)=>{
      console.log(respo.results);
      this.divisions=respo.results;
 
     },(error: any)=>{
       console.log(error);
     })
     
  }
  openModal(){
    this.formModal.show();
  }
  doSomething(){
    ///close modal
    this.formModal.hide();
  }
  
  get fc(){
    return this.userForm.controls;
  }
 ////check if fileds are empty
  areValuesEmpty(obj:any) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop] === '') {
        return true; // If any property is empty, return true
      }
    }
    return false; // If all properties are non-empty, return false
  }
  ////SET valies to be empty aftr
  resetValuesToEmpty(obj:any) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = ''; // Set the property value to an empty string
      }
    }
  }
 message:any;
  
  submit_artisan() {
    
    console.log(this.tech_form)
    
    const valuesEmpty = this.areValuesEmpty(this.tech_form);

    if (valuesEmpty) {

      console.log('Some values in tech_form are empty.');
      this.boolmsg=true;
      this.successmsg="All fields must be entered"
      // alert("All fields must be entered");
        return;
    } else {
      console.log('All values in tech_form are non-empty.');
      this.apiservice.createNewArtisan(this.tech_form).subscribe((res)=>{
        console.log(res);
        this.message=res;
        this.boolmsg=true;
        this.successmsg=this.message;
        
        this.resetValuesToEmpty(this.tech_form);
        
        // this.successmsg = res.message;
      })
    }
      


  
  }

  logout() {
    localStorage.removeItem('logindata')
  }


}
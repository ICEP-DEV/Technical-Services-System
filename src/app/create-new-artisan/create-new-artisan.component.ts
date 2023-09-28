import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    id:0,
    name:''
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      division: ['', Validators.required]
     

    })
  }

  submit_artisan() {
    /*if (!this.userForm.valid) {
      return;
    }*/
    console.log(this.tech_form)
    if (this.userForm.valid) {
      /*this.apiservice.createNewArtisan(this.userForm.value).subscribe((res)=>{
        console.log(res, 'data submitted');
        this.userForm.reset();
        this.successmsg = res.message;
      })*/
      const formData=this.userForm.value;
      console.log(formData);
    } else {
      this.errormsg = "All fields required.";
    }
  }

  logout() {
    localStorage.removeItem('logindata')
  }


}



;
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { TrackformComponent } from '../trackform/trackform.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errormsg: any;
  adminLogin= {
    admin_email:'',
    password:''
  }


  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService,
    private _router: Router
  ) {}

  ngOnInit() {}

  admin_object:any
  admin_login() {
    if(this.adminLogin.admin_email== '') alert("Email is required")
    if(this.adminLogin.password == '') alert("Password is required")

    this.service.adminLogin(this.adminLogin)
    .subscribe((response)=>{
      this.admin_object = response
      console.log(this.admin_object.body)
      if(this.admin_object.success == true){
        localStorage.setItem('logindata',JSON.stringify(this.admin_object.body))
        this.close()
        this._router.navigate(['/adminpage'])
      }else{
        alert("user not found with these credentials")
      }

      //
    },
    (err)=>{
      alert("Something went wrong, please try after some time")
      //alert(err.message)
    }
    )

    /*if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe(res => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    } else {
      this.errormsg = 'All fields are required';
    }*/
  }

  close(): void {
    this.dialogRef.close();
  }
}
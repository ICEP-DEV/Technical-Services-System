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
  showSuccessMsg:any
  adminLogin= {
    admin_id:'',
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
     if(this.adminLogin.admin_id== '' && this.adminLogin.password == ''){

      this.errormsg = "Admin number and Password is required"
      this.showSuccessMsg = true

      // alert("Email and Password is required");
      // return;

     
     } 
     if(this.adminLogin.admin_id== ''){

      this.errormsg = "Admin number is required"
      this.showSuccessMsg = true
      // alert("Email is required");
      // return;
     } 
     if(this.adminLogin.password== ''){

      this.errormsg = "Password is required"
      this.showSuccessMsg = true

      // alert("Password is required");
      // return;
     } 

    this.service.adminLogin(this.adminLogin)
    .subscribe((response)=>{
      
      this.admin_object = response
      console.log(this.admin_object.admin_id)
      if(this.admin_object.success == true){

        
        // localStorage.setItem("adminLogin",this.admin_object.body?.toString())

        localStorage.setItem('adminlogin',JSON.stringify(this.admin_object.admin_id))

        localStorage.setItem('admindetails',JSON.stringify(response));
        this.close()
        this._router.navigate(['/dash2'])
      }else{

        this.errormsg = "User with these credentials not found!"
        this.showSuccessMsg = true
        // alert("user not found with these credentials")
      }

      //
    },
    (err)=>{

      this.errormsg = "Something is wrong!"
        this.showSuccessMsg = true
        
      // alert("something is wrong")
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
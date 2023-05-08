
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-techlogin',
  templateUrl: './techlogin.component.html',
  styleUrls: ['./techlogin.component.css']
})
export class TechloginComponent implements OnInit {

  errormsg: any;

  userForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
    
    
  });

  constructor(
    public dialogRef: MatDialogRef<TechloginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService
  ) {}

  ngOnInit() {}

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe(res => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    } else {
      this.errormsg = 'All fields are required';
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
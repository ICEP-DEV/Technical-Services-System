import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{

  constructor(private service:ApiserviceService) { }
  errormsg:any;
  ngOnInit(): void {
  }
  userForm =new FormGroup({
    'catergory' : new FormControl('',Validators.required,),
    'venue' : new FormControl('',Validators.required),
    'description' : new FormControl('',Validators.required),
    'image' : new FormControl('',Validators.required)
  });

  staffRequest()
  {
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.service.staffRequests(this.userForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.reset();
      })
    }
    else{
      this.errormsg = 'all field is required';
    }
    
  }

  // constructor(private dialog: MatDialog) {}
 
  // openTrackForm(): void {
  //   const dialogRef = this.dialog.open(TrackformComponent, {
  //     width: '700px',
  //     disableClose: true
  //   });
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  logout(){
    localStorage.removeItem('stafflogin')
  }
  
}


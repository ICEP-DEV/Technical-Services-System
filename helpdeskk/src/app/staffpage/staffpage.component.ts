import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffpage',
  templateUrl: './staffpage.component.html',
  styleUrls: ['./staffpage.component.css']
})
export class StaffpageComponent implements OnInit {
  bld_no = [1,2,3,4,5,6,7,8,9,10,11,12]
  // venue


  requestform = {
    description: '',
    category: '',
    venue: '',
    Image: Blob,
    staff_id: ''
  };

  constructor(private service: ApiserviceService,private _router: Router) {}
  errormsg: any;
  ngOnInit(): void {
  }

  buldingNoSelect(event:any){
    console.log(event.target.value)
  }

  request_object: any
  request() {
    if (this.requestform.staff_id === '') {
      alert("Staff id is required");
      return;
    }
    if (this.requestform.venue === '') {
      alert("Venue is required");
      return;
    }
    if (this.requestform.description === '') {
      alert("Description is required");
      return;
    }

    this.service.request(this.requestform)
      .subscribe((response) => {
        this.request_object = response;
        console.log(response);
        if (this.request_object.success == true){

          this._router.navigate(['staffpage']);

        }else{
          console.log("User ID doesnt match credentials")
        }
        
      },
      (error) => {
        this.errormsg = error;
      });
  }
  


  // staffRequest()
  // {
  //   if(this.userForm.valid)
  //   {
  //     console.log(this.userForm.value);
  //     this.service.staffRequests(this.userForm.value).subscribe((res)=>{
  //       console.log(res,'res==>');
  //       this.userForm.reset();
  //     })
  //   }
  //   else{
  //     this.errormsg = 'all field is required';
  //   }

  // }

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

  resetForm() {
    this.requestform = {
      description: '',
      category: 'default',
      venue: '',
      Image: Blob,
      staff_id: ''
    };
  }

  logout() {
    localStorage.removeItem('techlogin')
  }

}



import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RefConfirmFormComponent } from '../ref-confirm-form/ref-confirm-form.component';

@Component({
  selector: 'app-staffpage',
  templateUrl: './staffpage.component.html',
  styleUrls: ['./staffpage.component.css']
})
export class StaffpageComponent implements OnInit {
  bld_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  venue = [{ buld_no: 10, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 1, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 2, vanues: [{ v: "G3" }, { v: "4" }, { v: "G10" }, { v: "7" }, { v: "112" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 3, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 4, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 5, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 6, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 7, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 8, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  ]

  categoryItem = [
    { item_id: 1, item: ["Table", "Door", "Computer"], category: "Hardware" },
    { item_id: 2, item: ["Cable", "Geyser", "Lights"], category: "Electrical" },
    { item_id: 3, item: ["Pipe", "Geyser", "Toilet"], category: "Plumbing" }
  ]

  problemCategoryItem = [
    { item_id: 1, problem: ["Broken", "Door", "Computer"], category: "Table" },
    { item_id: 2, problem: ["Broken", "Cannot lock", "is locked"], category: "Door" },
    {
      item_id: 3, problem: ["Mouse not moving, responding or connected properly", "Keyboard is not working, responding or connected properly", "Screen is on working", "Screen is cracked or broken",
        "Case or computer cannot switch on"], category: "Computer"
    },
    { item_id: 4, problem: ["Cold water"], category: "Geyser" },
    { item_id: 5, problem: ["Cannot turn on/off", "bulb burst"], category: "Lights" },
    { item_id: 6, problem: ["Burst"], category: "Pipe" },
    { item_id: 7, problem: ["Leaking"], category: "Geyser" },
    { item_id: 8, problem: ["Sewage", "Blocked", "Leaking"], category: "Toilet" },
    { item_id: 9, problem: ["Disconnected", "Ucovered", "on fire"], category: "Cable" },

  ]

  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 21];
  hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
  minutes: any
  getMinutes() {
    var time = []
    for (var k = 0; k < 59; k++) {
      var l = String(k + 1).padStart(2, "0")
      time.push(l)
    }
    this.minutes = time
    console.log(this.minutes)
  }
  selectedBuilding: any
  buildingNo = ""
  requestform = {
    description: '',
    category: '',
    venue: this.buildingNo,
    Image: Blob,
    staff_id: "",

  };

  getSelectedMonth:any

  constructor(private service: ApiserviceService, private _router: Router, private dialog: MatDialog) { }
  errormsg: any;
  successmsg: any;
  showSuccessMsg: any;
  staffId: any
  ngOnInit(): void {
    var myid = localStorage.getItem('stafflogin')?.toString()
    this.staffId = myid?.substring(1, myid.length - 1)
    this.requestform.staff_id = this.staffId
    this.getMinutes()
  }

  buldingNoSelect(event: any) {
    var venueArray = []
    for (var k = 0; k < this.venue.length; k++) {
      if (event.target.value == this.venue[k].buld_no) {
        venueArray.push(this.venue[k].vanues)
        this.buildingNo = event.target.value
      }
    }
    this.selectedBuilding = venueArray[0];
    console.log(this.selectedBuilding)
  }

  getVunueSelected(selectedV: any) {
    console.log(this.buildingNo + " - " + selectedV.target.value)
    this.requestform.venue = this.buildingNo + " - " + selectedV.target.value;
  }

  catItems: any
  tempCat: any
  setCategory(event: any) {
    var index = 0
    console.log(event.target.value)
    let catItemArray = []
    let catItemLength = this.categoryItem.length
    for (var k = 0; k < catItemLength; k++) {
      if (event.target.value == this.categoryItem[k].category) {
        catItemArray.push(this.categoryItem[k].item)
        console.log(this.categoryItem[k].item)
        index = k
      }
    }
    this.tempCat = catItemArray
    this.catItems = this.tempCat[0]
    console.log(this.catItems)

  }

  tempcatItem: any
  problemcategoryItems: any
  setCategoryItem(event: any) {
    console.log(event.target.value)

    let catItemArray = []
    let catItemLength = this.problemCategoryItem.length
    for (var k = 0; k < catItemLength; k++) {
      if (event.target.value == this.problemCategoryItem[k].category) {

        catItemArray.push(this.problemCategoryItem[k].problem)
        console.log(this.problemCategoryItem[k].problem)
      }
    }
    this.tempcatItem = catItemArray
    this.problemcategoryItems = this.tempcatItem[0]
    console.log(this.problemcategoryItems)
  }


request(){
  console.log(this.getSelectedMonth)
}
/*
  request_object: any
  request() {
    console.log(this.requestform)
    if (this.requestform.staff_id) {
      const staff_id = JSON.parse(this.requestform.staff_id);
    }
    if (this.requestform.description == '' && this.requestform.category == '' && this.requestform.venue == '') {
      alert("Fill in the Form")
      return;
    }

    if (this.requestform.category == '') {

      alert("Choose Catergory")
      return;
    }

    if (this.requestform.description === '') {
      alert("Describe the issue")

      return;
    }
    if (this.requestform.venue === '') {
      alert("Choose Building")

      return;
    }

    this.service.request(this.requestform)

      .subscribe((response) => {
        this.request_object = response;
        console.log(response);
        if (this.request_object.success == true) {
          this.successmsg = this.request_object.message;
          this.showSuccessMsg = true;
        } else {
          console.log("User ID doesnt match credentials")
        }

      },
        (error) => {
          this.errormsg = error;
        });

    this.requestform = {
      description: '',
      category: '',
      venue: this.buildingNo,
      Image: Blob,
      staff_id: '',
    };


  }
*/


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



  logout() {
    localStorage.removeItem('stafflogin')
  }

  clear() {


  }

}



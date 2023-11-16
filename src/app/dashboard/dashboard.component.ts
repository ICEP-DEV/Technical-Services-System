import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


declare var window:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskCategories: any;
  readData: any;
  totaltasksData: any;
  totalInprogress: any;
  totalCompleted: any;
  totalClosed: any;
  totalartisan: any;
  statsData: any;
  formModal:any;
  span=false;
  private intervalId: any;
  showModal=false;

  constructor(private service: ApiserviceService,public dialog: MatDialog) { 
   
  }
  
  
  

  showPopup() {
    // Logic to show the popup in ComponentB
    // 
    console.log("pop");
    this.formModal.show();
 
  }
  messages:string='';
  ngOnInit(): void {
    this.getMessage();
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("adminPop")
     );
    this.service.allRequests().subscribe((res) => {
      console.log(res.result, "Active tasks/pending before setting priority");
      this.readData = res.result;

      // setInterval(() => {
      //   this.getMessage();
       
      // }, 5000); 
      setInterval(() => {
        this.getMessage();
        this.messages=this.message;
        if(this.messages===''&&this.intervalId){
          this.stopInterval()
         
        }else if(this.messages!=''&&this.intervalId){
              
               this.startInterval()
        }
      }, 5000); // 1000 milliseconds (1 second)

      
      

    })

    // task categories
    this.getTaskCategories();
    // Total logs
    this.total();

    // Total inprogress
    this.getTotalInprogress();

    // Total comleted
    this.gettotalCompleted();


    this.gettotalArtisans()


    this.getclosedlogs()
    // Logs statistics
    this.getStats();

   
  }
  openAdminModal(){
    this.formModal.show();
  }
  closeAdminModal(){
    ///close modal
    this.formModal.hide();
    this.showModal=false;
    this.messages='';
    console.log("close modal")
    // this.message='';
    this.stopInterval()
  
  }
  message='';
  id=''
  category='';
  description=''
  getMessage() {
    this.service.getRequest().subscribe(
      data => {
        
          this.message = data.request.id;
        if(this.message){
          this.id=data.request.id;
          this.description=data.request.description;
          this.category=data.request.category
          console.log(this.message)
          this.showModal=true;
          this.openAdminModal()
        }
       
        
      
      },
      error => {
        console.error(error);
      }
    );
  }
   // Function to stop the interval
   stopInterval() {
    clearInterval(this.intervalId);
    console.log("stopped")
  }

  startInterval() {
    // Set up the interval and store the interval ID
    this.intervalId = setInterval(() => {
    
      console.log("running")
    }, 5000); // 1000 milliseconds (1 second)
  }

  onToggleInterval() {
    // Toggle between starting and stopping the interval
    if (this.intervalId) {
      this.stopInterval();
    } else {
      this.startInterval();
    }
  }
  



  logout() {
    localStorage.removeItem('logindata')
  }
  //Get the task categories
  getTaskCategories() {
    console.log(46548)
    this.service.getCategories().subscribe((res) => {
      this.taskCategories = res.result;

      console.log(this.taskCategories, "TASKS CATEGORIES");
    })
  }
  //TOTAL iNPROGRESS LOGS
  getTotalInprogress() {
    this.service.getInprogressTasks().subscribe((res) => {
      this.totalInprogress = res;

      console.log(this.totalInprogress, "TotalIn progress")
    })
  }


  gettotalCompleted() {
    this.service.getCompletedTasks().subscribe((res) => {
      this.totalCompleted = res;

      console.log(this.totalCompleted, "TotalCompleted")
    })
  }


  getclosedlogs() {
    this.service.gettotalClosedLogs().subscribe((res) => {
      this.totalClosed = res;

      console.log(this.totalClosed, "Total Closed");
    })
  }

  gettotalArtisans() {

    this.service.getartisans().subscribe((res) => {
      this.totalartisan = res;

      console.log(this.totalartisan, "Total artisan");
    })
  }

  //TOTAL LOGS
  total(): void {
    this.service.totalRequests().subscribe((res) => {
      // console.log(res.result,"ram==>");
      this.totaltasksData = res
      console.log(this.totaltasksData, "total request Length")
    })
  }


  //LOGS STATS
  getStats() {
    this.service.getLogServiceStatistics().subscribe((response) => {
      this.statsData = response;
      // console.log(typeof(this.statsData), "Object Type");

      // this.statsData.push(this.datadata)
      console.log(this.statsData, "Statistics data");
    })
  }



  downloadFile() {
    const apiUrl = "http://localhost:3000"; // Replace with your API URL
    //const apiUrl = "http://192.168.27.20:3000"; // Replace with your API URL

    // Create a link element
    const link = document.createElement('a');
    link.style.display = 'none';

    // Set the URL of the file to download
    link.href = `${apiUrl}/admin/export`;

    // Set the download attribute with the desired filename
    link.download = 'requests.csv';

    // Append the link to the document body
    document.body.appendChild(link);

    // Click the link to trigger the file download
    link.click();

    // Clean up by removing the link from the document body
    document.body.removeChild(link);
  }













}









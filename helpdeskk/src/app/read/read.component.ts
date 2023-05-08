import { FormsModule, NgModel } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { MatDialog } from '@angular/material/dialog';
import { TrackformComponent } from '../trackform/trackform.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  constructor(private dialog: MatDialog) {}
 
  openTrackForm(): void {
    const dialogRef = this.dialog.open(TrackformComponent, {
      width: '700px',
      disableClose: true
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}


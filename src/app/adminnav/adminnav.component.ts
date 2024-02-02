import { Component , HostListener} from '@angular/core';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent {
  isNavbarCollapsed = true;
  isScreenSizeLargerThan991 = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  private checkScreenSize() {
    // You can adjust the breakpoint as needed
    const isSmallScreen = window.innerWidth < 991;
    this.isNavbarCollapsed = isSmallScreen;
  }
  logout() {
    localStorage.removeItem('stafflogin')
  }
  ngOnInit() {
    this.checkScreenSize(); // Initialize the screen size check
  }
  private checkScreenSizes() {
    // Set the threshold value based on your requirement
    const threshold = 991; // Change this value as needed
    this.isScreenSizeLargerThan991 = window.innerWidth > threshold;
  }
}

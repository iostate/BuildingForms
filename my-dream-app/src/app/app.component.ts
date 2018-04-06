import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showSearchBar = false;

  navigateToSignup() {

  }

  /**
   * Switch on or off whether the search bar is shown.
   */
  switchShowSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
}

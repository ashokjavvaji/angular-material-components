import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isSideNavOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clickSideNavButton() {
    this.isSideNavOpen = !this.isSideNavOpen;
    console.log('Sidenav toggled. Current State: '+this.isSideNavOpen);
  }

}

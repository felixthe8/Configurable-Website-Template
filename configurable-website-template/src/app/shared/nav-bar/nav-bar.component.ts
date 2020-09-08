import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  routerLinkOptions = {
    exact: true
  }

  ngOnInit(): void {
  }

}

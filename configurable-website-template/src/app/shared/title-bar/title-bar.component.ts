import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'template-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  titleBarIcon = environment.headerIcon;
  titleBarTitle = environment.headerTitle;

  ngOnInit(): void {
  }

}

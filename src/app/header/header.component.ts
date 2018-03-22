import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
  './header.component.css'
  ]
})
export class HeaderComponent implements OnInit {
	logo = "T&T";
	myString = "Thinh Nguyen";

  constructor() { }

  ngOnInit() {
  }

}

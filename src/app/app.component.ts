import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
// import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  './header/w3.css'
  ]
  // directives: [HeaderComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app';
  ninja = {
		name: "Thinh",
		belt: "black"
	};

	yell(e) {
		alert("I am yelling");
	}
}

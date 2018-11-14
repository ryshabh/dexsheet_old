import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

  getValue(){
    var retVal = prompt("Enter your project name : ", "your project name here");
    localStorage.setItem("project",retVal)
    document.getElementById("demo1").innerHTML = retVal;
    // document.write("You have entered : " + retVal);
  }
}

import { Component, OnInit } from '@angular/core';
import { Inject, AfterViewInit,AfterViewChecked ,ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

	constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }

	ngOnInit() {
	}

  // getValue(){
  //   var retVal = prompt("Enter your project name : ", "your project name here");
  //   localStorage.setItem("project",retVal)
  //   document.getElementById("demo1").innerHTML = retVal;
  //   // document.write("You have entered : " + retVal);
  // }

  ngAfterViewInit(): void {
    const s = this.document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../assets/js/login.js';
    const __this = this; //to store the current instance to call 
                         //afterScriptAdded function on onload event of 
                         //script.
    this.elementRef.nativeElement.appendChild(s);

  }
}

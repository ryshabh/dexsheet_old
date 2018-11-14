import { Component, OnInit } from '@angular/core';
import { Inject, AfterViewInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit,AfterViewInit {

  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }

  ngOnInit() {
  	const s = this.document.createElement('script');
    var b = localStorage.getItem("project")
    document.getElementById("demo1").innerHTML = b;
    console.log("project ",b)
  }

  ngAfterViewInit() {
    const s = this.document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../assets/js/main.js';
    const __this = this; //to store the current instance to call 
                         //afterScriptAdded function on onload event of 
                         //script.
    this.elementRef.nativeElement.appendChild(s);

  }

}


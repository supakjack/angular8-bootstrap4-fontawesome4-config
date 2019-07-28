import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  myName: string;
  myClass: string;
  myAddress: string;
  myImage?: string;
  myShowHide: boolean=true;
  myButtonName: string='hide';

  constructor() { }

  ngOnInit() {
    this.myName = "Natalee Varin";
    this.myImage = "https://lorempixel.com/400/300/people"
    this.myClass = "6/1"
    this.myAddress = "99/99หมู่ 1 ตำบลท้องเนียน นครศรีธรรมราช"
  }

  myMethod(e){
    this.myShowHide = !this.myShowHide
  }

}

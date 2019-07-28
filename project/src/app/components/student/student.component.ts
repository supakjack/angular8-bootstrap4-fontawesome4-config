import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  myName: string;
  myScore: number;
  myImage?: string;
  myLink?: string;
  myContent: string;

  constructor() { }

  ngOnInit() {
    this.myName="Smith";
    this.myScore=90;
    this.myImage="https://www.standardtrainingindonesia.com/pic/sumarlin_sarangnga_content_919.jpg";
    this.myLink="https://iosthailand.com";
    let dataStringArray = ["ก้อย","หัว"];
    let randomNumber = Math.random()>0.5?1:0;
    this.myContent=dataStringArray[randomNumber];
  }

}

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

  constructor() { }

  ngOnInit() {
    this.myName="Natalee";
    this.myScore=90;
    this.myImage="http://lorempixel.com/400/200/people/5";
  }

}

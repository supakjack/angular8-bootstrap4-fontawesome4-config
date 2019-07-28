import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onUserClick(e){
    alert(`You ${e.type} the button at (${e.clientX},${e.clientY})`)
  }

  onUserDoubleClick(e){
    alert(`You ${e.type} the button at (${e.clientX},${e.clientY})`)
  }

}

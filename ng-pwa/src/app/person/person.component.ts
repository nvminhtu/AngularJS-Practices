import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  // tham biến truyền vào Component - khai báo trong class xuất ra của Component
  @Input () name: String;
  @Input () age: Number;
  constructor() { }

  ngOnInit() {
  }

}

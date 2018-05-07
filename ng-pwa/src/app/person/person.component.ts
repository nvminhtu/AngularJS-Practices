import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  // tham biến truyền vào Component - khai báo trong class xuất ra của Component
  @Input() name: string;
  @Input() age: Number;
  @Output() removePerson = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  removeByClick() {
    this.removePerson.emit(this.name); //truyền vào name của person cần xóa
  }
}

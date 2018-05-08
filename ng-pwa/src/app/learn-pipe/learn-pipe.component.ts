import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  constructor() { }
  birthday = new Date(2018,5,8); // định dạng Tháng năm
  person = { name: "Tu Nguyen", age: "30" }; // mảng
  address = Promise.resolve("862 Lê Đức Thọ");

  ngOnInit() {

  }

}

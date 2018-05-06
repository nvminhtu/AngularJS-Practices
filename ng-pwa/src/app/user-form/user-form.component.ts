import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name = '';
  isHighlight = false;
  evenStyle = { fontSize: '12px', color: 'red' };
  oddStyle = { fontSize: '14px', color: 'black' };
  currentClass = { circle: !this.isHighlight, square: this.isHighlight};

  constructor() { }

  ngOnInit() {
  }

  showEvent(event) {
    //console.log(event.target.value);
    this.name = event.target.value;
  }
}

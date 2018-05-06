import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  
  arrPeople = [
    { name: 'Captain', age: 30 },
    { name: 'Thor', age: 32 },
    { name: 'Ironman', age: 48}
  ]
  constructor() { }

  ngOnInit() {
  }

}

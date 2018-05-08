import { Component , ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent',
    // template: `<h3>{{ value }}</h3>
    //     <app-child (myClick)="changeValue($event)"></app-child>
    // `
    template: `
        <button (click)="onAddforChild();">Add for Child</button>
        <app-child #child></app-child>
    `
    
})

// tạo function để truyền vào action
// truyền tham số cho hàm

export class ParentComponent {
    
   @ViewChild(ChildComponent)
   myChild: ChildComponent;

   onAddforChild() {
       this.myChild.value++;
   }
}


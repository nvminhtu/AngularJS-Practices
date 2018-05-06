import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-child',
    template: '<button (click)="addforParent()">Add</button>'
})

export class ChildComponent {
    @Output() myClick = new EventEmitter;
    
    addforParent() {
        this.myClick.emit(); // khởi tạo hàm
    }
}


import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-child',
    template: `
        <button (click)="addforParent()">Add</button>
        <button (click)="subforParent()">Sub</button>
        `
})

export class ChildComponent {
    @Output() myClick = new EventEmitter<boolean>(); // setup để Angularjs hiểu kiểu dữ liệu truyền vào
    
    addforParent() {
        this.myClick.emit(); // khởi tạo hàm - truyền giá trị vào
    }

    subforParent() {
        this.myClick.emit(false); // khởi tạo hàm - truyền giá trị vào
    }
}


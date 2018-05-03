import { Component } from '@angular/core';

// Decorators

@Component({
    //template: '<h3>This is a sample Component with the name: Word</h3>',
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css'] 
    //link tới file CSS của component
})

export class WordComponent {
    en = 'Hello'; // lỗi string trong typescript
    vn = 'Xin chào';
    imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    forgot = false;

    // khai báo function - ko cần từ function trong class
    toggleForgot() {
        this.forgot = !this.forgot; // truy cập đến thuộc tính
    }
}

// `` dùng để code chuỗi trên nhiều dòng


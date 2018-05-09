import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { IpService } from './ip.service';

// Tách service: Mục tiêu làm cho code ngắn gọn hơn

@Component({
  selector: 'app-ip',
  template: '<h3>{{ ip }}</h3>',
  providers: [IpService]
})
export class IpComponent implements OnInit {
    ip: String;
    constructor(private ipservice: IpService) {}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
        this.ipservice.getIp()
        .then( ip => this.ip = ip)
        .catch( err => console.log(err));
    }
    // theo thứ tự: biến - constructor - khai báo hàm chạy
    
    
    //   ip: String; 
//   constructor( private http: Http) { // fetch data service
//     this.http.get('http://ip.jsontest.com/')
//         .toPromise()
//         .then( res => res.json())
//         .then( resJson => this.ip = resJson.ip)
//         .catch ( err => console.log(err))
//     }
}

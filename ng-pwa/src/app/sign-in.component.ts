import { Component } from "@angular/core";

@Component ({
    selector: 'app-signin',
    template: `
            <form (submit)="onSubmit(formSignin);" #formSignin="ngForm"> 
                <input placeholder="Email" [(ngModel)]="email" name="email">
                <br><br>
                <input type="password" placeholder="Password" [(ngModel)]="password" name="password">
                <br><br>
                <button>Click to show log Email and Password</button>
            </form>
        `
    
})

export class SignInComponent {
    email = '';
    password = '';
    onSubmit(formSignin) {
        console.log(formSignin.value);
    }
}
// @Component ({
//     selector: 'app-signin',
//     template: `
//         <input placeholder="Email" [(ngModel)]="email">
//         <br><br>
//         <input type="password" placeholder="Password" [(ngModel)]="password">
//         <br><br>
//         <button (click)="onSubmit()">Click to show log Email and Password</button>
//     `
// })
// export class SignInComponent {
//     email = '';
//     password = '';
//     onSubmit() {
//         console.log(this.email, this.password);
//     }
// }
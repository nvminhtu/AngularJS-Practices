import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WordComponent } from './word.component'; // ko cần gọi .ts ở đây

@NgModule({
  declarations: [
    AppComponent,
    WordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

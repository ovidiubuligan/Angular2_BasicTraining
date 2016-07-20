import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>',
  // styles can be declared inline 
  styles: [`
      h1 {
        color: #369;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;
      }
      body {
        margin: 2em;
      }
  `]
})
export class AppComponent { }
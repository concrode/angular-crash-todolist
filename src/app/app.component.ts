import { Component } from '@angular/core';

/**
 * templateUrl can change to './app.component.mytesting.html'
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.mytesting.html',
  styleUrls: ['./app.component.css']
})

/**
 * title is a property in /app.component.html
 * name is a property in /app.component.mytesting.html
 */
export class AppComponent {
  title = 'angular-crash-todolist';
  name:string = 'hello world'; // Define name is a string type

  constructor() {
    // As soon as this component loads, in brower console, it prints out 123
    console.log(123);
  }

}

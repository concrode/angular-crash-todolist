import { Component } from '@angular/core';

/**
 * This is typescript decorator and it includes meta-data for the component.
 * 
 * "selector" is what we're gonna use as the HTML tag to insert this commponent into the browser.
 * Here, 'app-root' is used in index.html
 * 
 * "templateUrl" can be used what we call string interpolation where we can embed variables 
 * "templateUrl" can change to './app.component.mytesting.html', default one is
 * './app.component.html'
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.mytesting.html',
  styleUrls: ['./app.component.css']
})

/**
 * title is a property in /app.component.html and referenced by {{ title }}
 * name is a property in /app.component.mytesting.html and referenced by {{ name }}
 */
export class AppComponent {
  title = 'angular-crash-todolist';
  name:string = 'hello world'; // Define name is a string type

  constructor() {
    // As soon as this component loads, in brower console, it prints out 123
    console.log(123);
  }

}

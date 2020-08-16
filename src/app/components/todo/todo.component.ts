import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo' // ".." means going to parent directory

/**
 * selector can be used in another html, here selector:'app-todo' is used in 
 * app.component.mytesting.html
 */
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]
  
  /**
   * constructor is usually used to import services
   */
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id:1,
        title: 'Todo One',
        completed: false
      },
      {
        id:2,
        title: 'Todo Two',
        completed: true
      },
      {
        id:3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }

}

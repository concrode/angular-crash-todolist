import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo' // ".." means going to parent directory
import { TodoService } from '../../services/todo.service'

/**
 * selector can be used in another html, here "selector:'app-todo'" is used in 
 * "app.component.mytesting.html"
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
   * 
   * "private" means it only works here
   * 
   * "TodoService" is from '../../services/todo.service'
   */
  constructor(private todoService:TodoService) { }

  /** 
   * 
   */
  ngOnInit(): void {
    // // "this.todos" is hard-coded in below
    // this.todos = [
    //   {
    //     id:1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id:2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id:3,
    //     title: 'Todo Three',
    //     completed: false
    //   }
    // ]

    //this.todos = this.todoService.getTodos(); //"this.todos" gets data from "todoService";
    // when "this.todoService.getTodos()" is defined as below in "todo.service.ts"
    // getTodos() {
    //   return [
    //     {
    //       id:1,
    //       title: 'Todo One',
    //       completed: false
    //     },
    //     {
    //       id:2,
    //       title: 'Todo Two',
    //       completed: true
    //     },
    //     {
    //       id:3,
    //       title: 'Todo Three',
    //       completed: false
    //     }
    //   ]
    // }

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  /**
   * The function is called as "deleteTodo($event)" of (deleteTodo)="deleteTodo($event)" in "todo.component.html"
   * 
   * @param todo 
   */
  deleteTodo(todo:Todo) {
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
    //console.log("todo.component.ts-delete");
  }

  /**
   * The function is called as (addTodo) of (addTodo)="addTodo($event)" in "todo.component.html"
   * 
   * @param todo 
   */
  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }
}

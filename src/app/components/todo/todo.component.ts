import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo' // ".." means going to parent directory
import { TodoService } from '../../services/todo.service'

/**
 * "selector" can be used in another html. 'app-todo' represents everything for './todo.component.html'
 * when "selector:'app-todo'" is used in 'app.component.mytesting.html', which means we embed './todo.component.html'
 * into 'app.component.mytesting.html'.
 */
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  /**
   * Todo type is in ../models/Todo.ts
   */
  todos:Todo[]
  
  /**
   * Constructor is usually used to import services
   * 
   * "private" means it only works here
   * 
   * "TodoService" is imported from '../../services/todo.service'
   */
  constructor(private todoService:TodoService) { }

  /** 
   * Constructor vs ngOnInit()
   * 
   * Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. 
   * The constructor should only be used to initialize class members but shouldn't do actual "work".
   * So you should use constructor() to setup Dependency Injection and not much else. 
   * ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
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

    // todos is the data received from observable Http response
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  /**
   * The function is called deleteTodo based on "deleteTodo($event)" of (deleteTodo)="deleteTodo($event)" in "todo.component.html"
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
   * The function is called addTodo based on "addTodo($event)" of (addTodo)="addTodo($event)" in "todo.component.html"
   * 
   * @param todo 
   */
  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }
}

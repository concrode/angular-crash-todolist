import { Component, OnInit, Input} from '@angular/core';
import { Todo } from 'src/app/models/Todo';

/**
 * We wanna each todo be its own component, so TodoItem is created as a new component
 * 
 * 'app-todo-item' is used in todo.component.html
 */
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  /**
   * "@Input() todo" here is from "todo.component.html", see [todo] in <app-todo-item *ngFor="let todo of todos" [todo]="todo">,
   * which means it gets each element from todos and each element(todo) is "Todo" class model
   */
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  // Set dynamic classes binding based on "this.todo.completed"
  setClasses() {
    let classes = {
      todo: true, // This "todo" is from "todo-item.component.css" in which defined as ".todo"
      'is-complete': this.todo.completed // The "this.todo.completed" is from "@Input() todo: Todo" in this file
    }

    return classes;
  }

  /**
   * Used in "todo-item.component.html"
   * 
   * @param todo 
   */
  onToggle(todo) {
    todo.completed = ! todo.completed;
    console.log('toggle');
  }

  /**
   * Used in "todo-item.component.html"
   * 
   * @param todo 
   */
  onDelete(todo) {
    console.log('delete');
  }
}

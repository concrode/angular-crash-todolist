import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

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
   * "@Input() todo" here is from "todo.component.html", 
   * see [todo] in <app-todo-item *ngFor="let todo of todos" [todo]="todo">,
   * which means it gets each element from todos and each element(todo) is "Todo" class model
   */
  @Input() todo: Todo;

  /**
   * Emit something out to the parent component
   */
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  /**
   * This function is used in ./todo-item.component.html" where <div [ngClass]="setClasses()">
   * 
   * Set dynamic classes binding based on "this.todo.completed"
   * 
   * Keys in this class are from "todo-item.component.css"
   * 
   */
  setClasses() {
    let classes = {
      // This "todo" is from "todo-item.component.css" in which defined as ".todo"
      todo: true, 

      // 'is-complete' is from todo-item.component.css" in which defined as ".is-complete".
      // Since it has hyphen, so we need single quote when referring it -> 'is-complete'
      // "this.todo.completed" is from "@Input() todo: Todo" in this file
      'is-complete': this.todo.completed 
    }

    return classes;
  }

  /**
   * Used in "todo-item.component.html"
   * 
   * @param todo 
   */
  onToggle(todo) {
    // Toggle in UI
    todo.completed = ! todo.completed;
    //console.log('toggle');

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })
  }

  /**
   * Used in "todo-item.component.html"
   * 
   * @param todo 
   */
  onDelete(todo) {
    // When "delete" button is clicked, it sends off an event in todo-item component, then we are emitting up
    // "deleteTodo", then 'deleteTodo' is caught up at (deleteTodo)="deleteTodo($event) in "todo.component.html".
    // "(deleteTodo)" is what emitted from todo-item component. (see @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter())
    this.deleteTodo.emit(todo); 
    //console.log('delete');
  }
}

import { Component, OnInit, Input} from '@angular/core';
import { Todo } from 'src/app/models/Todo';

/**
 * We wanna each todo to be its own component, so TodoItem is created as a new component
 * 
 */
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  /**
   * todo here is from todo.component.html where <app-todo-item *ngFor="let todo of todos" [todo]="todo">,
   * which means it gets each element from todos and each element(todo) is Todo class model
   */
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}

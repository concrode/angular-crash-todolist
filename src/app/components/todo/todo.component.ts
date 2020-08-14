import { Component, OnInit } from '@angular/core';

/**
 * selector can be used in another html, here we use selector:'app-todo' in 
 * app.component.mytesting.html
 */
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  /**
   * constructor is usually used to import services
   */
  constructor() { }

  ngOnInit(): void {
  }

}

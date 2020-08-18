import { Injectable } from '@angular/core'; // "Injectable" allows service to be injected into a constructor in a component
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  // Get todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

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
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  getPosts(componentId: string): Observable<Post[]> {
    let headers = this.getHeaders(componentId);
    return this.http.get<Post[]>('posts', { headers });
  }

  getTodos(componentId: string): Observable<Todo[]> {
    let headers = this.getHeaders(componentId);
    return this.http.get<Todo[]>('todos', { headers });
  }

  getHeaders(componentId: string): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('X-Component-Id', componentId);
    return headers;
  }
}

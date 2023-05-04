import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstants } from '../common/constants/url-constants';
import { Observable } from 'rxjs';
import { Post } from '../common/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<any>(UrlConstants.POSTS);
  }
}

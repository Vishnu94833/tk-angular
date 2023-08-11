import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postApiLoaded, selectPostsItems } from './state/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$ = this.store.select(selectPostsItems);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(postApiLoaded());

    this.posts$.subscribe((res)=>{
      debugger
      console.log(res);
    })
  }
}

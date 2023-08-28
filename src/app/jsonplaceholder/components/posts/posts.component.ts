import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsActions, selectPostsItems } from './state/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts$;
  constructor(private store: Store) {
    store.dispatch(PostsActions.postApiLoaded());
    this.posts$ = store.select(selectPostsItems);
  }
}

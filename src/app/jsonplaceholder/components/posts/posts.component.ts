import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsActions, selectPostsItems } from './state/posts';
import { Confirmable } from 'src/app/decorators/confirmable.decorator';
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

  @Confirmable({test:'hello world!', data: this})
  openDialogConfirmable(a?: any) {
    debugger;
    console.log('Done something');

  }
}

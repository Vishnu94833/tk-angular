import { Component, OnInit, Signal, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { postApiLoaded, selectPostsItems } from './state/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$ = this.store.select(selectPostsItems);
  // postSignal = signal(0)
  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.postSignal.set(1)
    this.store.dispatch(postApiLoaded());
  }
}

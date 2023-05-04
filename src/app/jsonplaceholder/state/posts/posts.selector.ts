import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const selectPosts = createFeatureSelector<PostsState>('posts');

export const selectPostsItems = createSelector(
  selectPosts,
  (state: PostsState) => state.posts
);

export const selectMenuItem = (props: { id: number }) =>
  createSelector(selectPostsItems, (posts) =>
    posts.find((post) => post.id === props.id)
  );

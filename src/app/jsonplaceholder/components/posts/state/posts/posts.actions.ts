import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Post } from 'src/app/jsonplaceholder/common/model/post.model';

// ! OLD WAY
export const postApiLoaded = createAction('[Posts] Api Loaded');

export const fetchPostsSuccess = createAction(
  '[Posts API] Fetch Posts Success',
  props<{ posts: Post[] }>()
);

export const fetchPostsFailed = createAction(
  '[Posts API] Fetch Posts Failed',
  props<{ error: any }>()
);


// * NEW WAY
export const PostsActions = createActionGroup({
  source: '[Posts API]',
  events: {
    'postApiLoaded': emptyProps(),
   // defining an event without payload using the `emptyProps` function
    'fetchPostsSuccess': props<{ posts: Post[] }>(),

    // defining an event with payload using the `props` function
    'fetchPostsFailed': props<{ error: any }>(),
  },
});

import { createAction, props } from '@ngrx/store';
import { Post } from '../../common/model/post.model';

export const postApiLoaded = createAction('[Posts] Api Loaded');

export const fetchPostsSuccess = createAction(
  '[Posts API] Fetch Posts Success',
  props<{ posts: Post[] }>()
);

export const fetchPostsFailed = createAction(
  '[Posts API] Fetch Posts Failed',
  props<{ error: any }>()
);

// export const addMenuItemFormSubmitted = createAction(
//   "[Add Menu Page] Add Menu Item Form Submitted",
//   props<{ menuItem: Post }>()
// );

// export const addMenuItemSuccess = createAction(
//   "[Menu API] Add Menu Item Success"
// );

// export const addMenuItemFailed = createAction(
//   "[Menu API] Add Menu Item Failed",
//   props<{ error: any }>()
// );

// export const editMenuItemFormSubmitted = createAction(
//   "[Edit Menu Page] Edit Menu Item Form Submitted",
//   props<{ menuItem: Post }>()
// );

// export const editMenuItemSuccess = createAction(
//   "[Menu API] Edit Menu Item Success",
//   props<{ menuItem: Post }>()
// );

// export const editMenuItemFailed = createAction(
//   "[Menu API] Edit Menu Item Failed",
//   props<{ error: any }>()
// );

// export const deleteMenuItemInitiated = createAction(
//   "[Delete Menu Page] Delete Menu Item Initiated",
//   props<{ menuId: string }>()
// );

// export const deleteMenuItemSuccess = createAction(
//   "[Menu API] Delete Menu Item Success",
//   props<{ menuId: string }>()
// );

// export const deleteMenuItemFailed = createAction(
//   "[Menu API] Delete Menu Item Failed",
//   props<{ error: any }>()
// );

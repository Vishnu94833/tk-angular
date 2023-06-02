import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
// import * as MenusReducer from "./menus/menus.reducer";
// import * as UserReducer from "./user/user.reducer";
import * as PostsReducer from "./posts/posts.reducer";

export const reducers: ActionReducerMap<State> = {
  posts: PostsReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

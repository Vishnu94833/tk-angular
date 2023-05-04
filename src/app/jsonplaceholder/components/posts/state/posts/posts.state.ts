import { Post } from "src/app/jsonplaceholder/common/model/post.model";

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [],
};
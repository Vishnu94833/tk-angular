import { Post } from "../../common/model/post.model";

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [],
};

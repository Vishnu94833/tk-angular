import { Post } from "src/app/jsonplaceholder/common/model/post.model";

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    {
      userId: 4848,
      id: 1,
      title: "VK",
      body: "Vishnu Kuppan"
    }
  ],
};
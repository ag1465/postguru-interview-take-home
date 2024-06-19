
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  userid: number;
  id: number;
  title: string;
  body: string;
}
  
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface PostsState {
  selectedPost: Post | null,
  posts: Post[],
  selectedPostComments: Comment[],
}


const initialState: PostsState = {
  selectedPost: null,
  posts:[],
  selectedPostComments:[],
};


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    selectPost(state, action: PayloadAction<Post>) {
        state.selectedPost = action.payload;
    },
    clearSelectedPost(state) {
      state.selectedPost = null;
    },
    setPostsRedux(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    clearPostsRedux(state) {
      state.posts = [];
    },
    setPostsComments(state, action: PayloadAction<Comment[]>) {
      state.selectedPostComments = action.payload;
    },
    addPostsComment: (state, action: PayloadAction<Comment>) => {
      state.selectedPostComments.push(action.payload);
    },
    clearPostsComments(state) {
      state.selectedPostComments = [];
    }
  },
});


export const { selectPost, clearSelectedPost,setPostsRedux, clearPostsRedux, setPostsComments, addPostsComment, clearPostsComments } = postsSlice.actions;
export default postsSlice.reducer;

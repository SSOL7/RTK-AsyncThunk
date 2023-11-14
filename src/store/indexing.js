import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data;
});

// Create a slice
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    favorites: [],
    status: "idle",
    error: null,
    value: 0,
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      console.log(`deleted ${action.payload.id}`);
      state.favorites = state.favorites.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, addToFavorites, removeFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  console.log(genres);
  return genres;
});

const netflixslice = createSlice({
  name: "netflix",
  initialState: {
    movies: [],
    genresLoaded: false,
    genre: [],
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    extraReducers: (builder) => {
      builder.addCase(getGenres.fulfilled, (state, action) => {
        state.genre = action.payload;
        state.genresLoaded = true;
      });
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
    },
  },
});

export const { increment, decrement } = netflixslice.actions;
export default netflixslice.reducer;

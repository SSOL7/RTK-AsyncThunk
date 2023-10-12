import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MY_API_KEY, TMDB_BASE_URL } from '../utils/constant';

export const getGenres = createAsyncThunk('netflix/genres', async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  console.log(genres);
  return genres;
});

const arrayOfMovieData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) moviesGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: moviesGenres.slice(0, 2),
      });
  });
};

const getMovieData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 80 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ''}`);
    arrayOfMovieData(results, moviesArray, genres);
  }
  console.log(moviesArray);
  return moviesArray;
};


export const fetchMovies = createAsyncThunk(
  'netflix/trending',
  async ({ type }, myThunk) => {
    const {
      netflix: { genres },
    } = myThunk.getState();
    console.log(genres);
    return getMovieData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
      genres,
      true
    );
  }
);

const netflixslice = createSlice({
  name: 'netflix',
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

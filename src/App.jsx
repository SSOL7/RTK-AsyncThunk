import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import { fetchPosts } from "./store/indexing";
import MoviePage from "./pages/MoviePage";
import Mylist from "./pages/Mylist";
import { firebaseauth } from "./utils/firebase";
import ProtectedRoute from "./auth/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const [user] = useAuthState(firebaseauth);

  const posts = useSelector((store) => store.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(`App: ${JSON.stringify(posts)}`);

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/mylist" element={<Mylist />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Netflix />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/player" element={<Player />} />
          <Route path="/tv" element={<TvShow />} />
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

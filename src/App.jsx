import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Player from './pages/Player'
import TvShow from './pages/TvShow'
import Netflix from './pages/Netflix'


import './App.css'
import MoviePage from './pages/MoviePage'
import Mylist from './pages/Mylist'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Netflix />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/player" element={<Player />} />
          <Route path="/tv" element={<TvShow />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/mylist" element={<Mylist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

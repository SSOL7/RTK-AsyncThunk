import { useState, useEffect } from "react";
import { firebaseauth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Topnav from "../components/Topnav";
import Card from "../components/Card";
import Mylist from "./Mylist";
import {
  fetchPosts,
  increment,
  decrement,
  addToFavorites,
  removeFromFavorites,
} from "../store/indexing";

import "../App.css";

const Netflix = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const posts = useSelector((store) => store.posts.posts);
  const counter = useSelector((store) => store.posts.value);
  const favoritesentence = useSelector((store) => store.posts.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favoritepost = useSelector((store) => store.posts.favorites);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  window.onscroll = () => {
    setIsScrolling(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const removeFavorite = (postToRemove) => {
    setFavorites(favorites.filter((post) => post.id !== postToRemove.id));
  };

  const addFavorite = (postToAdd) => {
    if (favorites.find((post) => post.id === postToAdd.id)) {
      return;
    } else {
      const newFavorites = [...favorites, postToAdd];
      setFavorites(newFavorites);
    }
  };

  console.log(favorites);

  return (
    <div>
      <HeroContainer>
        <div className="hero">
          <Topnav isScrolling={isScrolling} />
          <img
            className="background-image"
            src="https://i.pinimg.com/originals/39/60/78/396078652ee90370db06582a1ef01bd8.jpg"
            alt="background image"
          />
          <div>
            <h1>Posts</h1>
            <button onClick={() => navigate("/player")} className="playbutton">
              Play
            </button>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  {post.title}
                  <br />
                  <button
                    // execute the removeFavorite function
                    onClick={() => {
                      dispatch(removeFromFavorites(post.title));
                    }}
                    className="removebutton"
                  >
                    Remove favorite
                  </button>
                  <button
                    onClick={() => {
                      dispatch(addToFavorites(post.title));
                    }}
                    className="addbutton"
                  >
                    Add favorite
                  </button>
                </li>
              ))}

              {favorites.map((post) => (
                <Mylist favoritesentences={favoritesentence} />
              ))}
            </ul>
          </div>
          <h2>Favorites sentences:</h2>
          <span>{favoritesentence}</span>
        </div>
        <Card />
      </HeroContainer>
    </div>
  );
};

const HeroContainer = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(30%);
      z-index: -1;
    }
    .container {
      position: absolute;
      bottom: 90vh;
      .title {
        span {
          color: #f7aa04;
          text-transform: uppercase;
          font-size: 2rem;
        }
        p {
          color: white;
          font-size: 1rem;
          width: 40rem;
          font-family: "Roboto", sans-serif;
          color: #f7aa04;
        }
      }
      .buttons {
        display: flex;
      }
    }
    .playbutton {
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      background-color: #f7aa04;
      color: white;
      font-weight: bold;
      cursor: pointer;
      margin-right: 1rem;
    }
    addbutton {
      background-color: green;
      color: white;
      border: none;
      outline: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      margin-right: 1rem;
      cursor: pointer;
    }
    removebutton {
      background-color: red;
      color: white;
      border: none;
      outline: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      margin-right: 1rem;
      cursor: pointer;
    }
    .morebutton {
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      background-color: #f7aa04;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export default Netflix;

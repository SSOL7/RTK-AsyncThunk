import { useState, useEffect } from 'react';
import { firebaseauth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import Topnav from '../components/Topnav';
import Card from '../components/Card';
import { getGenres, fetchMovies } from '../store';
import { fetchPosts } from '../store/indexing';

const Netflix = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const GenresLoaded = useSelector((store) => store.netflix.genresLoaded);
  const posts = useSelector((store) => store.posts.posts);
  const status = useSelector((store) => store.posts.status);
  const error = useSelector((store) => store.posts.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getGenres());
  // },);

  // useEffect(() => {
  //   if (GenresLoaded) {
  //     dispatch(fetchMovies({type: 'all'}));
  //   }
  //   console.log('GenresLoaded');
  // });

  window.onscroll = () => {
    setIsScrolling(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolling);

  return (
    <>
      <HeroContainer>
        <div className='hero'>
          <Topnav isScrolling={isScrolling} />
          <img
            className='background-image'
            src='https://i.pinimg.com/originals/39/60/78/396078652ee90370db06582a1ef01bd8.jpg'
            alt='background image'
          />
          <div>
            <h1>Posts</h1>
            <button
                onClick={() => navigate('/player')}
                className='playbutton'
              >
                Play
              </button>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
          <div className='container'>
            <div className='buttons'>
              
            </div>
          </div>
        </div>
        <Card />
      </HeroContainer>
    </>
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
          font-family: 'Roboto', sans-serif;
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

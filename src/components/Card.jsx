import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/index';
import { fetchPosts } from '../store/indexing';

function Card() {
  const [onHover, setOnHover] = useState(false);
  const counter = useSelector((store) => store.netflix.value);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <>
    
      <CardContainer
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <span>Card</span>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <span>{counter}</span>
        
        <img
          src='https://www.dailysportscar.com/wp-content/uploads/2023/04/2023-SUPER-GT_GT500-Preview-730x487.jpg'
          alt='image'
          // onClick={() => navigate('/player')}
        />
        {onHover && (
          <img
            src='https://www.dailysportscar.com/wp-content/uploads/2023/04/2023-SUPER-GT_GT500-Preview-730x487.jpg'
            alt='image'
            onClick={() => navigate('/player')}
            className='hover-image'
          />
        )}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  .hover-image {
    width: 30%;
    height: 30%;
    object-fit: cover;
    cursor: pointer;
  }
  img {
    width: 30%;
    height: 30%;
    object-fit: cover;
  }
`;

export default Card;

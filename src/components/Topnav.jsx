import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { firebaseauth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

function Topnav({ isScrolling }) {
  const navigate = useNavigate();
  const navlinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'TV Show',
      link: '/tv',
    },
    {
      name: 'Movies',
      link: '/movie',
    },
    {
      name: 'My List',
      link: '/mylist',
    },
  ];

  const log_out = async () => {
    try {
      await firebaseauth.signOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavContainer>
        <nav className={`${isScrolling ? 'scrolled' : 'notScroll'}`}>
        <img
            src='https://seeklogo.com/images/K/KOREA-logo-A6426905CE-seeklogo.com.png'
            alt='logo'
            />
            <span>Topnav container</span>
      <div className='leftside'>
        <div className='logo'>
          
        </div>
        <ul className='links'>
          {navlinks.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
          <button onClick={log_out}>Log out</button>
        </ul>
      </div>

      <div className='rightside'></div>
      </nav>
      
    </NavContainer>
  );
}

const NavContainer = styled.div`
    .notScroll {
        display: flex;
    }
    .scrolled {
        display: flex;
        background-color: black;
    }
    nav {
        position: sticky;
        top: 0;
        height: 5rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0.4rem;
        align-items: center;
    }
    img {
        height: 3rem;
        object-fit: contain;
        cursor: pointer;
        margin-left: 2rem;
    }
    ul {
        display: flex;
        list-style: none;
        margin-left: 2rem;
    }
    li {
        margin-right: 1rem;
    }
    li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
    a:hover {
        color: #07fb13;
    }
    button {
        padding: 0.5rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        background-color: red;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    button:hover {
        color: #07fb13;
    }
`;

export default Topnav;

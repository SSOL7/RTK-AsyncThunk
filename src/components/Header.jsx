/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <div className='logo'>
          <img
            src='https://img.freepik.com/free-vector/gradient-korean-logo-template_23-2149741602.jpg'
            alt='site logo'
          />
        </div>
        <button onClick={() => navigate(props.login ? '/signup' : '/login')}>
          {props.login ? 'Sign in' : 'Log in'}
        </button>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
      object-fit: contain;
      cursor: pointer;
    }
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
`;

export default Header;

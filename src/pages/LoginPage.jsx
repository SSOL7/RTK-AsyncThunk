import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { firebaseauth } from '../utils/firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handle_login = async () => {
    try {
      await signInWithEmailAndPassword(firebaseauth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseauth, (CurrentUser) => {
    if (CurrentUser) {
      navigate('/');
    }
  });

  return (
    <>
      <Wrapper>
        <div className='loginContent'>
          <Header login />
        </div>
        <div className='form'>
          <div className='title'>
            <h2>Login</h2>
          </div>
          <div className='container'>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handle_login}>Log In</button>
          </div>
        </div>
        <BackgroundImage />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  .loginContent {
  }
`;

export default LoginPage;

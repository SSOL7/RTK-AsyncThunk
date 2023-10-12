import { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import { firebaseauth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handle_sign_in = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseauth, email, password);
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
      <Header login />
      <Container>
        <h2>Sign Up Page</h2>
        <BackgroundImage />
        <div className='content'>
          <div className='body'>
            <div className='text'>
              <h3>Unlimited movies, TV shows, and more.</h3>
              <h4>Watch anywhere. Cancel anytime.</h4>
              <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
            </div>
            <div className='form'>
              {showPassword ? (
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              ) : (
                <input
                  type='email'
                  placeholder='Email address'
                  name='email'
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}

              {!showPassword ? (
                <button
                  onClick={() => {
                    setShowPassword(true);
                  }}
                >
                  Get started
                </button>
              ) : (
                <button onClick={handle_sign_in}>Sign Up</button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.39);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 15vh 85vh;
    h3 {
      padding: 0 50rem;
      width: 40vw;
    }
    h4 {
      padding: 0 50rem;
      width: 40vw;
    }
    h5 {
      padding: 0 50rem;
      width: 40vw;
    }
    .form {
      display: grid;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? '1fr 1fr' : '2fr 1fr'};
      padding: 0 50rem;
      width: 40vw;
      input {
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
      }
      button {
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        background-color: red;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

export default SignUpPage;

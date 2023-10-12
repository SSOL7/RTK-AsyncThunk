
import styled from 'styled-components';

const backgroundImage = () => {
  return (
    <div>
      <BackgroundContainer>
        <img
          src='https://wallpapercave.com/wp/wp3718370.jpg'
          alt='background image'
        />
      </BackgroundContainer>
    </div>
  );
};

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -1;
  }
`;

export default backgroundImage;

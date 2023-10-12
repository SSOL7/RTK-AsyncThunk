import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span>Player</span>
      <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/J2X-9D2qTLw?si=i58cZv-2CrcTtbBm'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
      <PlayContainer>
        
        <div className='player'>
          <div className='backarrow'>
            <button onClick={() => navigate(-1)}>Go back</button>
          </div>
          <video src='https://youtu.be/J2X-9D2qTLw?si=iQYG1eMniErDMSN9' autoPlay loop controls muted />
          
        </div>
      </PlayContainer>
    </div>
  );
};

const PlayContainer = styled.div`
`;

export default Player;

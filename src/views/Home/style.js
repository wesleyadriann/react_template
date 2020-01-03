import styled from 'styled-components';

import ReactLogo from '../../assets/images/react.svg';

export const Container = styled.div`
  height: 100vh;
  background-color: #282c34;
  display: flex;
`;

export const Row = styled.div`
  width: 75%;
  max-width: 1140px;
  margin: auto;

  &::before {
    content: " ";
    position: absolute;
    background-image: url(${ReactLogo});
    opacity: 0.1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: 30vw 30vh;
    background-size: 150vh auto;
  }
`;

export const Title = styled.p`
  color: #61dafb;
  font-size: 45px;
  letter-spacing: 0.01em;
  margin: 0;
  font-weight: bold;
  font-style: normal;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  letter-spacing: 0.01em;
  color: #fff;
  font-weight: 200;
  text-align: center;
`;

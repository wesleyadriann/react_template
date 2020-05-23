import styled from 'styled-components';

import { IMAGES } from '../../settings';

export const Container = styled.div`
  height: 100vh;
  background-color: #282c34;
  display: flex;
`;

export const Row = styled.div`
  margin: auto;
  max-width: 1140px;
  width: 75%;

  &::before {
    background-image: url(${IMAGES.reactLogo});
    background-position: 30vw 30vh;
    background-repeat: no-repeat;
    background-size: 150vh auto;
    bottom: 0;
    content: " ";
    left: 0;
    opacity: 0.1;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Title = styled.p`
  color: #61dafb;
  font-size: 45px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.01em;
  margin: 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 200;
  letter-spacing: 0.01em;
  text-align: center;
`;

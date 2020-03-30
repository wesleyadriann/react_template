import React from 'react';
import { KEYS } from '../../settings';

import {
  Container,
  Row,
  Title,
  Subtitle,
} from './style';

const Home = () => (
  <Container>
    <Row>
      <Title>
        React
      </Title>
      <Subtitle>
        { KEYS.envExample }
      </Subtitle>
    </Row>
  </Container>
);

export default Home;

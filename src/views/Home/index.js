import React from 'react'
import { useSelector } from 'react-redux'

import { keys } from '../../settings'

import {
  Container,
  Row,
  Logo,
  Title,
  Subtitle
} from './style'

const Home = () => {
  const { home } = useSelector((state) => state)
  return (
    <Container>
      <Row>
        <Title>
          { home.title }
        </Title>
        <Subtitle>
          { keys.envExample }
        </Subtitle>
      </Row>
      <Logo />
    </Container>
  )
}
export default Home

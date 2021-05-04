import styled from 'styled-components'

import ReactLogo from '../../assets/images/ReactLogo'

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.reactDark};
  display: flex;
  overflow: hidden;
  position: relative;
`

export const Logo = styled(ReactLogo).attrs(() => ({
  height: 'auto',
  with: '150vh'
}))`
  position: absolute;
  opacity: 0.1;
  right: -30vw;
  top: 30vh;
  z-index: 2;
`

export const Row = styled.div`
  margin: auto;
  max-width: 1140px;
  width: 75%;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.react};
  font-size: 45px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.01em;
  margin: 0;
  text-align: center;
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 200;
  letter-spacing: 0.01em;
  text-align: center;
`

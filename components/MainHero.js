import styled from 'styled-components';
import theme from '../config/theme';
import NeonLogo from './NeonLogo';
import Hero from './Hero';

const TextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: ${theme.gridSpacing}px;
`;

const H1 = styled.h1`
  color: ${theme.white};
  font-weight: lighter;
  line-height: 1.3em;
`;

const H2 = styled.h2`
  color: ${theme.lightblue};
  text-transform: uppercase;
`;

const CallToAction = styled.a`
  background-color: ${theme.yellow};
  border: 0;
  color: ${theme.black};
  padding: ${theme.gridSpacing / 2}px ${theme.gridSpacing}px;
  text-decoration: none;
`;

export default () => (
  <Hero backgroundColor={theme.black}>
    <TextContainer>
      <H1>
        A community driven conference<br />for JavaScript developers
      </H1>
      <H2>24th & 25th Nov | Montevideo, Uruguay</H2>
      <CallToAction href="#tickets">Get tickets</CallToAction>
    </TextContainer>
    <NeonLogo scale="1.7" />
  </Hero>
);

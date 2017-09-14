import styled from 'styled-components';
import theme from '../config/theme';
import NeonLogo from './NeonLogo';

const Hero = styled.section`
  align-items: center;
  background-color: ${theme.black};
  display: flex;
  height: calc(100vh - ${theme.headerHeight});
  justify-content: space-between;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 ${theme.spacing * 8}px;
`;

const TextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  padding-right: ${theme.spacing * 8}px;
`;

const H1 = styled.h1`
  color: ${theme.white};
  font-weight: lighter;
`;

const H2 = styled.h2`
  color: ${theme.lightblue};
  text-transform: uppercase;
`;

const CallToAction = styled.a`
  background-color: ${theme.yellow};
  border: 0;
  color: ${theme.black};
  padding: ${theme.spacing * 2}px ${theme.spacing * 8}px;
  text-decoration: none;
`;

export default () => (
  <Hero>
    <TextContainer>
      <H1>
        An exclusive conference<br />for JavaScript developers
      </H1>
      <H2>24th & 25th Nov | Montevideo, Uruguay</H2>
      <CallToAction href="#tickets">Get tickets</CallToAction>
    </TextContainer>
    <NeonLogo scale="1.5 " />
  </Hero>
);

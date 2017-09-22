import styled from 'styled-components';
import theme from '../config/theme';
import NeonLogo from './NeonLogo';
import Hero from './Hero';
import { Mobile, Desktop } from './MediaQueries';

const TextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: ${theme.mobileThreshold}px) {
    padding: 30px;
  }
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: ${theme.gridSpacing}px;
`;

const H1 = styled.h1`
  color: ${theme.white};
  font-size: 2.25em;
  font-weight: normal;
  line-height: 1.5em;
  margin-bottom: 24px;
  margin-top: 0;
`;

const H2 = styled.h2`
  color: ${theme.lightblue};
  font-size: 1.3em;
  font-weight: normal;
  margin-bottom: 48px;
  margin-top: 0;
  text-transform: uppercase;
`;

const CallToAction = styled.a`
  background-color: ${theme.yellow};
  border: 0;
  color: ${theme.black};
  cursor: ${props => props.wait && 'wait'};
  font-weight: bold;
  padding: 5px 40px;
  text-decoration: none;
  &:hover {
    opacity: ${props => props.wait && '0.5'};
  }

  @media (max-width: ${theme.mobileThreshold}px) {
    opacity: ${props => props.wait && '0.5'};
  }
`;

export default () => (
  <Hero backgroundColor={theme.black} withHeader>
    <TextContainer>
      <H1>
        A community driven conference<br />for JavaScript developers
      </H1>
      <H2>
        24th & 25th Nov
        <Desktop component="span">{' | '}</Desktop>
        <Mobile>
          <br />
        </Mobile>
        Montevideo, Uruguay
      </H2>
      <CallToAction href="#tickets" wait>
        Get tickets
      </CallToAction>
    </TextContainer>
    <Desktop>
      <NeonLogo scale={1.7} />
    </Desktop>
  </Hero>
);

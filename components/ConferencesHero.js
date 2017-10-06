import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';

const Container = styled.div`
  align-items: flex-start;
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  padding: ${theme.gridSpacing}px;
  width: 50vw;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 100vw;
    padding: ${theme.gridSpacing}px;
  }
`;

const Microphone = styled.img`
  margin-top: ${theme.gridSpacing}px;
  width: 570px;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 80%;
    align-self: center;
  }
`;

const ConferenceGlow = styled(Glow)`
  transform: translateX(-15px);

  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-9px);
  }
`;

export default () => (
  <Hero backgroundColor={theme.blue} id="conference">
    <Microphone src="/static/conference.gif" />
    <Container>
      <ConferenceGlow src="/static/conferences.svg" color={theme.lightblue} />
      <p>
        On the second day, diverse speakers will cover relevant topics from the JavaScript
        ecosystem, cool libraries, fun experiments and more; an oportunity to learn about JS latest
        and greatest.
      </p>
    </Container>
  </Hero>
);

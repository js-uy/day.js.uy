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

const Keyboard = styled.img`
  margin-top: ${theme.gridSpacing}px;
  width: 570px;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 80%;
    align-self: center;
  }
`;

const WorkshopGlow = styled(Glow)`
  transform: translateX(-13px);

  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-9px);
  }
`;

export default () => (
  <Hero backgroundColor={theme.black} id="workshops">
    <Container>
      <WorkshopGlow src="/static/workshops.svg" color={theme.lightblue} />
      <p>
        An easy going event built for and by developers starting with a day of workshops and
        integration activities, followed by a conference day with plenty of time to chat, share
        experiences and make friends from the community between talks.
      </p>
    </Container>
    <Keyboard src="/static/workshops.gif" />
  </Hero>
);

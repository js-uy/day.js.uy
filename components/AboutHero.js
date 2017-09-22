import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';

const Container = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  width: 50vw;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 100vw;
    padding: ${theme.gridSpacing}px;
    align-items: flex-start;
  }
`;

const Text = styled.p`
  text-align: center;

  @media (max-width: ${theme.mobileThreshold}px) {
    text-align: left;
  }
`;

export default () => (
  <Hero backgroundColor={theme.blue} id="about">
    <Container>
      <Glow src="/static/about.svg" color={theme.lightblue} />
      <Text>
        A single track, two day conference built for and by the JS developer community. A
        conference, a community gathering and a celebration party.
      </Text>
    </Container>
  </Hero>
);

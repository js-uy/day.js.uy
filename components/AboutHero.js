import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';

const Container = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

export default () => (
  <Hero backgroundColor={theme.blue} id="about">
    <Container>
      <Glow src="/static/about.svg" color={theme.lightblue} />
      <p>
        A unique experience for all 200 attendees with workshops and social events the first day and
        a single track conference the second day.
      </p>
    </Container>
  </Hero>
);

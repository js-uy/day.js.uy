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

const Text = styled.p`text-align: center;`;

export default () => (
  <Hero backgroundColor={theme.blue} id="about">
    <Container>
      <Glow src="/static/about.svg" color={theme.lightblue} />
      <Text>
        A single track, two day conference built for and by the JS developer community. A
        conference, a community gathering and a cellebration party.
      </Text>
    </Container>
  </Hero>
);

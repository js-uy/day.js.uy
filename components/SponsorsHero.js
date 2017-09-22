import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';

const Container = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;

  @media (max-width: ${theme.mobileThreshold}px) {
    align-items: flex-start;
    padding: ${theme.gridSpacing}px;
    width: 100vw;
  }
`;

const Text = styled.p`
  text-align: center;

  @media (max-width: ${theme.mobileThreshold}px) {
    text-align: left;
  }
`;

const Link = styled.a`color: ${theme.yellow};`;

export default () => (
  <Hero backgroundColor={theme.blue} id="sponsors">
    <Container>
      <Glow src="/static/sponsors.svg" color={theme.lightblue} />
      <Text>
        We're looking for partners to make this event possible.
        <br />
        Interested in being an sponsor? <Link href="mailto:hola@js.uy">Send us an email</Link>!
      </Text>
    </Container>
  </Hero>
);

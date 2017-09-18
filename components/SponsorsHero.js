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
`;

const Title = styled.figure`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 175px;
  width: 350px;
`;

const Text = styled.p`text-align: center;`;

const Link = styled.a`color: ${theme.yellow};`;

export default () => (
  <Hero backgroundColor={'#101b31' || theme.blue} id="sponsors">
    <Container>
      <Title style={{ backgroundImage: 'url("/static/sponsors.png")' }} />
      <Text>
        We're looking for partners to make this event possible.
        <br />
        Interested in being an sponsor? <Link href="mailto:hola@js.uy">Send us an email</Link>!
      </Text>
    </Container>
  </Hero>
);

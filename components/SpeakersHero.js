import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';

const Container = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`color: ${theme.yellow};`;

export default () => (
  <Hero backgroundColor={theme.black} id="speakers">
    <Container>
      <Glow src="/static/speakers.svg" color={theme.lightblue} />
      <p>
        We have a great lineup coming. In the meantime here's our{' '}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHEs-oa3RL8P2jo_MehR8lq7A0Sje9EJZuXafesqp8Ghv7YQ/viewform"
          target="_blank"
        >
          Call for proposals
        </Link>. Send yours!
      </p>
    </Container>
  </Hero>
);

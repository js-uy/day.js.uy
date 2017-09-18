import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Title = styled.figure`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 130px;
  transform: translateX(-72px);
  width: 250px;
`;

const VenuePics = styled.figure`
  background-image: url('/static/venue-pics.jpg');
  background-position: center;
  background-size: cover;
  flex: 377;
  height: 100%;
  margin: 0;
`;

const VenueInfo = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  flex: 233;
  justify-content: center;
  padding: ${theme.spacing * 4}px;
`;

const Link = styled.a`color: ${theme.yellow};`;

const H2 = styled.h2`
  color: ${theme.lightblue};
  text-transform: uppercase;
`;

export default () => (
  <Hero backgroundColor={'#0d0e0e' || theme.black} id="venue" noPadding>
    <Container>
      <VenuePics />
      <VenueInfo>
        <Title style={{ backgroundImage: 'url("/static/venue.png")' }} />
        <div>
          <H2>WHERE</H2>
          <p>
            <strong>Esplendor Hotel</strong>
          </p>
          <p>Manuel Errazquin 2370</p>
          <p>11300 - Montevideo, Uruguay</p>
        </div>
        <Link
          href="https://www.google.com.uy/maps/place/Esplendor+Montevideo+A+Wyndham+Grand+Hotel/@-34.9113744,-56.1415407,14z/data=!4m8!1m2!2m1!1sesplendor+hotel!3m4!1s0x0:0x40a5c2bc61e23a5d!8m2!3d-34.9283442!4d-56.1601996"
          target="_blank"
        >
          Show Map
        </Link>
      </VenueInfo>
    </Container>
  </Hero>
);

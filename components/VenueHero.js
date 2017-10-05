import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';
import { Mobile, Desktop } from './MediaQueries';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
  align-items: flex-start;
  align-self: center;
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  flex: 233;
  justify-content: flex-start;
  padding: ${theme.gridSpacing * 2}px;

  @media (max-width: ${theme.mobileThreshold}px) {
    padding: ${theme.gridSpacing}px;
  }
`;

const Link = styled.a`color: ${theme.yellow};`;

const H2 = styled.h2`
  color: ${theme.lightblue};
  font-weight: normal;
  text-transform: uppercase;
`;

const VenueGlow = styled(Glow)`
  transform: translateX(-15px);

  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-10px);
  }
`;

const Text = styled.p`font-size: 1rem;`;

const SeparationLine = styled.div`
  height: 1px;
  background: #fff;
  margin: 30px 0 40px;
  width: 40px;
`;

const ShowMap = styled(Link)`
  font-weight: normal;
  text-decoration: none;
`;

export default () => (
  <Hero backgroundColor={'#0d0e0e' || theme.black} id="venue" noPadding>
    <Container>
      <Desktop>
        <VenuePics />
      </Desktop>
      <VenueInfo>
        <VenueGlow src="/static/venue.svg" color={theme.lightblue} />
        <div>
          <H2>WHERE</H2>
          <Text>
            <strong>Esplendor Hotel</strong>
            <br />
            Manuel Errazquin 2370<br />
            11300 - Montevideo, Uruguay
          </Text>
        </div>
        <div>
          <H2>WHEN</H2>
          <Text>November 24th & 25th, 2017</Text>
        </div>
        <SeparationLine />
        <ShowMap
          href="https://www.google.com.uy/maps/place/Esplendor+Montevideo+A+Wyndham+Grand+Hotel/@-34.9113744,-56.1415407,14z/data=!4m8!1m2!2m1!1sesplendor+hotel!3m4!1s0x0:0x40a5c2bc61e23a5d!8m2!3d-34.9283442!4d-56.1601996"
          target="_blank"
        >
          Show Map →
        </ShowMap>
      </VenueInfo>
    </Container>
  </Hero>
);

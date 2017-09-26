import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';

const Container = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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

const SponsorsGlow = styled(Glow)`
  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-9px);
  }
`;

const SponsorsContainer = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${theme.gridSpacing}px;
`;

const SponsorTypeContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const GoldContainer = SponsorTypeContainer.extend`
  padding: ${theme.gridSpacing}px ${theme.gridColumnWidth / 2}px 0;
`;

const SilverContainer = SponsorTypeContainer.extend`
  padding: ${theme.gridSpacing}px ${theme.gridColumnWidth * 2 + theme.gridSpacing}px 0;
`;

const BronzeContainer = SponsorTypeContainer.extend`
  padding: ${theme.gridSpacing}px ${theme.gridColumnWidth * 2.5 + theme.gridSpacing * 2}px 0;
`;

const Sponsor = styled.a`
  background-color: ${theme.white};
  background-image: url('${props => props.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 66%;
  border: 3px solid ${theme.yellow};
  display: block;
`;

const Gold = Sponsor.extend`
  border-color: ${theme.yellow};
  height: 190px;
  width: 270px;
`;

const Silver = Sponsor.extend`
  border-color: ${theme.lightgray};
  height: 140px;
  width: 270px;
`;

const Bronze = Sponsor.extend`
  border-color: ${theme.lightblue};
  height: 140px;
  width: 170px;
`;

export default () => (
  <Hero backgroundColor={theme.blue} id="sponsors" noHeight>
    <Container>
      <SponsorsGlow src="/static/sponsors.svg" color={theme.lightblue} />
      <SponsorsContainer>
        {/* <GoldContainer>

        </GoldContainer> */}
        <SilverContainer>
          <Silver target="_blank" src="/static/wyeworks.png" href="https://wyeworks.com" />
        </SilverContainer>
        <BronzeContainer>
          <Bronze target="_blank" src="/static/hellohello.svg" href="http://hellohello.is" />
          <Bronze target="_blank" src="/static/citrusbyte.svg" href="https://citrusbyte.com" />
        </BronzeContainer>
      </SponsorsContainer>
      <Text>
        We're looking for partners to make this event possible.
        <br />
        Interested in being an sponsor? <Link href="mailto:hola@js.uy">Send us an email</Link>!
      </Text>
    </Container>
  </Hero>
);

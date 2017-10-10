import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';
import { gold, silver, bronze } from '../config/sponsors';

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
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const GoldContainer = SponsorTypeContainer.extend`
  padding: ${theme.gridSpacing}px ${theme.gridColumnWidth / 2}px 0;

  @media (max-width: ${theme.mobileThreshold}px) {
    padding: ${theme.gridSpacing}px 0 0;
  }
`;

const SilverContainer = SponsorTypeContainer.extend`
  padding: ${theme.gridSpacing}px ${theme.gridColumnWidth * 2 + theme.gridSpacing}px 0;

  @media (max-width: ${theme.mobileThreshold}px) {
    padding: ${theme.gridSpacing}px 0 0;
  }
`;

const BronzeContainer = SponsorTypeContainer.extend`
  padding: ${theme.gridSpacing}px ${theme.gridColumnWidth * 2.5 + theme.gridSpacing * 2}px 0;

  @media (max-width: ${theme.mobileThreshold}px) {
    padding: ${theme.gridSpacing}px 0 0;
  }
`;

const sponsorSpacing = 6;

const Sponsor = styled.a`
  background-color: ${theme.white};
  background-image: url('${props => props.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => (props.smaller ? 55 : 80)}%;
  border: 3px solid ${theme.yellow};
  display: block;
  margin-right: ${sponsorSpacing}px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Gold = Sponsor.extend`
  border-color: ${theme.yellow};
  height: 190px;
  width: ${270 - sponsorSpacing}px;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Silver = Sponsor.extend`
  border-color: ${theme.lightgray};
  height: 140px;
  width: ${270 - sponsorSpacing}px;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 100%;
  }
`;

const Bronze = Sponsor.extend`
  border-color: ${theme.lightblue};
  height: 140px;
  width: ${170 - sponsorSpacing}px;
  margin-bottom: ${sponsorSpacing}px;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: calc(50% - ${sponsorSpacing / 2}px);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`;

export default () => (
  <Hero backgroundColor={theme.blue} id="sponsors" noHeight>
    <Container>
      <SponsorsGlow src="/static/sponsors.svg" color={theme.lightblue} />
      <SponsorsContainer>
        {!!gold.length && (
          <GoldContainer>
            {gold.map(({ url, image, smaller }) => (
              <Gold href={url} src={image} smaller={smaller} />
            ))}
          </GoldContainer>
        )}
        {!!silver.length && (
          <SilverContainer>
            {silver.map(({ url, image, smaller }) => (
              <Silver href={url} src={image} smaller={smaller} />
            ))}
          </SilverContainer>
        )}
        {!!bronze.length && (
          <BronzeContainer>
            {bronze.map(({ url, image, smaller }) => (
              <Bronze href={url} src={image} smaller={smaller} />
            ))}
          </BronzeContainer>
        )}
      </SponsorsContainer>
      <Text>
        We're looking for partners to make this event possible.
        <br />
        Interested in being an sponsor? <Link href="mailto:hola@js.uy">Send us an email</Link>!
      </Text>
    </Container>
  </Hero>
);

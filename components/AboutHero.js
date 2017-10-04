import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';
import { Mobile, Desktop } from './MediaQueries';

const InfoContainer = styled.div`
  align-items: flex-start;
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  padding: ${theme.gridSpacing}px;
  width: 50vw;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 100vw;
    padding: ${theme.gridSpacing}px;
  }
`;

const Text = styled.p`text-align: left;`;

const AboutGlow = styled(Glow)`
  transform: translateX(-13px);

  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-9px);
  }
`;

const HelloWorld = styled.img`
  margin-top: ${theme.gridSpacing}px;
  width: 570px;

  @media (max-width: ${theme.mobileThreshold}px) {
    width: 80%;
    align-self: center;
  }
`;

export default () => (
  <Hero backgroundColor={theme.blue} id="about">
    <HelloWorld src="/static/hello-world.gif" />
    <InfoContainer>
      <AboutGlow src="/static/about.svg" color={theme.lightblue} />
      <Text>
        JS Day is not just conference but a gathering, a celebration party where all the JS
        community meets and commemorates another great year.
      </Text>
    </InfoContainer>
  </Hero>
);

import styled from 'styled-components';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import { Mobile, Desktop } from './MediaQueries';
import Glow from './Glow';
import Hero from './Hero';
import speakers from '../config/speakers';
import theme from '../config/theme';

const Container = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${theme.mobileThreshold}px) {
    padding: ${theme.gridSpacing}px;
    max-width: 100vw;
    align-items: flex-start;
  }
`;

const Link = styled.a`
  color: ${theme.yellow};
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.figure`
  background-image: url('${props => props.src}');
  background-position: center;
  background-size: cover;
  filter: grayscale(100%) brightness(120%);
  height: 229px;
  margin-bottom: 15px;
  width: 222px;
`;

const AvatarOverlay = styled.div`
  background-color: ${theme.yellow};
  content: '';
  display: block;
  height: 100%;
  left: 0;
  mix-blend-mode: multiply;
  position: absolute;
  top: 0;
  width: 100%;
`;

const SpeakerContainer = styled.figure`
  padding: 24px;
  background-color: ${theme.blue};
  margin: 0 ${theme.gridSpacing / 2}px;

  @media (max-width: ${theme.mobileThreshold}px) {
    margin: 0;
    margin-right: ${theme.gridSpacing}px;
  }
`;

const Name = styled.p`
  margin: 0;
  line-height: 2em;
  vertical-align: top;
`;

const Twitter = styled.a`
  color: ${theme.lightblue};
  display: block;
  font-size: 0.95em;
  line-height: 1.5em;
  &::before {
    content: '@';
  }
`;

const SpeakersGlow = styled(Glow)`
  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-5px);
  }
`;

const Text = styled.p`
  text-align: center;
`;

const Speaker = ({ name, twitter, avatar }) => (
  <SpeakerContainer>
    <AvatarContainer>
      <Avatar src={avatar} />
      <AvatarOverlay />
    </AvatarContainer>
    <Name>{name}</Name>
    <Twitter href={`https://twitter.com/${twitter}`} target="_blank">
      {twitter}
    </Twitter>
  </SpeakerContainer>
);

const Slider = ({ children, style }) => (
  <ViewPager style={{ margin: `${theme.gridSpacing}px 0`, ...style }}>
    <Frame style={{ outline: 0 }}>
      <Track viewsToShow="auto" swipe="touch" align={0}>
        {children}
      </Track>
    </Frame>
  </ViewPager>
);

export default () => (
  <Hero backgroundColor={theme.black} id="speakers">
    <Container>
      <SpeakersGlow src="/static/speakers.svg" color={theme.lightblue} />
      <Desktop style={{ alignSelf: 'center' }}>
        {matches => (
          <Slider style={{ alignSelf: matches ? 'center' : 'flex-start' }}>
            {speakers.map(speaker => (
              <View key={speaker.twitter}>
                <Speaker {...speaker} />
              </View>
            ))}
          </Slider>
        )}
      </Desktop>
      <Text>
        We have a great lineup coming. <br />
        In the meantime here's our{' '}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHEs-oa3RL8P2jo_MehR8lq7A0Sje9EJZuXafesqp8Ghv7YQ/viewform"
          target="_blank"
        >
          Call for proposals
        </Link>{' '}
        open till October 25th. Send yours!
      </Text>
    </Container>
  </Hero>
);

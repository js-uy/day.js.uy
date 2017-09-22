import styled from 'styled-components';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';
import { Mobile, Desktop } from './MediaQueries';

const speakers = [
  {
    name: 'Álvaro Videla',
    twitter: 'old_sound',
    avatar: 'https://pbs.twimg.com/profile_images/796210937011245056/uP7jSF6B_400x400.jpg',
  },
  {
    name: 'Diego Muracciole',
    twitter: 'diegomura',
    avatar: 'https://pbs.twimg.com/profile_images/822435555145347072/CpfADg0__400x400.jpg',
  },
];

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

const Link = styled.a`color: ${theme.yellow};`;

const Avatar = styled.div`
  background-image: url('${props => props.src}');
  background-position: center;
  background-size: cover;
  height: 229px;
  margin-bottom: 10px;
  position: relative;
  width: 222px;
`;

const AvatarOverlay = styled.div`
  background-color: ${theme.yellow};
  content: '';
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.2;
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

const Twitter = styled.small`
  color: ${theme.lightblue};
  display: block;
  line-height: 1.5em;
  &::before {
    content: '@';
  }
`;

const Speaker = ({ name, twitter, avatar }) => (
  <SpeakerContainer>
    <Avatar src={avatar}>
      <AvatarOverlay />
    </Avatar>
    <Name>{name}</Name>
    <Twitter>{twitter}</Twitter>
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
      <Glow src="/static/speakers.svg" color={theme.lightblue} />
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

import shuffle from 'shuffle-array';
import styled from 'styled-components';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import { Mobile, Desktop } from './MediaQueries';
import Glow from './Glow';
import Hero from './Hero';
import speakers from '../config/speakers';
import theme from '../config/theme';

const Container = styled.div`
  align-items: center;
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: ${theme.mobileThreshold}px) {
    padding: ${theme.gridSpacing}px 0;
    align-items: flex-start;
  }
`;

const Link = styled.a`color: ${theme.yellow};`;

const AvatarContainer = styled.div`position: relative;`;

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
  margin-left: ${theme.gridSpacing}px;
`;

const Name = styled.p`
  margin: 0;
  line-height: 2em;
  vertical-align: top;
`;

const Twitter = styled.a`
  color: ${theme.lightblue};
  display: inline-block;
  font-size: 0.95em;
  line-height: 1.5em;
  margin-bottom: 5px;
  &::before {
    content: '@';
  }
`;

const SpeakerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Country = styled.span`margin-right: 10px;`;

const SpeakersGlow = styled(Glow)`
  @media (max-width: ${theme.mobileThreshold}px) {
    margin-left: ${theme.gridSpacing}px;
    transform: translateX(-5px);
  }
`;

const Text = styled.p`text-align: center;`;

const Arrow = styled.figure`
  background-image: url('/static/arrow-${props => props.direction}.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  height: 40px;
  margin-left: 5px;
  opacity: .9;
  transition: all 250ms ease;
  width: 40px;

  :hover {
    opacity: 1;
  }

  :active {
    transform: scale(1.1);
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  right: ${theme.horizontalPadding};
  top: 25px;
`;

const Speaker = ({ name, twitter, avatar, country }) => (
  <SpeakerContainer>
    <AvatarContainer>
      <Avatar src={avatar} />
      <AvatarOverlay />
    </AvatarContainer>
    <Name>{name}</Name>
    <SpeakerInfo>
      <Country>{country}</Country>
      <Twitter href={`https://twitter.com/${twitter}`} target="_blank">
        {twitter}
      </Twitter>
    </SpeakerInfo>
  </SpeakerContainer>
);

class Slider extends React.Component {
  render() {
    const { children, style, getRef } = this.props;
    return (
      <ViewPager
        style={{
          margin: `${theme.gridSpacing}px 0`,
          width: `100vw`,
        }}
      >
        <Mobile>
          {matches => (
            <Frame style={{ outline: 0 }}>
              <Track infinite viewsToShow="auto" align={matches ? 0 : 0.487} ref={getRef}>
                {children}
              </Track>
            </Frame>
          )}
        </Mobile>
      </ViewPager>
    );
  }
}

export default class extends React.Component {
  render() {
    return (
      <Hero backgroundColor={theme.black} id="speakers" noPadding>
        <Container>
          <SpeakersGlow src="/static/speakers.svg" color={theme.lightblue} />
          <Desktop>
            <ArrowContainer>
              <Arrow direction="left" onClick={() => this.track.prev()} />
              <Arrow direction="right" onClick={() => this.track.next()} />
            </ArrowContainer>
          </Desktop>
          <Slider getRef={c => (this.track = c)}>
            {shuffle(speakers).map(speaker => (
              <View key={speaker.twitter}>
                <Speaker {...speaker} />
              </View>
            ))}
          </Slider>
        </Container>
      </Hero>
    );
  }
}

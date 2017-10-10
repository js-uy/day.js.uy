import styled from 'styled-components';

import Header from '../components/Header';
import MainHero from '../components/MainHero';
import AboutHero from '../components/AboutHero';
import WorkshopsHero from '../components/WorkshopsHero';
import ConferencesHero from '../components/ConferencesHero';
import SpeakersHero from '../components/SpeakersHero';
import SponsorsHero from '../components/SponsorsHero';
import VenueHero from '../components/VenueHero';
import Footer from '../components/Footer';

// prettier-ignore
const Main = styled.main`${props => props.overlayVisible && `
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  position: fixed;
`}`;

export default class extends React.Component {
  state = {
    overlayVisible: false,
  };
  toggleOverlay = () => {
    this.setState({ overlayVisible: !this.state.overlayVisible });
  };
  render() {
    return (
      <Main overlayVisible={this.state.overlayVisible}>
        <Header overlayVisible={this.state.overlayVisible} toggleOverlay={this.toggleOverlay} />
        <MainHero />
        <AboutHero />
        <WorkshopsHero />
        <ConferencesHero />
        <SpeakersHero />
        <SponsorsHero />
        <VenueHero />
        <Footer />
      </Main>
    );
  }
}

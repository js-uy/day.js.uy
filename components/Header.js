import styled from 'styled-components';
import Headroom from 'react-headroom';

import NeonLogo from './NeonLogo';
import theme from '../config/theme';
import { Mobile, Desktop } from './MediaQueries';

const Container = styled.div`
  align-items: center;
  background-color: ${props => (props.yellow ? theme.yellow : theme.black)};
  border-bottom: 2px solid ${props => (props.yellow ? theme.yellow : theme.gray)};
  display: flex;
  height: ${theme.headerHeight}px;
  justify-content: space-between;
  padding: 0 ${theme.horizontalPadding};
  transition: background-color 200ms ease;
  width: 100vw;
  z-index: 6666;
`;

const MobileContainer = styled.div`
  background-color: ${theme.black};
  display: flex;
  justify-content: space-between;
  transition: all 200ms ease;
  width: 100vw;
  z-index: 6666;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  max-width: 720px;
`;

const Anchor = styled.a`
  color: ${props => (props.dark ? theme.blue : theme.yellow)};
  margin-left: ${theme.gridSpacing}px;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  pointer-events: ${props => props.disabled && 'none'};
  text-decoration: none;
  transition: all 200ms ease;

  @media (max-width: ${theme.mobileThreshold}px) {
    margin-left: 0;
  }
`;

const LogoContainer = styled.div`
  align-items: center;
  background-color: ${theme.black};
  display: flex;
  height: calc(${theme.headerHeight}px - ${props => (props.pinned ? -1 : 2)}px);
  justify-content: center;
  width: ${theme.headerHeight}px;
`;

const Logo = styled.img`
  height: ${props => props.size};
  left: ${props => props.size && '-9px'};
  margin: ${props => props.margin};
  position: relative;
  top: 2px;
  width: ${props => props.size};
  transition: all 200ms ease;
`;

const Hamburger = styled.img`
  height: 30px;
  margin: 30px;
  width: 30px;
`;

const Overlay = styled.div`
  align-items: flex-end;
  background-color: ${theme.yellow};
  display: flex;
  flex-direction: column;
  font-size: 3em;
  height: 100vh;
  justify-content: space-around;
  overflow: hidden;
  padding: ${theme.gridSpacing}px;
  position: fixed;
  width: 100vw;
  z-index: 8888;
`;

export default class Header extends React.Component {
  state = {
    pinned: false,
    overlayVisible: false,
  };
  onPin = () => {
    this.setState({ pinned: true });
  };
  onUnpin = () => {
    this.setState({ pinned: false });
  };
  toggleOverlay = () => {
    this.setState({ overlayVisible: !this.state.overlayVisible });
  };
  render() {
    return (
      <header>
        <Desktop>
          <Headroom onPin={this.onPin} onUnpin={this.onUnpin} onUnfix={this.onUnpin}>
            <Container yellow={this.state.pinned}>
              <LogoContainer pinned={this.state.pinned}>
                <Logo src="/static/header-logo.svg" />
              </LogoContainer>
              <Nav>
                <Anchor dark={this.state.pinned} href="#about">
                  About
                </Anchor>
                <Anchor dark={this.state.pinned} href="#speakers">
                  Speakers
                </Anchor>
                <Anchor dark={this.state.pinned} href="#schedule" disabled>
                  Schedule
                </Anchor>
                <Anchor dark={this.state.pinned} href="#tickets" disabled>
                  Tickets
                </Anchor>
                <Anchor dark={this.state.pinned} href="#sponsors">
                  Sponsors
                </Anchor>
                <Anchor dark={this.state.pinned} href="#venue">
                  Venue
                </Anchor>
              </Nav>
            </Container>
          </Headroom>
        </Desktop>
        <Mobile>
          <MobileContainer>
            <Logo src="/static/header-logo.svg" size="100px" margin="30px" />
            <Hamburger src="/static/hamburger.svg" onClick={this.toggleOverlay} />
            {this.state.overlayVisible && (
              <Overlay onClick={this.toggleOverlay}>
                <Anchor href="#about" dark>
                  About
                </Anchor>
                <Anchor href="#speakers" dark>
                  Speakers
                </Anchor>
                <Anchor href="#schedule" disabled dark>
                  Schedule
                </Anchor>
                <Anchor href="#tickets" disabled dark>
                  Tickets
                </Anchor>
                <Anchor href="#sponsors" dark>
                  Sponsors
                </Anchor>
                <Anchor href="#venue" dark>
                  Venue
                </Anchor>
              </Overlay>
            )}
          </MobileContainer>
        </Mobile>
      </header>
    );
  }
}

import styled from 'styled-components';
import theme from '../config/theme';
import NeonLogo from './NeonLogo';
import Headroom from 'react-headroom';

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
  color: ${props => (props.black ? theme.black : theme.yellow)};
  margin-left: ${theme.gridSpacing}px;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  pointer-events: ${props => props.disabled && 'none'};
  text-decoration: none;
  transition: all 200ms ease;
`;

const LogoContainer = styled.div`
  align-items: center;
  background-color: ${theme.black};
  display: flex;
  height: calc(${theme.headerHeight}px - ${props => (props.pinned ? -1 : 2)}px);
  justify-content: center;
  width: ${theme.headerHeight}px;
`;

export default class Header extends React.Component {
  state = {
    pinned: false,
  };
  onPin = () => {
    this.setState({ pinned: true });
  };
  onUnpin = () => {
    this.setState({ pinned: false });
  };
  render() {
    return (
      <Headroom onPin={this.onPin} onUnpin={this.onUnpin} onUnfix={this.onUnpin}>
        <Container yellow={this.state.pinned}>
          <LogoContainer pinned={this.state.pinned}>
            <NeonLogo noGlow scale="0.18" />
          </LogoContainer>
          <Nav>
            <Anchor black={this.state.pinned} href="#about">
              About
            </Anchor>
            <Anchor black={this.state.pinned} href="#speakers">
              Speakers
            </Anchor>
            <Anchor black={this.state.pinned} href="#schedule" disabled>
              Schedule
            </Anchor>
            <Anchor black={this.state.pinned} href="#tickets" disabled>
              Tickets
            </Anchor>
            <Anchor black={this.state.pinned} href="#sponsors">
              Sponsors
            </Anchor>
            <Anchor black={this.state.pinned} href="#venue">
              Venue
            </Anchor>
          </Nav>
        </Container>
      </Headroom>
    );
  }
}

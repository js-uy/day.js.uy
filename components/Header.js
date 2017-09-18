import styled from 'styled-components';
import theme from '../config/theme';
import NeonLogo from './NeonLogo';

const Header = styled.header`
  align-items: center;
  background-color: ${theme.black};
  border-bottom: 2px solid ${theme.gray};
  display: flex;
  height: ${theme.headerHeight}px;
  justify-content: space-between;
  left: 0;
  padding: 0 ${theme.spacing * 8}px;
  position: fixed;
  top: 0;
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
  justify-content: space-around;
  max-width: 720px;
`;

const Anchor = styled.a`
  color: ${theme.yellow};
  text-decoration: none;
  margin: 0 ${theme.spacing}px;
`;

export default () => (
  <Header>
    <NeonLogo noGlow scale="0.18" />
    <Nav>
      <Anchor href="#about">About</Anchor>
      <Anchor href="#speakers">Speakers</Anchor>
      {/* <Anchor href="#schedule">Schedule</Anchor> */}
      {/* <Anchor href="#tickets">Tickets</Anchor> */}
      <Anchor href="#sponsors">Sponsors</Anchor>
      <Anchor href="#venue">Venue</Anchor>
    </Nav>
  </Header>
);

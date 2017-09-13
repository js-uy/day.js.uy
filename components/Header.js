import styled from 'styled-components';
import theme from '../config/theme';

const Header = styled.header`
  align-items: center;
  background-color: ${theme.black};
  border-bottom: 2px solid ${theme.gray};
  display: flex;
  height: ${theme.headerHeight};
  justify-content: space-between;
  padding: 0 ${theme.spacing * 8}px;
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
    <Img src="/static/js-day.png" />
    <Nav>
      <Anchor href="#about">About</Anchor>
      <Anchor href="#speakers">Speakers</Anchor>
      <Anchor href="#schedule">Schedule</Anchor>
      <Anchor href="#tickets">Tickets</Anchor>
      <Anchor href="#sponsors">Sponsors</Anchor>
      <Anchor href="#venue">Venue</Anchor>
    </Nav>
  </Header>
);

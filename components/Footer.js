import styled from 'styled-components';
import theme from '../config/theme';
import NeonLogo from './NeonLogo';
import Organizers from './Organizers';

const Footer = styled.footer`
  align-items: center;
  background-color: ${theme.blue};
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.gridSpacing}px;
`;

const Link = styled.a`color: ${theme.yellow};`;

export default () => (
  <Footer>
    <img src="/static/header-logo.svg" />
    <p>
      <Link href="https://twitter.com/JSDayUY" target="_blank">
        Twitter
      </Link>{' '}
      <Link href="https://github.com/js-uy/day.js.uy" target="_blank">
        GitHub
      </Link>{' '}
      <Link href="http://owu.herokuapp.com" target="_blank">
        Slack
      </Link>
    </p>
    <small>
      Designed by{' '}
      <Link href="http://hellohello.is/" target="_blank" rel="noopener noreferrer">
        hellohello
      </Link>.
    </small>
    <small>
      <Organizers />
    </small>
    <small>All rights reserved © 2017.</small>
  </Footer>
);

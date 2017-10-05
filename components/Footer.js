import styled from 'styled-components';

import NeonLogo from './NeonLogo';
import theme from '../config/theme';
import Organizers from './Organizers';
import { Mobile } from './MediaQueries';

const Footer = styled.footer`
  align-items: center;
  background-color: ${theme.blue};
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.gridSpacing}px;
  text-align: center;
`;

const FooterTextBlock = styled.small`
  display: block;
  text-align: center;
  margin-bottom: ${props => (props.bottomMargin ? theme.gridSpacing / 2 : 0)}px;
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

    <FooterTextBlock bottomMargin>
      Designed by{' '}
      <Link href="http://hellohello.is/" target="_blank" rel="noopener noreferrer">
        hellohello
      </Link>.
    </FooterTextBlock>

    <FooterTextBlock bottomMargin>
      <Organizers />
    </FooterTextBlock>

    <FooterTextBlock>All rights reserved © 2017.</FooterTextBlock>
  </Footer>
);

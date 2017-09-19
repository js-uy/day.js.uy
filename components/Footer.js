import styled from 'styled-components';
import theme from '../config/theme';
import NeonLogo from './NeonLogo';

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
    <NeonLogo scale="0.18" />
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
    <p>JS Day, all rights reserved © 2017</p>
    {/* <p>
      Designed by{' '}
      <Link href="http://hellohello.is/" target="_blank">
        hellohello
      </Link>.
    </p> */}
  </Footer>
);

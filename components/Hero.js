import styled from 'styled-components';
import theme from '../config/theme';

export default styled.section`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: space-around;
  max-width: 100vw;
  overflow: hidden;
  padding: ${props => (props.noPadding ? 0 : theme.headerHeight)}px
    ${props => (props.noPadding ? 0 : theme.horizontalPadding)} 0;
`;

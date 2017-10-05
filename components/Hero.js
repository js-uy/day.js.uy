import styled from 'styled-components';
import theme from '../config/theme';

export default styled.section`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  display: flex;
  height: ${props => `calc(100vh - ${props.withHeader ? theme.headerHeight : 0}px)`};
  justify-content: space-around;
  max-width: 100vw;
  overflow: hidden;
  padding: ${props => `
    ${props.noPadding ? 0 : theme.gridSpacing}px
    ${props.noPadding ? 0 : theme.horizontalPadding}
  `};

  @media (max-width: ${theme.mobileThreshold}px) {
    height: unset;
    flex-direction: column;
    align-items: stretch;
  }
`;

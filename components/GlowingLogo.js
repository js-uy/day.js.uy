import styled, { keyframes } from 'styled-components';
import theme from '../config/theme';

const lightblueGlow = keyframes`
  from {
    filter: drop-shadow(0px 0px 10px white);
  }
  to {
    filter: drop-shadow(0px 0px 8px ${theme.lightblue});
  }
`;

const yellowGlow = keyframes`
  from {
    filter: drop-shadow(0 0 10px white);
  }
  to {
    filter: drop-shadow(0 0 8px ${theme.yellow});
  }
`;

const Glow = styled.img`
  animation: ${props => (props.lightblue && lightblueGlow) || (props.yellow && yellowGlow)} 1s
    ease-in-out infinite alternate;
`;

const Container = styled.figure`
  height: 300px;
  position: relative;
  width: 300px;
  transform: scale(${props => props.scale});
`;

const JS = styled(Glow)`
  bottom: 10px;
  left: 40px;
  position: absolute;
`;

const Day = styled(Glow)`
  bottom: 20px;
  left: 30px;
  position: absolute;
`;

export default ({ scale = 1 }) => (
  <Container scale={scale}>
    <JS src="/static/js.svg" lightblue />
    <Day src="/static/day.svg" yellow />
  </Container>
);

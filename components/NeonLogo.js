import styled, { keyframes } from 'styled-components';
import theme from '../config/theme';

const lightblueGlow = keyframes`
  from {
    filter: drop-shadow(0px 0px 4px ${theme.lightblue});
  }
  to {
    filter: drop-shadow(0px 0px 15px #AAF);
  }
`;

const yellowGlow = keyframes`
  from {
    filter: drop-shadow(0 0 4px ${theme.yellow});
  }
  to {
    filter: drop-shadow(0 0 15px #AD0);
  }
`;

const lightblueBoot = keyframes`
  0% {
    opacity: 1;
  }
  5% {
    opacity: .2
  }
  10% {
    opacity: 1;
  }
  40% {
    opacity: .2;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: .2;
  }
  100% {
    opacity: 1;
  }
`;

const yellowBoot = keyframes`
  0% {
    opacity: 1
  }
  10% {
    opacity: .2
  }
  23% {
    opacity: 1;
  }
  32% {
    opacity: .2;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: .2;
  }
  100% {
    opacity: 1;
  }
`;

const getAnimation = ({ boot, yellow, lightblue }) => {
  if (boot) {
    if (yellow) return `${yellowBoot} 1s step-start forwards`;
    if (lightblue) return `${lightblueBoot} 1s step-start forwards`;
  } else {
    if (yellow) return `${yellowGlow} 0.5s ease-in-out infinite alternate`;
    if (lightblue) return `${lightblueGlow} 0.5s ease-in-out infinite alternate`;
  }
};

const getShadow = ({ yellow, lightblue }) => `
  drop-shadow(
    0 0 4px ${(lightblue && theme.lightblue) || (yellow && theme.yellow)}
  )
`;

const Glow = styled.img`
  filter: ${props => getShadow(props)};
  animation: ${props => getAnimation(props)};
  transition: all 0.5s ease;
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

export default class extends React.Component {
  static defaultProps = {
    scale: 1,
  };
  state = {
    boot: true,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ boot: false }), 500);
  }
  render() {
    return (
      <Container scale={this.props.scale}>
        <JS src="/static/js.svg" boot={this.state.boot} lightblue />
        <Day src="/static/day.svg" boot={this.state.boot} yellow />
      </Container>
    );
  }
}

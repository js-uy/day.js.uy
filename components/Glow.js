import { number, string, bool } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import theme from '../config/theme';

const glowAnimation = ({ color }) => keyframes`
  from {
    filter: drop-shadow(0px 0px 7px ${color});
  }
  to {
    filter: drop-shadow(0px 0px 15px ${color});
  }
`;

const bootAnimation = ({ bootFactor }) => keyframes`
  0% {
    opacity: 1;
  }
  ${9 + bootFactor}% {
    opacity: .2
  }
  ${15 + bootFactor}% {
    opacity: 1;
  }
  ${24 + bootFactor}% {
    opacity: .2;
  }
  ${37 + bootFactor}% {
    opacity: 1;
  }
  ${50 + bootFactor}% {
    opacity: .2;
  }
  ${67 + bootFactor}% {
    opacity: 1;
  }
  ${72 + bootFactor}% {
    opacity: .2;
  }
  ${82 + bootFactor}% {
    opacity: 1;
  }
  ${89 + bootFactor}% {
    opacity: .2;
  }
  100% {
    opacity: 1;
  }
`;

const getAnimation = ({ booting, ...props }) =>
  booting
    ? `${bootAnimation(props)} 1s step-start forwards`
    : `${glowAnimation(props)} 0.5s ease-in-out infinite alternate`;

const Glow = styled.img`
  filter: drop-shadow(0 0 4px ${props => props.color});
  animation: ${props => !props.noGlow && getAnimation(props)};
  transition: all 0.5s ease;

  @media (max-width: ${theme.mobileThreshold}px) {
    height: 60px;
  }
`;

export default class extends React.Component {
  static propTypes = {
    bootFactor: number,
    color: string.isRequired,
    src: string.isRequired,
    noGlow: bool,
  };
  static defaultProps = {
    bootFactor: Math.floor(Math.random() * 10),
  };
  state = {
    booting: true,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ booting: false }), 500);
  }
  render() {
    return <Glow {...this.props} {...this.state} />;
  }
}

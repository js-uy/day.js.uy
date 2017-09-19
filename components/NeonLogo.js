import { number, bool } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';

const Container = styled.figure`
  height: ${props => 300 * props.scale}px;
  position: relative;
  width: ${props => 300 * props.scale}px;
  background: radial-gradient(${theme.blue} 50%, transparent, transparent);
`;

const JS = styled(Glow)`
  bottom: ${props => 5 * props.scale}px;
  height: ${props => 250 * props.scale}px;
  left: ${props => 35 * props.scale}px;
  position: absolute;
  width: ${props => 250 * props.scale}px;
`;

const Day = styled(Glow)`
  bottom: ${props => 35 * props.scale}px;
  height: ${props => 140 * props.scale}px;
  left: ${props => 25 * props.scale}px;
  position: absolute;
  width: ${props => 210 * props.scale}px;
`;

export default class extends React.Component {
  static propTypes = {
    scale: number,
    noGlow: bool,
  };
  static defaultProps = {
    scale: 1,
  };
  render() {
    return (
      <Container scale={this.props.scale}>
        <JS
          bootFactor={7}
          color={theme.lightblue}
          noGlow={this.props.noGlow}
          scale={this.props.scale}
          src="/static/js.svg"
        />
        <Day
          bootFactor={1}
          color={theme.yellow}
          noGlow={this.props.noGlow}
          scale={this.props.scale}
          src="/static/day.svg"
        />
      </Container>
    );
  }
}

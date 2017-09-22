import Responsive from 'react-responsive';
import { mobileThreshold } from '../config/theme';

export const Desktop = ({ children, ...other }) => (
  <Responsive minWidth={mobileThreshold} children={children} {...other} />
);
export const Mobile = ({ children, ...other }) => (
  <Responsive maxWidth={mobileThreshold} children={children} {...other} />
);

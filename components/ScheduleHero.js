import styled from 'styled-components';
import shuffle from 'shuffle-array';

import theme from '../config/theme';
import { friday as fridayActivities, saturday as saturdayActivities } from '../config/schedule';

const Hero = styled.section`
  align-items: stretch;
  background-color: ${theme.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.bigGridSpacing}px ${theme.horizontalPadding};
  width: 100vw;

  @media (max-width: ${theme.mobileThreshold}px) {
    align-items: flex-start;
    padding: ${theme.bigGridSpacing}px;
  }
`;

const SchedulesContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: ${theme.gridSpacing}px;

  > * {
    flex: 1;
    margin-right: ${theme.gridSpacing}px;
    @media (max-width: ${theme.mobileThreshold}px) {
      margin: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${theme.mobileThreshold}px) {
    flex-direction: column;
  }
`;

const ScheduleHead = styled.div`
  align-items: center;
  background-color: ${theme.yellow};
  display: flex;
  margin-bottom: ${theme.gridSpacing}px;
  padding: 5px 10px;

  > * {
    margin-right: 10px;
  }

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 0.65em;
    padding: 0 10px;
  }
`;

const ThingThatSeparatesAndConnects = styled.figure`
  border-radius: 7px;
  border: 2px solid ${theme.cyan};
  height: 14px;
  position: relative;
  width: 14px;
  ::after {
    content: '';
    border-left: 1px dashed white;
    bottom: -${props => (props.short ? 56 : 125)}px;
    height: ${props => (props.short ? 50 : 110)}px;
    left: 4.5px;
    position: absolute;
    display: ${props => (props.hide ? 'none' : 'block')};
  }
`;

const ActivityContainer = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
`;

const ActivityTime = styled.span`
  color: ${theme.yellow};
  line-height: 1em;
  margin-right: 10px;
  text-align: right;
  width: 125px;

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 0.8em;
    width: 102px;
  }
`;

const ActivityInfo = styled.div`
  padding: 0 10px;
  flex: 1;
  min-height: ${props => (props.short ? 75 : 150)}px;
`;

const ActivityText = styled.p`
  line-height: 1.4em;
  vertical-align: text-top;
  margin: 0 0 10px;
`;

const ActivityTitle = ActivityText.extend`
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  position: relative;
  top: -3px;

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 0.68em;
    top: -1px;
  }
`;

const ActivityBy = ActivityText.extend`
  color: ${theme.cyan};
  font-size: 0.8em;
  font-style: italic;

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 0.65em;
  }
`;

const ActivityNotes = styled.p`
  font-size: 0.85em;
  color: ${theme.lightgray};
  margin: 0;
  line-height: 2em;

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 0.6em;
  }
`;

const Activity = ({ from, to, title, by, type, notes, last, short }) => (
  <ActivityContainer>
    <ActivityTime>{from && to ? `${from} - ${to}` : 'TBA'}</ActivityTime>
    <ThingThatSeparatesAndConnects hide={last} short={short} />
    <ActivityInfo short={short}>
      <ActivityTitle>{title}</ActivityTitle>
      {by && <ActivityBy>by {shuffle(by.split(', ')).join(', ')}</ActivityBy>}
      {notes && <ActivityNotes>{notes}</ActivityNotes>}
    </ActivityInfo>
  </ActivityContainer>
);

const Title = styled.img`
  @media (max-width: ${theme.mobileThreshold}px) {
    height: 55px;
  }
`;

export default () => (
  <Hero id="schedule">
    <Title src="/static/schedule.svg" />
    <SchedulesContainer>
      <div>
        <ScheduleHead>
          <strong>Workshops & Activities</strong>
          <span>Friday, November 24th</span>
        </ScheduleHead>
        {fridayActivities.map((data, index) => (
          <Activity {...data} last={index + 1 === fridayActivities.length} />
        ))}
      </div>
      <div>
        <ScheduleHead>
          <strong>Conference</strong>
          <span>Saturday, November 25th</span>
        </ScheduleHead>
        {saturdayActivities.map((data, index) => (
          <Activity {...data} last={index + 1 === saturdayActivities.length} short />
        ))}
      </div>
    </SchedulesContainer>
  </Hero>
);

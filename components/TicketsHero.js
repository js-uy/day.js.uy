import styled from 'styled-components';
import theme from '../config/theme';
import Glow from './Glow';
import Hero from './Hero';
import Ticket from './Ticket';
import { Mobile, Desktop } from './MediaQueries';

const Container = styled.div`
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${theme.mobileThreshold}px) {
    padding: ${theme.gridSpacing}px;
    max-width: 100vw;
    align-items: flex-start;
  }
`;

const TicketsGlow = styled(Glow)`
  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-5px);
  }
`;

const TicketsContainer = styled.div`display: flex;`;

export default () => (
  <Hero backgroundColor={theme.black} id="tickets" noHeight>
    <Container>
      <TicketsGlow src="/static/tickets.svg" color={theme.lightblue} />

      <TicketsContainer>
        <Ticket icon="/static/ticket-early-bird.svg" title="Early Bird" price={80} />

        <Ticket icon="/static/ticket-regular.svg" title="Regular" price={100} />

        <Ticket icon="/static/ticket-last-batch.svg" title="Last Batch" price={130} />
      </TicketsContainer>
    </Container>
  </Hero>
);

import React from 'react';
import moment from 'moment';
import io from 'socket.io-client';
import styled from 'styled-components';

import theme from '../config/theme';
import { SOCKET_IO_URL } from '../config/constants';

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

// Index the data by its title.
const dataToState = data =>
  data.reduce((collection, item) => {
    collection[item.title] = item;
    return collection;
  }, {});

export default class extends React.PureComponent {
  state = {
    data: {},
    socket: null,
  };

  componentDidMount() {
    const socket = io(SOCKET_IO_URL);

    if (this.state.socket === null) {
      socket.on('tickets', data => {
        this.setState({ data: dataToState(data) });
      });
    }
  }

  componentWillUnmount() {
    this.setState({ socket: null });
  }

  getTicket(title) {
    const { data } = this.state;
    return data[title] || {};
  }

  getState(title) {
    const { state } = this.getTicket(title);

    if (moment().isBefore(this.getStartAt(title))) {
      return 'upcoming';
    }

    if (this.getTicketsSold(title) === this.getTicketsTotal(title)) {
      return 'sold-out';
    }

    if (state !== 'on_sale') {
      return 'off-sale';
    }

    return 'on-sale';
  }

  getPrice(title) {
    return parseInt(this.getTicket(title).price || 0, 10);
  }

  getTicketsSold(title) {
    return this.getTicket(title).quantitySold || 0;
  }

  getTicketsTotal(title) {
    return this.getTicket(title).quantity || 0;
  }

  getStartAt(title) {
    return moment(this.getTicket(title).startAt);
  }

  render() {
    const { data } = this.state;

    return (
      <Hero backgroundColor={theme.black} id="tickets" noHeight>
        <Container>
          <TicketsGlow src="/static/tickets.svg" color={theme.lightblue} />

          <TicketsContainer>
            <Ticket
              title="Early Bird"
              icon="/static/ticket-early-bird.svg"
              state={this.getState('Early Bird')}
              price={this.getPrice('Early Bird')}
              startAt={this.getStartAt('Early Bird')}
              ticketsSold={this.getTicketsSold('Early Bird')}
              ticketsTotal={this.getTicketsTotal('Early Bird')}
            />

            <Ticket
              title="Regular"
              icon="/static/ticket-regular.svg"
              state={this.getState('Regular')}
              price={this.getPrice('Regular')}
              startAt={this.getStartAt('Regular')}
              ticketsSold={this.getTicketsSold('Regular')}
              ticketsTotal={this.getTicketsTotal('Regular')}
            />

            <Ticket
              title="Last Batch"
              icon="/static/ticket-last-batch.svg"
              state={this.getState('Last Batch')}
              price={this.getPrice('Last Batch')}
              startAt={this.getStartAt('Last Batch')}
              ticketsSold={this.getTicketsSold('Last Batch')}
              ticketsTotal={this.getTicketsTotal('Last Batch')}
            />
          </TicketsContainer>
        </Container>
      </Hero>
    );
  }
}

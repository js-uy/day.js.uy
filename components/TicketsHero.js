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
    align-items: flex-start;
    max-width: 100vw;
  }
`;

const TicketsGlow = styled(Glow)`
  @media (max-width: ${theme.mobileThreshold}px) {
    transform: translateX(-5px);
  }
`;

const TicketsContainer = styled.div`
  display: flex;
  margin: ${theme.gridSpacing}px 0 auto 0;
  @media (max-width: ${theme.mobileThreshold}px) {
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    width: 100vw;
  }
`;

const Spacing = styled.span`min-width: ${theme.gridSpacing}px;`;

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

  getId(title) {
    return this.getTicket(title).id || '';
  }

  getHref(title) {
    return `https://ti.to/js-day/2017/with/${this.getId(title)}`;
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
              href={this.getHref('Early Bird')}
              state={this.getState('Early Bird')}
              price={this.getPrice('Early Bird')}
              icon="/static/ticket-early-bird.svg"
              startAt={this.getStartAt('Early Bird')}
              ticketsSold={this.getTicketsSold('Early Bird')}
              ticketsTotal={this.getTicketsTotal('Early Bird')}
            />
            <Ticket
              title="Regular"
              href={this.getHref('Regular')}
              state={this.getState('Regular')}
              price={this.getPrice('Regular')}
              icon="/static/ticket-regular.svg"
              startAt={this.getStartAt('Regular')}
              ticketsSold={this.getTicketsSold('Regular')}
              ticketsTotal={this.getTicketsTotal('Regular')}
              href="https://ti.to/js-day/2017/with/nc1w6uy7lxe"
            />
            <Ticket
              title="Last Batch"
              href={this.getHref('Last Batch')}
              state={this.getState('Last Batch')}
              price={this.getPrice('Last Batch')}
              icon="/static/ticket-last-batch.svg"
              startAt={this.getStartAt('Last Batch')}
              ticketsSold={this.getTicketsSold('Last Batch')}
              ticketsTotal={this.getTicketsTotal('Last Batch')}
              href="https://ti.to/js-day/2017/with/b5xrbrlna58"
            />
            <Mobile>
              <Spacing />
            </Mobile>
          </TicketsContainer>
        </Container>
      </Hero>
    );
  }
}

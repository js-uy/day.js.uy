import styled from 'styled-components';
import theme from '../config/theme';

const Ticket = styled.div`
  background: ${theme.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: ${theme.gridSpacing}px;
  width: ${theme.gridColumnWidth * 4 + theme.gridSpacing * 3}px;
  opacity: ${props => (props.disabled ? 0.666 : 1)};

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: ${theme.mobileThreshold}px) {
    min-width: 80vw;
    margin-bottom: 0;
    &:first-of-type {
      margin-left: ${theme.gridSpacing}px;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const TicketIcon = styled.img`
  height: 50px;
  margin: ${theme.gridSpacing}px;
  margin-top: ${theme.gridSpacing * 1.5}px;
`;

const TicketTitle = styled.h5`
  color: ${theme.cyan};
  font-size: 22px;
  font-weight: 300;
  margin: 0 ${theme.gridSpacing}px;
  margin-bottom: ${theme.gridSpacing}px;
  text-align: center;
`;

const Price = styled.span`
  color: ${theme.white};
  font-size: 44px;
  font-weight: 300;
  margin: 0 ${theme.gridSpacing}px;
  margin-bottom: ${theme.gridSpacing}px;
  text-align: center;
`;

const EachTicketIncludes = styled.span`
  color: ${theme.yellow};
  font-size: 16px;
  line-height: 1.88;
  margin: 0 ${theme.gridSpacing}px;
  margin-bottom: ${theme.gridSpacing}px;
  text-align: center;

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 13px;
  }
`;

const EachTicketIncludesDescription = styled.p`
  color: ${theme.white};
  font-size: 16px;
  margin: 0 ${theme.gridSpacing}px;
  margin-bottom: ${theme.gridSpacing}px;
  text-align: center;

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 13px;
  }
`;

const BuyNowButton = styled.a`
  background-color: ${({ disabled }) => (disabled ? theme.black : theme.yellow)};
  color: ${({ disabled }) => (disabled ? theme.white : '#242424')};
  font-size: 16px;
  font-weight: bold;
  margin: 0 ${theme.gridSpacing}px;
  margin-bottom: ${theme.gridSpacing}px;
  padding-bottom: 11px;
  padding-top: 8px;
  text-align: center;
  width: calc(100% - ${theme.gridSpacing * 2}px);
`;

const TicketsProgressBackground = styled.div`
  background: rgba(35, 96, 255, 0.2);
  height: 60px;
  position: relative;
  width: 100%;
`;

const TicketsProgress = styled.div`
  background: rgba(35, 96, 255, 0.2);
  height: 100%;
  position: absolute;
  transition: all 1s;
  width: ${props => props.percentage}%;
  z-index: 0;
`;

const TicketProgressText = styled.span`
  color: ${theme.white};
  font-size: 16px;
  font-style: italic;
  height: 100%;
  line-height: 1.88;
  padding: 15px 0;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;

  @media (max-width: ${theme.mobileThreshold}px) {
    font-size: 13px;
  }
`;

export default ({ icon, title, price, state, startAt, ticketsTotal, ticketsSold, href }) => (
  <Ticket disabled={state !== 'on-sale'}>
    <TicketIcon src={icon} />
    <TicketTitle>{title}</TicketTitle>
    <Price>{price ? `$${price}` : '...'}</Price>
    <EachTicketIncludes>Each ticket includes</EachTicketIncludes>
    <EachTicketIncludesDescription>
      Access to all of the talks Breakfast and lunch
    </EachTicketIncludesDescription>
    {!state && <BuyNowButton disabled>...</BuyNowButton>}
    {state === 'on-sale' && (
      <BuyNowButton target="_blank" rel="noopener noreferrer" href={href}>
        Buy Now
      </BuyNowButton>
    )}
    {state === 'upcoming' && <BuyNowButton disabled>Starts {startAt.fromNow()}</BuyNowButton>}
    {state === 'off-sale' && <BuyNowButton disabled>/shrug</BuyNowButton>}
    {state === 'sold-out' && <BuyNowButton disabled>SOLD OUT</BuyNowButton>}
    <TicketsProgressBackground>
      <TicketsProgress percentage={ticketsSold / ticketsTotal * 100} />
      <TicketProgressText>
        <strong>{ticketsTotal - ticketsSold}</strong> {title} Tickets available
      </TicketProgressText>
    </TicketsProgressBackground>
  </Ticket>
);

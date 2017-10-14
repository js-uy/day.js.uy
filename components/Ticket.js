import styled from 'styled-components';
import theme from '../config/theme';

const Ticket = styled.div`
  background: ${theme.blue};
  margin-right: ${theme.gridSpacing}px;
  width: ${(theme.gridColumnWidth + theme.gridSpacing) * 4}px;

  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-right: 0;
  }
`;

const TicketIcon = styled.img`
  height: 50px;
  margin: 54px auto 32px auto;
`;

const TicketTitle = styled.h5`
  color: ${theme.cyan};
  font-size: 22px;
  font-weight: 300;
  margin: 0 auto 16px auto;
`;

const Price = styled.span`
  color: ${theme.white};
  display: block;
  font-size: 44px;
  font-weight: 300;
  margin: 0 auto 32px auto;
`;

const EachTicketIncludes = styled.span`
  color: ${theme.yellow};
  display: block;
  font-size: 16px;
  line-height: 1.88;
  margin: 0 auto 32px auto;
`;

const EachTicketIncludesDescription = styled.p`
  color: ${theme.white};
  font-size: 16px;
  margin: 0 auto 54px auto;
  max-width: 290px;
  text-align: center;
`;

const BuyNowButton = styled.a`
  background-color: ${theme.yellow};
  color: #242424;
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto 50px auto;
  max-width: 290px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 11px;
  text-align: center;
`;

const TicketsProgressBackground = styled.div`
  background: rgba(35, 96, 255, 0.2);
  display: block;
  height: 60px;
  position: relative;
  width: 100%;
`;

const TicketsProgress = styled.div`
  background: rgba(35, 96, 255, 0.2);
  height: 100%;
  position: absolute;
  width: ${props => props.percentage}%;
  z-index: 0;
`;

const TicketProgressText = styled.span`
  color: ${theme.white};
  display: block;
  font-size: 16px;
  font-style: italic;
  height: 100%;
  line-height: 1.88;
  padding: 15px 0;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

export default ({ icon, title, price }) => (
  <Ticket>
    <TicketIcon src={icon} />
    <TicketTitle>{title}</TicketTitle>
    <Price>${price}</Price>
    <EachTicketIncludes>Each ticket includes</EachTicketIncludes>
    <EachTicketIncludesDescription>
      Access to the all the talks Breakfast and lunch
    </EachTicketIncludesDescription>
    <BuyNowButton>Buy Now</BuyNowButton>

    <TicketsProgressBackground>
      <TicketsProgress percentage={70} />
      <TicketProgressText>
        <strong>{34}</strong> {title} Tickets available
      </TicketProgressText>
    </TicketsProgressBackground>
  </Ticket>
);

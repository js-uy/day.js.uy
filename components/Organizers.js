import shuffle from 'shuffle-array';
import styled from 'styled-components';

import theme from '../config/theme';
import organizers from '../config/organizers';

// Randomize the list of organizers.
const getOrganizers = () => shuffle(organizers, { copy: true });

const Link = styled.a`
  color: ${theme.yellow};
  font-weight: bold;
`;

const OrganizerLink = ({ organizer: { hearsay, hearsayRight, twitter, title } }) => (
  <span>
    {!hearsayRight && `${hearsay} `}
    <Link
      title={title}
      href={`https://twitter.com/${twitter}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{twitter}
    </Link>
    {hearsayRight && `, ${hearsay}`}
  </span>
);

export default ({ organizers = getOrganizers() }) => (
  <span>
    JSDayUY brought to you by{' '}
    {/* Knowing that there will be *exactly* three organizers simplifies the code. */}
    <OrganizerLink organizer={organizers[0]} />; <OrganizerLink organizer={organizers[1]} />; and{' '}
    <OrganizerLink organizer={organizers[2]} />.
  </span>
);

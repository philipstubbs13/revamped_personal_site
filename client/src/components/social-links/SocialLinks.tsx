import Box from '@material-ui/core/Box';
import { SocialLink } from '../social-link/SocialLink';
import { social, ISocial } from '../../data/social';

export const SocialLinks = () => {
  return (
    <Box m={5} textAlign="center">
      {social.map((account: ISocial) => {
        return (
          <SocialLink
            key={account.platform}
            profileLink={account.profileLink}
            platform={account.platform}
          />
        );
      })}
    </Box>
  );
};

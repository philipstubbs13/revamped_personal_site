import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { SocialLink } from '../social-link/SocialLink';
import { social, ISocial } from '../../data/social';

export const SocialLinks = () => {
  return (
    <Box m={5} textAlign="center">
      <Typography variant="h6">Let's get social</Typography>
      <Typography variant="subtitle1">Follow my profiles on TikTok, Twitter, GitHub, LinkedIn, and Facebook</Typography>
      {social.map((account: ISocial) => {
        return (
          <SocialLink key={account.platform} profileLink={account.profileLink} platform={account.platform} />
        )
      })}
    </Box>
  )
};
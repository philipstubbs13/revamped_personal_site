import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialButton: {
      color: theme.palette.primary.main,
      marginTop: 20,
      marginLeft: 20,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  })
);

export interface IProps {
  profileLink: string;
  platform: string;
}

export const SocialLink = (props: IProps) => {
  const classes = useStyles();
  const { profileLink, platform } = props;

  return (
    <IconButton className={classes.socialButton} href={profileLink} target="_blank">
      <i className={`fab fa-2x fa-${platform}`} />
    </IconButton>
  );
};

SocialLink.propTypes = {
  profileLink: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
};

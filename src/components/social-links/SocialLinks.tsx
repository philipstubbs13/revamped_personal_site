import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialButton: {
      color: theme.palette.primary.main,
      marginLeft: 20,
      '&:hover': {
        color: theme.palette.secondary.main,
      }
    }
  }),
);

export const SocialLinks = () => {
  const classes = useStyles();

  return (
    <Box m={5} textAlign="center">
      <IconButton className={classes.socialButton} href="https://www.tiktok.com/@thephilstubbs" target="_blank">
        <i className="fab fa-2x fa-tiktok"></i>
      </IconButton>
      <IconButton className={classes.socialButton} href="https://twitter.com/iamPhilStubbs" target="_blank">
        <i className="fab fa-2x fa-twitter"></i>
      </IconButton>
      <IconButton className={classes.socialButton} href="https://github.com/philipstubbs13" target="_blank">
        <i className="fab fa-2x fa-github"></i>
      </IconButton>
      <IconButton className={classes.socialButton} href="https://www.linkedin.com/in/philipjstubbs/" target="_blank">
        <i className="fab fa-2x fa-linkedin"></i>
      </IconButton>
      <IconButton className={classes.socialButton} href="https://www.facebook.com/phil.stubbs.13/" target="_blank">
        <i className="fab fa-2x fa-facebook"></i>
      </IconButton>
    </Box>
  )
}

SocialLinks.propTypes = {

};

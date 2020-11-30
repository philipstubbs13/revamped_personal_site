import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import profileImage from '../../../images/profile.jpg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
    },
    body: {
      lineHeight: 2,
      fontWeight: 'bold',
    },
    projectsLink: {
      '&:hover': {
        color: theme.palette.secondary.main,
      }
    },
    avatar: {
      width: 160,
      height: 160,
      marginBottom: 30,
      border: `4px solid ${theme.palette.secondary.main}`
    },
  }),
);

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Phil Stubbs" src={profileImage} className={classes.avatar} />
      <Typography variant="h4" className={classes.title}>Hello, my name is Phil Stubbs.</Typography>
      <Box m={3} textAlign="center">
        <Typography variant="h6" className={classes.body}>
          I am a full stack web developer and data engineer.
      </Typography>
        <Typography variant="h6" className={classes.body}>
          I specialize in JavaScript and Python.
      </Typography>
        <Typography variant="h6" className={classes.body}>
          Feel free to take a look at my latest projects on the <Link className={classes.projectsLink} to="/projects">projects</Link> page.
      </Typography>
      </Box>
    </div>
  )
}

About.propTypes = {

};

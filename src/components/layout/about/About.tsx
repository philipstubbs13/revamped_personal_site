import React, { Fragment } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import profileImage from '../../../images/profile.jpg';
import Avatar from '@material-ui/core/Avatar';
import { TimelineView } from '../../timeline-view/TimelineView';
import { experiences } from '../../../data/experieces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 'bold',
    },
    body: {
      lineHeight: 1.5,
    },
    projectsLink: {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.text.secondary,
      }
    },
    avatar: {
      width: 160,
      height: 160,
      marginBottom: 30,
      border: `4px solid ${theme.palette.secondary.main}`,
    },
    bio: {
      backgroundColor: theme.palette.secondary.dark,
      border: `3px solid ${theme.palette.secondary.main}`,
      color: theme.palette.text.primary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  }),
);

export const About = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box p={5} className={classes.bio}>
        <Avatar alt="Phil Stubbs" src={profileImage} className={classes.avatar} />
        <Typography variant="h4" className={classes.title}>Hello, my name is Phil Stubbs.</Typography>
        <Box m={3} textAlign="center">
          <Typography variant="subtitle1" className={classes.body}>
            I am a full stack web developer and data engineer.
          </Typography>
          <Typography variant="subtitle1" className={classes.body}>
            I specialize in JavaScript, Python, and Technical Writing.
          </Typography>
          <Typography variant="subtitle1" className={classes.body}>
            Feel free to take a look at my latest projects on the <Link className={classes.projectsLink} to="/projects">projects</Link> page.
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center">
        <TimelineView timelineItems={experiences} />
      </Box>
    </Fragment>
  )
};

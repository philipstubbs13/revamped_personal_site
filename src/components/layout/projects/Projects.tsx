import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    title: {
      fontWeight: 'bold',
    },
    body: {
      lineHeight: 2,
      fontWeight: 'bold',
    },
  }),
);

export const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>projects</Typography>
      <Box m={3} textAlign="center">
        <Typography variant="h6" className={classes.body}>
          From full stack web development to data engineering...
      </Typography>
        <Typography variant="h6" className={classes.body}>
          Check out my latest projects
      </Typography>
      </Box>
    </div>
  )
}

Projects.propTypes = {

};


import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body: {
      lineHeight: 1.5,
    },
    navLink: {
      marginLeft: 20,
      marginTop: 20,
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover': {
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  })
);

export const NotFound = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box p={5}>
        <Typography variant="h4" className={classes.title}>
          Oops! 404 - Page Not Found
        </Typography>
        <Box m={3} textAlign="center">
          <Typography variant="subtitle1" className={classes.body}>
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </Typography>
          <Button className={classes.navLink} variant="contained" color="secondary" href="/">
            Go to Home Page
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

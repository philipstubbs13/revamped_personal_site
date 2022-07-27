import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FormStepper } from '../../form-stepper/FormStepper';

const useStyles = makeStyles(() =>
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
  })
);

export const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Get in touch
      </Typography>
      <Box m={3} textAlign="center">
        <Typography>
          To get in touch, fill out the form below or send an email to{' '}
          <a href="mailto:philipstubbs13@gmail.com">philipstubbs13@gmail.com</a>.
        </Typography>
      </Box>
      <Container maxWidth="sm">
        <FormStepper />
      </Container>
    </div>
  );
};

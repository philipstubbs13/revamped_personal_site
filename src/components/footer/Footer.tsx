import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      borderTop: `4px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    copyrightText: {
      marginTop: 20,
      marginBottom: 20,
    }
  }),
);

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.copyrightText}>Phil J Stubbs &copy; 2020</Typography>
    </div>
  );
}
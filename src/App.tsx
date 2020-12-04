import React from 'react';
import './App.css';
import { ThemeProvider, createStyles, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { theme } from './theme/theme';
import { Routes } from './components/routing/Routes';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { SocialLinks } from './components/social-links/SocialLinks';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 0,
    },
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      flex: '1 0 auto',
      padding: '1.5em 0 2em 0',
      width: '100%',
      '&:after': {
        content: '00a0',
        display: 'block',
        marginTop: '1.5em',
        height: 0,
        visibility: 'hidden',
      },
    },
  })
);

export const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.app}>
          <Navbar />
          <div className={classes.content}>
            <Container maxWidth="md" className={classes.root}>
              <Routes />
            </Container>
          </div>
          <SocialLinks />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

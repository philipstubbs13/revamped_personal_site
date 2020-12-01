import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      borderBottom: `4px solid ${theme.palette.secondary.main}`
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.secondary.main,
      }
    },
    navLink: {
      marginLeft: 20,
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover': {
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.text.primary}`,
      }
    },
  }),
);

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">
              Phil J Stubbs
            </Typography>
          </Link>
          <Button className={classes.navLink} variant="contained" color="secondary" href="/">
            About
          </Button>
          <Button className={classes.navLink} variant="contained" color="secondary" href="/projects">
            Projects
          </Button>
          <Button className={classes.navLink} variant="contained" color="secondary" href="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
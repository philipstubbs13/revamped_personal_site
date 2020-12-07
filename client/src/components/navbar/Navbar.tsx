import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { navlinks } from '../../data/navlinks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    navLink: {
      marginLeft: 20,
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover': {
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    list: {
      marginTop: 50,
      width: 250,
    },
    drawerLink: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    listItem: {
      marginTop: 10,
    },
  })
);

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openDrawer: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(openDrawer);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navlinks.map((link) => (
          <Link to={link.route} key={link.route} className={classes.drawerLink}>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <i className={`fas fa-${link.icon}`} />
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">Phil J Stubbs</Typography>
          </Link>
          <Button className={classes.navLink} variant="contained" color="secondary" href="/">
            About
          </Button>
          <Button
            className={classes.navLink}
            variant="contained"
            color="secondary"
            href="/projects"
          >
            Projects
          </Button>
          <Button className={classes.navLink} variant="contained" color="secondary" href="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

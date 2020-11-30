import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      marginTop: 20,
      marginBottom: 20,
    },
    media: {
      height: 200,
      border: `3px solid ${theme.palette.primary.main}`,
    },
    socialButton: {
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.main,
      }
    }
  }),
);


interface IProps {
  image: string;
  title: string;
  githubRepo: string;
  website?: string;
}

export const Project = (props: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="small" color="primary" className={classes.socialButton} href={props.githubRepo} target="_blank">
          <i className="fab fa-2x fa-github"></i>
        </IconButton>
        {props.website && (
          <IconButton size="small" color="primary" className={classes.socialButton} href={props.website} target="_blank">
            <i className="fas fa-2x fa-globe"></i>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

Project.propTypes = {
  website: PropTypes.string
};

Project.defaultProps = {
  website: '',
}
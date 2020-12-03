import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

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
    },
    chip: {
      color: theme.palette.text.secondary,
      marginRight: 5,
      marginTop: 5
    },
    links: {
      marginBottom: 20,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);


interface IProps {
  image: string;
  title: string;
  githubRepo: string;
  website?: string;
  technologies?: string[];
  showTechnologies: boolean;
}

export const Project = (props: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <div className={classes.links}>
            <IconButton size="small" color="primary" className={classes.socialButton} href={props.githubRepo} target="_blank">
              <i className="fab fa-2x fa-github"></i>
            </IconButton>
            {props.website && (
              <IconButton size="small" color="primary" className={classes.socialButton} href={props.website} target="_blank">
                <i className="fas fa-2x fa-globe"></i>
              </IconButton>
            )}
          </div>
          <Collapse in={props.showTechnologies} timeout="auto" unmountOnExit>
            {props.technologies && props.technologies.map(technology => <Chip className={classes.chip} color="secondary" label={technology} />)}
          </Collapse>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Project.propTypes = {
  website: PropTypes.string,
  technologies: PropTypes.array,
  showTechnologies: PropTypes.bool,
};

Project.defaultProps = {
  website: '',
  technologies: [],
}
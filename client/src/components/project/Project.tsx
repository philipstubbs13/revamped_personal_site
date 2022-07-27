import React from 'react';
import PropTypes, { string } from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import { Box } from '@material-ui/core';
import { ProjectTooltip } from './project-tooltip/ProjectTooltip';

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
      },
    },
    chip: {
      color: theme.palette.text.secondary,
      marginRight: 5,
      marginTop: 5,
    },
    links: {
      marginBottom: 20,
      display: 'flex',
      gap: theme.spacing(2),
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
    title: {
      fontSize: 20,
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
  })
);

interface IProps {
  image: string;
  title: string;
  githubRepo: string;
  website?: string;
  technologies?: string[];
  showTechnologies: boolean;
  description: string;
}

export const Project = (props: IProps) => {
  const classes = useStyles();
  const { image, title, githubRepo, website, showTechnologies, technologies, description } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom className={classes.title}>
            <span>{title}</span> <ProjectTooltip title={title} description={description} />
          </Typography>
          <div className={classes.links}>
            <IconButton
              size="small"
              color="primary"
              className={classes.socialButton}
              href={githubRepo}
              target="_blank"
            >
              <i className="fab fa-1x fa-github" /> <Box marginLeft={0.5}>GitHub</Box>
            </IconButton>
            {website && (
              <IconButton
                size="small"
                color="primary"
                className={classes.socialButton}
                href={website}
                target="_blank"
              >
                <i className="fas fa-1x fa-globe" /> <Box marginLeft={0.5}>Live</Box>
              </IconButton>
            )}
          </div>
          <Collapse in={showTechnologies} timeout="auto" unmountOnExit>
            {technologies &&
              technologies.map((technology) => (
                <Chip
                  className={classes.chip}
                  key={technology}
                  color="secondary"
                  label={technology}
                />
              ))}
          </Collapse>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Project.propTypes = {
  website: PropTypes.string,
  technologies: PropTypes.arrayOf(string),
  showTechnologies: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

Project.defaultProps = {
  website: '',
  technologies: [],
};

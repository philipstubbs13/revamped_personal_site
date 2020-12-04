import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Project } from '../../project/Project';
import { projects, IProject } from '../../../data/projects';
import { SwitchToggle } from '../../switch-toggle/SwitchToggle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      fontWeight: 'bold',
    },
    body: {
      lineHeight: 2,
      fontWeight: 'bold',
    },
    projectsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
      gap: 20,
    },
    showTechnologiesContainer: {
      marginRight: 'auto',
      [theme.breakpoints.down('md')]: {
        margin: '0 auto',
      },
    },
  })
);

export const Projects = () => {
  const classes = useStyles();
  const [showTechnologies, setShowTechnologies] = useState(false);

  const handleChangeShowTechnologies = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowTechnologies(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        projects
      </Typography>
      <Box m={3} textAlign="center">
        <Typography variant="h6" className={classes.body}>
          From full stack web development to data engineering...
        </Typography>
        <Typography variant="h6" className={classes.body}>
          Check out my latest projects
        </Typography>
      </Box>
      <div className={classes.showTechnologiesContainer}>
        <SwitchToggle
          isChecked={showTechnologies}
          onChange={handleChangeShowTechnologies}
          name="showTechnologies"
          label="Show Technologies"
        />
      </div>
      <div className={classes.projectsContainer}>
        {projects.map((project: IProject) => {
          return (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              githubRepo={project.githubRepo}
              website={project.website}
              technologies={project.technologies}
              showTechnologies={showTechnologies}
            />
          );
        })}
      </div>
    </div>
  );
};

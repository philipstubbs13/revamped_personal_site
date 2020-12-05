import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Project } from '../../project/Project';
import { projects, IProject } from '../../../data/projects';
import { SwitchToggle } from '../../switch-toggle/SwitchToggle';
import { projectWorkType } from '../../../constants/projectWorkType.enum';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: '1fr',
      },
      gap: 20,
    },
    inputsContainer: {
      marginRight: 'auto',
      [theme.breakpoints.down('md')]: {
        margin: '0 auto',
      },
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    formControl: {
      minWidth: 180,
      width: 180,
    },
    selectEmpty: {
      marginTop: 20,
    },
    inputLabelRoot: {
      color: theme.palette.text.primary,
    },
    chip: {
      marginRight: 10,
      marginTop: 5,
    },
  })
);

export const Projects = () => {
  const classes = useStyles();
  const [showTechnologies, setShowTechnologies] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<projectWorkType>(projectWorkType.All);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleChangeShowTechnologies = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowTechnologies(event.target.checked);
  };

  const handleChangeProjectType = (event: React.ChangeEvent<{ value: unknown }>) => {
    const projectTypeSelected = event.target.value;
    let filteredProjectsToDisplay = [...projects];
    setProjectType(projectTypeSelected as projectWorkType);

    if (projectTypeSelected === projectWorkType.All) {
      setFilteredProjects(filteredProjectsToDisplay);
    } else {
      filteredProjectsToDisplay = filteredProjectsToDisplay.filter(
        (project) => project.type === projectTypeSelected
      );
      setFilteredProjects(filteredProjectsToDisplay);
    }
  };

  return (
    <div>
      <Box m={3} textAlign="center">
        <Typography variant="h4" className={classes.title}>
          projects
        </Typography>
      </Box>
      <Box m={3} textAlign="center">
        <Typography variant="h6">From full stack web development to data engineering...</Typography>
        <Typography variant="h6" className={classes.body}>
          Check out my latest projects
        </Typography>
      </Box>
      <div className={classes.inputsContainer}>
        <FormControl className={classes.formControl}>
          <InputLabel id="project-type-input-label" className={classes.inputLabelRoot}>
            Filter by project type
          </InputLabel>
          <Select
            labelId="project-type-select"
            id="project-type-select"
            value={projectType}
            onChange={handleChangeProjectType}
            displayEmpty
            className={classes.selectEmpty}
            variant="outlined"
          >
            <MenuItem value={projectWorkType.All}>All Projects</MenuItem>
            <MenuItem value={projectWorkType.WebDevelopment}>Web Development</MenuItem>
            <MenuItem value={projectWorkType.Data}>Data</MenuItem>
            <MenuItem value={projectWorkType.TechnicalWriting}>Technical Writing</MenuItem>
          </Select>
        </FormControl>
        <SwitchToggle
          isChecked={showTechnologies}
          onChange={handleChangeShowTechnologies}
          name="showTechnologies"
          label="Show Technologies"
        />
      </div>
      {/* {Object.values(TechStack).map((tech) => {
        return <Chip className={classes.chip} label={tech} onClick={() => {}} variant="outlined" />;
      })} */}
      <div className={classes.projectsContainer}>
        {filteredProjects.map((project: IProject) => {
          return (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              githubRepo={project.githubRepo}
              website={project.website}
              technologies={project.technologies}
              showTechnologies={showTechnologies}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

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
    projectsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      justifyItems: 'center',
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
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
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
      <Box marginTop={3} marginBottom={3}>
        <Typography>
          I am a web developer with experience building websites and web applications. I enjoy
          working across the stack from front to back. I primarily use React, TypeScript, Python,
          Node, HTML, CSS, and JavaScript. But, I am a motivated, self-starter who is passionate
          about learning and investigating new, cutting-edge technologies. I also have a curiosity
          towards data engineering. Specifically, I am interested in collecting, managing, and
          transforming data into charts and other visualizations to tell stories.
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
          </Select>
        </FormControl>
        <SwitchToggle
          isChecked={showTechnologies}
          onChange={handleChangeShowTechnologies}
          name="showTechnologies"
          label="Show Technologies"
        />
      </div>
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

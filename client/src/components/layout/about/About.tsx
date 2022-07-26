import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import profileImage from '../../../images/profile.jpg';
import { TimelineView } from '../../timeline-view/TimelineView';
import { experiences } from '../../../data/experieces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body: {
      lineHeight: 1.5,
    },
    avatar: {
      width: 160,
      height: 160,
      marginBottom: 30,
      border: `4px solid ${theme.palette.secondary.main}`,
    },
    bio: {
      backgroundColor: theme.palette.secondary.dark,
      border: `3px solid ${theme.palette.secondary.main}`,
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);

export const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Box p={5} className={classes.bio}>
        <Avatar alt="Phil Stubbs" src={profileImage} className={classes.avatar} />
        <Typography variant="h4" className={classes.title}>
          Hello there, I&apos;m phil
        </Typography>
        <Box m={3} textAlign="center">
          <Typography variant="subtitle1" className={classes.body}>
            web development | technical writing | data engineering
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center">
        <TimelineView timelineItems={experiences} />
      </Box>
    </div>
  );
};

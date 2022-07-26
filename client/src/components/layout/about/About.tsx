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
      border: `4px solid ${theme.palette.primary.main}`,
    },
    bio: {
      gap: theme.spacing(3),

      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
  })
);

export const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Box p={2} display="flex" alignItems="center" justifyContent="center" className={classes.bio}>
        <div>
          <Avatar alt="Phil Stubbs" src={profileImage} className={classes.avatar} />
        </div>
        <div>
          <Typography variant="h4" className={classes.title}>
            Hello there, I&apos;m phil
          </Typography>
          <Box marginTop={2} textAlign="center">
            <Typography variant="subtitle1" className={classes.body}>
              web development | technical writing | data engineering
            </Typography>
          </Box>
        </div>
      </Box>
      <Box textAlign="center">
        <TimelineView timelineItems={experiences} />
      </Box>
    </div>
  );
};

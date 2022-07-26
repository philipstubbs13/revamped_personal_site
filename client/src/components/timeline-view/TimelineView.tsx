import { makeStyles, Theme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Experience } from '../../data/experieces';
import { TimelineViewItem } from './timeline-view-item/TimelineViewItem';

const useStyles = makeStyles((theme: Theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.secondary.dark,
  },
  bold: {
    fontWeight: 'bold',
  },
}));

export interface IProps {
  timelineItems: Experience[];
}

export const TimelineView = (props: IProps) => {
  const classes = useStyles();
  const { timelineItems } = props;

  return (
    <Timeline align="alternate">
      <Box m={3}>
        <Typography variant="h6" className={classes.bold}>
          Education and Experiences
        </Typography>
        <Typography>Here is a timeline of where I have been and what I have done.</Typography>
      </Box>
      {timelineItems.map((timelineItem: Experience, index) => {
        return (
          <TimelineViewItem key={`${timelineItem.title}-${index}`} timelineItem={timelineItem} />
        );
      })}
    </Timeline>
  );
};

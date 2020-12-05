import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Experience } from '../../../data/experieces';
import { TimelineViewTooltip } from '../timeline-view-tooltip/TimelineViewTooltip';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '6px 16px',
    border: `2px solid ${theme.palette.secondary.dark}`,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  bold: {
    fontWeight: 'bold',
  },
  muted: {
    opacity: 0.5,
  },
}));

export interface IProps {
  timelineItem: Experience;
}

export const TimelineViewItem = (props: IProps) => {
  const {
    timelineItem: { start, end, title, avatar, description, details },
  } = props;
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2">
          {start} - {end || 'Present'}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <Avatar alt={title} src={avatar} className={classes.avatar} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="subtitle1" className={classes.bold}>
            {title}{' '}
            <TimelineViewTooltip title={title} description={description} details={details} />
          </Typography>
          {description && (
            <Typography variant="body2" className={classes.muted}>
              {description}
            </Typography>
          )}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import HelpOutline from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles(() => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 400,
    fontSize: 11,
    border: '1px solid #dadde9',
    padding: '10px 10px 20px 10px',
  },
  listItem: {
    listStyleType: 'none',
    paddingTop: 8,
  },
}));

export interface IProps {
  details: string[];
  title: string;
  description: string;
}

export const TimelineViewTooltip = (props: IProps) => {
  const { details, title, description } = props;
  const classes = useStyles();

  return (
    <Tooltip
      title={
        <div className={classes.tooltip}>
          <Typography variant="subtitle1">
            {title} - {description}
          </Typography>
          {details.map((detail, index) => {
            return (
              <li className={classes.listItem} key={index}>
                {detail}
              </li>
            );
          })}
        </div>
      }
    >
      <HelpOutline fontSize="small" color="primary" />
    </Tooltip>
  );
};

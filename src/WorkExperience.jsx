import React from "react";
import { Typography } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import TvIcon from "@material-ui/icons/Tv";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CodeIcon from "@material-ui/icons/Code";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            July 2018 - Current
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <TvIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Sky
            </Typography>
            <Typography>
              Developing web applications across the Sky estate with a focus on
              sky.com/shop/mobile.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            July 2017 - July 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HeadsetMicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              InspHire
            </Typography>
            <Typography>
              Providing support for inspHire&apos;s corporate edition of hire
              rental software to the construction industry.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            July 2015 - July 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              IBM
            </Typography>
            <Typography>
              Industry placement as part of the Level 3 Hybrid Integration team.
              The role was to develop and maintain internal tooling using Java,
              JavaScript, HTML and CSS.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export const WorkExperience = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Typography
        variant="h5"
        component="h4"
        marginTop="20px"
        color="black"
        style={{ textAlign: "center" }}
      >
        WORK EXPERIENCE
      </Typography>
      <CustomizedTimeline />
    </div>
  );
};

import { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Person from '@material-ui/icons/Person';
import Email from '@material-ui/icons/Email';
import Create from '@material-ui/icons/Create';
import { theme } from '../../theme/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
      color: theme.palette.primary.main,
    },
    stepLabel: {
      color: `${theme.palette.primary.main} !important`,
    },
  }),
);

function getSteps() {
  return ['name', 'email', 'message'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <TextField
          id="name-input"
          label="Fill in with your name"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" style={{ color: theme.palette.primary.main }}>
                <Person />
              </InputAdornment>
            )
          }}
        />
      )
    case 1:
      return (
        <TextField
          id="email-input"
          label="Now your email address"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" style={{ color: theme.palette.primary.main }}>
                <Email />
              </InputAdornment>
            )
          }}
        />
      )
    case 2:
      return (
        <TextField
          id="message-input"
          label="Now write your awesome message :)"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" style={{ color: theme.palette.primary.main }}>
                <Create />
              </InputAdornment>
            )
          }}
        />
      )
    default:
      return 'Unknown step';
  }
}

export const FormStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const steps = getSteps();

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                classes={{
                  label: classes.stepLabel
                }}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - thank you for your message. <br /> I'll get back to you as soon as I can.
            </Typography>
            <Button onClick={handleReset} className={classes.button} color="secondary" variant="contained">
              Reset
            </Button>
          </div>
        ) : (
            <div>
              <div className={classes.instructions}>
                {getStepContent(activeStep)}
              </div>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" color="secondary" className={classes.button}>
                  Back
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
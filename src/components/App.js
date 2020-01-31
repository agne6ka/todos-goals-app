import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import Todos from "./Todos";
import Goals from "./Goals";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  text: {
    textAlign: 'center',
    marginBottom: 20
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.text}>
          <Typography variant="h4" component="h2">
            Organize better by adding todos&nbsp;and&nbsp;goals.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Todos/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Goals/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

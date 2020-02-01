import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from "./List";
import {connect} from "react-redux";

const useStyles = makeStyles(() => ({
  form: {
    '& > *': {
      width: '100%',
    },
  },
  input: {
    margin: 'auto',
    textAlign: 'center',
  }
}));

function Goals (props) {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          id="filled-basic"
          label="Add goal"
          variant="filled"
        />
      </form>
      <List
        items={props.goals}
      />
    </div>
  );
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)

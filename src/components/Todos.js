import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from "./List";

const useStyles = makeStyles(() => ({
  form: {
    '& > *': {
      width: '100%',
    },
  }
}));

const Todos = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="filled-basic" label="Add todo" variant="filled" />
      </form>
      <List/>
    </div>
  );
};

export default Todos;

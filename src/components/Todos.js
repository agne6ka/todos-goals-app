import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import List from "./List";

const useStyles = makeStyles(() => ({
  form: {
    '& > *': {
      width: '100%',
    },
  }
}));

const Todos = (props) => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Add todo"
          variant="filled"
        />
      </form>
      <List
        items={props.todos}
      />
    </div>
  );
};

export default connect((state) => ({
  todos: state.todos
}))(Todos)

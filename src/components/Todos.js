import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import List from "./List";
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggleTodo
} from "../actions/todos";

const useStyles = makeStyles(() => ({
  form: {
    "& > *": {
      width: "100%"
    }
  }
}));

const Todos = props => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handleChange = event => setText(event.target.value);
  const addItem = e => {
    e.preventDefault();

    props.dispatch(handleAddTodo(text, () => setText("")));
  };
  const removeItem = todo => {
    props.dispatch(handleRemoveTodo(todo));
  };
  const toggleItem = id => {
    props.dispatch(handleToggleTodo(id));
  };

  return (
    <div>
      <form
        onSubmit={addItem}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Add todo"
          variant="filled"
          value={text}
          onChange={handleChange}
        />
      </form>
      <List items={props.todos} remove={removeItem} toggle={toggleItem} />
    </div>
  );
};

export default connect(state => ({
  todos: state.todos
}))(Todos);

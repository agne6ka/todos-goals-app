import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import List from "./List";
import { connect } from "react-redux";
import {
  handleAddGoal,
  handleRemoveGoal,
  handleToggleGoal
} from "../actions/goals";

const useStyles = makeStyles(() => ({
  form: {
    "& > *": {
      width: "100%"
    }
  },
  input: {
    margin: "auto",
    textAlign: "center"
  }
}));

const Goals = props => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handleChange = event => setText(event.target.value);
  const addItem = e => {
    e.preventDefault();

    props.dispatch(handleAddGoal(text, () => setText("")));
  };
  const removeItem = goal => {
    props.dispatch(handleRemoveGoal(goal));
  };
  const toggleItem = goal => {
    props.dispatch(handleToggleGoal(goal));
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
          className={classes.input}
          id="filled-basic"
          label="Add goal"
          variant="filled"
          value={text}
          onChange={handleChange}
        />
      </form>
      <List items={props.goals} remove={removeItem} toggle={toggleItem} />
    </div>
  );
};

export default connect(state => ({
  goals: state.goals
}))(Goals);

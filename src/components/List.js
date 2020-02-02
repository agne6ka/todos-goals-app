import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10
  },
  form: {
    display: "block"
  }
}));

const List = props => {
  const classes = useStyles();
  const checkProps = () =>
    Object.entries(props).length !== 0 && props.constructor === Object;

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2">
        List:
      </Typography>
      {checkProps() &&
        props.items.map(item => (
          <FormControl
            key={item.id}
            className={classes.form}
            component="fieldset"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.complete}
                  onChange={() => props.toggle(item.id)}
                  value={item.name}
                  color="primary"
                />
              }
              label={item.name}
            />
            <IconButton
              onClick={() => {
                props.remove(item.id);
              }}
              aria-label="delete"
              className={classes.margin}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </FormControl>
        ))}
    </div>
  );
};

export default List;

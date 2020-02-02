import { ADD_GOAL, REMOVE_GOAL, TOGGLE_GOAL } from "../actions/goals";
import { RECEIVE_DATA } from "../actions/initial";

export default function goals(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.goals;
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    case TOGGLE_GOAL:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

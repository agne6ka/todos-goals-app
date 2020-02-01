import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL';

const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    goal
  }
};

export const handleAddGoal = (name, callback) => {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal));
        callback();
      })
      .catch(() => {
        alert('There was an error')
      })
  }
};
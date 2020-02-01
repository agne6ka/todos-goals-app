const logger = (store) => (next) => (action) => {
  console.log('Action type: ', action.type);
  console.log('Action: ', action);
  const result = next(action);
  console.log('State: ', store.getState());
  return result;
};

export default logger
const createStore = reducer => {
  let subscribed = null;
  let state = reducer(undefined, {});
  return {
    getState: _ => state,
    subscribe: fn => subscribed = fn,
    dispatch: action => {
      state = reducer(state, action);
      subscribed();
    }
  };
};
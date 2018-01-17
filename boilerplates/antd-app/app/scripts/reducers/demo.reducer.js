import { DEMO } from '../actions/demo.action';

const initialState = {
  demoData: {},
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEMO:
      return Object.assign({}, state, {
        demoData: action.data,
      });
    default:
      return state;
  }
};

export default demoReducer;

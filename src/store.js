import { createStore } from "redux";

const INC = "INC";
const DEC = "DEC";

const reducer = (state = { counter: 0 }, action) => {
  // Synchronous Function
  // We should not mutate the original state
  switch (action.type) {
    case INC:
      return { counter: state.counter + 1 };
    case DEC:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

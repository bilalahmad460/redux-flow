import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count - 1 };
  } else if (action.type === "addition") {
    return { count: state.count + Number(action.payload) };
  }
  return state;
};

// const reducer = (state = { count1: 2 }, action) => {
//     if (action.type === "increment") {
//       return { count1: state.count1 + 1 };
//     }
//     return state;
//   };

const myStore = createStore(reducer);

//useSelector
//myStore.subscribe(subceber)
//useDispatch()
//myStore.dispatch("")
export default myStore;

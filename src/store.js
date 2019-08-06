import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: '',
  img: "",
  mortgage: '',
  rent: ''
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";
export const RETURN_TO_STATE ='RETURN_TO_STATE'

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STEP_ONE:
      return { ...state, ...payload };
    case STEP_TWO:
      return { ...state, ...payload };
    case STEP_THREE:
      return { ...state, ...payload };
    case RETURN_TO_STATE:
      return { initialState };
    default:
      return state;
  }
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

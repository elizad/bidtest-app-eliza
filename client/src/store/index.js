import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware);
};

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, bindMiddleware([thunk]));
}

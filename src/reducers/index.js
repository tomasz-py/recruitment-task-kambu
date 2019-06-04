import { combineReducers } from "redux";
import euroReducer from "./euroReducer";
import transactionReducer from "./transactionReducer";

const reducers = combineReducers({
  euroRate: euroReducer,
  transactions: transactionReducer
});

export default reducers;

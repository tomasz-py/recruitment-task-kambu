import * as types from "../types";

const initialState = [{ name: "First test transation", amount: 100.21 }];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return [...state, action.payload];

    case types.REMOVE_TRANSACTION:
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;

    default:
      return state;
  }
};

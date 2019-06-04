import * as types from "../types";

const euroRate = 4.28;

export default (state = euroRate, action) => {
  switch (action.type) {
    case types.UPDATE_RATE:
      return { ...state, euroRate: action.payload };

    default:
      return state;
  }
};

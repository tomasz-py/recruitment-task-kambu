import * as types from "../types";

export const addTransaction = payload => ({
  type: types.ADD_TRANSACTION,
  payload: payload
});

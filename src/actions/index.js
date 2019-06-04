import * as types from "../types";

export const addTransaction = payload => ({
  type: types.ADD_TRANSACTION,
  payload: payload
});

export const removeTransaction = payload => ({
  type: types.REMOVE_TRANSACTION,
  payload: payload
});

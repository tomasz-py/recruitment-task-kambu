import * as actions from "../index";
import * as types from "../../types";

describe("actions: add transaction", () => {
  it("should create an action to add transaction", () => {
    const payload = { name: "test", amound: 1.12 };

    const expectedAction = {
      type: types.ADD_TRANSACTION,
      payload: payload
    };
    expect(actions.addTransaction(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to remove transaction", () => {
    const payload = 0;

    const expectedAction = {
      type: types.REMOVE_TRANSACTION,
      payload: payload
    };
    expect(actions.removeTransaction(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to update rate", () => {
    const payload = 1.12;

    const expectedAction = {
      type: types.UPDATE_RATE,
      payload: payload
    };
    expect(actions.updateRate(payload)).toEqual(expectedAction);
  });
});

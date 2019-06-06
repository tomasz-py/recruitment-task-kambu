import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTransaction } from "../../actions";

const AddTransaction = props => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [errName, setErrName] = useState(false);
  const [errAmount, setErrAmount] = useState(false);

  const nameValidation = () => {
    if (name.length > 0) {
      return true;
    }
    setErrName(true);
    return false;
  };

  const amountValidation = () => {
    if (amount > 0) {
      return true;
    }
    setErrAmount(true);
    return false;
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const nameValid = nameValidation();
    const amountValid = amountValidation();

    if (nameValid && amountValid) {
      props.addTransaction({ name, amount });
      clearState();
      return true;
    }
    return false;
  };

  const clearState = () => {
    setAmount("");
    setName("");
    setErrName(false);
    setErrAmount(false);
  };

  const onAmountChange = e => {
    if (errAmount) setErrAmount(false);
    let value = e.target.value;
    if (value.length === 0) {
      setAmount(value);
      return;
    }
    value = parseFloat(value);

    if (value > 9999999.99) {
      setAmount(9999999.99);
      return;
    } else if (value < 0) {
      setAmount("");
      return;
    }

    if (value > 0) {
      value = value.toFixed(2);
      value = parseFloat(value);
      setAmount(value);
      return;
    }
    return;
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="ui form"
      style={{ marginTop: "10px" }}
    >
      <div className="fields">
        <div className="eight wide field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Transaction name"
            onChange={e => {
              setName(e.target.value);
              if (errName) setErrName(false);
            }}
            value={name}
          />
          {errName ? (
            <div className="ui pointing red basic label">
              Name can't be blank!
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className="three wide field">
          <label>Amount (EUR)</label>
          <input
            type="number"
            step="0.01"
            placeholder="1,00 - 9999999,99"
            onChange={onAmountChange}
            value={amount}
          />
          <div>
            {errAmount ? (
              <div className="ui pointing red basic label">
                Amount can't be blank!
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      <button className="ui primary button" type="submit">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  euroRate: state.euroRate,
  transactions: state.transactions
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTransaction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransaction);

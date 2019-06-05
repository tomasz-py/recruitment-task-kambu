import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTransaction } from "../../actions";
import { countDecimals } from "../../helpers";

const AddTransaction = props => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1.0);
  const [err, setErr] = useState("");

  const onFormSubmit = event => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      setErr("");
      props.addTransaction({ name, amount });
      clearState();
      return;
    }
    return;
  };

  const clearState = () => {
    setAmount(1);
    setName("");
  };

  const validate = () => {
    let decimalsLength = countDecimals(amount);

    return name.length > 0 && decimalsLength < 3 ? true : setErr(true);
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
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="three wide field">
          <label>Amount (EUR)</label>
          <input
            type="number"
            step="0.01"
            placeholder="1,00 - 9999999,00"
            onChange={e =>
              e.target.value.length > 0
                ? setAmount(parseFloat(e.target.value))
                : setAmount(e.target.value)
            }
            value={amount}
            required
            min="1"
            max="9999999"
          />
          <div>
            {err ? (
              <div className="ui pointing red basic label">
                Only two digits after comma!
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

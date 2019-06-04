import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTransaction } from "../../actions";

const AddTransaction = props => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);

  const onFormSubmit = event => {
    event.preventDefault();
    props.addTransaction({ name, amount });
    clearState();
  };

  const clearState = () => {
    setAmount(1);
    setName("");
  };

  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="fields">
        <div className="eight wide field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Transaction name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="three wide field">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            placeholder=""
            onChange={e => setAmount(e.target.value)}
            value={amount}
          />
        </div>
      </div>

      <button className="ui button">Submit</button>
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

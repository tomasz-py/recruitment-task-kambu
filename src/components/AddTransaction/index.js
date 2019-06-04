import React, { useState } from "react";
import { connect } from "react-redux";

const AddTransaction = props => {
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);

  const onFormSubmit = event => {
    event.preventDefault();
    console.log(name, rate);
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
          />
        </div>
        <div className="three wide field">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            placeholder=""
            onChange={e => setRate(e.target.value)}
          />
        </div>
      </div>

      <button className="ui button">Submit</button>
    </form>
  );
};

const mapStateToProps = state => ({
  euroRate: state.euroRate
});

export default connect(mapStateToProps)(AddTransaction);

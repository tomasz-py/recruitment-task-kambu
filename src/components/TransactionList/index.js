import React from "react";
import { connect } from "react-redux";
import Transaction from "../Transaction";

const Transactions = props => {
  return (
    <table className="ui fixed selectable table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount (EUR)</th>
          <th>Amount (PLN)</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <Transaction />
      </tbody>
      <tfoot>
        <tr>
          <th>Transactions: {props.transactions.length}</th>
          <th />
          <th />
          <th />
        </tr>
      </tfoot>
    </table>
  );
};

const mapStateToProps = state => ({
  euroRate: state.euroRate,
  transactions: state.transactions
});

export default connect(mapStateToProps)(Transactions);

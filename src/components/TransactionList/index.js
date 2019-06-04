import React from "react";
import { connect } from "react-redux";
import Transaction from "../Transaction";
import TransactionBest from "../TransactionBest";

const Transactions = props => {
  return (
    <div className="ui grid" style={{ marginTop: "30px" }}>
      <div className="ten wide column">
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
      </div>
      <div className="four wide column">
        <TransactionBest />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  euroRate: state.euroRate,
  transactions: state.transactions
});

export default connect(mapStateToProps)(Transactions);

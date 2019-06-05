import React from "react";
import { connect } from "react-redux";
import Transaction from "../Transaction";
import TransactionBest from "../TransactionBest";
import { roundToTwo, convertEuroToPLN } from "../../helpers";

const Transactions = props => {
  // const { amount } = props.transactions;
  let temp = props.transactions.map(transaction => {
    return transaction.amount;
  });
  let sumEUR = temp.reduce((partialSum, a) => partialSum + a, 0);

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
              <th>Total: {roundToTwo(sumEUR)} EUR</th>
              <th>
                Total: {roundToTwo(convertEuroToPLN(sumEUR, props.euroRate))}{" "}
                PLN
              </th>
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

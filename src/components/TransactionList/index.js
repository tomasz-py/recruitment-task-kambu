import React from "react";
import { connect } from "react-redux";
import Transaction from "../Transaction";
import TransactionBest from "../TransactionBest";
import { roundToTwo } from "../../helpers";

const Transactions = props => {
  const { transactions } = props;

  const temp = transactions.map(transaction => {
    return transaction.amount;
  });
  const sumEUR = temp.reduce((partialSum, a) => partialSum + a, 0);

  const tempPLN = transactions.map(transaction => {
    return roundToTwo(transaction.amount * props.euroRate);
  });

  const sumPLN = tempPLN.reduce((partialSum, a) => partialSum + a, 0);

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
              <th>Transactions: {transactions.length}</th>
              <th>Total: {roundToTwo(sumEUR)} EUR</th>
              <th>Total: {roundToTwo(sumPLN)} PLN</th>
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

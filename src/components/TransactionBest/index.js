import React from "react";
import { connect } from "react-redux";
import { roundToTwo } from "../../helpers";

const TransactionBest = props => {
  const { transactions, euroRate } = props;

  const findHighest = () => {
    let tmp = transactions.map(function(o) {
      return o.amount;
    });
    let maxValue = Math.max.apply(Math, tmp);
    let index = tmp.indexOf(maxValue + "");

    if (index === -1) {
      return 0;
    }
    return index;
  };

  const renderHelper = () => {
    let index = findHighest();

    if (transactions.length > 0 && index > -1) {
      let amountPL = transactions[index].amount * euroRate;
      amountPL = roundToTwo(amountPL);

      return (
        <div className="ui message">
          <div className="header">Highest transaction</div>
          <p>Name: {transactions[index].name}</p>
          <p>EUR: {transactions[index].amount}</p>
          <p>PLN: {amountPL}</p>
        </div>
      );
    } else {
      return (
        <div className="ui message">
          <div className="header">Highest transaction:</div>
          <p>There is no transactions :(</p>
        </div>
      );
    }

    // return (
    //   <h2 classNameName="ui header">
    //     <i classNameName="plug icon" />
    //     <div classNameName="content">{props.transactions[0].name}</div>
    //   </h2>
    // );
  };

  return renderHelper();
};

const mapStateToProps = state => ({
  transactions: state.transactions,
  euroRate: state.euroRate
});

export default connect(mapStateToProps)(TransactionBest);

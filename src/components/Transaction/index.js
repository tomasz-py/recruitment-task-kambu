import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeTransaction } from "../../actions";
import { roundToTwo, convertEuroToPLN } from "../../helpers";

const Transaction = props => {
  const removeTransaction = index => {
    props.removeTransaction(index);
  };

  const renderList = () => {
    return props.transactions.map((transaction, index) => {
      let amountPL = convertEuroToPLN(transaction.amount, props.euroRate);
      amountPL = roundToTwo(amountPL);

      return (
        <tr key={index}>
          <td data-label="Name">{transaction.name}</td>
          <td data-label="AmountEUR">{transaction.amount} EUR</td>
          <td data-label="AmountPLN">{amountPL} PLN</td>
          <td data-label="delete" className="right aligned">
            <button
              className="ui negative button"
              onClick={() => removeTransaction(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return renderList();
};

const mapStateToProps = state => ({
  euroRate: state.euroRate,
  transactions: state.transactions
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeTransaction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction);

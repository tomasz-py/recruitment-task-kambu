import React from "react";
import { connect } from "react-redux";
import Transaction from "../Transaction";

// selectable fixed single line table

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

/* <table class="ui celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Jill</td>
      <td data-label="Age">26</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Elyse</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Designer</td>
    </tr>
  </tbody>
</table>; */

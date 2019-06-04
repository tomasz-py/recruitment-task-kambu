import React from "react";
import { connect } from "react-redux";

const ExchangeRate = props => {
  return <h2>1 EURO = {props.euroRate} PLN</h2>;
};

const mapStateToProps = state => ({
  euroRate: state.euroRate
});

export default connect(mapStateToProps)(ExchangeRate);

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateRate } from "../../actions";

const ExchangeRate = props => {
  const renderHelper = () => {
    return (
      <form className="ui form">
        <div className="ui labeled input">
          <div className="ui label">1 EURO =</div>
          <input
            type="number"
            placeholder="4,85"
            step="0.01"
            onChange={e => props.updateRate(e.target.value)}
            value={props.euroRate}
          />
          <div className="ui label">PLN</div>
        </div>
      </form>
    );
  };

  return renderHelper();
};

const mapStateToProps = state => ({
  euroRate: state.euroRate
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateRate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRate);

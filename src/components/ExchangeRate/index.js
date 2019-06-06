import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateRate } from "../../actions";

const ExchangeRate = props => {
  const renderHelper = () => {
    const { updateRate } = props;

    const onChangeHandler = e => {
      let value = e.target.value;

      if (value.length < 1) {
        return updateRate(value);
      }

      value = parseFloat(value);

      if (value < 0) {
        return updateRate("");
      } else if (value > 100) {
        return updateRate(100.0);
      }

      value = value.toFixed(4);
      value = parseFloat(value);
      return updateRate(value);
    };

    return (
      <div className="ui labeled input">
        <div className="ui label">1 EURO =</div>
        <input
          type="number"
          placeholder="0,00 - 100,00"
          min="0"
          max="100,0000"
          step="0.0001"
          onChange={onChangeHandler}
          value={props.euroRate}
        />
        <div className="ui label">PLN</div>
      </div>
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

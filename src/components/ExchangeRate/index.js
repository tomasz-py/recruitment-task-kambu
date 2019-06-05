import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateRate } from "../../actions";
import { countDecimals } from "../../helpers";

const ExchangeRate = props => {
  const renderHelper = () => {
    let euroRateDecimal = countDecimals(props.euroRate);

    let stepMaker = () => {
      let step = "0";

      if (euroRateDecimal > 0) {
        step = step + ".";
        for (let i = 0; i < euroRateDecimal; i++) {
          step = step + "0";
        }
      }

      return step.replace(/.$/, "1");
    };
    let step = stepMaker();

    const onChangeHandler = e => {
      if (e.target.value < 0) {
        return props.updateRate(0);
      } else if (e.target.value > 100) {
        return props.updateRate(100);
      }
      return props.updateRate(e.target.value);
    };

    return (
      <div className="ui labeled input">
        <div className="ui label">1 EURO =</div>
        <input
          type="number"
          placeholder="0,00 - 100,00"
          min="0"
          max="100,0000000"
          step={step}
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

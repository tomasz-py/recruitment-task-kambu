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

    return (
      <div className="ui labeled input">
        <div className="ui label">1 EURO =</div>
        <input
          type="number"
          placeholder="4,85"
          step={step}
          onChange={e => props.updateRate(e.target.value)}
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

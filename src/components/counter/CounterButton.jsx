import { PropTypes } from "prop-types";
function CounterButton({ by, increseCountBy, decreseCountBy }) {
  return (
    <div className="counter">
      <div>
        <button
          style={{ margin: "5px", backgroundColor: "pink", color: "black" }}
          className="counter-btn"
          onClick={() => increseCountBy(by)}
        >
          +{by}
        </button>
        <button
          onClick={() => decreseCountBy(by)}
          style={{ margin: "5px", backgroundColor: "black", color: "pink" }}
        >
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};
CounterButton.defaultProps = {
  by: 1,
};

export default CounterButton;

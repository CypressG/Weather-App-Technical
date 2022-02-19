import "./style.scss";
import PropTypes from "prop-types";

const ConditionsItem = (props) => {
  const { name, value, measurement, isDouble } = props;
  return (
    <div className="card">
      <div className="item-1">{name}</div>
      <div className="item-2">
        {value} {measurement}
      </div>
    </div>
  );
};
ConditionsItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  measurement: PropTypes.string,
  isDouble: PropTypes.bool,
};
ConditionsItem.defaultProps = {
  name: "N/a",
  value: "N/a",
  measurement: "N/a",
  isDouble: false,
};
export default ConditionsItem;

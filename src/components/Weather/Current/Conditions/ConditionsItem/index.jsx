import "./style.scss";
import PropTypes from "prop-types";

const ConditionsItem = (props) => {
  const { name, value, units } = props;
  return (
    <div className="card">
      <div className="item-1">{name}</div>
      <div className="item-2">
        <div>{value}</div>
        <div> {units}</div>
      </div>
    </div>
  );
};
ConditionsItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  units: PropTypes.string,
};
ConditionsItem.defaultProps = {
  name: "N/a",
  value: 0,
  units: "N/a",
};
export default ConditionsItem;

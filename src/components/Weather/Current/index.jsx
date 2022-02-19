import "./style.scss";
import Now from "./Now";
import ConditionsList from "./Conditions/ConditionsList";

const Current = () => (
  // const test = "Current";
  <div className="current">
    <Now temperature="33" feelsLikeTemp="455" condition="cloudy" />
    <ConditionsList />
  </div>
);
export default Current;

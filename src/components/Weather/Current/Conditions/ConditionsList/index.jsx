import ConditionsItem from "../ConditionsItem";
import "./style.scss";

const ConditionsList = () => (
  <div className="conditions-list">
    <ConditionsItem name="Wind Speed" measurement="m/s" value="10" />
    <ConditionsItem name="Wind Speed" measurement="m/s" value="10" />
    <ConditionsItem name="Wind Speed" measurement="m/s" value="10" />
    <ConditionsItem name="Wind Speed" measurement="m/s" value="10" />
    <ConditionsItem name="Wind Speed" measurement="m/s" value="10" />
  </div>
);
export default ConditionsList;

import "./style.scss";
import Now from "./Now";
import ConditionsList from "./Conditions/ConditionsList";

const Current = (locationWeatherData) => (
  <div className="current">
    <Now locationWeatherData={locationWeatherData} />
    <ConditionsList locationWeatherData={locationWeatherData} />
  </div>
);

export default Current;

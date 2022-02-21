import ConditionsItem from "../ConditionsItem";
import "./style.scss";
import getSpecificEntries from "../../../../../utils/scripts/objectManipulation.mjs";

const desiredValues = [
  ["relHumidity", "Real Humidity", "HA"],
  ["windSpeed", "Wind Speed", "m/s"],
  ["windDir", "Wind Direction", "m/s"],
  ["uvIndex", "UV index", "UVI"],
];

const ConditionsList = (locationWeatherData) => {
  let { locationWeatherData: data } = locationWeatherData;
  data = getSpecificEntries(data.locationWeatherData, desiredValues);
  return (
    <div className="conditions-list">
      {data.map((item) => (
        <ConditionsItem
          key={item.id}
          name={item.name}
          value={item.value}
          units={item.units}
        />
      ))}
    </div>
  );
};
export default ConditionsList;

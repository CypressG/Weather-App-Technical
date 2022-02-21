/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import DailyCard from "./DailyCard";
import "./style.scss";

const Daily = ({ dailyWeatherData: data }) => (
  <div className="daily-card-container">
    {Object.prototype.hasOwnProperty.call(data, "forecast") &&
      data.forecast.map((item) => (
        <DailyCard key={item.date} dailyCardData={item} />
      ))}
  </div>
);
Daily.propTypes = {
  dailyWeatherData: { data: PropTypes.Object },
};
Daily.defaultProps = {
  dailyWeatherData: {
    data: {},
  },
};

export default Daily;

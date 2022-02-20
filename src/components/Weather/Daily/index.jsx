/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Daily = ({ dailyWeatherData: data }) => (
  <div>
    {Object.prototype.hasOwnProperty.call(data, "forecast") &&
      data.forecast.map((item) => <h1 key={item.date}>{item.date}</h1>)}
  </div>
);

export default Daily;

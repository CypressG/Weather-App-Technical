import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Current from "./Current";
import Headline from "../Headline";

import "./style.scss";
import Daily from "./Daily";

const Weather = () => {
  // Get the data of url tag
  const { locationId } = useParams();
  // Hooks
  const [locationWeatherData, setLocationWeatherData] = useState({});
  const [locationGeoData, setLocationGeoData] = useState({});
  const [dailyWeatherData, setDailyWeatherData] = useState({});
  // Requests to get the data
  const getLocationGeoData = () => {
    const options = {
      method: "GET",
      url: `https://foreca-weather.p.rapidapi.com/location/${locationId}`,
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "489000409fmshedfc99ee4b1f2c0p16696ejsn0edd126fc028",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setLocationGeoData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getLocationWeatherData = () => {
    const options = {
      method: "GET",
      url: `https://foreca-weather.p.rapidapi.com/current/${locationId}`,
      params: {
        alt: "0",
        tempunit: "C",
        windunit: "MS",
        tz: "Europe/London",
        lang: "en",
      },
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "489000409fmshedfc99ee4b1f2c0p16696ejsn0edd126fc028",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setLocationWeatherData(response.data.current);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getDailyWeatherData = () => {
    const options = {
      method: "GET",
      url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${locationId}`,
      params: {
        alt: "0",
        tempunit: "C",
        windunit: "MS",
        periods: "7",
        dataset: "standard",
      },
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "489000409fmshedfc99ee4b1f2c0p16696ejsn0edd126fc028",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setDailyWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // Execute requests
  useEffect(() => {
    getLocationGeoData();
    getLocationWeatherData();
    getDailyWeatherData();
  }, []);

  return (
    <div>
      <Headline text={`${locationGeoData.name}, ${locationGeoData.country}`} />
      <Current locationWeatherData={locationWeatherData} />
      <Headline text="Daily" />

      <Daily dailyWeatherData={dailyWeatherData} />
    </div>
  );
};
export default Weather;

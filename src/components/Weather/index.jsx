import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { IoArrowBackCircleSharp } from "react-icons/io5";

import Current from "./Current";
import Headline from "../Headline";
import "./style.scss";
import Daily from "./Daily";
import Logo from "../Logo";

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
      url: `https://${process.env.SERVER_ADDRESS}/location/geography/${locationId}`,
      headers: {},
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
      url: `https://${process.env.SERVER_ADDRESS}/${locationId}`,
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
      url: `https://${process.env.SERVER_ADDRESS}/${locationId}`,
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
    <div className="container">
      <div id="header-container">
        <Logo />
      </div>
      <div className="top-headline main-container">
        <Headline
          text={`${locationGeoData.name}, ${locationGeoData.country}`}
        />

        <div className="main-container">
          <Link to="/">
            <IoArrowBackCircleSharp size="4rem" color="#ffa73f" />
          </Link>
          <Headline text="Currently" />
          <Current locationWeatherData={locationWeatherData} />
          <Headline text="Daily" />

          <Daily dailyWeatherData={dailyWeatherData} />
        </div>
      </div>
    </div>
  );
};
export default Weather;

import "./style.scss";
import PropTypes from "prop-types";

const Now = (locationWeatherData) => {
  const {
    locationWeatherData: {
      locationWeatherData: { cloudiness, temperature, feelsLikeTemp },
    },
  } = locationWeatherData;
  return (
    <div className="now">
      <div className="top">
        <h1>{cloudiness}</h1>
      </div>
      <div className="middle">
        <h1>{temperature}</h1>

        <p>℃</p>
      </div>
      <div className="bottom">
        <div className="left-side">
          <div className="left-top">Feels Like: </div>
          <div className="left-bottom">{feelsLikeTemp}</div>
        </div>
        <div className="right-side" />
      </div>
    </div>
  );
};

Now.propTypes = {
  locationWeatherData: PropTypes.shape({
    cloudiness: PropTypes.string,
    temperature: PropTypes.number,
    feelsLikeTemp: PropTypes.number,
  }).isRequired,
};

export default Now;

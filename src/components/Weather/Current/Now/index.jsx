import "./style.scss";
import PropTypes from "prop-types";

const Now = (props) => {
  const { condition, temperature, feelsLike, feelsLikeTemp } = props;

  return (
    <div className="now">
      <div className="top">
        <h1>{condition}</h1>
      </div>
      <div className="middle">
        <h1>{temperature}</h1>

        <p>℃</p>
      </div>
      <div className="bottom">
        <div className="left-side">
          <div className="left-top">{feelsLike}</div>
          <div className="left-bottom">{feelsLikeTemp}</div>
        </div>
        <div className="right-side" />
      </div>
    </div>
  );
};

Now.propTypes = {
  condition: PropTypes.string,
  temperature: PropTypes.number,
  feelsLike: PropTypes.string,
  feelsLikeTemp: PropTypes.number,
};
Now.defaultProps = {
  condition: "N/a",
  temperature: 0,
  feelsLike: "Feels like",
  feelsLikeTemp: 0,
};
export default Now;

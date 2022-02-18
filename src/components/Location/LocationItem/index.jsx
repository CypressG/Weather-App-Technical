import "./style.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

const LocationItem = (props) => {
  const { topSize, bottomSize, topText, bottomText } = props;
  const Top = styled.h1`
    font-size: ${topSize};
    font-weight: 300;
  `;
  const Bottom = styled.h1`
    font-size: ${bottomSize};
    font-weight: 700;
  `;
  return (
    <div className="grid-item">
      <div className="top-text">
        <Top>{topText}</Top>
      </div>
      <div className="middle-text">
        <Bottom>{bottomText} </Bottom>
      </div>
      <button type="submit" className="bottom-button">
        Weather
      </button>
    </div>
  );
};
LocationItem.propTypes = {
  topSize: PropTypes.string,
  bottomSize: PropTypes.string,
  topText: PropTypes.string,
  bottomText: PropTypes.string,
};
LocationItem.defaultProps = {
  topSize: "1rem",
  bottomSize: "4rem",
  topText: "Lithuania",
  bottomText: "Vilnius",
};
export default LocationItem;

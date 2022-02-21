/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./style.scss";

const LocationItem = ({ location }) => {
  const { id, name, country } = location;

  const Top = styled.h1`
    font-size: "2rem";
    font-weight: 300;
  `;
  const Bottom = styled.h1`
    font-size: "3rem";
    font-weight: 700;
  `;
  return (
    <div className="grid-item">
      <div className="top-text">
        <Top>{name}</Top>
      </div>
      <div className="middle-text">
        <Bottom>{country} </Bottom>
      </div>

      <Link to={`/city/${id}`} className="bottom-button" role="button">
        <h1>Weather</h1>
      </Link>
    </div>
  );
};

LocationItem.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
};

export default LocationItem;

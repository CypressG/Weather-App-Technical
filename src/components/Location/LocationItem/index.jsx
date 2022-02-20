/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./style.scss";

const LocationItem = ({ location }) => {
  const { id, name, country } = location;
  //   {
  //     "id": 211000558,
  //     "name": "Kaunertaler Gletscher",
  //     "country": "Austria",
  //     "timezone": "Europe/Vienna",
  //     "adminArea": null,
  //     "lon": 12.199999809,
  //     "lat": 47.433334351
  // }
  // http://www.svetaine.com/
  // http://www.svetaine.com/city/211000558/
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
      <button type="submit" className="bottom-button" href="{id}">
        Weather
      </button>
      <Link to={`/city/${id}`}>Go to city {id}</Link>
    </div>
  );
};

LocationItem.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
};

export default LocationItem;

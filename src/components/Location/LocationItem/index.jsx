import "./style.scss";

const LocationItem = () => {
  const city = "Vilnius";
  return (
    <div className="grid-item">
      <div className="top-text center">
        <h3>Lithuania</h3>
      </div>
      <div className="bottom-text center">
        <h1>{city}</h1>
      </div>
    </div>
  );
};

export default LocationItem;

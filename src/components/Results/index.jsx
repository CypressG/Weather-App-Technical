import "./style.scss";
import Headline from "../Headline/index";
import LocationList from "../Location/LocationList/index";

const Results = () => (
  <div>
    <Headline size="50px" text="Results" />
    <div id="main-container">
      <LocationList />
    </div>
  </div>
);
export default Results;

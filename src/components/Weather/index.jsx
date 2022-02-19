import Headline from "../Headline";
import "./style.scss";
import Current from "./Current";
import Weekly from "./Weekly";

const Weather = (props) => (
  <div>
    <Headline text="Vilnius, Lithuania" size="2rem" />
    <div className="main-container">
      <Headline text="Current" align="left" />
      <Current />
      <Headline text="Weekly" align="left" />
      <Weekly />
    </div>
  </div>
);
export default Weather;

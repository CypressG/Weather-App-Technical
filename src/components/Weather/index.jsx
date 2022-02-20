import { useParams } from "react-router-dom";

import Headline from "../Headline";
import Current from "./Current";
import Weekly from "./Weekly";
import "./style.scss";
import Header from "../Header";

const Weather = () => {
  const { locationId } = useParams();
  return (
    <div>
      <Headline />
    </div>
  );
  // const test = "test";
  // return (
  //   <div>
  //     <Headline text="Vilnius, Lithuania" size="2rem" />
  //     <div className="main-container">
  //       <Headline text="Current" align="left" />
  //       <Current />
  //       <Headline text="Weekly" align="left" />
  //       <Weekly />
  //     </div>
  //   </div>
  // );
};
export default Weather;
